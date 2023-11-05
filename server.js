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
        description: "Vissente is a classic Italian restaurant hidden in a quiet nook of the Nea Smyrni square. They serve a variety of handcrafted pasta and pizzas, along with a fine selection of wine and freshly mixed cocktails that perfectly complement the flavors of Italy.",
        reviews: ["5/5 - When top food and top service meets.The atmosphere was perfect, the place rapidly became full, there was a hint of music sounds and the smells around made us hangry. The food was amazing, pasta cooked to perfection! The service was was welcoming, we had a bottle of wine, and never even had to  touch it, the waiters made sure our glasses are always full. If you're around, looking for a fancy dinner, that's a good place to check. (Aviv Aharon via Google Reviews)", 
        "4/5 - It was a nice experience. Order a pizza, 2 glasses of wine (tried both white options - price was ok for the quality) and a dessert, total 30 euros. Pizza was big (not original Italian because of the north American full of bread ring around and thikness). Overall was very yummy but is very important that was missing the feeling of salt to the tomato sauce. Dessert (torte) was great. For me is a nice place for brunch. Service staff was extremely professional. (Dimitrios Dervenagas via Google Reviews)",
        "5/5 - We had a very nice experience! The place is very nice, very well decorated, nice atmosphere. The service is excellent, very kind and attentive waiters. They have a great wine list and finally, the food was AMAZING! One of the best Pizza we had in Athens. Would totally recommend! (Joan Cabanas via Google Reviews)"]
    };
    restaurants[1] = {
        name: "To Steki Tou Ilia",
        address: "Eptachalkou 5, Athina 118 51, Greece",
        type: "Chophouse",
        rating: "4.3/5",
        img: "images/elias.jpg",
        description: "To Steki Tou Ilia, which translates to Elias' Spot, is famed for serving Athens' finest lamb chops. Situated in the iconic architectural neighborhood of Plaka, it echoes Athens' cultural heritage while also being a hotspot for any meat lover in the area.",
        reviews: ["5/5 - This traditional tavern is an all time favorite for Greek meat lovers. One of the best places for grilled lamb chops in Athens, the specialty of the tavern. I also like the beef patty. The place has a lovely courtyard and a friendly staff. It’s also very close to Thission train station, so it’s easy to get there.  A must visit if you are in the area. (Nikos Kapsomenakis via Google Reviews)",
        "4/5 - The service is nice, the food is great and prices are reasonable. One thing that made it a 4 stars experience for me here instead of a 5, is that they would give you a bottle of water and bread and charge you for it. Other places Ive been to they don't charge for water (I know it's bottled water not tap water but still) and this is the first time I was charged for bread despite ordering so many dips that's supposed to come with bread by default. Again, it's not a big deal but that's the only reason I gave it a 4. (Ala Al-Shargabi via Google Reviews)",
        "5/5 - Lamb chops really are great here! You order by the kilo. They also do the same with pork belly. Great meal! (Thomas Buelow via Google Reviews)"]
    };
    restaurants[2] = {
        name: "To Mantri",
        address: "Vardousion 29, Glifada 165 62, Greece",
        type: "Homestyle Greek",
        rating: "4.6/5",
        img: "images/mantri.jpg",
        description: "Located in the bases of mount Hymettos, To Mantri is a charming homestyle Greek eatery that displays not just the delicious flavors of Greek home cooking, but also an unparalleled panoramic view that extends across Athens, all the way to the Mediterranean sea.",
        reviews: ["5/5 - I recently dined at this meat restaurant with a stunning view, and it exceeded all my expectations. The succulent cuts of meat were cooked to perfection, and the view added a magical touch to the dining experience. The service was impeccable, and I can't wait to return. (Aris Kots via Google Reviews",
        "5/5 - Wow! Aesthetically stunning restaurant with a view, pristine and unique. Fresh, tasty and beautiful food. Highly recommend the meat platter. Everything we ate was cooked & seasoned to perfection. The deconstructed snickers for dessert is a must!!! The staff throughout were wonderful, fast-paced, happy, polite, interested and all with a high level of English. Would go again, remember to book beforehand as you won’t get a table otherwise. (Ella via Google Reviews)",
        "4/5 - Beautiful restaurant in an amazing location with beautiful views of Glyfada and the sea. The restaurant was beautifully decorated and the food was quite tasty. Best thing we had was the mushrooms by far. We ordered a “ meat poikilia”  for 4 but because we were only two I believe they gave us a smaller portion even though they said it would still be for 4. (Kat Tsouni via Google Reviews)"]
    };
    restaurants[3] = {
        name: "NOPF Resto",
        address: "Marina Floisvou, Paleo Faliro 175 61, Greece",
        type: "Seafood",
        rating: "4.3/5",
        img: "images/omilos.jpeg",
        description: "NOPF Resto is the Greek acronym for the Paleo Faliro Nautical Club, located on the marina of Floisvos. This restaurant has an array of freshly caight fish and seafood dishes that can be enjoyed with a view of the yachts on the marina. The best part of the experience is the nearby pier, which provides the perfect opportunity for a leisurly stroll by the water while enjoying some dessert from one of the many gelaterias.",
        reviews: ["5/5 - Beautiful place with great view (Rizz via Google Reviews)",
        "5/5 - Food is great, Sardines are juicy and fresh, eggplant salad, boild greens a-ma-zing, gravier cheese is super, and service is very friendly. Thanks specially to people who served us with smily face tonight, especially to Nancy and her team. (Anil Tokderim via Google Reviews)",
        "5/5 - I really liked this restaurant.  Delicious cuisine, good service, view of the bay and the port with yachts (Irene Karakurkchi via Google Reviews)"]
    };
    restaurants[4] = {
        name: "George's Traditional Souvlaki",
        address: "2as Maiou 6, Nea Smirni 171 21, Greece",
        type: "Gyradiko Street Food",
        rating: "3.9/5",
        img: "images/giorgos.jpg",
        description: "On the busier part of the Nea Smyrni square, is George's Traditional Souvlaki, a traditional Greek street food spot. Whether you choose a perfectly grilled skewer or some gyro wrapped in a pita, you can never go wrong with any choice from this local favorite.",
        reviews: ["5/5 - The Philadelphia kebap is to die for!!!! Maybe the best in Athens (and I am a big kebap eater!). And I NEVER feel my stomach heavy after eating their meat - which is not always the case with other restaurants. Love this place! (Ana Piskaceva via Google Reviews)",
        "5/5 - Every year I visit Greece and I have tried the souvlakis all over the place and this one is maybe the best. The taste is classic. Now you can complain all you want about the price/service or other stuff  but when it comes to souvlaki wrapped up you can't get better than this. I discovered this place last year and I was hesitant to try based on the reviews but the reality was that it tastes amazing. I went back this year and indeed it was as good. So to the owner, please keep up the good work and don't change anything in the recipe. (Mike Bifsha via Google Reviews)",
        "5/5 - Fast work, delicious food! (Freulein Star via Google Reviews)"]
    };

    res.json(restaurants);
});