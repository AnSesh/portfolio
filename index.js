var images = new Array();

function preloadImages() {

    for (i = 0; i < preloadImages.arguments.length; i++) {

        images[i] = new Image();

        images[i].src = preloadImages.arguments[i];

    }

}
preloadImages("anirudh2pic.png", "anirudpic3.png", "arjunguptapic.png", "cusd.pic.png", "harrypotterpic.jpeg", "outdooractivepic.jpeg", "staffed5pic.png", "zoomfatigue.png");
function validateEmail(theForm) {
    if (/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(theForm.email - id.value)) {
        return (true);
    }
    alert("Invalid e-mail address! Please enter again carefully!");
    return (false);
}
