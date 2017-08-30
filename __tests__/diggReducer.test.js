import diggReducer from '../src/reducers/diggReducer'
import * as diggAction from '../src/actions/diggActions'

const mockState = {
    diggCount: 1,
    diggsById: {
        0: {
            id: 0,
            topic: 'test topic',
            upvote: 0,
            downvote: 0,
        },
        1: {
            id: 1,
            topic: 'test topic 1',
            upvote: 0,
            downvote: 0,
        },
    },
    diggList: [
        0,
        1,
    ],
}

describe('reducer', () => {
    it('should return the initial state', () => {
        const expectedInitialState = {
            diggCount: 0,
            diggsById: {},
            diggList: [],
        }

        expect(diggReducer(undefined, {})).toEqual(expectedInitialState)
    })

    it('should handle ADD_DIGG action', () => {
        const mockAction = {
            type: diggAction.ADD_DIGG,
            topic: 'test topic',
        }
        const expectedNextState = {
            diggCount: 1,
            diggsById: {
                0: {
                    id: 0,
                    topic: 'test topic',
                    upvote: 0,
                    downvote: 0,
                },
            },
            diggList: [0],
        }

        expect(diggReducer(undefined, mockAction)).toEqual(expectedNextState)
    })

    it('should handle UPVOTE_DIGG action', () => {
        const mockAction = {
            type: diggAction.UPVOTE_DIGG,
            id: 1,
            listIndex: 1,
        }
        // expected diggList to sort by the updated upvote count
        const expectedNextState = Object.assign({}, mockState, {
            diggsById: Object.assign({}, mockState.diggsById, {
                [mockAction.id]: Object.assign({}, mockState.diggsById[mockAction.id], {
                    upvote: 1,
                }),
            }),
            diggList: [
                1,
                0,
            ],
        })

        expect(diggReducer(mockState, mockAction)).toEqual(expectedNextState)
        // test when the key is not found in diggsById
        expect(diggReducer(mockState, Object.assign({}, mockAction, {id: 2}))).toEqual(mockState)
    })

    it('should handle DOWNVOTE_DIGG action', () => {
        const mockAction = {
            type: diggAction.DOWNVOTE_DIGG,
            id: 1,
            listIndex: 1,
        }
        const expectedNextState = Object.assign({}, mockState, {
            diggsById: Object.assign({}, mockState.diggsById, {
                [mockAction.id]: Object.assign({}, mockState.diggsById[mockAction.id], {
                    downvote: 1,
                }),
            }),
            diggList: [
                0,
                1,
            ],
        })

        expect(diggReducer(mockState, mockAction)).toEqual(expectedNextState)
        // test when the key is not found in diggsById
        expect(diggReducer(mockState, Object.assign({}, mockAction, {id: 2}))).toEqual(mockState)
    })
})
