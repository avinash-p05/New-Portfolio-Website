import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
          I have also participated and compititions in various <b>Hackathons</b> to name few 
          – Winning <b>Tantradnya 2022</b> for finding the smart solution to control pollution, 
          Winning <b>Hack to Future</b> a 24 hrs hackathon for managing the surplus food effectively and many more.. <br/><br/>
          
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Apart from coding I love to do <b>Ui/Ux Designing</b>.
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='Android' />
        <Skills skill='SpringBoot' />
        <Skills skill='MySql' />
        <Skills skill='Mongo' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Java' />
        <Skills skill='C' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Firebase' />
        <Skills skill='Render' />
        <Skills skill='Linux'/>
        
      </div>
    </>
  )
}

export default About