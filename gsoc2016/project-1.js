/**
 * Функция отрисовки графа
 * @param  {[type]} id_img     id div где нужно нарисовать граф
 * @param  {[type]} id_time    id time куда нужно вывести время
 * @param  {[type]} name_graph название графа
 * @param  {[type]} layot      1 - алгоритм рисования  , 2 -алгоритм рисования
 * @return {[type]}            [description]
 */
function Draw(id_img, id_time, name_graph, layot){
    var res = name_graph;
    var time = Date.now();
    Grid(res,layot, id_img);
    time = Date.now() - time;
    $("#"+id_time).append(time.toFixed(2));
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