'use strict'

module.exports = {
    setBoardData: () => {
      return Promise.resolve([
        {title: 'you get a "d"',
        clues: [{
            answer: "Dipsy",
            question: "One of the Teletubbies",
            showing: null,
            value: 400
        },{
            answer: "a diagram",
            question: "A line drawing used as an illustration",
            showing: null,
            value: 800
        },{
            answer: "Dow Jones Industrial Average",
            question: 'National Lead was one of the 12 companies tracked by this "average" when it debuted May 26, 1896',
            showing: null,
            value: 400
        },{
            answer: "dorsal",
            question: "Fins on the bottom of a fish are called pectoral; this is used to describe the opposite fin up on top",
            showing: null,
            value: 200
        },{
            answer: "differ",
            question: "If you think someone's wrong, you may \"beg to\" do this",
            showing: null,
            value: 600
        },
        ]}
      ])
    },
  }