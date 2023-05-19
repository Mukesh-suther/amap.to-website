var thumbnailmaindiv = document.getElementById("hero-section-thumbnail-innerdiv")
var thumbnaildata = [
    {
        thumbnailimgdata: "./../assessts/images/thumbnail-img-1.png",
        thumbnailtitltext: "MAX Acquires AMAP.to",
        thumbnaildescriptiontext: "Music Audience Exchange (MAX), the music technology company powering artist x brand sponsorships, announced that MAX has acquired My Artist Page, known as AMAP.to."
    },
    {
        thumbnailimgdata: "./../assessts/images/thumbnail-img-2.png",
        thumbnailtitltext: "Artist Pages Partners With Tropic Colour",
        thumbnaildescriptiontext: "Exemplifying their commitment to artists in the visual space, Artist Pages has officially partnered with Tropic Colour. Tropic Colour is a company founded by renowned video director and businessman Jakob Owens."
    },
    {
        thumbnailimgdata: "./../assessts/images/thumbnail-img-3.jpg",
        thumbnailtitltext: "Artist Pages Partners With Indie Amplify",
        thumbnaildescriptiontext: "Artist Pages is excited to announce a partnership with Indie Amplify. Indie Amplify is designed to be the one-stop-shop for anything an independent musician could need to take their career to the next level, and is largely the brainchild of Zachary Beck (aka rapper Futuristic)."
    }

]

for (let thumbnailindex = 0; thumbnailindex < thumbnaildata.length; thumbnailindex++) {
    var herosectionthumbnail = document.createElement("div")
    thumbnailmaindiv.appendChild(herosectionthumbnail);
    herosectionthumbnail.setAttribute("class", "hero-section-thumbnail");

    var herosectionthumbnailimgdiv = document.createElement("div")
    herosectionthumbnail.appendChild(herosectionthumbnailimgdiv)
    herosectionthumbnailimgdiv.setAttribute("class", "hero-section-thumbnail-img")

    var herosectionthumbnailimglink = document.createElement("a")
    herosectionthumbnailimgdiv.appendChild(herosectionthumbnailimglink);
    herosectionthumbnailimglink.setAttribute("href", "#");

    var herosectionthumbnailimg = document.createElement("img");
    herosectionthumbnailimglink.appendChild(herosectionthumbnailimg)
    herosectionthumbnailimg.setAttribute("src", thumbnaildata[thumbnailindex].thumbnailimgdata)

    var herosectionthumbnailtextdiv = document.createElement("div")
    herosectionthumbnail.appendChild(herosectionthumbnailtextdiv);
    herosectionthumbnailtextdiv.setAttribute("class", "hero-section-thumbnail-text")
    
    var herosectionthumbnailtitle = document.createElement("h3")
    herosectionthumbnailtextdiv.appendChild(herosectionthumbnailtitle)
    herosectionthumbnailtitle.innerHTML = thumbnaildata[thumbnailindex].thumbnailtitltext;

    var herothumbnaildescription = document.createElement("p");
    herosectionthumbnailtextdiv.appendChild(herothumbnaildescription);
    herothumbnaildescription.innerHTML = thumbnaildata[thumbnailindex].thumbnaildescriptiontext

    var herosectionthumbnailbutton = document.createElement("a")
    herosectionthumbnailtextdiv.appendChild(herosectionthumbnailbutton);
    herosectionthumbnailbutton.innerHTML = "Read More >>"

}