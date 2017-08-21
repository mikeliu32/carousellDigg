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
    // (sorted by upvote count descending, and has a maximum size of 20)
    diggList: _(state.diggList).orderBy(['upvote'], ['desc']).take(20).value(),
    totalDiggCount: state.diggList.length,
})

const mapDispatchToProps = dispatch => ({
    onAddDigg: topic => dispatch(addDigg(topic)),
    onUpvoteDigg: id => dispatch(upvoteDigg(id)),
    onDownvoteDigg: id => dispatch(downvoteDigg(id)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)
