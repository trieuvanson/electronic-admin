// catogory
var category_options = {
  series: [44, 55, 41, 17],
  labels: ["Cloths", "Devices", "Bags", "Wathes"],
  chart: {
    type: "donut",
  },
  color: ["#6ab04c", "#2980b9", "#f39c12", "#d35400"],
};

var category_chart = new ApexCharts(
  document.querySelector("#category-chat"),
  category_options
);
category_chart.render();

// customers
var customer_options = {
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};
var customers_chart = new ApexCharts(
  document.querySelector("#customers-chart"),
  customer_options
);
customers_chart.render();
