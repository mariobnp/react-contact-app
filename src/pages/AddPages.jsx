import React from "react";
import { addContact } from "../utils/api";
import ContactInput from "../components/ContactInput";
import { useNavigate } from "react-router-dom";

function AddPages() {
    const navigate = useNavigate();

    async function addContactHandler(contact) {
        await addContact(contact)
        navigate('/')
    }

    return(
        <section>
            <h2>Tambah Kontak</h2>
            <ContactInput addContact={addContactHandler} />
        </section>
    )
}

export default AddPages;