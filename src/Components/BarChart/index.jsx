import { Grid } from "@mui/material";
import React from "react";
const BarChart = () =>{
    var options = {
        series: [{
        data: [21, 22, 10, 28, 16, 21, 13, 30]
      }],
        chart: {
        height: 350,
        type: 'bar',
        events: {
          click: function(chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: colors,
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: [
          ['John', 'Doe'],
          ['Joe', 'Smith'],
          ['Jake', 'Williams'],
          'Amber',
          ['Peter', 'Brown'],
          ['Mary', 'Evans'],
          ['David', 'Wilson'],
          ['Lily', 'Roberts'], 
        ],
        labels: {
          style: {
            colors: colors,
            fontSize: '12px'
          }
        }
      }
      };

      
    return(
        <Grid>
            <ApexChart options={state.options}  colors={state.colors} series={state.series} type="bar" height={350} />
        </Grid>
    )
}
export default BarChart