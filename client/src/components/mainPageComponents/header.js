import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HeaderLogo from './img/headerLogo';


class Nav extends React.Component {
constructor(props){
super(props)
  this.state = {
    screensize: 'small'
}
}
componentDidDisappear = (menu) => {
  setTimeout(()=>{
    menu.className='menu menu-closed invisible';
   
  },700)
  
}
componentDidMount = () => {
  if(process.env.NODE_ENV !== 'test'){
  const pathname = this.props.location.pathname;
  const menu = document.getElementById('menu');
  console.log(pathname);
  if(pathname==='/'){
    if(window.innerWidth<=1080){
    menu.firstElementChild.firstElementChild.className= "nav-link current-page";
    }
  }
  else if(pathname.indexOf('event-detailed')!==-1){
    const menuItem=document.getElementById("social-actions");
    menuItem.className= "nav-link current-page";
  }
  else if(pathname.indexOf('start-social-action')!==-1){
    const menuItem=document.getElementById("topten");
    menuItem.classNAme = "nav-link current-page";
  }
  else if(pathname.indexOf("promote-social-action")!==-1){
    const menuItem=document.getElementById("topten");
    menuItem.className = "nav-link current-page";
  }
  else {

    const menumarker = document.getElementById(`${pathname.split('/')[1]}`);
    menumarker.className = 'nav-link current-page';
  }
  window.addEventListener('resize', ()=>{
    if(window.innerWidth<748){
      const menuLinks = document.querySelectorAll('.nav-link');
      menu.setAttribute("aria-hidden", "true");
      icon.focus();
      menuLinks.forEach(el => {
        el.setAttribute('tabIndex',"-1");
      })
    }
    
    else {
      const menuLinks = document.querySelectorAll('.nav-link')
      menu.setAttribute("aria-hidden", "false");
      
      menuLinks.forEach(el => {
        el.setAttribute('tabIndex',"0");
      })
    }
    if(window.innerWidth>=1081){
      const home = document.getElementById('home-label');
      home.className = "invisible";
    }
    else {
      const home = document.getElementById('home-label');
      home.className = "";
    }
  })
  document.addEventListener("click", (event)=>{
    
    
    if(menu.className==="menu menu-open"&&event.target!==menu&&window.innerWidth>748 &&window.innerwidth<=1080){
      const icon = document.getElementById("icon");
      const menuLinks = document.querySelectorAll('.nav-link');
      const header = document.querySelector("header");
      icon.className='image image-closed';
      menu.className='menu menu-closed';
      menu.setAttribute("aria-hidden", "true");
      icon.setAttribute("aria-expanded", "false");
      menuLinks.forEach(el => {
        el.setAttribute('tabIndex',"-1");
      })
      icon.focus();
      this.componentDidDisappear(menu,header);
    }
  })
}
}

toggleMenu = (e) => {
  if(process.env.NODE_ENV!=="test"){
  console.log(e.target.textContent);
  
  if(e.target.className==='nav-link'){
  let oldpage = document.querySelector('.current-page');
  oldpage.classList.remove('current-page');
  
  e.target.className = "nav-link current-page";
  }
  else if(e.target.textContent==="Express"){

  }
}
    const icon= document.getElementById('icon');
    const menu = document.getElementById('menu');
    const menuLinks = document.querySelectorAll('.nav-link');
    if (menu.className === 'menu menu-closed invisible') {
      icon.className='image image-open';
      menu.className='menu menu-closed';
      setTimeout(()=>{
        menu.className='menu menu-open';
        menu.setAttribute("aria-hidden", "false");
        icon.setAttribute("aria-expanded", "true");
        menu.firstElementChild.focus();
        menuLinks.forEach(el => {
          el.setAttribute('tabIndex',"0");
        },1)
      })
     
    } else if (menu.className === 'menu menu-open') {
      
      icon.className='image image-closed';
      menu.className='menu menu-closed';
      menu.setAttribute("aria-hidden", "true");
      icon.setAttribute("aria-expanded", "false");
      menuLinks.forEach(el => {
        el.setAttribute('tabIndex',"-1");
      })
      icon.focus();
      this.componentDidDisappear(menu);
    }
  
}

toggleOpacity = () => {
  if (menu.className === 'menu menu-open') {
    console.log('working');
    document.body.style.opacity = '0.6';
  }
}

takeMeHome = () => {
  this.props.history.push('/');
  let oldpage = document.querySelector('.current-page');
  oldpage.classList.remove('current-page');
}
  
  render() {
    return (

      
    <header id="menu-wrapper">
      <HeaderLogo takeMeHome={this.takeMeHome}/>
     
    
      <nav id="menu" 
           aria-hidden={window.innerWidth< 748 ? 'true': 'false'}  
           data-testid="actual-menu" 
           className="menu menu-closed invisible">
           
        <label id="home-label" htmlFor="home" className={window.innerWidth>=1080 ? "invisible": ""}>
          <Link className='nav-link'
                id="home" 
                tabIndex={window.innerWidth< 748 ? '-1': '0'} 
                data-testid="home" 
                onClick={this.toggleMenu} 
                to='/'>Home</Link>
        </label>
           
        <label htmlFor="social-actions">
          <Link className='nav-link'
                id="social-actions"
                tabIndex={window.innerWidth< 748 ? '-1': '0'}  
                data-testid="social-actions" 
                onClick={this.toggleMenu} 
                to='/social-actions'>Social Actions</Link>
        </label>
        <label htmlFor="form">
          <Link className='nav-link'
                id="topten"
                tabIndex={window.innerWidth< 748 ? '-1': '0'} 
                data-testid="form" 
                onClick={this.toggleMenu} 
                to='/topten'>Start a Social Action</Link>
        </label>
        <label htmlFor="projects">
          <Link className='nav-link'
                id="projects"
                tabIndex={window.innerWidth< 748 ? '-1': '0'} 
                data-testid="projects-page" 
                onClick={this.toggleMenu} 
                to='/projects'>Projects</Link>
        </label>
        <label htmlFor="faq">
          <Link className='nav-link'
                id="faq"
                tabIndex={window.innerWidth< 748 ? '-1': '0'}  
                data-testid="faq" 
                onClick={this.toggleMenu} 
                to='/faq'>FAQ</Link>
        </label>
        <label htmlFor="inspirations">
          <Link className='nav-link'
                id="inspirations"
                tabIndex={window.innerWidth< 748 ? '-1': '0'}  
                data-testid="inspirations" 
                onClick={this.toggleMenu} 
                to='/inspirations'>Local Inspirations</Link>
        </label>
        <label htmlFor="resources">
          <Link className='nav-link'
                id="resources"
                tabIndex={window.innerWidth< 748 ? '-1': '0'}  
                data-testid="resources" 
                onClick={this.toggleMenu} 
                to='/resources'>Resources & Tips</Link>
        </label>
      </nav>
    <div  
      id="icon"
      className="image image-closed"
      tabIndex="1"
      data-testid="menu"
      aria-controls="menu"
      aria-haspopup="true"  
      aria-expanded='false'  
      onClick={this.toggleMenu}>
      <span></span>
    </div>
  </header>
  )}
}

export default Nav;
