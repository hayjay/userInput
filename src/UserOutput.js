import React from 'react';

const output = (props) => {
    return (
        <div>
            <p> Good morning. Your username is : {props.username}</p>
            <p> Good evening, Your username at the moment is : {props.username}</p>
        </div>
    )
}

export default output