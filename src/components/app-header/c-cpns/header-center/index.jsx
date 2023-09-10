import React, { memo } from 'react'
import {CenterWrapper} from './style'
import IconSearchBar from '@/assets/img/svg/icon-search-bar'
export default memo(function HeaderCenter() {
  return (
    <CenterWrapper>
      <div className="input">
        请输入名称
      </div>
      <div className="search">
        <IconSearchBar/>
      </div>
    </CenterWrapper>
  )
})
