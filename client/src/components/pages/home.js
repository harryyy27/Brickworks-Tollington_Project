import React from 'react';
import HomeContent from '../mainPageComponents/img/homeContent';

class Home extends React.Component {

componentDidMount = () => {
  if(process.env.NODE_ENV !== "test"){
  window.scrollTo(0,0);
  }
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
      // <div className='fade-in'>
        <div className='wrapper wrapper-two'>
          <main data-testid="home-page">
          <div className='home-div'>
            <h1 className='brickworks'>BRICKWORKS</h1>
          </div>
          { process.env.NODE_ENV !== 'test' ?
             <HomeContent />:
            null
          }
          <figcaption className='intro'>Brickworks is a social-action hub rooted in Tollington that actively fosters grass-roots action and supports local people to build the community and create a better society
          </figcaption>
          <button data-testid="home-button" className='button-large-home' onClick={this.addEvent}>Get Involved</button>
          </main>
        </div>
    )}
}
export default Home;

