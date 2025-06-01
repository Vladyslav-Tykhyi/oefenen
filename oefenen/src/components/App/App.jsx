import { useEffect, useState } from "react";
import ContactForm from "../ContacntForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import s from "./App.module.css";

const App = () => {
  const [user, setUser] = useState({ name: "", number: "", id: "" });
  const [contact, setContact] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("contacts"));
    return saved ? saved : [];
  });
  const [filter, setFilter] = useState("");

  const sendData = (e) => {
    e.preventDefault();

    const newContact = {
      id: crypto.randomUUID(),
      name: user.name,
      number: user.number,
    };

    setContact((prev) => [...prev, newContact]);
    setUser({ name: "", number: "", id: "" });
  };

  const handleCloseBTN = (id) => {
    setContact((prev) => prev.filter((item) => item.id !== id));
  };

  const getData = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value, id: crypto.randomUUID() }));
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contact));
  }, [contact]);

  const filterContacts = () => {
    if (filter.trim().length < 2) return contact;
    return contact.filter((c) =>
      c.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <h1 className={s.header}>Phonebook</h1>
      <ContactForm sendData={sendData} getData={getData} user={user} />
      <SearchBox setFilter={setFilter} />
      <ContactList
        contacts={filterContacts()}
        handleCloseBTN={handleCloseBTN}
      />
    </div>
  );
};

export default App;
