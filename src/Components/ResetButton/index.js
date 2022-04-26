import React from 'react';

// Component for the reset button
const ResetButton = (props) => {

    return (
        <>
            <button className='reset--button' onClick={props.reset}>
                Reset Game!
            </button>    
        </>
    )
}

export default ResetButton;