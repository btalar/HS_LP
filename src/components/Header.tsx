import * as React from 'react'

import StyledHeader from '../styles/StyledHeader'
import HeaderInner from '../styles/HeaderInner'
import HomepageLink from '../styles/HomepageLink'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/">{title}</HomepageLink>
    </HeaderInner>
  </StyledHeader>
)

export default Header
