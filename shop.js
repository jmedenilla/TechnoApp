const product = [
  {
    id: 0,
    image: "images/image1.png",
    title: "College of Education",
    category: "ID Lace",
    price: 50,
  },
  {
    id: 1,
    image: "images/image2.png",
    title: "Arts and Sciences",
    category: "ID Lace",
    price: 50,
  },
  {
    id: 2,
    image: "images/image3.png",
    title: "College of Engineering",
    category: "ID Lace",
    price: 50,
  },
  {
    id: 3,
    image: "images/image4.png",
    title: "College of Business Ad.",
    category: "ID Lace",
    price: 50,
  },
  {
    id: 4,
    image: "images/image5.png",
    title: "College of Technology",
    category: "ID Lace",
    price: 50,
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];

document.getElementById("searchBar").addEventListener("keyup", (e) => {
  const searchData = e.target.value.toLowerCase();
  const filteredData = categories.filter((item) => {
    return item.title.toLowerCase().includes(searchData);
  });
  displayItem(filteredData);
});

const displayItem = (items) => {
  document.getElementById("root").innerHTML = items
    .map((item) => {
      var { image, title, category, price } = item;
      return `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <p class='product-name'>${title}</p>
                    <p class='product-category'>${category}</p>
                    <h2>₱ ${price}.00</h2>
                <button>Buy Now</button>
                </div>
            </div>`;
    })
    .join("");
};
displayItem(categories);
