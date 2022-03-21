// hardcoded user id 
async function fetchPost() {
  // input userId return posts by userId as json
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/2/posts`);
    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.status}`);
    }
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}

function listPosts(postContainerElementId) {
  // map through user's posts and call postElement for each element
  const postContainerElement = document.getElementById(postContainerElementId);
  fetchPost()
    .then(posts => {
      if (!posts) {
        postContainerElement.innerHTML = 'No posts from this user';
        return;
      }
      posts.map((post) => postContainerElement.appendChild(postElement(post)));
    })
    .catch(e => {
      console.log(e);
    })
}

function postElement(post) {
  // for each post, create html element
  const liElement = document.createElement('li');
  liElement.innerHTML = post.title;

  const postTitleElement = document.createElement('h4');
  postTitleElement.appendChild(liElement);

  return postTitleElement;
}