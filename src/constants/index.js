import {
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
} from "../assets";

const cardArray = [
  {
    name: "laravel",
    key: "key-laravel-1",
    img: item1,
    active: false,
    resolve: false,
  },
  {
    name: "laravel",
    key: "key-laravel-2",
    img: item1,
    active: false,
    resolve: false,
  },
  {
    name: "css",
    key: "key-css-2",
    img: item2,
    active: false,
    resolve: false,
  },
  {
    name: "css",
    key: "key-css-1",
    img: item2,
    active: false,
    resolve: false,
  },

  {
    name: "flutter",
    key: "key-flutter-1",
    img: item3,
    active: false,
    resolve: false,
  },
  {
    name: "flutter",
    key: "key-flutter-2",
    img: item3,
    active: false,
    resolve: false,
  },
  {
    name: "html",
    key: "key-html-1",
    img: item4,
    active: false,
    resolve: false,
  },
  {
    name: "html",
    key: "key-html-2",
    img: item4,
    active: false,
    resolve: false,
  },
  {
    name: "js",
    key: "key-js-1",
    img: item5,
    active: false,
    resolve: false,
  },
  {
    name: "js",
    key: "key-js-2",
    img: item5,
    active: false,
    resolve: false,
  },
  {
    name: "react",
    key: "key-react-1",
    img: item6,
    active: false,
    resolve: false,
  },
  {
    name: "react",
    key: "key-react-2",
    img: item6,
    active: false,
    resolve: false,
  },
  {
    name: "vue",
    key: "key-vue-1",
    img: item7,
    active: false,
    resolve: false,
  },
  {
    name: "vue",
    key: "key-vue-2",
    img: item7,
    active: false,
    resolve: false,
  },
  {
    name: "fireabse",
    key: "key-fireabse-1",
    img: item8,
    active: false,
    resolve: false,
  },
  {
    name: "fireabse",
    key: "key-fireabse-2",
    img: item8,
    active: false,
    resolve: false,
  },
];

export const HandelPreventClass = () => {
  document.body.classList.add("prevent");
  setTimeout(() => {
    document.body.classList.remove("prevent");
  }, 1000);
  console.log("prevnet");
};
export default cardArray;

export const items = ["hello"];
