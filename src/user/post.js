// hardcoded user id 

async function fetchPost(userId) {
  // input userId return posts by userId as json
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);

    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.status}`);
    }
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}

function listPosts(postContainerElementId, userId) {
  // map through user's posts and call postElement for each element
  const postContainerElement = document.getElementById(postContainerElementId);
  fetchPost(userId)
    .then(posts => {
      if (!posts) {
        postContainerElement.innerHTML = 'No posts from this user';
        return;
      }
      postContainerElement.innerHTML = ``;
      const table = postContainerElement.appendChild(document.createElement('table'));

      posts.map((post) => table.appendChild(postElement(post)));
      // createTable(posts);
    })
    .catch(e => {
      console.log(e);
    })
}

function postElement(post) {
  // for each post, create html element
  const colElement = document.createElement('td');
  colElement.innerHTML = post.id;
  const colElement2 = document.createElement('td');
  colElement2.innerHTML = post.title;
  const colElement3 = document.createElement('td');
  colElement3.innerHTML = post.body;

  const postTitleElement = document.createElement('tr');
  postTitleElement.appendChild(colElement);
  postTitleElement.appendChild(colElement2);
  postTitleElement.appendChild(colElement3);


  return postTitleElement;
}