function show(id) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.style.display = "none";
  });

  document.getElementById(id).style.display = "block";
}
const product = {
  name: "Laptop",
  price: 50000,
  inStock: true
};

function loadProduct() {
  let div = document.getElementById("product");

  div.innerHTML = `
    <div class="card">
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price.toFixed(2)}</p>
      <p style="color:${product.inStock ? 'green' : 'red'}">
        ${product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>
    </div>
  `;
}

loadProduct();
let books = [];

function addBook() {
  let input = document.getElementById("bookInput");
  let book = input.value;

  if (book === "") return;

  books.push({ id: Date.now(), name: book });
  input.value = "";

  displayBooks();
}

function deleteBook(id) {
  books = books.filter(b => b.id !== id);
  displayBooks();
}

function displayBooks() {
  let container = document.getElementById("books");
  container.innerHTML = "";

  books.forEach(b => {
    container.innerHTML += `
      <div>
        ${b.name}
        <button onclick="deleteBook(${b.id})">Delete</button>
      </div>
    `;
  });
}
class Person {
  constructor(name) {
    this.name = name;
  }

  display() {
    return this.name;
  }
}

class Student extends Person {
  display() {
    return "Student: " + this.name;
  }
}

class Teacher extends Person {
  display() {
    return "Teacher: " + this.name;
  }
}

function loadPersons() {
  let s = new Student("Rahul");
  let t = new Teacher("Sharma");

  document.getElementById("persons").innerHTML = `
    <p>${s.display()}</p>
    <p>${t.display()}</p>
  `;
}

loadPersons();