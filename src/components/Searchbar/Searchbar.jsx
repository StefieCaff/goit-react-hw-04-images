import { func } from "prop-types";
import { useState } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
    StyledForm,
    StyledInput
} from "./styled-searchbar";

const Searchbar = ({ onSubmit}) => {
    
    const [query, setQuery] = useState('');
    
    const handleChange = e => {
        const userInput = e.currentTarget.value.toLowerCase().trim()
        setQuery(userInput);

        console.log(query);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (query === "") {
            setQuery('');
            Notify.info('Please enter a search query');
            return;
        }
        onSubmit(query);
        setQuery('');
    }
    
    return (
        <StyledForm onSubmit={handleSubmit}>
            <div>
                <label htmlFor="text-search"></label>
                    <StyledInput
                        name="text-search"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="search"
                        onChange = {handleChange}
                />
                <button type="submit" >
                    <span className="hidden">Search</span>
                </button>
            </div>
            </StyledForm>
    )
};


Searchbar.propTypes = {
    onSubmit: func.isRequired,
};

export { Searchbar };