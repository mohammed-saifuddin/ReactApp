import { Grid, Typography } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
const Products = () =>{
    let data=[{
        image:'https://tse4.mm.bing.net/th?id=OIP.CLQMTmsCWycE3xyowgK1GQHaE8&pid=Api&P=0&h=180',
        title:'Abstract 3D',
        subTitle:'lorem sun van sur can',
        stock:"32 in stocks",
        price:'$45.99',
        total:'20'
    },
    {
        image:'https://tse1.mm.bing.net/th?id=OIP.WjILowNFGK5QKHi4KQo88wHaFL&pid=Api&rs=1&c=1&qlt=95&w=167&h=116',
        title:'Sarphens illustration',
        subTitle:'lorem sun van sur can',
        stock:"32 in stocks",
        price:'$45.99',
        total:'20'
    },
]
    return(
        <Grid sx={{
            display:'flex',
            flexDirection:'column',
            backgroundColor:'white',
            borderRadius:'16px',
            padding:'20px'
        }}>
<Grid sx={{
            display:'flex',
            flexDirection:'row',
            gap:'750px',
            backgroundColor:'white',
            padding:'20px',
            borderRadius:'16px'
        }}>
            <Grid>
             <Typography fontWeight={"bold"}>Products Sell</Typography>
            </Grid>
            <Grid sx={{
                display:'flex',
                flexDirection:'row',
                gap:'100px'
            }}>
            <Grid sx={{
                display:'flex',
                flexDirection:'row',
                gap:'8px',
                color:'grey',
                fontSize:'12px'
            }}>
            <SearchIcon/>
            <Typography fontSize={"12px"}>Search</Typography>
            </Grid>
            <Grid sx={{
                display:'flex',
                flexDirection:'row',
                gap:'12px',
                color:'grey',
                fontSize:"12px"
            }}>
                <Typography fontSize={"12px"}>Last 30 days</Typography>
                <KeyboardArrowDownOutlinedIcon/>
                
            </Grid>
            

            </Grid>
            
        </Grid>
        <Grid sx={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            padding:'16px',
            paddingRight:'60px'
        }}>
        <Grid>
        <Typography color={"grey"}>Products Name</Typography>
        </Grid>
        <Grid sx={{
            display:'flex',
            flexDirection:'row',
            color:'grey',
            justifyContent:'space-around',
            
            gap:'60px',
            
        }}>
            <Typography>
                stocks
            </Typography>
            <Typography>
                price
            </Typography>
            <Typography>
                total sales
            </Typography>
        </Grid>
                
            </Grid>
        <Grid sx={{
            display:'flex',
            flexDirection:'column',
            padding:'12px',
            justifyContent:'space-between'
        }}>
        {
            data.map((item)=>{
                return(
                    <Grid sx={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            padding:'12px'
            
        }}>
        
        <Grid sx={{
            display:'flex',
            flexDirection:'row',
            
        }}>
        <Grid sx={{
            display:'flex',
            borderRadius:'20px',
            
            
        }}>
        <img src={item.image} width={"90px"} height={"60px"} sx={{
            borderRadius:'16px'
        }} />
        </Grid>
        
        <Grid sx={{
            display:'flex',
            flexDirection:'column',
            padding:'8px'
        }}>
        <Typography fontWeight={"bold"} fontSize={"16px"}>{item.title}</Typography>
        <Typography fontSize={"12px"} color={"grey"}>{item.subTitle}</Typography>
        </Grid>
        
        </Grid>
        <Grid sx={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-around',
            gap:'20px',
            padding:'16px'
        }}>
            <Typography>32 in stocks</Typography>
            <Typography>32 in stocks</Typography>
            <Typography>32 in stocks</Typography>
        </Grid>
        </Grid>
                )
            })
        }
        
            
        
            
        </Grid>
        </Grid>
        
    )
}
export default Products