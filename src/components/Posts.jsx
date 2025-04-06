import "bootstrap/dist/css/bootstrap.min.css";

function Posts(){
  return(
    <div class="container mt-5">
      <div class="row align-items-start"> 
        <div class="col-md-3">
          <h1 class="text-start display-6" style="color: #dadff7; font-size: 1.3rem; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">Latest Posts</h1>
        </div>
        
        <div class="col-md-9">
          <div class="row" id="postsContainer">
          </div> 
        </div>
      </div>
    </div>
  )
}
