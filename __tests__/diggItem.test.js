import React from 'react'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'
import DiggItem from '../src/components/diggItem'

describe('component: DiggItem', () => {
    it('should render the DiggItem correctly', () => {
        const tree = renderer.create(
            <DiggItem
                id={0}
                topic='Test Digg Item Topic'
                upvoteCount={10}
                downvoteCount={20}
                onVoteDigg={() => {}}
            />,
        ).toJSON()

        // expect to match the snapshot
        expect(tree).toMatchSnapshot()
    })

    it('should callback when clicked upvote/downvote button', () => {
        const mockCallBack = jest.fn()
        const elDiggItem = shallow(
            <DiggItem
                id={0}
                topic='Test Digg Item Topic'
                upvoteCount={10}
                downvoteCount={20}
                onVoteDigg={mockCallBack}
            />,
        )

        // simulate click upvote button
        elDiggItem.find('.digg-button.upvote-button').simulate('click')

        // simulate click downvote button-label
        elDiggItem.find('.digg-button.downvote-button').simulate('click')

        expect(mockCallBack.mock.calls.length).toBe(2)

        // callback arguments for two clicks
        expect(mockCallBack.mock.calls[0][0]).toBe(0)
        expect(mockCallBack.mock.calls[0][1]).toBe('UP')
        expect(mockCallBack.mock.calls[1][0]).toBe(0)
        expect(mockCallBack.mock.calls[1][1]).toBe('DOWN')
    })
})
