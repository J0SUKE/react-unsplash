import React, { useContext, useState } from 'react'
import { topicContext,settopicContext } from '../App';

function SearchBar() 
{
    const setCurrentTopic = useContext(settopicContext);

    const [value,setValue] = useState("");

    function submitForm(e) {
        e.preventDefault();
        setCurrentTopic(value);
    }

    function handleInput(e) {
        setValue(e.target.value);
    }

  return (
    <form onSubmit={submitForm}>
        <input type="text" value={value} onInput={handleInput}/>
    </form>
  )
}

export default SearchBar