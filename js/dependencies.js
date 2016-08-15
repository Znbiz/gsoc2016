fallback.config({
    libs: {
        "jQuery": {
            urls: [
                "//code.jquery.com/jquery-2.1.4.min",
                "/lib/jquery-2.1.4.min"
            ]
        },

        // jquery-ajax-goodies
        "jquery-ajax-goodies": {
            exports: "$.ajax.goodies",
            urls: [
                "/lib/jquery-ajax-goodies-min"
            ],
            deps: "jQuery"
        },

        "css$bootstrap": {
            exports: ".col-xs-12",
            urls: [
                "//maxcdn.bootstrapcdn.com/bootswatch/3.3.6/paper/bootstrap.min",
                "/lib/bootstrap.min"
            ]
        },
        "bootstrap": {
            exports: "jQuery.fn.modal",
            urls: [
                "//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min",
                "/lib/bootstrap.min"
            ],
            deps: "jQuery"
        },

        // bootstrap file input
        "bootstrap.fileinput": {
            urls: ["/lib/fileinput.min"],
            deps: "jQuery"
        },
        "bootstrap.fileinput_locale_ru": {
            urls: ["/lib/fileinput_locale_ru"],
            deps: "bootstrap.fileinput"
        },
        "css$bootstrap.fileinput": {
            exports: ".btn-file",
            urls: [
                "/lib/fileinput.min"
            ]
        },


        // bootstrap-select
        //https://silviomoreto.github.io/bootstrap-select/
        "css$bootstrap-select": {
            exports: ".bootstrap-select",
            urls: [
                "http://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.9.4/css/bootstrap-select.min.css",
                "/lib/bootstrap-select.min"
            ]
        },
        "bootstrap-select": {
            exports: "$.fn.selectpicker",
            urls: [
                "//cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.9.4/js/bootstrap-select.min",
                "/lib/bootstrap-select.min"
            ],
            deps: ["jQuery", "css$bootstrap-select"]
        },



        // DataTables - datatables.net
        DataTables: {
            exports: "jQuery.fn.DataTable",
            urls: [
                "//cdn.datatables.net/t/bs/jszip-2.5.0,dt-1.10.11,b-1.1.2,b-colvis-1.1.2,b-flash-1.1.2,b-html5-1.1.2,cr-1.3.1,fh-3.1.1,rr-1.1.1,se-1.1.2/datatables.min",
                "/lib/datatables.min"
            ],
            deps: ["jQuery", "css$DataTables"]
        },
        "css$DataTables": {
            urls: [
                "//cdn.datatables.net/t/bs/jszip-2.5.0,dt-1.10.11,b-1.1.2,b-colvis-1.1.2,b-flash-1.1.2,b-html5-1.1.2,cr-1.3.1,fh-3.1.1,rr-1.1.1,se-1.1.2/datatables.min",
                "/lib/datatables.min"
            ]
        },


        // Leaflet.js - leafletjs.com
        leaflet: {
            exports: "L",
            urls: [
                "//cdn.leafletjs.com/leaflet/v1.0.0-beta.2/leaflet",
                "/lib/leaflet"
            ],
            deps: "css$leaflet"
        },
        "css$leaflet": {
            exports: ".leaflet-pane",
            urls: [
                "//cdn.leafletjs.com/leaflet/v1.0.0-beta.2/leaflet",
                "/lib/leaflet"
            ]
        },

        "Leaflet.BootstrapZoom": {
            exports: "L.Control.BootstrapZoom",
            urls: ["/lib/Leaflet.BootstrapZoom.min"],
            deps: ["leaflet", "css$bootstrap"]
        },

        "Leaflet.MarkerCluster": {
            exports: "L.MarkerCluster",
            urls: ["/js/leaflet.markercluster-src-hierarchicalTree.js"],
            deps: ["leaflet", "css$Leaflet.MarkerCluster"]
        },

        "css$Leaflet.MarkerCluster": {
            exports: ".leaflet-cluster-anim",
            urls: ["/css/MarkerCluster.css"]
        },

        // D3.js - d3js.org
        //cdnjs.cloudflare.com/ajax/libs/d3/3.5.14/d3.min.js
        /*leaflet: {
            exports: "L",
            urls: [
                "//cdn.leafletjs.com/leaflet/v1.0.0-beta.2/leaflet",
                "/lib/leaflet"
            ],
            deps: ["css$leaflet"]
        },*/

        // proj4js
        // http://proj4js.org/
        proj4: {
            urls: [
                "//cdnjs.cloudflare.com/ajax/libs/proj4js/2.3.12/proj4",
                "/lib/proj4"
            ]
        },
        proj4leaflet: {
            exports: "L.Proj",
            urls: [
                "/lib/proj4leaflet"
            ],
            deps: ["leaflet", "proj4"]
        },



        // highcharts
        // http://highcharts.com
        "$.fn.highcharts": {
            urls: [
                "//code.highcharts.com/highcharts",
                "/lib/highcharts"
            ],
            deps: "jQuery"
        },




        highcharts: {
            urls: ["/js/highcharts-options"],
            deps: "$.fn.highcharts"
        },

        hideMaxListItems: {
            exports: "$.fn.hideMaxListItems",
            urls: [
                "/lib/hideMaxListItem-min"
            ],
            deps: "jQuery"
        }

    }
});
