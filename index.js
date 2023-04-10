
function displayProducts(product) {
  let card = ""
  product.forEach(products=>{
  card +=`
  
 
  

  
  
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${products.image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${products.name}"</h5>
    <p class="card-text">${products.price}.</p>
    <p class="card-text">${products.description}.</p>
    <p class="card-text">${products.category}.</p>
    <a href="#" class="btn btn-primary ">Buy</a>
</div>
  </div>
</div>

  `})

document.querySelector("#item-list").innerHTML=card
  }
 function displayMore(pro){


 

  let more = ""
  pro.forEach(products=>{
  more +=`

  <div class="card">
 
  <div class="card-body">
    <h5 class="card-title">${products.name}"</h5>
    <p class="card-text">${products.price}.</p>
    <p class="card-text">${products.description}.</p>
    <p class="card-text">${products.category}.</p>
    <a href="#" class="btn btn-primary ">Buy</a>

  </div>
</div>
  
   `
  })

  document.getElementById("info-btn").innerHTML = more;
const button=document.getElementById("info-btn").addEventListener("click", displayMore);
 }

  document.getElementById("item-list").addEventListener("mouseover", mouseOver);
  document.getElementById("item-list").addEventListener("mouseout", mouseOut);
  
  function mouseOver() {
    document.getElementById("item-list").style.color = "red";
  }
  
  function mouseOut() {
    document.getElementById("item-list").style.color = "black";
  }
    
function fetchProducts() {
  fetch(`http://localhost:3000/products`)
  
  .then ( res => res.json())
  .then(products=>displayProducts(products))
  

  
}

fetchProducts();


//   card.className = "card col-2 p-0 m-4"
//   card.dataset.id = product.id
//   card.innerHTML = `
//     <img src="${product.image}" class="card-img-top" alt="${product.name}" title="Click to view details">
//     <div class="card-body">
//       <h5 class="card-title">${product.name}</h5>
//       <a href="#" class="btn btn-primary">Add to cart</a>
//     </div>
//   `
//   card.addEventListener("click", () => {
//     card.innerHTML = `
//       <img src="${product.image}" class="card-img-top" alt="${product.name}">
//       <div class="card-body">
//         <h5 class="card-title">${product.name}</h5>
//         <p class="card-text">Ksh ${product.price}</p>
//         <p class="card-text">${product.image}</p>
//         <h5 class="card-brand">Country of origin: ${product.description}</h5>
//         <h5 class="card-brand">Type: ${product.category}</h5>
      
//         <a href="#" class="btn btn-primary">Add to cart</a>
//       </div>
//     `
//   })
// //   card.addEventListener("mouseover", () => {
//     const image = card.querySelector(".card-img-top")
//     image.setAttribute("title", "Click to view details")
//   })
//   document.querySelector("#item-list").append(card)
// }
// // Function to fetch products from db.json
// function fetchProducts(){
// fetch("http://localhost:3000/products")
// .then(res => res.json())
// .then((products) => {
//   products.forEach((product) => {
//     displayProducts(product)
//   })
// })
// }
// fetchProducts()
// Function to delete product
function deleteProduct(id) {
  fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type" : "application/json"
    }
  })

  .then(res => res.json())
  .then(data => console.log(data))
}
// function to create table
// function addProduct(product) {
//   let tableRow = document.createElement("tr")
//   tableRow.id = "table-row"
//   tableRow.innerHTML = `
//     <th scope="row">${product.id}</th>
//     <td>${product.name}</td>
//     <td>${product.price}</td>
//     <td>${product.image}</td>
//     <td>${product.description}</td>
//     <td>${product.category}</td>


//     <td><button class="btn btn-success">Edit</button></td>
//     <td><button class="btn btn-danger" id="delete">Delete</button></td>
//   `
//   let deleteButton = tableRow.querySelector("#delete")
//   deleteButton.addEventListener("click", () => {
//     deleteProduct(product.id)
//     tableRow.remove()
//   })
//   document.querySelector("#table-body").append(tableRow)
// }
// function getProducts() {
//   fetch(" http://localhost:3000/products")
//   .then(res => res.json())
//   .then(products =>
//     products.forEach((product) => {
//       addProduct(product)
//     })
//     )
// }
// getProducts()
// // function to collect data
// // let formData;
// // function collectFormData() {
// //   let form = document.querySelector("#form")
// //   form.addEventListener("submit", (e) => {
// //     e.preventDefault()
// //     formData = {
// //       name: e.target.name.value,
// //       price: e.target.price.value,
// //       image: e.target.image.value,
// //       description: e.target.description.value,
      

      
// //     }
//   //  postProducts()
//  // })
// //}


// //function to collect data

//  let form = document.querySelector("#form")
// function collectFormData() {

//   form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     formData = {
//       name: e.target.name.value,
//       price: e.target.price.value,
//       image: e.target.image.value,
//       description: e.target.description.value,
//     }
  
//   })
//   collectFormData()
// }



// POST to database
function postProducts(formData) {
  fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(products => console.log(products))
}

// // collectFormData()
// // // POST to database
// // function postProducts(formData) {
// //   fetch(" http://localhost:3000/products", {
// //     method: "POST",
// //     headers: {
// //       "Content-Type": "application/json"
// //     },
// //     body: JSON.stringify(formData)
// //   })
// //   .then(res => res.json())
// //   .then(products => console.log(products))
// // }

// // // function generateImage() {
// // //   const imageUrl = "https://source.unsplash.com/random/300x200";
// // //   const image = document.createElement("img");
// // //   image.src = imageUrl;
// // //   document.getElementById("product-image").appendChild(image);
// // // }

// // // Call the function to generate the image
// // generateImage();

const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = input.value;
  // do something with the search term, e.g. search a database or API
});

