// import images
import biryani from "../assets/biryani.jpg";
import burger from "../assets/burger.jpg";
import choleBhature from "../assets/chole-bhature.jpg";
import momos from "../assets/momos.jpg";
import paneerTikka from "../assets/Paneer-Tikka.jpg";
import paniPuri from "../assets/pani-puri.jpg";
import pasta from "../assets/pasta.jpg";
import pizza from "../assets/pizza.jpg";
import puranPoli from "../assets/puran-poli.jpg";

const products = [
  {
    id: 1,
    title: "Biryani",
    desc: ["Spicy rice dish", "  , Full meal"],
    oldPrice: 300,
    newPrice: 220,
    image: biryani
  },
  {
    id: 2,
    title: "Burger",
    desc: ["Fast food", "  , Cheesy & tasty"],
    oldPrice: 150,
    newPrice: 120,
    image: burger
  },
  {
    id: 3,
    title: "Chole Bhature",
    desc: ["Punjabi dish", "  , Heavy breakfast"],
    oldPrice: 180,
    newPrice: 150,
    image: choleBhature
  },
  {
    id: 4,
    title: "Momos",
    desc: ["Steamed snack", "  , Street food"],
    oldPrice: 120,
    newPrice: 90,
    image: momos
  },
  {
    id: 5,
    title: "Paneer Tikka",
    desc: ["Grilled paneer", "  , Starter item"],
    oldPrice: 250,
    newPrice: 200,
    image: paneerTikka
  },
  {
    id: 6,
    title: "Pani Puri",
    desc: ["Street snack", "  , Spicy & tangy"],
    oldPrice: 60,
    newPrice: 40,
    image: paniPuri
  },
  {
    id: 7,
    title: "Pasta",
    desc: ["Italian dish", "  , Creamy taste"],
    oldPrice: 200,
    newPrice: 160,
    image: pasta
  },
  {
    id: 8,
    title: "Pizza",
    desc: ["Cheesy pizza", "  , Kids favorite"],
    oldPrice: 350,
    newPrice: 280,
    image: pizza
  },
  {
    id: 9,
    title: "Puran Poli",
    desc: ["Maharashtrian sweet"],
    oldPrice: 200,
    newPrice: 160,
    image: puranPoli
  }
];

export default products;