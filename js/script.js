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
    const sizes = ['S', 'M', 'L', 'XL'];
    for (let i = 0; i < sizes.length; i++) {
        const sizeBtn = document.getElementById('size-' + sizes[i]);
        const element = sizes[i];
        if (element === size) {
            sizeBtn.classList.add('border-purple-500'); 
            sizeBtn.classList.add('text-purple-500'); 
        } else {
            sizeBtn.classList.remove('border-purple-500');
            sizeBtn.classList.remove('text-purple-500');
        }
    }
}




