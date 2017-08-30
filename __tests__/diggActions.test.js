import * as diggAction from '../src/actions/diggActions'

describe('actions', () => {
    it('should create an action to add a Digg', () => {
        const mockTopic = 'testing topic'
        const expectedAction = {
            type: diggAction.ADD_DIGG,
            topic: mockTopic,
        }

        expect(diggAction.addDigg(mockTopic)).toEqual(expectedAction)
    })

    it('should create an action to upvote a Digg', () => {
        const mockId = 1
        const mockListIndex = 1
        const expectedAction = {
            type: diggAction.UPVOTE_DIGG,
            id: mockId,
            listIndex: mockListIndex,
        }

        expect(diggAction.upvoteDigg(mockId, mockListIndex)).toEqual(expectedAction)
    })

    it('should create an action to downvote a Digg', () => {
        const mockId = 1
        const mockListIndex = 1
        const expectedAction = {
            type: diggAction.DOWNVOTE_DIGG,
            id: mockId,
            listIndex: mockListIndex,
        }

        expect(diggAction.downvoteDigg(mockId, mockListIndex)).toEqual(expectedAction)
    })
})
