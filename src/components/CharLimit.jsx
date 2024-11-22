import React from "react";

const CharLimit = ({charLeft}) => {
    return (
        <>

            <p className="note-input__title__char-limit">Sisa Karakter: {charLeft}</p>
        
        </>
    )
}

export default CharLimit;