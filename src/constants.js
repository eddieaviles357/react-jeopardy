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

// end Motion Framework specific