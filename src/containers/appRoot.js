import {connect} from 'react-redux'
import _ from 'lodash'
import App from '../components/app'
import {
    addDigg,
    upvoteDigg,
    downvoteDigg,
} from '../actions/diggActions'

const mapStateToProps = state => ({
    // pass the digg list as props
    // since the diggList is already sorted by upvote count descending,
    // just return a maximum size of 20, and query the digg content from diggsById
    diggList: _(state.diggList).take(20).map(diggId => state.diggsById[diggId]).value(),
    totalDiggCount: state.diggList.length,
})

const mapDispatchToProps = dispatch => ({
    onAddDigg: topic => dispatch(addDigg(topic)),
    onUpvoteDigg: (id, listIndex) => dispatch(upvoteDigg(id, listIndex)),
    onDownvoteDigg: (id, listIndex) => dispatch(downvoteDigg(id, listIndex)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)
