import React from "react";
import ContainerNoteItemAction from "./ContainerNoteItemAction";
import ContainerNoteItemContent from "./ContainerNoteItemContent";

const NoteItem = ({note, onDelete, onArchive}) => {
    return (
        <div className="note-item">
            <ContainerNoteItemContent title={note.title} createdAt={note.createdAt} body={note.body}/>
            <ContainerNoteItemAction id={note.id} archived={note.archived} onDelete={onDelete} onArchive={onArchive}/>
        </div>
    )
}

export default NoteItem;