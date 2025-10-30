const imageInput = document.getElementById("imageInput");
const previewImage = document.getElementById("previewImage");
const previewBox = document.querySelector(".preview");
const previewText = previewBox.querySelector("p");

imageInput.addEventListener("change", function() {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function() {
      previewImage.setAttribute("src", this.result);
      previewImage.style.display = "block";
      previewText.style.display = "none";
    });

    reader.readAsDataURL(file);
  } else {
    previewImage.style.display = "none";
    previewText.style.display = "block";
  }
});
