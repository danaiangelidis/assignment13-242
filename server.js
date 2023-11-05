const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.get("/api/restaurants", (req, res) => {
    const restaurants = [];
    restaurants[0] = {
        name: "Vissente",
        address: "Pl. Vasileos Konstantinou 9, Nea Smirni 171 21, Greece",
        type: "Italian comfort food",
        rating: "4.5/5",
        img: "images/vissente.PNG",
        reviews: ["5/5 - When top food and top service meets.The atmosphere was perfect, the place rapidly became full, there was a hint of music sounds and the smells around made us hangry. The food was amazing, pasta cooked to perfection! The service was was welcoming, we had a bottle of wine, and never even had to  touch it, the waiters made sure our glasses are always full. If you're around, looking for a fancy dinner, that a good place to check. (Aviv Aharon via Google Reviews)", 
        "4/5 - It was a nice experience. Order a pizza, 2 glasses of wine (tried both white options - price was ok for the quality) and a dessert, total 30 euros. Pizza was big (not original Italian because of the north American full of bread ring around and thikness). Overall was very yummy but is very important that was missing the feeling of salt to the tomato sauce. Dessert (torte) was great. For me is a nice place for brunch. Service staff was extremely professional. (Dimitrios Dervenagas via Google Reviews)",
        "5/5 - We had a very nive experience! The place is very nice, very well decorated, nice atmosphere. The service is excelent, very kind and attentive waiters. They have a great wine list and finally, the food was AMAZING! One of the best Pizza we had in Athens. Would totally reccomend! (Joan Cabanas via Google Reviews)"]
    };
    restaurants[1] = {
        name: "lion",
        address: "yellow",
        type: "",
        rating: "fierce",
        img: "images/",
        reviews: ["", ""]
    };
    restaurants[2] = {
        name: "lion",
        address: "yellow",
        type: "",
        rating: "fierce",
        img: "images/",
        reviews: ["", ""]
    };
    restaurants[3] = {
        name: "lion",
        address: "yellow",
        type: "",
        rating: "fierce",
        img: "images/",
        reviews: ["", ""]
    };
    restaurants[4] = {
        name: "lion",
        address: "yellow",
        type: "",
        rating: "fierce",
        img: "images/",
        reviews: ["", ""]
    };

    res.json(restaurants);
});

app.listen(3000, () => {
    console.log("listening");
});