const showRestaurants = async() => {
    const restaurantsJSON = await getRestaurants();
    const restaurantsDiv = document.getElementById("rest-div");

    if (restaurantsJSON == "") {
        console.log("Invalid load of json");
        return;
    }

    restaurantsJSON.forEach((restaurant) => {
        const section = document.createElement("section");
        restaurantsDiv.append(section);

        const title = document.createElement("h2");
        title.innerHTML = restaurant.name;

        const addy = document.createElement("p");
        addy.innerHTML = restaurant.address;

        const rate = document.createElement("h3");
        rate.innerHTML = restaurant.rating;

        const image = document.createElement("img");
        image.src = `https://assignment13-242.github.io/public/images/${restaurant.img}`;

        section.classList.add("rest");
        section.append(title);
        section.append(addy);
        section.append(rate);
        section.append(image);
    });

}

const getRestaurants = async() => {
    try {
        return (await fetch("http://localhost:3000/api/restaurants")).json();
    } catch (error) {
        console.log("error" + error + "retrieving json");
        return "";
    }
}

window.onload = () => showRestaurants();