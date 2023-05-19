var cardmaindiv = document.getElementById("testimonial-cards-main-div");
var users = [
    {
        carddescription: `"I love the ability to customize my page and the accessibility it has for the different types of content.Instead of it just being buttons vertically, this is laid out more like a website."`,
        UserName: "amap.to/headtop",
        UserProfile: "./../assessts/images/user1.png"
    },
    {
        carddescription: '"Our page looks sleek. We route our domain outsidersband.com to our MAP. Editing and adding on the site is great. I like that I can use the call to action button for almost anything."',
        UserName: "amap.to/outsidersband",
        UserProfile: "./../assessts/images/user2.png"
    },
    {
        carddescription: '"I just really like the design and how easy it is to set up being an artist. The others seemed complicated or just annoying to create. However, with maps, its easy, fun, and it looks really great.I love it!"',
        UserName: "amap.to/royalryan",
        UserProfile: "./../assessts/images/user3.jpg"
    }
]

for (let userindex = 0; userindex < users.length; userindex++) {
    var carddiv = document.createElement("div")
    cardmaindiv.appendChild(carddiv)
    carddiv.setAttribute("class", "testimonial-card-div")

    var cardinnerdiv = document.createElement("div")
    carddiv.appendChild(cardinnerdiv);
    cardinnerdiv.setAttribute("class", "testimonial-card-inner-div")

    var cardinnerinnerdiv = document.createElement("div");
    cardinnerdiv.appendChild(cardinnerinnerdiv);

    var carddescription = document.createElement("p");
    cardinnerinnerdiv.appendChild(carddescription);
    carddescription.setAttribute("class", "testimonial-card-description");
    carddescription.innerHTML = users[userindex].carddescription

    var carduserdata = document.createElement("div");
    cardinnerinnerdiv.appendChild(carduserdata);
    carduserdata.setAttribute("class", "testimonial-card-user-data");

    var cardimgdiv = document.createElement("div");
    carduserdata.appendChild(cardimgdiv);
    cardimgdiv.setAttribute("class", "testimonial-card-img-div");

    var userimg = document.createElement("img");
    cardimgdiv.appendChild(userimg);
    userimg.setAttribute("src", users[userindex].UserProfile)


    var cardusername = document.createElement("div");
    carduserdata.appendChild(cardusername);
    cardusername.setAttribute("class", "testimonial-card-username");

    var cardusernamepara = document.createElement("p");
    cardusername.appendChild(cardusernamepara);
    cardusernamepara.innerHTML = users[userindex].UserName;
}