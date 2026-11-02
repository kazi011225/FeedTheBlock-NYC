// =========================================================
// BARS FOR THE BLOCK: the quote section with candy bar buttons
// the quotes live in data/quotes.json
// =========================================================

// find the quote section on the page
const bars = document.querySelector('.bars');

// only run if this page has the quote section
if (bars) {

  const quoteText = bars.querySelector('.quote');
  const quoteWho = bars.querySelector('.who');
  const quoteInner = bars.querySelector('.quote-inner');
  const prevButton = bars.querySelector('.candy-prev');
  const nextButton = bars.querySelector('.candy-next');

  let quotes = [];   // the full list, after shuffling
  let current = 0;   // which quote is showing right now

  // shuffles a list into a random order (the "Fisher-Yates" shuffle).
  // it walks backwards through the list and swaps each item
  // with a random item before it
  function shuffle(list) {
    const copy = list.slice();   // work on a copy, keep the original safe
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // builds the order: 4 famous, then 1 of ours, then 4 famous, then 1 of ours...
  // so every 5th quote is always a FeedTheBlock NYC original
  function buildOrder(data) {
    const famous = shuffle(data.famous);
    const originals = shuffle(data.originals).map((q) => ({
      text: q.text,
      author: data.originalAuthor
    }));

    const order = [];
    let f = 0;
    let o = 0;
    while (f < famous.length || o < originals.length) {
      // 4 famous quotes (or fewer, if we run out)
      for (let k = 0; k < 4 && f < famous.length; k++) {
        order.push(famous[f]);
        f++;
      }
      // then 1 of ours
      if (o < originals.length) {
        order.push(originals[o]);
        o++;
      }
    }
    return order;
  }

  // puts the current quote on the screen
  function showQuote() {
    const q = quotes[current];
    quoteText.textContent = q.text;
    quoteWho.textContent = '(' + q.author + ')';

    // our quotes get the orange name
    quoteWho.classList.toggle('ours', q.author === 'FeedTheBlock NYC');
  }

  // moves to the next (+1) or previous (-1) quote, with a slide
  function move(step) {
    // 1. slide the old quote out
    quoteInner.className = 'quote-inner ' + (step > 0 ? 'slide-out-left' : 'slide-out-right');

    // 2. after it's gone, swap the words and slide the new one in
    setTimeout(() => {
      // the % (remainder) makes it loop: after the last quote, back to the first
      current = (current + step + quotes.length) % quotes.length;
      showQuote();
      quoteInner.className = 'quote-inner ' + (step > 0 ? 'slide-in-left' : 'slide-in-right');
    }, 180);
  }

  // load the quotes file, then get everything ready
  fetch('data/quotes.json')
    .then((response) => response.json())
    .then((data) => {
      quotes = buildOrder(data);   // a new random order on every page load
      current = 0;
      showQuote();
      prevButton.addEventListener('click', () => move(-1));
      nextButton.addEventListener('click', () => move(1));
    })
    .catch(() => {
      // if the file can't load (for example, opening index.html by double-clicking),
      // the quote that is already written in the HTML just stays on the screen
      console.log('Could not load data/quotes.json. Run a local server to test it.');
    });
}