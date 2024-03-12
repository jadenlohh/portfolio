import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectItem = ({ name, description, programmingLanguagesURL, websiteLink, githubURL }) => {
  const [programmingLanguages, setProgrammingLanguages] = useState([])

  useEffect(() => {
    axios.get(programmingLanguagesURL).then(response => {
      setProgrammingLanguages(response.data)
    })
  }, [])

  return (
    // <div className='col-md-4 gy-4'>
    //   <div className='card h-100'>
    //     <h5>{name}</h5>
    //     <p className='pt-2'>{description == null ? 'No description provided' : description}</p>

    //     <div className='programming-languages pb-5'>
    //       {
    //         Object.keys(programmingLanguages).map((x, index) => {
    //           return (
    //             <span key={index}>{x}</span>
    //           )
    //         })
    //       }
    //     </div>

    //     <div className='row project-links'>
    //       <div className='col-md-6'>
    //         <a className='btn btn-dark shadow-none w-100' href={githubURL} target='_blank' rel='noreferrer noopener' role='button'>Github</a>
    //       </div>

    //       {
    //         link === '' || link === null ?
    //           <div className='col-md-6'></div> :
    //           <div className='col-md-6'>
    //             <a className='btn btn-outline-dark shadow-none w-100' href={link} target='_blank' rel='noreferrer noopener' role='button'>
    //               View <i className="fa-solid fa-arrow-up-right-from-square"></i>
    //             </a>
    //           </div>
    //       }
    //     </div>
    //   </div>
    // </div>




    <div className='col-md-4 project-card-container'>
      {
        websiteLink === '' || websiteLink === null ?
          <a href={githubURL} target='_blank' rel='noreferrer noopener'>
            <div className='project-card'>
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
          </a> :

          <a href={websiteLink} target='_blank' rel='noreferrer noopener'>
            <div className='project-card'>
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
      }
    </div>
  )
}

export default ProjectItem