import React from 'react'
import PropTypes from 'prop-types'
import TopicInput from './topicInput'
import DiggItem from './diggItem'

class App extends React.Component {
    constructor() {
        super()

        this.onSubmitNewTopic = this.onSubmitNewTopic.bind(this)
        this.onVoteDigg = this.onVoteDigg.bind(this)
    }

    onSubmitNewTopic(topic) {
        const {onAddDigg} = this.props

        // dispatch action to save a Digg to store
        onAddDigg(topic)
    }

    onVoteDigg(id, voteType) {
        const {
            onUpvoteDigg,
            onDownvoteDigg,
        } = this.props

        switch (voteType) {
        case 'UP':
            // dispatch action to upvote a Digg
            onUpvoteDigg(id)
            break
        case 'DOWN':
            // dispatch action to downvote a Digg
            onDownvoteDigg(id)
            break
        default:
        }
    }

    render() {
        const {
            diggList,
            totalDiggCount,
        } = this.props

        return (
            <div className='content-wrap'>
                <h1 className='title'>Carousell Digg</h1>
                <div className='author'>by Mike Liu</div>
                <TopicInput
                    onSubmitNewTopic={this.onSubmitNewTopic}
                />
                <div className='digg-list'>
                    <div className='paging-info'>
                        total {totalDiggCount} diggs, {`${totalDiggCount > 0
                            ? `showing top ${diggList.length}`
                            : 'write some topic now!'}`
                        }
                    </div>
                    {
                        diggList.map(digg => (
                            <DiggItem
                                key={digg.id}
                                id={digg.id}
                                topic={digg.topic}
                                upvoteCount={digg.upvote}
                                downvoteCount={digg.downvote}
                                onVoteDigg={this.onVoteDigg}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

App.propTypes = {
    diggList: PropTypes.array.isRequired,
    totalDiggCount: PropTypes.number.isRequired,
    onAddDigg: PropTypes.func.isRequired,
    onUpvoteDigg: PropTypes.func.isRequired,
    onDownvoteDigg: PropTypes.func.isRequired,
}

export default App
