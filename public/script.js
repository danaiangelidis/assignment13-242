const showRestaurants = async() => {
    const restaurantsJSON = await getRestaurants();
    const restaurantsDiv = document.getElementById("rest-div");

    if (restaurantsJSON == "") {
        console.log("Invalid load of json");
        return;
    }

    restaurantsJSON.forEach((restaurant) => {
        const section = document.createElement("section");
        section.classList.add("rest");
        section.classList.add("flex-container");
        restaurantsDiv.append(section);

        const image = document.createElement("img");
        image.src = `http://localhost:3000/${restaurant.img}`;
        section.append(image);

        const info = document.createElement("section");
        info.classList.add("info");

        const title = document.createElement("h2");
        title.innerHTML = restaurant.name;
        info.append(title);

        const type = document.createElement("p");
        type.innerHTML = `Restaurant Type: ${restaurant.type}`;
        info.append(type);

        const addy = document.createElement("p");
        addy.innerHTML = `Address: ${restaurant.address}`;
        info.append(addy);

        const rate = document.createElement("h3");
        rate.innerHTML = `Rating: ${restaurant.rating}`;
        info.append(rate);

        const desc = document.createElement("h3");
        desc.innerHTML = `Description`;
        desc.classList.add("rev");
        info.append(desc);

        const line = document.createElement("h3");
        line.innerHTML = ` | `;
        line.classList.add("line");
        info.append(line);

        const rev = document.createElement("h3");
        rev.innerHTML = `Reviews`;
        rev.classList.add("rev");
        info.append(rev);

        const description = document.createElement("p");
        description.innerHTML = restaurant.description;
        info.append(description);

        const ul = document.createElement("ul");
        ul.classList.add("hidden");
        info.append(ul);
        restaurant.reviews.forEach((review) => {
            ul.append(getLi(review));
        });

        section.append(info);

        rev.onclick = () => {
            ul.classList.toggle("hidden");
            description.classList.toggle("hidden");
        };

        desc.onclick = () => {
            ul.classList.toggle("hidden");
            description.classList.toggle("hidden");
        };
    });
};

const getLi = (data) => {
    const li = document.createElement("li");
    li.textContent = data;
    return li;
};

const getRestaurants = async() => {
    try {
        return (await fetch("https://assignment-13.onrender.com/api/restaurants")).json();
    } catch (error) {
        console.log("error" + error + "retrieving json");
        return "";
    }
}

window.onload = () => showRestaurants();