import React from 'react';
import List from '../mainPageComponents/list'
class Resources extends React.Component {

componentDidMount = () => {
    if(process.env.NODE_ENV !=="test"){
    window.scrollTo(0,0);
    }
    

}
    
render() {
    return(
    <main className='wrapper'>
        <List />
        <div className='resource-links'> 

        <hr className="style2"></hr>
        <br></br>

        <p className='question'>Here are some useful links to get you started:</p>
            <div className='resource-link'>
            <a className='a-links a-links-two' href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/591797/A_description_of_social_action.pdf" target="_blank">A description of social action</a>
            <a className='a-links a-links-two' href='https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/591799/Leadership_and_culture_change_to_enable_social_action.pdf' target="_blank">Leadership and culture change</a>
            <a className='a-links a-links-two' href='https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/591805/Enabling_social_action_methodology.pdf' target="_blank">Methodology</a>
            </div>
        </div> 
    </main>
    )
    }
}
export {Resources};