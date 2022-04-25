import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

 export const products = [
  {
    _id: uuid(),
    imgSources:
      "https://images-na.ssl-images-amazon.com/images/I/91R5TW7tdzL.jpg",
    title: "Wish I Could Tell You ",
    author: "Durjoy Datta",
    originalPrice: "3000",
    discount: 24,
    ratings: 3,
    categoryName: "romantic",
  },
  {
    _id: uuid(),
    imgSources:
      "https://images-na.ssl-images-amazon.com/images/I/51fcxha0pML._SX324_BO1,204,203,200_.jpg",
    title: "SERIOUS MEN",
    author: " Manu Joseph",
    originalPrice: "300",
    discount: 54,
    ratings: 3,
    categoryName: "funny",
  },
  {
    _id: uuid(),
    imgSources:
      "https://images-na.ssl-images-amazon.com/images/I/51+fN4XewYL._SX322_BO1,204,203,200_.jpg",
    title: "SPY IN THE AMBER",
    author: "Manohar Malgonkar",
    originalPrice: "3250",
    discount: 14,
    ratings: 3,
    categoryName: "horror",
  },
  {
    _id: uuid(),
    imgSources:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1350204288l/16085062.jpg",
    title: "Dork Trilogy",
    author:"Sidin Vadukut",
    originalPrice: 4000,
    discount: 20,
    ratings: 3,
    categoryName: "horror",
  },
  {
    _id: uuid(),
    imgSources:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1309287247l/676885.jpg",
    title: "The Simoqin Prophecies",
    author : "Samit Basu",
    originalPrice: 2000,
    discount: 4,
    ratings: 3,
    categoryName: "drama",
  },
  {
    _id: uuid(),
    imgSources:
      "https://images-na.ssl-images-amazon.com/images/I/81M39PBwo7L.jpg",
    title: "Mrs Funnybones",
    author: "Twinkle Khanna",
    originalPrice: 500,
    discount: 35,
    ratings: 3,
    categoryName: "funny",
  },

  {
    _id: uuid(),
    imgSources:
      "https://images-na.ssl-images-amazon.com/images/I/91MCWisDhQL.jpg",
    title: "Sacred Games",
    author: "Vikram Chandra",
    originalPrice: 1000,
    discount: 33,
    ratings: 4,
    categoryName: "horror",
  },
  {
    _id: uuid(),
    imgSources:"https://images-na.ssl-images-amazon.com/images/I/81vFRkuODtL.jpg",
    title: "Patang",
    author: "Bhaskar Chattopadhyay",
    originalPrice: 2500,
    discount: 10,
    ratings: 3,
    categoryName: "drama",
  },
  {
    _id: uuid(),
    imgSources: "https://images-na.ssl-images-amazon.com/images/I/51Otpsm-IbL._SX325_BO1,204,203,200_.jpg",
    title: "Gone With The Vindaloo",
    author: "Vikram Nair",
    originalPrice: 4500,
    discount: 65,
    ratings: 2,
    categoryName: "funny",
  },
  {
    _id: uuid(),
    imgSources:"https://images-na.ssl-images-amazon.com/images/I/41vqdc6Q21L._SX331_BO1,204,203,200_.jpg",
    title: "Me Talk Pretty One Day",
    author: "David Sedaris",
    originalPrice: 3900,
    discount: 38,
    ratings: 4,
    categoryName: "funny",
  },
  {
    _id: uuid(),
    imgSources: "https://fivebooks.com/app/uploads/2010/12/0450040186.01.LZ_.jpg",
    title: "The Shining",
    author: "Stephen King",
    originalPrice: 3300,
    discount: 29,
    ratings: 3,
    categoryName: "drama",
  },
  {
    _id: uuid(),
    imgSources: "https://images-na.ssl-images-amazon.com/images/I/71LL+ttV-VL.jpg",
    title: "Furiously Happy",
    author: "Jenny Lawson",
    originalPrice: 3500,
    discount: 55,
    ratings: 1,
    categoryName: "funny",
  },
  {
    _id: uuid(),
    imgSources: "https://images-na.ssl-images-amazon.com/images/I/71+YK9HSaJL.jpg",
    title: "Me Before You",
    author: "Jojo Moyes",
    originalPrice: 3600,
    discount: 70,
    ratings: 5,
    categoryName: "romantic",
  },
  {
    _id: uuid(),
    imgSources: "https://upload.wikimedia.org/wikipedia/en/a/a9/The_Fault_in_Our_Stars.jpg",
    title: "The Fault in Our Stars",
    author: "John Green",
    originalPrice: 3000,
    discount: 24,
    ratings: 3,
    categoryName: "romantic",
  },
];