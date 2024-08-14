import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsSlice";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => dispatch(deleteContact(id))} type="button">
        Delete
      </button>
    </li>
  );
};

export default Contact;
