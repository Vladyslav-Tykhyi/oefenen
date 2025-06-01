import s from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <div>
      <p className={s.text}>Find contact by name!</p>
      <input type="text" placeholder="Find by name" className={s.input} />
    </div>
  );
};

export default SearchBox;
