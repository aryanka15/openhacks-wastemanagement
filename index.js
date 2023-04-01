const imageInput = document.getElementById("imageFile");
const displayDiv = document.getElementById("displayDiv");
const displayImage = document.getElementById("displayimage");
imageInput.addEventListener("change", (e) => {
  console.log("Image file changed");
  displayDiv.style.display = "none";
  const file = e.target.files[0];

  let reader = new FileReader();

  reader.onload = function (event) {
    console.log(event.target.result);
    displayImage.src = event.target.result;
  };
  reader.readAsDataURL(file);
});
