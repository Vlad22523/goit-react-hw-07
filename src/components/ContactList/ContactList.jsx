import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ listContact, deleteFunc }) => {
  return (
    <>
      <ul className={s.list}>
        {listContact.map(({ id, name, number }) => (
          <Contact
            deleteFunc={deleteFunc}
            name={name}
            number={number}
            key={id}
            id={id}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
