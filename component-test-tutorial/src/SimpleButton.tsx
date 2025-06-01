import React, { useState } from 'react';

export const SimpleButton: () => React.JSX.Element = () => {
    const [state, setState] = useState(false);
    const handleClick = () => {
        setState((prevState) => !prevState);
    };
    return (
        <button onClick={handleClick}>
            {state ? "ON" : "OFF"}
        </button>
    );
};