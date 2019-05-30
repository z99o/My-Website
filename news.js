window.addEventListener('click', function(event)
{
  if(event.target.classList.contains("accept-button"))
  {
    console.log("post button clicked");
  }

  else if(event.target.classList.contains("view-comments-button"))
  {
    viewComments(event);
  }
});

function viewComments(event)
{
  var post = event.target.parentNode.parentNode;
  var comments = post.getElementsByClassName("comment-container")[0];
  comments.classList.toggle("hidden");
}
