import React from 'react'

class TopicInput extends React.Component {
    render() {
        return (
            <div className='topic-input'>
                <h3 className='input-label'>Write a new topic</h3>
                <textarea className='input-textarea' rows='4' />
                <div className='input-wordcount'>0/255</div>
                <div className='submit-button'>Submit</div>
            </div>
        )
    }
}

TopicInput.propTypes = {
}


export default TopicInput
