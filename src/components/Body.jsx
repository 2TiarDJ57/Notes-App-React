import React, { useState } from 'react';
import ContainerInputNote from './ContainerNoteInput';
import NoteList from './NoteList';
import { getInitialData } from '../utils';

const Body = () => {
    // State 
    const [notes, setNotes] = useState(getInitialData());

    // Fungsi Delete Note
    const handleDelete = (id) => {
        setNotes(notes.filter((note) => 
            note.id !== id
        ));
    }

    // Fungsi tambah note
    const handleAddNote = (newNote) => {
        setNotes([...notes, newNote]);
    }

    // Fungsi Archive Note
    const handleArchive = (id) => {
        setNotes(notes.map((note) => 
            note.id === id ? { ...note, archived: !note.archived } : note
        ));
    };

    return (

        <main className='note-app__body'>
            <ContainerInputNote onAddNote={handleAddNote}/>
            <h2>Catatan Aktif</h2>
            <NoteList notes={notes.filter((note) => !note.archived)} onDelete={handleDelete} onArchive={handleArchive}/>
            <h2>Catatan Diarsipkan</h2>
            <NoteList notes={notes.filter((note) => note.archived)} onDelete={handleDelete} onArchive={handleArchive}/>
        </main>
    )
}

export default Body;