import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import githublogo from "./images/github-logo.svg"; 
import linkedinlogo from "./images/linkedin-logo.svg"; 
import cvlogo from "./images/cv-logo.svg"; 
import FadeIn from 'react-fade-in/lib/FadeIn';

class Title extends React.Component 
{
  render()
  {
    return (
      <div className="main-title">
        <h1> Sudhanshu Agrawal </h1>
      </div>
    );
  }
}

class NavBar extends React.Component
{
  constructor(props)
  {
    super(props); 
    this.state = {
      visible: false 
    }
  }
  
  componentDidMount()
  {
    setTimeout(
      function()
      {
        this.setState({visible:true})
      }.bind(this), 
      2500)
  }

  render()
  {
    console.log("state = ", this.state.visible)
    if (this.state.visible == true)
    {
      return(
        <FadeIn>
        <div className='main-navbar'>
          <div className="main-navbar-tile" > 
            <a className="main-navbar-logo" href="https://github.com/SudhanshuAgrawal27"> 
              <img  src={githublogo} alt="github-logo"></img> 
            </a>  
          </div> 
  
          <div className="main-navbar-tile" > 
            <a className="main-navbar-logo" href="https://www.linkedin.com/in/sudhanshu-agrawal/"> 
              <img src={linkedinlogo} alt="linkedin-logo"></img> 
            </a>
          </div> 
  
          <div className="main-navbar-tile" > 
            <a className="main-navbar-logo" href="https://drive.google.com/file/d/1yklBjjtwIm1fPVVMQIZTgf_5SHEyZZKF/view">  
              <img  src={cvlogo} alt="cv-logo"></img> 
            </a> 
          </div> 
        </div>
        </FadeIn>
      );
    }
    else 
      return null; 
    
  }
}

class Homepage extends React.Component
{
  constructor(props)
  {
    super(props); 
  }


  render()
  {
    return(
      <div>
      <Title /> 
      <NavBar />
      </div>
    );
  }
}

ReactDOM.render(
    <Homepage />,
    document.getElementById('root')
  );