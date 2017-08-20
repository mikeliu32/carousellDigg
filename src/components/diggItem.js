import React from 'react'
import PropTypes from 'prop-types'

class DiggItem extends React.Component {
    render() {
        const {
            topic,
            upvoteCount,
            downvoteCount,
        } = this.props

        return (
            <div className='digg-item'>
                <p className='digg-topic'>
                    {topic}
                </p>
                <div className='digg-buttons-wrap'>
                    <div className='digg-button upvote-button'>
                        <span className='button-label'>Upvote</span>
                        <span className='button-count'>{upvoteCount}</span>
                    </div>
                    <div className='digg-button downvote-button'>
                        <span className='button-label'>Downvote</span>
                        <span className='button-count'>{downvoteCount}</span>
                    </div>
                </div>
            </div>
        )
    }
}

DiggItem.propTypes = {
    topic: PropTypes.string.isRequired,
    upvoteCount: PropTypes.number.isRequired,
    downvoteCount: PropTypes.number.isRequired,
}

export default DiggItem
