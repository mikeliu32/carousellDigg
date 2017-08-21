import diggReducer from '../src/reducers/diggReducer'
import * as diggAction from '../src/actions/diggActions'

const mockState = {
    diggCount: 1,
    diggList: [{
        id: 0,
        topic: 'test topic',
        upvote: 0,
        downvote: 0,
    }],
}

describe('reducer', () => {
    it('should return the initial state', () => {
        const expectedInitialState = {
            diggCount: 0,
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
            diggList: [{
                id: 0,
                topic: 'test topic',
                upvote: 0,
                downvote: 0,
            }],
        }

        expect(diggReducer(undefined, mockAction)).toEqual(expectedNextState)
    })

    it('should handle UPVOTE_DIGG action', () => {
        const mockAction = {
            type: diggAction.UPVOTE_DIGG,
            id: 0,
        }
        const expectedNextState = Object.assign({}, mockState, {
            diggList: [
                Object.assign({}, mockState.diggList[0], {
                    upvote: 1,
                }),
            ],
        })

        expect(diggReducer(mockState, mockAction)).toEqual(expectedNextState)
    })

    it('should handle DOWNVOTE_DIGG action', () => {
        const mockAction = {
            type: diggAction.DOWNVOTE_DIGG,
            id: 0,
        }
        const expectedNextState = Object.assign({}, mockState, {
            diggList: [
                Object.assign({}, mockState.diggList[0], {
                    downvote: 1,
                }),
            ],
        })

        expect(diggReducer(mockState, mockAction)).toEqual(expectedNextState)
    })
})
