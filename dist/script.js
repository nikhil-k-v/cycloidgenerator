var elt = document.getElementById('calculator');
  var calculator = Desmos.GraphingCalculator(elt, {
    invertedColors: true,
    pasteGraphLink: true,
    // expressions: false,
    settingsMenu: false,
    showGrid: false,
    zoomFit: true
  });

var desmosCycloidState = {
  "version": 9,
  "graph": {
    "viewport": {
    "xmin": -4.1,
    "ymin": -2.2,
    "xmax": 4.1,
    "ymax": 2.2
  },
  "showGrid": false
},
"expressions": {
   "list": [
    {
        "id": "56",
        "type": "expression",
        "latex": "c=0.41",
        "color": "#6042a6",
        "lineStyle": "SOLID",
        "lineWidth": "",
        "lineOpacity": "",
        "pointStyle": "POINT",
        "pointSize": "",
        "pointOpacity": "",
        "fillOpacity": "",
        "hidden": false,
        "secret": false,
        "dragMode": "AUTO",
        "label": "",
        "showLabel": false,
        "labelSize": "",
        "labelOrientation": "default",
        "interactiveLabel": false,
        "readonly": false,
        "parametricDomain": {
            "min": "",
            "max": ""
        },
        "polarDomain": {
            "min": "",
            "max": ""
        },
        "domain": {
            "min": "0",
            "max": "1"
        },
        "sliderBounds": {
            "min": "0",
            "max": "2\\pi"
        },
        "slider": {
          "animationPeriod": 40000,
          "isPlaying": true
        }
    },
    {
        "id": "3",
        "type": "expression",
        "latex": "R=1.8",
        "color": "#388c46",
        "lineStyle": "SOLID",
        "lineWidth": "",
        "lineOpacity": "",
        "pointStyle": "POINT",
        "pointSize": "",
        "pointOpacity": "",
        "fillOpacity": "",
        "hidden": true,
        "secret": false,
        "dragMode": "AUTO",
        "label": "",
        "showLabel": false,
        "labelSize": "",
        "labelOrientation": "default",
        "interactiveLabel": false,
        "readonly": false,
        "parametricDomain": {
            "min": "",
            "max": ""
        },
        "polarDomain": {
            "min": "",
            "max": ""
        },
        "domain": {
            "min": "0",
            "max": "1"
        },
        "sliderBounds": {
            "min": "0",
            "max": "20"
        },
        "playing": false
    },
    {
        "id": "11",
        "type": "expression",
        "latex": "S=0.1",
        "color": "#c74440",
        "lineStyle": "SOLID",
        "lineWidth": "",
        "lineOpacity": "",
        "pointStyle": "POINT",
        "pointSize": "",
        "pointOpacity": "",
        "fillOpacity": "",
        "hidden": true,
        "secret": false,
        "dragMode": "AUTO",
        "label": "",
        "showLabel": false,
        "labelSize": "",
        "labelOrientation": "default",
        "interactiveLabel": false,
        "readonly": false,
        "parametricDomain": {
            "min": "",
            "max": ""
        },
        "polarDomain": {
            "min": "",
            "max": ""
        },
        "domain": {
            "min": "0",
            "max": "1"
        },
        "sliderBounds": {
            "min": "0",
            "max": "6"
        },
        "playing": false
    },
    {
        "id": "7",
        "type": "expression",
        "latex": "N=28",
        "color": "#2d70b3",
        "lineStyle": "SOLID",
        "lineWidth": "",
        "lineOpacity": "",
        "pointStyle": "POINT",
        "pointSize": "",
        "pointOpacity": "",
        "fillOpacity": "",
        "hidden": true,
        "secret": false,
        "dragMode": "AUTO",
        "label": "",
        "showLabel": false,
        "labelSize": "",
        "labelOrientation": "default",
        "interactiveLabel": false,
        "readonly": false,
        "parametricDomain": {
            "min": "",
            "max": ""
        },
        "polarDomain": {
            "min": "",
            "max": ""
        },
        "domain": {
            "min": "0",
            "max": "1"
        },
        "sliderBounds": {
            "min": "0",
            "max": "50",
            "step": "2"
        },
        "playing": false
    },
    {
        "id": "8",
        "type": "expression",
        "latex": "E=\\frac{S}{2}",
        "color": "#388c46",
        "lineStyle": "SOLID",
        "lineWidth": "",
        "lineOpacity": "",
        "pointStyle": "POINT",
        "pointSize": "",
        "pointOpacity": "",
        "fillOpacity": "",
        "hidden": true,
        "secret": false,
        "dragMode": "AUTO",
        "label": "",
        "showLabel": false,
        "labelSize": "",
        "labelOrientation": "default",
        "interactiveLabel": false,
        "readonly": false,
        "parametricDomain": {
            "min": "",
            "max": ""
        },
        "polarDomain": {
            "min": "",
            "max": ""
        },
        "domain": {
            "min": "0",
            "max": "1"
        },
        "sliderBounds": {
            "min": "0",
            "max": "1"
        },
        "playing": false
    },
    {
        "id": "73",
        "type": "folder",
        "hidden": false,
        "secret": false
    },
    {
        "id": "13",
        "type": "expression",
        "latex": "f\\left(x\\right)=R\\cos\\left(x\\right)-S\\cos\\left(x-b\\right)-E\\cos\\left(Nx\\right)",
        "color": "#388c46",
        "lineStyle": "SOLID",
        "lineWidth": "",
        "lineOpacity": "",
        "pointStyle": "POINT",
        "pointSize": "",
        "pointOpacity": "",
        "fillOpacity": "",
        "hidden": true,
        "secret": false,
        "dragMode": "AUTO",
        "label": "",
        "showLabel": false,
        "labelSize": "",
        "labelOrientation": "default",
        "interactiveLabel": false,
        "readonly": false,
        "parametricDomain": {
            "min": "",
            "max": ""
        },
        "polarDomain": {
            "min": "",
            "max": ""
        },
        "domain": {
            "min": "0",
            "max": "1"
        },
        "playing": false
    },
    {
        "id": "14",
        "type": "expression",
        "latex": "g\\left(x\\right)=-R\\sin\\left(x\\right)+S\\sin\\left(x-b\\right)+E\\sin\\left(Nx\\right)",
        "color": "#6042a6",
        "lineStyle": "SOLID",
        "lineWidth": "",
        "lineOpacity": "",
        "pointStyle": "POINT",
        "pointSize": "",
        "pointOpacity": "",
        "fillOpacity": "",
        "hidden": true,
        "secret": false,
        "dragMode": "AUTO",
        "label": "",
        "showLabel": false,
        "labelSize": "",
        "labelOrientation": "default",
        "interactiveLabel": false,
        "readonly": false,
        "parametricDomain": {
            "min": "",
            "max": ""
        },
        "polarDomain": {
            "min": "",
            "max": ""
        },
        "domain": {
            "min": "0",
            "max": "1"
        },
        "playing": false
    },
    {
        "id": "19",
        "type": "expression",
        "latex": "b=-\\arctan\\left(\\frac{\\sin\\left(\\left(1-N\\right)x\\right)}{\\left(\\frac{R}{EN}\\right)-\\cos\\left(\\left(1-N\\right)x\\right)}\\right)",
        "color": "#6042a6",
        "lineStyle": "SOLID",
        "lineWidth": "",
        "lineOpacity": "",
        "pointStyle": "POINT",
        "pointSize": "",
        "pointOpacity": "",
        "fillOpacity": "",
        "hidden": true,
        "secret": false,
        "dragMode": "AUTO",
        "label": "",
        "showLabel": false,
        "labelSize": "",
        "labelOrientation": "default",
        "interactiveLabel": false,
        "readonly": false,
        "parametricDomain": {
            "min": "",
            "max": ""
        },
        "polarDomain": {
            "min": "",
            "max": ""
        },
        "domain": {
            "min": "0",
            "max": "1"
        },
        "playing": false
    },
    {
        "id": "20",
        "type": "expression",
        "latex": "\\left(f\\left(t\\right),g\\left(t\\right)\\right)",
        "color": "#2d70b3",
        "lineStyle": "SOLID",
        "lineWidth": "",
        "lineOpacity": "",
        "pointStyle": "POINT",
        "pointSize": "",
        "pointOpacity": "",
        "fillOpacity": "",
        "hidden": true,
        "secret": false,
        "dragMode": "AUTO",
        "label": "",
        "showLabel": false,
        "labelSize": "",
        "labelOrientation": "default",
        "interactiveLabel": false,
        "readonly": false,
        "parametricDomain": {
            "min": "",
            "max": "2\\pi"
        },
        "polarDomain": {
            "min": "",
            "max": ""
        },
        "domain": {
            "min": "0",
            "max": "2\\pi"
        },
        "playing": false
    },
    {
        "id": "53",
        "type": "expression",
        "latex": "a=\\left[1...N\\right]",
        "color": "#c74440",
        "lineStyle": "SOLID",
        "lineWidth": "",
        "lineOpacity": "",
        "pointStyle": "POINT",
        "pointSize": "",
        "pointOpacity": "",
        "fillOpacity": "",
        "hidden": false,
        "secret": false,
        "dragMode": "AUTO",
        "label": "",
        "showLabel": false,
        "labelSize": "",
        "labelOrientation": "default",
        "interactiveLabel": false,
        "readonly": false,
        "parametricDomain": {
            "min": "",
            "max": ""
        },
        "polarDomain": {
            "min": "",
            "max": ""
        },
        "domain": {
            "min": "0",
            "max": "1"
        },
        "playing": false
    },
    {
        "id": "51",
        "type": "expression",
        "latex": "\\left(x+R\\cos\\left(\\frac{2\\pi a}{N}\\right)+E\\right)^{2}+\\left(y+R\\sin\\left(\\frac{2\\pi a}{N}\\right)\\right)^{2}=S^{2}",
        "color": "#c74440",
        "lineStyle": "SOLID",
        "lineWidth": "",
        "lineOpacity": "",
        "pointStyle": "POINT",
        "pointSize": "",
        "pointOpacity": "",
        "fillOpacity": "",
        "hidden": false,
        "secret": false,
        "dragMode": "AUTO",
        "label": "",
        "showLabel": false,
        "labelSize": "",
        "labelOrientation": "default",
        "interactiveLabel": false,
        "readonly": false,
        "parametricDomain": {
            "min": "",
            "max": ""
        },
        "polarDomain": {
            "min": "",
            "max": ""
        },
        "domain": {
            "min": "0",
            "max": "1"
        },
        "playing": false
    },
    {
        "id": "68",
        "type": "expression",
        "latex": "\\left(0.75E\\cos t-E,0.75E\\sin t\\right)",
        "color": "#000000",
        "lineStyle": "SOLID",
        "lineWidth": "",
        "lineOpacity": "",
        "pointStyle": "POINT",
        "pointSize": "",
        "pointOpacity": "",
        "fillOpacity": "",
        "hidden": false,
        "secret": false,
        "dragMode": "AUTO",
        "label": "",
        "showLabel": false,
        "labelSize": "",
        "labelOrientation": "default",
        "interactiveLabel": false,
        "readonly": false,
        "parametricDomain": {
            "min": "",
            "max": "2\\pi"
        },
        "polarDomain": {
            "min": "",
            "max": "2\\pi"
        },
        "domain": {
            "min": "0",
            "max": "2\\pi"
        },
        "playing": false
    },
    {
        "id": "62",
        "type": "expression",
        "latex": "\\left(\\left(\\frac{1}{10}R+2E\\right)\\cos\\left(t\\right)+2m\\left(c\\right)-E,\\left(\\frac{1}{10}R+2E\\right)\\sin t+2m_{2}\\left(c\\right)\\right)",
        "color": "#000000",
        "lineStyle": "SOLID",
        "lineWidth": "",
        "lineOpacity": "",
        "pointStyle": "POINT",
        "pointSize": "",
        "pointOpacity": "",
        "fill": true,
        "fillOpacity": "0.4",
        "hidden": false,
        "secret": false,
        "dragMode": "AUTO",
        "label": "",
        "showLabel": false,
        "labelSize": "",
        "labelOrientation": "default",
        "interactiveLabel": false,
        "readonly": false,
        "parametricDomain": {
            "min": "",
            "max": "2\\pi"
        },
        "polarDomain": {
            "min": "",
            "max": ""
        },
        "domain": {
            "min": "0",
            "max": "2\\pi"
        },
        "playing": false
    },
    {
        "id": "69",
        "type": "expression",
        "latex": "\\left(\\left(\\frac{1}{10}R+E\\ +\\ S\\right)\\cos t-E+m\\left(c\\right),\\left(\\frac{1}{10}R+E\\ +\\ S\\right)\\sin t+m_{2}\\left(c\\right)\\right)",
        "color": "#dd704f",
        "lineStyle": "SOLID",
        "lineWidth": "",
        "lineOpacity": "",
        "pointStyle": "POINT",
        "pointSize": "",
        "pointOpacity": "",
        "fill": false,
        "fillOpacity": "0.4",
        "hidden": false,
        "secret": false,
        "dragMode": "AUTO",
        "label": "",
        "showLabel": false,
        "labelSize": "",
        "labelOrientation": "default",
        "interactiveLabel": false,
        "readonly": false,
        "parametricDomain": {
            "min": "",
            "max": "2\\pi"
        },
        "polarDomain": {
            "min": "",
            "max": ""
        },
        "domain": {
            "min": "0",
            "max": "2\\pi"
        },
        "playing": false
    },
    {
        "id": "61",
        "type": "expression",
        "latex": "(f\\left(t\\right)\\cdot\\cos\\left(c\\right)-g\\left(t\\right)\\sin\\left(c\\right)+m\\left(c\\right)-E\\ ,\\ f\\left(t\\right)\\cdot\\sin\\left(c\\right)+g\\left(t\\right)\\cdot\\cos\\left(c\\right)+m_{2}\\left(c\\right))",
        "color": "#cb3f14",
        "lineStyle": "SOLID",
        "lineWidth": "",
        "lineOpacity": "",
        "pointStyle": "POINT",
        "pointSize": "",
        "pointOpacity": "",
        "fill": true,
        "fillOpacity": "",
        "hidden": false,
        "secret": false,
        "dragMode": "AUTO",
        "label": "",
        "showLabel": false,
        "labelSize": "",
        "labelOrientation": "default",
        "interactiveLabel": false,
        "readonly": false,
        "parametricDomain": {
            "min": "",
            "max": "2\\pi"
        },
        "polarDomain": {
            "min": "",
            "max": ""
        },
        "domain": {
            "min": "0",
            "max": "2\\pi"
        },
        "playing": false
    },
    {
        "id": "101",
        "type": "expression",
        "latex": "m\\left(x\\right)=\\left(E\\cos\\left(x\\left(N-1\\right)\\right)\\right)",
        "color": "#388c46",
        "lineStyle": "SOLID",
        "lineWidth": "",
        "lineOpacity": "",
        "pointStyle": "POINT",
        "pointSize": "",
        "pointOpacity": "",
        "fillOpacity": "",
        "hidden": true,
        "secret": false,
        "dragMode": "AUTO",
        "label": "",
        "showLabel": false,
        "labelSize": "",
        "labelOrientation": "default",
        "interactiveLabel": false,
        "readonly": false,
        "parametricDomain": {
            "min": "",
            "max": ""
        },
        "polarDomain": {
            "min": "",
            "max": ""
        },
        "domain": {
            "min": "0",
            "max": "1"
        },
        "playing": false
    },
    {
        "id": "102",
        "type": "expression",
        "latex": "m_{2}\\left(x\\right)=-\\left(\\ E\\sin\\left(x\\left(N-1\\right)\\right)\\right)",
        "color": "#6042a6",
        "lineStyle": "SOLID",
        "lineWidth": "",
        "lineOpacity": "",
        "pointStyle": "POINT",
        "pointSize": "",
        "pointOpacity": "",
        "fillOpacity": "",
        "hidden": true,
        "secret": false,
        "dragMode": "AUTO",
        "label": "",
        "showLabel": false,
        "labelSize": "",
        "labelOrientation": "default",
        "interactiveLabel": false,
        "readonly": false,
        "parametricDomain": {
            "min": "",
            "max": ""
        },
        "polarDomain": {
            "min": "",
            "max": ""
        },
        "domain": {
            "min": "0",
            "max": "1"
        },
        "playing": false
    },
    {
        "id": "129",
        "type": "expression",
        "latex": "\\left(X,Y\\right)",
        "color": "#6042a6",
        "lineStyle": "SOLID",
        "lineWidth": "",
        "lineOpacity": "",
        "pointStyle": "POINT",
        "pointSize": "",
        "pointOpacity": "",
        "fill": true,
        "fillOpacity": "",
        "hidden": true,
        "secret": false,
        "dragMode": "AUTO",
        "label": "",
        "showLabel": false,
        "labelSize": "",
        "labelOrientation": "default",
        "interactiveLabel": false,
        "readonly": false,
        "parametricDomain": {
            "min": "",
            "max": "2\\pi"
        },
        "polarDomain": {
            "min": "",
            "max": ""
        },
        "domain": {
            "min": "0",
            "max": "2\\pi"
        },
        "playing": false
    },
    {
        "id": "130",
        "type": "expression",
        "latex": "X=R*\\cos(t)-S*\\cos(t+\\arctan((\\sin((1-N)*t))/(((R)/(E*N))-\\cos((1-N)*t))))-E*\\cos(N*t)",
        "color": "#000000",
        "lineStyle": "SOLID",
        "lineWidth": "",
        "lineOpacity": "",
        "pointStyle": "POINT",
        "pointSize": "",
        "pointOpacity": "",
        "fillOpacity": "",
        "hidden": true,
        "secret": false,
        "dragMode": "AUTO",
        "label": "",
        "showLabel": false,
        "labelSize": "",
        "labelOrientation": "default",
        "interactiveLabel": false,
        "readonly": false,
        "parametricDomain": {
            "min": "",
            "max": ""
        },
        "polarDomain": {
            "min": "",
            "max": ""
        },
        "domain": {
            "min": "0",
            "max": "1"
        },
        "playing": false
    },
    {
        "id": "131",
        "type": "expression",
        "latex": "Y=R*\\sin(t)-S*\\sin(t+\\arctan((\\sin((1-N)*t))/(((R)/(E*N))-\\cos((1-N)*t))))-E*\\sin(N*t)",
        "color": "#c74440",
        "lineStyle": "SOLID",
        "lineWidth": "",
        "lineOpacity": "",
        "pointStyle": "POINT",
        "pointSize": "",
        "pointOpacity": "",
        "fillOpacity": "",
        "hidden": true,
        "secret": false,
        "dragMode": "AUTO",
        "label": "",
        "showLabel": false,
        "labelSize": "",
        "labelOrientation": "default",
        "interactiveLabel": false,
        "readonly": false,
        "parametricDomain": {
            "min": "",
            "max": ""
        },
        "polarDomain": {
            "min": "",
            "max": ""
        },
        "domain": {
            "min": "0",
            "max": "1"
        },
        "playing": false
    },
    {
        "id": "139",
        "type": "expression",
        "latex": "",
        "color": "#2d70b3",
        "lineStyle": "SOLID",
        "lineWidth": "",
        "lineOpacity": "",
        "pointStyle": "POINT",
        "pointSize": "",
        "pointOpacity": "",
        "fillOpacity": "",
        "hidden": false,
        "secret": false,
        "dragMode": "AUTO",
        "label": "",
        "showLabel": false,
        "labelSize": "",
        "labelOrientation": "default",
        "interactiveLabel": false,
        "readonly": false,
        "parametricDomain": {
            "min": "",
            "max": ""
        },
        "polarDomain": {
            "min": "",
            "max": ""
        },
        "domain": {
            "min": "0",
            "max": "1"
        },
        "playing": false
    }
]
}
};


var currentState = {
  "version": 9,
  "graph": {
    "viewport": {
    "xmin": -10,
    "ymin": -10,
    "xmax": 10,
    "ymax": 10
  },
  "showGrid": false
},
"expressions": {
   "list": [
    {
      "type": "expression",
      "id": "1",
      "color": "#c74440"
    }
   ]
  }
}

calculator.setState(desmosCycloidState);





// function output() {
//   calculator.updateSettings({
//     expressions: false,
//     showGrid: false
//   });
// }

// var currentData = document.getElementById("button");
// currentData.addEventListener("click", output, true);