import s from "./ContactList.module.css";

const ContactList = ({ contacts, handleCloseBTN }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {contacts.map((item) => {
          return (
            <li className={s.list_item} key={item.id}>
              <div className={s.list_item_wrapper}>
                <h2 className={s.userName}>{item.name}</h2>
                <p className={s.userNumber}>{item.number}</p>
              </div>
              <button
                className={s.list_item_delBTN}
                onClick={handleCloseBTN}
                id={item.id}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
