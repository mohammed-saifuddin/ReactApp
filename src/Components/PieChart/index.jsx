import React from "react";
import ReactApexChart from "react-apexcharts";
import { Grid, Typography } from "@mui/material";
const PieChart = () =>{
    
     let state = {
          
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            width: 380,
            type: 'donut',
          },
          plotOptions: {
            pie: {
              startAngle: -90,
              endAngle: 270
            }
          },
          dataLabels: {
            enabled: false
          },
          fill: {
            type: 'gradient',
          },
          legend: {
            formatter: function(val, opts) {
              return val + " - " + opts.w.globals.series[opts.seriesIndex]
            }
          },
          
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    

  

    
      return (
        

  <Grid sx={{
    display:'flex',
    gap:'20px',
    backgroundColor:'white',
    flexDirection:'column',
    
    borderRadius:'16px'
  }}>
  <Grid sx={{
    display:'flex',
    flexDirection:'column',
    padding:'30px'
  }}>
  <Typography fontWeight={"bold"}>Customers</Typography>
  <Typography fontSize={"12px"} color={"grey"}>Customers that buys products</Typography>
  </Grid>
  
<ReactApexChart options={state.options} series={state.series} type="donut" width={380}/>
  </Grid>




      );
    };

export default PieChart