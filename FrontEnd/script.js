let activeId = 0;
let ul = document.getElementById('unordered_list');
let ListItem = document.querySelectorAll('.list_item');
let displayStory = document.querySelector('.particular_story');
let storySection = document.querySelector("#story_details_sec");
let allStorySection = document.querySelector('#allStory_details_sec');
let newStorySection = document.querySelector('#newStory_details_sec');
let bestStorySection = document.querySelector('#bestStory_details_sec');

ListItem.forEach((list, i) => {
  if (list.classList[1] === 'active') {
    activeId = i;
  }
});

switch (activeId) {
  case 0:
    fetch('/topStories')
      .then(response => response.json())
      .then(data => {
        data.forEach(post => {
          storySection.innerHTML += `
                  <div onclick={handleClickButton(${post.id})} class="story_details_item">
                  <h1>${post.id}</h1><br>
                  <h3>${post.description}</h3><br>
                  <a href="${post.url}">${post.id}</a><br>
                  </div>`
        })
      })
      .catch(error => console.error(error));
    break;
  case 1:
    fetch('/bestStories')
      .then(response => response.json())
      .then(data => {
        data.forEach(post => {
          bestStorySection.innerHTML += `
          <div onclick={handleClickButton(${post.id})} class="story_details_item">
          <h1>${post.id}</h1><br>
          <h3>${post.description}</h3><br>
          <a href="${post.url}">${post.id}</a><br>
          </div>`
        })
      })
      .catch(error => console.error(error));
    break;
  case 2:
    fetch('/newStories')
      .then(response => response.json())
      .then(data => {
        data.forEach(post => {
          newStorySection.innerHTML += `
            <div onclick={handleClickButton(${post.id})} class="story_details_item">
            <h1>${post.id}</h1><br>
            <h3>${post.description}</h3><br>
            <a href="${post.url}">${post.id}</a><br>
            </div>`
        })
      })
      .catch(error => console.error(error));
    break;
  case 3:
    fetch('/allStories')
      .then(response => response.json())
      .then(data => {
        data.forEach(post => {
          allStorySection.innerHTML += `
          <div onclick={handleClickButton(${post.id})} class="story_details_item">
          <h1>${post.id}</h1><br>
          <h3>${post.description}</h3><br>
          <a href="${post.url}">${post.id}</a><br>
          </div>`
        })
      })
      .catch(error => console.error(error));
    break;
  default:
    fetch('/topStories')
      .then(response => response.json())
      .then(data => {
        data.forEach(post => {
          storySection.innerHTML += `
              <div onclick={handleClickButton(${post.id})} class="story_details_item">
              <h1>${post.id}</h1><br>
              <h3>${post.description}</h3><br>
              <a href="${post.url}">${post.id}</a><br>
              </div>`
        })
      })
      .catch(error => console.error(error));
    break;
}

// Get Id
function handleClickButton(postId) {
  data = { 'postId': postId };
  options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  }
  fetch('/topStories', options)
    .then(response => response.json())
    .then(data => {
      document.querySelector('body').style.overflow = 'hidden';
      displayStory.style.top = window.scrollY;
      displayStory.style.display = 'block';
      displayStory.innerHTML += `
      <div class='particular_story_details'>
        <div>
          <h1>${data.id}</h1>
          <p>${data.title}</p>
          <a href=${data.url} target='_blank'>${data.url}</a>
        </div>
      </div>`
    });
}

function closeDetailsSec() {
  document.querySelector('body').style.overflow = 'auto';
  displayStory.style.display = 'none';
}