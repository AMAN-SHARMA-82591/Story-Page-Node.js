let storySection = document.querySelector("#story_details_sec");

//Get Story Detail
async function getStoryDetails(num) {
    return await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${num}.json`
    )
        .then((response) => response.json())
        .then((data) => data);
}

//Top Stories
async function getTopStories() {
    let TotalData = [];
    await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
    )
        .then((response) => response.json())
        .then((data) => {
            data.slice(0, 10).map((value) => {
                getStoryDetails(value)
                    .then((data) => {
                        TotalData.push(data);
                        TotalData.slice(0, 10).map((data) => {
                            const {by, title, url} = data;
                            storySection.innerHTML += `
                            <div class="story_details_item">
                                <img src='${url}' alt="">
                                <h1>${by}</h1>
                            </div>
                            `
                        })
                    })
                    .catch((error) => console.log(error));
            })
        });
}
getTopStories();

//New Stories
async function getNewStories() {
    let TotalData = [];
    return await fetch(
        "https://hacker-news.firebaseio.com/v0/newstories.json"
    )
        .then((response) => response.json())
        .then((data) =>
            data.map((value) => {
                getStoryDetails(value)
                    .then((data) => {
                        TotalData.push(data);
                        return TotalData;
                    })
                    .catch((error) => console.log(error));
            })
        );
}

//Best Stories
async function getBestStories() {
    let TotalData = [];
    const response = await fetch(
        "https://hacker-news.firebaseio.com/v0/beststories.json"
    )
        .then((response) => response.json())
        .then((data) =>
            data.map((value) => {
                getStoryDetails(value)
                    .then((data) => {
                        TotalData.push(data);
                        return TotalData;
                    })
                    .catch((error) => console.log(error));
            })
        );
}
