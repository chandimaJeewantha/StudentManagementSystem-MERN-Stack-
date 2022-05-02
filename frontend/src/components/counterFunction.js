//import React from "react";
import React, { useState } from 'react';

function counterFunction() {

    const [count, setCount] = useState(0);

    return(

        <div>
            <p>Function based component example</p>
            <h1>Counter = {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default counterFunction;