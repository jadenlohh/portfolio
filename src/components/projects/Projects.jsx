import React, { useEffect, useState } from 'react';
import '../../styles/projects.css';
import axios from 'axios';
import ProjectItem from './ProjectItem';

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get('https://api.github.com/users/jadenlohh/repos').then(response => {
      setProjects(response.data)
    })
  }, [])

  return (
    <div className='container' id='projects'>
      <div>
        <h3 className='section-title'><span style={{ color: '#555' }}>#</span>&nbsp;projects</h3>

        <div className='section-body'>
          <div className='row'>
            {
              projects.map((project, index) => {
                return (
                  <ProjectItem key={index} name={project.name} description={project.description} programmingLanguagesURL={project.languages_url} websiteURL={project.homepage} githubURL={project.html_url} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects