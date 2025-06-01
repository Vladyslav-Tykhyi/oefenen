import s from "./SearchBox.module.css";

const SearchBox = ({ setFilter }) => {
  return (
    <div>
      <p className={s.text}>Find contact by name!</p>
      <input
        type="text"
        placeholder="Find by name"
        className={s.input}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
