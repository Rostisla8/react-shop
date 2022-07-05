import React from 'react';
import './style.css'

const SearchInput = ({searchItem}) => {
    return (
        <div className="Wrapper">
  <div className="Input">
    <input onChange={(event) => {searchItem(event.target.value)}} type="text" id="input" className="Input-text" placeholder="Поиск товара"></input>
    <label className="Input-label">Введите название товара</label>
  </div>
</div>
    );
};

export default SearchInput;