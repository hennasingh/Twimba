
import { tweetsData } from "./data.js";
const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')
const feedDiv = document.getElementById('feed')

tweetBtn.addEventListener('click', function() {

})

document.addEventListener('click', function(event) {
    if(event.target.dataset.like){
        handleLikeClick(event.target.dataset.like)
    }
})

function handleLikeClick(tweetId) {
    const targetTweetObj = tweetsData.filter(function(tweet) {
                return tweet.uuid === tweetId
    })[0] //this will return the first object and not an array form
    targetTweetObj.likes++
    render();
}

function getFeedHtml() {
    let feedHtml = ``
    tweetsData.forEach(function(tweet) {
         feedHtml += `
            <div class="tweet">
                <div class="tweet-inner">
                    <img src="${tweet.profilePic}" class="profile-pic">
                    <div>
                        <p class="handle">${tweet.handle}</p>
                        <p class="tweet-text">${tweet.tweetText}</p>
                        <div class="tweet-details">
                            <span class="tweet-detail">
                                <i class="fa-regular fa-comment-dots" data-reply="${tweet.uuid}"></i>
                                ${tweet.replies.length}
                            </span>
                            <span class="tweet-detail">
                                <i class="fa-solid fa-heart" data-like="${tweet.uuid}"></i>
                                ${tweet.likes}
                            </span>
                            <span class="tweet-detail">
                            <i class="fa-solid fa-retweet" data-retweet="${tweet.uuid}"></i>
                                ${tweet.retweets}
                            </span>
                        </div>
                     </div>
                </div>
            </div>
        `
    })
    return feedHtml
}

function render() {
    feedDiv.innerHTML = getFeedHtml()
}

render()
