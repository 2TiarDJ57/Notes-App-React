import React from "react";

const Button = ({className, onClick, id, label}) => {
    return (
        <>
            <button className={className} id={id} onClick={onClick}>{label}</button>
        </>
    )
}

export default Button;