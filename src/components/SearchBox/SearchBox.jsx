import { useId } from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ findContacts, find }) => {
  const id = useId();
  return (
    <>
      <label className={s.label} htmlFor={id}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="findconts"
        value={find}
        id={id}
        onChange={(e) => findContacts(e.target.value)}
      />
    </>
  );
};

export default SearchBox;
