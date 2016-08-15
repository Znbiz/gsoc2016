//Bronchiseptica HGF IL-1 T-LGL-2011
        //use this variable to switch between our testing graphs
        // var graph = ["Bronchiseptica", "CD4", "EGFR", "ErbB", "FA-BRCA", 'Glucose',"HGF", "IL-1", "IL-6","Influenza", "T-Cell-Receptor", "T-Cell", "T-LGL-2011","T-LGL", "Yeast-Apoptosis", "circle-10","circle-100","circle-1000", "drosophila","fibroblast","graph-10-1","graph-10-2","graph-10-3","graph-100-1","graph-100-2","graph-100-3","graph-1000-1","graph-1000-2","graph-1000-3","line-10","line-100", "line-1000","macrophage","star-10","star-100","star-1000"]; 

        // var graph = ["Bronchiseptica", "CD4", "EGFR", "ErbB", "FA-BRCA", 'Glucose',"HGF", "IL-1", "IL-6","Influenza", "T-Cell-Receptor", "T-Cell", "T-LGL-2011","T-LGL", "Yeast-Apoptosis", "circle-10","circle-100", "drosophila","fibroblast","graph-10-1","graph-10-2","graph-10-3","graph-100-1","graph-100-2","graph-100-3","line-10","line-100", "macrophage","star-10","star-100"];
function graph_drawing(i){
    $.ajax({
            url:"http://helikarlab.github.io/ccNetViz/data/" + graph[i] + ".json",
            type:"GET",
            success: function(data) {
                Grid(data,1);
                $("#name").append(graph[i])
            }
    });
}

/**
 * Функция отрисовки графа
 * @param  {[type]} id_img     id div где нужно нарисовать граф
 * @param  {[type]} id_time    id time куда нужно вывести время
 * @param  {[type]} name_graph название графа
 * @param  {[type]} layot      1 - алгоритм рисования  , 2 -алгоритм рисования
 * @return {[type]}            [description]
 */
function Draw(id_img, id_time, name_graph, layot){
    $.ajax({
            url:"http://helikarlab.github.io/ccNetViz/data/" + name_graph + ".json",
            type:"GET",
            async: false,
            success: function(res) {
                var time = Date.now();
                Grid(res,layot, id_img);
                time = Date.now() - time;
                $("#"+id_time).append(time.toFixed(2));
            }
    });
}


 function Grid(data, dr, id_img){
    var styles = {
        node: { label: { hideSize: 14 } },
        edge: { arrow: { texture: "gsoc2016/images/arrow.png", hideSize: 2 } },
        internal: { texture: "gsoc2016/images/red.png" },
        external: { texture: "gsoc2016/images/blue.png" },
        positive: { color: "rgb(171, 237, 199)" },
        negative: { color: "rgb(244, 172, 164)" }
    };

    var nodes = data.nodes;
    var edges = data.edges.map(function(e) {
        return { source: nodes[e.source], target: nodes[e.target], style: e.style }
    });
    if(dr == 1){
        var force = new ccNetViz(document.getElementById(id_img), { styles: styles });
        force.set(nodes, edges,"force");
        force.draw();
    }
    if(dr == 2){
        var grid = new ccNetViz(document.getElementById(id_img), { styles: styles });
 

        var size = Math.floor(1.5 * Math.sqrt(nodes.length));

        gridLayout.calculate(nodes, edges, size);

        size = 0;
        for(var i = 0; i < nodes.length; i++){
            size = size < nodes[i].x ? nodes[i].x : size;
            size = size < nodes[i].y ? nodes[i].y : size;
        }
        size++;
        var valid = true;
        var map = {};

        nodes.forEach(function(e) {
            if (Math.floor(e.x) !== e.x || Math.floor(e.y) !== e.y || e.x < 0 || e.x >= size || e.y < 0 || e.y >= size) {
                valid = false;
            }
            else {
                var key = e.x + " " + e.y;
                map[key] ? valid = false : map[key] = true;
            }

            e.x /= (size - 1);
            e.y /= (size - 1);
        });
        grid.set(nodes, edges);
        grid.draw();
    }
 }