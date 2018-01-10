import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { themeOr } from 'lib/theme'
import { width, mediaMaxWidth, mediaMaxHeight } from 'lib/sizes'

// import { IconArrow } from '../atoms/icon-arrow'
import { NavigationPanel } from '../organisms'
// import { PersonalCard } from '../molecules'
import { Profile, NavigationList } from '../types'


const colorLight = themeOr(['colors', 'header'], 'white')

const HeaderOrganism = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  position: relative;

  color: ${colorLight};
`

const HeaderWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-grow: 1;
  z-index: 1;
  width: 100%;
  
  align-items: center;
`

const ExpandedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  max-width: ${width.laptop}px;

  ${mediaMaxHeight('mobileLandscape')} {
    height: 100vh;
  }

  ${mediaMaxWidth('mobile')} {
    height: 100vh;
  }
`

const ArrowLine = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
`

const BackgroundImage = styled.div`
  display: block;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  transform: perspective(1000px);
  transform-style: preserve-3d;
  background-size: cover;
  background-position: center center;
`

export const Header = ({
                         profile,
                         backgroundImage,
                         navigationItems,
                       }) => (
  <HeaderOrganism>
    <HeaderWrapper>
      <ExpandedContent>
        {/*<PersonalCard profile={profile} />
            <ArrowLine><IconArrow /></ArrowLine>*/}
      </ExpandedContent>
      <NavigationPanel items={navigationItems}/>
    </HeaderWrapper>
    {/*<BackgroundImage style={{ backgroundImage: `url(${backgroundImage})` }} />*/}
  </HeaderOrganism>
)

Header.propTypes = {
  profile: Profile,
  backgroundImage: PropTypes.string,
  navigationItems: NavigationList,
}

Header.defaultProps = {
  profile: {
    name: 'Sergey Sova',
    description: ['foo', 'bar', 'baz'],
    avatar: 'http://random-image.org/avatar/256x256',
  },
  backgroundImage: 'https://lestad.top/images/neva_river_blur.jpg',
  navigationItems: [],
}

