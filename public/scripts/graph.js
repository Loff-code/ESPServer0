initChart();

updChart();
setInterval(updChart, 1000);
// slcDataToTable();
// setInterval(slcDataToTable, 1000);

function initChart() {
  const ctx = document.getElementById("myChart").getContext("2d");
  window.chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Sensor Values",
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: [],
        },
      ],
    },
  });
}

function updChart() {
  fetch("/data")
    .then((response) => response.json())
    .then((data) => {
      const ids = data.map((row) => row.id);
      const sensorValues = data.map((row) => parseFloat(row.sensor_value));

      // Update the chart with new data
      chart.data.labels = ids;
      chart.data.datasets[0].data = sensorValues;
      chart.update();
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function fullDataToTable() {
  fetch("/data")
    .then((response) => response.json())
    .then((data) => {
      const ids = data.map((row) => row.id);
      const sensorValues = data.map((row) => parseFloat(row.sensor_value));
      console.log(ids, sensorValues);

      const table = document.querySelector("table");
      for (let i = 0; i < ids.length; i++) {
        const row = document.createElement("tr");
        const idCell = document.createElement("td");
        const sensorValueCell = document.createElement("td");
        idCell.textContent = ids[i];
        sensorValueCell.textContent = sensorValues[i];
        row.appendChild(idCell);
        row.appendChild(sensorValueCell);
        table.appendChild(row);
      }
    });
}

function slcDataToTable() {
  fetch("/data")
    .then((response) => response.json())
    .then((data) => {
      const ids = data.map((row) => row.id);
      const sensorValues = data.map((row) => parseFloat(row.sensor_value));
      console.log(ids, sensorValues);

      const table = document.querySelector("table");
      for (let i = ids.length - 3; i < ids.length; i++) {
        const row = document.createElement("tr");
        const idCell = document.createElement("td");
        const sensorValueCell = document.createElement("td");
        idCell.textContent = ids[i];
        sensorValueCell.textContent = sensorValues[i];
        row.appendChild(idCell);
        row.appendChild(sensorValueCell);
        table.appendChild(row);
      }
    });
}
