export const ADD_DIGG = 'ADD_DIGG'
export const UPVOTE_DIGG = 'UPVOTE_DIGG'
export const DOWNVOTE_DIGG = 'DOWNVOTE_DIGG'

export function addDigg(topic) {
    return {
        type: ADD_DIGG,
        topic,
    }
}

export function upvoteDigg(id) {
    return {
        type: UPVOTE_DIGG,
        id,
    }
}

export function downvoteDigg(id) {
    return {
        type: DOWNVOTE_DIGG,
        id,
    }
}
