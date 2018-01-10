import React from 'react'
import { Link } from 'react-router-dom'

import { ContentTemplate } from 'ui/templates'


export const NotFoundPage = () => (
  <ContentTemplate>
    <h2>Page not found</h2>
    <p>Go to <Link to="/">home</Link> and repeat</p>
  </ContentTemplate>
)
