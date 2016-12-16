const API_URL = getHostURL();


$(document).ready(function(){
  const params = parseQueryString(window.location.search);
  getUserInfo(params.id)
  .then(showUserInfo)
  .then(getSwordsInfo)
  .then(showSwordsInfo)
})

function parseQueryString (str){
  let queryObj = {};
  let filtered = str.split(/[?=&]/ );
  filtered.shift();
  for (var i = 0; i < filtered.length; i+=2) {
    queryObj[filtered[i]] = filtered[i+1];
  }
  return(queryObj);
}

function getUserInfo (id){
  return $.get(`${API_URL}/users/${id}`)
}

function showUserInfo(users) {
  let source = $("#user-template").html();
  let template = Handlebars.compile(source);
  let context = users;
  let html = template(context);
  $(".email").html(html);
  return users.id
}

function getSwordsInfo (id){
  return $.get(`${API_URL}/users/${id}/swords`)
}

function showSwordsInfo (swords){
  let source = $("#sword-template").html();
  let template = Handlebars.compile(source);
  let context = {swords};
  let html = template(context);
  $(".photos").html(html);
  return users.id
}

function getHostURL (){
  if (window.location.host.indexOf('localhost') != -1) {
    return "http://localhost:3000";
  } else {
    return "https://swords-of-the-world.herokuapp.com"
  }
}
