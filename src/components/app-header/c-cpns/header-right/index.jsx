import React, { memo ,useState,useEffect} from 'react'
import {RightWrapper} from './style'
import IconGlobal from '@/assets/img/svg/icon_global'
import IconMenu from '@/assets/img/svg/icon_menu'
import IconAvatar from '@/assets/img/svg/icon_avatar'
export default memo(function HeaderRight() {
  const [isShowModule,setIsShowModule]=useState(false)

  useEffect(() => {
    const windowHandleClick=()=>{
      setIsShowModule(false)
    }
    window.addEventListener('click',windowHandleClick,true)
  
    return () => {
      window.removeEventListener('click',windowHandleClick,true)
    }
  }, [])
  

  const isShowModuleHandle=()=>{
    setIsShowModule(true)
  }
  return (
    <RightWrapper>
      <div className="btns">
        <div className="btn">登录</div>
        <div className="btn">注册</div>
        <div className="btn">
        <IconGlobal/>  
        </div>
      </div>
      
      <div className="primary" onClick={isShowModuleHandle}>
        <div className="user">
          <IconMenu/>
        </div>
        <div className="user">
          <IconAvatar/>
        </div>
      {isShowModule &&
        (  <div className="module">
        <div className="top">
          <div className="login">注册</div>
          <div className="login">登录</div>
        </div>
        <div className="bottom">
          <div className="help">帮助中心</div>
        </div>
      </div>)
      }
      </div>


    </RightWrapper>
  )
})
