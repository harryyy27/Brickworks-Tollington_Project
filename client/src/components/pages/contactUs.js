import React from 'react';
import {FormErrors} from './eventComp';
import { NameIcon, EmailIcon, DesIcon } from '../mainPageComponents/img/validationIcon'

class ContactUs extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
    description: '',
    cntWithCommunityAdviser: false,
    trainCommunityAdviser: false,
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
  };

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
      if(process.env.NODE_ENV !== 'test'){
        if(nameValid){
          this.name.updateImg('valid')
        }
        else {
          this.name.updateImg()
        }
      }
      break;
      case 'email':
      //negated emailValid twice as (value.match(..)) gives null or some other value, we need to turn that to boolean, true or false for readability
      emailValid = !(!(value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ) );
      fieldValidationErrors.email = emailValid ? '' : ' is invalid';
      if(process.env.NODE_ENV !== 'test'){
        if(emailValid){
          this.email.updateImg('valid')
        }
        else {
          this.email.updateImg()
        }
    }
      break;
      
      case 'description':
      // descriptionValid = (value != '');
      descriptionValid = (value.length >= 5);
      fieldValidationErrors.description = descriptionValid ? '' : ' is too short' ;
      if(process.env.NODE_ENV !== 'test'){
        if(descriptionValid){
          this.des.updateImg('valid')
        }
        else {
          this.des.updateImg()
        }
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
    this.setState( {formValid: this.state.nameValid && this.state.descriptionValid && this.state.emailValid });
  }

  handleSubmit = event => {
    event.preventDefault();
    if(this.state.formValid){
    
    const data = JSON.stringify({
      startSocialAction: this.state
    });
    console.log('data', data)
    fetch('/api/contactUs', {
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
      
    this.setState({ name: '', email: '', phone: '', description: '', cntWithCommunityAdviser: false,
    trainCommunityAdviser: false, formErrors: {name:'', email: '', description: ''}, nameValid: false,emailValid: false, descriptionValid: false, formValid: false });
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
    <h1>Start a Social Action</h1>
      <form onSubmit={this.handleSubmit}>
      <p className='mobile-p'>Please note that Name, Email and Description are required fields</p>
      <div>
      <FormErrors formErrors={this.state.formErrors} />
      </div>
        <div className='form'>
          <label className='form-label' 
                 htmlFor="name">Name  <span className='red-asterisk'>*</span>
          </label>
          <input className='form-box' 
                 type="text" 
                 id="name" 
                 name="name" 
                 value={this.state.name} 
                 onChange={this.handleChange} />
          <NameIcon ref={(ref)=>{this.name=ref}}/>
          <label className='form-label' 
                 htmlFor="email">Email  <span className='red-asterisk'>*</span>
          </label>
          <input className='form-box' 
                 type="email" 
                 id="email" 
                 name="email" 
                 value={this.state.email} 
                 onChange={this.handleChange} />
          <EmailIcon ref={(ref)=>{this.email = ref}}/>
          <label className='form-label' htmlFor="phone">Telephone Number</label>
          <input className='form-box' 
                 type="text" 
                 id="phone" 
                 name="phone" 
                 value={this.state.phone} 
                 onChange={this.handleChange} />
          <label className='form-label' 
                 htmlFor="description">Description of Social Action  <span className='red-asterisk'>*</span></label>
          <textarea name="description" 
                    id="description" 
                    cols="40" 
                    rows="10" 
                    value={this.state.description} 
                    onChange={this.handleChange}></textarea>
          <DesIcon ref={(ref)=>{this.des=ref}}/>
          
          <p className='choices-p'>Please click on the options that apply</p>
          <span className="choices-text">I want to connect with a local Community Organiser
          <label htmlFor="cntWithCommunityAdviser">
            <input className='checkbox'
              type="checkbox"
              id="cntWithCommunityAdviser"
              name="cntWithCommunityAdviser"
              checked={this.state.cntWithCommunityAdviser}
              onChange={this.handleChange}
            />
          </label>
          </span>
          
          <span className="choices-text">I want to train as a Community Organiser?
          <label htmlFor="trainCommunityAdviser">
            <input className='checkbox'
              type="checkbox"
              id="trainCommunityAdviser"
              name="trainCommunityAdviser"
              checked={this.state.trainCommunityAdviser}
              onChange={this.handleChange}
            />
          </label>
          </span>
        
          <button id="form-button" className="button-large button-large-two" type="submit">Submit</button>
        </div>
      </form>


    </main>
    );
  }
}

export default ContactUs;
