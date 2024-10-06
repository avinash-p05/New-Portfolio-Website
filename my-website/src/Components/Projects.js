import React from 'react';
import ProjectBox from './ProjectBox';
import LostFound from '../images/LostFound.png'
import AnnaSeva from '../images/AnnaSeva.png';
import RecipeSharing from '../images/Recipe.png';
import Quiz from '../images/Quiz.png'

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={RecipeSharing} projectName="RecipeSharing" />
        <ProjectBox projectPhoto={AnnaSeva} projectName="AnnaSeva" />
        <ProjectBox projectPhoto={LostFound} projectName="FindingMyLost" />
        <ProjectBox projectPhoto={Quiz} projectName="QuizApp" />
      </div>

    </div>
  )
}

export default Projects