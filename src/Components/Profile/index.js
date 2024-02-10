import React, { useState, useEffect } from 'react';
// import "./style.css";
import { ProfileSection, ProfileItem, ProfileList, ProfileSkills,ProfileTitleSkills,ProfileTitleSkillsSpan,Skills,SkillsBar,SkillsBarParent,SkillsBarPerc,SkillsBarSpan1,SkillsBarSpan2,SkillsBarSpan3,SkillsBarTitle,SkillsDesc,Span,SpanWeb} from "./style.js"
import axios from 'axios';

const Profile = () => {

  const [skills, setSkills] = useState([]);

  useEffect( () => {
    axios.get('js/data.json').then( res => {
      setSkills(res.data.profile)
    })
  } , [] );

  const ProfileSkill = skills.map( (skill) => {
   
    return (
      
      <SkillsBar key={skill.id}>
      <SkillsBarTitle>{skill.title}</SkillsBarTitle>
      <SkillsBarPerc>{skill.perc}</SkillsBarPerc>
      <SkillsBarParent>
               {/* <SkillsBarSpan3></SkillsBarSpan3> */}
               {/* {React.createElement(`SkillsBarSpan${skill.id}`, null)} */}

        {skill.skil === 'SkillsBarSpan1' && <SkillsBarSpan1 />}
        {skill.skil === 'SkillsBarSpan2' && <SkillsBarSpan2 />}
        {skill.skil === 'SkillsBarSpan3' && <SkillsBarSpan3 />}

          </SkillsBarParent>
       </SkillsBar>
  
      )
      
  })
  
  return (
    <ProfileSkills>
            <div className="container">
                <ProfileSection>
                    <ProfileTitleSkills><ProfileTitleSkillsSpan>My </ProfileTitleSkillsSpan>Profile</ProfileTitleSkills>
                    <ProfileList>
                        <ProfileItem>
                            <Span>Name</Span>
                            Hamza Nabil
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Birthday</Span>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Address</Span>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Phone</Span>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Email</Span>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Website</Span>
                            <SpanWeb>www.google.com</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </ProfileSection>
                
                <Skills>
                    <ProfileTitleSkills>Some <ProfileTitleSkillsSpan>skills</ProfileTitleSkillsSpan></ProfileTitleSkills>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    {/* <SkillsBar> */}
                        {/* <SkillsBarTitle>Bootstrap</SkillsBarTitle>
                        <SkillsBarPerc>100%</SkillsBarPerc> */}
                        {/* <SkillsBarParent>
                            <SkillsBarSpan1></SkillsBarSpan1>
                        </SkillsBarParent>
                    </SkillsBar> */}
                    
                   
                    {/* <SkillsBar>
                       {/* < SkillsBarTitle>CSS3</SkillsBarTitle>
                        <SkillsBarPerc>90%</SkillsBarPerc> */}
                        {/* <SkillsBarParent>
                            <SkillsBarSpan2></SkillsBarSpan2>
                        </SkillsBarParent>
                    </SkillsBar> */} 
                
                    {/* <SkillsBar>
                        {/* <SkillsBarTitle>Photoshop</SkillsBarTitle>
                        <SkillsBarPerc>80%</SkillsBarPerc> */}
                        {/* <SkillsBarParent>
                            <SkillsBarSpan3></SkillsBarSpan3>
                        </SkillsBarParent>
                    </SkillsBar> */} 
                 
                 { ProfileSkill}
                 
                </Skills>
                
            </div>
        </ProfileSkills>
  )
}

export default Profile
