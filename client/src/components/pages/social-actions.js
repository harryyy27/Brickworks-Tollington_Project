import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import getAllEvents from '../utils/utilsgetAllEvent';
import getPastEvents from '../utils/utilsgetPastEvent';
import {EventComp, UpcomingEvents, PastEvents} from './eventComp';

class SocialActions extends React.Component {
  
state = {
  allEvents : [],
  pastEvents : [],
  allEvntLoading : true,
  pastEvntLoading: true,
}

componentDidMount() {
  
  window.scrollTo(0,0);

  getAllEvents()
  .then(response => {
    //set allEvents state
    this.setState( { allEvents: response, allEvntLoading: false});
    //pass data to parent
    this.props.extractData(this.state.allEvents);
  })
  
  .catch(err => console.log(err));

  getPastEvents()
  .then(response => {
  
  this.setState( { pastEvents : response, pastEvntLoading:false});
  this.props.extractData(this.state.pastEvents);
  
})

.catch(err => console.log(err));
setTimeout(()=>{
  const miniwraps = document.querySelectorAll('mini-wrapper');
const miniarray = Array.from(miniwraps);
console.log(miniwraps);
console.log(miniarray);
},1000);
// miniwraps.forEach(el=> {
//   el.addEventListener('click',()=>{
//     console.log('dga');
//     el.className="invisible";
//   })
// })
}

addEvent = () => {
  this.props.history.push('/topten');
}

render() {
  if (this.state.allEvntLoading || this.state.pastEvntLoading) {
    return (
      <main className='wrapper'>
        <h1 data-testid="social-actions-page">Social Actions</h1>
      
        <div className='loading-div'>
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
      </main>
      
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