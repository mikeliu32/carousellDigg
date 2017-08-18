import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import App from './components/app'

const renderApp = (RootComponent) => {
    ReactDOM.render(
        <AppContainer>
            <RootComponent />
        </AppContainer>,
        document.getElementById('app-root'),
    )
}

renderApp(App)

if (module.hot) {
    module.hot.accept('./components/app', () => renderApp(App))
}
