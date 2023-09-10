window.addEventListener("DOMContentLoaded", (event) => {
  const num = 12.34567;
  const roundedNum = num.toFixed(2);
  const toFixedParagraph = document.getElementById("toFixedResult");
  toFixedParagraph.innerHTML += roundedNum;
});
