import React from 'react';
import { render } from 'react-testing-library';
 

class Error extends React.Component {
    render(){
    return(
        <div data-testid="error">
            <h1 className='error-h1'>Error 404</h1>
        </div>
)
    }
}

export default Error;