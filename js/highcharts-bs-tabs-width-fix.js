// this fixes highcharts width when using bootstrap tabs
fallback.require(["bootstrap", "highcharts"], function() {
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var charts = $($(this).attr('href'));

        if (!charts.hasClass("chart")) {
            charts = charts.find(".chart");
        }

        charts.each(function() {
            var chart = $(this).highcharts();
            if (chart)
                chart.setSize($(this).width(), chart.chartHeight, false);
        });

    });
});