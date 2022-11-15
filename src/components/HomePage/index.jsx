import React from 'react'
import { Container, Home, Leftcon, Logo, Menu, Navbar, Photo, PhotoR } from './style'
import logo from '../../assets/img/logo.png'
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';
import photo from '../../assets/img'

const HomePage = () => {
  return (
    
      <Container>
        <Navbar>
            <Leftcon>
              <Logo src={logo}/>
            </Leftcon>
            <Menu>
                <Link to='/home'>
                <li>Home</li>
                </Link>
                <Link to='/about'>
                <li>About</li>
                </Link>
                <Link to='/portfolio'>
                <li>Portfolio</li>
                </Link>
                <Link to='/testimonial'>
                <li>Testimonial</li>
                </Link>
                <Link to='/contact'>
                <li>Contact</li>
                </Link>
                
                <AiOutlineMenu className='icon'/>
            </Menu>
        </Navbar>
        <Home>
            <h1>Andriano Smith <br /> Web designer </h1>
            <p>Wide range option of furbitures crafted using the brst selected wood.</p>
            <button>Hire me</button>
            <button>View portfolio</button>
        </Home>
        <PhotoR>
            <Photo src={photo}/>
        </PhotoR>
      </Container>

  )
}

export default HomePage
