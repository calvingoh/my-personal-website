import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../components/Footer.css"

function Footer() {
    return (
      <div className='footer'>
          <div className='socialMedia'>
            <GitHubIcon />
            <LinkedInIcon />
          </div>
          <p>&copy; 2022 calvingohkb.com</p>
      </div>
    );
}

export default Footer;