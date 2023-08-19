window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  // NASA: These eight phases are, in order, new Moon, waxing crescent, first quarter, waxing gibbous, full Moon, waning gibbous, third quarter and waning crescent.
  const moonEmojis = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
  const moons = {
      "Full Wolf Moon": "January 6, 2023",
      "Full Snow Moon": "February 5, 2023",
      "Full Worm Moon": "March 7, 2023",
      "Full Pink Moon": "April 6, 2023",
      "Full Flower Moon": "May 5, 2023",
      "Full Strawberry Moon": "June 3, 2023",
      "Full Buck Moon": "July 3, 2023",
      "Full Sturgeon Moon": "August 1, 2023",
      "Blue Moon": "August 30, 2023",
      "Full Corn Moon": "September 29, 2023",
      "Full Hunter’s Moon": "October 28, 2023",
      "Full Beaver Moon": "November 27, 2023",
      "Full Cold Moon": "December 26, 2023"
  };

  function displayMoons() {
    const container = document.getElementById("container");
    moonEmojis.forEach((moon) => {
      const div = document.createElement("div");
      div.innerHTML = moon;
      container.appendChild(div);
    });
    const label = document.getElementById("label");
    label.innerText = Object.keys(moons)[0];
  }

  displayMoons();
});