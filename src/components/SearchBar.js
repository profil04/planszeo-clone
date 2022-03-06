import React, { useRef } from 'react'

export default function SearchBar(props) {

  const inputEl = useRef("");

  const getSearchTerm = () => {
    console.log(inputEl.current.value);
    props.searchKeyword(inputEl.current.value);

  }

  return (
    <div className='search-bar'>
        <input type="search" id="search" placeholder="Wpisz tytuł gry"className='prompt' value={props.term} onChange={getSearchTerm} ref={inputEl}></input>
    </div>
  )
}
