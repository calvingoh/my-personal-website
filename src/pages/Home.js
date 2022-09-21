import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../pages/Home.css'

function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi, My Name is Calvin</h2>
            <div className='prompt'>
                <p>Software Developer</p>
                    <GitHubIcon />
                    <LinkedInIcon />
            </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2>Front-End</h2>
                        <span>ReactJS, HTML, CSS, BootStrap</span>
                    </li>
                    <li className='item'>
                        <h2>Back-End</h2>
                        <span>NodeJS, MySQL, Firebase</span>
                    </li>

                </ol>
            </div>
        </div>
  )
}

export default Home