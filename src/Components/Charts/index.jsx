import { Grid, Typography, colors } from "@mui/material"
import ReactApexChart from "react-apexcharts";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
const Charts = () => {
    let state = {
          
        series: [{
          data: [40, 30, 60, 47, 35, 26, 13, 60,51,43,35,37],
          
        }],
       
        options: {
          chart: {
            height: 200,
            type: 'bar',
            backgroundColor:'blue',
            events: {
              click: function(chart, w, e) {
                // console.log(chart, w, e)
              }
            }
          },
          colors: ["red","green","pink","blue","brown","yellow","black","orange"],
          plotOptions: {
            bar: {
              columnWidth: '65%',
              distributed: true,
              
            }
          },
          dataLabels: {
            enabled: false,
            
          },
          legend: {
            show: false
          },
          xaxis: {
            categories: [
              ['Jan'],
              ['Feb'],
              ['Mar'],
              
              ['Apr'],
              ['May'],
              ['Jun'],
              ['Jul'], 
              ['Aug'],
              ['Sep'],
              ['Oct'],
              ['Nov'],
              ['Dec']
            ],
            labels: {
              style: {
                colors: colors,
                fontSize: '12px'
              }
            },
            
          }
        },
      
      
      };
    return(
        <Grid sx={{
            width:'800px',
            height:'450px',
            borderRadius:'16px',
            backgroundColor:'white',
            
        }}>
        <Grid sx={{
            display:'flex',
            flexDirection:'row',
            padding:'12px',
            justifyContent:'space-between'

        }}>
        <Grid>
        <Typography  fontWeight={"bold"}>Overview</Typography>
        <Typography fontSize={"12px"} color={"grey"}>Monthly Earnings</Typography>
        </Grid>
        <Grid sx={{
            display:'flex',
            flexDirection:'row'
        }}>
          <Typography fontSize={"12px"} color={"grey"}>Quarterly</Typography>
          <KeyboardArrowDownOutlinedIcon color="grey"/>
        </Grid>
        
        </Grid>
        
<ReactApexChart options={state.options}  colors={state.colors} series={state.series} type="bar" height={350} />

        </Grid>
    )
}
export default Charts