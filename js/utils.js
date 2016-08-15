
String.prototype.mapReplace = function(map) {
    var regex = [];
    for (var key in map)
        regex.push(key.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"));
    return this.replace(new RegExp(regex.join('|'), "g"), function (word) {
        return map[word];
    });
};


function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function joinTicksValues(ticksValuesObj) {
    // creates [[x1, y1], [x2, y2], ...] form {ticks: [x1, x2, ...], values: [y1, y2, ...]}
    var result = [];
    for (var i = 0; i < ticksValuesObj.ticks.length; i++) {
        result.push([
            ticksValuesObj.ticks[i],
            ticksValuesObj.values[i]
        ])
    }
    return result;
}

// common highcharts settings template
var highchartsSettings = {
    title: {
        text: null
    },
    credits: {
        enabled: false
    },
    xAxis: {},
    yAxis: {
        title: {}
    }
};