import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import diggReducer from './reducers/diggReducer'
import AppRoot from './containers/appRoot'

// import stylesheet for webpack
import './sass/app.sass'

// create redux store
const store = createStore(diggReducer)

const renderApp = (RootComponent) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <RootComponent />
            </Provider>
        </AppContainer>,
        document.getElementById('app-root'),
    )
}

// render app
renderApp(AppRoot)

// for hot reload
if (module.hot) {
    module.hot.accept('./containers/appRoot', () => renderApp(AppRoot))
}
