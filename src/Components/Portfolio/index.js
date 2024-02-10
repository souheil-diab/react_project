import React, {useEffect, useState} from 'react'
//import "./style.css"
import { PortfolioItem, PortfolioList, PortfolioTitle, PotrtfolioSection, Span, Overlay, OverlaySpan, ImageWrapper, Image } from "./style.js"
import axios from 'axios';

const Portfolio = () => {

  // state={
  //   images: []
  // }

  // HOOKS:: be2dar 2esta5dem kel she be class based component be 2aleb :: function component
  //besta5dem Hooks(state,lifecycle) be functuon component w mesh be class based component
  //State yalle fo2 saret useState yale ta7et 3an tari2 Hooks
  //be3akes ma 3melet be Work.js
  //w besta3mel useEffect arrow function badal :: componentDidMount()
  //w besta3mel axios.get be useEffect
const [images, setImages] = useState([]);
//w b7ot bel 2a5er array fadye :} , [] ) 3ashen teshteghel marra we7de w ta3mel reset
useEffect ( () => {
  axios.get('js/data.json').then( res => {
    setImages( res.data.portfolio)
  })
} , [] )

const PortfolioImages = images.map((imageItem) => {
return (
  <ImageWrapper key={imageItem.id}>
      <Image src={imageItem.image} alt=""/>
      <Overlay>
          <OverlaySpan> Show Image</OverlaySpan>
     </Overlay>
  </ImageWrapper>
)
})

  return (
    
       <PotrtfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
            {/* <PortfolioItem active>All</PortfolioItem> */}
                <PortfolioItem $active={true}>All</PortfolioItem>
                <PortfolioItem> HTML</PortfolioItem>
                <PortfolioItem> Photoshop</PortfolioItem>
                <PortfolioItem> Wordpress</PortfolioItem>
                <PortfolioItem> Mobile</PortfolioItem>
            </PortfolioList>
            
            <div className="box">
                
                {/* <ImageWrapper>
                    <Image src="images/portfolio-img1.jpg" alt=""/>
                    <Overlay>
                        <OverlaySpan> Show Image</OverlaySpan>
                    </Overlay>
                </ImageWrapper> */}
                
                {PortfolioImages}
                
            </div>
            
    </PotrtfolioSection>
  )
}

export default Portfolio;
