const Contact = ({ name, number, deleteFunc, id }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => deleteFunc(id)} type="button">
        Delete
      </button>
    </li>
  );
};

export default Contact;
