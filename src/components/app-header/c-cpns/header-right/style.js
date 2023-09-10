import styled from 'styled-components'
export const RightWrapper=styled.div`
flex:1;
display: flex;
justify-content: end;
.btns{
  display: flex;
  .btn{
    padding: 12px;
    border-radius:20px ;
    &:hover{
      ${props=>props.theme.mixin.boxShadow}
    }
  }
}
.primary{
  position: relative;
  display: flex;
  border: 1px solid #eee;
  border-radius:20px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
  width: 50px;
  &:hover{
      ${props=>props.theme.mixin.boxShadow}
    }
}

.module{
  background-color: #fff;
  position: absolute;
  width: 200px;
  right: 20px;
  top:50px;
  box-shadow: 0 0 3px 4px rgba(0,0,0,0.2);
  border-radius: 10px;
  .top{
    border-bottom: 1px solid #eee;
    .login{
      padding:10px;
    }
  }
  .bottom{
    .help{
      padding:20px 10px;
    }
  }
}
`