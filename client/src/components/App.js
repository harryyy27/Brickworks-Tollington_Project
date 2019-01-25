import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import Nav from './mainPageComponents/header'
class DynamicImport extends React.Component {
  state = {
    component: null
  }
  componentDidMount(){
    this.props.load()
      .then((mod)=>
        this.setState(()=>
        ({component: mod.default})
      ))
  }750
  render() {
    return (
      this.props.children(this.state.component)
    )

  }
}

const Footer = (props) => {
  return(
  <DynamicImport load={()=> import('./mainPageComponents/footer')}>
  {(Component)=> Component=== null ? <h1>loading</h1> :
    <Component {...props} />}
    </DynamicImport>
  
  )

}
const Home = (props) => {
  return(
  <DynamicImport load={()=> import('./pages/home')}>
  {(Component)=> Component=== null ? <h1>loading</h1> :
    <Component {...props} />}
    </DynamicImport>
  
  )

}
const ListEvent = (props) => {
  return(
    <DynamicImport load={()=> import('./pages/list-event')}>
    {(Component)=> Component=== null ? <h1>loading</h1> :
      <Component {...props} />}
      </DynamicImport>
    )
  }
const SocialActions = (props) => {
  return(
    <DynamicImport load={()=> import('./pages/social-actions')}>
    {(Component)=> Component=== null ? <h1>loading</h1> :
      <Component {...props} />}
      </DynamicImport>
    )
  }
const EventDetailed = (props) => {
  return(
    <DynamicImport load={()=> import('./pages/event_detailed')}>
    {(Component)=> Component=== null ? <h1>loading</h1> :
      <Component {...props} />}
      </DynamicImport>
    )
  }
const Inspiration = (props) => {
  return(
    <DynamicImport load={()=> import('./pages/inspirations')}>
    {(Component)=> Component=== null ? <h1>loading</h1> :
      <Component {...props} />}
      </DynamicImport>
    )
  }
const Error = (props) => {
  return(
    <DynamicImport load={()=> import('./pages/error')}>
    {(Component)=> Component=== null ? <h1>loading</h1> :
      <Component {...props} />}
      </DynamicImport>
    )
  }
const Error500 = (props) => {
  return(
    <DynamicImport load={()=> import('./pages/500error')}>
    {(Component)=> Component=== null ? <h1>loading</h1> :
      <Component {...props} />}
      </DynamicImport>
    )
  }
const Resources = (props) => {
  return(
    <DynamicImport load={()=> import('./pages/resources')}>
    {(Component)=> Component=== null ? <h1>loading</h1> :
      <Component {...props} />}
      </DynamicImport>
    )
  }
const TopTen= (props) => {
  return(
    <DynamicImport load={()=> import('./pages/topten')}>
    {(Component)=> Component=== null ? <h1>loading</h1> :
      <Component {...props} />}
      </DynamicImport>
    )
  }
const ContactUs = (props) => {
  return(
    <DynamicImport load={()=> import('./pages/contactUs')}>
    {(Component)=> Component=== null ? <h1>loading</h1> :
      <Component {...props} />}
      </DynamicImport>
    )
  }
const Projects = (props) => {
  return(
    <DynamicImport load={()=> import('./pages/projects')}>
    {(Component)=> Component=== null ? <h1>loading</h1> :
      <Component {...props} />}
      </DynamicImport>
    )
  }
const Faq = (props) => {
  return(
    <DynamicImport load={()=> import('./pages/faq')}>
    {(Component)=> Component=== null ? <h1>loading</h1> :
      <Component {...props} />}
      </DynamicImport>
    )
  }

const Navbar = withRouter(props => <Nav {...props }/>);
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount = () => {
    const menu = document.getElementById('menu');
    const menuBtn = document.getElementById('icon');
   
   
    document.addEventListener('keydown', (event)=>{
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
          menu.lastElementChild.firstElementChild.focus();
        }
        else if(document.activeElement === menu.firstElementChild.firstElementChild&&window.innerWidth<1081){
          menuBtn.focus();
        }
        else if(menu.className==="menu menu-open"&&window.innerWidth<1081){
          // console.log(document.activeElement.parentElement.prev);
          document.activeElement.parentElement.previousElementSibling.firstElementChild.focus();
        }
        break;
        case 'ArrowDown':
        if(menu.className==="menu menu-open"&& document.activeElement===menuBtn&&window.innerWidth<1081){
          console.log(menu.firstElementChild.firstElementChild)
          menu.firstElementChild.firstElementChild.focus();
        }
        else if(document.activeElement === menu.lastElementChild.firstElementChild&&window.innerWidth<1081){
          menuBtn.focus();
        }
        else if(menu.className==="menu menu-open"&&window.innerWidth<1081){
          // console.log(document.activeElement.parentElement.prev);
          document.activeElement.parentElement.nextSibling.firstElementChild.focus();
        }
        break;
        case 'Escape':
        if(window.innerWidth<1081){
          menuBtn.click();
        }
        break;
      }
    })
  }
  
  render () {
  return (
    
    <div id="container">
      <div className='background-img'>
      <Navbar />
      <Switch>
        <Route exact path='/' component= {Home} />
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