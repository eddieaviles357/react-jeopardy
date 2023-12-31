export const NUM_CATEGORIES = 6;
export const NUM_CLUES = 5;

// api
export const BASE_URL = 'http://jservice.io/api/';

export const DEFAULT_CLUE = {
  question: 'What do you call a depressed coffee',
  answer: 'depresso',
  value: 100,
  showing: null
}
// end api

// Framer Motion specific
export const MOTION_BTN_ATTR = {
  hover: {
    scale: 1.2,
    boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgb(0, 0, 198)'
  },
  tap: {
    scale: 1,
    backgroundColor: 'yellow',
    border: '3px solid blue',
    color: 'blue',
  },
  animate: {
    boxShadow: "10px 10px 4px rgba(0, 0, 0, 0.2)",
  }
}
export const MOTION_CLUE_VARIANT = {
  hidden: {
    x: '-50%',
    y: '-50%',
    scale: 0,
  },
  show: {
    x: '-50%',
    y: '-50%',
    scale: 1,
    transition: {
      duration: .5,
      stiffness: 260,
    }
  },
  leaving: {
    x: '-50%',
    y: '-50%',
    scale: 0,
    transition: {
      duration: .5,
    }
  }
}

export const MOTION_TITLE_VARIANT = {
  hidden: {
    x: 0,
    y: 0,
    opacity: 0,
    scale: 0.3,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    margin: '2rem 0',
    width: '80vw',
    filter: `drop-shadow(13px 15px 6px rgb(0 0 0 / 0.4))`,
    transition: {
      duration: 1,
    },
  }
}
// end Motion Framework specific

// mock data testing
export const MOCK_TEST_DATA = [
  {
    title: 'you get a "d"',
    clues: [{
      answer: "Dipsy",
      question: "One of the Teletubbies",
      showing: null,
      value: 400
    }, {
      answer: "a diagram",
      question: "A line drawing used as an illustration",
      showing: null,
      value: 800
    }, {
      answer: "Dow Jones Industrial Average",
      question: 'National Lead was one of the 12 companies tracked by this "average" when it debuted May 26, 1896',
      showing: null,
      value: 400
    }, {
      answer: "dorsal",
      question: "Fins on the bottom of a fish are called pectoral; this is used to describe the opposite fin up on top",
      showing: null,
      value: 200
    }, {
      answer: "differ",
      question: "If you think someone's wrong, you may \"beg to\" do this",
      showing: null,
      value: 600
    }]
  }, {
    title: 'famouse pigs',
    clues: [{
      answer: "Arnold Ziffel",
      question: "The Ziffels of Hooterville's son",
      showing: null,
      value: 100
    }, {
      answer: "Miss Piggy",
      question: "Kermit's hot hog",
      showing: null,
      value: 100
    }, {
      answer: "the Three Little Pigs",
      question: 'A famous phrase of theirs was "Not by the hair of our chinny chin chin"',
      showing: null,
      value: 200
    }, {
      answer: "kosher",
      question: 'Scientists believe that the babirusa pig might qualify for this Jewish clean food status',
      showing: null,
      value: 300
    }, {
      answer: "<i>Porky\\'s</i>",
      question: "Heavyweight actor Chuck Mitchell played the owner of this raunchy bar destroyed in a 1982 film",
      showing: null,
      value: 500
    }]
  }, {
    title: "foods",
    clues: [{
      answer: "Earl of Sandwich",
      question: "18th C. English Earl who always had meat between bread brought to the gambling tables",
      showing: null,
      value: 400
    }, {
      answer: "cure",
      question: "Pickle men, not doctors, do this for bacon & ham",
      showing: null,
      value: 300
    }, {
      answer: "cole slaw",
      question: "From Dutch meaning \"cabbage salad\", that's just what it is",
      showing: null,
      value: 100
    }, {
      answer: "southern fried chicken",
      question: "Southern specialty & America's favorite main dish",
      showing: null,
      value: 100
    }, {
      answer: "CrÃªpes Suzette",
      question: "These flaming French pancakes originally caught fire by accident",
      showing: null,
      value: 200
    }]
  }, {
    title: "politics",
    clues: [{
      answer: 'the Tea Party',
      question: 'This movement, whose name harkens back to the 1770…its first big splash with rallies on Tax Day 2009',
      showing: null,
      value: 400
    }, {
      answer: 'swing voters',
      question: "2-word term for the group who will determine an el… in a 2008 movie it's just one guy, Kevin Costner",
      showing: null,
      value: 600
    }, {
      answer: 'Trent Lott',
      question: 'In 2002 this Mississippian quit his post as Senate Republican Leader',
      showing: null,
      value: 1000
    }, {
      answer: 'Peoria',
      question: 'Asking how an idea will "play in" this home city o…ollege is asking for its impact in Middle America',
      showing: null,
      value: 600
    }, {
      answer: 'a whistle stop',
      question: '"Shrill" name for train tour electioneering',
      showing: null,
      value: 300
    }]
  }, {
    title: "automobiles",
    clues: [{
      answer: 'the speedometer & the odometer',
      question: 'The 2 standard gauges in a U.S. car that are calibrated in miles',
      showing: null,
      value: 400
    }, {
      answer: 'Spain',
      question: 'Models of Ford, Chrysler, & Cadillac are all named for cities in this S. European country',
      showing: null,
      value: 100
    }, {
      answer: 'an Olsmobile',
      question: 'In a tune from 1905, this car was "merry"',
      showing: null,
      value: 400
    }, {
      answer: 'Ford',
      question: 'In 1932, it became the 1st company to sell a low-priced car with a V-8 engine',
      showing: null,
      value: 500
    }, {
      answer: 'Oldsmobile',
      question: '"Come away with me, Lucille, in my merry" one of these',
      showing: null,
      value: 100
    }]
  }
]