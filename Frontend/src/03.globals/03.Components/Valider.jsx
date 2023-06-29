import React from 'react';

handleClick = (e) => {
    setPrice(e.target.value)
}

function Valider() {
    return (
        <div className="flex justify-end" >
            <button className="sukui-button w-[170px] h-12 text-xl" onClick={handleClick}>Valider</button>
        </div>
    );
}

export default Valider;