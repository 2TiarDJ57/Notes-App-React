import React, {useState} from "react";
import InputTitle from "./InputTitle";
import CharLimit from "./CharLimit";
import TextArea from "./TextArea";
import SubmitButton from "./SubmitButton";

const FormInputNote = ({onAddNote}) => {

    // State untuk input form
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

        // Fungsi untuk menangani pengiriman form
        const handleSubmit = (e) => {
            e.preventDefault();

            // Buat objek catatan baru
            const newNote = {
                id: +new Date(), // Gunakan timestamp sebagai ID unik
                title,
                body,
                createdAt: new Date(),
            };

            // Panggil fungsi onAddNote untuk menambahkan catatan
            onAddNote(newNote);

            // Reset form
            setTitle('');
            setBody('');
        }

        return (
            <form onSubmit={handleSubmit}>
                <CharLimit charLeft={50 - title.length}/>
                <InputTitle  value={title} onChange={(e) => setTitle(e.target.value)}/>
                <TextArea value={body} onChange={(e) => setBody(e.target.value)}/>
                <SubmitButton/>
            </form>
        )
}

export default FormInputNote;