import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    FindingMyLostDesc : "Developed an Android application for reporting and finding lost items within the college campus. Utilized Java and XML for development and implemented Firebase for backend support.",
    FindingMyLostGithub : "https://github.com/avinash-p05/Lost_and_Found.git",
    TindogWebsite : "https://devanshsahni.github.io/tindog/",

    AnnaSevaDesc : "Crafted a mobile app for efficient food redistribution between Restaurants and NGOs. Implemented a role-based login system using Kotlin and XML. Utilized MongoDB for data storage.",
    AnnaSevaGithub : "https://github.com/avinash-p05/AnnaSeva.git",
    RogFreeWebsite : "https://devanshsahni.github.io/Rog-Free/",

    RecipeSharingDesc:"Developed the Recipe sharing platform to share, discover and create delicious recipes. Spring Boot for the backend, MongoDB and Firebasefor the database, and Kotlin and XML for the frontend.",
    RecipeSharingGithub:"https://github.com/avinash-p05/Rasoi_Rang_App/tree/Frontend",
    NewsletterWebsite:"https://newsletter-signup-teal.vercel.app/",
    
    QuizAppDesc:"An innovative Quiz app enabling the users to choose the correct answer from 4 different options and the final score of the questions answered correctly and wrongly will be calculated.",
    QuizGithub:"https://github.com/avinash-p05?tab=repositories",
    WigglesWebsite:"https://wiggles.vercel.app/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

          
        </div>
    </div>
  )
}

export default  ProjectBox