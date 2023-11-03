import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { colors } from './defaults/variables'

export default styled(Link)`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`
