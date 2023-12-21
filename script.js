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
cakeStack.push(new Cake('Molten Chocolate', 'img/MoltenChocolate.jpg', 'Jadikan hal-hal termanis terjadi dalam hidupmu','Rp 20.000'));
cakeStack.push(new Cake('Spice Cookies', 'img/SpiceCookies.jpg', 'Setiap bagian unik di sini,karena setiap kue memiliki cerita tersendiri','Rp 12.000'));

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
cakeList.addCakeToList(new Cake('Red Velvet', 'img/redvelvet.jpg', 'Lupakan kalori dan berbahagialah dan Jalani hidup yang manis!','Rp 30.000'));
cakeList.addCakeToList(new Cake('Brown Butter Stamp', 'img/brownbutterstampcookies.jpg', 'Jangan menunggu sampai terlambat,dapatkan segera','Rp 20.000'));

// Queue
const cakeQueue = [];
cakeQueue.push(new Cake('Hazelnut', 'img/hazelnutcookies.jpg', 'Setiap individu yang unik berhak mendapatkan kue yang sama spesialnya','Rp 25.000'));
cakeQueue.push(new Cake('Ice Thumbprint', 'img/IcedThumbprint.jpg', 'Mengambil kesenangan ke tingkat berikutnya', 'Rp 20.000'));
cakeQueue.push(new Cake('Ginger Bread', 'img/gingerbread.jpg', 'Setiap hari adalah kesempatan untuk merayakan','Rp 25.000'));

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



