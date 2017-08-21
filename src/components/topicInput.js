import React from 'react'
import PropTypes from 'prop-types'

class TopicInput extends React.Component {
    constructor() {
        super()

        this.state = {
            inputValue: '',
        }

        this.onTextareaChange = this.onTextareaChange.bind(this)
        this.onSubmitButtonClick = this.onSubmitButtonClick.bind(this)
    }

    onTextareaChange(e) {
        const inputValue = e.target.value

        // skip when input exceeds 255 characters
        if (inputValue.length > 255) {
            return
        }

        this.setState({
            inputValue,
        })
    }

    onSubmitButtonClick() {
        const {onSubmitNewTopic} = this.props
        const {inputValue} = this.state

        // skip when input is empty
        if (inputValue.length <= 0) {
            return
        }

        onSubmitNewTopic(inputValue)

        // clear input
        this.setState({
            inputValue: '',
        })
    }

    render() {
        const {inputValue} = this.state

        return (
            <div className='topic-input'>
                <h3 className='input-label'>Write a new topic</h3>
                <textarea
                    className='input-textarea'
                    rows='4'
                    value={inputValue}
                    onChange={this.onTextareaChange}
                />
                <div className='input-wordcount'>{inputValue.length}/255</div>
                <div
                    className='submit-button'
                    role='button'
                    tabIndex={0}
                    onClick={this.onSubmitButtonClick}
                >
                    Submit
                </div>
            </div>
        )
    }
}

TopicInput.propTypes = {
    onSubmitNewTopic: PropTypes.func.isRequired,
}


export default TopicInput
