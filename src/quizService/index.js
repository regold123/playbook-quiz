import React from "react";
import ninetyG from '../images/90G.jpg';
import ninetyL from '../images/90L.jpg';
import ninetyN from '../images/90N.jpg';
import ninetyR from '../images/90R.jpg';
import ninetyOneG from '../images/91G.jpg';
import ninetyOneL from '../images/91L.jpg';
import ninetyOneN from '../images/91N.jpg';
import ninetyOneR from '../images/91R.jpg';
import ninetyThreeG from '../images/93G.jpg';
import ninetyThreeL from '../images/93L.jpg';
import ninetyThreeN from '../images/93N.jpg';
import ninetyThreeR from '../images/93R.jpg';
import ninetySixG from '../images/96G.jpg';
import ninetySixL from '../images/96L.jpg';
import ninetySixN from '../images/96N.jpg';
import ninetySixR from '../images/96R.jpg';

// N Plays
const n90 = <img className="" src={(ninetyN)} alt=""></img>;
const n91 = <img className="" src={(ninetyOneN)} alt=""></img>;
const n93 = <img className="" src={(ninetyThreeN)} alt=""></img>;
const n96 = <img className="" src={(ninetySixN)} alt=""></img>;
// G Plays
const g90 = <img className="" src={(ninetyG)} alt=""></img>;
const g91 = <img className="" src={(ninetyOneG)} alt=""></img>;
const g93 = <img className="" src={(ninetyThreeG)} alt=""></img>;
const g96 = <img className="" src={(ninetySixG)} alt=""></img>;
// L Plays
const l90 = <img className="" src={(ninetyL)} alt=""></img>;
const l91 = <img className="" src={(ninetyOneL)} alt=""></img>;
const l93 = <img className="" src={(ninetyThreeL)} alt=""></img>;
const l96 = <img className="" src={(ninetySixL)} alt=""></img>;
// R Plays
const r90 = <img className="" src={(ninetyR)} alt=""></img>;
const r91 = <img className="" src={(ninetyOneR)} alt=""></img>;
const r93 = <img className="" src={(ninetyThreeR)} alt=""></img>;
const r96 = <img className="" src={(ninetySixR)} alt=""></img>;


const qBank = [
  {
    question:
      "90: What does Nebula run?",
    answers: [n90, n91, n93, n96],
    correct: n90,
    questionId: "099099"
  },
  {
    question:
      "90: What does Loki run?",
    answers: [l93, l91, l90, l96],
    correct: l90,
    questionId: "977599"
  },
  {
    question:
      '90: What does Rocket run?',
    answers: [r91, r90, r96, r93],
    correct: r90,
    questionId: "183452"
  },
  {
    question:
      '90: What does Gamora run?',
    answers: [g96, g93, g91, g90],
    correct: g90,
    questionId: "805367"
  },
  {
    question:
      "91: What does Nebula run?",
    answers: [n96, n90, n91, n93],
    correct: n91,
    questionId: "368290"
  },
  {
    question:
      "91: What does Loki run?",
    answers: [l93, l90, l96, l91],
    correct: l91,
    questionId: "226806"
  },
  {
    question:
      '91: What does Rocket run?',
    answers: [r90, r93, r91, r96],
    correct: r91,
    questionId: "233472"
  },
  {
    question:
      '91: What does Gamora run?',
    answers: [g96, g93, g90, g91],
    correct: g91,
    questionId: "448936"
  },
  {
    question:
      "93: What does Nebula run?",
    answers: [n91, n93, n96, n90],
    correct: n93,
    questionId: "990749"
  },
  {
    question:
      "93: What does Loki run?",
    answers: [l91, l90, l93, l96],
    correct: l93,
    questionId: "726618"
  },
  {
    question:
      '93: What does Rocket run?',
    answers: [r91, r96, r93, r90],
    correct: r93,
    questionId: "851602"
  },
  {
    question:
      '93: What does Gamora run?',
    answers: [g93, g90, g96, g91],
    correct: g93,
    questionId: "055029"
  },
  {
    question:
      "96: What does Nebula run?",
    answers: [n91, n96, n90, n93],
    correct: n96,
    questionId: "340931"
  },
  {
    question:
      "96: What does Loki run?",
    answers: [l96, l91, l93, l90],
    correct: l96,
    questionId: "934951"
  },
  {
    question:
      '96: What does Rocket run?',
    answers: [r93, r90, r91, r96],
    correct: r96,
    questionId: "345982"
  },
  {
    question:
      '96: What does Gamora run?',
    answers: [g91, g93, g96, g90],
    correct: g96,
    questionId: "140192"
  },
];

export default (n = 6) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
