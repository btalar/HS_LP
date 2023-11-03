import * as React from 'react'
import { Global, css } from '@emotion/core'
import normalize from '../styles/defaults/normalize'
import StyledLayoutRoot from '../styles/StyledLayoutRoot'

interface LayoutRootProps {
  className?: string
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className }) => (
  <>
    <Global styles={() => css(normalize)} />
    <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
  </>
)

export default LayoutRoot
