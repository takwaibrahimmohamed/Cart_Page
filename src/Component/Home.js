import React from 'react'
import Header from './Header';
import styled from '@emotion/styled';
import FooterCom from './FooterCom';
import Cart_Text from './CartText';
import ProdctCart from './ProductCart';
import SimilarProduct from './SimilarProduct';
import EngoySection from './EngoySection';


const Home = () => {
    const Home=styled.div({
      backgroundColor: "#FCF3E6",
      boxShadow: "110px 134px 210px 0px rgba(0, 0, 0, 0.15)",
    //   // maxWidth: "1440px",
    //   // maxHeight: "2239px",
    overflow:"hidden"
   
    })
  return (
    // <SwipeableTemporaryDrawer/>
    <Home>
       <Header/>
       <Cart_Text/>
       <ProdctCart/>
       <SimilarProduct/>
       <EngoySection/>
        <FooterCom/>
        
    </Home>
  )
}

export default Home
