import React from 'react'

//userInput component should have/hold an html input element
const input = (props) => {
    return (
        <div>
            <input type="text" onChange={props.whenValueIsChanged}/>
        </div>
    )
}

export default input