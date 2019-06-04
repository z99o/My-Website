var get_comment = document.getElementById('add-comment');
var button = document.getElementById('comment-button-id');
console.log(button);


/*
button.addEventListener('click',function(){
  document.getElementById('twit-comment').className = 'visible';
  console.log('clicked');
});
*/

button.onclick = function(){
  document.getElementById('add-comment').className = 'visible';
};
