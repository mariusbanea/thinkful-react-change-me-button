import React from 'react';

export default function ChangeMeButton(props) {
    return (
        <div className="child">
            <h3>{ props.name }</h3>
            <button onClick={() => props.onToggleClick()}>Like</button>
        </div>
        )
}
