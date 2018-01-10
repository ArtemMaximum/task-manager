import React from 'react'
import cn from 'classnames'

/* eslint-disable react/prop-types */

export function createComponent(name, modules, Tag = 'div') {
  const component = ({ children, className, ...props }) =>
    <Tag {...props} className={cn(modules[name], className)}>{children}</Tag>

  component.displayName = `CSSModules(${name})`

  return component
}

export function asComps(cssModules) {
  const all = {}

  Object.keys(cssModules).forEach((name) => {
    all[name] = createComponent(name, cssModules)
  })
  return all
}
