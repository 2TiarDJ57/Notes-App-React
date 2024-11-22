import React from "react"
import Brand from "./Brand"
import SearchElement from "./SearchNotes"


const Header = () => {
    return (
        <header className="note-app__header">
            <Brand brand="Notes"/>
            <SearchElement/>
        </header>
    )
}

export default Header;