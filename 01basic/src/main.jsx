import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// const ReactElement={
//   type:'a',
//   props:{
//       href:"https://google.com",
//       target:'_blank'
//   },
//   children:'click me to visit'
// }
// in this we have made keys and values according to us but in react we cant make it we use react.createElementto create the object
function  MyApp(){
  return(  <h1>hello</h1>
)
}

const username="saxena"

const ReactEle=React.createElement (
  'a',
  {href:'https://google.com',target:'_blank'},
  'click to visit',
  username
 )

ReactDOM.createRoot(document.getElementById('root')).render(
<>
 <MyApp/>
    <App /> 
    { ReactEle /* this is an object created using react.createElement */}

    </>
  
)
