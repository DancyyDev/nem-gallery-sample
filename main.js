document.querySelector(".how").addEventListener("click", switchToWork);
document.querySelector(".impact").addEventListener("click", switchToImpact);

function switchToWork() {
  let x = document.querySelector(".artifact-tabs-impact");
  let y = document.querySelector(".artifact-hidden");
  let xColor = document.querySelector(".impact");
  let yColor = document.querySelector(".how");
  if (y.style.display === "none") {
    y.style.display = "block";
    x.style.display = "none";

    xColor.style.color = "gray";
    yColor.style.color = "black";
  } else {
    y.style.display = "none";
    x.style.display = "block";

    yColor.style.color = "gray";
    xColor.style.color = "black";
  }
}

function switchToImpact() {
  let x = document.querySelector(".artifact-tabs-impact");
  let xColor = document.querySelector(".impact");
  let yColor = document.querySelector(".how");
  let y = document.querySelector(".artifact-hidden");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";

    yColor.style.color = "gray";
    xColor.style.color = "black";
  } else {
    x.style.display = "none";
    y.style.display = "block";
    xColor.style.color = "gray";
    yColor.style.color = "black";
  }
}
