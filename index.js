
import { tweetsData } from "./data.js";
const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')
const feedDiv = document.getElementById('feed')

tweetBtn.addEventListener('click', function() {

})

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
                                ${tweet.replies.length}
                            </span>
                            <span class="tweet-detail">
                                ${tweet.likes}
                            </span>
                            <span class="tweet-detail">
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
