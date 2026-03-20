import React from 'react';

const Tweet = ({ user, content, timestamp }) => {
    return (
        <div className="tweet">
            <h3>{user}</h3>
            <p>{content}</p>
            <span>{new Date(timestamp).toLocaleString()}</span>
        </div>
    );
};

export default Tweet;