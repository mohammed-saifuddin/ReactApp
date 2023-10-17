import { Card, Grid } from "@mui/material";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

import React from "react";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
    <Grid sx={{
          display:'flex',
          flexDirection:'row',
          backgroundColor:'#f4f0ec',
          height:'100vh'
    }}>
    
    <Sidebar/>
    
    <Home/>
    
  
    
    
    
    </Grid>
      

    
    
    
      
    </div>
  );
}

export default App;
