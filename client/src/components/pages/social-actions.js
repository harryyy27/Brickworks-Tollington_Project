import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {EventComp, UpcomingEvents, PastEvents} from './eventComp';
import "babel-polyfill"


class SocialActions extends React.Component {

constructor(props){
  super(props)
  this.state = {
    allEvents : [],
    pastEvents : [],
    allEvntLoading : true,
    pastEvntLoading: true,
  }
}
async componentDidMount() {
  if(process.env.NODE_ENV !== 'test'){
  window.scrollTo(0,0);
try{
  const response = await fetch(`/api/getAllEventsAirTable`)
  if(!response.ok){
    throw Error(response.statusText);
  }
  const json = await response.json();
  this.setState({allEvents: json, allEvntLoading: false})
  
  const pastResponse = await fetch(`/api/getPastEventsAirTable`)
  if(!pastResponse.ok){
    throw Error(pastResponse.statusText)
  }
  const jsonPast = await pastResponse.json();
  this.setState( { pastEvents : jsonPast, pastEvntLoading:false});
} catch(e){
  console.log(e);
}
  }
}

addEvent = () => {
  this.props.history.push('/topten');
  this.props.updateNav();
}

render() {
  if (this.state.allEvntLoading || this.state.pastEvntLoading) {
    return (
      <div className='wrapper'>
      <h1 data-testid="social-actions-page">Social Actions</h1>
      <main>
      <div className='loading-div'>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
      </main>
      </div>
    ) 
  } 
  
  const {allEvents} = this.state;
  const {pastEvents} = this.state;

  return (
    
    // <React.Fragment>
    <div className='wrapper'>
      <h1 data-testid="social-actions-page">Social Actions</h1>
    
  <main>
      
  <UpcomingEvents allEvents={this.state.allEvents} />
  <PastEvents pastEvents={this.state.pastEvents}/>    

  <button className='button-large' onClick={this.addEvent}>Express Interest</button>
  </main>

  </div>
  )
}
}
export default SocialActions;