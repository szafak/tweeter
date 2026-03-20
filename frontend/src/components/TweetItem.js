import React from 'react';
import PropTypes from 'prop-types';

const TweetItem = ({ tweet, onLike, onRetweet, onReply }) => {
    return (
        <div className="tweet-item">
            <p>{tweet.content}</p>
            <div className="tweet-actions">
                <button onClick={() => onLike(tweet.id)}>Like</button>
                <button onClick={() => onRetweet(tweet.id)}>Retweet</button>
                <button onClick={() => onReply(tweet.id)}>Reply</button>
            </div>
        </div>
    );
};

TweetItem.propTypes = {
    tweet: PropTypes.shape({
        id: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
    }).isRequired,
    onLike: PropTypes.func.isRequired,
    onRetweet: PropTypes.func.isRequired,
    onReply: PropTypes.func.isRequired,
};

export default TweetItem;
