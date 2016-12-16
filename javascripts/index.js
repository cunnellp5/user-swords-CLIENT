const API_URL = getHostURL();

$(document).ready(function(){
  getAllUsers()
  .then(showAllUsers)
})

function getAllUsers (){
  return $.get(`${API_URL}/users`)
}

function showAllUsers (users){
  let source = $("#allUsers-template").html();
  let template = Handlebars.compile(source);
  let context = {users};
  let html = template(context);

  $(".users").html(html);
  return users.id
}


function getHostURL (){
  if (window.location.host.indexOf('localhost') != -1) {
    return "http://localhost:3000";
  } else {
    return "https://swords-of-the-world.herokuapp.com"
  }
}
