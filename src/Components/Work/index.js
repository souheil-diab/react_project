import React, { Component } from 'react'
// import "./style.css";
import { WorkSection, WorkTitle, WorkPart, Icon, ParTitle, PartDesc, Line, Span } from "./style.js";
import axios from 'axios';


class Work extends Component {

  state = {
    works : []
  }

  //Lifecycle method : 3ashen ba3ed ma y7amel kel she kermel ya3mel axiox lal request
     componentDidMount(){
      axios.get('js/data.json').then( res => {
        //console.log(res.data.works)
       this.setState({works: res.data.works})
       //console.log(this.state)
      })
    }
    render(){

      const {works} = this.state
      const worksList = works.map( (workItem) =>{
       
        return(
         
          <WorkPart first={workItem.id} key={workItem.id} >
          <Icon className={workItem.icon_name}></Icon>
          <ParTitle>{workItem.title}</ParTitle>
          <Line/>
          <PartDesc>

         {workItem.body}  
        
         </PartDesc>
      </WorkPart>
      
        )
        
      })
     
  return (
    
    <WorkSection>
            <div className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                {/* <WorkPart first="1">
                    <Icon className="icon fa fa-chain fa-2x"></Icon>
                    <ParTitle>Mobile Ux</ParTitle>
                    <Line/>
                    <PartDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
                    </PartDesc>
                </WorkPart> */}
                
                {/* <WorkPart>
                    <Icon className="icon fa fa-chain fa-2x"></Icon>
                    <ParTitle>Mobile Ux</ParTitle>
                    <Line/>
                    <PartDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
                    </PartDesc>
                </WorkPart>
                
                <WorkPart>
                    <Icon className="icon fa fa-chain fa-2x"></Icon>
                    <ParTitle>Mobile Ux</ParTitle>
                    <Line/>
                    <PartDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
                    </PartDesc>
                </WorkPart> */}
{/* {console.log(workItem.id)} */}
                {worksList}
                
            </div>
        </WorkSection>
        
  )
  }
}

export default Work
