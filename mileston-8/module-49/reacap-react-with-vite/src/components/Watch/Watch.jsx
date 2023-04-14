import React, { useState } from 'react';

const Watch = () => {
    const [staps, setStaps] = useState(0)
     const countingStataps = () => setStaps(staps + 1)
    return (
        <div>
            <h2>Staps: {staps}</h2>
            <button onClick={countingStataps}>Click</button>
        </div>
    );
};

export default Watch;