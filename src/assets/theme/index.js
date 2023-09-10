const theme={
color:{
  primary: '#57509e',
  secondary: 'skyblue'
},
  mixin: {
    boxShadow: `
      transition: box-shadow 200ms ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,.18);
        cursor: pointer;
      }
    `  
  }


}
export default theme;