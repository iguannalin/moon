window.addEventListener("load", () => {
  // scale function from -- https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
  function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
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

  function displayMoons(now) {
    const container = document.getElementById("container");
    container.innerHTML = "";
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
    let moonEmojiIndex = scale(now, Date.parse(moons[lastMoon]), Date.parse(moons[closestMoon]), 0, 8);
    let top = moonEmojiIndex % 1;
    moonEmojiIndex = Math.floor(moonEmojiIndex);
    container.style.marginTop =  `${top*10}px`;
    for (let i = 0; i < 8; i++) {
      const div = document.createElement("div");
      let count = (moonEmojiIndex<(4-i) ? 8-((moonEmojiIndex-(4-i))*(-1)) : (i<5) ? moonEmojiIndex-(4-i) : (i>7) ? moonEmojiIndex+(i-4) : 7-i);
      div.innerHTML = moonEmojis[count];
      container.appendChild(div);
    }
    const label = document.getElementById("label");
    label.innerText = closestMoon;
  }

  displayMoons(Date.now());
  // let days = 0;
  // addDays code from -- https://stackoverflow.com/questions/563406/how-to-add-days-to-date
  // Date.prototype.addDays = function(days) {
  //     var date = new Date(this.valueOf());
  //     date.setDate(date.getDate() + days);
  //     return date;
  // }
  // let int = setInterval(() => {
  //   displayMoons(new Date().addDays(days+=5));
  //   if (days > 50) clearInterval(int);
  // }, 500);
});