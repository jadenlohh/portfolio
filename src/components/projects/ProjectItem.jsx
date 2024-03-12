import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectItem = ({ name, description, programmingLanguagesURL, websiteURL, githubURL }) => {
  const [programmingLanguages, setProgrammingLanguages] = useState([])

  useEffect(() => {
    axios.get(programmingLanguagesURL).then(response => {
      setProgrammingLanguages(response.data)
    })
  }, [])

  return (
    <div className='col-md-4'>
      {
        websiteURL === '' || websiteURL === null ?
          <div className='project-card'>
            <a href={githubURL} target='_blank' rel='noreferrer noopener'>
              <div>
                <div className='row'>
                  <div className='col-10'>
                    <h4 className='project-card-title'>{name}</h4>
                  </div>

                  <div className='col-2'>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </div>
                </div>

                <p className='pt-2 project-card-description'>{description == null ? 'No description provided' : description}</p>

                <div className='programming-languages'>
                  {
                    Object.keys(programmingLanguages).map((x, index) => {
                      return (
                        <span key={index}>{x}</span>
                      )
                    })
                  }
                </div>
              </div>
            </a> 
          </div> :

          <div className='project-card'>
            <a href={githubURL} target='_blank' rel='noreferrer noopener'>
              <div>
                <div className='row'>
                  <div className='col-10'>
                    <h4 className='project-card-title'>{name}</h4>
                  </div>

                  <div className='col-2'>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </div>
                </div>

                <p className='pt-2 project-card-description'>{description == null ? 'No description provided' : description}</p>

                <div className='programming-languages'>
                  {
                    Object.keys(programmingLanguages).map((x, index) => {
                      return (
                        <span key={index}>{x}</span>
                      )
                    })
                  }
                </div>
              </div>
            </a> 
          </div>
      }
    </div>
  )
}

export default ProjectItem