import React from 'react';

import Bike from '../mainPageComponents/img/bike';

class Projects extends React.Component {

componentDidMount = () => {
    window.scrollTo(0,0);
}

render() {
    return(   

    <main className='wrapper'>

    <h1 data-testid="projects-page">Projects</h1>

    {/* {if(process.env.NODE_ENV!== 'test') && */}
    <Bike />
    
    <p className='p-centered'>Brickworks Social Action Hub is making a difference to the lives of local young people by helping them learn new skills and build relationships with local police through bicycle maintenance sessions. Local young people aged 12-16 years old are encouraged and supported to come to Brickworks for six sessions and during the two hours that they are with us they learn how to repair punctures, replace broken cables and align gears and brake pads. The bicycles are donated by the local police and the young people get to keep the bike on successful completion of the course.</p>
    </main>
    )
}
}
export {Projects};