import {
  arrayOf,
  string,
  shape,
} from 'prop-types'


export const NavigationItem = shape({
  to: string.isRequired,
  title: string.isRequired,
})

export const NavigationList = arrayOf(NavigationItem)

export const Profile = shape({
  name: string,
  description: arrayOf(string),
  avatar: string,
})

