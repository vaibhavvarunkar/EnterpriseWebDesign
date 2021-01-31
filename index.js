//Get Button 

arrowBtn = document.getElementById("arrow-btn");

//when ther user scrolls dowm 20px from the top of the document, show the button

window.onscroll = function(){
    scrollFunction()
};

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        arrowBtn.style.display = "block";
    }
    else{
        arrowBtn.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0; // for safari
    document.documentElement.scrollTop = 0; //for chrome, firefox, opera, IE
}