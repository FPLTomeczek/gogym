import body_building from "./img/classes/body_building.jpg";
import boxing from "./img/classes/boxing.jpg";
import crossfit from "./img/classes/crossfit.jpg";
import fat_burn from "./img/classes/fat_burn.jpg";
import fitness from "./img/classes/fitness.jpg";
import meditation from "./img/classes/meditation.jpg";
import mma from "./img/classes/mma.jpg";
import orbitrek from "./img/classes/orbitrek.jpg";
import power_lifting from "./img/classes/power_lifting.jpg";
import running from "./img/classes/running.jpg";
import workout from "./img/classes/workout.jpg";
import yoga from "./img/classes/yoga.jpg";

export const classes = [
  {
    img: orbitrek,
    trainer: "Dorian Yate",
    title: "Orbitrek",
    time: "Wed: 9:00 am",
  },
  {
    img: meditation,
    trainer: "Dorian Yate",
    title: "Meditation",
    time: "Fri: 1:00 pm",
  },
  {
    img: boxing,
    trainer: "Dorian Yate",
    title: "Boxing",
    time: "Tue: 4:00 pm",
  },
  {
    img: fat_burn,
    trainer: "Dorian Yate",
    title: "Fat Burn",
    time: "Wed: 9:00 am",
  },
  {
    img: power_lifting,
    trainer: "Dorian Yate",
    title: "Power Lifting",
    time: "Wed: 9:00 am",
  },
  {
    img: workout,
    trainer: "Dorian Yate",
    title: "Workout",
    time: "Wed: 9:00 am",
  },
  {
    img: crossfit,
    trainer: "Dorian Yate",
    title: "Crossfit",
    time: "Wed: 9:00 am",
  },
  {
    img: running,
    trainer: "Dorian Yate",
    title: "Running",
    time: "Wed: 9:00 am",
  },
  {
    img: body_building,
    trainer: "Dorian Yate",
    title: "Body Building",
    time: "Wed: 9:00 am",
  },
  {
    img: mma,
    trainer: "Dorian Yate",
    title: "MMA",
    time: "Wed: 9:00 am",
  },
  {
    img: yoga,
    trainer: "Dorian Yate",
    title: "Yoga",
    time: "Wed: 9:00 am",
  },
  {
    img: fitness,
    trainer: "Dorian Yate",
    title: "Fitness",
    time: "Wed: 9:00 am",
  },
];

export const schedule = {
  monday: [
    { name: "fitness", time: "9:00am - 10:00am", trainer: "David Villa" },
    {
      name: "body building",
      time: "10:00pm - 11:00pm",
      trainer: "John Weights",
    },
    { name: "Running", time: "4:00pm - 5:00pm", trainer: "Junifor Jonas" },
    { name: "Cycling", time: "6:00pm - 7:00pm", trainer: "Robert Louis" },
  ],
  tuesday: [
    { name: "Boxing", time: "9:00am - 10:00am", trainer: "Mike Tyson" },
    { name: "Yoga", time: "10:00pm - 11:00pm", trainer: "John Weights" },
    { name: "Crossfit", time: "4:00pm - 5:00pm", trainer: "Cristofer Columbo" },
  ],
  wednesday: [
    { name: "Cycling", time: "9:00am - 10:00am", trainer: "Mario Vreco" },
    {
      name: "Body Building",
      time: "10:00pm - 11:00pm",
      trainer: "John Weights",
    },
    { name: "Fitness", time: "4:00pm - 5:00pm", trainer: "Tom Rizzly" },
    { name: "Running", time: "6:00pm - 7:00pm", trainer: "Michael Jonson" },
  ],
  thursday: [
    { name: "fitness", time: "9:00am - 10:00am", trainer: "David Villa" },
    { name: "Cycling", time: "6:00pm - 7:00pm", trainer: "Robert Louis" },
  ],
  friday: [
    { name: "Boxing", time: "9:00am - 10:00am", trainer: "Mike Mich" },
    { name: "Karate", time: "10:00pm - 11:00pm", trainer: "John Jones" },
    { name: "Crossfit", time: "4:00pm - 5:00pm", trainer: "Cristofer Columbo" },
  ],
  saturday: [
    { name: "Power Lifting", time: "9:00am - 10:00am", trainer: "David Laid" },
    { name: "Boxing", time: "10:00pm - 11:00pm", trainer: "Tyson Fury" },
    { name: "Yoga", time: "4:00pm - 5:00pm", trainer: "Milica Tails" },
  ],
  sunday: [
    { name: "fitness", time: "9:00am - 10:00am", trainer: "David Villa" },
    { name: "Karate", time: "10:00pm - 11:00pm", trainer: "John Jones" },
    { name: "Crossfit", time: "4:00pm - 5:00pm", trainer: "Cristofer Columbo" },
    { name: "Running", time: "6:00pm - 7:00pm", trainer: "Michael Jonson" },
  ],
};
