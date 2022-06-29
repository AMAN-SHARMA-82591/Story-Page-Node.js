let storySection = document.querySelector("#story_details_sec");
let bestStorySection = document.querySelector('#bestStory_details_sec');
let newStorySection = document.querySelector('#newStory_details_sec');
let allStorySection = document.querySelector('#allStory_details_sec');

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

fetch('/bestStories')
.then(response => response.json())
.then(data => {
    data.forEach(post => {
        bestStorySection.innerHTML += `<div class="story_details_item">
        <h1>${post.id}</h1><br>
        <h3>${post.description}</h3><br>
        <a href="${post.url}">${post.id}</a><br>
        </div>`
    })
})
.catch(error => console.error(error));

fetch('/newStories')
.then(response => response.json())
.then(data => {
    data.forEach(post => {
        newStorySection.innerHTML += `<div class="story_details_item">
        <h1>${post.id}</h1><br>
        <h3>${post.description}</h3><br>
        <a href="${post.url}">${post.id}</a><br>
        </div>`
    })
})
.catch(error => console.error(error));

fetch('/allStories')
.then(response => response.json())
.then(data => {
    data.forEach(post => {
        allStorySection.innerHTML += `<div class="story_details_item">
        <h1>${post.id}</h1><br>
        <h3>${post.description}</h3><br>
        <a href="${post.url}">${post.id}</a><br>
        </div>`
    })
})
.catch(error => console.error(error));

function handleClickButton(postId) {
    data = {'postId': postId};
    options ={
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch('/topStories', options);
}