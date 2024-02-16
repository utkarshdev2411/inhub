// SearchBox.js

import React, { useState } from 'react';
import './searchbox.css'; // Importing CSS for styling
import { Search } from '@styled-icons/material'


const SearchBox = () => {
    //   const [query, setQuery] = useState(''); // State for handling user input
    return (
        
        <div className="search-container">
            <Search size="28" title="Unlock account" fill="grey" />
            <input
                type="text"
                placeholder="Search any account on Instagram"
            />
        </div>
    );
};

export default SearchBox;
