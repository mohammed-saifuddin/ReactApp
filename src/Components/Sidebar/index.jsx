import { Avatar, Grid, Typography } from "@mui/material";
import TokenSharpIcon from '@mui/icons-material/TokenSharp';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import MarginSharpIcon from '@mui/icons-material/MarginSharp';
import SwitchAccountSharpIcon from '@mui/icons-material/SwitchAccountSharp';
import FormatIndentIncreaseSharpIcon from '@mui/icons-material/FormatIndentIncreaseSharp';
import AutoModeSharpIcon from '@mui/icons-material/AutoModeSharp';
import HelpCenterSharpIcon from '@mui/icons-material/HelpCenterSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from "react";
const Sidebar = () => {
    return(
        <Grid sx={{
            display:'flex',
            flexDirection:'column',
            width: '250px',
            height: "100vh",
            backgroundColor:'#000039',
            color:'white',
            justifyContent:'space-between',
            textAlign:'center',
            padding:'10px',
            paddingBottom:'24px',
            
            
            
        }}>
            <Grid sx={{
                display:'flex',
                flexDirection:'column',
                // gap:'16px',
                padding:'10px'
            }}>
            <Grid sx={{
                display:'flex',
                flexDirection:'row',
                gap:'12px',
                padding:'10px'
            }}>
            <TokenSharpIcon/>
              <Typography fontSize={"20px"} fontWeight={"bold"}>Dashboard</Typography>
            </Grid>
            <Grid sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
                gap:'12px',
                
                color:"#e5e4e2"
              }}>
              <Grid sx={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                // gap:'20px',
                backgroundColor:'#191970',
                borderRadius:'4px',
                padding:"12px"
                
                
              }}>
              <Grid sx={{
                display:'flex',
                flexDirection:'row',
                gap:'12px',
                fontSize:'12px',
                
                
              }}>
              <GridViewSharpIcon/>
                <Typography fontSize={"12px"} color={"white"}>Dashboard</Typography>
              </Grid>
              <Grid sx={{
                display:'flex',
                fontSize:'12px'
                
              }}>
              {/* <ArrowForwardIosSharpIcon fontSize="8px"/> */}
              </Grid>
                
              </Grid>
              <Grid sx={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                padding:"10px"
                
              }}>
              <Grid sx={{
                display:'flex',
                flexDirection:'row',
                gap:'12px',
                color:"#848482"
              }}>
              <FormatIndentIncreaseSharpIcon color="#848482"/>
                <Typography fontSize={"12px"} color={"#848482"} >Products</Typography>
              </Grid>
              <Grid sx={{
                display:'flex',
                fontSize:'12px',
                color:"#848482"
                
              }}>
              <ArrowForwardIosSharpIcon fontSize="8px" color="#848482"/>
              </Grid>
                
              </Grid>
              <Grid sx={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                padding:"10px"
                
              }}>
              <Grid sx={{
                display:'flex',
                flexDirection:'row',
                gap:'12px',
                color:"#848482"
              }}>
              <SwitchAccountSharpIcon/>
                <Typography fontSize={"12px"} color={"#848482"}>Customers</Typography>
              </Grid>
              <Grid sx={{
                display:'flex',
                fontSize:'12px',
                color:"#848482"
                
              }}>
              <ArrowForwardIosSharpIcon fontSize="8px"/>
              </Grid>
                
              </Grid>
              <Grid sx={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                padding:"10px"
                
              }}>
              <Grid sx={{
                display:'flex',
                flexDirection:'row',
                gap:'12px',
                color:"#848482"
              }}>
              <MarginSharpIcon/>
                <Typography fontSize={"12px"} color={"#848482"}>Income</Typography>
              </Grid>
              <Grid sx={{
                display:'flex',
                fontSize:'12px',
                color:"#848482"
              }}>
              <ArrowForwardIosSharpIcon fontSize="8px"/>
              </Grid>
                
              </Grid>
              <Grid sx={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                padding:"10px"
                
              }}>
              <Grid sx={{
                display:'flex',
                flexDirection:'row',
                gap:'12px',
                color:"#848482"
              }}>
              <AutoModeSharpIcon/>
                <Typography fontSize={"12px"} color={"#848482"}>Promote</Typography>
              </Grid>
              <Grid sx={{
                display:'flex',
                fontSize:'12px',
                color:"#848482"
                
              }}>
              <ArrowForwardIosSharpIcon fontSize="8px"/>
              </Grid>
                
              </Grid>
              <Grid sx={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                padding:"10px"
                
              }}>
              <Grid sx={{
                display:'flex',
                flexDirection:'row',
                gap:'12px',
                color:"#848482"
              }}>
              <HelpCenterSharpIcon/>
                <Typography fontSize={"12px"} color={"#848482"}>Help</Typography>
              </Grid>
              <Grid sx={{
                display:'flex',
                fontSize:'12px',
                color:"#848482"
                
              }}>
              <ArrowForwardIosSharpIcon fontSize="8px" color="#d3d3d3 "/>
              </Grid>
                
              </Grid>
                
              </Grid>
              
            </Grid>
            
            <Grid sx={{
                display:'flex',
                flexDirection:'row',
                gap:'16px',
                backgroundColor:'#191970',
                justifyContent:'space-between',
                padding:'10px',
                borderRadius:'4px'
                
            }}>
            <Grid>
            <Avatar src="https://tse4.mm.bing.net/th?id=OIP.0I18J1H-otbE1BxJVl6otwAAAA&pid=Api&P=0&h=180"/>
            </Grid>
            <Grid sx={{
                display:'flex',
                flexDirection:'column',
                gap:'4px'
            }}>
            <Typography fontSize={"12px"} fontWeight={"bold"}>Evanos</Typography>
            <Typography fontSize={"10px"} color={"#848482"}>Project Manager</Typography>
            </Grid>
            <Grid sx={{
                display:'flex',
                gap:'16px'
            }}>
                <KeyboardArrowDownIcon fontSize="14px"/>
            </Grid>

            </Grid>
        </Grid>
    )
}
export default Sidebar