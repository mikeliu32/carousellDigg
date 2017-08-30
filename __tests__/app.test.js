import React from 'react'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'
import App from '../src/components/app'

describe('containers: App', () => {
    it('should render the App correctly', () => {
        const mockCallBacks = {
            onAddDigg: () => {},
            onUpvoteDigg: () => {},
            onDownvoteDigg: () => {},
        }

        // empty diggList
        let tree = renderer.create(
            <App
                diggList={[]}
                totalDiggCount={0}
                {...mockCallBacks}
            />,
        ).toJSON()

        // expect to match the snapshot
        expect(tree).toMatchSnapshot()

        // with diggs in diggList
        tree = renderer.create(
            <App
                diggList={[{
                    id: 0,
                    topic: 'digg 1 topic',
                    upvote: 10,
                    downvote: 20,
                }, {
                    id: 1,
                    topic: 'digg 2 topic',
                    upvote: 20,
                    downvote: 10,
                }]}
                totalDiggCount={2}
                {...mockCallBacks}
            />,
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })

    it('should callback when submit new topic', () => {
        const mockCallBack = jest.fn()
        const mockInputValue = 'test topic'
        const elApp = shallow(
            <App
                diggList={[]}
                totalDiggCount={0}
                onAddDigg={mockCallBack}
                onUpvoteDigg={() => {}}
                onDownvoteDigg={() => {}}
            />,
        )

        // trigger submit new topic
        elApp.find('TopicInput').first().props().onSubmitNewTopic(mockInputValue)

        expect(mockCallBack.mock.calls.length).toBe(1)
        expect(mockCallBack.mock.calls[0][0]).toBe(mockInputValue)
    })

    it('should callback when upvote/downvote a topic', () => {
        const mockUpvoteCallBack = jest.fn()
        const mockDownvoteCallBack = jest.fn()

        const elApp = shallow(
            <App
                diggList={[{
                    id: 0,
                    topic: 'digg 1 topic',
                    upvote: 10,
                    downvote: 20,
                }, {
                    id: 1,
                    topic: 'digg 2 topic',
                    upvote: 20,
                    downvote: 10,
                }]}
                totalDiggCount={2}
                onAddDigg={() => {}}
                onUpvoteDigg={mockUpvoteCallBack}
                onDownvoteDigg={mockDownvoteCallBack}
            />,
        )

        // trigger upvote/downvote a topic
        elApp.find('DiggItem').first().props().onVoteDigg(1, 1, 'UP')
        elApp.find('DiggItem').first().props().onVoteDigg(1, 1, 'DOWN')
        elApp.find('DiggItem').first().props().onVoteDigg(1, 1, 'invalid vote type')

        expect(mockUpvoteCallBack.mock.calls.length).toBe(1)
        expect(mockUpvoteCallBack.mock.calls[0][0]).toBe(1)

        expect(mockDownvoteCallBack.mock.calls.length).toBe(1)
        expect(mockDownvoteCallBack.mock.calls[0][0]).toBe(1)
    })
})
