// Array
const cakes = [
    { name: 'Chocolate', image: 'img/coklat.jpg', description: 'Chocolate is only the happiness that you can eat',price :'Rp 10.000' },
    { name: 'Rainbow Chococips', image:'img/warna-warni.jpg', description: 'Can make your day colorful , Love at first bite', price:'Rp 12.000'},
    { name: 'Almond', image: 'img/Almond.jpg', description: 'Natural Almond , Happiness starts from here!',price:'Rp 15.000'}
];

// Structure
function Cake(name, image, description,price) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.price = price;
}

// Stack
const cakeStack = [];
cakeStack.push(new Cake('Molten Chocolate', 'img/MoltenChocolate.jpg', 'Make the sweetest things happen in your life', 'Rp 20.000'));
cakeStack.push(new Cake('Spice Cookies', 'img/SpiceCookies.jpg', 'Every piece is unique here,because each cake has its own story', 'Rp 12.000'));

// Linked List
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CakeLinkedList {
    constructor() {
        this.head = null;
    }

    addCakeToList(cake) {
        const newNode = new Node(cake);
        newNode.next = this.head;
        this.head = newNode;
    }
}

const cakeList = new CakeLinkedList();
cakeList.addCakeToList(new Cake('Red Velvet', 'img/redvelvet.jpg', 'Forget calories and be happy and Live a sweet life!', 'Rp 30.000'));
cakeList.addCakeToList(new Cake('Brown Butter Stamp', 'img/brownbutterstampcookies.jpg', 'Dont wait until its too late get it immediately ', 'Rp 20.000 '));

// Queue
const cakeQueue = [];
cakeQueue.push(new Cake('Hazelnut', 'img/hazelnutcookies.jpg', 'Make Your Sweet Moments More Memorable with This!', 'Rp 25.000'));
cakeQueue.push(new Cake('Ice Thumbprint', 'img/IcedThumbprint.jpg', 'It feels like a warm sweet and loving hug!', 'Rp 20.000'));
cakeQueue.push(new Cake('Ginger Bread', 'img/gingerbread.jpg', 'Make your timeline more cheerful with contemporary food!', 'Rp 25.000'));

// Display cakes on the webpage
const cakeContainer = document.getElementById('cakeContainer');

//Tampilan js awal
function displayCakes(cakeArray) {
    cakeArray.forEach(cake => {
        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.innerHTML = `
            <div class="card">
                <img src="${cake.image}" class="card-img-top" alt="${cake.name}">
                <div class="card-body">
                    <h5 class="card-title">${cake.name}</h5>
                    <p class="card-text">${cake.description}</p>
                    <p class="card-text">${cake.price}</p>
                    <a href="#" class="btn btn-primary order-btn">Order</a>
                </div>
            </div>
        `;

        // Adding click event listener to the "Order" button
        const orderBtn = card.querySelector('.order-btn');
        orderBtn.addEventListener('click', function (event) {
            event.preventDefault();

            // Redirect to the transaction page with cake details in the URL
        window.location.href = `transaksi.html?name=${encodeURIComponent(cake.name)}&description=${encodeURIComponent(cake.description)}&image=${encodeURIComponent(cake.image)}&price=${encodeURIComponent(cake.price)}`;
        });

        // Appending the card to the cake container
        cakeContainer.appendChild(card);
    });
}

// Display cakes on the webpage
displayCakes(cakes);
displayCakes(cakeStack);
let currentNode = cakeList.head;
while (currentNode) {
    displayCakes([currentNode.data]);
    currentNode = currentNode.next;
}
displayCakes(cakeQueue);



