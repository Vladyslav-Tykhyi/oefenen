import { useEffect, useState } from "react";
import ContactForm from "../ContacntForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import s from "./App.module.css";

const App = () => {
  const [user, setUser] = useState({ name: "", number: "", id: "" });
  const [contact, setContact] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("contacts"));
    if (saved) setContact(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contact));
  }, [contact]);

  const sendData = (e) => {
    e.preventDefault();

    if (!user.name || !user.number) {
      alert("Vul zowel naam als nummer in.");
      return;
    }

    const isDuplicate = contact.some(
      (c) =>
        c.name.trim().toLowerCase() === user.name.trim().toLowerCase() ||
        c.number.trim() === user.number.trim()
    );

    if (isDuplicate) {
      alert("Contact bestaat al.");
      return;
    }

    const newContact = {
      id: crypto.randomUUID(),
      name: user.name,
      number: user.number,
    };

    setContact((prev) => [...prev, newContact]);
    setUser({ name: "", number: "", id: "" });
    e.target.reset();
  };

  const handleCloseBTN = (e) => {
    setContact(() => contact.filter((item) => item.id !== e.target.id));
  };

  const getData = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h1 className={s.header}>Phonebook</h1>
      <ContactForm sendData={sendData} getData={getData} user={user} />
      <SearchBox />
      <ContactList contacts={contact} handleCloseBTN={handleCloseBTN} />
    </div>
  );
};

export default App;
