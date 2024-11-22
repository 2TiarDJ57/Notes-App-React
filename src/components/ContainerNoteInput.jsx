import React from "react";
import FormInputNote from "./FormInputNote";

const ContainerInputNote = ({onAddNote}) => {
    return (
        <section className="note-input">
            <h2>Buat Catatan</h2>
            <FormInputNote onAddNote={onAddNote}/>
        </section>
    )
}

export default ContainerInputNote;