let backDrop = document.getElementById("colorPickerContainer");
let colorName = document.getElementById("selectedColorHexCode");

function grey() {
    colorPickerContainer.style.backgroundColor = "#e0e0e0";
    colorName.textContent = "#e0e0e0";
}

function green() {
    colorPickerContainer.style.backgroundColor = "#6fcf97";
    colorName.textContent = "#6fcf97";
}

function blue() {
    colorPickerContainer.style.backgroundColor = "#56ccf2";
    colorName.textContent = "#56ccf2";
}

function purple() {
    colorPickerContainer.style.backgroundColor = "#bb6bd9";
    colorName.textContent = "#bb6bd9";
}