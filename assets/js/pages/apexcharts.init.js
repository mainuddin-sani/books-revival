// function getChartColorsArray(e) {
//   e = $(e).attr("data-colors");
//   return (e = JSON.parse(e)).map(function (e) {
//     e = e.replace(" ", "");
//     if (-1 == e.indexOf("--")) return e;
//     e = getComputedStyle(document.documentElement).getPropertyValue(e);
//     return e || void 0;
//   });
// }

options = {
  chart: {
    height: 350,
    type: "bar",
    toolbar: {
      show: !1,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: "top",
      },
    },
  },
  dataLabels: {
    enabled: !0,
    formatter: function (e) {
      return e + "%";
    },
    offsetY: -22,
    style: {
      fontSize: "12px",
      colors: ["#304758"],
    },
  },
  series: [
    {
      name: "Inflation",
      data: [2.5, 3.2, 5, 10.1, 4.2, 3.8, 3, 2.4, 4, 1.2, 3.5, 0.8],
    },
  ],
  //   colors: "#F7B104",
  grid: {
    borderColor: "#f1f1f1",
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    position: "bottom",
    labels: {
      offsetY: 0,
    },
    axisBorder: {
      show: !0,
    },
    axisTicks: {
      show: !0,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: "F7B104", // optional, if not defined - uses the shades of same color in series
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0,
        stops: [0, 50, 100],
        colorStops: [],
      },
    },
    tooltip: {
      enabled: !0,
      offsetY: -35,
    },
  },
  yaxis: {
    axisBorder: {
      show: !0,
    },
    axisTicks: {
      show: !1,
    },
    labels: {
      show: !1,
      formatter: function (e) {
        return e;
      },
    },
  },
};
(chart = new ApexCharts(
  document.querySelector("#column_chart_datalabel"),
  options
)).render();
