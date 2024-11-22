import React from "react";
import NoteItem from "./NoteItem";


const NoteList = ({notes, onDelete, onArchive}) => {
    
    return (
        <div className="notes-list">
            {notes.length > 0 ? (
                notes.map((note) => (
                    <NoteItem
                        {...note}
                        note={note}
                        key={note.id}
                        onDelete={onDelete}
                        onArchive={onArchive}
                    />
                ))
            ) : (
                <p className="notes-list__empty-message">Tidak ada catatan</p>
            )}
            
        </div>
    )
}

export default NoteList;