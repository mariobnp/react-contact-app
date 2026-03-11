import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ContactList from "../components/ContactList";
import SearchBar from "../components/SearchBar";
import { deleteContact, getContacts } from "../utils/data";

function HomePage() {
  //   const [contacts, setContacts] = useState(getContacts());
  //   const [keyword, setKeyword] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  function onDeleteHandler(id) {
    deleteContact(id);
  }

  function onKeywordChangeHandler(keyword) {
    setSearchParams({keyword})
  }

  const contacts = getContacts();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(keyword.toLowerCase()),
  );

  return (
    <section>
      <h2>Daftar Kontak</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <ContactList contacts={filteredContacts} onDelete={onDeleteHandler} />
    </section>
  );
}

export default HomePage;
