function loadMapImage(imageName) {
   let resultsMapImageElement = document.getElementById('results-map-image');
   let newImageElement = document.createElement('img');
   newImageElement.id = 'results-map-image';

   resultsMapImageElement.replaceWith(newImageElement);
   newImageElement.src = "assets/images" + '/' + imageName;
}

function selectDataPoint(source, dataId, imageName, selectedPointIndex, selectedTraceIndex) {
   if (source !== 'agGrid') {
       // Select the corresponding ag grid row
       gridOptions.api.forEachNode(function(node) {
           node.setSelected(node.data.dataId === dataId);
       });
       return;
   }

   if (source !== 'initial') {
       let traces = Array.from(resultsPlotElement.data, (value, index) => index);
       let selectedPoints = Array.from(traces, () => []);
       selectedPoints[selectedTraceIndex] = [selectedPointIndex];

       Plotly.restyle(
           resultsPlotElement,
           {'selectedpoints': selectedPoints},
           traces
       );
   }

   loadMapImage(imageName); // since plotly triggers this selection, only load map here
}

function plotlyOnSelection(data) {
   let selectedPoint = data.points[0];
   let dataId = selectedPoint.data.dataId[selectedPoint.pointIndex];
   let imageName = selectedPoint.data.image[selectedPoint.pointIndex];

   selectDataPoint('plotly', dataId, imageName, selectedPoint.pointIndex, selectedPoint.curveNumber);
}

function agGridOnRowSelected(event) {
   let node = event.node;
   if (! node.isSelected()) {
       return;
   }

   selectDataPoint('agGrid', node.data.dataId, node.data.MapImage, node.data.pointIndex, node.data.traceIndex);
   gridOptions.api.ensureIndexVisible(node.rowIndex);
}

// IAvH - Customizations - Start
function twoDecimals(toTransform){
   let transformed = toTransform;
   transformed.forEach((a) => {
      a["Carbón (Gt)"] = Number(a["Carbón (Gt)"]).toFixed(2);
      a["Biodiversidad (%)"] = Number(a["Biodiversidad (%)"]).toFixed(2);
      a["Costo de establecimiento (USD)"] = Number(a["Costo de establecimiento (USD)"]).toFixed(2);
      a["Costo total (USD)"] = Number(a["Costo total (USD)"]).toFixed(2);
      a["Peso Biodiversidad"] = Number(a["Peso Biodiversidad"]).toFixed(2);
      a["Costo de oportunidad (USD)"] = Number(a["Costo de oportunidad (USD)"]).toFixed(2);
      a["Peso Carbón"] = Number(a["Peso Carbón"]).toFixed(2);
   });
   return transformed;
  }
// IAvH - Customizations - End

// Plotly

let resultsPlotElement = document.getElementById('results-plot');
// let data = [];
let layout = {
   showlegend: false,
   hovermode: 'closest',
   xaxis: {
       title: "Carbón (Gt)",
   },
   yaxis: {
       title: "Biodiversidad (%)",
   },
   height: 250,
   margin: {
       l: 45,
       r: 25,
       b: 45,
       t: 25,
       pad: 4
   },
   legend: {
      autosize: true,
      orientation: 'h',
      xanchor: 'left',
      y: -0.5,
   },
};
let config = {
   autosize: true,
   displaylogo: false,
   modeBarButtonsToRemove: [
       'select2d',
       'lasso2d',
       'toggleSpikelines',
       'hoverClosestCartesian',
       'hoverCompareCartesian',
   ],
};
Plotly.newPlot(resultsPlotElement, data0, layout, config);
resultsPlotElement.on('plotly_click', plotlyOnSelection);

// AgGrid
let gridOptions = {
   columnDefs: [
       {"headerName":"Escenario","field":"Escenario", "headerTooltip":"Escenario", "width": 170, "minWidth": "50", "maxWidth": "170"},
       {"headerName":"Carbón (Gt)","field":"Carbón (Gt)", "headerTooltip":"Carbón (Gt)", "width": 100 },
       {"headerName":"Biodiversidad (%)","field":"Biodiversidad (%)", "headerTooltip":"Biodiversidad (%)", "width": 120 },
       {"headerName":"Costo de oportunidad (USD)","field":"Costo de oportunidad (USD)", "headerTooltip":"Costo de oportunidad (USD)", "width": 100 },
       {"headerName":"Costo de establecimiento (USD)","field":"Costo de establecimiento (USD)", "headerTooltip":"Costo de establecimiento (USD)", "width": 100 },
       {"headerName":"Costo total (USD)","field":"Costo total (USD)", "headerTooltip":"Costo total (USD)", "width": 110 },
       {"headerName":"Peso Carbón","field":"Peso Carbón", "headerTooltip":"Peso Carbón", "width": 100 },
       {"headerName":"Peso Biodiversidad","field":"Peso Biodiversidad", "headerTooltip":"Peso Biodiversidad", "width": 100 }],
   rowData: originalRowData0,
   rowSelection: 'single',
   onRowSelected: agGridOnRowSelected,
   enableBrowserTooltips: true,
};
let resultsGridDiv = document.querySelector('#results-grid');
new agGrid.Grid(resultsGridDiv, gridOptions);

// Select highlighted
selectDataPoint(
   'initial',
   45,
   "scen_tradeoffs_ce_arearestored_target_5_weight_6_v0.1_col_v14.png");
$('#export-to-csv-btn').click(() => gridOptions.api.exportDataAsCsv());

// IAvH - Customizations - Start
function changeTarget(targetSelected){
  let selectedData = [];
  let selectedRowData = [];
  if (targetSelected == '1'){
     selectedData = data1;
     selectedRowData = originalRowData1;
  } else if (targetSelected == '2'){
     selectedData = data2;
     selectedRowData = originalRowData2;
  } else if (targetSelected == '3'){
     selectedData = data3;
     selectedRowData = originalRowData3;
  } else if (targetSelected == '4'){
     selectedData = data4;
     selectedRowData = originalRowData4;
  } else if (targetSelected == '5'){
     selectedData = data5;
     selectedRowData = originalRowData5;
  } else if (targetSelected == '6'){
     selectedData = data6; 
     selectedRowData = originalRowData6;
  } else {
     selectedData = data0;
     selectedRowData = originalRowData0;
  }

   Plotly.newPlot(resultsPlotElement, selectedData, layout, config);
   resultsPlotElement.on('plotly_click', plotlyOnSelection);
   gridOptions.api.setRowData(twoDecimals(selectedRowData));
   selectDataPoint(
   'initial',
   0);
}
// IAvH - Customizations - End


