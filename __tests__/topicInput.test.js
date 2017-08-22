import React from 'react'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'
import TopicInput from '../src/components/topicInput'

describe('component: TopicInput', () => {
    it('should render the TopicInput correctly', () => {
        const tree = renderer.create(
            <TopicInput
                onSubmitNewTopic={() => {}}
            />,
        ).toJSON()

        // expect to match the snapshot
        expect(tree).toMatchSnapshot()
    })

    it('should response to textarea input change ', () => {
        const mockInput = 'test input topic'
        const elTopicInput = shallow(
            <TopicInput
                onSubmitNewTopic={() => {}}
            />,
        )

        // simulate textarea input change
        elTopicInput.find('textarea').simulate('change', {
            target: {
                value: mockInput,
            },
        })

        expect(elTopicInput.find('textarea').props().value).toBe(mockInput)
        expect(elTopicInput.find('.input-wordcount').text()).toBe(`${mockInput.length}/255`)


        // simulate textarea input exceeds 255 characters
        const mockExceedsInput = new Array(256).join('a')

        // input 255 characters
        elTopicInput.find('textarea').simulate('change', {
            target: {
                value: mockExceedsInput,
            },
        })

        // then, input the 256 character, should be ignored
        elTopicInput.find('textarea').simulate('change', {
            target: {
                value: `${mockExceedsInput}b`,
            },
        })

        expect(elTopicInput.find('textarea').props().value).toBe(mockExceedsInput)
        expect(elTopicInput.find('.input-wordcount').text()).toBe('255/255')
    })

    it('should callback when click submit button', () => {
        const mockInput = 'test input topic'
        const mockCallBack = jest.fn()
        const elTopicInput = shallow(
            <TopicInput
                onSubmitNewTopic={mockCallBack}
            />,
        )

        // simulate click submit button
        elTopicInput.find('.submit-button').simulate('click')

        // should not callback when click submit button with empty input value
        expect(mockCallBack.mock.calls.length).toBe(0)

        // set input value
        elTopicInput.setState({
            inputValue: mockInput,
        })

        // simulate click submit button
        elTopicInput.find('.submit-button').simulate('click')

        expect(mockCallBack.mock.calls.length).toBe(1)
        expect(mockCallBack.mock.calls[0][0]).toBe(mockInput)
    })
})
