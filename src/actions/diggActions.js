export const ADD_DIGG = 'ADD_DIGG'
export const UPVOTE_DIGG = 'UPVOTE_DIGG'
export const DOWNVOTE_DIGG = 'DOWNVOTE_DIGG'

export function addDigg(topic) {
    return {
        type: ADD_DIGG,
        topic,
    }
}

export function upvoteDigg(id, listIndex) {
    return {
        type: UPVOTE_DIGG,
        id,
        listIndex,
    }
}

export function downvoteDigg(id, listIndex) {
    return {
        type: DOWNVOTE_DIGG,
        id,
        listIndex,
    }
}
