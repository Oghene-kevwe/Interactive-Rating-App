let nums = document.querySelectorAll(".number");
let section = document.querySelector(".section-content");
let submitBtn = document.querySelector(".submit-btn");

nums.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.classList.toggle("select");

    nums.forEach((item2) => {
      if (item2 !== item) {
        item2.classList.remove("select");
      }
    });

    let value = e.currentTarget.textContent;

    submitBtn.addEventListener("click", () => {
      section.innerHTML = `<div class="thank-you-section">
            <div class="thank-you-center">
                <div class="thank-you-img">
                  <img src="./images/illustration-thank-you.svg" alt="" />
                </div>
                <p class="result">you selected ${value} out of 5</p>
            </div>
            <h1 class="thank-you">Thank you</h1>
            <p>
              We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
            </p>
          </div>`;
    });
  });
});
