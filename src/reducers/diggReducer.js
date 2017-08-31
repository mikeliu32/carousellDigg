import {
    ADD_DIGG,
    UPVOTE_DIGG,
    DOWNVOTE_DIGG,
} from '../actions/diggActions'

const calculatWeighting = (upvote, downvote) => {
    console.log(upvote, downvote)
    return upvote - downvote
}

// defined initial state of the store
const initialState = {
    diggCount: 0,
    diggsById: {},
    diggList: [], // keeps the digg ids by the descending order of upvote count
}

const diggReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_DIGG: {
        const newDiggId = state.diggCount

        return Object.assign({}, state, {
            diggCount: state.diggCount + 1,
            // add Digg to DiggsById, use id as the key
            diggsById: Object.assign({}, state.diggsById, {
                [newDiggId]: {
                    id: newDiggId,
                    topic: action.topic,
                    upvote: 0,
                    downvote: 0,
                },
            }),
            // append new Digg into the end of diggList
            diggList: [
                ...state.diggList,
                newDiggId,
            ],
        })
    }
    case UPVOTE_DIGG: {
        if (!Object.prototype.hasOwnProperty.call(state.diggsById, action.id)) {
            return state
        }

        // update the upvote count of the specific Digg by the given id
        const targetDigg = state.diggsById[action.id]
        const newDiggsById = Object.assign({}, state.diggsById, {
            [action.id]: Object.assign({}, targetDigg, {
                upvote: targetDigg.upvote + 1,
            }),
        })

        const newList = state.diggList.slice()
        let flag = action.listIndex

        // To make diggList keep the descending order of the upvote count,
        // swap the updated digg with the previous digg if it has a greater upvote count
        while (
            flag > 0
            && (calculatWeighting(newDiggsById[newList[flag]].upvote, newDiggsById[newList[flag]].downvote))
            >= (calculatWeighting(newDiggsById[newList[flag - 1]].upvote, newDiggsById[newList[flag - 1]].downvote))
        ) {
            const tempId = newList[flag - 1]
            newList[flag - 1] = newList[flag]
            newList[flag] = tempId

            flag -= 1
        }

        return Object.assign({}, state, {
            diggsById: newDiggsById,
            diggList: newList,
        })
    }
    case DOWNVOTE_DIGG: {
        if (!Object.prototype.hasOwnProperty.call(state.diggsById, action.id)) {
            return state
        }

        // update the downvote count of the specific Digg by the given id
        const targetDigg = state.diggsById[action.id]
        const newDiggsById = Object.assign({}, state.diggsById, {
            [action.id]: Object.assign({}, targetDigg, {
                downvote: targetDigg.downvote + 1,
            }),
        })

        const newList = state.diggList.slice()
        let flag = action.listIndex

        // To make diggList keep the descending order of the upvote count,
        // swap the updated digg with the previous digg if it has a greater upvote count
        while (
            flag < newList.length - 1
            && (calculatWeighting(newDiggsById[newList[flag]].upvote, newDiggsById[newList[flag]].downvote))
            <= (calculatWeighting(newDiggsById[newList[flag + 1]].upvote, newDiggsById[newList[flag + 1]].downvote))
        ) {
            const tempId = newList[flag + 1]
            newList[flag + 1] = newList[flag]
            newList[flag] = tempId

            flag += 1
        }

        return Object.assign({}, state, {
            diggsById: newDiggsById,
            diggList: newList,
        })
    }
    default:
        return state
    }
}

export default diggReducer
