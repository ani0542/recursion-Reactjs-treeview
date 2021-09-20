import React from 'react'
import File from "./components/File"
import {  root } from './components/data';
function App() {

    // @URL
    // https://dev.to/knowit-development/recursive-components-in-react-37ka#:~:text=%20Recursive%20components%20in%20React%20%201%20Recursion.,achieve%20the%20same%20results%20by%20just...%20More%20
    
    return (
        <>
             <div style={{ marginLeft: 15 }}>
                  <File {...root}/>
            </div>
        </>
    )
}

export default App




