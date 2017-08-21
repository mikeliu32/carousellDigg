import {
    ADD_DIGG,
    UPVOTE_DIGG,
    DOWNVOTE_DIGG,
} from '../actions/diggActions'

// defined initial state of the store
const initialState = {
    diggCount: 0,
    diggList: [],
}

const diggReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_DIGG:
        // append new Digg into diggList
        return Object.assign({}, state, {
            diggCount: state.diggCount + 1,
            diggList: [
                ...state.diggList,
                {
                    id: state.diggCount,
                    topic: action.topic,
                    upvote: 0,
                    downvote: 0,
                },
            ],
        })
    case UPVOTE_DIGG:
        // update the upvote count of the specific Digg by the given id
        return Object.assign({}, state, {
            diggList: state.diggList.map((digg) => {
                if (digg.id === action.id) {
                    return Object.assign({}, digg, {
                        upvote: digg.upvote + 1,
                    })
                }

                return digg
            }),
        })
    case DOWNVOTE_DIGG:
        // update the downvote count of the specific Digg by the given id
        return Object.assign({}, state, {
            diggList: state.diggList.map((digg) => {
                if (digg.id === action.id) {
                    return Object.assign({}, digg, {
                        downvote: digg.downvote + 1,
                    })
                }

                return digg
            }),
        })
    default:
        return state
    }
}

export default diggReducer
