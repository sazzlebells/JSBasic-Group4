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

async function fetchComment(postId) {
  // input postId return posts by postId as json
  try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/post/${postId}/comments`);

      if (!res.ok) {
          throw new Error(`Failed to fetch comments: ${res.status}`);
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

function listComments(postId) {
  // modal for displaying the comments
  const modal = document.getElementById('my-modal');
  const modalText = document.getElementById('modal-text');
  // map through post's comments and call postElement for each element
  fetchComment(postId)
    .then(comments => {
      if (!comments) {
        modalText.innerHTML = 'No comments from this post';
        return;
      }
      console.log(comments);
      modalText.innerHTML = ``;
      modalText.appendChild(document.createElement('h3')).innerHTML = "Comments From Post #" + postId;
      const table = modalText.appendChild(document.createElement('table'));

      const headElement = document.createElement('th');
      headElement.innerHTML = "Number";
      const headElement2 = document.createElement('th');
      headElement2.innerHTML = "Comment";
      const headElement3 = document.createElement('th');
      headElement3.innerHTML = "Email";

      table.appendChild(headElement);
      table.appendChild(headElement2);
      table.appendChild(headElement3);

      comments.map((comment, index) => table.appendChild(commentElement(comment, index)));
      modal.style.display = "block";
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

  const colElement4 = document.createElement('button');
  colElement4.innerHTML = "get comments";
  colElement4.onclick = () => listComments(post.id);

  const postTitleElement = document.createElement('tr');
  postTitleElement.appendChild(colElement);
  postTitleElement.appendChild(colElement2);
  postTitleElement.appendChild(colElement3);
  postTitleElement.appendChild(colElement4);

  return postTitleElement;
}

function commentElement(comment, index) {
  // for each comment, create html table data
  const colElement = document.createElement('td');
  colElement.innerHTML = index+1;
  const colElement2 = document.createElement('td');
  colElement2.innerHTML = comment.name;
  const colElement3 = document.createElement('td');
  colElement3.innerHTML = comment.email;

  const commentTitleElement = document.createElement('tr');
  commentTitleElement.appendChild(colElement);
  commentTitleElement.appendChild(colElement2);
  commentTitleElement.appendChild(colElement3);

  return commentTitleElement;
}
