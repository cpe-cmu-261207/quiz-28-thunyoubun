async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  const user = resp.data.results;
  return (users = user);
}

let users;

const sec = document.getElementById("span-gender-icon");
const pic = document.getElementById("img-profile");
const names = document.getElementById("p-name");
const email = document.getElementById("p-email");
const add = document.getElementById("p-address");
const btnRandom = document.getElementById("btn-random");

btnRandom.onclick = async () => {
  const resp = await axios.get("https://randomuser.me/api/");
  const users = resp.data.results;
  if ((users[0].gender = "male")) {
    sec.innerText = "👨";
  } else if ((users[0].gender = "female")) {
    sec.innerText = "👩";
  }
  pic.src = users[0].picture.large;
  email.innerText = users[0].email;
  names.innerText = users[0].name.first + " " + users[0].name.last;
  add.innerText =
    users[0].location.city +
    " " +
    users[0].location.country +
    " " +
    users[0].location.state +
    " " +
    users[0].location.postcode;
  console.log(users);
};
