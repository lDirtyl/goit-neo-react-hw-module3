import { useId } from 'react';
import css from './SearchBox.module.css';

const SearchBox = ({ search, onChange }) => {
  const searchId = useId();

  const handleSearch = e => {
    onChange(e.target.value);
  };

  return (
    <div className={css['search-wrapper']}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <div className={css['input-wrapper']}>
        <input
          className={css.input}
          type="text"
          placeholder="Enter name "
          value={search}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchBox;
