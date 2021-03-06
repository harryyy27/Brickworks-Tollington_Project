import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import getAllEvents from '../utils/utilsgetAllEvent';
import getPastEvents from '../utils/utilsgetPastEvent';
import {EventComp, UpcomingEvents, PastEvents} from './eventComp';


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
componentDidMount() {
  if(process.env.NODE_ENV !== 'test'){
  window.scrollTo(0,0);

  getAllEvents()
  .then(response => {
    //set allEvents state
    this.setState( { allEvents: response, allEvntLoading: false});
    //pass data to parent
    
  })
  
  .catch(err => console.log(err));

  getPastEvents()
  .then(response => {
  
  this.setState( { pastEvents : response, pastEvntLoading:false});
 
  
})

.catch(err => console.log(err));
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