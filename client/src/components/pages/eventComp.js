import React from "react";
import { Link } from "react-router-dom";

const EventComp = ({ event_id, event_name, event_description, event_date_time, event_location, fullname_event_organiser, 
  email_event_organiser, telephone_event_organiser, recurring_event_description}) => {
  

  return (

    <div className="mini-wrapper">
        
          <h3>{event_name.split('rec')[0]}</h3>
          
          <time className="time">
            Time: &nbsp;<span>{event_date_time.split(' ')[1]}</span>&nbsp;
            <span>{event_date_time.split(' ')[0].split('-')[2]}</span>/
            <span>{event_date_time.split(' ')[0].split('-')[1]}</span>/
            <span>{event_date_time.split(' ')[0].split('-')[0]}</span>
            
          </time>
          <h4>Location: {event_location}</h4>
          <p>{event_description.slice(0,200)+'...'}</p>
        <Link className="a-links-four" key={event_id} to={'/event-detailed/' + event_name} >
        Find out more
      </Link >
    </div>
  )
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
      <div className='individual-event-div'>
        <time>
          Time: &nbsp; <span> {event_date_time}</span>
        </time>
        <span className="single-event">Location: &nbsp; {event_location}</span>
        <p> {event_description}</p>
      </div>
      <h3>Contact us</h3>
      <div className='individual-event-div'>
        <span className="single-event">Name: {fullname_event_organiser}</span>
        <span className="single-event">E-mail: {email_event_organiser}</span>
        <span className="single-event">Telephone: {telephone_event_organiser}</span>
      </div>
    </div>
  )
}
else {
  return(
    <div key={event_id} >
      <h3>Event Information</h3>
      <time className="time">
            Time: &nbsp;<span>{event_date_time.split(' ')[1]}</span>&nbsp;
            <span>{event_date_time.split(' ')[0].split('-')[2]}</span>/
            <span>{event_date_time.split(' ')[0].split('-')[1]}</span>/
            <span>{event_date_time.split(' ')[0].split('-')[0]}</span>
            
          </time>
      <span className="single-event">Location: &nbsp; {event_location}</span>
      <p> {event_description}</p>
      <h3>Contact us</h3>
      <div className='individual-event-div'>
        <span className="single-event">Name: {fullname_event_organiser}</span>
        <span className="single-event">E-mail: {email_event_organiser}</span>
        <span className="single-event">Telephone: {telephone_event_organiser}</span>
      </div>
  </div>

  )
}
  }
const FormErrors = ({formErrors}) =>
<div className='form-errors'>
{Object.keys(formErrors).map((fieldName, i) => {
  if(formErrors[fieldName].length > 0){
    return (
      <p className='error-message' key={i}>{fieldName} {formErrors[fieldName]}</p>
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

const PastEvents = ({ pastEvents}) => {
  if(pastEvents.length !== 0){
    return (
      <React.Fragment>
        {pastEvents.map( event => (
              <EventComp key={event.fields.event_id} {...event.fields} /> 
            ))} 

      </React.Fragment>
    )
    }else {
      return '';
    }
  }

export { SingleEvent, FormErrors, EventComp, EventByThemeComp, UpcomingEvents, PastEvents };
