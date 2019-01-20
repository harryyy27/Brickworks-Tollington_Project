import React from 'react';
import {FormErrors} from './eventComp';
import tickIcon from '../../../public/images/tick.png';
import crossIcon from '../../../public/images/cancel.svg';

class ListEvent extends React.Component {
    state = { 
      name: '',
      email: '',
      phone: '',
      eventTitle: '',
      description: '',
      date: '',
      time: '',
      venue: '',
      hireSpace: false,
      listEvent: false,
      formErrors: {name:'', email: '', description: ''},
      nameValid: false,
      emailValid: false,
      descriptionValid: false,
      formValid: false
  }
  componentDidMount = () => {
    window.scrollTo(0,0);
  }
  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value }, () => {this.validateField(target.name, value)});
  }

  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let descriptionValid = this.state.descriptionValid;
console.log('BEFORE SWITCH', this.state.nameValid);
    switch(fieldName) {
      case 'name':
      nameValid = (value.length >=2 ) 
      fieldValidationErrors.name = nameValid ? '' : ' is too short' ;
      const nicon = document.getElementById("name-icon");
      if(nameValid){
        nicon.src=tickIcon;
        nicon.className = "validate"
      }
      else {
        nicon.src=crossIcon;
        nicon.className = "validate"
      }
      break;
      case 'email':
      //negated emailValid twice as (value.match(..)) gives null or some other value, we need to turn that to boolean, true or false for readability
      emailValid = !(!(value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ) );
      fieldValidationErrors.email = emailValid ? '' : ' is invalid';
      const eicon = document.getElementById("email-icon");
      if(emailValid){
        eicon.src=tickIcon;
        eicon.className = "validate"
      }
      else {
        eicon.src=crossIcon;
        eicon.className = "validate"
      }
      break;
      
      case 'description':
      // descriptionValid = (value != '');
      descriptionValid = (value.length >= 5);
      fieldValidationErrors.description = descriptionValid ? '' : ' is too short' ;
      const dicon = document.getElementById("des-icon");
      if(descriptionValid){
        dicon.src=tickIcon;
        dicon.className = "validate"
      }
      else {
        dicon.src=crossIcon;
        dicon.className = "validate"
      }
      break;

      default:
      break;
    }
    console.log('NAME', name);
    this.setState( {formErrors: fieldValidationErrors,
                    nameValid : nameValid,
                    emailValid : emailValid,
                    descriptionValid: descriptionValid
                  }, this.validateForm );
                  
  }


  validateForm() {
    console.log('VALIDATEFORM')
    this.setState( {formValid: this.state.nameValid && this.state.descriptionValid && this.state.emailValid });
    console.log('AFTER this.state.formValid', this.state.formValid)
    console.log('this.state.formErrors', this.state.formErrors);
  
  }

  handleSubmit = event => {
    event.preventDefault();
    if(this.state.formValid){
    
    const data = JSON.stringify({
      eventProposal: this.state
    })
    console.log('data', data)
    fetch('/api/event-proposal', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: data,
    })
      .then(res => console.log(res))
      .catch(err => {
        console.log('ERROR IS', err);
        this.props.history.push('/500error');
      });

      this.setState({ name: '', email: '', phone: '', description: '', eventTitle: '', date: '', time: '', venue: '', hireSpace: false, listEvent: false, formErrors: {name: '', email: '', description: ''}, nameValid: false, emailValid: false, descriptionValid: false, formValid: false });
      alert('your form has been submitted, we will get back to you soon');
    }
    else {
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const description = document.getElementById('description');
      this.validateField('name',name.value);
      this.validateField('email',email.value);
      this.validateField('description',description.value);
    }
  }

  render() {
    return ( 
      <main className='wrapper'>
        <h1>Promote a Social Action</h1>
        <p className='mobile-p'>Please note that Name, Email and Description are required fields</p>
        <form>
        <div>
          <FormErrors formErrors={this.state.formErrors} />
        </div>
          <label className='form-label'
                 htmlFor="name">Name  <span className='red-asterisk'>*</span>
          </label>
          <input className='form-box' 
                type="text" 
                id="name" 
                name="name" 
                value={this.state.name} 
                onChange= {this.handleChange}/>
          <img id="name-icon" className="invisible" alt="validation"></img>
          <label className='form-label' 
                 htmlFor="email">Email  <span className='red-asterisk'>*</span>
          </label>
          <input className='form-box' 
                 type="text" 
                 id="email" 
                 name="email" 
                 value={this.state.email} 
                 onChange= {this.handleChange}/>
          <img id="email-icon" className="invisible" alt="validation"></img>
          <label className='form-label' 
                 htmlFor="phone">Telephone Number</label>
          <input className='form-box' 
                 type="text" 
                 id="phone" 
                 name="phone" 
                 value={this.state.phone} 
                 onChange= {this.handleChange}/>
          <label className='form-label' 
                 htmlFor="eventTitle">Title of Social Action</label>
          <input className='form-box' 
                 type="text" 
                 id="eventTitle" 
                 name="eventTitle" 
                 value={this.state.eventTitle} 
                 onChange= {this.handleChange}/>
          <label className='form-label' 
                 htmlFor="description">Description of Social Action   <span className='red-asterisk'>*</span></label>
          <textarea name="description" 
                    id="description" 
                    cols="40" 
                    rows="10" 
                    value={this.state.description} 
                    onChange={this.handleChange}>
          </textarea>
          <img id="des-icon" className="invisible" alt="validation"></img>

          <label className='form-label' htmlFor="date">Date</label>
          <input className='form-box'type="text" id="date" name="date" value={this.state.date} onChange= {this.handleChange}/>
          <label className='form-label' htmlFor="time">Time</label>
          <input className='form-box'type="text" id="time" name="time" value={this.state.time} onChange= {this.handleChange}/>
          <label className='form-label' htmlFor="venue">Venue</label>
          <input className='form-box'type="text" id="venue" name="venue" value={this.state.venue} onChange= {this.handleChange}/>

          <p className='choices-p'>Please check the options applicable to you</p>
          <span className="choices-text">I would like to book space
          <label className='label-checkbox' htmlFor="hireSpace">
          <input className='checkbox'
            type="checkbox"
            id="hireSpace"
            name="hireSpace"
            checked={this.state.hireSpace}
            onChange={this.handleChange}
          />
          </label>
          </span>

          <span className="choices-text">I would like to list this event
          <label className="label-checkbox" htmlFor="listEvent">
            <input className='checkbox'
              type="checkbox"
              id="listEvent"
              name="listEvent"
              checked={this.state.listEvent}
              onChange={this.handleChange}
            />
          </label>
          </span>
          <button className="button-large button-large-two" type="submit" onClick={this.handleSubmit} >Submit</button>
        </form>
    </main>
    )
  }
}

export default ListEvent;