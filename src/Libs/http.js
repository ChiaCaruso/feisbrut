
const BASE_URL = "https://edgemony-backend.herokuapp.com";

const http = (resource) => fetch(BASE_URL + resource)
  .then((response) => response.json());

const httpPost = (resource, data) =>
  fetch(BASE_URL + resource, {
    method: 'POST',
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());

const httpDelete = (resource) =>
  fetch(BASE_URL + resource, {
    method: 'DELETE',
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());

const fillFriendsList = (friendsNames) => {
  let value = 0;
  for (value in [...Array(friendsNames.length).keys()]) {
    httpPost("/friends", {
      name: friendsNames[value],
      photo: `https://randomuser.me/api/portraits/men/${value}.jpg`,
    });

    setTimeout(() => { }, 100);
  }
};

export { http, httpPost, httpDelete, fillFriendsList };