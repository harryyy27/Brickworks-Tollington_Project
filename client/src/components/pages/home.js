import React from 'react';
import HomeContent from '../mainPageComponents/img/homeContent';

class Home extends React.Component {

componentDidMount = () => {
  window.scrollTo(0,0);
}

  constructor(props){
  super(props)
  this.state= {
    name: null
  }
  }
  
  addEvent = () => {
    this.props.history.push('/social-actions');
  }

  render() {
    return( 
      <div className='fade-in'>
        <div className='wrapper wrapper-two'>
          <main data-testid="home-page">
          { process.env.NODE_ENV !== 'test' ?
             <HomeContent />:
            null
          }
            <button className='button-large' onClick={this.addEvent}>Get Involved</button>
          </main>
        </div>
      </div>
    )}
}

export default Home;

