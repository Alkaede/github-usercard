const { default: axios } = require("axios");

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const entry = document.querySelector('.cards')

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
 function cardMaker(object){
  //instantiating the elements

  //first div card
  const card = document.createElement('div');
  const img = document.createElement('img');

  //next div card-info
  const cardInfo = document.createElement('div');
  const uName = document.createElement('h3');

  //<p> making, separating after 2 to make it more visible
  const pUserName = document.createElement('p');
  const pLocation = document.createElement('p');

  const pProfile = document.createElement('p');
  const pProfLink = document.createElement('a');

  const pFollower = document.createElement('p');
  const pFollowing = document.createElement('p');

  const pBio = document.createElement('p');
  
  //setting classes, attri, and text   
  card.classList.add('card');

  cardInfo.classList.add('card-info');
  img.src = object.avatar_url;

  uName.textContent = object.name;
  uName.classList.add('name');
  // uName.classList.add('name').textContent = object.name;
  //this doesnt work and kept causing my code to return errors on the .then .catch
  pUserName.textContent = object.username;
  pUserName.classList.add('username');
  pLocation.textContent = `Location: ${object.location}`;
  
  pProfLink.href = object.html_url;
  pProfile.textContent = `Profile: ${pProfLink}`;
  
  pFollower.textContent = `Followers: ${object.followers}`;
  pFollowing.textContent = `Following: ${object.following}`;
  
  pBio.textContent = `Bio: ${object.bio}`;


  //hierarchy
  card.appendChild(img); 
  card.appendChild(cardInfo);

  cardInfo.appendChild(uName); 
  cardInfo.appendChild(pUserName);
  cardInfo.appendChild(pLocation);

  cardInfo.appendChild(pProfile); 


  cardInfo.appendChild(pFollower);
  cardInfo.appendChild(pFollowing); 
  cardInfo.appendChild(pBio);

  pProfile.appendChild(pProfLink);

//trying to make the link work
pProfile.addEventListener('click', ()=>{
  window.open(`https://github.com/alkaede`, '_blank'); 
  //this will just make all the other ones redirect to me, not sure how I could get it to  
  //be the object.username without it being undefined 
});

  return card

 }


 axios.get('https://api.github.com/users/alkaede')
 .then(res => {
   const user = res.data
   const card = cardMaker(user)
   entry.appendChild(card)
   })
   .catch(err => {
     console.log('something bad happened')
   })
   .finally(() => {
     console.log('done')
   })

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

const followersArray = [
  'shpli',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd'
];

followersArray.forEach ((follower) => {  //change the url to the thing in the forEach so that we can loop through users
  axios.get(`https://api.github.com/users/${follower}`)
  .then(res => {
    const user = res.data
    const card = cardMaker(user)
    entry.appendChild(card)
    })
    .catch(err => {
      console.log('something bad happened')
    })
    .finally(() => {
      console.log('done')
    })
 
})