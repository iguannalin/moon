window.addEventListener("load", () => {
  // scale function from -- https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
  function scale (number, inMin, inMax, outMin, outMax) {
    return Math.floor((number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin);
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
    const now = new Date();
    let closest = Infinity;
    let closestIndex;
    let closestMoon;
    let lastMoon;
    Object.keys(moons).forEach((d, index) => {
      const date = new Date(moons[d]);
      if (date >= now && (date < new Date(closest) || date < closest)) {
          closest = moons[d];
          closestIndex = index;
          closestMoon = d;
      } else if (!closestIndex) {
        lastMoon = d;
      }
    });
    console.log(closestMoon);
    console.log(lastMoon);

    const moonEmojiIndex = scale(Date.now(), Date.parse(moons[lastMoon]), Date.parse(moons[closestMoon]), 0, 8);

    // moons[closestMoon]

    const container = document.getElementById("container");
    for (let i = 0; i < 8; i++) {
      const div = document.createElement("div");
      let count = (moonEmojiIndex<(4-i) ? 8-(moonEmojiIndex-(4-i)): (i<5) ? moonEmojiIndex-(4-i) : moonEmojiIndex+i);
      console.log({moonEmojiIndex}, {count});
      div.innerHTML = moonEmojis[count];
      container.appendChild(div);
    }
    const label = document.getElementById("label");
    label.innerText = Object.keys(moons)[0];
  }

  displayMoons();
});