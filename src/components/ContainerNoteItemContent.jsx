import React from "react";
import NoteItemTitle from "./NoteItemTitle";
import NoteItemBody from "./NoteItemBody";
import NoteItemDate from "./NoteItemDate";
import { showFormattedDate } from "../utils";


const ContainerNoteItemContent = ({title, createdAt, body}) => {
    return (
        <div className="note-item__content">
            <NoteItemTitle title={title}/>
            <NoteItemDate date={showFormattedDate(createdAt)}/>
            <NoteItemBody content={body}/>
        </div>
    )
}

export default ContainerNoteItemContent;