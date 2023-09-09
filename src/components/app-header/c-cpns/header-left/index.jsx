import React, { memo } from 'react'
import { LeftWrapper} from './style'
import IconLogo from '@/assets/img/svg/logo'
export default memo(function HeaderLeft() {
  return (
    <LeftWrapper>
      <IconLogo></IconLogo>
    </LeftWrapper>
  )
})
