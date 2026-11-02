// =========================================================
// FOOD SECURITY AVE: the train animation + counting numbers
// =========================================================

// find the station on the page
const station = document.querySelector('.station');

// does this person want less motion? (a setting on their computer or phone)
const lessMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// only run if the station is on this page, and the person is OK with motion
if (station && !lessMotion) {

  // all the numbers in the train windows
  const numbers = station.querySelectorAll('[data-to]');

  // shows a number the right way: 1250 -> "1,250", and adds "$" for money
  function showNumber(el, value) {
    const text = Math.round(value).toLocaleString('en-US');
    if (el.dataset.money) {
      el.textContent = '$' + text;
    } else {
      el.textContent = text;
    }
  }

  // counts each number up from 0 to its real value
  function countUp() {
    numbers.forEach((el) => {
      const goal = Number(el.dataset.to);
      const start = performance.now();
      const length = 1200;   // how long the count takes, in milliseconds

      function tick(now) {
        const progress = Math.min((now - start) / length, 1);   // 0 to 1
        const eased = 1 - Math.pow(1 - progress, 3);           // fast first, slow at the end
        showNumber(el, goal * eased);
        if (progress < 1) {
          requestAnimationFrame(tick);   // keep going on the next screen frame
        }
      }
      requestAnimationFrame(tick);
    });
  }

  // step 1: get ready. the train waits off screen, the numbers start at 0
  station.classList.add('ready');
  numbers.forEach((el) => showNumber(el, 0));

  // step 2: wait until the station scrolls into view (40% of it showing)
  const watcher = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        station.classList.add('go');      // CSS starts the sign + train animation
        setTimeout(countUp, 2900);        // count up after the train stops
        watcher.disconnect();             // only play it once
      }
    });
  }, { threshold: 0.4 });

  watcher.observe(station);
}