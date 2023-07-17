import React from "react"

//this functional component reps an individal user in the searc results
//avatar: users avatar img url
//url: user's url
//username: github username
export default function User({ avatar, url, username }) {
    return (
        //renders a div w the users img, a link that opens the user's profile in a new tab
        <div className="user">
            <img src={avatar} alt="profile" width="50" height="50" />
            <a href={url} target="_blank" rel="noopener noreferrer">
                {username}
            </a>
        </div>
    )
}