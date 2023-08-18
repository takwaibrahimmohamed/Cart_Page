import { Box, Button, CardContent, CardMedia, Checkbox, Container, Divider, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, Link, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import AddIcon from '@mui/icons-material/Add';
const ProdctCart = () => {
  return (
   <Container sx={{marginTop:"30px"}} >
     <Grid container>
    <Grid xs={12} sm={12} md={7} lg={7}>
        <Typography 
        sx={{
            color: "rgba(36, 15, 23, 0.50)",
            fontFamily: "Nexa Bold",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "35px", /* 233.333% */
            letterSpacing: "0.45px",
            textTransform: "uppercase",
            marginLeft:"25px",
            marginBottom:"20px"
        }}
        >product</Typography>
   <Box style={{display:'flex',alignItems:"flex-start"}}>
    <Typography style={{marginRight:"20px",
    marginTop:"90px",
    color: "rgba(36, 15, 23, 0.50)",
    textAlign: "center",
    fontFamily: "Nexa Bold",
    fontSize:" 15px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "45px", /* 300% */
    letterSpacing: "0.45px",
    textTransform: "uppercase",
    
    }}>1</Typography>
   <Box style={{
        display:"flex",
        justifyContent: "space-between",
        marginBottom:"20px",
      flexWrap: "wrap"
      }}>
       
   <Box 
   style={{
    display:"flex",
    
    marginBottom:"20px"
    
  }}
   >
   
   <CardMedia
          style={{
            display: "flex",
            width: "107px",
            height: "147px",
            padding:" 32px 24.152px 31px 26px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "14.591px",
            border:" 1.459px solid #240F17",
            background:"#E5CBC4",
          
          }}
            component="img"
            alt="green iguana"
          
            image="https://s3-alpha-sig.figma.com/img/4cba/0f1a/2c77273d20cc18fc96db66b4ef6c6aed?Expires=1693180800&Signature=MY5IywXMFLCl8K9eGS9mmpQuJTyXqUQIGh2wvlSzb3e1yhAis~767KOj9W7pxT6C9o0QDfmoEQswjAN~satUGGEcEys~UGK0G4l7YszQc3CHdyaqhAW3Sz7gaVBKIL4daosCnfjdi4KfpPLixhLF80JcyAdt27isJsLnxO34Sj2m6Tcb9SUhRerWJ3cShKJclsucTVpaD-42d3bQroK0SAqGOaWO~7m5Ef0-Yzol~-7WTwSTyhHbz-oPTiMeIxZ-ugxZ8w2FTLbG5xWiOGVACVJ5nGMMaK-lUSyfybNuGRr-tiNhWwzBgqnT4YWdpDxKGhWgFbC8i9ax~lo8F32yRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <CardContent style={
            {
               
               
              paddingTop:"0",
              display:"flex",
              alignItems: "initial",
              flexDirection:"column",
              gap:"16px"
              
            }}
            >
                <Typography 
                style={{
                  color:  "#294E2C",
                    fontFamily: "Prettywise Variable",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "25px", /* 138.889% */
                    letterSpacing: "0.54px",
                    textTransform: "uppercase",
                }}
                >Brazil - Coração de Melão</Typography>
                <Box>
                    <Typography 
                    sx={{
                        borderRadius: "110px",
                        background: "#FFA16C",
                        color: "#240F17",
                            textAlign: "right",
                            fontFamily: "Nexa Bold",
                            fontSize: "15px",
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight: "25px", /* 166.667% */
                            letterSpacing: "-0.45px",
                            display: "flex",
                            padding: "4px 15px",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px",
                            width:"fit-content"
                    }}
                    >
                        1kg
                    </Typography>
                </Box>
                <Box style={{
                        display:"flex",
                        
                        alignItems:"center"
                    }}>
                  <Typography
                  sx={{
                    display: "flex",
                    padding:{xs:"7px",sm:" 12.514px",md:" 12.514px"},
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8.343px",
                    borderRadius: "91.771px",
                    border: "1.251px solid rgba(36, 15, 23, 0.20)",
                    color:"#240F17",
                    cursor:"pointer"

                  }}
                  >
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path d="M5.52002 10.5259H15.5314" stroke="#240F17" stroke-width="1.25143" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                  </Typography>
                  <Typography 
                  sx={{
                    color: "#240F17",
                    textAlign: "center",
                    fontFamily: "Nexa Bold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "50px", /* 333.333% */
                    letterSpacing: "0.45px",
                    margin:{xs:"0 7px",sm:"0 15px",md:"0 15px"}
                  }}    
                  >1</Typography>
                  <Typography
                  sx={{
                    display: "flex",
                    padding:{xs:"7px",sm:" 12.514px",md:" 12.514px"},
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8.343px",
                    borderRadius: "91.771px",
                    border: "1.251px solid rgba(36, 15, 23, 0.20)",
                    color:"#240F17",
cursor:"pointer"

                  }}
                  >
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
  <path d="M5.57129 10.5259H15.5827" stroke="#240F17" stroke-width="1.25143" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.5767 15.5314V5.52002" stroke="#240F17" stroke-width="1.25143" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  </Typography>
                
                </Box>
            </CardContent>
   </Box>
   <Box sx={{
    display:"flex",
    alignItems: "initial",
    flexDirection:{xs:"row",sm:"column",md:"column"},
    gap:"66px",
    
    
   }}>
        <Box sx={{marginLeft:{xs:"0",sm:"60px",md:"60px"},cursor:"pointer"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M3 6.5H5H21" stroke="#240F17" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 6.5V4.5C8 3.96957 8.21071 3.46086 8.58579 3.08579C8.96086 2.71071 9.46957 2.5 10 2.5H14C14.5304 2.5 15.0391 2.71071 15.4142 3.08579C15.7893 3.46086 16 3.96957 16 4.5V6.5M19 6.5V20.5C19 21.0304 18.7893 21.5391 18.4142 21.9142C18.0391 22.2893 17.5304 22.5 17 22.5H7C6.46957 22.5 5.96086 22.2893 5.58579 21.9142C5.21071 21.5391 5 21.0304 5 20.5V6.5H19Z" stroke="#240F17" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
        </Box>
        <Typography 
        sx={{
                color: "#294E2C",
                textAlign: "right",
                fontFamily: "Prettywise Variable",
                fontSize: "25px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "35px", /* 140% */
                letterSpacing: "0.75px",
                textTransform: "uppercase",
        }}
        >
           $15.00
        </Typography>
   </Box>
      </Box> 
   </Box>
   <Box style={{display:'flex',alignItems:"flex-start"}}>
    <Typography style={{marginRight:"20px",
    marginTop:"90px",
    color: "rgba(36, 15, 23, 0.50)",
    textAlign: "center",
    fontFamily: "Nexa Bold",
    fontSize:" 15px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "45px", /* 300% */
    letterSpacing: "0.45px",
    textTransform: "uppercase",
    
    }}>2</Typography>
   <Box style={{
        display:"flex",
        justifyContent: "space-between",
        marginBottom:"20px",
        flexWrap:"wrap"
      }}>
       
   <Box 
   style={{
    display:"flex",
    
    marginBottom:"20px"
    
  }}
   >
   
   <CardMedia
          style={{
            display: "flex",
            width: "107px",
            height: "147px",
            padding:" 32px 24.152px 31px 26px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "14.591px",
            border:" 1.459px solid #240F17",
            background:"#D7E5C4",
          
          }}
            component="img"
            alt="green iguana"
          
            image="https://s3-alpha-sig.figma.com/img/4cba/0f1a/2c77273d20cc18fc96db66b4ef6c6aed?Expires=1693180800&Signature=MY5IywXMFLCl8K9eGS9mmpQuJTyXqUQIGh2wvlSzb3e1yhAis~767KOj9W7pxT6C9o0QDfmoEQswjAN~satUGGEcEys~UGK0G4l7YszQc3CHdyaqhAW3Sz7gaVBKIL4daosCnfjdi4KfpPLixhLF80JcyAdt27isJsLnxO34Sj2m6Tcb9SUhRerWJ3cShKJclsucTVpaD-42d3bQroK0SAqGOaWO~7m5Ef0-Yzol~-7WTwSTyhHbz-oPTiMeIxZ-ugxZ8w2FTLbG5xWiOGVACVJ5nGMMaK-lUSyfybNuGRr-tiNhWwzBgqnT4YWdpDxKGhWgFbC8i9ax~lo8F32yRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <CardContent style={
            {
               
               
              paddingTop:"0",
              display:"flex",
              alignItems: "initial",
              flexDirection:"column",
              gap:"16px"
              
            }}
            >
                <Typography 
                style={{
                  color:  "#294E2C",
                    fontFamily: "Prettywise Variable",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "25px", /* 138.889% */
                    letterSpacing: "0.54px",
                    textTransform: "uppercase",
                }}
                >Cracktopia Pourover Kit</Typography>
                <Box>
                    <Typography 
                    sx={{
                        borderRadius: "110px",
                        background: "#FFA16C",
                        color: "#240F17",
                            textAlign: "right",
                            fontFamily: "Nexa Bold",
                            fontSize: "15px",
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight: "25px", /* 166.667% */
                            letterSpacing: "-0.45px",
                            display: "flex",
                            padding: "4px 15px",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px",
                            width:"fit-content"
                    }}
                    >
                        1kg
                    </Typography>
                </Box>
                <Box style={{
                        display:"flex",
                        
                        alignItems:"center"
                    }}>
                  <Typography
                  sx={{
                    display: "flex",
                    padding:{xs:"7px",sm:" 12.514px",md:" 12.514px"},
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8.343px",
                    borderRadius: "91.771px",
                    border: "1.251px solid rgba(36, 15, 23, 0.20)",
                    color:"#240F17",
cursor:"pointer"

                  }}
                  >
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path d="M5.52002 10.5259H15.5314" stroke="#240F17" stroke-width="1.25143" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                  </Typography>
                  <Typography 
                  sx={{
                    color: "#240F17",
                    textAlign: "center",
                    fontFamily: "Nexa Bold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "50px", /* 333.333% */
                    letterSpacing: "0.45px",
                    margin:{xs:"0 7px",sm:"0 15px",md:"0 15px"}
                  }}    
                  >1</Typography>
                  <Typography
                  sx={{
                    display: "flex",
                    padding:{xs:"7px",sm:" 12.514px",md:" 12.514px"},
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8.343px",
                    borderRadius: "91.771px",
                    border: "1.251px solid rgba(36, 15, 23, 0.20)",
                    color:"#240F17",
cursor:"pointer"

                  }}
                  >
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
  <path d="M5.57129 10.5259H15.5827" stroke="#240F17" stroke-width="1.25143" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.5767 15.5314V5.52002" stroke="#240F17" stroke-width="1.25143" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  </Typography>
                
                </Box>
            </CardContent>
   </Box>
   <Box sx={{
    display:"flex",
    alignItems: "initial",
    flexDirection:{xs:"row",sm:"column",md:"column"},
    gap:"66px",
    
    
   }}>
        <Box sx={{marginLeft:{xs:"0",sm:"60px",md:"60px"},cursor:"pointer"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M3 6.5H5H21" stroke="#240F17" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 6.5V4.5C8 3.96957 8.21071 3.46086 8.58579 3.08579C8.96086 2.71071 9.46957 2.5 10 2.5H14C14.5304 2.5 15.0391 2.71071 15.4142 3.08579C15.7893 3.46086 16 3.96957 16 4.5V6.5M19 6.5V20.5C19 21.0304 18.7893 21.5391 18.4142 21.9142C18.0391 22.2893 17.5304 22.5 17 22.5H7C6.46957 22.5 5.96086 22.2893 5.58579 21.9142C5.21071 21.5391 5 21.0304 5 20.5V6.5H19Z" stroke="#240F17" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
        </Box>
        <Typography 
        sx={{
                color: "#294E2C",
                textAlign: "right",
                fontFamily: "Prettywise Variable",
                fontSize: "25px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "35px", /* 140% */
                letterSpacing: "0.75px",
                textTransform: "uppercase",
        }}
        >
           $12.00
        </Typography>
   </Box>
      </Box> 
   </Box>
   <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"30px"}}>
   <TextField 
      type="text"  defaultValue="Promo code " 
     sx={{
        "& fieldset": { border: 'none' },
        width:525,
        height:55,
        
       
        
      }}
      InputProps={{
        style: {
            borderRadius: "14px",
            border:" 1.5px solid rgba(36, 15, 23, 0.30)",
          fontFamily: "Nexa Bold",
          fontSize: "15px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "25px",
          color: "rgba(36, 15, 23, 0.40)",
          letterSpacing: "0.45px"
        }
    }}
     
     />
<Button style={{

            display: "flex",
            padding: "15px 61px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",          
marginLeft:"15px",

          borderRadius: "110px",
          background:"#FFA16C",
          boxShadow: "2px 5px 0px 0px #000",
         
          color:"#240F17",
          textAlign: "right",
          fontFamily: "Nexa Bold",
          fontSize: "15px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "25px", /* 166.667% */
          letterSpacing: "-0.45px",
          paddingTop:"10px",
          paddingBottom:"10px",
         
        }}>Apply</Button>
   </Box>
    </Grid>
    <Grid xs={12} sm={12} md={4} lg={4} sx={{
//  paddingLeft:{md:"50px"}
 marginLeft:{md:"50px"},

 
  
  }}>
    <Box
    sx={{
      padding:{md:"20px 20px 20px 25px"},paddingTop:{xs:"20px"},paddingLeft:{xs:"7px"}
    }}
    style={{
      background: "rgba(22, 59, 27, 0.05)",
      borderRadius: "30px",
     
      width:"100%"
    }}>
      <Typography 
      style={{
        color: "#294E2C",
        fontFamily: "Prettywise Variable",
        fontSize:" 20px",
        fontStyle: "normal",
        fontWeight: "800",
        lineHeight: "45px", /* 225% */
        letterSpacing: "0.6px",
      }}  
      >
     Delivery
      </Typography>
      <Box style={{
        display: "flex",
        
       
        
        alignItems: "center",
        flexShrink: "0",
        justifyContent:"flex-start",
        borderRadius: "30px",
        padding:"15px 10px",
        background: "rgba(36, 15, 23, 0.05)",
        height:"50px"
        
        
      }}>
   <Typography sx={{
    display: "flex",
    width: "172px",
    height: "40px",
    padding: "9px 0px 8px 0px",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: "0",
    borderRadius: "30px",
    border: "1px solid var(--brown-1, #240F17)",
    background: "#FFA16C",
    color: "#294E2C",
    fontFamily: "Nexa Bold",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "25px", /* 166.667% */
    letterSpacing: "0.45px",
   }}>Free</Typography>
   <Typography 
   sx={{
    width: "63px",
    height: "23px",
    flexShrink: "0",
    
    color: "rgba(41, 78, 44, 0.50)",
    fontFamily: "Nexa Bold",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "25px", /* 166.667% */
    letterSpacing: "0.45px",
    marginLeft: "6rem",
   }}
   >Express</Typography>
      </Box>
     
      
              <Box 
             
             
              style={{
                display:"flex",
                justifyContent: "space-between",
                alignItems:"center",
                marginTop:"20px",
                
              }}
              sx={{
                marginRight:{xs:"10px",md:"0px"},marginLeft:{xs:"10px",md:"0px"}
              }}
              >
                  <Typography
                  style={{
                    color: "#294E2C",
                    fontFamily:"Nexa XBold",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "800",
                    lineHeight: "45px", /* 166.667% */
                    letterSpacing: "0.45px",
                   
                  }}
                  
                  >Sub Total</Typography>
                  <Typography  
                  style={{
                    color: "rgba(41, 78, 44, 0.50)",
                    textAlign: "right",
                    fontFamily:"Nexa Bold",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "800",
                    lineHeight: '45px', /* 194.444% */
                    letterSpacing: "0.54px",
                   
                  }}  
                  >$27.00</Typography>
              </Box>
              <Divider sx={{
                strokeWidth: "1.5px",
                stroke: "rgba(36, 15, 23, 0.08)",
                margin:"15px 0"
              }}/>
              <Box style={{
                display:"flex",
                justifyContent: "space-between",
                alignItems:"center"
              }}
              sx={{
                marginRight:{xs:"10px",md:"0px"},marginLeft:{xs:"10px",md:"0px"}
              }}
              >
                  <Typography
                  style={{
                    color: "#294E2C",
                    fontFamily:" Nexa Bold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "45px", /* 166.667% */
                    letterSpacing: "0.45px",
                    
                  }}
                  >Discount</Typography>
                  <Typography  
                  style={{
                    color: "rgba(41, 78, 44, 0.50)",
                    textAlign: "right",
                    fontFamily:" Nexa Bold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: '45px', /* 194.444% */
                    letterSpacing: "0.45px",
                   
                  }}  
                  >(20%) - $5.00</Typography>
              </Box>
             
              <Box style={{
                display:"flex",
                justifyContent: "space-between",
                alignItems:"center"
              }}
              sx={{
                marginRight:{xs:"10px",md:"0px"},marginLeft:{xs:"10px",md:"0px"}
              }}
              >
                  <Typography
                  style={{
                    color: "#294E2C",
                    fontFamily:" Nexa Bold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "45px", /* 166.667% */
                    letterSpacing: "0.45px",
                    
                  }}
                  >Delivery</Typography>
                  <Typography  
                  style={{
                    color: "rgba(41, 78, 44, 0.50)",
                    textAlign: "right",
                    fontFamily:" Nexa Bold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: '45px', /* 194.444% */
                    letterSpacing: "0.45px",
                   
                  }}  
                  >$0.00</Typography>
              </Box>
              <Box style={{
                display:"flex",
                justifyContent: "space-between",
                alignItems:"center"
              }}
              sx={{
                marginRight:{xs:"10px",md:"0px"},marginLeft:{xs:"10px",md:"0px"}
              }}
              >
                  <Typography
                  style={{
                    color: "#294E2C",
                    fontFamily:" Nexa Bold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "45px", /* 166.667% */
                    letterSpacing: "0.45px",
                    
                  }}
                  >Tax</Typography>
                  <Typography  
                  style={{
                    color: "rgba(41, 78, 44, 0.50)",
                    textAlign: "right",
                    fontFamily:" Nexa Bold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: '45px', /* 194.444% */
                    letterSpacing: "0.45px",
                   
                  }}  
                  >+ $12.00</Typography>
              </Box>
              <Divider sx={{
                strokeWidth: "1.5px",
                stroke: "rgba(36, 15, 23, 0.08)",
                margin:"15px 0"
              }}/>
              <Box style={{
                display:"flex",
                justifyContent: "space-between",
                alignItems:"center"
              }}
              sx={{
                marginRight:{xs:"10px",md:"0px"},marginLeft:{xs:"10px",md:"0px"}
              }}
              >
                  <Typography
                  style={{
                    color: "rgba(41, 78, 44, 0.50)",
                    fontFamily:"Nexa Bold",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "45px", /* 166.667% */
                    letterSpacing: "0.54px",
                   
                  }}
                  >Total</Typography>
                  <Typography  
                  style={{
                    color: "rgba(41, 78, 44, 0.50)",
                    textAlign: "right",
                    fontFamily:"Nexa XBold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: '45px', /* 194.444% */
                    letterSpacing: "0.45px",
                   
                  }}  
                  >$34.00</Typography>

              </Box>
              <Box>
              <Button style={{
          borderRadius: "110px",
          background:"#FFA16C",
          boxShadow: "2px 5px 0px 0px #000",
          width:"96%",
          color:"#240F17",
          textAlign: "right",
          fontFamily: "Nexa Bold",
          fontSize: "15px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "25px", /* 166.667% */
          letterSpacing: "-0.45px",
          paddingTop:"10px",
          paddingBottom:"10px",
          marginTop:"20px"
        }}>Proceed to checkout</Button>
        <Link underline="none" sx={{
          color:"#240F17",
          textAlign: "center",
          display:"block",
          fontFamily: "Nexa Bold",
          fontSize: "15px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "25px", /* 166.667% */
          letterSpacing: "-0.45px",
          marginTop:"20px",
          marginBottom:"20px",
          paddingBottom:{xs:"20px",md:"0px"}
         
        }}>Continue shopping</Link>
              </Box>
              
    </Box>
    
    </Grid>
    
  </Grid>
   </Container>
  )
}

export default ProdctCart
