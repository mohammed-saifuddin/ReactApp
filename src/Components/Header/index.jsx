import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
const Header = () =>{
    return(
        <Grid sx={{
            display:'flex',
            padding:'12px',
            width:"100%",
            height:'68px',
           flexDirection:'row',
            backgroundColor:"#f4f0ec",
            
            justifyContent:'space-between',
           
        }}>
        <Grid sx={{
            display:'flex',
            padding:'12px'
        }}>
         
        <Typography fontSize={"25px"}>Hello Sharukh ,</Typography>
        </Grid>
            
            <Grid sx={{
                backgroundColor:"green",
                display:'flex',
                flexDirection:"row",
                width:'250px',
                height:'50px',
                color:'grey',
                padding:'12px',
                backgroundColor:'white',
                borderRadius:'20px'

            }}>
            <SearchIcon color="grey"/>
            <Typography color={"grey"}>Search</Typography>
            </Grid>
            
            
        </Grid>
    )
}
export default Header