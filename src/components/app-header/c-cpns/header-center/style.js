import styled from 'styled-components'
export const CenterWrapper=styled.div`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #eee;
padding:6px;
border-radius: 30px;
&:hover{
    ${props=>props.theme.mixin.boxShadow}
  }
.input{
  width:190px;
  padding-left: 20px;
  color: #717171;
}
.search{
  background-color: ${props=>props.theme.color.primary};
  padding: 10px;
  border-radius:50%;
  color:#fff;
  &:hover{
    ${props=>props.theme.mixin.boxShadow}
  }
}
`