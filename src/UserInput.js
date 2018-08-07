import React from 'react'

//userInput component should have/hold an html input element
const input = (props) => {
    return (
        <div>
            {/* added value property to display two-way binding in the Input field for us to be able to display the starting username or the default one der before */}
            <input type="text" onChange={props.whenValueIsChanged} title={props.name} value={props.name}/>
        </div>
    )
}

export default input