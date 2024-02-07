import background6 from "./background6.jpg";
import { buildMenu } from "./menu";

function buildHomepage() {
  updateRestaurantName();

  const content = document.getElementById("content");
  content.innerHTML = "";

  document.body.style.backgroundImage = `url("${background6}")`;

  const main = document.createElement("div");
  main.classList.add("main");
  content.appendChild(main);

  const center = document.createElement("div");
  center.classList.add("center");
  main.appendChild(center);

  const centerCtn = document.createElement("div");
  centerCtn.classList.add("center-ctn");
  center.appendChild(centerCtn);

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.innerHTML =
    "Food cuisine across world like <br> <span> Mexican </span> , <span> Indian, <span>Italian, <span>Japanese, <span>Thai, <span>French</span> <br> are available here!  ";
  centerCtn.appendChild(headline);

  const orderBtn = document.createElement("button");
  orderBtn.classList.add("order-now");
  orderBtn.textContent = "Order now";
  centerCtn.appendChild(orderBtn);

  orderBtn.addEventListener("click", () => {
    buildMenu();
  });

  const address = document.createElement("div");
  address.classList.add("address");
  address.textContent = "4TH Road, Nalasopara, MH";
  centerCtn.appendChild(address);

  const openHrs = document.createElement("div");
  openHrs.classList.add("open-hrs");
  centerCtn.appendChild(openHrs);

  const monFri = document.createElement("div");
  monFri.textContent = "Mon-Fri: 11am - 11pm";
  openHrs.appendChild(monFri);

  const satSun = document.createElement("div");
  satSun.textContent = "Sat-Sun: 9am - 12pm";
  openHrs.appendChild(satSun);

  const additaionalService = document.createElement("div");
  additaionalService.textContent = "For new user's Free Home Delivery !";
  openHrs.appendChild(additaionalService);
}

function updateRestaurantName() {
  const header = document.querySelector("header");
  let restaurantName = header.querySelector(".restaurant-name");

  if (!restaurantName) {
    restaurantName = document.createElement("div");
    restaurantName.classList.add("restaurant-name");
    header.insertBefore(restaurantName, header.firstChild);
  }

  restaurantName.textContent = "Diversify Kitchen";
}

export { buildHomepage };
