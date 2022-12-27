export const ROOT = 'https://www.reddit.com';

export const searchPost = async (term) => {
    const response = await fetch(`${ROOT}/search.json?q=${term}`);
    const jsonResponse = await response.json();
    return jsonResponse.data.children.map((post) => post.data);
}

export const getSubreddits = async () => {
    const response = await fetch(`${ROOT}/r/pics.json`);
    const json = await response.json();
    return json.data.children.map((subreddit) => subreddit.data);
  };

export const getPostComments = async (permalink) => {
    const response = await fetch(`${ROOT}/${permalink}.json`);
    const jsonResponse = await response.json();
    return jsonResponse[1].data.children.map((comments) => comments.data)
}

export const getUserInfo = async (name) => {
    const response = await fetch(`${ROOT}/user/${name}/about.json`);
    const jsonResponse = await response.json();

    console.log(jsonResponse);
    return jsonResponse;
    //return jsonResponse[1].data.children.map((comments) => comments.data)
}