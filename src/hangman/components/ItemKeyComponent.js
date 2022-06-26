import React from "react";
export const ItemKeyComponent = () => {
return(
    <div className="flex-container">
{keyState.map(({ key, state }) => (
<ItemKeyComponent
key={key}
myKey={key}
state={state}
handlerClick={handlerClick}
/>
))}
</div>

)
};