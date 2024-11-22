import React from "react";

const InputTitle = ({value, onChange}) => {
    return (
        <>
            <input type="text" className="note-input__title" placeholder="Ini adalah judul ..." value={value} onChange={onChange} maxLength={50} required/>
        </>
    )
}

export default InputTitle;