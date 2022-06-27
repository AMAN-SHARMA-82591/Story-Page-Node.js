let storySection = document.querySelector("#story_details_sec");
let bestStorySection = document.querySelector('#bestStory_details_sec');
let newStorySection = document.querySelector('#newStory_details_sec');
let allStorySection = document.querySelector('#allStory_details_sec');

fetch('http://localhost:5000/')
.then(response => response.json())
.then(data => {
    data.forEach(post => {
        storySection.innerHTML += `<div class="story_details_item">
        <h1>${post.id}</h1><br>
        <h3>${post.description}</h3><br>
        <a href="${post.url}">${post.id}</a><br>
        </div>`
    })
})
.catch(error => console.error(error));

fetch('http://localhost:5000/bestStories')
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

fetch('http://localhost:5000/newStories')
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

fetch('http://localhost:5000/allStories')
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