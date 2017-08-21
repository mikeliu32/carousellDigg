import React from 'react'
import PropTypes from 'prop-types'

const DiggItem = ({
    id,
    topic,
    upvoteCount,
    downvoteCount,
    onVoteDigg,
}) => {
    const onUpvoteClick = () => onVoteDigg(id, 'UP')
    const onDownvoteClick = () => onVoteDigg(id, 'DOWN')

    return (
        <div className='digg-item'>
            <div className='digg-id'>#{id}</div>
            <p className='digg-topic'>
                {topic}
            </p>
            <div className='digg-buttons-wrap'>
                <div
                    className='digg-button upvote-button'
                    role='button'
                    tabIndex={0}
                    onClick={onUpvoteClick}
                >
                    <span className='button-label'>Upvote</span>
                    <span className='button-count'>{upvoteCount}</span>
                </div>
                <div
                    className='digg-button downvote-button'
                    role='button'
                    tabIndex={0}
                    onClick={onDownvoteClick}
                >
                    <span className='button-label'>Downvote</span>
                    <span className='button-count'>{downvoteCount}</span>
                </div>
            </div>
        </div>
    )
}

DiggItem.propTypes = {
    id: PropTypes.number.isRequired,
    topic: PropTypes.string.isRequired,
    upvoteCount: PropTypes.number.isRequired,
    downvoteCount: PropTypes.number.isRequired,
    onVoteDigg: PropTypes.func.isRequired,
}

export default DiggItem
