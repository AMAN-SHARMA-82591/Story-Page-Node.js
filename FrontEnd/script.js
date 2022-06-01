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
    return await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
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
  getBestStories();