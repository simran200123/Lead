import { useState } from 'react'
import First from './first.jsx'

function App() {
 const sname='Saxena'

  return (
    <>
    <First/>      {/*component made in react component should always start with capitaal letter ,file extension should be  jsx  */}
     <h1>Simran {sname}!!</h1>
    </>
  )
}

export default App
