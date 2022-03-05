function loadMapImage(imageName) {
   let resultsMapImageElement = document.getElementById('results-map-image');
   let newImageElement = document.createElement('img');
   newImageElement.id = 'results-map-image';

   resultsMapImageElement.replaceWith(newImageElement);
   newImageElement.src = "assets/images" + '/' + imageName;
}

function selectDataPoint(source, dataId, imageName, selectedPointIndex, selectedTraceIndex) {
   console.log(source, dataId, imageName, selectedPointIndex, selectedTraceIndex);
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
      console.log(a);
   });
   return transformed;
  }

// Data used for graph
  let data0 = [
   {
     "name": "Costo-efectivo (Meta 1)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        0.299296938,
        0.319620265,
        0.331185818,
        0.34326737,
        0.352659481,
        0.35675999,
        0.358406047,
        0.359343072,
        0.359949967,
        0.365591317
     ],
     "y": [
        "17.8528737",
        "17.8621156",
        "17.8587384",
        "17.818467100000003",
        "17.5593466",
        "16.9872208",
        16.658651,
        "16.467480199999997",
        "16.0182969",
        "15.073952300000002"
     ],
     "image": [
        "scen_tradeoffs_ce_arearestored_target_1_weight_1_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_1_weight_2_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_1_weight_3_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_1_weight_4_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_1_weight_5_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_1_weight_6_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_1_weight_7_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_1_weight_8_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_1_weight_9_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_1_weight_10_v0.1_col_v14.png"
     ],
     "dataId": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
     ],
     "marker": {
        "color": [
           "#8A32F2",
           "#8E2EF1",
           "#902DF1",
           "#912CF1",
           "#932BF1",
           "#9429F1",
           "#9628F1",
           "#9727F0",
           "#9926F0",
           "#9F20F0"
        ]
     },
     "selectedpoints": [
        0
     ]
  },
   {
     "name": "Costo-efectivo (Meta 2)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        0.295882333,
        0.35360847,
        0.375083462,
        0.388171068,
        0.392831282,
        0.394751972,
        0.395956706,
        0.396625464,
        0.396699591,
        0.409411965
     ],
     "y": [
        "17.8231769",
        "17.835123199999998",
        "17.783619899999998",
        "17.5396833",
        "16.9395643",
        "16.6540826",
        16.3975367,
        "15.710458699999998",
        "15.501703899999999",
        "13.365011500000001"
     ],
     "image": [
        "scen_tradeoffs_ce_arearestored_target_2_weight_1_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_2_weight_2_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_2_weight_3_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_2_weight_4_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_2_weight_5_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_2_weight_6_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_2_weight_7_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_2_weight_8_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_2_weight_9_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_2_weight_10_v0.1_col_v14.png"
     ],
     "dataId": [
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19
     ],
     "marker": {
        "color": [
           "#6B4DF6",
           "#6E4AF5",
           "#7247F5",
           "#7544F4",
           "#7A40F4",
           "#7D3DF3",
           "#7F3BF3",
           "#8338F3",
           "#8437F3",
           "#8B31F2"
        ]
     },
     "selectedpoints": [
        null
     ]
  },
   {
     "name": "Costo-efectivo (Meta 3)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        0.594397752,
        0.648761441,
        0.673512898,
        0.69361751,
        0.705399553,
        0.70963726,
        0.711110599,
        0.711930925,
        0.71253369,
        0.717374775
     ],
     "y": [
        "17.9703694",
        "17.9917208",
        "18.0003492",
        "17.984416799999998",
        "17.8546056",
        "17.5237113",
        17.235398,
        "17.0698409",
        "16.7080554",
        "15.916026899999999"
     ],
     "image": [
        "scen_tradeoffs_ce_arearestored_target_3_weight_1_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_3_weight_2_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_3_weight_3_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_3_weight_4_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_3_weight_5_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_3_weight_6_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_3_weight_7_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_3_weight_8_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_3_weight_9_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_3_weight_10_v0.1_col_v14.png"
     ],
     "hex": [
        "#466DFA",
        "#4D66F9",
        "#5362F8",
        "#5A5CF8",
        "#5C59F7",
        "#6057F7",
        "#6254F7",
        "#6552F6",
        "#6651F6",
        "#6D4BF5"
     ],
     "dataId": [
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29
     ],
     "marker": {
        "color": [
           "#466DFA",
           "#4D66F9",
           "#5362F8",
           "#5A5CF8",
           "#5C59F7",
           "#6057F7",
           "#6254F7",
           "#6552F6",
           "#6651F6",
           "#6D4BF5"
        ]
     },
     "selectedpoints": [
        null
     ]
  },
   {
     "name": "Costo-efectivo (Meta 4)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        0.593016277,
        0.697767176,
        0.730699057,
        0.768101293,
        0.781071947,
        0.784797867,
        0.786418544,
        0.787232998,
        0.787836612,
        0.799189036
     ],
     "y": [
        "17.9468939",
        "17.953672",
        "17.9572468",
        "17.9126225",
        "17.774422100000002",
        "17.3969588",
        17.1076778,
        "16.9073603",
        "16.4664769",
        "15.4752131"
     ],
     "image": [
        "scen_tradeoffs_ce_arearestored_target_4_weight_1_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_4_weight_2_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_4_weight_3_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_4_weight_4_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_4_weight_5_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_4_weight_6_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_4_weight_7_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_4_weight_8_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_4_weight_9_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_4_weight_10_v0.1_col_v14.png"
     ],
     "hex": [
        "#1B98EB",
        "#238BFE",
        "#2986FD",
        "#2E82FD",
        "#337DFC",
        "#357BFC",
        "#3879FB",
        "#3978FB",
        "#3A77FB",
        "#3F73FB"
     ],
     "dataId": [
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39
     ],
     "marker": {
        "color": [
           "#1B98EB",
           "#238BFE",
           "#2986FD",
           "#2E82FD",
           "#337DFC",
           "#357BFC",
           "#3879FB",
           "#3978FB",
           "#3A77FB",
           "#3F73FB"
        ]
     },
     "selectedpoints": [
        null
     ]
  },
   {
     "name": "Costo-efectivo (Meta 5)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        1.18577733,
        1.319758244,
        1.353495106,
        1.371147231,
        1.378476261,
        1.380000913,
        1.380329625,
        1.380661621,
        1.381004927,
        1.384102624
     ],
     "y": [
        "18.025471399999997",
        "18.0334482",
        "18.032845299999998",
        "18.028166699999996",
        "17.9946933",
        "17.9113003",
        17.8253931,
        "17.7634312",
        "17.4868656",
        "16.8796812"
     ],
     "image": [
        "scen_tradeoffs_ce_arearestored_target_5_weight_1_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_5_weight_2_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_5_weight_3_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_5_weight_4_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_5_weight_5_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_5_weight_6_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_5_weight_7_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_5_weight_8_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_5_weight_9_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_5_weight_10_v0.1_col_v14.png"
     ],
     "hex": [
        "#0BD265",
        "#10C389",
        "#13B7A3",
        "#14B3AD",
        "#15B0B4",
        "#15ADBA",
        "#16ABBF",
        "#16A9C3",
        "#17A9C3",
        "#17A6CB"
     ],
     "dataId": [
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49
     ],
     "marker": {
        "color": [
           "#0BD265",
           "#10C389",
           "#13B7A3",
           "#14B3AD",
           "#15B0B4",
           "#15ADBA",
           "#16ABBF",
           "#16A9C3",
           "#17A9C3",
           "#17A6CB"
        ]
     },
     "selectedpoints": [
        4
     ]
  },
   {
     "name": "Costo-efectivo (Meta 6)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        1.169825198,
        1.357795445,
        1.422813567,
        1.489041367,
        1.525743285,
        1.53609136,
        1.538680904,
        1.539987107,
        1.540438047,
        1.55053778
     ],
     "y": [
        "18.005115",
        "18.0053804",
        "18.0064718",
        "17.9961472",
        "17.978324",
        "17.9342413",
        17.747161,
        "17.5748984",
        "17.533205499999998",
        "17.090536899999996"
     ],
     "image": [
        "scen_tradeoffs_ce_arearestored_target_6_weight_1_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_6_weight_2_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_6_weight_3_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_6_weight_4_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_6_weight_5_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_6_weight_6_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_6_weight_7_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_6_weight_8_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_6_weight_9_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_6_weight_10_v0.1_col_v14.png"
     ],
     "hex": [
        "#6B4DF6",
        "#6E4AF5",
        "#7247F5",
        "#7544F4",
        "#7A40F4",
        "#7D3DF3",
        "#7F3BF3",
        "#8338F3",
        "#8437F3",
        "#8B31F2"
     ],
     "dataId": [
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59
     ],
     "marker": {
        "color": [
           "#0BD265",
           "#10C389",
           "#13B7A3",
           "#14B3AD",
           "#15B0B4",
           "#15ADBA",
           "#16ABBF",
           "#16A9C3",
           "#17A9C3",
           "#17A6CB"
        ]
     },
     "selectedpoints": [
        4
     ]
  },
   {
     "name": "Maximo beneficio (Meta 1)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        1.927315996,
        2.104694287,
        2.124825515,
        2.135796045,
        2.14199787,
        2.143978422,
        2.144555143,
        2.145167997,
        2.145594487,
        2.147858576
     ],
     "y": [
        "18.042775",
        "18.0425195",
        "18.0438316",
        "18.0436622",
        "18.0403935",
        "18.0348889",
        18.0229762,
        "18.0181166",
        "17.901775100000002",
        "17.6714498"
     ],
     "image": [
        "scen_tradeoffs_mb_arearestored_target_1_weight_1_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_1_weight_2_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_1_weight_3_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_1_weight_4_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_1_weight_5_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_1_weight_6_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_1_weight_7_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_1_weight_8_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_1_weight_9_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_1_weight_10_v0.1_col_v14.png"
     ],
     "hex": [
        "#3E74FB",
        "#3A77FB",
        "#357BFC",
        "#347CFC",
        "#228BFE",
        "#1C95F2",
        "#1B99EA",
        "#1C97EE",
        "#1D92F8",
        "#208DFE"
     ],
     "dataId": [
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69
     ],
     "marker": {
        "color": [
           "#3E74FB",
           "#3A77FB",
           "#357BFC",
           "#347CFC",
           "#228BFE",
           "#1C95F2",
           "#1B99EA",
           "#1C97EE",
           "#1D92F8",
           "#208DFE"
        ]
     },
     "selectedpoints": [
        null
     ]
  },
   {
     "name": "Maximo beneficio (Meta 2)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        1.905609952,
        2.216183873,
        2.328988744,
        2.39346932,
        2.424646036,
        2.432791883,
        2.434582936,
        2.435677379,
        2.43603105,
        2.444591935
     ],
     "y": [
        "18.0326319",
        "18.0293856",
        "18.0218485",
        "18.0128822",
        "18.0023309",
        "17.985773899999998",
        17.9290382,
        "17.741075399999996",
        "17.6726457",
        "17.2846252"
     ],
     "image": [
        "scen_tradeoffs_mb_arearestored_target_2_weight_1_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_2_weight_2_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_2_weight_3_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_2_weight_4_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_2_weight_5_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_2_weight_6_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_2_weight_7_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_2_weight_8_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_2_weight_9_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_2_weight_10_v0.1_col_v14.png"
     ],
     "hex": [
        "#0ECA78",
        "#0DCD72",
        "#0CCF6E",
        "#08DE4A",
        "#04EF23",
        "#02F418",
        "#03F11F",
        "#05EC2A",
        "#06E53B",
        "#0AD759"
     ],
     "dataId": [
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79
     ],
     "marker": {
        "color": [
           "#0ECA78",
           "#0DCD72",
           "#0CCF6E",
           "#08DE4A",
           "#04EF23",
           "#02F418",
           "#03F11F",
           "#05EC2A",
           "#06E53B",
           "#0AD759"
        ]
     },
     "selectedpoints": [
        null
     ]
  },
   {
     "name": "Maximo beneficio (Meta 3)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        1.784966231,
        1.960635392,
        1.983141506,
        1.993631451,
        1.998229028,
        1.999722585,
        2.00013693,
        2.000638611,
        2.001012959,
        2.003324704
     ],
     "y": [
        "18.0407961",
        "18.0408338",
        "18.0427552",
        "18.043228100000004",
        "18.0375184",
        "18.017341899999998",
        18.0100013,
        "18.005461",
        "17.8668264",
        "17.657994499999997"
     ],
     "image": [
        "scen_tradeoffs_mb_arearestored_target_3_weight_1_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_3_weight_2_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_3_weight_3_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_3_weight_4_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_3_weight_5_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_3_weight_6_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_3_weight_7_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_3_weight_8_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_3_weight_9_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_3_weight_10_v0.1_col_v14.png"
     ],
     "hex": [
        "#4BE400",
        "#50E200",
        "#54E100",
        "#76D500",
        "#A4C400",
        "#9FC600",
        "#8DCD00",
        "#79D300",
        "#71D700",
        "#61DC00"
     ],
     "dataId": [
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88,
        89
     ],
     "marker": {
        "color": [
           "#4BE400",
           "#50E200",
           "#54E100",
           "#76D500",
           "#A4C400",
           "#9FC600",
           "#8DCD00",
           "#79D300",
           "#71D700",
           "#61DC00"
        ]
     },
     "selectedpoints": [
        null
     ]
  },
   {
     "name": "Maximo beneficio (Meta 4)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        1.763677275,
        2.051815499,
        2.157489992,
        2.223436317,
        2.255423774,
        2.264013452,
        2.265885961,
        2.267021615,
        2.267360568,
        2.276240719
     ],
     "y": [
        "18.028064800000003",
        "18.027357100000003",
        "18.019695300000002",
        "18.009453600000004",
        "17.9981759",
        "17.9795163",
        17.8995085,
        "17.718618199999998",
        "17.6624787",
        "17.265658600000002"
     ],
     "image": [
        "scen_tradeoffs_mb_arearestored_target_4_weight_1_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_4_weight_2_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_4_weight_3_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_4_weight_4_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_4_weight_5_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_4_weight_6_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_4_weight_7_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_4_weight_8_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_4_weight_9_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_4_weight_10_v0.1_col_v14.png"
     ],
     "hex": [
        "#F2A900",
        "#FF9B00",
        "#FF7B00",
        "#FF6B00",
        "#FF7200",
        "#FF7A00",
        "#FF8500",
        "#FF8E00",
        "#FF9200",
        "#FF9A00"
     ],
     "dataId": [
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        98,
        99
     ],
     "marker": {
        "color": [
           "#F2A900",
           "#FF9B00",
           "#FF7B00",
           "#FF6B00",
           "#FF7200",
           "#FF7A00",
           "#FF8500",
           "#FF8E00",
           "#FF9200",
           "#FF9A00"
        ]
     },
     "selectedpoints": [
        null
     ]
  },
   {
     "name": "Maximo beneficio (Meta 5)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        2.483419514,
        2.672268061,
        2.686156413,
        2.696078137,
        2.700201969,
        2.701572936,
        2.702260116,
        2.702713277,
        2.702880299,
        2.704980107
     ],
     "y": [
        "18.0481694",
        "18.0460814",
        "18.046235600000003",
        "18.047029300000002",
        "18.045829100000002",
        "18.045363000000002",
        18.0454789,
        "18.0453854",
        "17.9723301",
        "17.7557861"
     ],
     "image": [
        "scen_tradeoffs_mb_arearestored_target_5_weight_1_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_5_weight_2_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_5_weight_3_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_5_weight_4_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_5_weight_5_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_5_weight_6_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_5_weight_7_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_5_weight_8_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_5_weight_9_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_5_weight_10_v0.1_col_v14.png"
     ],
     "hex": [
        "#FF3000",
        "#FF1600",
        "#FF0000",
        "#FF0200",
        "#FF0F00",
        "#FF1700",
        "#FF1D00",
        "#FF2500",
        "#FF2900",
        "#FF3100"
     ],
     "dataId": [
        100,
        101,
        102,
        103,
        104,
        105,
        106,
        107,
        108,
        109
     ],
     "marker": {
        "color": [
           "#FF3000",
           "#FF1600",
           "#FF0000",
           "#FF0200",
           "#FF0F00",
           "#FF1700",
           "#FF1D00",
           "#FF2500",
           "#FF2900",
           "#FF3100"
        ]
     },
     "selectedpoints": [
        null
     ]
  },
   {
     "name": "Maximo beneficio (Meta 6)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        2.446509715,
        2.865722018,
        2.978206129,
        3.040949976,
        3.068980402,
        3.075614304,
        3.077030864,
        3.078047705,
        3.078309698,
        3.085836782
     ],
     "y": [
        "18.040679",
        "18.0352687",
        "18.0306465",
        "18.0265075",
        "18.019992600000002",
        "18.010626300000002",
        18.0023705,
        "17.8358026",
        "17.7648224",
        "17.3691334"
     ],
     "image": [
        "scen_tradeoffs_mb_arearestored_target_6_weight_1_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_6_weight_2_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_6_weight_3_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_6_weight_4_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_6_weight_5_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_6_weight_6_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_6_weight_7_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_6_weight_8_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_6_weight_9_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_6_weight_10_v0.1_col_v14.png"
     ],
     "hex": [
        "#0ECA78",
        "#0DCD72",
        "#0CCF6E",
        "#08DE4A",
        "#04EF23",
        "#02F418",
        "#03F11F",
        "#05EC2A",
        "#06E53B",
        "#0AD759"
     ],
     "dataId": [
        110,
        111,
        112,
        113,
        114,
        115,
        116,
        117,
        118,
        119
     ],
     "marker": {
        "color": [
           "#FF3000",
           "#FF1600",
           "#FF0000",
           "#FF0200",
           "#FF0F00",
           "#FF1700",
           "#FF1D00",
           "#FF2500",
           "#FF2900",
           "#FF3100"
        ]
     },
     "selectedpoints": [
        null
     ]
  },
   {
     "name": "Minimo costo (Meta 1)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        0.314081615,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
     ],
     "y": [
        "15.075882599999998",
        "",
        "",
        "",
        "",
        "",
        null,
        "",
        "",
        ""
     ],
     "image": [
        "scen_mincost_target_1_v0.1_col_v14.png",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
     ],
     "hex": [
        "#A020F0",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
     ],
     "dataId": [
        120,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
     ],
     "marker": {
        "color": [
           "#A020F0",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           ""
        ]
     },
     "selectedpoints": [
        null
     ]
  },
   {
     "name": "Minimo costo (Meta 2)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        0.624319761,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
     ],
     "y": [
        "16.2948274",
        "",
        "",
        "",
        "",
        "",
        null,
        "",
        "",
        ""
     ],
     "image": [
        "scen_mincost_target_2_v0.1_col_v14.png",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
     ],
     "hex": [
        "#8D30F2",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
     ],
     "dataId": [
        121,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
     ],
     "marker": {
        "color": [
           "#8D30F2",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           ""
        ]
     },
     "selectedpoints": [
        null
     ]
  },
   {
     "name": "Minimo costo (Meta 3)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        1.251406936,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
     ],
     "y": [
        "16.6812956",
        "",
        "",
        "",
        "",
        "",
        null,
        "",
        "",
        ""
     ],
     "image": [
        "scen_mincost_target_3_v0.1_col_v14.png",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
     ],
     "hex": [
        "#7048F5",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
     ],
     "dataId": [
        122,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
     ],
     "marker": {
        "color": [
           "#7048F5",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           ""
        ]
     },
     "selectedpoints": [
        null
     ]
  },
   {
     "name": "Minimo costo (Meta 4)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        1.965183081,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
     ],
     "y": [
        "17.719877399999998",
        "",
        "",
        "",
        "",
        "",
        null,
        "",
        "",
        ""
     ],
     "image": [
        "scen_mincost_target_4_v0.1_col_v14.png",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
     ],
     "hex": [
        "#466DFA",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
     ],
     "dataId": [
        123,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
     ],
     "marker": {
        "color": [
           "#466DFA",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           ""
        ]
     },
     "selectedpoints": [
        null
     ]
  },
   {
     "name": "Minimo costo (Meta 5)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        1.837199458,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
     ],
     "y": [
        "17.632840899999998",
        "",
        "",
        "",
        "",
        "",
        null,
        "",
        "",
        ""
     ],
     "image": [
        "scen_mincost_target_5_v0.1_col_v14.png",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
     ],
     "hex": [
        "#1A9CE2",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
     ],
     "dataId": [
        124,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
     ],
     "marker": {
        "color": [
           "#1A9CE2",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           ""
        ]
     },
     "selectedpoints": [
        null
     ]
  },
   {
     "name": "Minimo costo (Meta 6)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        2.489350952,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
     ],
     "y": [
        "18.0398213",
        "",
        "",
        "",
        "",
        "",
        null,
        "",
        "",
        ""
     ],
     "image": [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
     ],
     "hex": [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
     ],
     "dataId": [
        125,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
     ],
     "marker": {
        "color": [
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           ""
        ]
     },
     "selectedpoints": [
        null
     ]
  }
  ];
  let data1 = [
   {
     "name": "Costo-efectivo (Meta 1)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        0.299296938,
        0.319620265,
        0.331185818,
        0.34326737,
        0.352659481,
        0.35675999,
        0.358406047,
        0.359343072,
        0.359949967,
        0.365591317
     ],
     "y": [
        "17.8528737",
        17.8621156,
        17.8587384,
        "17.818467100000003",
        17.5593466,
        16.9872208,
        16.658651,
        "16.467480199999997",
        "16.0182969",
        "15.073952300000002"
     ],
     "image": [
        "scen_tradeoffs_ce_arearestored_target_1_weight_1_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_1_weight_2_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_1_weight_3_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_1_weight_4_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_1_weight_5_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_1_weight_6_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_1_weight_7_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_1_weight_8_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_1_weight_9_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_1_weight_10_v0.1_col_v14.png"
     ],
     "hex": [
        "#8A32F2",
        "#8E2EF1",
        "#902DF1",
        "#912CF1",
        "#932BF1",
        "#9429F1",
        "#9628F1",
        "#9727F0",
        "#9926F0",
        "#9F20F0"
     ],
     "dataId": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
     ],
     "marker": {
        "color": [
           "#8A32F2",
           "#8E2EF1",
           "#902DF1",
           "#912CF1",
           "#932BF1",
           "#9429F1",
           "#9628F1",
           "#9727F0",
           "#9926F0",
           "#9F20F0"
        ]
     },
     "selectedpoints": [
        0
     ]
  },
   {
     "name": "Maximo beneficio (Meta 1)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        1.927315996,
        2.104694287,
        2.124825515,
        2.135796045,
        2.14199787,
        2.143978422,
        2.144555143,
        2.145167997,
        2.145594487,
        2.147858576
     ],
     "y": [
        "18.042775",
        18.0425195,
        18.0438316,
        "18.0436622",
        18.0403935,
        18.0348889,
        18.0229762,
        "18.0181166",
        "17.901775100000002",
        "17.6714498"
     ],
     "image": [
        "scen_tradeoffs_mb_arearestored_target_1_weight_1_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_1_weight_2_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_1_weight_3_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_1_weight_4_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_1_weight_5_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_1_weight_6_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_1_weight_7_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_1_weight_8_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_1_weight_9_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_1_weight_10_v0.1_col_v14.png"
     ],
     "hex": [
        "#3E74FB",
        "#3A77FB",
        "#357BFC",
        "#347CFC",
        "#228BFE",
        "#1C95F2",
        "#1B99EA",
        "#1C97EE",
        "#1D92F8",
        "#208DFE"
     ],
     "dataId": [
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69
     ],
     "marker": {
        "color": [
           "#3E74FB",
           "#3A77FB",
           "#357BFC",
           "#347CFC",
           "#228BFE",
           "#1C95F2",
           "#1B99EA",
           "#1C97EE",
           "#1D92F8",
           "#208DFE"
        ]
     },
     "selectedpoints": [
        null
     ]
  },
   {
     "name": "Minimo costo (Meta 1)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        0.314081615,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
     ],
     "y": [
        "15.075882599999998",
        null,
        null,
        "",
        null,
        null,
        null,
        "",
        "",
        ""
     ],
     "image": [
        "scen_mincost_target_1_v0.1_col_v14.png",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
     ],
     "hex": [
        "#A020F0",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
     ],
     "dataId": [
        120,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
     ],
     "marker": {
        "color": [
           "#A020F0",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           ""
        ]
     },
     "selectedpoints": [
        null
     ]
  }
  ];
  let data2 = [
   {
     "name": "Costo-efectivo (Meta 2)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        0.295882333,
        0.35360847,
        0.375083462,
        0.388171068,
        0.392831282,
        0.394751972,
        0.395956706,
        0.396625464,
        0.396699591,
        0.409411965
     ],
     "y": [
        17.8231769,
        "17.835123199999998",
        "17.783619899999998",
        17.5396833,
        16.9395643,
        "16.6540826",
        16.3975367,
        "15.710458699999998",
        "15.501703899999999",
        "13.365011500000001"
     ],
     "image": [
        "scen_tradeoffs_ce_arearestored_target_2_weight_1_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_2_weight_2_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_2_weight_3_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_2_weight_4_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_2_weight_5_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_2_weight_6_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_2_weight_7_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_2_weight_8_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_2_weight_9_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_2_weight_10_v0.1_col_v14.png"
     ],
     "hex": [
        "#6B4DF6",
        "#6E4AF5",
        "#7247F5",
        "#7544F4",
        "#7A40F4",
        "#7D3DF3",
        "#7F3BF3",
        "#8338F3",
        "#8437F3",
        "#8B31F2"
     ],
     "dataId": [
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19
     ],
     "marker": {
        "color": [
           "#6B4DF6",
           "#6E4AF5",
           "#7247F5",
           "#7544F4",
           "#7A40F4",
           "#7D3DF3",
           "#7F3BF3",
           "#8338F3",
           "#8437F3",
           "#8B31F2"
        ]
     },
     "selectedpoints": [
        ""
     ]
  },
   {
     "name": "Maximo beneficio (Meta 2)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        1.905609952,
        2.216183873,
        2.328988744,
        2.39346932,
        2.424646036,
        2.432791883,
        2.434582936,
        2.435677379,
        2.43603105,
        2.444591935
     ],
     "y": [
        18.0326319,
        "18.0293856",
        "18.0218485",
        18.0128822,
        18.0023309,
        "17.985773899999998",
        17.9290382,
        "17.741075399999996",
        "17.6726457",
        "17.2846252"
     ],
     "image": [
        "scen_tradeoffs_mb_arearestored_target_2_weight_1_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_2_weight_2_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_2_weight_3_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_2_weight_4_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_2_weight_5_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_2_weight_6_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_2_weight_7_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_2_weight_8_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_2_weight_9_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_2_weight_10_v0.1_col_v14.png"
     ],
     "hex": [
        "#0ECA78",
        "#0DCD72",
        "#0CCF6E",
        "#08DE4A",
        "#04EF23",
        "#02F418",
        "#03F11F",
        "#05EC2A",
        "#06E53B",
        "#0AD759"
     ],
     "dataId": [
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79
     ],
     "marker": {
        "color": [
           "#0ECA78",
           "#0DCD72",
           "#0CCF6E",
           "#08DE4A",
           "#04EF23",
           "#02F418",
           "#03F11F",
           "#05EC2A",
           "#06E53B",
           "#0AD759"
        ]
     },
     "selectedpoints": [
        ""
     ]
  },
   {
     "name": "Minimo costo (Meta 2)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        0.624319761,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
     ],
     "y": [
        16.2948274,
        "",
        "",
        null,
        null,
        "",
        null,
        "",
        "",
        ""
     ],
     "image": [
        "scen_mincost_target_2_v0.1_col_v14.png",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
     ],
     "hex": [
        "#8D30F2",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
     ],
     "dataId": [
        121,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
     ],
     "marker": {
        "color": [
           "#8D30F2",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           ""
        ]
     },
     "selectedpoints": [
        ""
     ]
  }
  ];
  let data3 = [
   {
     "name": "Costo-efectivo (Meta 3)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        0.594397752,
        0.648761441,
        0.673512898,
        0.69361751,
        0.705399553,
        0.70963726,
        0.711110599,
        0.711930925,
        0.71253369,
        0.717374775
     ],
     "y": [
        17.9703694,
        17.9917208,
        18.0003492,
        "17.984416799999998",
        17.8546056,
        "17.5237113",
        17.235398,
        17.0698409,
        16.7080554,
        "15.916026899999999"
     ],
     "image": [
        "scen_tradeoffs_ce_arearestored_target_3_weight_1_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_3_weight_2_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_3_weight_3_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_3_weight_4_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_3_weight_5_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_3_weight_6_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_3_weight_7_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_3_weight_8_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_3_weight_9_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_3_weight_10_v0.1_col_v14.png"
     ],
     "hex": [
        "#466DFA",
        "#4D66F9",
        "#5362F8",
        "#5A5CF8",
        "#5C59F7",
        "#6057F7",
        "#6254F7",
        "#6552F6",
        "#6651F6",
        "#6D4BF5"
     ],
     "dataId": [
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29
     ],
     "marker": {
        "color": [
           "#466DFA",
           "#4D66F9",
           "#5362F8",
           "#5A5CF8",
           "#5C59F7",
           "#6057F7",
           "#6254F7",
           "#6552F6",
           "#6651F6",
           "#6D4BF5"
        ]
     },
     "selectedpoints": [
        ""
     ]
  },
   {
     "name": "Maximo beneficio (Meta 3)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        1.784966231,
        1.960635392,
        1.983141506,
        1.993631451,
        1.998229028,
        1.999722585,
        2.00013693,
        2.000638611,
        2.001012959,
        2.003324704
     ],
     "y": [
        18.0407961,
        18.0408338,
        18.0427552,
        "18.043228100000004",
        18.0375184,
        "18.017341899999998",
        18.0100013,
        18.005461,
        17.8668264,
        "17.657994499999997"
     ],
     "image": [
        "scen_tradeoffs_mb_arearestored_target_3_weight_1_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_3_weight_2_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_3_weight_3_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_3_weight_4_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_3_weight_5_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_3_weight_6_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_3_weight_7_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_3_weight_8_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_3_weight_9_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_3_weight_10_v0.1_col_v14.png"
     ],
     "hex": [
        "#4BE400",
        "#50E200",
        "#54E100",
        "#76D500",
        "#A4C400",
        "#9FC600",
        "#8DCD00",
        "#79D300",
        "#71D700",
        "#61DC00"
     ],
     "dataId": [
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88,
        89
     ],
     "marker": {
        "color": [
           "#4BE400",
           "#50E200",
           "#54E100",
           "#76D500",
           "#A4C400",
           "#9FC600",
           "#8DCD00",
           "#79D300",
           "#71D700",
           "#61DC00"
        ]
     },
     "selectedpoints": [
        ""
     ]
  },
   {
     "name": "Minimo costo (Meta 3)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        1.251406936,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
     ],
     "y": [
        16.6812956,
        null,
        null,
        "",
        null,
        "",
        null,
        null,
        null,
        ""
     ],
     "image": [
        "scen_mincost_target_3_v0.1_col_v14.png",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
     ],
     "hex": [
        "#7048F5",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
     ],
     "dataId": [
        122,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
     ],
     "marker": {
        "color": [
           "#7048F5",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           ""
        ]
     },
     "selectedpoints": [
        ""
     ]
  }
  ];
  let data4 = [
   {
     "name": "Costo-efectivo (Meta 4)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        0.593016277,
        0.697767176,
        0.730699057,
        0.768101293,
        0.781071947,
        0.784797867,
        0.786418544,
        0.787232998,
        0.787836612,
        0.799189036
     ],
     "y": [
        "17.9468939",
        "17.953672",
        "17.9572468",
        "17.9126225",
        "17.774422100000002",
        17.3969588,
        17.1076778,
        "16.9073603",
        16.4664769,
        "15.4752131"
     ],
     "image": [
        "scen_tradeoffs_ce_arearestored_target_4_weight_1_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_4_weight_2_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_4_weight_3_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_4_weight_4_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_4_weight_5_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_4_weight_6_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_4_weight_7_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_4_weight_8_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_4_weight_9_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_4_weight_10_v0.1_col_v14.png"
     ],
     "hex": [
        "#1B98EB",
        "#238BFE",
        "#2986FD",
        "#2E82FD",
        "#337DFC",
        "#357BFC",
        "#3879FB",
        "#3978FB",
        "#3A77FB",
        "#3F73FB"
     ],
     "dataId": [
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39
     ],
     "marker": {
        "color": [
           "#1B98EB",
           "#238BFE",
           "#2986FD",
           "#2E82FD",
           "#337DFC",
           "#357BFC",
           "#3879FB",
           "#3978FB",
           "#3A77FB",
           "#3F73FB"
        ]
     },
     "selectedpoints": [
        ""
     ]
  },
   {
     "name": "Maximo beneficio (Meta 4)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        1.763677275,
        2.051815499,
        2.157489992,
        2.223436317,
        2.255423774,
        2.264013452,
        2.265885961,
        2.267021615,
        2.267360568,
        2.276240719
     ],
     "y": [
        "18.028064800000003",
        "18.027357100000003",
        "18.019695300000002",
        "18.009453600000004",
        "17.9981759",
        17.9795163,
        17.8995085,
        "17.718618199999998",
        17.6624787,
        "17.265658600000002"
     ],
     "image": [
        "scen_tradeoffs_mb_arearestored_target_4_weight_1_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_4_weight_2_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_4_weight_3_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_4_weight_4_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_4_weight_5_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_4_weight_6_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_4_weight_7_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_4_weight_8_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_4_weight_9_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_4_weight_10_v0.1_col_v14.png"
     ],
     "hex": [
        "#F2A900",
        "#FF9B00",
        "#FF7B00",
        "#FF6B00",
        "#FF7200",
        "#FF7A00",
        "#FF8500",
        "#FF8E00",
        "#FF9200",
        "#FF9A00"
     ],
     "dataId": [
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        98,
        99
     ],
     "marker": {
        "color": [
           "#F2A900",
           "#FF9B00",
           "#FF7B00",
           "#FF6B00",
           "#FF7200",
           "#FF7A00",
           "#FF8500",
           "#FF8E00",
           "#FF9200",
           "#FF9A00"
        ]
     },
     "selectedpoints": [
        ""
     ]
  },
   {
     "name": "Minimo costo (Meta 4)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        1.965183081,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
     ],
     "y": [
        "17.719877399999998",
        "",
        "",
        "",
        "",
        null,
        null,
        "",
        null,
        ""
     ],
     "image": [
        "scen_mincost_target_4_v0.1_col_v14.png",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
     ],
     "hex": [
        "#466DFA",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
     ],
     "dataId": [
        123,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
     ],
     "marker": {
        "color": [
           "#466DFA",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           ""
        ]
     },
     "selectedpoints": [
        ""
     ]
  }
  ];
  let data5 = [
   {
     "name": "Costo-efectivo (Meta 5)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        1.18577733,
        1.319758244,
        1.353495106,
        1.371147231,
        1.378476261,
        1.380000913,
        1.380329625,
        1.380661621,
        1.381004927,
        1.384102624
     ],
     "y": [
        "18.025471399999997",
        18.0334482,
        "18.032845299999998",
        "18.028166699999996",
        "17.9946933",
        "17.9113003",
        17.8253931,
        17.7634312,
        17.4868656,
        16.8796812
     ],
     "image": [
        "scen_tradeoffs_ce_arearestored_target_5_weight_1_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_5_weight_2_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_5_weight_3_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_5_weight_4_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_5_weight_5_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_5_weight_6_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_5_weight_7_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_5_weight_8_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_5_weight_9_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_5_weight_10_v0.1_col_v14.png"
     ],
     "hex": [
        "#0BD265",
        "#10C389",
        "#13B7A3",
        "#14B3AD",
        "#15B0B4",
        "#15ADBA",
        "#16ABBF",
        "#16A9C3",
        "#17A9C3",
        "#17A6CB"
     ],
     "dataId": [
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49
     ],
     "marker": {
        "color": [
           "#0BD265",
           "#10C389",
           "#13B7A3",
           "#14B3AD",
           "#15B0B4",
           "#15ADBA",
           "#16ABBF",
           "#16A9C3",
           "#17A9C3",
           "#17A6CB"
        ]
     },
     "selectedpoints": [
        4
     ]
  },
   {
     "name": "Maximo beneficio (Meta 5)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        2.483419514,
        2.672268061,
        2.686156413,
        2.696078137,
        2.700201969,
        2.701572936,
        2.702260116,
        2.702713277,
        2.702880299,
        2.704980107
     ],
     "y": [
        "18.0481694",
        18.0460814,
        "18.046235600000003",
        "18.047029300000002",
        "18.045829100000002",
        "18.045363000000002",
        18.0454789,
        18.0453854,
        17.9723301,
        17.7557861
     ],
     "image": [
        "scen_tradeoffs_mb_arearestored_target_5_weight_1_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_5_weight_2_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_5_weight_3_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_5_weight_4_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_5_weight_5_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_5_weight_6_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_5_weight_7_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_5_weight_8_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_5_weight_9_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_5_weight_10_v0.1_col_v14.png"
     ],
     "hex": [
        "#FF3000",
        "#FF1600",
        "#FF0000",
        "#FF0200",
        "#FF0F00",
        "#FF1700",
        "#FF1D00",
        "#FF2500",
        "#FF2900",
        "#FF3100"
     ],
     "dataId": [
        100,
        101,
        102,
        103,
        104,
        105,
        106,
        107,
        108,
        109
     ],
     "marker": {
        "color": [
           "#FF3000",
           "#FF1600",
           "#FF0000",
           "#FF0200",
           "#FF0F00",
           "#FF1700",
           "#FF1D00",
           "#FF2500",
           "#FF2900",
           "#FF3100"
        ]
     },
     "selectedpoints": [
        null
     ]
  },
   {
     "name": "Minimo costo (Meta 5)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        1.837199458,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
     ],
     "y": [
        "17.632840899999998",
        null,
        "",
        "",
        "",
        "",
        null,
        null,
        null,
        null
     ],
     "image": [
        "scen_mincost_target_5_v0.1_col_v14.png",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
     ],
     "hex": [
        "#1A9CE2",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
     ],
     "dataId": [
        124,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
     ],
     "marker": {
        "color": [
           "#1A9CE2",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           ""
        ]
     },
     "selectedpoints": [
        null
     ]
  }
  ];
  let data6 = [
   {
     "name": "Costo-efectivo (Meta 6)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        1.169825198,
        1.357795445,
        1.422813567,
        1.489041367,
        1.525743285,
        1.53609136,
        1.538680904,
        1.539987107,
        1.540438047,
        1.55053778
     ],
     "y": [
        18.005115,
        18.0053804,
        18.0064718,
        17.9961472,
        "17.978324",
        "17.9342413",
        17.747161,
        17.5748984,
        "17.533205499999998",
        "17.090536899999996"
     ],
     "image": [
        "scen_tradeoffs_ce_arearestored_target_6_weight_1_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_6_weight_2_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_6_weight_3_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_6_weight_4_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_6_weight_5_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_6_weight_6_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_6_weight_7_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_6_weight_8_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_6_weight_9_v0.1_col_v14.png",
        "scen_tradeoffs_ce_arearestored_target_6_weight_10_v0.1_col_v14.png"
     ],
     "hex": [
        "#6B4DF6",
        "#6E4AF5",
        "#7247F5",
        "#7544F4",
        "#7A40F4",
        "#7D3DF3",
        "#7F3BF3",
        "#8338F3",
        "#8437F3",
        "#8B31F2"
     ],
     "dataId": [
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59
     ],
     "marker": {
        "color": [
           "#0BD265",
           "#10C389",
           "#13B7A3",
           "#14B3AD",
           "#15B0B4",
           "#15ADBA",
           "#16ABBF",
           "#16A9C3",
           "#17A9C3",
           "#17A6CB"
        ]
     },
     "selectedpoints": [
        4
     ]
  },
   {
     "name": "Maximo beneficio (Meta 6)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        2.446509715,
        2.865722018,
        2.978206129,
        3.040949976,
        3.068980402,
        3.075614304,
        3.077030864,
        3.078047705,
        3.078309698,
        3.085836782
     ],
     "y": [
        18.040679,
        18.0352687,
        18.0306465,
        18.0265075,
        "18.019992600000002",
        "18.010626300000002",
        18.0023705,
        17.8358026,
        "17.7648224",
        "17.3691334"
     ],
     "image": [
        "scen_tradeoffs_mb_arearestored_target_6_weight_1_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_6_weight_2_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_6_weight_3_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_6_weight_4_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_6_weight_5_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_6_weight_6_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_6_weight_7_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_6_weight_8_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_6_weight_9_v0.1_col_v14.png",
        "scen_tradeoffs_mb_arearestored_target_6_weight_10_v0.1_col_v14.png"
     ],
     "hex": [
        "#0ECA78",
        "#0DCD72",
        "#0CCF6E",
        "#08DE4A",
        "#04EF23",
        "#02F418",
        "#03F11F",
        "#05EC2A",
        "#06E53B",
        "#0AD759"
     ],
     "dataId": [
        110,
        111,
        112,
        113,
        114,
        115,
        116,
        117,
        118,
        119
     ],
     "marker": {
        "color": [
           "#FF3000",
           "#FF1600",
           "#FF0000",
           "#FF0200",
           "#FF0F00",
           "#FF1700",
           "#FF1D00",
           "#FF2500",
           "#FF2900",
           "#FF3100"
        ]
     },
     "selectedpoints": [
        null
     ]
  },
   {
     "name": "Minimo costo (Meta 6)",
     "type": "scatter",
     "mode": "lines+markers",
     "line": {
        "color": [
           "black"
        ],
        "width": 1
     },
     "selected": {
        "marker": {
           "size": 15
        }
     },
     "x": [
        2.489350952,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
     ],
     "y": [
        18.0398213,
        null,
        null,
        null,
        "",
        "",
        null,
        null,
        "",
        ""
     ],
     "image": [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
     ],
     "hex": [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
     ],
     "dataId": [
        125,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
     ],
     "marker": {
        "color": [
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           ""
        ]
     },
     "selectedpoints": [
        null
     ]
  }
  ];

   // Data used for agGrid
  let originalRowData0 = [
   {
     "dataId": 0,
     "traceIndex": 0,
     "pointIndex": 0,
     "Escenario": "Costo-efectivo (Meta 1)",
     "Carbón (Gt)": 0.299296938,
     "Biodiversidad (%)": "17.8528737",
     "Costo total (USD)": 2.31279918,
     "Costo de establecimiento (USD)": 1.774206629,
     "Costo de oportunidad (USD)": "0.5385925509",
     "Peso Carbón": 0,
     "Peso Biodiversidad": 1,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_1_weight_2_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#8E2EF1"
   },
   {
     "dataId": 1,
     "traceIndex": 0,
     "pointIndex": 1,
     "Escenario": "Costo-efectivo (Meta 1)",
     "Carbón (Gt)": 0.319620265,
     "Biodiversidad (%)": "17.8621156",
     "Costo total (USD)": 2.164465092,
     "Costo de establecimiento (USD)": 1.711533331,
     "Costo de oportunidad (USD)": "0.4529317609",
     "Peso Carbón": 0.0625,
     "Peso Biodiversidad": 0.9375,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_1_weight_10_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#9F20F0"
   },
   {
     "dataId": 2,
     "traceIndex": 0,
     "pointIndex": 2,
     "Escenario": "Costo-efectivo (Meta 1)",
     "Carbón (Gt)": 0.331185818,
     "Biodiversidad (%)": "17.8587384",
     "Costo total (USD)": 2.056130293,
     "Costo de establecimiento (USD)": 1.661806327,
     "Costo de oportunidad (USD)": "0.3943239662",
     "Peso Carbón": 125,
     "Peso Biodiversidad": 875,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_1_weight_7_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#9628F1"
   },
   {
     "dataId": 3,
     "traceIndex": 0,
     "pointIndex": 3,
     "Escenario": "Costo-efectivo (Meta 1)",
     "Carbón (Gt)": 0.34326737,
     "Biodiversidad (%)": "17.818467100000003",
     "Costo total (USD)": 1.936876585,
     "Costo de establecimiento (USD)": 1.611651404,
     "Costo de oportunidad (USD)": "0.32522518139999995",
     "Peso Carbón": 0.25,
     "Peso Biodiversidad": 0.75,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_1_weight_5_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#932BF1"
   },
   {
     "dataId": 4,
     "traceIndex": 0,
     "pointIndex": 4,
     "Escenario": "Costo-efectivo (Meta 1)",
     "Carbón (Gt)": 0.352659481,
     "Biodiversidad (%)": "17.5593466",
     "Costo total (USD)": 1.851725294,
     "Costo de establecimiento (USD)": 1.58252054,
     "Costo de oportunidad (USD)": "0.2692047536",
     "Peso Carbón": 0.5,
     "Peso Biodiversidad": 0.5,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_1_weight_3_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#902DF1"
   },
   {
     "dataId": 5,
     "traceIndex": 0,
     "pointIndex": 5,
     "Escenario": "Costo-efectivo (Meta 1)",
     "Carbón (Gt)": 0.35675999,
     "Biodiversidad (%)": "16.9872208",
     "Costo total (USD)": 1.807707174,
     "Costo de establecimiento (USD)": 1.579608663,
     "Costo de oportunidad (USD)": "0.2280985114",
     "Peso Carbón": 0.75,
     "Peso Biodiversidad": 0.25,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_1_weight_4_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#912CF1"
   },
   {
     "dataId": 6,
     "traceIndex": 0,
     "pointIndex": 6,
     "Escenario": "Costo-efectivo (Meta 1)",
     "Carbón (Gt)": 0.358406047,
     "Biodiversidad (%)": "16.658651",
     "Costo total (USD)": 1.802224098,
     "Costo de establecimiento (USD)": 1.580743448,
     "Costo de oportunidad (USD)": "0.22148065009999998",
     "Peso Carbón": 875,
     "Peso Biodiversidad": 125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_1_weight_6_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#9429F1"
   },
   {
     "dataId": 7,
     "traceIndex": 0,
     "pointIndex": 7,
     "Escenario": "Costo-efectivo (Meta 1)",
     "Carbón (Gt)": 0.359343072,
     "Biodiversidad (%)": "16.467480199999997",
     "Costo total (USD)": 1.800926266,
     "Costo de establecimiento (USD)": 1.581438654,
     "Costo de oportunidad (USD)": "0.2194876124",
     "Peso Carbón": 0.9375,
     "Peso Biodiversidad": 0.0625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_1_weight_8_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#9727F0"
   },
   {
     "dataId": 8,
     "traceIndex": 0,
     "pointIndex": 8,
     "Escenario": "Costo-efectivo (Meta 1)",
     "Carbón (Gt)": 0.359949967,
     "Biodiversidad (%)": "16.0182969",
     "Costo total (USD)": 1.77408743,
     "Costo de establecimiento (USD)": 1.581143962,
     "Costo de oportunidad (USD)": "0.1929434675",
     "Peso Carbón": 0.96875,
     "Peso Biodiversidad": 0.03125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_1_weight_9_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#9926F0"
   },
   {
     "dataId": 9,
     "traceIndex": 0,
     "pointIndex": 9,
     "Escenario": "Costo-efectivo (Meta 1)",
     "Carbón (Gt)": 0.365591317,
     "Biodiversidad (%)": "15.073952300000002",
     "Costo total (USD)": 1.703733692,
     "Costo de establecimiento (USD)": 1.572200736,
     "Costo de oportunidad (USD)": "0.1315329565",
     "Peso Carbón": 1,
     "Peso Biodiversidad": 0,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_1_weight_1_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#8A32F2"
   },
   {
     "dataId": 10,
     "traceIndex": 1,
     "pointIndex": 0,
     "Escenario": "Costo-efectivo (Meta 2)",
     "Carbón (Gt)": 0.295882333,
     "Biodiversidad (%)": "17.8231769",
     "Costo total (USD)": 721487,
     "Costo de establecimiento (USD)": 1.895086889,
     "Costo de oportunidad (USD)": "5.319785777",
     "Peso Carbón": 0,
     "Peso Biodiversidad": 1,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_2_weight_2_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#6E4AF5"
   },
   {
     "dataId": 11,
     "traceIndex": 1,
     "pointIndex": 1,
     "Escenario": "Costo-efectivo (Meta 2)",
     "Carbón (Gt)": 0.35360847,
     "Biodiversidad (%)": "17.835123199999998",
     "Costo total (USD)": 967735,
     "Costo de establecimiento (USD)": 1.83656661,
     "Costo de oportunidad (USD)": "7.840787725",
     "Peso Carbón": 0.25,
     "Peso Biodiversidad": 0.75,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_2_weight_8_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#8338F3"
   },
   {
     "dataId": 12,
     "traceIndex": 1,
     "pointIndex": 2,
     "Escenario": "Costo-efectivo (Meta 2)",
     "Carbón (Gt)": 0.375083462,
     "Biodiversidad (%)": "17.783619899999998",
     "Costo total (USD)": 1216.61,
     "Costo de establecimiento (USD)": 1.818261595,
     "Costo de oportunidad (USD)": "10.34786924",
     "Peso Carbón": 0.5,
     "Peso Biodiversidad": 0.5,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_2_weight_3_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#7247F5"
   },
   {
     "dataId": 13,
     "traceIndex": 1,
     "pointIndex": 3,
     "Escenario": "Costo-efectivo (Meta 2)",
     "Carbón (Gt)": 0.388171068,
     "Biodiversidad (%)": "17.5396833",
     "Costo total (USD)": 1321.47,
     "Costo de establecimiento (USD)": 1.829672316,
     "Costo de oportunidad (USD)": "11.384992389",
     "Peso Carbón": 0.75,
     "Peso Biodiversidad": 0.25,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_2_weight_4_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#7544F4"
   },
   {
     "dataId": 14,
     "traceIndex": 1,
     "pointIndex": 4,
     "Escenario": "Costo-efectivo (Meta 2)",
     "Carbón (Gt)": 0.392831282,
     "Biodiversidad (%)": "16.9395643",
     "Costo total (USD)": 1303.87,
     "Costo de establecimiento (USD)": 1.853287476,
     "Costo de oportunidad (USD)": "11.185362818",
     "Peso Carbón": 875,
     "Peso Biodiversidad": 125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_2_weight_5_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#7A40F4"
   },
   {
     "dataId": 15,
     "traceIndex": 1,
     "pointIndex": 5,
     "Escenario": "Costo-efectivo (Meta 2)",
     "Carbón (Gt)": 0.394751972,
     "Biodiversidad (%)": "16.6540826",
     "Costo total (USD)": 1276.98,
     "Costo de establecimiento (USD)": 1.860755075,
     "Costo de oportunidad (USD)": "10.909077629",
     "Peso Carbón": 0.9375,
     "Peso Biodiversidad": 0.0625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_2_weight_6_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#7D3DF3"
   },
   {
     "dataId": 16,
     "traceIndex": 1,
     "pointIndex": 6,
     "Escenario": "Costo-efectivo (Meta 2)",
     "Carbón (Gt)": 0.395956706,
     "Biodiversidad (%)": "16.3975367",
     "Costo total (USD)": 1264.38,
     "Costo de establecimiento (USD)": 1.874559274,
     "Costo de oportunidad (USD)": "10.769219062",
     "Peso Carbón": 0.96875,
     "Peso Biodiversidad": 0.03125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_2_weight_7_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#7F3BF3"
   },
   {
     "dataId": 17,
     "traceIndex": 1,
     "pointIndex": 7,
     "Escenario": "Costo-efectivo (Meta 2)",
     "Carbón (Gt)": 0.396625464,
     "Biodiversidad (%)": "15.710458699999998",
     "Costo total (USD)": 1259.95,
     "Costo de establecimiento (USD)": 1.875958231,
     "Costo de oportunidad (USD)": "10.723577629",
     "Peso Carbón": 0.984375,
     "Peso Biodiversidad": 0.015625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_2_weight_9_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#8437F3"
   },
   {
     "dataId": 18,
     "traceIndex": 1,
     "pointIndex": 8,
     "Escenario": "Costo-efectivo (Meta 2)",
     "Carbón (Gt)": 0.396699591,
     "Biodiversidad (%)": "15.501703899999999",
     "Costo total (USD)": 1262.02,
     "Costo de establecimiento (USD)": 1.877811741,
     "Costo de oportunidad (USD)": "10.742396706",
     "Peso Carbón": 0.9921875,
     "Peso Biodiversidad": 0.0078125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_2_weight_10_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#8B31F2"
   },
   {
     "dataId": 19,
     "traceIndex": 1,
     "pointIndex": 9,
     "Escenario": "Costo-efectivo (Meta 2)",
     "Carbón (Gt)": 0.409411965,
     "Biodiversidad (%)": "13.365011500000001",
     "Costo total (USD)": 1296.7,
     "Costo de establecimiento (USD)": 1.887153633,
     "Costo de oportunidad (USD)": "11.079817883",
     "Peso Carbón": 1,
     "Peso Biodiversidad": 0,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_2_weight_1_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#6B4DF6"
   },
   {
     "dataId": 20,
     "traceIndex": 2,
     "pointIndex": 0,
     "Escenario": "Costo-efectivo (Meta 3)",
     "Carbón (Gt)": 0.594397752,
     "Biodiversidad (%)": "17.9703694",
     "Costo total (USD)": 4.839685447,
     "Costo de establecimiento (USD)": 3.653932366,
     "Costo de oportunidad (USD)": "1.185753081",
     "Peso Carbón": 0,
     "Peso Biodiversidad": 1,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_3_weight_2_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#4D66F9"
   },
   {
     "dataId": 21,
     "traceIndex": 2,
     "pointIndex": 1,
     "Escenario": "Costo-efectivo (Meta 3)",
     "Carbón (Gt)": 0.648761441,
     "Biodiversidad (%)": "17.9917208",
     "Costo total (USD)": 4.377663323,
     "Costo de establecimiento (USD)": 3.486485067,
     "Costo de oportunidad (USD)": "0.8911782555",
     "Peso Carbón": 0.0625,
     "Peso Biodiversidad": 0.9375,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_3_weight_9_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#6651F6"
   },
   {
     "dataId": 22,
     "traceIndex": 2,
     "pointIndex": 2,
     "Escenario": "Costo-efectivo (Meta 3)",
     "Carbón (Gt)": 0.673512898,
     "Biodiversidad (%)": "18.0003492",
     "Costo total (USD)": 4.137031493,
     "Costo de establecimiento (USD)": 3.419662748,
     "Costo de oportunidad (USD)": "0.7173687452",
     "Peso Carbón": 125,
     "Peso Biodiversidad": 875,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_3_weight_6_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#6057F7"
   },
   {
     "dataId": 23,
     "traceIndex": 2,
     "pointIndex": 3,
     "Escenario": "Costo-efectivo (Meta 3)",
     "Carbón (Gt)": 0.69361751,
     "Biodiversidad (%)": "17.984416799999998",
     "Costo total (USD)": 3.943001412,
     "Costo de establecimiento (USD)": 3.383899441,
     "Costo de oportunidad (USD)": "0.5591019707999999",
     "Peso Carbón": 0.25,
     "Peso Biodiversidad": 0.75,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_3_weight_5_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#5C59F7"
   },
   {
     "dataId": 24,
     "traceIndex": 2,
     "pointIndex": 4,
     "Escenario": "Costo-efectivo (Meta 3)",
     "Carbón (Gt)": 0.705399553,
     "Biodiversidad (%)": "17.8546056",
     "Costo total (USD)": 3.842280121,
     "Costo de establecimiento (USD)": 3.373736104,
     "Costo de oportunidad (USD)": "0.4685440178",
     "Peso Carbón": 0.5,
     "Peso Biodiversidad": 0.5,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_3_weight_3_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#5362F8"
   },
   {
     "dataId": 25,
     "traceIndex": 2,
     "pointIndex": 5,
     "Escenario": "Costo-efectivo (Meta 3)",
     "Carbón (Gt)": 0.70963726,
     "Biodiversidad (%)": "17.5237113",
     "Costo total (USD)": 3.801179246,
     "Costo de establecimiento (USD)": 3.37564433,
     "Costo de oportunidad (USD)": "0.4255349162",
     "Peso Carbón": 0.75,
     "Peso Biodiversidad": 0.25,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_3_weight_4_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#5A5CF8"
   },
   {
     "dataId": 26,
     "traceIndex": 2,
     "pointIndex": 6,
     "Escenario": "Costo-efectivo (Meta 3)",
     "Carbón (Gt)": 0.711110599,
     "Biodiversidad (%)": "17.235398",
     "Costo total (USD)": 3.799286432,
     "Costo de establecimiento (USD)": 3.379728408,
     "Costo de oportunidad (USD)": "0.41955802410000004",
     "Peso Carbón": 875,
     "Peso Biodiversidad": 125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_3_weight_7_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#6254F7"
   },
   {
     "dataId": 27,
     "traceIndex": 2,
     "pointIndex": 7,
     "Escenario": "Costo-efectivo (Meta 3)",
     "Carbón (Gt)": 0.711930925,
     "Biodiversidad (%)": "17.0698409",
     "Costo total (USD)": 3.798907756,
     "Costo de establecimiento (USD)": 3.380853909,
     "Costo de oportunidad (USD)": "0.4180538468",
     "Peso Carbón": 0.9375,
     "Peso Biodiversidad": 0.0625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_3_weight_8_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#6552F6"
   },
   {
     "dataId": 28,
     "traceIndex": 2,
     "pointIndex": 8,
     "Escenario": "Costo-efectivo (Meta 3)",
     "Carbón (Gt)": 0.71253369,
     "Biodiversidad (%)": "16.7080554",
     "Costo total (USD)": 3.772949541,
     "Costo de establecimiento (USD)": 3.381008529,
     "Costo de oportunidad (USD)": "0.39194101210000004",
     "Peso Carbón": 0.96875,
     "Peso Biodiversidad": 0.03125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_3_weight_10_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#6D4BF5"
   },
   {
     "dataId": 29,
     "traceIndex": 2,
     "pointIndex": 9,
     "Escenario": "Costo-efectivo (Meta 3)",
     "Carbón (Gt)": 0.717374775,
     "Biodiversidad (%)": "15.916026899999999",
     "Costo total (USD)": 3.711782976,
     "Costo de establecimiento (USD)": 3.377530403,
     "Costo de oportunidad (USD)": "0.3342525732",
     "Peso Carbón": 1,
     "Peso Biodiversidad": 0,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_3_weight_1_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#466DFA"
   },
   {
     "dataId": 30,
     "traceIndex": 3,
     "pointIndex": 0,
     "Escenario": "Costo-efectivo (Meta 4)",
     "Carbón (Gt)": 0.593016277,
     "Biodiversidad (%)": "17.9468939",
     "Costo total (USD)": 1492.33,
     "Costo de establecimiento (USD)": 3.835562729,
     "Costo de oportunidad (USD)": "11.087756709",
     "Peso Carbón": 0,
     "Peso Biodiversidad": 1,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_4_weight_2_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#238BFE"
   },
   {
     "dataId": 31,
     "traceIndex": 3,
     "pointIndex": 1,
     "Escenario": "Costo-efectivo (Meta 4)",
     "Carbón (Gt)": 0.697767176,
     "Biodiversidad (%)": "17.953672",
     "Costo total (USD)": 1714.01,
     "Costo de establecimiento (USD)": 3.704396586,
     "Costo de oportunidad (USD)": "13.435750682",
     "Peso Carbón": 125,
     "Peso Biodiversidad": 875,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_4_weight_8_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#3978FB"
   },
   {
     "dataId": 32,
     "traceIndex": 3,
     "pointIndex": 2,
     "Escenario": "Costo-efectivo (Meta 4)",
     "Carbón (Gt)": 0.730699057,
     "Biodiversidad (%)": "17.9572468",
     "Costo total (USD)": 1957.05,
     "Costo de establecimiento (USD)": 3.660969717,
     "Costo de oportunidad (USD)": "15.90948873",
     "Peso Carbón": 0.25,
     "Peso Biodiversidad": 0.75,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_4_weight_6_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#357BFC"
   },
   {
     "dataId": 33,
     "traceIndex": 3,
     "pointIndex": 3,
     "Escenario": "Costo-efectivo (Meta 4)",
     "Carbón (Gt)": 0.768101293,
     "Biodiversidad (%)": "17.9126225",
     "Costo total (USD)": 2104.01,
     "Costo de establecimiento (USD)": 3.662358776,
     "Costo de oportunidad (USD)": "17.377716429",
     "Peso Carbón": 0.5,
     "Peso Biodiversidad": 0.5,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_4_weight_3_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#2986FD"
   },
   {
     "dataId": 34,
     "traceIndex": 3,
     "pointIndex": 4,
     "Escenario": "Costo-efectivo (Meta 4)",
     "Carbón (Gt)": 0.781071947,
     "Biodiversidad (%)": "17.774422100000002",
     "Costo total (USD)": 2153.06,
     "Costo de establecimiento (USD)": 3.689194912,
     "Costo de oportunidad (USD)": "17.84137955",
     "Peso Carbón": 0.75,
     "Peso Biodiversidad": 0.25,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_4_weight_4_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#2E82FD"
   },
   {
     "dataId": 35,
     "traceIndex": 3,
     "pointIndex": 5,
     "Escenario": "Costo-efectivo (Meta 4)",
     "Carbón (Gt)": 0.784797867,
     "Biodiversidad (%)": "17.3969588",
     "Costo total (USD)": 2141.54,
     "Costo de establecimiento (USD)": 3.716466986,
     "Costo de oportunidad (USD)": "17.698946301",
     "Peso Carbón": 875,
     "Peso Biodiversidad": 125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_4_weight_5_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#337DFC"
   },
   {
     "dataId": 36,
     "traceIndex": 3,
     "pointIndex": 6,
     "Escenario": "Costo-efectivo (Meta 4)",
     "Carbón (Gt)": 0.786418544,
     "Biodiversidad (%)": "17.1076778",
     "Costo total (USD)": 2123.13,
     "Costo de establecimiento (USD)": 3.72544432,
     "Costo de oportunidad (USD)": "17.50583663",
     "Peso Carbón": 0.9375,
     "Peso Biodiversidad": 0.0625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_4_weight_7_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#3879FB"
   },
   {
     "dataId": 37,
     "traceIndex": 3,
     "pointIndex": 7,
     "Escenario": "Costo-efectivo (Meta 4)",
     "Carbón (Gt)": 0.787232998,
     "Biodiversidad (%)": "16.9073603",
     "Costo total (USD)": 2114.91,
     "Costo de establecimiento (USD)": 3.739039137,
     "Costo de oportunidad (USD)": "17.410024636",
     "Peso Carbón": 0.96875,
     "Peso Biodiversidad": 0.03125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_4_weight_9_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#3A77FB"
   },
   {
     "dataId": 38,
     "traceIndex": 3,
     "pointIndex": 8,
     "Escenario": "Costo-efectivo (Meta 4)",
     "Carbón (Gt)": 0.787836612,
     "Biodiversidad (%)": "16.4664769",
     "Costo total (USD)": 2109.82,
     "Costo de establecimiento (USD)": 3.742671845,
     "Costo de oportunidad (USD)": "17.355490394",
     "Peso Carbón": 0.984375,
     "Peso Biodiversidad": 0.015625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_4_weight_10_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#3F73FB"
   },
   {
     "dataId": 39,
     "traceIndex": 3,
     "pointIndex": 9,
     "Escenario": "Costo-efectivo (Meta 4)",
     "Carbón (Gt)": 0.799189036,
     "Biodiversidad (%)": "15.4752131",
     "Costo total (USD)": 2135.04,
     "Costo de establecimiento (USD)": 3.751609046,
     "Costo de oportunidad (USD)": "17.598793499",
     "Peso Carbón": 1,
     "Peso Biodiversidad": 0,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_4_weight_1_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#1B98EB"
   },
   {
     "dataId": 40,
     "traceIndex": 4,
     "pointIndex": 0,
     "Escenario": "Costo-efectivo (Meta 5)",
     "Carbón (Gt)": 1.18577733,
     "Biodiversidad (%)": "18.025471399999997",
     "Costo total (USD)": 10.660600256,
     "Costo de establecimiento (USD)": 7.445416911,
     "Costo de oportunidad (USD)": "3.215183344",
     "Peso Carbón": 0,
     "Peso Biodiversidad": 1,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_5_weight_2_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#10C389"
   },
   {
     "dataId": 41,
     "traceIndex": 4,
     "pointIndex": 1,
     "Escenario": "Costo-efectivo (Meta 5)",
     "Carbón (Gt)": 1.319758244,
     "Biodiversidad (%)": "18.0334482",
     "Costo total (USD)": 9.052646669,
     "Costo de establecimiento (USD)": 7.230090301,
     "Costo de oportunidad (USD)": "1.822556369",
     "Peso Carbón": 0.0625,
     "Peso Biodiversidad": 0.9375,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_5_weight_8_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#16A9C3"
   },
   {
     "dataId": 42,
     "traceIndex": 4,
     "pointIndex": 2,
     "Escenario": "Costo-efectivo (Meta 5)",
     "Carbón (Gt)": 1.353495106,
     "Biodiversidad (%)": "18.032845299999998",
     "Costo total (USD)": 8.656517029,
     "Costo de establecimiento (USD)": 7.17651718,
     "Costo de oportunidad (USD)": "1.479999849",
     "Peso Carbón": 125,
     "Peso Biodiversidad": 875,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_5_weight_6_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#15ADBA"
   },
   {
     "dataId": 43,
     "traceIndex": 4,
     "pointIndex": 3,
     "Escenario": "Costo-efectivo (Meta 5)",
     "Carbón (Gt)": 1.371147231,
     "Biodiversidad (%)": "18.028166699999996",
     "Costo total (USD)": 8.416800733,
     "Costo de establecimiento (USD)": 7.158711207,
     "Costo de oportunidad (USD)": "1.258089525",
     "Peso Carbón": 0.25,
     "Peso Biodiversidad": 0.75,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_5_weight_5_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#15B0B4"
   },
   {
     "dataId": 44,
     "traceIndex": 4,
     "pointIndex": 4,
     "Escenario": "Costo-efectivo (Meta 5)",
     "Carbón (Gt)": 1.378476261,
     "Biodiversidad (%)": "17.9946933",
     "Costo total (USD)": 8.301126039,
     "Costo de establecimiento (USD)": 7.171005737,
     "Costo de oportunidad (USD)": "1.130120302",
     "Peso Carbón": 0.5,
     "Peso Biodiversidad": 0.5,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_5_weight_3_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#13B7A3"
   },
   {
     "dataId": 45,
     "traceIndex": 4,
     "pointIndex": 5,
     "Escenario": "Costo-efectivo (Meta 5)",
     "Carbón (Gt)": 1.380000913,
     "Biodiversidad (%)": "17.9113003",
     "Costo total (USD)": 8.256691583,
     "Costo de establecimiento (USD)": 7.182862502,
     "Costo de oportunidad (USD)": "1.073829081",
     "Peso Carbón": 0.75,
     "Peso Biodiversidad": 0.25,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_5_weight_4_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#14B3AD"
   },
   {
     "dataId": 46,
     "traceIndex": 4,
     "pointIndex": 6,
     "Escenario": "Costo-efectivo (Meta 5)",
     "Carbón (Gt)": 1.380329625,
     "Biodiversidad (%)": "17.8253931",
     "Costo total (USD)": 8.251292137,
     "Costo de establecimiento (USD)": 7.187916334,
     "Costo de oportunidad (USD)": "1.063375803",
     "Peso Carbón": 875,
     "Peso Biodiversidad": 125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_5_weight_7_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#16ABBF"
   },
   {
     "dataId": 47,
     "traceIndex": 4,
     "pointIndex": 7,
     "Escenario": "Costo-efectivo (Meta 5)",
     "Carbón (Gt)": 1.380661621,
     "Biodiversidad (%)": "17.7634312",
     "Costo total (USD)": 8.249315146,
     "Costo de establecimiento (USD)": 7.188989143,
     "Costo de oportunidad (USD)": "1.060326002",
     "Peso Carbón": 0.9375,
     "Peso Biodiversidad": 0.0625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_5_weight_9_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#17A9C3"
   },
   {
     "dataId": 48,
     "traceIndex": 4,
     "pointIndex": 8,
     "Escenario": "Costo-efectivo (Meta 5)",
     "Carbón (Gt)": 1.381004927,
     "Biodiversidad (%)": "17.4868656",
     "Costo total (USD)": 8.223205957,
     "Costo de establecimiento (USD)": 7.189671683,
     "Costo de oportunidad (USD)": "1.033534275",
     "Peso Carbón": 0.96875,
     "Peso Biodiversidad": 0.03125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_5_weight_10_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#17A6CB"
   },
   {
     "dataId": 49,
     "traceIndex": 4,
     "pointIndex": 9,
     "Escenario": "Costo-efectivo (Meta 5)",
     "Carbón (Gt)": 1.384102624,
     "Biodiversidad (%)": "16.8796812",
     "Costo total (USD)": 8.17178482,
     "Costo de establecimiento (USD)": 7.188944017,
     "Costo de oportunidad (USD)": "0.9828408036",
     "Peso Carbón": 1,
     "Peso Biodiversidad": 0,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_5_weight_1_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#0BD265"
   },
   {
     "dataId": 50,
     "traceIndex": 5,
     "pointIndex": 0,
     "Escenario": "Costo-efectivo (Meta 6)",
     "Carbón (Gt)": 1.169825198,
     "Biodiversidad (%)": "18.005115",
     "Costo total (USD)": 2875.01,
     "Costo de establecimiento (USD)": 7.736532692,
     "Costo de oportunidad (USD)": "21.013548706",
     "Peso Carbón": 0,
     "Peso Biodiversidad": 1,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_6_weight_2_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#10C389"
   },
   {
     "dataId": 51,
     "traceIndex": 5,
     "pointIndex": 1,
     "Escenario": "Costo-efectivo (Meta 6)",
     "Carbón (Gt)": 1.357795445,
     "Biodiversidad (%)": "18.0053804",
     "Costo total (USD)": 3177.75,
     "Costo de establecimiento (USD)": 7.496621819,
     "Costo de oportunidad (USD)": "24.280851965",
     "Peso Carbón": 0.0625,
     "Peso Biodiversidad": 0.9375,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_6_weight_9_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#17A9C3"
   },
   {
     "dataId": 52,
     "traceIndex": 5,
     "pointIndex": 2,
     "Escenario": "Costo-efectivo (Meta 6)",
     "Carbón (Gt)": 1.422813567,
     "Biodiversidad (%)": "18.0064718",
     "Costo total (USD)": 3251.57,
     "Costo de establecimiento (USD)": 7.397106979,
     "Costo de oportunidad (USD)": "25.118620135",
     "Peso Carbón": 125,
     "Peso Biodiversidad": 875,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_6_weight_7_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#16ABBF"
   },
   {
     "dataId": 53,
     "traceIndex": 5,
     "pointIndex": 3,
     "Escenario": "Costo-efectivo (Meta 6)",
     "Carbón (Gt)": 1.489041367,
     "Biodiversidad (%)": "17.9961472",
     "Costo total (USD)": 3425.24,
     "Costo de establecimiento (USD)": 7.347246899,
     "Costo de oportunidad (USD)": "26.905111492",
     "Peso Carbón": 0.25,
     "Peso Biodiversidad": 0.75,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_6_weight_5_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#15B0B4"
   },
   {
     "dataId": 54,
     "traceIndex": 5,
     "pointIndex": 4,
     "Escenario": "Costo-efectivo (Meta 6)",
     "Carbón (Gt)": 1.525743285,
     "Biodiversidad (%)": "17.978324",
     "Costo total (USD)": 3486.75,
     "Costo de establecimiento (USD)": 7.36714325,
     "Costo de oportunidad (USD)": "27.50039965",
     "Peso Carbón": 0.5,
     "Peso Biodiversidad": 0.5,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_6_weight_3_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#13B7A3"
   },
   {
     "dataId": 55,
     "traceIndex": 5,
     "pointIndex": 5,
     "Escenario": "Costo-efectivo (Meta 6)",
     "Carbón (Gt)": 1.53609136,
     "Biodiversidad (%)": "17.9342413",
     "Costo total (USD)": 3476.24,
     "Costo de establecimiento (USD)": 7.401055188,
     "Costo de oportunidad (USD)": "27.361322786",
     "Peso Carbón": 0.75,
     "Peso Biodiversidad": 0.25,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_6_weight_4_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#14B3AD"
   },
   {
     "dataId": 56,
     "traceIndex": 5,
     "pointIndex": 6,
     "Escenario": "Costo-efectivo (Meta 6)",
     "Carbón (Gt)": 1.538680904,
     "Biodiversidad (%)": "17.747161",
     "Costo total (USD)": 3445.72,
     "Costo de establecimiento (USD)": 7.426318178,
     "Costo de oportunidad (USD)": "27.030895264",
     "Peso Carbón": 875,
     "Peso Biodiversidad": 125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_6_weight_6_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#15ADBA"
   },
   {
     "dataId": 57,
     "traceIndex": 5,
     "pointIndex": 7,
     "Escenario": "Costo-efectivo (Meta 6)",
     "Carbón (Gt)": 1.539987107,
     "Biodiversidad (%)": "17.5748984",
     "Costo total (USD)": 3428.2,
     "Costo de establecimiento (USD)": 7.436048121,
     "Costo de oportunidad (USD)": "26.845985779",
     "Peso Carbón": 0.9375,
     "Peso Biodiversidad": 0.0625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_6_weight_8_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#16A9C3"
   },
   {
     "dataId": 58,
     "traceIndex": 5,
     "pointIndex": 8,
     "Escenario": "Costo-efectivo (Meta 6)",
     "Carbón (Gt)": 1.540438047,
     "Biodiversidad (%)": "17.533205499999998",
     "Costo total (USD)": 3422.72,
     "Costo de establecimiento (USD)": 7.443830868,
     "Costo de oportunidad (USD)": "26.783338799",
     "Peso Carbón": 0.96875,
     "Peso Biodiversidad": 0.03125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_6_weight_10_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#17A6CB"
   },
   {
     "dataId": 59,
     "traceIndex": 5,
     "pointIndex": 9,
     "Escenario": "Costo-efectivo (Meta 6)",
     "Carbón (Gt)": 1.55053778,
     "Biodiversidad (%)": "17.090536899999996",
     "Costo total (USD)": 3426.71,
     "Costo de establecimiento (USD)": 7.450139256,
     "Costo de oportunidad (USD)": "26.816929372",
     "Peso Carbón": 1,
     "Peso Biodiversidad": 0,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_6_weight_1_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#0BD265"
   },
   {
     "dataId": 60,
     "traceIndex": 6,
     "pointIndex": 0,
     "Escenario": "Máximo beneficio (Meta 1)",
     "Carbón (Gt)": 1.927315996,
     "Biodiversidad (%)": "18.042775",
     "Costo total (USD)": 19.133892969,
     "Costo de establecimiento (USD)": 12.233301675,
     "Costo de oportunidad (USD)": "6.900591295",
     "Peso Carbón": 0,
     "Peso Biodiversidad": 1,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_1_weight_2_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#3A77FB"
   },
   {
     "dataId": 61,
     "traceIndex": 6,
     "pointIndex": 1,
     "Escenario": "Máximo beneficio (Meta 1)",
     "Carbón (Gt)": 2.104694287,
     "Biodiversidad (%)": "18.0425195",
     "Costo total (USD)": 15.494743438,
     "Costo de establecimiento (USD)": 11.941674224,
     "Costo de oportunidad (USD)": "3.553069215",
     "Peso Carbón": 0.0625,
     "Peso Biodiversidad": 0.9375,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_1_weight_10_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#208DFE"
   },
   {
     "dataId": 62,
     "traceIndex": 6,
     "pointIndex": 2,
     "Escenario": "Máximo beneficio (Meta 1)",
     "Carbón (Gt)": 2.124825515,
     "Biodiversidad (%)": "18.0438316",
     "Costo total (USD)": 15.06481517,
     "Costo de establecimiento (USD)": 11.933032719,
     "Costo de oportunidad (USD)": "3.131782451",
     "Peso Carbón": 125,
     "Peso Biodiversidad": 875,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_1_weight_8_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#1C97EE"
   },
   {
     "dataId": 63,
     "traceIndex": 6,
     "pointIndex": 3,
     "Escenario": "Máximo beneficio (Meta 1)",
     "Carbón (Gt)": 2.135796045,
     "Biodiversidad (%)": "18.0436622",
     "Costo total (USD)": 14.878128667,
     "Costo de establecimiento (USD)": 11.944375693,
     "Costo de oportunidad (USD)": "2.933752974",
     "Peso Carbón": 0.25,
     "Peso Biodiversidad": 0.75,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_1_weight_6_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#1C95F2"
   },
   {
     "dataId": 64,
     "traceIndex": 6,
     "pointIndex": 4,
     "Escenario": "Máximo beneficio (Meta 1)",
     "Carbón (Gt)": 2.14199787,
     "Biodiversidad (%)": "18.0403935",
     "Costo total (USD)": 14.817763131,
     "Costo de establecimiento (USD)": 11.955769599,
     "Costo de oportunidad (USD)": "2.861993531",
     "Peso Carbón": 0.5,
     "Peso Biodiversidad": 0.5,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_1_weight_3_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#357BFC"
   },
   {
     "dataId": 65,
     "traceIndex": 6,
     "pointIndex": 5,
     "Escenario": "Máximo beneficio (Meta 1)",
     "Carbón (Gt)": 2.143978422,
     "Biodiversidad (%)": "18.0348889",
     "Costo total (USD)": 14.798081203,
     "Costo de establecimiento (USD)": 11.962850614,
     "Costo de oportunidad (USD)": "2.835230589",
     "Peso Carbón": 0.75,
     "Peso Biodiversidad": 0.25,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_1_weight_4_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#347CFC"
   },
   {
     "dataId": 66,
     "traceIndex": 6,
     "pointIndex": 6,
     "Escenario": "Máximo beneficio (Meta 1)",
     "Carbón (Gt)": 2.144555143,
     "Biodiversidad (%)": "18.0229762",
     "Costo total (USD)": 14.797490977,
     "Costo de establecimiento (USD)": 11.96607416,
     "Costo de oportunidad (USD)": "2.831416817",
     "Peso Carbón": 875,
     "Peso Biodiversidad": 125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_1_weight_5_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#228BFE"
   },
   {
     "dataId": 67,
     "traceIndex": 6,
     "pointIndex": 7,
     "Escenario": "Máximo beneficio (Meta 1)",
     "Carbón (Gt)": 2.145167997,
     "Biodiversidad (%)": "18.0181166",
     "Costo total (USD)": 14.799799604,
     "Costo de establecimiento (USD)": 11.965978307,
     "Costo de oportunidad (USD)": "2.833821297",
     "Peso Carbón": 0.9375,
     "Peso Biodiversidad": 0.0625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_1_weight_7_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#1B99EA"
   },
   {
     "dataId": 68,
     "traceIndex": 6,
     "pointIndex": 8,
     "Escenario": "Máximo beneficio (Meta 1)",
     "Carbón (Gt)": 2.145594487,
     "Biodiversidad (%)": "17.901775100000002",
     "Costo total (USD)": 14.777031834,
     "Costo de establecimiento (USD)": 11.965750876,
     "Costo de oportunidad (USD)": "2.811280958",
     "Peso Carbón": 0.96875,
     "Peso Biodiversidad": 0.03125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_1_weight_9_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#1D92F8"
   },
   {
     "dataId": 69,
     "traceIndex": 6,
     "pointIndex": 9,
     "Escenario": "Máximo beneficio (Meta 1)",
     "Carbón (Gt)": 2.147858576,
     "Biodiversidad (%)": "17.6714498",
     "Costo total (USD)": 14.746364365,
     "Costo de establecimiento (USD)": 11.964169531,
     "Costo de oportunidad (USD)": "2.782194834",
     "Peso Carbón": 1,
     "Peso Biodiversidad": 0,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_1_weight_1_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#3E74FB"
   },
   {
     "dataId": 70,
     "traceIndex": 7,
     "pointIndex": 0,
     "Escenario": "Máximo beneficio (Meta 2)",
     "Carbón (Gt)": 1.905609952,
     "Biodiversidad (%)": "18.0326319",
     "Costo total (USD)": 4624.2,
     "Costo de establecimiento (USD)": 12.485491295,
     "Costo de oportunidad (USD)": "33.756459066",
     "Peso Carbón": 0,
     "Peso Biodiversidad": 1,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_2_weight_2_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#0DCD72"
   },
   {
     "dataId": 71,
     "traceIndex": 7,
     "pointIndex": 1,
     "Escenario": "Máximo beneficio (Meta 2)",
     "Carbón (Gt)": 2.216183873,
     "Biodiversidad (%)": "18.0293856",
     "Costo total (USD)": 4775.63,
     "Costo de establecimiento (USD)": 12.062914091,
     "Costo de oportunidad (USD)": "35.693367865",
     "Peso Carbón": 0.0625,
     "Peso Biodiversidad": 0.9375,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_2_weight_9_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#06E53B"
   },
   {
     "dataId": 72,
     "traceIndex": 7,
     "pointIndex": 2,
     "Escenario": "Máximo beneficio (Meta 2)",
     "Carbón (Gt)": 2.328988744,
     "Biodiversidad (%)": "18.0218485",
     "Costo total (USD)": 4948.54,
     "Costo de establecimiento (USD)": 11.981328673,
     "Costo de oportunidad (USD)": "37.50407237",
     "Peso Carbón": 125,
     "Peso Biodiversidad": 875,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_2_weight_7_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#03F11F"
   },
   {
     "dataId": 73,
     "traceIndex": 7,
     "pointIndex": 3,
     "Escenario": "Máximo beneficio (Meta 2)",
     "Carbón (Gt)": 2.39346932,
     "Biodiversidad (%)": "18.0128822",
     "Costo total (USD)": 4996.97,
     "Costo de establecimiento (USD)": 11.985219153,
     "Costo de oportunidad (USD)": "37.984505987",
     "Peso Carbón": 0.25,
     "Peso Biodiversidad": 0.75,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_2_weight_4_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#08DE4A"
   },
   {
     "dataId": 74,
     "traceIndex": 7,
     "pointIndex": 4,
     "Escenario": "Máximo beneficio (Meta 2)",
     "Carbón (Gt)": 2.424646036,
     "Biodiversidad (%)": "18.0023309",
     "Costo total (USD)": 5012.54,
     "Costo de establecimiento (USD)": 12.046921244,
     "Costo de oportunidad (USD)": "38.078432357",
     "Peso Carbón": 0.5,
     "Peso Biodiversidad": 0.5,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_2_weight_3_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#0CCF6E"
   },
   {
     "dataId": 75,
     "traceIndex": 7,
     "pointIndex": 5,
     "Escenario": "Máximo beneficio (Meta 2)",
     "Carbón (Gt)": 2.432791883,
     "Biodiversidad (%)": "17.985773899999998",
     "Costo total (USD)": 5024.59,
     "Costo de establecimiento (USD)": 12.090964803,
     "Costo de oportunidad (USD)": "38.154919515",
     "Peso Carbón": 0.75,
     "Peso Biodiversidad": 0.25,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_2_weight_5_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#04EF23"
   },
   {
     "dataId": 76,
     "traceIndex": 7,
     "pointIndex": 6,
     "Escenario": "Máximo beneficio (Meta 2)",
     "Carbón (Gt)": 2.434582936,
     "Biodiversidad (%)": "17.9290382",
     "Costo total (USD)": 5012.46,
     "Costo de establecimiento (USD)": 12.113031936,
     "Costo de oportunidad (USD)": "38.011552198",
     "Peso Carbón": 875,
     "Peso Biodiversidad": 125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_2_weight_6_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#02F418"
   },
   {
     "dataId": 77,
     "traceIndex": 7,
     "pointIndex": 7,
     "Escenario": "Máximo beneficio (Meta 2)",
     "Carbón (Gt)": 2.435677379,
     "Biodiversidad (%)": "17.741075399999996",
     "Costo total (USD)": 5016.96,
     "Costo de establecimiento (USD)": 12.120192603,
     "Costo de oportunidad (USD)": "38.049369422",
     "Peso Carbón": 0.9375,
     "Peso Biodiversidad": 0.0625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_2_weight_8_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#05EC2A"
   },
   {
     "dataId": 78,
     "traceIndex": 7,
     "pointIndex": 8,
     "Escenario": "Máximo beneficio (Meta 2)",
     "Carbón (Gt)": 2.43603105,
     "Biodiversidad (%)": "17.6726457",
     "Costo total (USD)": 5014.2,
     "Costo de establecimiento (USD)": 12.124034297,
     "Costo de oportunidad (USD)": "38.018005641",
     "Peso Carbón": 0.96875,
     "Peso Biodiversidad": 0.03125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_2_weight_10_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#0AD759"
   },
   {
     "dataId": 79,
     "traceIndex": 7,
     "pointIndex": 9,
     "Escenario": "Máximo beneficio (Meta 2)",
     "Carbón (Gt)": 2.444591935,
     "Biodiversidad (%)": "17.2846252",
     "Costo total (USD)": 5040.88,
     "Costo de establecimiento (USD)": 12.133227162,
     "Costo de oportunidad (USD)": "38.275594832",
     "Peso Carbón": 1,
     "Peso Biodiversidad": 0,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_2_weight_1_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#0ECA78"
   },
   {
     "dataId": 80,
     "traceIndex": 8,
     "pointIndex": 0,
     "Escenario": "Máximo beneficio (Meta 3)",
     "Carbón (Gt)": 1.784966231,
     "Biodiversidad (%)": "18.0407961",
     "Costo total (USD)": 17.409145424,
     "Costo de establecimiento (USD)": 11.310618267,
     "Costo de oportunidad (USD)": "6.098527157",
     "Peso Carbón": 0,
     "Peso Biodiversidad": 1,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_3_weight_2_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#50E200"
   },
   {
     "dataId": 81,
     "traceIndex": 8,
     "pointIndex": 1,
     "Escenario": "Máximo beneficio (Meta 3)",
     "Carbón (Gt)": 1.960635392,
     "Biodiversidad (%)": "18.0408338",
     "Costo total (USD)": 14.16835086,
     "Costo de establecimiento (USD)": 11.033175798,
     "Costo de oportunidad (USD)": "3.135175062",
     "Peso Carbón": 0.0625,
     "Peso Biodiversidad": 0.9375,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_3_weight_10_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#61DC00"
   },
   {
     "dataId": 82,
     "traceIndex": 8,
     "pointIndex": 2,
     "Escenario": "Máximo beneficio (Meta 3)",
     "Carbón (Gt)": 1.983141506,
     "Biodiversidad (%)": "18.0427552",
     "Costo total (USD)": 13.735046188,
     "Costo de establecimiento (USD)": 11.014071273,
     "Costo de oportunidad (USD)": "2.720974915",
     "Peso Carbón": 125,
     "Peso Biodiversidad": 875,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_3_weight_6_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#9FC600"
   },
   {
     "dataId": 83,
     "traceIndex": 8,
     "pointIndex": 3,
     "Escenario": "Máximo beneficio (Meta 3)",
     "Carbón (Gt)": 1.993631451,
     "Biodiversidad (%)": "18.043228100000004",
     "Costo total (USD)": 13.52428921,
     "Costo de establecimiento (USD)": 11.024638985,
     "Costo de oportunidad (USD)": "2.499650225",
     "Peso Carbón": 0.25,
     "Peso Biodiversidad": 0.75,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_3_weight_5_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#A4C400"
   },
   {
     "dataId": 84,
     "traceIndex": 8,
     "pointIndex": 4,
     "Escenario": "Máximo beneficio (Meta 3)",
     "Carbón (Gt)": 1.998229028,
     "Biodiversidad (%)": "18.0375184",
     "Costo total (USD)": 13.441928435,
     "Costo de establecimiento (USD)": 11.039418664,
     "Costo de oportunidad (USD)": "2.402509771",
     "Peso Carbón": 0.5,
     "Peso Biodiversidad": 0.5,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_3_weight_3_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#54E100"
   },
   {
     "dataId": 85,
     "traceIndex": 8,
     "pointIndex": 5,
     "Escenario": "Máximo beneficio (Meta 3)",
     "Carbón (Gt)": 1.999722585,
     "Biodiversidad (%)": "18.017341899999998",
     "Costo total (USD)": 13.414339258,
     "Costo de establecimiento (USD)": 11.048037104,
     "Costo de oportunidad (USD)": "2.366302154",
     "Peso Carbón": 0.75,
     "Peso Biodiversidad": 0.25,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_3_weight_4_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#76D500"
   },
   {
     "dataId": 86,
     "traceIndex": 8,
     "pointIndex": 6,
     "Escenario": "Máximo beneficio (Meta 3)",
     "Carbón (Gt)": 2.00013693,
     "Biodiversidad (%)": "18.0100013",
     "Costo total (USD)": 13.411899712,
     "Costo de establecimiento (USD)": 11.050994595,
     "Costo de oportunidad (USD)": "2.360905117",
     "Peso Carbón": 875,
     "Peso Biodiversidad": 125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_3_weight_7_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#8DCD00"
   },
   {
     "dataId": 87,
     "traceIndex": 8,
     "pointIndex": 7,
     "Escenario": "Máximo beneficio (Meta 3)",
     "Carbón (Gt)": 2.000638611,
     "Biodiversidad (%)": "18.005461",
     "Costo total (USD)": 13.412808292,
     "Costo de establecimiento (USD)": 11.051846645,
     "Costo de oportunidad (USD)": "2.360961648",
     "Peso Carbón": 0.9375,
     "Peso Biodiversidad": 0.0625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_3_weight_8_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#79D300"
   },
   {
     "dataId": 88,
     "traceIndex": 8,
     "pointIndex": 8,
     "Escenario": "Máximo beneficio (Meta 3)",
     "Carbón (Gt)": 2.001012959,
     "Biodiversidad (%)": "17.8668264",
     "Costo total (USD)": 13.389034763,
     "Costo de establecimiento (USD)": 11.052050552,
     "Costo de oportunidad (USD)": "2.336984212",
     "Peso Carbón": 0.96875,
     "Peso Biodiversidad": 0.03125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_3_weight_9_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#71D700"
   },
   {
     "dataId": 89,
     "traceIndex": 8,
     "pointIndex": 9,
     "Escenario": "Máximo beneficio (Meta 3)",
     "Carbón (Gt)": 2.003324704,
     "Biodiversidad (%)": "17.657994499999997",
     "Costo total (USD)": 13.354017636,
     "Costo de establecimiento (USD)": 11.050634449,
     "Costo de oportunidad (USD)": "2.303383187",
     "Peso Carbón": 1,
     "Peso Biodiversidad": 0,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_3_weight_1_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#4BE400"
   },
   {
     "dataId": 90,
     "traceIndex": 9,
     "pointIndex": 0,
     "Escenario": "Máximo beneficio (Meta 4)",
     "Carbón (Gt)": 1.763677275,
     "Biodiversidad (%)": "18.028064800000003",
     "Costo total (USD)": 4282.85,
     "Costo de establecimiento (USD)": 11.57568997,
     "Costo de oportunidad (USD)": "31.252784194",
     "Peso Carbón": 0,
     "Peso Biodiversidad": 1,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_4_weight_2_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF9B00"
   },
   {
     "dataId": 91,
     "traceIndex": 9,
     "pointIndex": 1,
     "Escenario": "Máximo beneficio (Meta 4)",
     "Carbón (Gt)": 2.051815499,
     "Biodiversidad (%)": "18.027357100000003",
     "Costo total (USD)": 4474.48,
     "Costo de establecimiento (USD)": 11.192574855,
     "Costo de oportunidad (USD)": "33.552204626",
     "Peso Carbón": 0.0625,
     "Peso Biodiversidad": 0.9375,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_4_weight_9_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF9200"
   },
   {
     "dataId": 92,
     "traceIndex": 9,
     "pointIndex": 2,
     "Escenario": "Máximo beneficio (Meta 4)",
     "Carbón (Gt)": 2.157489992,
     "Biodiversidad (%)": "18.019695300000002",
     "Costo total (USD)": 4631.43,
     "Costo de establecimiento (USD)": 11.100984929,
     "Costo de oportunidad (USD)": "35.213290268",
     "Peso Carbón": 125,
     "Peso Biodiversidad": 875,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_4_weight_7_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF8500"
   },
   {
     "dataId": 93,
     "traceIndex": 9,
     "pointIndex": 3,
     "Escenario": "Máximo beneficio (Meta 4)",
     "Carbón (Gt)": 2.223436317,
     "Biodiversidad (%)": "18.009453600000004",
     "Costo total (USD)": 4701.01,
     "Costo de establecimiento (USD)": 11.093206862,
     "Costo de oportunidad (USD)": "35.916938527",
     "Peso Carbón": 0.25,
     "Peso Biodiversidad": 0.75,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_4_weight_5_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF7200"
   },
   {
     "dataId": 94,
     "traceIndex": 9,
     "pointIndex": 4,
     "Escenario": "Máximo beneficio (Meta 4)",
     "Carbón (Gt)": 2.255423774,
     "Biodiversidad (%)": "17.9981759",
     "Costo total (USD)": 4700.05,
     "Costo de establecimiento (USD)": 11.151888582,
     "Costo de oportunidad (USD)": "35.848585756",
     "Peso Carbón": 0.5,
     "Peso Biodiversidad": 0.5,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_4_weight_3_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF7B00"
   },
   {
     "dataId": 95,
     "traceIndex": 9,
     "pointIndex": 5,
     "Escenario": "Máximo beneficio (Meta 4)",
     "Carbón (Gt)": 2.264013452,
     "Biodiversidad (%)": "17.9795163",
     "Costo total (USD)": 4699.58,
     "Costo de establecimiento (USD)": 11.19519398,
     "Costo de oportunidad (USD)": "35.800594959",
     "Peso Carbón": 0.75,
     "Peso Biodiversidad": 0.25,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_4_weight_4_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF6B00"
   },
   {
     "dataId": 96,
     "traceIndex": 9,
     "pointIndex": 6,
     "Escenario": "Máximo beneficio (Meta 4)",
     "Carbón (Gt)": 2.265885961,
     "Biodiversidad (%)": "17.8995085",
     "Costo total (USD)": 4693.38,
     "Costo de establecimiento (USD)": 11.214213791,
     "Costo de oportunidad (USD)": "35.719600088",
     "Peso Carbón": 875,
     "Peso Biodiversidad": 125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_4_weight_6_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF7A00"
   },
   {
     "dataId": 97,
     "traceIndex": 9,
     "pointIndex": 7,
     "Escenario": "Máximo beneficio (Meta 4)",
     "Carbón (Gt)": 2.267021615,
     "Biodiversidad (%)": "17.718618199999998",
     "Costo total (USD)": 4692.87,
     "Costo de establecimiento (USD)": 11.219928905,
     "Costo de oportunidad (USD)": "35.708798308",
     "Peso Carbón": 0.9375,
     "Peso Biodiversidad": 0.0625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_4_weight_8_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF8E00"
   },
   {
     "dataId": 98,
     "traceIndex": 9,
     "pointIndex": 8,
     "Escenario": "Máximo beneficio (Meta 4)",
     "Carbón (Gt)": 2.267360568,
     "Biodiversidad (%)": "17.6624787",
     "Costo total (USD)": 4696.91,
     "Costo de establecimiento (USD)": 11.219686585,
     "Costo de oportunidad (USD)": "35.749397634",
     "Peso Carbón": 0.96875,
     "Peso Biodiversidad": 0.03125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_4_weight_10_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF9A00"
   },
   {
     "dataId": 99,
     "traceIndex": 9,
     "pointIndex": 9,
     "Escenario": "Máximo beneficio (Meta 4)",
     "Carbón (Gt)": 2.276240719,
     "Biodiversidad (%)": "17.265658600000002",
     "Costo total (USD)": 4710.52,
     "Costo de establecimiento (USD)": 11.235081341,
     "Costo de oportunidad (USD)": "35.870070851",
     "Peso Carbón": 1,
     "Peso Biodiversidad": 0,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_4_weight_1_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#F2A900"
   },
   {
     "dataId": 100,
     "traceIndex": 10,
     "pointIndex": 0,
     "Escenario": "Máximo beneficio (Meta 5)",
     "Carbón (Gt)": 2.483419514,
     "Biodiversidad (%)": "18.0481694",
     "Costo total (USD)": 26.164745393,
     "Costo de establecimiento (USD)": 15.834633079,
     "Costo de oportunidad (USD)": "10.330112314",
     "Peso Carbón": 0,
     "Peso Biodiversidad": 1,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_5_weight_2_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF1600"
   },
   {
     "dataId": 101,
     "traceIndex": 10,
     "pointIndex": 1,
     "Escenario": "Máximo beneficio (Meta 5)",
     "Carbón (Gt)": 2.672268061,
     "Biodiversidad (%)": "18.0460814",
     "Costo total (USD)": 20.917038311,
     "Costo de establecimiento (USD)": 15.519577076,
     "Costo de oportunidad (USD)": "5.397461235",
     "Peso Carbón": 125,
     "Peso Biodiversidad": 875,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_5_weight_10_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF3100"
   },
   {
     "dataId": 102,
     "traceIndex": 10,
     "pointIndex": 2,
     "Escenario": "Máximo beneficio (Meta 5)",
     "Carbón (Gt)": 2.686156413,
     "Biodiversidad (%)": "18.046235600000003",
     "Costo total (USD)": 20.792718057,
     "Costo de establecimiento (USD)": 15.523902104,
     "Costo de oportunidad (USD)": "5.268815954",
     "Peso Carbón": 0.25,
     "Peso Biodiversidad": 0.75,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_5_weight_9_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF2900"
   },
   {
     "dataId": 103,
     "traceIndex": 10,
     "pointIndex": 3,
     "Escenario": "Máximo beneficio (Meta 5)",
     "Carbón (Gt)": 2.696078137,
     "Biodiversidad (%)": "18.047029300000002",
     "Costo total (USD)": 20.791219005,
     "Costo de establecimiento (USD)": 15.526251464,
     "Costo de oportunidad (USD)": "5.264967541",
     "Peso Carbón": 0.5,
     "Peso Biodiversidad": 0.5,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_5_weight_3_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF0000"
   },
   {
     "dataId": 104,
     "traceIndex": 10,
     "pointIndex": 4,
     "Escenario": "Máximo beneficio (Meta 5)",
     "Carbón (Gt)": 2.700201969,
     "Biodiversidad (%)": "18.045829100000002",
     "Costo total (USD)": 20.808643988,
     "Costo de establecimiento (USD)": 15.52855556,
     "Costo de oportunidad (USD)": "5.280088428",
     "Peso Carbón": 0.75,
     "Peso Biodiversidad": 0.25,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_5_weight_4_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF0200"
   },
   {
     "dataId": 105,
     "traceIndex": 10,
     "pointIndex": 5,
     "Escenario": "Máximo beneficio (Meta 5)",
     "Carbón (Gt)": 2.701572936,
     "Biodiversidad (%)": "18.045363000000002",
     "Costo total (USD)": 20.818625774,
     "Costo de establecimiento (USD)": 15.528102722,
     "Costo de oportunidad (USD)": "5.290523052",
     "Peso Carbón": 875,
     "Peso Biodiversidad": 125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_5_weight_5_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF0F00"
   },
   {
     "dataId": 106,
     "traceIndex": 10,
     "pointIndex": 6,
     "Escenario": "Máximo beneficio (Meta 5)",
     "Carbón (Gt)": 2.702260116,
     "Biodiversidad (%)": "18.0454789",
     "Costo total (USD)": 20.823200785,
     "Costo de establecimiento (USD)": 15.527883203,
     "Costo de oportunidad (USD)": "5.295317582",
     "Peso Carbón": 0.9375,
     "Peso Biodiversidad": 0.0625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_5_weight_6_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF1700"
   },
   {
     "dataId": 107,
     "traceIndex": 10,
     "pointIndex": 7,
     "Escenario": "Máximo beneficio (Meta 5)",
     "Carbón (Gt)": 2.702713277,
     "Biodiversidad (%)": "18.0453854",
     "Costo total (USD)": 20.802820886,
     "Costo de establecimiento (USD)": 15.527568088,
     "Costo de oportunidad (USD)": "5.275252798",
     "Peso Carbón": 0.96875,
     "Peso Biodiversidad": 0.03125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_5_weight_7_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF1D00"
   },
   {
     "dataId": 108,
     "traceIndex": 10,
     "pointIndex": 8,
     "Escenario": "Máximo beneficio (Meta 5)",
     "Carbón (Gt)": 2.702880299,
     "Biodiversidad (%)": "17.9723301",
     "Costo total (USD)": 20.789217222,
     "Costo de establecimiento (USD)": 15.527676979,
     "Costo de oportunidad (USD)": "5.261540244",
     "Peso Carbón": 0.984375,
     "Peso Biodiversidad": 0.015625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_5_weight_8_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF2500"
   },
   {
     "dataId": 109,
     "traceIndex": 10,
     "pointIndex": 9,
     "Escenario": "Máximo beneficio (Meta 5)",
     "Carbón (Gt)": 2.704980107,
     "Biodiversidad (%)": "17.7557861",
     "Costo total (USD)": 20.788425636,
     "Costo de establecimiento (USD)": 15.526161812,
     "Costo de oportunidad (USD)": "5.262263824",
     "Peso Carbón": 1,
     "Peso Biodiversidad": 0,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_5_weight_1_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF3000"
   },
   {
     "dataId": 110,
     "traceIndex": 11,
     "pointIndex": 0,
     "Escenario": "Máximo beneficio (Meta 6)",
     "Carbón (Gt)": 2.446509715,
     "Biodiversidad (%)": "18.040679",
     "Costo total (USD)": 5917.8,
     "Costo de establecimiento (USD)": 15.958569401,
     "Costo de oportunidad (USD)": "43.219407808",
     "Peso Carbón": 0,
     "Peso Biodiversidad": 1,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_6_weight_2_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#FF1600"
   },
   {
     "dataId": 111,
     "traceIndex": 11,
     "pointIndex": 1,
     "Escenario": "Máximo beneficio (Meta 6)",
     "Carbón (Gt)": 2.865722018,
     "Biodiversidad (%)": "18.0352687",
     "Costo total (USD)": 6009.46,
     "Costo de establecimiento (USD)": 15.476914536,
     "Costo de oportunidad (USD)": "44.617710956",
     "Peso Carbón": 0.0625,
     "Peso Biodiversidad": 0.9375,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_6_weight_9_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#FF2900"
   },
   {
     "dataId": 112,
     "traceIndex": 11,
     "pointIndex": 2,
     "Escenario": "Máximo beneficio (Meta 6)",
     "Carbón (Gt)": 2.978206129,
     "Biodiversidad (%)": "18.0306465",
     "Costo total (USD)": 6150.88,
     "Costo de establecimiento (USD)": 15.425404968,
     "Costo de oportunidad (USD)": "46.083435779",
     "Peso Carbón": 125,
     "Peso Biodiversidad": 875,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_6_weight_8_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#FF2500"
   },
   {
     "dataId": 113,
     "traceIndex": 11,
     "pointIndex": 3,
     "Escenario": "Máximo beneficio (Meta 6)",
     "Carbón (Gt)": 3.040949976,
     "Biodiversidad (%)": "18.0265075",
     "Costo total (USD)": 6235.23,
     "Costo de establecimiento (USD)": 15.463056488,
     "Costo de oportunidad (USD)": "46.889264957",
     "Peso Carbón": 0.25,
     "Peso Biodiversidad": 0.75,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_6_weight_4_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#FF0200"
   },
   {
     "dataId": 114,
     "traceIndex": 11,
     "pointIndex": 4,
     "Escenario": "Máximo beneficio (Meta 6)",
     "Carbón (Gt)": 3.068980402,
     "Biodiversidad (%)": "18.019992600000002",
     "Costo total (USD)": 6283.63,
     "Costo de establecimiento (USD)": 15.521546731,
     "Costo de oportunidad (USD)": "47.314765152",
     "Peso Carbón": 0.5,
     "Peso Biodiversidad": 0.5,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_6_weight_3_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#FF0000"
   },
   {
     "dataId": 115,
     "traceIndex": 11,
     "pointIndex": 5,
     "Escenario": "Máximo beneficio (Meta 6)",
     "Carbón (Gt)": 3.075614304,
     "Biodiversidad (%)": "18.010626300000002",
     "Costo total (USD)": 6293.52,
     "Costo de establecimiento (USD)": 15.551028081,
     "Costo de oportunidad (USD)": "47.384161296",
     "Peso Carbón": 0.75,
     "Peso Biodiversidad": 0.25,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_6_weight_5_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#FF0F00"
   },
   {
     "dataId": 116,
     "traceIndex": 11,
     "pointIndex": 6,
     "Escenario": "Máximo beneficio (Meta 6)",
     "Carbón (Gt)": 3.077030864,
     "Biodiversidad (%)": "18.0023705",
     "Costo total (USD)": 6296.77,
     "Costo de establecimiento (USD)": 15.560909198,
     "Costo de oportunidad (USD)": "47.406750873",
     "Peso Carbón": 875,
     "Peso Biodiversidad": 125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_6_weight_6_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#FF1700"
   },
   {
     "dataId": 117,
     "traceIndex": 11,
     "pointIndex": 7,
     "Escenario": "Máximo beneficio (Meta 6)",
     "Carbón (Gt)": 3.078047705,
     "Biodiversidad (%)": "17.8358026",
     "Costo total (USD)": 6300.01,
     "Costo de establecimiento (USD)": 15.557447026,
     "Costo de oportunidad (USD)": "47.442650564",
     "Peso Carbón": 0.9375,
     "Peso Biodiversidad": 0.0625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_6_weight_7_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#FF1D00"
   },
   {
     "dataId": 118,
     "traceIndex": 11,
     "pointIndex": 8,
     "Escenario": "Máximo beneficio (Meta 6)",
     "Carbón (Gt)": 3.078309698,
     "Biodiversidad (%)": "17.7648224",
     "Costo total (USD)": 6303.93,
     "Costo de establecimiento (USD)": 15.558268765,
     "Costo de oportunidad (USD)": "47.481018312",
     "Peso Carbón": 0.96875,
     "Peso Biodiversidad": 0.03125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_6_weight_10_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#FF3100"
   },
   {
     "dataId": 119,
     "traceIndex": 11,
     "pointIndex": 9,
     "Escenario": "Máximo beneficio (Meta 6)",
     "Carbón (Gt)": 3.085836782,
     "Biodiversidad (%)": "17.3691334",
     "Costo total (USD)": 6314.09,
     "Costo de establecimiento (USD)": 15.570897919,
     "Costo de oportunidad (USD)": "47.570044609",
     "Peso Carbón": 1,
     "Peso Biodiversidad": 0,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_6_weight_1_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#FF3000"
   },
   {
     "dataId": 120,
     "traceIndex": 12,
     "pointIndex": 0,
     "Escenario": "Mínimo costo (Meta 1)",
     "Carbón (Gt)": 0.314081615,
     "Biodiversidad (%)": "15.075882599999998",
     "Costo total (USD)": 1.601016128,
     "Costo de establecimiento (USD)": 1.441696094,
     "Costo de oportunidad (USD)": "0.1593200338",
     "Peso Carbón": null,
     "Peso Biodiversidad": null,
     "version": "v14",
     "MapImage": "scen_mincost_target_1_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#A020F0"
   },
   {
     "dataId": 121,
     "traceIndex": 13,
     "pointIndex": 0,
     "Escenario": "Mínimo costo (Meta 2)",
     "Carbón (Gt)": 0.624319761,
     "Biodiversidad (%)": "16.2948274",
     "Costo total (USD)": 3.501003548,
     "Costo de establecimiento (USD)": 3.139353711,
     "Costo de oportunidad (USD)": "0.3616498364",
     "Peso Carbón": null,
     "Peso Biodiversidad": null,
     "version": "v14",
     "MapImage": "scen_mincost_target_2_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#8D30F2"
   },
   {
     "dataId": 122,
     "traceIndex": 14,
     "pointIndex": 0,
     "Escenario": "Mínimo costo (Meta 3)",
     "Carbón (Gt)": 1.251406936,
     "Biodiversidad (%)": "16.6812956",
     "Costo total (USD)": 7.827576777,
     "Costo de establecimiento (USD)": 6.994960841,
     "Costo de oportunidad (USD)": "0.8326159367",
     "Peso Carbón": null,
     "Peso Biodiversidad": null,
     "version": "v14",
     "MapImage": "scen_mincost_target_3_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#7048F5"
   },
   {
     "dataId": 123,
     "traceIndex": 15,
     "pointIndex": 0,
     "Escenario": "Mínimo costo (Meta 4)",
     "Carbón (Gt)": 1.965183081,
     "Biodiversidad (%)": "17.719877399999998",
     "Costo total (USD)": 14.014659241,
     "Costo de establecimiento (USD)": 12.200890366,
     "Costo de oportunidad (USD)": "1.813768875",
     "Peso Carbón": null,
     "Peso Biodiversidad": null,
     "version": "v14",
     "MapImage": "scen_mincost_target_4_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#466DFA"
   },
   {
     "dataId": 124,
     "traceIndex": 16,
     "pointIndex": 0,
     "Escenario": "Mínimo costo (Meta 5)",
     "Carbón (Gt)": 1.837199458,
     "Biodiversidad (%)": "17.632840899999998",
     "Costo total (USD)": 12.745173831,
     "Costo de establecimiento (USD)": 11.171269158,
     "Costo de oportunidad (USD)": "1.573904673",
     "Peso Carbón": null,
     "Peso Biodiversidad": null,
     "version": "v14",
     "MapImage": "scen_mincost_target_5_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#1A9CE2"
   },
   {
     "dataId": 125,
     "traceIndex": 17,
     "pointIndex": 0,
     "Escenario": "Mínimo costo (Meta 6)",
     "Carbón (Gt)": 2.489350952,
     "Biodiversidad (%)": "18.0398213",
     "Costo total (USD)": 19.569568931,
     "Costo de establecimiento (USD)": 15.812180377,
     "Costo de oportunidad (USD)": "3.757388554",
     "Peso Carbón": null,
     "Peso Biodiversidad": null,
     "version": "v14",
     "MapImage": "scen_mincost_target_6_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#1A9CE2"
   }
  ];
  let originalRowData1 = [
   {
     "dataId": 0,
     "traceIndex": 0,
     "pointIndex": 0,
     "Escenario": "Costo-efectivo (Meta 1)",
     "Carbón (Gt)": 0.299296938,
     "Biodiversidad (%)": "17.8528737",
     "Costo total (USD)": 2.31279918,
     "Costo de establecimiento (USD)": 1.774206629,
     "Costo de oportunidad (USD)": "0.5385925509",
     "Peso Carbón": 0,
     "Peso Biodiversidad": 1,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_1_weight_2_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#8E2EF1"
   },
   {
     "dataId": 1,
     "traceIndex": 0,
     "pointIndex": 1,
     "Escenario": "Costo-efectivo (Meta 1)",
     "Carbón (Gt)": 0.319620265,
     "Biodiversidad (%)": "17.8621156",
     "Costo total (USD)": 2.164465092,
     "Costo de establecimiento (USD)": 1.711533331,
     "Costo de oportunidad (USD)": "0.4529317609",
     "Peso Carbón": 0.0625,
     "Peso Biodiversidad": 0.9375,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_1_weight_10_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#9F20F0"
   },
   {
     "dataId": 2,
     "traceIndex": 0,
     "pointIndex": 2,
     "Escenario": "Costo-efectivo (Meta 1)",
     "Carbón (Gt)": 0.331185818,
     "Biodiversidad (%)": "17.8587384",
     "Costo total (USD)": 2.056130293,
     "Costo de establecimiento (USD)": 1.661806327,
     "Costo de oportunidad (USD)": "0.3943239662",
     "Peso Carbón": 125,
     "Peso Biodiversidad": 875,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_1_weight_7_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#9628F1"
   },
   {
     "dataId": 3,
     "traceIndex": 0,
     "pointIndex": 3,
     "Escenario": "Costo-efectivo (Meta 1)",
     "Carbón (Gt)": 0.34326737,
     "Biodiversidad (%)": "17.818467100000003",
     "Costo total (USD)": 1.936876585,
     "Costo de establecimiento (USD)": 1.611651404,
     "Costo de oportunidad (USD)": "0.32522518139999995",
     "Peso Carbón": 0.25,
     "Peso Biodiversidad": 0.75,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_1_weight_5_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#932BF1"
   },
   {
     "dataId": 4,
     "traceIndex": 0,
     "pointIndex": 4,
     "Escenario": "Costo-efectivo (Meta 1)",
     "Carbón (Gt)": 0.352659481,
     "Biodiversidad (%)": "17.5593466",
     "Costo total (USD)": 1.851725294,
     "Costo de establecimiento (USD)": 1.58252054,
     "Costo de oportunidad (USD)": "0.2692047536",
     "Peso Carbón": 0.5,
     "Peso Biodiversidad": 0.5,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_1_weight_3_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#902DF1"
   },
   {
     "dataId": 5,
     "traceIndex": 0,
     "pointIndex": 5,
     "Escenario": "Costo-efectivo (Meta 1)",
     "Carbón (Gt)": 0.35675999,
     "Biodiversidad (%)": "16.9872208",
     "Costo total (USD)": 1.807707174,
     "Costo de establecimiento (USD)": 1.579608663,
     "Costo de oportunidad (USD)": "0.2280985114",
     "Peso Carbón": 0.75,
     "Peso Biodiversidad": 0.25,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_1_weight_4_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#912CF1"
   },
   {
     "dataId": 6,
     "traceIndex": 0,
     "pointIndex": 6,
     "Escenario": "Costo-efectivo (Meta 1)",
     "Carbón (Gt)": 0.358406047,
     "Biodiversidad (%)": "16.658651",
     "Costo total (USD)": 1.802224098,
     "Costo de establecimiento (USD)": 1.580743448,
     "Costo de oportunidad (USD)": "0.22148065009999998",
     "Peso Carbón": 875,
     "Peso Biodiversidad": 125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_1_weight_6_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#9429F1"
   },
   {
     "dataId": 7,
     "traceIndex": 0,
     "pointIndex": 7,
     "Escenario": "Costo-efectivo (Meta 1)",
     "Carbón (Gt)": 0.359343072,
     "Biodiversidad (%)": "16.467480199999997",
     "Costo total (USD)": 1.800926266,
     "Costo de establecimiento (USD)": 1.581438654,
     "Costo de oportunidad (USD)": "0.2194876124",
     "Peso Carbón": 0.9375,
     "Peso Biodiversidad": 0.0625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_1_weight_8_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#9727F0"
   },
   {
     "dataId": 8,
     "traceIndex": 0,
     "pointIndex": 8,
     "Escenario": "Costo-efectivo (Meta 1)",
     "Carbón (Gt)": 0.359949967,
     "Biodiversidad (%)": "16.0182969",
     "Costo total (USD)": 1.77408743,
     "Costo de establecimiento (USD)": 1.581143962,
     "Costo de oportunidad (USD)": "0.1929434675",
     "Peso Carbón": 0.96875,
     "Peso Biodiversidad": 0.03125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_1_weight_9_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#9926F0"
   },
   {
     "dataId": 9,
     "traceIndex": 0,
     "pointIndex": 9,
     "Escenario": "Costo-efectivo (Meta 1)",
     "Carbón (Gt)": 0.365591317,
     "Biodiversidad (%)": "15.073952300000002",
     "Costo total (USD)": 1.703733692,
     "Costo de establecimiento (USD)": 1.572200736,
     "Costo de oportunidad (USD)": "0.1315329565",
     "Peso Carbón": 1,
     "Peso Biodiversidad": 0,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_1_weight_1_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#8A32F2"
   },
   {
     "dataId": 60,
     "traceIndex": 6,
     "pointIndex": 0,
     "Escenario": "Máximo beneficio (Meta 1)",
     "Carbón (Gt)": 1.927315996,
     "Biodiversidad (%)": "18.042775",
     "Costo total (USD)": 19.133892969,
     "Costo de establecimiento (USD)": 12.233301675,
     "Costo de oportunidad (USD)": "6.900591295",
     "Peso Carbón": 0,
     "Peso Biodiversidad": 1,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_1_weight_2_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#3A77FB"
   },
   {
     "dataId": 61,
     "traceIndex": 6,
     "pointIndex": 1,
     "Escenario": "Máximo beneficio (Meta 1)",
     "Carbón (Gt)": 2.104694287,
     "Biodiversidad (%)": "18.0425195",
     "Costo total (USD)": 15.494743438,
     "Costo de establecimiento (USD)": 11.941674224,
     "Costo de oportunidad (USD)": "3.553069215",
     "Peso Carbón": 0.0625,
     "Peso Biodiversidad": 0.9375,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_1_weight_10_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#208DFE"
   },
   {
     "dataId": 62,
     "traceIndex": 6,
     "pointIndex": 2,
     "Escenario": "Máximo beneficio (Meta 1)",
     "Carbón (Gt)": 2.124825515,
     "Biodiversidad (%)": "18.0438316",
     "Costo total (USD)": 15.06481517,
     "Costo de establecimiento (USD)": 11.933032719,
     "Costo de oportunidad (USD)": "3.131782451",
     "Peso Carbón": 125,
     "Peso Biodiversidad": 875,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_1_weight_8_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#1C97EE"
   },
   {
     "dataId": 63,
     "traceIndex": 6,
     "pointIndex": 3,
     "Escenario": "Máximo beneficio (Meta 1)",
     "Carbón (Gt)": 2.135796045,
     "Biodiversidad (%)": "18.0436622",
     "Costo total (USD)": 14.878128667,
     "Costo de establecimiento (USD)": 11.944375693,
     "Costo de oportunidad (USD)": "2.933752974",
     "Peso Carbón": 0.25,
     "Peso Biodiversidad": 0.75,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_1_weight_6_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#1C95F2"
   },
   {
     "dataId": 64,
     "traceIndex": 6,
     "pointIndex": 4,
     "Escenario": "Máximo beneficio (Meta 1)",
     "Carbón (Gt)": 2.14199787,
     "Biodiversidad (%)": "18.0403935",
     "Costo total (USD)": 14.817763131,
     "Costo de establecimiento (USD)": 11.955769599,
     "Costo de oportunidad (USD)": "2.861993531",
     "Peso Carbón": 0.5,
     "Peso Biodiversidad": 0.5,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_1_weight_3_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#357BFC"
   },
   {
     "dataId": 65,
     "traceIndex": 6,
     "pointIndex": 5,
     "Escenario": "Máximo beneficio (Meta 1)",
     "Carbón (Gt)": 2.143978422,
     "Biodiversidad (%)": "18.0348889",
     "Costo total (USD)": 14.798081203,
     "Costo de establecimiento (USD)": 11.962850614,
     "Costo de oportunidad (USD)": "2.835230589",
     "Peso Carbón": 0.75,
     "Peso Biodiversidad": 0.25,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_1_weight_4_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#347CFC"
   },
   {
     "dataId": 66,
     "traceIndex": 6,
     "pointIndex": 6,
     "Escenario": "Máximo beneficio (Meta 1)",
     "Carbón (Gt)": 2.144555143,
     "Biodiversidad (%)": "18.0229762",
     "Costo total (USD)": 14.797490977,
     "Costo de establecimiento (USD)": 11.96607416,
     "Costo de oportunidad (USD)": "2.831416817",
     "Peso Carbón": 875,
     "Peso Biodiversidad": 125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_1_weight_5_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#228BFE"
   },
   {
     "dataId": 67,
     "traceIndex": 6,
     "pointIndex": 7,
     "Escenario": "Máximo beneficio (Meta 1)",
     "Carbón (Gt)": 2.145167997,
     "Biodiversidad (%)": "18.0181166",
     "Costo total (USD)": 14.799799604,
     "Costo de establecimiento (USD)": 11.965978307,
     "Costo de oportunidad (USD)": "2.833821297",
     "Peso Carbón": 0.9375,
     "Peso Biodiversidad": 0.0625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_1_weight_7_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#1B99EA"
   },
   {
     "dataId": 68,
     "traceIndex": 6,
     "pointIndex": 8,
     "Escenario": "Máximo beneficio (Meta 1)",
     "Carbón (Gt)": 2.145594487,
     "Biodiversidad (%)": "17.901775100000002",
     "Costo total (USD)": 14.777031834,
     "Costo de establecimiento (USD)": 11.965750876,
     "Costo de oportunidad (USD)": "2.811280958",
     "Peso Carbón": 0.96875,
     "Peso Biodiversidad": 0.03125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_1_weight_9_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#1D92F8"
   },
   {
     "dataId": 69,
     "traceIndex": 6,
     "pointIndex": 9,
     "Escenario": "Máximo beneficio (Meta 1)",
     "Carbón (Gt)": 2.147858576,
     "Biodiversidad (%)": "17.6714498",
     "Costo total (USD)": 14.746364365,
     "Costo de establecimiento (USD)": 11.964169531,
     "Costo de oportunidad (USD)": "2.782194834",
     "Peso Carbón": 1,
     "Peso Biodiversidad": 0,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_1_weight_1_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#3E74FB"
   },
   {
     "dataId": 120,
     "traceIndex": 12,
     "pointIndex": 0,
     "Escenario": "Mínimo costo (Meta 1)",
     "Carbón (Gt)": 0.314081615,
     "Biodiversidad (%)": "15.075882599999998",
     "Costo total (USD)": 1.601016128,
     "Costo de establecimiento (USD)": 1.441696094,
     "Costo de oportunidad (USD)": "0.1593200338",
     "Peso Carbón": null,
     "Peso Biodiversidad": null,
     "version": "v14",
     "MapImage": "scen_mincost_target_1_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#A020F0"
   }
  ];
  let originalRowData2 = [
   {
     "dataId": 10,
     "traceIndex": 1,
     "pointIndex": 0,
     "Escenario": "Costo-efectivo (Meta 2)",
     "Carbón (Gt)": 0.295882333,
     "Biodiversidad (%)": "17.8231769",
     "Costo total (USD)": 721487,
     "Costo de establecimiento (USD)": 1.895086889,
     "Costo de oportunidad (USD)": 5.319785777,
     "Peso Carbón": 0,
     "Peso Biodiversidad": 1,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_2_weight_2_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#6E4AF5"
   },
   {
     "dataId": 11,
     "traceIndex": 1,
     "pointIndex": 1,
     "Escenario": "Costo-efectivo (Meta 2)",
     "Carbón (Gt)": 0.35360847,
     "Biodiversidad (%)": "17.835123199999998",
     "Costo total (USD)": 967735,
     "Costo de establecimiento (USD)": 1.83656661,
     "Costo de oportunidad (USD)": 7.840787725,
     "Peso Carbón": 0.25,
     "Peso Biodiversidad": 0.75,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_2_weight_8_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#8338F3"
   },
   {
     "dataId": 12,
     "traceIndex": 1,
     "pointIndex": 2,
     "Escenario": "Costo-efectivo (Meta 2)",
     "Carbón (Gt)": 0.375083462,
     "Biodiversidad (%)": "17.783619899999998",
     "Costo total (USD)": 1216.61,
     "Costo de establecimiento (USD)": 1.818261595,
     "Costo de oportunidad (USD)": 10.34786924,
     "Peso Carbón": 0.5,
     "Peso Biodiversidad": 0.5,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_2_weight_3_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#7247F5"
   },
   {
     "dataId": 13,
     "traceIndex": 1,
     "pointIndex": 3,
     "Escenario": "Costo-efectivo (Meta 2)",
     "Carbón (Gt)": 0.388171068,
     "Biodiversidad (%)": "17.5396833",
     "Costo total (USD)": 1321.47,
     "Costo de establecimiento (USD)": 1.829672316,
     "Costo de oportunidad (USD)": 11.384992389,
     "Peso Carbón": 0.75,
     "Peso Biodiversidad": 0.25,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_2_weight_4_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#7544F4"
   },
   {
     "dataId": 14,
     "traceIndex": 1,
     "pointIndex": 4,
     "Escenario": "Costo-efectivo (Meta 2)",
     "Carbón (Gt)": 0.392831282,
     "Biodiversidad (%)": "16.9395643",
     "Costo total (USD)": 1303.87,
     "Costo de establecimiento (USD)": 1.853287476,
     "Costo de oportunidad (USD)": 11.185362818,
     "Peso Carbón": 875,
     "Peso Biodiversidad": 125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_2_weight_5_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#7A40F4"
   },
   {
     "dataId": 15,
     "traceIndex": 1,
     "pointIndex": 5,
     "Escenario": "Costo-efectivo (Meta 2)",
     "Carbón (Gt)": 0.394751972,
     "Biodiversidad (%)": "16.6540826",
     "Costo total (USD)": 1276.98,
     "Costo de establecimiento (USD)": 1.860755075,
     "Costo de oportunidad (USD)": 10.909077629,
     "Peso Carbón": 0.9375,
     "Peso Biodiversidad": 0.0625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_2_weight_6_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#7D3DF3"
   },
   {
     "dataId": 16,
     "traceIndex": 1,
     "pointIndex": 6,
     "Escenario": "Costo-efectivo (Meta 2)",
     "Carbón (Gt)": 0.395956706,
     "Biodiversidad (%)": "16.3975367",
     "Costo total (USD)": 1264.38,
     "Costo de establecimiento (USD)": 1.874559274,
     "Costo de oportunidad (USD)": 10.769219062,
     "Peso Carbón": 0.96875,
     "Peso Biodiversidad": 0.03125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_2_weight_7_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#7F3BF3"
   },
   {
     "dataId": 17,
     "traceIndex": 1,
     "pointIndex": 7,
     "Escenario": "Costo-efectivo (Meta 2)",
     "Carbón (Gt)": 0.396625464,
     "Biodiversidad (%)": "15.710458699999998",
     "Costo total (USD)": 1259.95,
     "Costo de establecimiento (USD)": 1.875958231,
     "Costo de oportunidad (USD)": 10.723577629,
     "Peso Carbón": 0.984375,
     "Peso Biodiversidad": 0.015625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_2_weight_9_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#8437F3"
   },
   {
     "dataId": 18,
     "traceIndex": 1,
     "pointIndex": 8,
     "Escenario": "Costo-efectivo (Meta 2)",
     "Carbón (Gt)": 0.396699591,
     "Biodiversidad (%)": "15.501703899999999",
     "Costo total (USD)": 1262.02,
     "Costo de establecimiento (USD)": 1.877811741,
     "Costo de oportunidad (USD)": 10.742396706,
     "Peso Carbón": 0.9921875,
     "Peso Biodiversidad": 0.0078125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_2_weight_10_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#8B31F2"
   },
   {
     "dataId": 19,
     "traceIndex": 1,
     "pointIndex": 9,
     "Escenario": "Costo-efectivo (Meta 2)",
     "Carbón (Gt)": 0.409411965,
     "Biodiversidad (%)": "13.365011500000001",
     "Costo total (USD)": 1296.7,
     "Costo de establecimiento (USD)": 1.887153633,
     "Costo de oportunidad (USD)": 11.079817883,
     "Peso Carbón": 1,
     "Peso Biodiversidad": 0,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_2_weight_1_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#6B4DF6"
   },
   {
     "dataId": 70,
     "traceIndex": 7,
     "pointIndex": 0,
     "Escenario": "Máximo beneficio (Meta 2)",
     "Carbón (Gt)": 1.905609952,
     "Biodiversidad (%)": "18.0326319",
     "Costo total (USD)": 4624.2,
     "Costo de establecimiento (USD)": 12.485491295,
     "Costo de oportunidad (USD)": 33.756459066,
     "Peso Carbón": 0,
     "Peso Biodiversidad": 1,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_2_weight_2_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#0DCD72"
   },
   {
     "dataId": 71,
     "traceIndex": 7,
     "pointIndex": 1,
     "Escenario": "Máximo beneficio (Meta 2)",
     "Carbón (Gt)": 2.216183873,
     "Biodiversidad (%)": "18.0293856",
     "Costo total (USD)": 4775.63,
     "Costo de establecimiento (USD)": 12.062914091,
     "Costo de oportunidad (USD)": 35.693367865,
     "Peso Carbón": 0.0625,
     "Peso Biodiversidad": 0.9375,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_2_weight_9_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#06E53B"
   },
   {
     "dataId": 72,
     "traceIndex": 7,
     "pointIndex": 2,
     "Escenario": "Máximo beneficio (Meta 2)",
     "Carbón (Gt)": 2.328988744,
     "Biodiversidad (%)": "18.0218485",
     "Costo total (USD)": 4948.54,
     "Costo de establecimiento (USD)": 11.981328673,
     "Costo de oportunidad (USD)": 37.50407237,
     "Peso Carbón": 125,
     "Peso Biodiversidad": 875,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_2_weight_7_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#03F11F"
   },
   {
     "dataId": 73,
     "traceIndex": 7,
     "pointIndex": 3,
     "Escenario": "Máximo beneficio (Meta 2)",
     "Carbón (Gt)": 2.39346932,
     "Biodiversidad (%)": "18.0128822",
     "Costo total (USD)": 4996.97,
     "Costo de establecimiento (USD)": 11.985219153,
     "Costo de oportunidad (USD)": 37.984505987,
     "Peso Carbón": 0.25,
     "Peso Biodiversidad": 0.75,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_2_weight_4_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#08DE4A"
   },
   {
     "dataId": 74,
     "traceIndex": 7,
     "pointIndex": 4,
     "Escenario": "Máximo beneficio (Meta 2)",
     "Carbón (Gt)": 2.424646036,
     "Biodiversidad (%)": "18.0023309",
     "Costo total (USD)": 5012.54,
     "Costo de establecimiento (USD)": 12.046921244,
     "Costo de oportunidad (USD)": 38.078432357,
     "Peso Carbón": 0.5,
     "Peso Biodiversidad": 0.5,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_2_weight_3_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#0CCF6E"
   },
   {
     "dataId": 75,
     "traceIndex": 7,
     "pointIndex": 5,
     "Escenario": "Máximo beneficio (Meta 2)",
     "Carbón (Gt)": 2.432791883,
     "Biodiversidad (%)": "17.985773899999998",
     "Costo total (USD)": 5024.59,
     "Costo de establecimiento (USD)": 12.090964803,
     "Costo de oportunidad (USD)": 38.154919515,
     "Peso Carbón": 0.75,
     "Peso Biodiversidad": 0.25,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_2_weight_5_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#04EF23"
   },
   {
     "dataId": 76,
     "traceIndex": 7,
     "pointIndex": 6,
     "Escenario": "Máximo beneficio (Meta 2)",
     "Carbón (Gt)": 2.434582936,
     "Biodiversidad (%)": "17.9290382",
     "Costo total (USD)": 5012.46,
     "Costo de establecimiento (USD)": 12.113031936,
     "Costo de oportunidad (USD)": 38.011552198,
     "Peso Carbón": 875,
     "Peso Biodiversidad": 125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_2_weight_6_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#02F418"
   },
   {
     "dataId": 77,
     "traceIndex": 7,
     "pointIndex": 7,
     "Escenario": "Máximo beneficio (Meta 2)",
     "Carbón (Gt)": 2.435677379,
     "Biodiversidad (%)": "17.741075399999996",
     "Costo total (USD)": 5016.96,
     "Costo de establecimiento (USD)": 12.120192603,
     "Costo de oportunidad (USD)": 38.049369422,
     "Peso Carbón": 0.9375,
     "Peso Biodiversidad": 0.0625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_2_weight_8_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#05EC2A"
   },
   {
     "dataId": 78,
     "traceIndex": 7,
     "pointIndex": 8,
     "Escenario": "Máximo beneficio (Meta 2)",
     "Carbón (Gt)": 2.43603105,
     "Biodiversidad (%)": "17.6726457",
     "Costo total (USD)": 5014.2,
     "Costo de establecimiento (USD)": 12.124034297,
     "Costo de oportunidad (USD)": 38.018005641,
     "Peso Carbón": 0.96875,
     "Peso Biodiversidad": 0.03125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_2_weight_10_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#0AD759"
   },
   {
     "dataId": 79,
     "traceIndex": 7,
     "pointIndex": 9,
     "Escenario": "Máximo beneficio (Meta 2)",
     "Carbón (Gt)": 2.444591935,
     "Biodiversidad (%)": "17.2846252",
     "Costo total (USD)": 5040.88,
     "Costo de establecimiento (USD)": 12.133227162,
     "Costo de oportunidad (USD)": 38.275594832,
     "Peso Carbón": 1,
     "Peso Biodiversidad": 0,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_2_weight_1_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#0ECA78"
   },
   {
     "dataId": 121,
     "traceIndex": 13,
     "pointIndex": 0,
     "Escenario": "Mínimo costo (Meta 2)",
     "Carbón (Gt)": 0.624319761,
     "Biodiversidad (%)": "16.2948274",
     "Costo total (USD)": 3.501003548,
     "Costo de establecimiento (USD)": 3.139353711,
     "Costo de oportunidad (USD)": 0.3616498364,
     "Peso Carbón": null,
     "Peso Biodiversidad": null,
     "version": "v14",
     "MapImage": "scen_mincost_target_2_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#8D30F2"
   }
  ];
  let originalRowData3 = [
   {
     "dataId": 20,
     "traceIndex": 2,
     "pointIndex": 0,
     "Escenario": "Costo-efectivo (Meta 3)",
     "Carbón (Gt)": 0.594397752,
     "Biodiversidad (%)": "17.9703694",
     "Costo total (USD)": 4.839685447,
     "Costo de establecimiento (USD)": 3.653932366,
     "Costo de oportunidad (USD)": "1.185753081",
     "Peso Carbón": 0,
     "Peso Biodiversidad": 1,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_3_weight_2_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#4D66F9"
   },
   {
     "dataId": 21,
     "traceIndex": 2,
     "pointIndex": 1,
     "Escenario": "Costo-efectivo (Meta 3)",
     "Carbón (Gt)": 0.648761441,
     "Biodiversidad (%)": "17.9917208",
     "Costo total (USD)": 4.377663323,
     "Costo de establecimiento (USD)": 3.486485067,
     "Costo de oportunidad (USD)": "0.8911782555",
     "Peso Carbón": 0.0625,
     "Peso Biodiversidad": 0.9375,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_3_weight_9_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#6651F6"
   },
   {
     "dataId": 22,
     "traceIndex": 2,
     "pointIndex": 2,
     "Escenario": "Costo-efectivo (Meta 3)",
     "Carbón (Gt)": 0.673512898,
     "Biodiversidad (%)": "18.0003492",
     "Costo total (USD)": 4.137031493,
     "Costo de establecimiento (USD)": 3.419662748,
     "Costo de oportunidad (USD)": "0.7173687452",
     "Peso Carbón": 125,
     "Peso Biodiversidad": 875,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_3_weight_6_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#6057F7"
   },
   {
     "dataId": 23,
     "traceIndex": 2,
     "pointIndex": 3,
     "Escenario": "Costo-efectivo (Meta 3)",
     "Carbón (Gt)": 0.69361751,
     "Biodiversidad (%)": "17.984416799999998",
     "Costo total (USD)": 3.943001412,
     "Costo de establecimiento (USD)": 3.383899441,
     "Costo de oportunidad (USD)": "0.5591019707999999",
     "Peso Carbón": 0.25,
     "Peso Biodiversidad": 0.75,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_3_weight_5_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#5C59F7"
   },
   {
     "dataId": 24,
     "traceIndex": 2,
     "pointIndex": 4,
     "Escenario": "Costo-efectivo (Meta 3)",
     "Carbón (Gt)": 0.705399553,
     "Biodiversidad (%)": "17.8546056",
     "Costo total (USD)": 3.842280121,
     "Costo de establecimiento (USD)": 3.373736104,
     "Costo de oportunidad (USD)": "0.4685440178",
     "Peso Carbón": 0.5,
     "Peso Biodiversidad": 0.5,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_3_weight_3_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#5362F8"
   },
   {
     "dataId": 25,
     "traceIndex": 2,
     "pointIndex": 5,
     "Escenario": "Costo-efectivo (Meta 3)",
     "Carbón (Gt)": 0.70963726,
     "Biodiversidad (%)": "17.5237113",
     "Costo total (USD)": 3.801179246,
     "Costo de establecimiento (USD)": 3.37564433,
     "Costo de oportunidad (USD)": "0.4255349162",
     "Peso Carbón": 0.75,
     "Peso Biodiversidad": 0.25,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_3_weight_4_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#5A5CF8"
   },
   {
     "dataId": 26,
     "traceIndex": 2,
     "pointIndex": 6,
     "Escenario": "Costo-efectivo (Meta 3)",
     "Carbón (Gt)": 0.711110599,
     "Biodiversidad (%)": "17.235398",
     "Costo total (USD)": 3.799286432,
     "Costo de establecimiento (USD)": 3.379728408,
     "Costo de oportunidad (USD)": "0.41955802410000004",
     "Peso Carbón": 875,
     "Peso Biodiversidad": 125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_3_weight_7_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#6254F7"
   },
   {
     "dataId": 27,
     "traceIndex": 2,
     "pointIndex": 7,
     "Escenario": "Costo-efectivo (Meta 3)",
     "Carbón (Gt)": 0.711930925,
     "Biodiversidad (%)": "17.0698409",
     "Costo total (USD)": 3.798907756,
     "Costo de establecimiento (USD)": 3.380853909,
     "Costo de oportunidad (USD)": "0.4180538468",
     "Peso Carbón": 0.9375,
     "Peso Biodiversidad": 0.0625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_3_weight_8_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#6552F6"
   },
   {
     "dataId": 28,
     "traceIndex": 2,
     "pointIndex": 8,
     "Escenario": "Costo-efectivo (Meta 3)",
     "Carbón (Gt)": 0.71253369,
     "Biodiversidad (%)": "16.7080554",
     "Costo total (USD)": 3.772949541,
     "Costo de establecimiento (USD)": 3.381008529,
     "Costo de oportunidad (USD)": "0.39194101210000004",
     "Peso Carbón": 0.96875,
     "Peso Biodiversidad": 0.03125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_3_weight_10_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#6D4BF5"
   },
   {
     "dataId": 29,
     "traceIndex": 2,
     "pointIndex": 9,
     "Escenario": "Costo-efectivo (Meta 3)",
     "Carbón (Gt)": 0.717374775,
     "Biodiversidad (%)": "15.916026899999999",
     "Costo total (USD)": 3.711782976,
     "Costo de establecimiento (USD)": 3.377530403,
     "Costo de oportunidad (USD)": "0.3342525732",
     "Peso Carbón": 1,
     "Peso Biodiversidad": 0,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_3_weight_1_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#466DFA"
   },
   {
     "dataId": 80,
     "traceIndex": 8,
     "pointIndex": 0,
     "Escenario": "Máximo beneficio (Meta 3)",
     "Carbón (Gt)": 1.784966231,
     "Biodiversidad (%)": "18.0407961",
     "Costo total (USD)": 17.409145424,
     "Costo de establecimiento (USD)": 11.310618267,
     "Costo de oportunidad (USD)": "6.098527157",
     "Peso Carbón": 0,
     "Peso Biodiversidad": 1,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_3_weight_2_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#50E200"
   },
   {
     "dataId": 81,
     "traceIndex": 8,
     "pointIndex": 1,
     "Escenario": "Máximo beneficio (Meta 3)",
     "Carbón (Gt)": 1.960635392,
     "Biodiversidad (%)": "18.0408338",
     "Costo total (USD)": 14.16835086,
     "Costo de establecimiento (USD)": 11.033175798,
     "Costo de oportunidad (USD)": "3.135175062",
     "Peso Carbón": 0.0625,
     "Peso Biodiversidad": 0.9375,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_3_weight_10_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#61DC00"
   },
   {
     "dataId": 82,
     "traceIndex": 8,
     "pointIndex": 2,
     "Escenario": "Máximo beneficio (Meta 3)",
     "Carbón (Gt)": 1.983141506,
     "Biodiversidad (%)": "18.0427552",
     "Costo total (USD)": 13.735046188,
     "Costo de establecimiento (USD)": 11.014071273,
     "Costo de oportunidad (USD)": "2.720974915",
     "Peso Carbón": 125,
     "Peso Biodiversidad": 875,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_3_weight_6_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#9FC600"
   },
   {
     "dataId": 83,
     "traceIndex": 8,
     "pointIndex": 3,
     "Escenario": "Máximo beneficio (Meta 3)",
     "Carbón (Gt)": 1.993631451,
     "Biodiversidad (%)": "18.043228100000004",
     "Costo total (USD)": 13.52428921,
     "Costo de establecimiento (USD)": 11.024638985,
     "Costo de oportunidad (USD)": "2.499650225",
     "Peso Carbón": 0.25,
     "Peso Biodiversidad": 0.75,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_3_weight_5_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#A4C400"
   },
   {
     "dataId": 84,
     "traceIndex": 8,
     "pointIndex": 4,
     "Escenario": "Máximo beneficio (Meta 3)",
     "Carbón (Gt)": 1.998229028,
     "Biodiversidad (%)": "18.0375184",
     "Costo total (USD)": 13.441928435,
     "Costo de establecimiento (USD)": 11.039418664,
     "Costo de oportunidad (USD)": "2.402509771",
     "Peso Carbón": 0.5,
     "Peso Biodiversidad": 0.5,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_3_weight_3_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#54E100"
   },
   {
     "dataId": 85,
     "traceIndex": 8,
     "pointIndex": 5,
     "Escenario": "Máximo beneficio (Meta 3)",
     "Carbón (Gt)": 1.999722585,
     "Biodiversidad (%)": "18.017341899999998",
     "Costo total (USD)": 13.414339258,
     "Costo de establecimiento (USD)": 11.048037104,
     "Costo de oportunidad (USD)": "2.366302154",
     "Peso Carbón": 0.75,
     "Peso Biodiversidad": 0.25,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_3_weight_4_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#76D500"
   },
   {
     "dataId": 86,
     "traceIndex": 8,
     "pointIndex": 6,
     "Escenario": "Máximo beneficio (Meta 3)",
     "Carbón (Gt)": 2.00013693,
     "Biodiversidad (%)": "18.0100013",
     "Costo total (USD)": 13.411899712,
     "Costo de establecimiento (USD)": 11.050994595,
     "Costo de oportunidad (USD)": "2.360905117",
     "Peso Carbón": 875,
     "Peso Biodiversidad": 125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_3_weight_7_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#8DCD00"
   },
   {
     "dataId": 87,
     "traceIndex": 8,
     "pointIndex": 7,
     "Escenario": "Máximo beneficio (Meta 3)",
     "Carbón (Gt)": 2.000638611,
     "Biodiversidad (%)": "18.005461",
     "Costo total (USD)": 13.412808292,
     "Costo de establecimiento (USD)": 11.051846645,
     "Costo de oportunidad (USD)": "2.360961648",
     "Peso Carbón": 0.9375,
     "Peso Biodiversidad": 0.0625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_3_weight_8_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#79D300"
   },
   {
     "dataId": 88,
     "traceIndex": 8,
     "pointIndex": 8,
     "Escenario": "Máximo beneficio (Meta 3)",
     "Carbón (Gt)": 2.001012959,
     "Biodiversidad (%)": "17.8668264",
     "Costo total (USD)": 13.389034763,
     "Costo de establecimiento (USD)": 11.052050552,
     "Costo de oportunidad (USD)": "2.336984212",
     "Peso Carbón": 0.96875,
     "Peso Biodiversidad": 0.03125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_3_weight_9_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#71D700"
   },
   {
     "dataId": 89,
     "traceIndex": 8,
     "pointIndex": 9,
     "Escenario": "Máximo beneficio (Meta 3)",
     "Carbón (Gt)": 2.003324704,
     "Biodiversidad (%)": "17.657994499999997",
     "Costo total (USD)": 13.354017636,
     "Costo de establecimiento (USD)": 11.050634449,
     "Costo de oportunidad (USD)": "2.303383187",
     "Peso Carbón": 1,
     "Peso Biodiversidad": 0,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_3_weight_1_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#4BE400"
   },
   {
     "dataId": 122,
     "traceIndex": 14,
     "pointIndex": 0,
     "Escenario": "Mínimo costo (Meta 3)",
     "Carbón (Gt)": 1.251406936,
     "Biodiversidad (%)": "16.6812956",
     "Costo total (USD)": 7.827576777,
     "Costo de establecimiento (USD)": 6.994960841,
     "Costo de oportunidad (USD)": "0.8326159367",
     "Peso Carbón": null,
     "Peso Biodiversidad": null,
     "version": "v14",
     "MapImage": "scen_mincost_target_3_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#7048F5"
   }
  ];
  let originalRowData4 = [
   {
     "dataId": 30,
     "traceIndex": 3,
     "pointIndex": 0,
     "Escenario": "Costo-efectivo (Meta 4)",
     "Carbón (Gt)": 0.593016277,
     "Biodiversidad (%)": "17.9468939",
     "Costo total (USD)": 1492.33,
     "Costo de establecimiento (USD)": 3.835562729,
     "Costo de oportunidad (USD)": 11.087756709,
     "Peso Carbón": 0,
     "Peso Biodiversidad": 1,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_4_weight_2_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#238BFE"
   },
   {
     "dataId": 31,
     "traceIndex": 3,
     "pointIndex": 1,
     "Escenario": "Costo-efectivo (Meta 4)",
     "Carbón (Gt)": 0.697767176,
     "Biodiversidad (%)": "17.953672",
     "Costo total (USD)": 1714.01,
     "Costo de establecimiento (USD)": 3.704396586,
     "Costo de oportunidad (USD)": 13.435750682,
     "Peso Carbón": 125,
     "Peso Biodiversidad": 875,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_4_weight_8_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#3978FB"
   },
   {
     "dataId": 32,
     "traceIndex": 3,
     "pointIndex": 2,
     "Escenario": "Costo-efectivo (Meta 4)",
     "Carbón (Gt)": 0.730699057,
     "Biodiversidad (%)": "17.9572468",
     "Costo total (USD)": 1957.05,
     "Costo de establecimiento (USD)": 3.660969717,
     "Costo de oportunidad (USD)": 15.90948873,
     "Peso Carbón": 0.25,
     "Peso Biodiversidad": 0.75,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_4_weight_6_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#357BFC"
   },
   {
     "dataId": 33,
     "traceIndex": 3,
     "pointIndex": 3,
     "Escenario": "Costo-efectivo (Meta 4)",
     "Carbón (Gt)": 0.768101293,
     "Biodiversidad (%)": "17.9126225",
     "Costo total (USD)": 2104.01,
     "Costo de establecimiento (USD)": 3.662358776,
     "Costo de oportunidad (USD)": 17.377716429,
     "Peso Carbón": 0.5,
     "Peso Biodiversidad": 0.5,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_4_weight_3_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#2986FD"
   },
   {
     "dataId": 34,
     "traceIndex": 3,
     "pointIndex": 4,
     "Escenario": "Costo-efectivo (Meta 4)",
     "Carbón (Gt)": 0.781071947,
     "Biodiversidad (%)": "17.774422100000002",
     "Costo total (USD)": 2153.06,
     "Costo de establecimiento (USD)": 3.689194912,
     "Costo de oportunidad (USD)": 17.84137955,
     "Peso Carbón": 0.75,
     "Peso Biodiversidad": 0.25,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_4_weight_4_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#2E82FD"
   },
   {
     "dataId": 35,
     "traceIndex": 3,
     "pointIndex": 5,
     "Escenario": "Costo-efectivo (Meta 4)",
     "Carbón (Gt)": 0.784797867,
     "Biodiversidad (%)": "17.3969588",
     "Costo total (USD)": 2141.54,
     "Costo de establecimiento (USD)": 3.716466986,
     "Costo de oportunidad (USD)": 17.698946301,
     "Peso Carbón": 875,
     "Peso Biodiversidad": 125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_4_weight_5_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#337DFC"
   },
   {
     "dataId": 36,
     "traceIndex": 3,
     "pointIndex": 6,
     "Escenario": "Costo-efectivo (Meta 4)",
     "Carbón (Gt)": 0.786418544,
     "Biodiversidad (%)": "17.1076778",
     "Costo total (USD)": 2123.13,
     "Costo de establecimiento (USD)": 3.72544432,
     "Costo de oportunidad (USD)": 17.50583663,
     "Peso Carbón": 0.9375,
     "Peso Biodiversidad": 0.0625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_4_weight_7_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#3879FB"
   },
   {
     "dataId": 37,
     "traceIndex": 3,
     "pointIndex": 7,
     "Escenario": "Costo-efectivo (Meta 4)",
     "Carbón (Gt)": 0.787232998,
     "Biodiversidad (%)": "16.9073603",
     "Costo total (USD)": 2114.91,
     "Costo de establecimiento (USD)": 3.739039137,
     "Costo de oportunidad (USD)": 17.410024636,
     "Peso Carbón": 0.96875,
     "Peso Biodiversidad": 0.03125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_4_weight_9_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#3A77FB"
   },
   {
     "dataId": 38,
     "traceIndex": 3,
     "pointIndex": 8,
     "Escenario": "Costo-efectivo (Meta 4)",
     "Carbón (Gt)": 0.787836612,
     "Biodiversidad (%)": "16.4664769",
     "Costo total (USD)": 2109.82,
     "Costo de establecimiento (USD)": 3.742671845,
     "Costo de oportunidad (USD)": 17.355490394,
     "Peso Carbón": 0.984375,
     "Peso Biodiversidad": 0.015625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_4_weight_10_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#3F73FB"
   },
   {
     "dataId": 39,
     "traceIndex": 3,
     "pointIndex": 9,
     "Escenario": "Costo-efectivo (Meta 4)",
     "Carbón (Gt)": 0.799189036,
     "Biodiversidad (%)": "15.4752131",
     "Costo total (USD)": 2135.04,
     "Costo de establecimiento (USD)": 3.751609046,
     "Costo de oportunidad (USD)": 17.598793499,
     "Peso Carbón": 1,
     "Peso Biodiversidad": 0,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_4_weight_1_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#1B98EB"
   },
   {
     "dataId": 90,
     "traceIndex": 9,
     "pointIndex": 0,
     "Escenario": "Máximo beneficio (Meta 4)",
     "Carbón (Gt)": 1.763677275,
     "Biodiversidad (%)": "18.028064800000003",
     "Costo total (USD)": 4282.85,
     "Costo de establecimiento (USD)": 11.57568997,
     "Costo de oportunidad (USD)": 31.252784194,
     "Peso Carbón": 0,
     "Peso Biodiversidad": 1,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_4_weight_2_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF9B00"
   },
   {
     "dataId": 91,
     "traceIndex": 9,
     "pointIndex": 1,
     "Escenario": "Máximo beneficio (Meta 4)",
     "Carbón (Gt)": 2.051815499,
     "Biodiversidad (%)": "18.027357100000003",
     "Costo total (USD)": 4474.48,
     "Costo de establecimiento (USD)": 11.192574855,
     "Costo de oportunidad (USD)": 33.552204626,
     "Peso Carbón": 0.0625,
     "Peso Biodiversidad": 0.9375,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_4_weight_9_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF9200"
   },
   {
     "dataId": 92,
     "traceIndex": 9,
     "pointIndex": 2,
     "Escenario": "Máximo beneficio (Meta 4)",
     "Carbón (Gt)": 2.157489992,
     "Biodiversidad (%)": "18.019695300000002",
     "Costo total (USD)": 4631.43,
     "Costo de establecimiento (USD)": 11.100984929,
     "Costo de oportunidad (USD)": 35.213290268,
     "Peso Carbón": 125,
     "Peso Biodiversidad": 875,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_4_weight_7_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF8500"
   },
   {
     "dataId": 93,
     "traceIndex": 9,
     "pointIndex": 3,
     "Escenario": "Máximo beneficio (Meta 4)",
     "Carbón (Gt)": 2.223436317,
     "Biodiversidad (%)": "18.009453600000004",
     "Costo total (USD)": 4701.01,
     "Costo de establecimiento (USD)": 11.093206862,
     "Costo de oportunidad (USD)": 35.916938527,
     "Peso Carbón": 0.25,
     "Peso Biodiversidad": 0.75,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_4_weight_5_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF7200"
   },
   {
     "dataId": 94,
     "traceIndex": 9,
     "pointIndex": 4,
     "Escenario": "Máximo beneficio (Meta 4)",
     "Carbón (Gt)": 2.255423774,
     "Biodiversidad (%)": "17.9981759",
     "Costo total (USD)": 4700.05,
     "Costo de establecimiento (USD)": 11.151888582,
     "Costo de oportunidad (USD)": 35.848585756,
     "Peso Carbón": 0.5,
     "Peso Biodiversidad": 0.5,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_4_weight_3_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF7B00"
   },
   {
     "dataId": 95,
     "traceIndex": 9,
     "pointIndex": 5,
     "Escenario": "Máximo beneficio (Meta 4)",
     "Carbón (Gt)": 2.264013452,
     "Biodiversidad (%)": "17.9795163",
     "Costo total (USD)": 4699.58,
     "Costo de establecimiento (USD)": 11.19519398,
     "Costo de oportunidad (USD)": 35.800594959,
     "Peso Carbón": 0.75,
     "Peso Biodiversidad": 0.25,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_4_weight_4_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF6B00"
   },
   {
     "dataId": 96,
     "traceIndex": 9,
     "pointIndex": 6,
     "Escenario": "Máximo beneficio (Meta 4)",
     "Carbón (Gt)": 2.265885961,
     "Biodiversidad (%)": "17.8995085",
     "Costo total (USD)": 4693.38,
     "Costo de establecimiento (USD)": 11.214213791,
     "Costo de oportunidad (USD)": 35.719600088,
     "Peso Carbón": 875,
     "Peso Biodiversidad": 125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_4_weight_6_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF7A00"
   },
   {
     "dataId": 97,
     "traceIndex": 9,
     "pointIndex": 7,
     "Escenario": "Máximo beneficio (Meta 4)",
     "Carbón (Gt)": 2.267021615,
     "Biodiversidad (%)": "17.718618199999998",
     "Costo total (USD)": 4692.87,
     "Costo de establecimiento (USD)": 11.219928905,
     "Costo de oportunidad (USD)": 35.708798308,
     "Peso Carbón": 0.9375,
     "Peso Biodiversidad": 0.0625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_4_weight_8_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF8E00"
   },
   {
     "dataId": 98,
     "traceIndex": 9,
     "pointIndex": 8,
     "Escenario": "Máximo beneficio (Meta 4)",
     "Carbón (Gt)": 2.267360568,
     "Biodiversidad (%)": "17.6624787",
     "Costo total (USD)": 4696.91,
     "Costo de establecimiento (USD)": 11.219686585,
     "Costo de oportunidad (USD)": 35.749397634,
     "Peso Carbón": 0.96875,
     "Peso Biodiversidad": 0.03125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_4_weight_10_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF9A00"
   },
   {
     "dataId": 99,
     "traceIndex": 9,
     "pointIndex": 9,
     "Escenario": "Máximo beneficio (Meta 4)",
     "Carbón (Gt)": 2.276240719,
     "Biodiversidad (%)": "17.265658600000002",
     "Costo total (USD)": 4710.52,
     "Costo de establecimiento (USD)": 11.235081341,
     "Costo de oportunidad (USD)": 35.870070851,
     "Peso Carbón": 1,
     "Peso Biodiversidad": 0,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_4_weight_1_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#F2A900"
   },
   {
     "dataId": 123,
     "traceIndex": 15,
     "pointIndex": 0,
     "Escenario": "Mínimo costo (Meta 4)",
     "Carbón (Gt)": 1.965183081,
     "Biodiversidad (%)": "17.719877399999998",
     "Costo total (USD)": 14.014659241,
     "Costo de establecimiento (USD)": 12.200890366,
     "Costo de oportunidad (USD)": 1.813768875,
     "Peso Carbón": null,
     "Peso Biodiversidad": null,
     "version": "v14",
     "MapImage": "scen_mincost_target_4_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#466DFA"
   }
  ];
  let originalRowData5 = [
   {
     "dataId": 40,
     "traceIndex": 4,
     "pointIndex": 0,
     "Escenario": "Costo-efectivo (Meta 5)",
     "Carbón (Gt)": 1.18577733,
     "Biodiversidad (%)": "18.025471399999997",
     "Costo total (USD)": 10.660600256,
     "Costo de establecimiento (USD)": 7.445416911,
     "Costo de oportunidad (USD)": 3.215183344,
     "Peso Carbón": 0,
     "Peso Biodiversidad": 1,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_5_weight_2_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#10C389"
   },
   {
     "dataId": 41,
     "traceIndex": 4,
     "pointIndex": 1,
     "Escenario": "Costo-efectivo (Meta 5)",
     "Carbón (Gt)": 1.319758244,
     "Biodiversidad (%)": "18.0334482",
     "Costo total (USD)": 9.052646669,
     "Costo de establecimiento (USD)": 7.230090301,
     "Costo de oportunidad (USD)": 1.822556369,
     "Peso Carbón": 0.0625,
     "Peso Biodiversidad": 0.9375,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_5_weight_8_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#16A9C3"
   },
   {
     "dataId": 42,
     "traceIndex": 4,
     "pointIndex": 2,
     "Escenario": "Costo-efectivo (Meta 5)",
     "Carbón (Gt)": 1.353495106,
     "Biodiversidad (%)": "18.032845299999998",
     "Costo total (USD)": 8.656517029,
     "Costo de establecimiento (USD)": 7.17651718,
     "Costo de oportunidad (USD)": 1.479999849,
     "Peso Carbón": 125,
     "Peso Biodiversidad": 875,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_5_weight_6_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#15ADBA"
   },
   {
     "dataId": 43,
     "traceIndex": 4,
     "pointIndex": 3,
     "Escenario": "Costo-efectivo (Meta 5)",
     "Carbón (Gt)": 1.371147231,
     "Biodiversidad (%)": "18.028166699999996",
     "Costo total (USD)": 8.416800733,
     "Costo de establecimiento (USD)": 7.158711207,
     "Costo de oportunidad (USD)": 1.258089525,
     "Peso Carbón": 0.25,
     "Peso Biodiversidad": 0.75,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_5_weight_5_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#15B0B4"
   },
   {
     "dataId": 44,
     "traceIndex": 4,
     "pointIndex": 4,
     "Escenario": "Costo-efectivo (Meta 5)",
     "Carbón (Gt)": 1.378476261,
     "Biodiversidad (%)": "17.9946933",
     "Costo total (USD)": 8.301126039,
     "Costo de establecimiento (USD)": 7.171005737,
     "Costo de oportunidad (USD)": 1.130120302,
     "Peso Carbón": 0.5,
     "Peso Biodiversidad": 0.5,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_5_weight_3_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#13B7A3"
   },
   {
     "dataId": 45,
     "traceIndex": 4,
     "pointIndex": 5,
     "Escenario": "Costo-efectivo (Meta 5)",
     "Carbón (Gt)": 1.380000913,
     "Biodiversidad (%)": "17.9113003",
     "Costo total (USD)": 8.256691583,
     "Costo de establecimiento (USD)": 7.182862502,
     "Costo de oportunidad (USD)": 1.073829081,
     "Peso Carbón": 0.75,
     "Peso Biodiversidad": 0.25,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_5_weight_4_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#14B3AD"
   },
   {
     "dataId": 46,
     "traceIndex": 4,
     "pointIndex": 6,
     "Escenario": "Costo-efectivo (Meta 5)",
     "Carbón (Gt)": 1.380329625,
     "Biodiversidad (%)": "17.8253931",
     "Costo total (USD)": 8.251292137,
     "Costo de establecimiento (USD)": 7.187916334,
     "Costo de oportunidad (USD)": 1.063375803,
     "Peso Carbón": 875,
     "Peso Biodiversidad": 125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_5_weight_7_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#16ABBF"
   },
   {
     "dataId": 47,
     "traceIndex": 4,
     "pointIndex": 7,
     "Escenario": "Costo-efectivo (Meta 5)",
     "Carbón (Gt)": 1.380661621,
     "Biodiversidad (%)": "17.7634312",
     "Costo total (USD)": 8.249315146,
     "Costo de establecimiento (USD)": 7.188989143,
     "Costo de oportunidad (USD)": 1.060326002,
     "Peso Carbón": 0.9375,
     "Peso Biodiversidad": 0.0625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_5_weight_9_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#17A9C3"
   },
   {
     "dataId": 48,
     "traceIndex": 4,
     "pointIndex": 8,
     "Escenario": "Costo-efectivo (Meta 5)",
     "Carbón (Gt)": 1.381004927,
     "Biodiversidad (%)": "17.4868656",
     "Costo total (USD)": 8.223205957,
     "Costo de establecimiento (USD)": 7.189671683,
     "Costo de oportunidad (USD)": 1.033534275,
     "Peso Carbón": 0.96875,
     "Peso Biodiversidad": 0.03125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_5_weight_10_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#17A6CB"
   },
   {
     "dataId": 49,
     "traceIndex": 4,
     "pointIndex": 9,
     "Escenario": "Costo-efectivo (Meta 5)",
     "Carbón (Gt)": 1.384102624,
     "Biodiversidad (%)": "16.8796812",
     "Costo total (USD)": 8.17178482,
     "Costo de establecimiento (USD)": 7.188944017,
     "Costo de oportunidad (USD)": 0.9828408036,
     "Peso Carbón": 1,
     "Peso Biodiversidad": 0,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_5_weight_1_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#0BD265"
   },
   {
     "dataId": 100,
     "traceIndex": 10,
     "pointIndex": 0,
     "Escenario": "Máximo beneficio (Meta 5)",
     "Carbón (Gt)": 2.483419514,
     "Biodiversidad (%)": "18.0481694",
     "Costo total (USD)": 26.164745393,
     "Costo de establecimiento (USD)": 15.834633079,
     "Costo de oportunidad (USD)": 10.330112314,
     "Peso Carbón": 0,
     "Peso Biodiversidad": 1,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_5_weight_2_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF1600"
   },
   {
     "dataId": 101,
     "traceIndex": 10,
     "pointIndex": 1,
     "Escenario": "Máximo beneficio (Meta 5)",
     "Carbón (Gt)": 2.672268061,
     "Biodiversidad (%)": "18.0460814",
     "Costo total (USD)": 20.917038311,
     "Costo de establecimiento (USD)": 15.519577076,
     "Costo de oportunidad (USD)": 5.397461235,
     "Peso Carbón": 125,
     "Peso Biodiversidad": 875,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_5_weight_10_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF3100"
   },
   {
     "dataId": 102,
     "traceIndex": 10,
     "pointIndex": 2,
     "Escenario": "Máximo beneficio (Meta 5)",
     "Carbón (Gt)": 2.686156413,
     "Biodiversidad (%)": "18.046235600000003",
     "Costo total (USD)": 20.792718057,
     "Costo de establecimiento (USD)": 15.523902104,
     "Costo de oportunidad (USD)": 5.268815954,
     "Peso Carbón": 0.25,
     "Peso Biodiversidad": 0.75,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_5_weight_9_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF2900"
   },
   {
     "dataId": 103,
     "traceIndex": 10,
     "pointIndex": 3,
     "Escenario": "Máximo beneficio (Meta 5)",
     "Carbón (Gt)": 2.696078137,
     "Biodiversidad (%)": "18.047029300000002",
     "Costo total (USD)": 20.791219005,
     "Costo de establecimiento (USD)": 15.526251464,
     "Costo de oportunidad (USD)": 5.264967541,
     "Peso Carbón": 0.5,
     "Peso Biodiversidad": 0.5,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_5_weight_3_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF0000"
   },
   {
     "dataId": 104,
     "traceIndex": 10,
     "pointIndex": 4,
     "Escenario": "Máximo beneficio (Meta 5)",
     "Carbón (Gt)": 2.700201969,
     "Biodiversidad (%)": "18.045829100000002",
     "Costo total (USD)": 20.808643988,
     "Costo de establecimiento (USD)": 15.52855556,
     "Costo de oportunidad (USD)": 5.280088428,
     "Peso Carbón": 0.75,
     "Peso Biodiversidad": 0.25,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_5_weight_4_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF0200"
   },
   {
     "dataId": 105,
     "traceIndex": 10,
     "pointIndex": 5,
     "Escenario": "Máximo beneficio (Meta 5)",
     "Carbón (Gt)": 2.701572936,
     "Biodiversidad (%)": "18.045363000000002",
     "Costo total (USD)": 20.818625774,
     "Costo de establecimiento (USD)": 15.528102722,
     "Costo de oportunidad (USD)": 5.290523052,
     "Peso Carbón": 875,
     "Peso Biodiversidad": 125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_5_weight_5_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF0F00"
   },
   {
     "dataId": 106,
     "traceIndex": 10,
     "pointIndex": 6,
     "Escenario": "Máximo beneficio (Meta 5)",
     "Carbón (Gt)": 2.702260116,
     "Biodiversidad (%)": "18.0454789",
     "Costo total (USD)": 20.823200785,
     "Costo de establecimiento (USD)": 15.527883203,
     "Costo de oportunidad (USD)": 5.295317582,
     "Peso Carbón": 0.9375,
     "Peso Biodiversidad": 0.0625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_5_weight_6_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF1700"
   },
   {
     "dataId": 107,
     "traceIndex": 10,
     "pointIndex": 7,
     "Escenario": "Máximo beneficio (Meta 5)",
     "Carbón (Gt)": 2.702713277,
     "Biodiversidad (%)": "18.0453854",
     "Costo total (USD)": 20.802820886,
     "Costo de establecimiento (USD)": 15.527568088,
     "Costo de oportunidad (USD)": 5.275252798,
     "Peso Carbón": 0.96875,
     "Peso Biodiversidad": 0.03125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_5_weight_7_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF1D00"
   },
   {
     "dataId": 108,
     "traceIndex": 10,
     "pointIndex": 8,
     "Escenario": "Máximo beneficio (Meta 5)",
     "Carbón (Gt)": 2.702880299,
     "Biodiversidad (%)": "17.9723301",
     "Costo total (USD)": 20.789217222,
     "Costo de establecimiento (USD)": 15.527676979,
     "Costo de oportunidad (USD)": 5.261540244,
     "Peso Carbón": 0.984375,
     "Peso Biodiversidad": 0.015625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_5_weight_8_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF2500"
   },
   {
     "dataId": 109,
     "traceIndex": 10,
     "pointIndex": 9,
     "Escenario": "Máximo beneficio (Meta 5)",
     "Carbón (Gt)": 2.704980107,
     "Biodiversidad (%)": "17.7557861",
     "Costo total (USD)": 20.788425636,
     "Costo de establecimiento (USD)": 15.526161812,
     "Costo de oportunidad (USD)": 5.262263824,
     "Peso Carbón": 1,
     "Peso Biodiversidad": 0,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_5_weight_1_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#FF3000"
   },
   {
     "dataId": 124,
     "traceIndex": 16,
     "pointIndex": 0,
     "Escenario": "Mínimo costo (Meta 5)",
     "Carbón (Gt)": 1.837199458,
     "Biodiversidad (%)": "17.632840899999998",
     "Costo total (USD)": 12.745173831,
     "Costo de establecimiento (USD)": 11.171269158,
     "Costo de oportunidad (USD)": 1.573904673,
     "Peso Carbón": null,
     "Peso Biodiversidad": null,
     "version": "v14",
     "MapImage": "scen_mincost_target_5_v0.1_col_v14.png",
     "Highlight": 0,
     "HEXcode": "#1A9CE2"
   }
  ];
  let originalRowData6 = [
   {
     "dataId": 50,
     "traceIndex": 5,
     "pointIndex": 0,
     "Escenario": "Costo-efectivo (Meta 6)",
     "Carbón (Gt)": 1.169825198,
     "Biodiversidad (%)": "18.005115",
     "Costo total (USD)": 2875.01,
     "Costo de establecimiento (USD)": 7.736532692,
     "Costo de oportunidad (USD)": 21.013548706,
     "Peso Carbón": 0,
     "Peso Biodiversidad": 1,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_6_weight_2_v0.1_col_v14.png",
   },
   {
     "dataId": 51,
     "traceIndex": 5,
     "pointIndex": 1,
     "Escenario": "Costo-efectivo (Meta 6)",
     "Carbón (Gt)": 1.357795445,
     "Biodiversidad (%)": "18.0053804",
     "Costo total (USD)": 3177.75,
     "Costo de establecimiento (USD)": 7.496621819,
     "Costo de oportunidad (USD)": 24.280851965,
     "Peso Carbón": 0.0625,
     "Peso Biodiversidad": 0.9375,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_6_weight_9_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#17A9C3"
   },
   {
     "dataId": 52,
     "traceIndex": 5,
     "pointIndex": 2,
     "Escenario": "Costo-efectivo (Meta 6)",
     "Carbón (Gt)": 1.422813567,
     "Biodiversidad (%)": "18.0064718",
     "Costo total (USD)": 3251.57,
     "Costo de establecimiento (USD)": 7.397106979,
     "Costo de oportunidad (USD)": 25.118620135,
     "Peso Carbón": 125,
     "Peso Biodiversidad": 875,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_6_weight_7_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#16ABBF"
   },
   {
     "dataId": 53,
     "traceIndex": 5,
     "pointIndex": 3,
     "Escenario": "Costo-efectivo (Meta 6)",
     "Carbón (Gt)": 1.489041367,
     "Biodiversidad (%)": "17.9961472",
     "Costo total (USD)": 3425.24,
     "Costo de establecimiento (USD)": 7.347246899,
     "Costo de oportunidad (USD)": 26.905111492,
     "Peso Carbón": 0.25,
     "Peso Biodiversidad": 0.75,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_6_weight_5_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#15B0B4"
   },
   {
     "dataId": 54,
     "traceIndex": 5,
     "pointIndex": 4,
     "Escenario": "Costo-efectivo (Meta 6)",
     "Carbón (Gt)": 1.525743285,
     "Biodiversidad (%)": "17.978324",
     "Costo total (USD)": 3486.75,
     "Costo de establecimiento (USD)": 7.36714325,
     "Costo de oportunidad (USD)": 27.50039965,
     "Peso Carbón": 0.5,
     "Peso Biodiversidad": 0.5,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_6_weight_3_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#13B7A3"
   },
   {
     "dataId": 55,
     "traceIndex": 5,
     "pointIndex": 5,
     "Escenario": "Costo-efectivo (Meta 6)",
     "Carbón (Gt)": 1.53609136,
     "Biodiversidad (%)": "17.9342413",
     "Costo total (USD)": 3476.24,
     "Costo de establecimiento (USD)": 7.401055188,
     "Costo de oportunidad (USD)": 27.361322786,
     "Peso Carbón": 0.75,
     "Peso Biodiversidad": 0.25,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_6_weight_4_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#14B3AD"
   },
   {
     "dataId": 56,
     "traceIndex": 5,
     "pointIndex": 6,
     "Escenario": "Costo-efectivo (Meta 6)",
     "Carbón (Gt)": 1.538680904,
     "Biodiversidad (%)": "17.747161",
     "Costo total (USD)": 3445.72,
     "Costo de establecimiento (USD)": 7.426318178,
     "Costo de oportunidad (USD)": 27.030895264,
     "Peso Carbón": 875,
     "Peso Biodiversidad": 125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_6_weight_6_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#15ADBA"
   },
   {
     "dataId": 57,
     "traceIndex": 5,
     "pointIndex": 7,
     "Escenario": "Costo-efectivo (Meta 6)",
     "Carbón (Gt)": 1.539987107,
     "Biodiversidad (%)": "17.5748984",
     "Costo total (USD)": 3428.2,
     "Costo de establecimiento (USD)": 7.436048121,
     "Costo de oportunidad (USD)": 26.845985779,
     "Peso Carbón": 0.9375,
     "Peso Biodiversidad": 0.0625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_6_weight_8_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#16A9C3"
   },
   {
     "dataId": 58,
     "traceIndex": 5,
     "pointIndex": 8,
     "Escenario": "Costo-efectivo (Meta 6)",
     "Carbón (Gt)": 1.540438047,
     "Biodiversidad (%)": "17.533205499999998",
     "Costo total (USD)": 3422.72,
     "Costo de establecimiento (USD)": 7.443830868,
     "Costo de oportunidad (USD)": 26.783338799,
     "Peso Carbón": 0.96875,
     "Peso Biodiversidad": 0.03125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_6_weight_10_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#17A6CB"
   },
   {
     "dataId": 59,
     "traceIndex": 5,
     "pointIndex": 9,
     "Escenario": "Costo-efectivo (Meta 6)",
     "Carbón (Gt)": 1.55053778,
     "Biodiversidad (%)": "17.090536899999996",
     "Costo total (USD)": 3426.71,
     "Costo de establecimiento (USD)": 7.450139256,
     "Costo de oportunidad (USD)": 26.816929372,
     "Peso Carbón": 1,
     "Peso Biodiversidad": 0,
     "version": "v14",
     "MapImage": "scen_tradeoffs_ce_arearestored_target_6_weight_1_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#0BD265"
   },
   {
     "dataId": 110,
     "traceIndex": 11,
     "pointIndex": 0,
     "Escenario": "Máximo beneficio (Meta 6)",
     "Carbón (Gt)": 2.446509715,
     "Biodiversidad (%)": "18.040679",
     "Costo total (USD)": 5917.8,
     "Costo de establecimiento (USD)": 15.958569401,
     "Costo de oportunidad (USD)": 43.219407808,
     "Peso Carbón": 0,
     "Peso Biodiversidad": 1,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_6_weight_2_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#FF1600"
   },
   {
     "dataId": 111,
     "traceIndex": 11,
     "pointIndex": 1,
     "Escenario": "Máximo beneficio (Meta 6)",
     "Carbón (Gt)": 2.865722018,
     "Biodiversidad (%)": "18.0352687",
     "Costo total (USD)": 6009.46,
     "Costo de establecimiento (USD)": 15.476914536,
     "Costo de oportunidad (USD)": 44.617710956,
     "Peso Carbón": 0.0625,
     "Peso Biodiversidad": 0.9375,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_6_weight_9_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#FF2900"
   },
   {
     "dataId": 112,
     "traceIndex": 11,
     "pointIndex": 2,
     "Escenario": "Máximo beneficio (Meta 6)",
     "Carbón (Gt)": 2.978206129,
     "Biodiversidad (%)": "18.0306465",
     "Costo total (USD)": 6150.88,
     "Costo de establecimiento (USD)": 15.425404968,
     "Costo de oportunidad (USD)": 46.083435779,
     "Peso Carbón": 125,
     "Peso Biodiversidad": 875,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_6_weight_8_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#FF2500"
   },
   {
     "dataId": 113,
     "traceIndex": 11,
     "pointIndex": 3,
     "Escenario": "Máximo beneficio (Meta 6)",
     "Carbón (Gt)": 3.040949976,
     "Biodiversidad (%)": "18.0265075",
     "Costo total (USD)": 6235.23,
     "Costo de establecimiento (USD)": 15.463056488,
     "Costo de oportunidad (USD)": 46.889264957,
     "Peso Carbón": 0.25,
     "Peso Biodiversidad": 0.75,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_6_weight_4_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#FF0200"
   },
   {
     "dataId": 114,
     "traceIndex": 11,
     "pointIndex": 4,
     "Escenario": "Máximo beneficio (Meta 6)",
     "Carbón (Gt)": 3.068980402,
     "Biodiversidad (%)": "18.019992600000002",
     "Costo total (USD)": 6283.63,
     "Costo de establecimiento (USD)": 15.521546731,
     "Costo de oportunidad (USD)": 47.314765152,
     "Peso Carbón": 0.5,
     "Peso Biodiversidad": 0.5,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_6_weight_3_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#FF0000"
   },
   {
     "dataId": 115,
     "traceIndex": 11,
     "pointIndex": 5,
     "Escenario": "Máximo beneficio (Meta 6)",
     "Carbón (Gt)": 3.075614304,
     "Biodiversidad (%)": "18.010626300000002",
     "Costo total (USD)": 6293.52,
     "Costo de establecimiento (USD)": 15.551028081,
     "Costo de oportunidad (USD)": 47.384161296,
     "Peso Carbón": 0.75,
     "Peso Biodiversidad": 0.25,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_6_weight_5_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#FF0F00"
   },
   {
     "dataId": 116,
     "traceIndex": 11,
     "pointIndex": 6,
     "Escenario": "Máximo beneficio (Meta 6)",
     "Carbón (Gt)": 3.077030864,
     "Biodiversidad (%)": "18.0023705",
     "Costo total (USD)": 6296.77,
     "Costo de establecimiento (USD)": 15.560909198,
     "Costo de oportunidad (USD)": 47.406750873,
     "Peso Carbón": 875,
     "Peso Biodiversidad": 125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_6_weight_6_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#FF1700"
   },
   {
     "dataId": 117,
     "traceIndex": 11,
     "pointIndex": 7,
     "Escenario": "Máximo beneficio (Meta 6)",
     "Carbón (Gt)": 3.078047705,
     "Biodiversidad (%)": "17.8358026",
     "Costo total (USD)": 6300.01,
     "Costo de establecimiento (USD)": 15.557447026,
     "Costo de oportunidad (USD)": 47.442650564,
     "Peso Carbón": 0.9375,
     "Peso Biodiversidad": 0.0625,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_6_weight_7_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#FF1D00"
   },
   {
     "dataId": 118,
     "traceIndex": 11,
     "pointIndex": 8,
     "Escenario": "Máximo beneficio (Meta 6)",
     "Carbón (Gt)": 3.078309698,
     "Biodiversidad (%)": "17.7648224",
     "Costo total (USD)": 6303.93,
     "Costo de establecimiento (USD)": 15.558268765,
     "Costo de oportunidad (USD)": 47.481018312,
     "Peso Carbón": 0.96875,
     "Peso Biodiversidad": 0.03125,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_6_weight_10_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#FF3100"
   },
   {
     "dataId": 119,
     "traceIndex": 11,
     "pointIndex": 9,
     "Escenario": "Máximo beneficio (Meta 6)",
     "Carbón (Gt)": 3.085836782,
     "Biodiversidad (%)": "17.3691334",
     "Costo total (USD)": 6314.09,
     "Costo de establecimiento (USD)": 15.570897919,
     "Costo de oportunidad (USD)": 47.570044609,
     "Peso Carbón": 1,
     "Peso Biodiversidad": 0,
     "version": "v14",
     "MapImage": "scen_tradeoffs_mb_arearestored_target_6_weight_1_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#FF3000"
   },
   {
     "dataId": 125,
     "traceIndex": 17,
     "pointIndex": 0,
     "Escenario": "Mínimo costo (Meta 6)",
     "Carbón (Gt)": 2.489350952,
     "Biodiversidad (%)": "18.0398213",
     "Costo total (USD)": 19.569568931,
     "Costo de establecimiento (USD)": 15.812180377,
     "Costo de oportunidad (USD)": 3.757388554,
     "Peso Carbón": null,
     "Peso Biodiversidad": null,
     "version": "v14",
     "MapImage": "scen_mincost_target_6_v0.1_col_v14.png",
     "Highlight": 1,
     "HEXcode": "#1A9CE2"
   }
  ];

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


