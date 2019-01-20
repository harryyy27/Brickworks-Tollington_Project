import React from "react";
import { Link } from "react-router-dom";
// [event_id, event_name, event_description, event_date_time, event_location, fullname_event_organiser, 
//   email_event_organiser, telephone_event_organiser, recurring_event_description]
class EventComp extends React.Component{  
  constructor(props) {
    super(props);
    this.handleMouseOver=this.handleMouseOver.bind(this);
    this.handleMouseOff=this.handleMouseOff.bind(this);
  }
   
  handleMouseOver = (event) => {
    if(event.target.querySelector('.a-links')){
    if(event.target===document.getElementsByClassName("mini-wrapper")){
    let link = event.target.querySelector('.a-links');
    link.className = "a-links"
    }
  }
    else {
      if(event.target.parentElement.querySelector('.a-links')){
      let link = event.target.parentElement.querySelector('.a-links');
      link.className="a-links"
      }
    }
    // event.target.lastElementChild.classList.remove('invisible');
    
  }
  handleMouseOff = (event) => {
    
    if(event.target===document.getElementsByClassName("mini-wrapper")){
      if(event.target.querySelector('.a-links')){
      let link = event.target.querySelector('.a-links');
      link.className = "a-links invisible"
      }
    }
      else {
        if(event.target.parentElement.querySelector('.a-links')){
        let link = event.target.parentElement.querySelector('.a-links');
        link.className="a-links invisible"
        }
      }
    }
    toggleButton = (event) => {
      console.log(event.target);
      if(event.target===document.getElementsByClassName("mini-wrapper")){
        if(event.target.querySelector('.a-links')){
          let link = event.target.querySelector('.a-links');
          link.className = "a-links invisible"
        }
        else{
          let link = event.target.querySelector('.a-links invisible');
          link.className = "a-links"
        }
      }
      else {
        if(event.target.parentElement.querySelector('.a-links')){
          let link = event.target.parentElement.querySelector('.a-links');
          link.className="a-links invisible"
        }
        else {
          let link = event.target.parentElement.querySelector('.a-links invisible');
          link.className="a-links"
        }
      }
    }

    
  
  render() {
 
  return (

    <div onMouseOver={this.handleMouseOver} onClick={this.toggleButton} onMouseOut={this.handleMouseOff} className="mini-wrapper">
        
          <h3 onMouseOver={this.handleMouseOver} onClick={this.toggleButton} onMouseOut={this.handleMouseOff} className="event-title">{this.props.event.event_name.split('rec')[0]}</h3>
          
          <time onMouseOver={this.handleMouseOver} onClick={this.toggleButton} onMouseOut={this.handleMouseOff} className="time">
            Time: &nbsp;<span>{this.props.event.event_date_time.split(' ')[1]}</span>&nbsp;
            <span>{this.props.event.event_date_time.split(' ')[0].split('-')[2]}</span>/
            <span>{this.props.event.event_date_time.split(' ')[0].split('-')[1]}</span>/
            <span>{this.props.event.event_date_time.split(' ')[0].split('-')[0]}</span>
            
          </time>
          <h4 onMouseOver={this.handleMouseOver} onClick={this.toggleButton} onMouseOut={this.handleMouseOff}>Location: {this.props.event.event_location}</h4>
          <p onMouseOver={this.handleMouseOver} onClick={this.toggleButton} onMouseOut={this.handleMouseOff}>{this.props.event.event_description}</p>
        <Link className="a-links invisible" key={this.props.event.event_id} to={'/event-detailed/' + this.props.event.event_name} >
        Find out more
        </Link >
      </div>
  
  )
}
}
const EventByThemeComp = ({ event_id, event_name, event_description, date_time, event_location, theme }) => {
  return (
    <ul>
      <li>{event_id}</li>
      <li>{event_name}</li>
      <li>{event_description}</li>
      <li>{date_time}</li>
      <li>{event_location}</li>
      <li>{theme}</li>
    </ul>
  )
}

const SingleEvent = ({ event_id, event_name, event_description, event_date_time, event_location, fullname_event_organiser, 
  email_event_organiser, telephone_event_organiser, Photo}) => {
    if(Photo){
  return (
    <div key={event_id} >
      <img className='single-event-img' src={Photo[0].url}/>
      <h3>Event Information</h3>
      <time>
        Time: &nbsp; <span> {event_date_time}</span>
      </time>
      <span className="single-event">Location: &nbsp; {event_location}</span>
      <p> {event_description}</p>
      <h3>Contact us</h3>
      <span className="single-event">Name: {fullname_event_organiser}</span>
      <span className="single-event">E-mail: {email_event_organiser}</span>
      <span className="single-event">Telephone: {telephone_event_organiser}</span>
      
    </div>
  )
}
else {
  return(
    <div key={event_id} >
      <h3>Event Information</h3>
      <time>
        Time: &nbsp; <span> {event_date_time}</span>
      </time>
      <span className="single-event">Location: &nbsp; {event_location}</span>
      <p> {event_description}</p>
      <h3>Contact us</h3>
      <span className="single-event">Name: {fullname_event_organiser}</span>
      <span className="single-event">E-mail: {email_event_organiser}</span>
      <span className="single-event">Telephone: {telephone_event_organiser}</span>
    
  </div>

  )
}
  }
const FormErrors = ({formErrors}) =>
<div className='formErrors'>
{Object.keys(formErrors).map((fieldName, i) => {
  if(formErrors[fieldName].length > 0){
    return (
      <p id='error-container' key={i}>{fieldName} {formErrors[fieldName]}</p>
    )
    } else {
    return '';
  }
})}
</div>

const UpcomingEvents = ({ allEvents}) => {
  if(allEvents.length !== 0){
    return (
      <React.Fragment>
        <h2>Upcoming Events</h2>
        {allEvents.map( event => (
            <EventComp key={event.fields.event_id} {...event.fields} /> 
          ))} 
      </React.Fragment>
  )
  } else {
    return '';
  }
}

class PastEvents extends React.Component {
  
 render() {
  if(this.props.pastEvents.length !== 0){
    return (
      <React.Fragment>
        <h2>Past Events</h2>
        {this.props.pastEvents.map( event => (
              <EventComp key={event.fields.event_id} event={event.fields} /> 
            ))} 

      </React.Fragment>
    )
    }else {
      return '';
    }
  }
}

export { SingleEvent, FormErrors, EventComp, EventByThemeComp, UpcomingEvents, PastEvents };
