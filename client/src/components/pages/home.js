import React from 'react';

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
        <div className='wrapper-two'>
          <main data-testid="home-page">
          <div className='home-div'>
            <h1 className='brickworks'>BRICKWORKS</h1>
          </div>
          
          <p className='intro'>Brickworks is a social-action hub rooted in Tollington that actively fosters grass-roots action and supports local people to build the community and create a better society
          </p>
          <button data-testid="home-button" className='button-large-home' onClick={this.addEvent}>Get Involved</button>
          </main>
        </div>
    )}
}
export default Home;

