import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import configureStore from 'configure-store'

import { RootTemplate } from 'ui'

import { HomePage } from 'components/pages/home-page'
import { NotFoundPage } from 'components/pages/not-found-page'

const store = configureStore();

export default () => (
  <RootTemplate>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </Provider>
  </RootTemplate>
)
