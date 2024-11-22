import React from "react";

const TextArea = ({value, onChange}) => {
    return (
        <>
            <textarea className="note-input__body" placeholder="Tuliskan catatanmu disini ..." value={value} onChange={onChange} required></textarea>
        </>
    )
}

export default TextArea;