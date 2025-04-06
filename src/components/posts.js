async function fetchPosts() {
    try {
      const response = await fetch("json/posts.json"); // Fetch the JSON file
      const posts = await response.json(); // Convert response to JSON
      const container = document.getElementById("postsContainer");
      container.innerHTML = ""; // Clear existing posts
      posts.forEach(post => {
        const card = `
          <div class="col-md-4 d-flex align-items-stretch mb-3">
            <div class="card d-flex flex-column" style="width: 18rem; background-color: #1a1a2e; color: white;">
              <img src="${post.image}" class="card-img-top" alt="${post.title}" style="height: 200px; object-fit:cover;">
              <div class="card-body d-flex flex-column justify-content-between" style="flex-grow: 1;">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.description}</p>
                <a href="${post.link}" class="btn btn-primary">See Post</a>
              </div>
            </div>
          </div>
        `;
        container.innerHTML += card;
      });
    } catch (error) {
      console.error("Error loading posts:", error);
    }
  }
  
  // Run function on page load
  fetchPosts();