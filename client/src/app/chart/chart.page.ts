import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: 'chart.page.html',
  styleUrls: ['chart.page.scss']
})
export class ChartPage implements OnInit {

  constructor() { }
  LineChart = [];
  BarChart = [];
  // PieChart = [];

  ngOnInit() {

    //Line Chart
    this.LineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ["Predio 1", "Predio 2", "Predio 3", "Predio 4", "Predio 5"],
        datasets: [{
          label: 'Numero de usuários por zona',
          data: [5, 15, 3, 1, 9],
          fill: true,
          lineTension: 0.2,
          borderColor: "red",
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Line Chart",
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    // Bar chart:
    this.BarChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ["Predio 1", "Predio 2", "Predio 3", "Predio 4", "Predio 5"],
        datasets: [{
          label: 'Numero de usuários por zona',
          data: [5, 15, 3, 1, 9],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Bar Chart",
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    // pie chart:
    // this.PieChart = new Chart('pieChart', {
    //   type: 'pie',
    //   data: {
    //     labels: ["Predio 1", "Predio 2", "Predio 3", "Predio 4", "Predio 5"],
    //     datasets: [{
    //       label: 'Numero de usuários por zona',
    //       data: [5, 15, 3, 1, 9],
    //       backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',
    //         'rgba(54, 162, 235, 0.2)',
    //         'rgba(255, 206, 86, 0.2)',
    //         'rgba(75, 192, 192, 0.2)',
    //         'rgba(153, 102, 255, 0.2)',
    //         'rgba(255, 159, 64, 0.2)'
    //       ],
    //       borderColor: [
    //         'rgba(255,99,132,1)',
    //         'rgba(54, 162, 235, 1)',
    //         'rgba(255, 206, 86, 1)',
    //         'rgba(75, 192, 192, 1)',
    //         'rgba(153, 102, 255, 1)',
    //         'rgba(255, 159, 64, 1)'
    //       ],
    //       borderWidth: 1
    //     }]
    //   },
    //   options: {
    //     title: {
    //       text: "Bar Chart",
    //       display: true
    //     },
    //     scales: {
    //       yAxes: [{
    //         ticks: {
    //           beginAtZero: true
    //         }
    //       }]
    //     }
    //   }
    // });

  }
}
