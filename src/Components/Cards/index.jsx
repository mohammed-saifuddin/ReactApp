import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WysiwygOutlinedIcon from '@mui/icons-material/WysiwygOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
const Cards = () => {
    let data=[
        {
            title:'Earnings',
            icon:<AttachMoneyIcon fontSize="500px" color="black"/>,
            price:'$198K',
            colors:'#e0ffff',
            background:'green',
            sideIcon:<ArrowUpwardOutlinedIcon color={"green"}/>,
            subTitle1:"37%",
            subTitle2:"this month"

        },
        {
            title:'Orders',
            icon:<WysiwygOutlinedIcon fontSize="500px"/>,
            price:'$2.4K',
            colors:'#d3d3d3',
            background:'red',
            sideIcon:<ArrowDownwardOutlinedIcon color="red"/>,
            subTitle1:"2% ",
            subTitle2:"this month"

        },
        {
            title:'Balance',
            icon:<ShoppingBagOutlinedIcon fontSize="500px"/>,
            price:'$2.4K',
            colors:'#90ee90',
            background:'red',
            sideIcon:<ArrowDownwardOutlinedIcon color="red"/>,
            subTitle1:"2% ",
            subTitle2:"this month"

        },
        {
            title:'Total Sales',
            icon:<CardGiftcardOutlinedIcon fontSize="500px"/>,
            price:'$89K',
            colors:'#ffc0cb',
            background:'green',
            sideIcon:<ArrowUpwardOutlinedIcon color="green"/>,
            subTitle1:"11% ",
            subTitle2:"this month"

        }
    ]
    return(
        <Grid sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
            justifyContent: 'space-around',
            
            
        }}>
            {
                data.map((item)=>{
                    return(
                        <Grid sx={{
            width:'285px',
            height:'150px',
            backgroundColor:'white',
            padding:"18px",
            borderRadius:'16px',
            color:'grey',
            gap:'20px',
            
            display:'flex',
            flexDirection:'row'
        }}>
        <Grid sx={{
            display:'flex',
            gap:'20px'
        }}>
        <Grid sx={{
            background:item.colors,
            width:'100px',
            height:'100px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:'150px',
            fontSize:'50px'
        }}>
        
        
          {item.icon}
        </Grid>
        <Grid sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            gap:'8px'
            
        }}>
        <Typography>{item.title}</Typography>
        <Typography fontSize={"24px"} fontWeight={"bold"} color={"black"}>{item.price}</Typography>
        <Grid sx={{
            display:'flex',
            flexDirection:'row'
        }}>
        <Grid sx={{
            color:item.background
        }}>
        {item.sideIcon }
        </Grid>
       
        <Typography color={item.background}>{item.subTitle1}</Typography>
        <Typography>{item.subTitle2}</Typography>
        </Grid>
        

        </Grid>

        </Grid>
        
        
           
        </Grid>
                    )
                    
                })
            }
        </Grid>
       

        
        
        
    )
}
export default Cards