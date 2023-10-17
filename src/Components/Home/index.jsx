import { Card, Grid } from "@mui/material";
import React from "react";
import Header from "../Header";
import Cards from "../Cards";
import Charts from "../Charts";
import PieChart from "../PieChart";
import PieCharts from "../PieChart";
import Products from "../Products";
import { BarChart } from "recharts";
const Home = () => {
    return(
        <Grid sx={{
            display:'flex',
            flexDirection:'column',
            width:"calc(100vw - 250px)",
            height:'100vh',
            gap:'12px',
            padding:'10px',
            paddingLeft:'20px',
            overflow:'auto'
            
        }}>
            <Header/>
            <Grid sx={{
                display:'flex',
                flexDirection:'row',
                gap:"20px"
            }}>
            <Cards/>
            
            
            </Grid>
            <Grid sx={{
                display:'flex',
                flexDirection:'row',
                gap:'20px',
                
            
            }}>
            <Charts/>
            {/* <BarChart/> */}
            <PieChart/>
            </Grid>
            
           
           <Products/>
        </Grid>
    )
}
export default Home