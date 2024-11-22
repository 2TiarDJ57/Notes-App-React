import React from "react";
import Button from "./Button";

const ContainerNoteItemAction = ({id, archived, onDelete, onArchive}) => {
    return (
        <div className="note-item__action">
            <Button className='note-item__delete-button' label="Delete"  onClick={() => onDelete(id)}/>
            <Button className='note-item__archive-button' label={archived ? "Pindahkan" : "Arsipkan"}  onClick={() => onArchive(id)}/>
        </div>
    )
}

export default ContainerNoteItemAction;