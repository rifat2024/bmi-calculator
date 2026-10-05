const weightInput = document.getElementById("weightInput");

const feetInput = document.getElementById("feetInput");
const inchInput = document.getElementById("inchInput");

const calculateBtn = document.getElementById("calculateBtn");

const loader = document.getElementById("loader");
const loaderIcon = document.getElementById("loaderIcon");

const resultBox = document.getElementById("resultBox");
const result = document.getElementById("result");
const category = document.getElementById("category");


calculateBtn.addEventListener("click", function () {

  const weight = Number(weightInput.value);

  const feet = Number(feetInput.value);

  const inches = Number(inchInput.value);


  // Validation

  if (
    weight <= 0 ||
    feet <= 0 ||
    inches < 0 ||
    inches > 11
  ) {

    resultBox.classList.add("hidden");

    category.textContent = "Please enter valid values.";

    return;
  }


  // Hide old result

  resultBox.classList.add("hidden");


  // Show loader

  loader.classList.remove("hidden");


  // Disable button

  calculateBtn.disabled = true;

  calculateBtn.classList.add("opacity-50", "cursor-not-allowed");


  // Rotate loading emoji

  let rotation = 0;

  const loaderInterval = setInterval(function () {

    rotation += 45;

    loaderIcon.style.transform =
      `rotate(${rotation}deg)`;

  }, 100);


  // Wait 2000ms

  setTimeout(function () {

    // Stop loader animation

    clearInterval(loaderInterval);

    loader.classList.add("hidden");


    // Convert feet + inches to total inches

    const totalInches =
      (feet * 12) + inches;


    // Convert inches to meter

    const heightMeter =
      totalInches * 0.0254;


    // Calculate BMI

    const bmi =
      weight / (heightMeter * heightMeter);


    // Show BMI

    result.textContent =
      `BMI: ${bmi.toFixed(2)}`;


    // Determine category

    if (bmi < 18.5) {

      category.textContent =
        "Underweight";

    } else if (bmi < 25) {

      category.textContent =
        "Normal";

    } else if (bmi < 30) {

      category.textContent =
        "Overweight";

    } else {

      category.textContent =
        "Obese";

    }


    // Show result box

    resultBox.classList.remove("hidden");


    // Enable button

    calculateBtn.disabled = false;

    calculateBtn.classList.remove(
      "opacity-50",
      "cursor-not-allowed"
    );

  }, 2000);

});