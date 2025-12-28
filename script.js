const feed = document.getElementById("feed");

const avatarUrl = "https://i.pravatar.cc/150?img=3";

function addPost() {
  const username = document.getElementById("username").value;
  const content = document.getElementById("content").value;

  if (!username || !content) return alert("Fill all fields");

  const post = document.createElement("div");
  post.className = "post";

  post.innerHTML = `
    <div class="post-header">
      <img src="${avatarUrl}">
      <strong>${username}</strong>
    </div>
    <p>${content}</p>
    <span class="like-btn" onclick="likePost(this)">👍 Like</span>
  `;

  feed.prepend(post);

  document.getElementById("content").value = "";
}

function likePost(btn) {
  btn.textContent = "❤️ Liked";
}
