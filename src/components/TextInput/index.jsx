import P from 'prop-types';
import './styles.css';


export const TextInput = ( { searchValue, handleChange }) => {

    return(

        <input
          className="text-input"
          placeholder="Busque um post"
          onChange={handleChange}
          value={searchValue}
          type="search"

        />

    );

};

TextInput.propTypes = {
  searchValue: P.string,
  handleChange: P.func.isRequired
}
