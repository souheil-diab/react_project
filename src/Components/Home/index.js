import React from 'react'
//import "./style.css";
import { HomeBtn, HomeDesc, HomeInfo, HomeInformation, HomeSection, HomeTitle, Span } from './style.js';

const Home = () => {
  return (
    <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Souheil Diab</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDesc>
                        Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
  )
}

export default Home
