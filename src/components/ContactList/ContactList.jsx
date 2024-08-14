import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectContacts } from "../../redux/contacts/selectors";
import { selectFilters } from "../../redux/filters/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);

  const filteredContacts = contacts.filter((cont) =>
    cont.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ul className={s.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <Contact name={name} number={number} key={id} id={id} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
