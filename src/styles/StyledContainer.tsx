import styled from '@emotion/styled'

import { widths } from './defaults/variables'
import { getEmSize } from './defaults/mixins'

export default styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: ${getEmSize(widths.lg)}em;
`
