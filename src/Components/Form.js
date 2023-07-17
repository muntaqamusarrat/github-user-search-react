import React from "react"

//this component reps. the search form for entering the username
//props received to handle the form submission and input field changes
export default function Form({ onSubmit, onChange, value }) {
    return (
        <form className="search-form" onSubmit={onSubmit}>
            <input 
                id="search"
                type="text"
                placeholder="enter username or email"
                onChange={onChange}
                value={value}
            />
            <button type="submit">search</button>
        </form>
    )
}