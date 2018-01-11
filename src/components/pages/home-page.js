import React from 'react'

import { ContentTemplate } from 'ui/templates'
import { settings } from 'scheme'
import HomeContainer from '../home/home-container'

/* eslint-disable no-magic-numbers */
const tasksList = [
  {
    name: 'First',
    email: 'artem.habrahabrov@gmail.com',
    status: 'opened',
    image: ''
  }
];

export const HomePage = () => (
  <ContentTemplate>
    <HomeContainer />
  </ContentTemplate>
)