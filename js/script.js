const ringButton = document.querySelectorAll(".ring-button");
for (let i = 0; i < ringButton.length; i++) {
    const ringBtn = ringButton[i];
    ringBtn.addEventListener("click", function (event) {
        const color = event.target.id.split("-")[0];

        for (let j = 0; j < ringButton.length; j++) {
            ringButton[j].classList.remove("border-purple-500");
        }
        event.target.classList.add("border-purple-500");

        const productImage = document.getElementById("product-image");
        productImage.src = "./images/" + color + ".png";
    });
}


function selectWristSize(size) {
    console.log(size);
    
}




