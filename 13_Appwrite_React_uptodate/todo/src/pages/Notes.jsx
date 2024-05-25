// import React from 'react'
import { useEffect, useState } from "react"
import { databases } from "../appwrite/config"

export default function Notes(props) {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        init();
    }, [])
    
    const init = async () => {
        const response = await databases.listDocuments(
            import.meta.env.VITE_DATABASE_ID,
            import.meta.env.VITE_COLLECTION_ID_NOTES
        );
    };

    setNotes(response.documents);

    return (
        <div>Notes</div>
    )
}
