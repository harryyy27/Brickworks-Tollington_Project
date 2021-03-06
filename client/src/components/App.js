import React from 'react';
// import { render } from 'react-dom';
import { withRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import ListEvent from './pages/list-event';
import Nav from './mainPageComponents/header';
import SocialActions from './pages/social-actions';
import EventDetailed from './pages/event_detailed';
import {Error} from './pages/error';
import {Error500} from './pages/500error';
import {Faq} from './pages/faq';
import {Resources} from './pages/resources';
import {Inspiration} from './pages/inspirations';

import {TopTen} from './pages/topten';
import ContactUs from './pages/contactUs';
import {Projects} from './pages/projects';
import {Footer} from './mainPageComponents/footer';

const Navbar = withRouter(props => <Nav {...props }/>);
class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      background: 'background-img',
    }
  }
  setBackground = () => {
    if(process.env.NODE_ENV === 'test') {
      const background = document.getElementById('background');
      background.classList.remove('background-img');
    }
  }
  updateNav = () => {
    console.log('this worked');
    const oldlink = document.querySelector('.current-page');
    oldlink.classList.remove('current-page');
    const topten = document.getElementById('topten');
    topten.className="nav-link current-page";

  }
  componentDidMount = () => {
    
    const menu = document.getElementById('menu');
    const menuBtn = document.getElementById('icon');
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    /* Setting focus upon page loading */
    if(window.innerWidth<1081){
      menuBtn.focus();
    }
    else {
      if(window.innerWidth<=1080){
    const focusable = Array.from(document.querySelectorAll('#icon, button, a, input, select, textarea, [tabIndex]:not([tabIndex="-1"])')).filter(element=> element.tabIndex ===0);
    if(focusable.length !== 0){
    focusable[0].focus();
    }
  }
  }
  window.addEventListener("scroll", (e)=>{
    if(menu.className==="menu menu-open"){
      e.preventDefault();
    }
  })
  window.addEventListener("resize",()=>{
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  })
    /* Tabbing functions */
    document.addEventListener('keydown', (event)=>{
      console.log(document.activeElement);
      switch(event.key){
        case 'Tab':
        if(!event.shiftKey &&document.activeElement===menu.lastElementChild.firstElementChild&& menu.className==="menu menu-open"&&window.innerWidth<1081){
          event.preventDefault();
          menuBtn.focus();
        }
        else if(menu.className==="menu menu-open"&&event.shiftKey&&document.activeElement===menuBtn && window.innerWidth<1081){
          event.preventDefault();
          menu.lastElementChild.firstElementChild.focus();
        }
        break;
        case 'Enter':
        if(document.activeElement===menuBtn){
          menuBtn.click();
          menuBtn.focus();
        }
        else if(window.innerWidth>1080 && event.target.parentElement.parentElement.id === "menu"){
          event.target.focus()

        }
        
        break;
        
        case 'ArrowUp':
        
        if(menu.className==="menu menu-open"&&document.activeElement===menuBtn&&window.innerWidth<1081){
          event.preventDefault();
          menu.lastElementChild.firstElementChild.focus();
        }
        else if(document.activeElement === menu.firstElementChild.firstElementChild&&window.innerWidth<1081){
          event.preventDefault()
          menuBtn.focus();
        }
        else if(menu.className==="menu menu-open"&&window.innerWidth<1081){
          event.preventDefault()
          // console.log(document.activeElement.parentElement.prev);
          document.activeElement.parentElement.previousElementSibling.firstElementChild.focus();
        }
      
        break;
        
        case 'ArrowDown':
        
        if(menu.className==="menu menu-open"&& document.activeElement===menuBtn&&window.innerWidth<1081){
          event.preventDefault()
          menu.firstElementChild.firstElementChild.focus();
        }
        else if(document.activeElement === menu.lastElementChild.firstElementChild&&window.innerWidth<1081){
          event.preventDefault();
          menuBtn.focus();
        }
        else if(menu.className==="menu menu-open"&&window.innerWidth<1081){
          event.preventDefault()
          document.activeElement.parentElement.nextSibling.firstElementChild.focus();
        }
        break;
        case 'Escape':
        if(window.innerWidth<1081){
       if(menu.className==="menu menu-open"){
        const menuLinks= document.querySelectorAll(".nav-link")
        icon.className='image image-closed';
        menu.className='menu menu-closed';
        menu.setAttribute("aria-hidden", "true");
        icon.setAttribute("aria-expanded", "false");
        menuLinks.forEach(el => {
          el.setAttribute('tabIndex',-1);
        })
        menu.focus();
      }
    }
        break;
      }
    })
    
    
  }
  setCurrentPage = () => {
    
    const social = document.getElementById('social-actions')
  
    social.classList.add('current-page')
  }
  render () {
  return (
    
    <div id="container">
      <div className='background-img'>
      <Navbar />
      <Switch>
        <Route exact path='/' render={(props)=> <Home {...props} setCurrentPage={this.setCurrentPage} />}/>
        <Route path='/social-actions' render={(props) => <SocialActions {...props} updateNav={this.updateNav} />}/>
        <Route path='/promote-social-action' component= { ListEvent } />
        <Route path='/event-detailed' render={(props) => <EventDetailed {...props} data={this.state.data} />}/>
        <Route path='/faq' component = {Faq} />
        <Route path='/resources' component = {Resources} />
        <Route path ='/inspirations' component = {Inspiration} />
        <Route path ='/start-social-action' component = {ContactUs} />
        <Route path ='/topten' component = {TopTen} />
        <Route path ='/projects' component = {Projects} />
        <Route path ='/error500' component = {Error500} />
        <Route component= { Error } />
      </Switch>
      <Footer />
    </div>
    </div>
    )}
};

export default App;