const clickButton = document.getElementById('click');
clickButton.addEventListener('click', getAllTweets);

function getAllTweets() {
  //fetching from 'tweets.js' in my models file
  return fetch('/tweets')
    .then(r => r.json())
    .then(data => {
      renderTweets(data);
    })
    .catch(error => {
      console.log(error);
    })
}

//adding class and tags
function renderTweets(tweeeets) {
  const container = document.querySelector('#container');
  tweeeets.forEach((tweet) => {
    const divSmallContainer = document.createElement('div');
      divSmallContainer.setAttribute('class', 'small-container');
    const newContent = document.createElement('p');
      newContent.setAttribute('class', 'new-content');
    const newLikes = document.createElement('p');
      newLikes.setAttribute('class', 'new-likes');
    const newUID = document.createElement('p');
      newUID.setAttribute('class', 'user-id');

// assigning values
  newContent.innerHTML = tweet.content;
  newLikes.innerHTML = `likes: ${tweet.likes}`;
  newUID.innerHTML = `userID: ${tweet.user_id}`;

    divSmallContainer.appendChild(newContent);
    divSmallContainer.appendChild(newLikes);
    divSmallContainer.appendChild(newUID);
    container.appendChild(divSmallContainer);
  });
}
