import React from 'react'
// import "./style.css";
import { Icon, Social,SocialDesc,SocialMedias,Span,SpanInfo,} from "./style.js";
import axios from 'axios';


class SocialMedia extends React.Component{

    state = {
      social: []
    }

    componentDidMount() {
      axios.get('js/data.json')
      .then( res  => {
        this.setState({ social: res.data.social})
      })
    }

render(){

  const {social} = this.state;

  const socialList = social.map( (socialItem) => {
    return(
      <Social item={socialItem.id} key={socialItem.id}>
        <Icon className={socialItem.icon}></Icon>
        <SocialDesc>
            <Span>{socialItem.title}</Span>
            <SpanInfo>{socialItem.body}</SpanInfo>
        </SocialDesc>
    </Social>
    )
  })
  return (
    
    <SocialMedias>
            
    {socialList}

    {/* <Social>
        <Icon class={socialItem.icon}></Icon>
        <SocialDesc>
            <Span>{socialItem.title}</Span>
            <SpanInfo>{socialItem.body}</SpanInfo>
        </SocialDesc>
    </Social> */}
    </SocialMedias>
/* 
    <div class="social face">
                <i class="icon fa fa-facebook fa-lg"></i>
                <p>
                    <span class="info1">Follow Me on</span>
                    <span class="info2">Social Facebook</span>
                </p>
            </div>
    
    <div class="social twitter">
        <i class="icon fa fa-twitter fa-lg"></i>
        <p>
            <span class="info1">Tweet Me on</span>
            <span class="info2">Social twitter</span>
        </p>
    </div>
    
    <div class="social pin">
        <i class="icon fa fa-pinterest fa-lg"></i>
        <p>
            <span class="info1">Pin Me on</span>
            <span class="info2">Social Pinterest</span>
        </p>
    </div> */


  )
}
}

export default SocialMedia
