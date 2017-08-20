import React from 'react'
import TopicInput from './topicInput'
import DiggItem from './diggItem'

class App extends React.Component {
    render() {
        return (
            <div className='content-wrap'>
                <h1 className='title'>Carousell Digg</h1>
                <TopicInput />
                <div className='digg-list'>
                    <DiggItem
                        topic='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies hendrerit efficitur. Vivamus suscipit suscipit ex quis auctor. Aenean hendrerit elit id consequat sagittis. Donec nibh turpis, ullamcorper nec euismod in, mollis sit amet posuere.'
                        upvoteCount={20}
                        downvoteCount={30}
                    />
                    <DiggItem
                        topic='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies hendrerit efficitur. Vivamus suscipit suscipit ex quis auctor. Aenean hendrerit elit id consequat sagittis. Donec nibh turpis, ullamcorper nec euismod in, mollis sit amet posuere.'
                        upvoteCount={20}
                        downvoteCount={30}
                    />
                </div>
            </div>
        )
    }
}

export default App
