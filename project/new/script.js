// Dummy data for products
const products = [
    {
        name: "Cycle",
        description: "Envy Black City Bike/Cycle 26T with Inbuilt Carrier | Rigid Supsension | 17 Inch Frame | Cycle for Boys/Men Road Cycle (Single Speed)nclusive perks.",
        image: "images/logo-bicycle.png",
        prices: [
            { site: "Mall2Mart", price: "4449.00", rating: 4.7 },
            { site: "Amazon.in", price: "4449.00", rating: 4.8 },
            { site: "Flipkart", price: "4449.00", rating: 4.6 },
            { site: "Myntra", price: "4550.00", rating: 4.5 },
            { site: "Alibaba", price: "4300.00", rating: 4.8 }
        ]
    },
    {
        name: "Electric Toy car",
        description: "Brand new Tesla Model 3. best in the market",
        image: "images/logo-tesla.png",
        prices: [
            { site: "Mall2Mart", price: "3499.00", rating: 4.9 },
            { site: "Amazon.in", price: "3499.00", rating: 4.8 },
            { site: "Flipkart", price: "3449.00", rating: 4.7 },
            { site: "Myntra", price: "3500.00", rating: 4.8 },
            { site: "Alibaba", price: "3400.00", rating: 4.9 }
        ]
    },
    {
        name: "Versace Watch",
        description: "VE6CA0523 Chronograph Watch for Men",
        image: "images/logo-rolex.png",
        prices: [
            { site: "Mall2Mart", price: "8000.00", rating: 4.8 },
            { site: "Amazon.in", price: "7999.00", rating: 4.7 },
            { site: "Flipkart", price: "8100.00", rating: 4.6 },
            { site: "Myntra", price: "8200.00", rating: 4.5 },
            { site: "Alibaba", price: "7800.00", rating: 4.7 }
        ]
    },
    {
        name: "iPhone 16",
        description: "Apple iPhone 16 (128 GB) - Ultramarine",
        image: "images/logo-iphone.png",
        prices: [
            { site: "Mall2Mart", price: "130000.00", rating: 4.9 },
            { site: "Amazon.in", price: "128000.00", rating: 4.8 },
            { site: "Flipkart", price: "129999.00", rating: 4.7 },
            { site: "Myntra", price: "131000.00", rating: 4.8 },
            { site: "Alibaba", price: "127500.00", rating: 4.9 }
        ]
    },
    {
        name: "Gaming Laptop",
        description: "Dell Insprion 3520 Laptop (12th Gen-Intel-Core i5-1235U/8 GB RAM/512 GB/Intel Integrated Graphics/Windows 11/MSO/FHD) 39.62 cm (15.6 inch)|High-end gaming laptop with RTX 4090 graphics card.",
        image: "images/logo-laptop.png",
        prices: [
            { site: "Mall2Mart", price: "200000.00", rating: 4.6 },
            { site: "Amazon.in", price: "195000.00", rating: 4.5 },
            { site: "Flipkart", price: "198000.00", rating: 4.7 },
            { site: "Myntra", price: "202000.00", rating: 4.6 },
            { site: "Alibaba", price: "193000.00", rating: 4.8 }
        ]
    },
    {
        name: "Samsung Galaxy M15 5G",
        description: "Samsung Galaxy M15 5G (Celestial Blue,6GB RAM,128GB Storage)| 50MP Triple Cam| 6000mAh Battery|MediaTek Dimensity 6100+| 4 Gen. OS Upgrade & 5 Year Security Update|Super AMOLED Display|Without Charger | phone .",
        image: "images/logo-android.png",
        prices: [
            { site: "Mall2Mart", price: "15000.00", rating: 4.5 },
            { site: "Amazon.in", price: "14500.00", rating: 4.6 },
            { site: "Flipkart", price: "15500.00", rating: 4.7 },
            { site: "Myntra", price: "15200.00", rating: 4.5 },
            { site: "Alibaba", price: "14000.00", rating: 4.6 }
        ]
    },
    {
        name: "Nikon D5600 DSLR Camera",
        description: "Unleash your creativity with the Nikon D5600! With 24.2 MP, EXPEED 4 processor, and ISO 100-25600, it captures stunning photos and Full HD videos even in low light. The vari-angle LCD and touch interface offer fresh perspectives with ease.",
        image: "images/logo-dslr.png",
        prices: [
            { site: "Mall2Mart", price: "70000.00", rating: 4.8 },
            { site: "Amazon.in", price: "68000.00", rating: 4.7 },
            { site: "Flipkart", price: "72000.00", rating: 4.6 },
            { site: "Myntra", price: "71000.00", rating: 4.7 },
            { site: "Alibaba", price: "67000.00", rating: 4.8 }
        ]
    },
    {
        name: "Gaming chair",
        description: "Green Soul Monster Ultimate Series S | Multi-Functional Ergonomic Gaming & Office Chair| Premium Spandex & PU Leather Fabric | Adjustable Neck & Lumbar Pillow | 4D Adjustable Armrests (Full Black)",
        image: "images/logo-chair.png",
        prices: [
            { site: "Mall2Mart", price: "25000.00", rating: 4.3 },
            { site: "Amazon.in", price: "24000.00", rating: 4.4 },
            { site: "Flipkart", price: "26000.00", rating: 4.2 },
            { site: "Myntra", price: "25500.00", rating: 4.3 },
            { site: "Alibaba", price: "23500.00", rating: 4.5 }
        ]
    },
    {
        name: "Vacation Package",
        description: "7-day trip to Bali, all expenses paid.",
        image: "images/logo-vacation.png",
        prices: [
            { site: "Mall2Mart", price: "120000.00", rating: 4.9 },
            { site: "Amazon.in", price: "115000.00", rating: 4.8 },
            { site: "Flipkart", price: "118000.00", rating: 4.7 },
            { site: "Myntra", price: "122000.00", rating: 4.8 },
            { site: "Alibaba", price: "113500.00", rating: 4.9 }
        ]
    },
    {
        name: "Wireless Headphones",
        description: "Noise-canceling over-ear headphones | Sony ",
        image: "images/logo-headphones.png",
        prices: [
            { site: "Mall2Mart", price: "8000.00", rating: 4.6 },
            { site: "Amazon.in", price: "7500.00", rating: 4.7 },
            { site: "Flipkart", price: "8500.00", rating: 4.5 },
            { site: "Myntra", price: "8200.00", rating: 4.6 },
            { site: "Alibaba", price: "7300.00", rating: 4.8 }
        ]
    },
    {
        name: "One + Smartwatch",
        description: "Latest model smartwatch with health tracking.",
        image: "images/logo-smartwatch.png",
        prices: [
            { site: "Mall2Mart", price: "15000.00", rating: 4.4 },
            { site: "Amazon.in", price: "14500.00", rating: 4.5 },
            { site: "Flipkart", price: "15500.00", rating: 4.3 },
            { site: "Myntra", price: "15200.00", rating: 4.4 },
            { site: "Alibaba", price: "14000.00", rating: 4.5 }
        ]
    },
    {
        name: "Tablet",
        description: "Honor Pad X8a 11.5-inches Wi-Fi Only Tablet.",
        image: "images/logo-tablet.png",
        prices: [
            { site: "Mall2Mart", price: "25000.00", rating: 4.5 },
            { site: "Amazon.in", price: "24000.00", rating: 4.6 },
            { site: "Flipkart", price: "26000.00", rating: 4.4 },
            { site: "Myntra", price: "25200.00", rating: 4.5 },
            { site: "Alibaba", price: "23000.00", rating: 4.6 }
        ]
    },
    {
        name: "Gaming Console",
        description: "PlayStation 5 with Sony PlayStation 5 Slim Console controllers.",
        image: "images/logo-console.png",
        prices: [
            { site: "Mall2Mart", price: "50000.00", rating: 4.8 },
            { site: "Amazon.in", price: "48000.00", rating: 4.7 },
            { site: "Flipkart", price: "52000.00", rating: 4.6 },
            { site: "Myntra", price: "51000.00", rating: 4.8 },
            { site: "Alibaba", price: "47000.00", rating: 4.9 }
        ]
    },
    {
        name: "Coffee Machine",
        description: "High-quality espresso machine for coffee lovers.",
        image: "images/logo-coffee.png",
        prices: [
            { site: "Mall2Mart", price: "12000.00", rating: 4.2 },
            { site: "Amazon.in", price: "11500.00", rating: 4.3 },
            { site: "Flipkart", price: "12500.00", rating: 4.1 },
            { site: "Myntra", price: "12200.00", rating: 4.2 },
            { site: "Alibaba", price: "11000.00", rating: 4.3 }
        ]
    },
    {
        name: "VR Headset",
        description: "Oculus Quest 2 for an immersive experience.",
        image: "images/logo-oculus.png",
        prices: [
            { site: "Mall2Mart", price: "35000.00", rating: 4.7 },
            { site: "Amazon.in", price: "34500.00", rating: 4.8 },
            { site: "Flipkart", price: "36000.00", rating: 4.6 },
            { site: "Myntra", price: "35500.00", rating: 4.7 },
            { site: "Alibaba", price: "33500.00", rating: 4.8 }
        ]
    },
    {
        name: "Designer Sneakers",
        description: "Limited edition sneakers from a top brand.",
        image: "images/logo-sneakers.png",
        prices: [
            { site: "Mall2Mart", price: "9000.00", rating: 4.6 },
            { site: "Amazon.in", price: "8500.00", rating: 4.7 },
            { site: "Flipkart", price: "9500.00", rating: 4.5 },
            { site: "Myntra", price: "9200.00", rating: 4.6 },
            { site: "Alibaba", price: "8700.00", rating: 4.7 }
        ]
    },
    {
        name: "Fitness Tracker",
        description: "CooSpo Fitness Tracker Ant+ Heart Rate Monitor Chest Strap IP67 Waterproof with Bluetooth for Wahoo Strava Zwiftmart fitness tracker with heart rate monitor.",
        image: "images/logo-fitness.png",
        prices: [
            { site: "Mall2Mart", price: "4500.00", rating: 4.3 },
            { site: "Amazon.in", price: "4000.00", rating: 4.4 },
            { site: "Flipkart", price: "4800.00", rating: 4.2 },
            { site: "Myntra", price: "4600.00", rating: 4.3 },
            { site: "Alibaba", price: "3900.00", rating: 4.5 }
        ]
    },
    {
        name: "MacBook Pro 16-inch M3 ",
        description: "Apple MacBook Pro 16-inch with M3 chip | 16GB RAM | 1TB SSD | Space Gray | 2024 Edition | Stunning performance for creative professionals and developers | laptop.",
        image: "images/logo-macbook.png",
        prices: [
            { site: "Mall2Mart", price: "260000.00", rating: 4.9 },
            { site: "Amazon.in", price: "255000.00", rating: 4.8 },
            { site: "Flipkart", price: "258000.00", rating: 4.7 },
            { site: "Myntra", price: "262000.00", rating: 4.8 },
            { site: "Alibaba", price: "250000.00", rating: 4.9 }
        ]
    },
    {
        name: "Dell XPS 15",
        description: "Dell XPS 15 with 13th Gen Intel Core i9 | NVIDIA RTX 4060 | 32GB RAM | 1TB SSD | InfinityEdge Display | 2024 Edition | High-performance laptop for content creators.",
        image: "images/logo-dellxps.png",
        prices: [
            { site: "Mall2Mart", price: "220000.00", rating: 4.8 },
            { site: "Amazon.in", price: "215000.00", rating: 4.7 },
            { site: "Flipkart", price: "218000.00", rating: 4.6 },
            { site: "Myntra", price: "225000.00", rating: 4.7 },
            { site: "Alibaba", price: "230000.00", rating: 4.8 }
        ]
    },
    {
        name: "Asus ROG Strix Scar 17",
        description: "Asus ROG Strix Scar 17 with AMD Ryzen 9 7945HX | NVIDIA RTX 4090 | 32GB RAM | 2TB SSD | 240Hz QHD Display | 2024 Gaming Beast | best laptop.",
        image: "images/logo-asus.png",
        prices: [
            { site: "Mall2Mart", price: "320000.00", rating: 4.9 },
            { site: "Amazon.in", price: "315000.00", rating: 4.8 },
            { site: "Flipkart", price: "318000.00", rating: 4.7 },
            { site: "Myntra", price: "325000.00", rating: 4.8 },
            { site: "Alibaba", price: "310000.00", rating: 4.9 }
        ]
    },
    {
        name: "HP Spectre x360 14",
        description: "HP Spectre x360 14 with 13th Gen Intel Core i7 | 16GB RAM | 1TB SSD | 3K OLED Touch Display | 2024 Edition | Versatile 2-in-1 laptop for professionals.",
        image: "images/logo-hpspec.png",
        prices: [
            { site: "Mall2Mart", price: "180000.00", rating: 4.7 },
            { site: "Amazon.in", price: "175000.00", rating: 4.6 },
            { site: "Flipkart", price: "178000.00", rating: 4.5 },
            { site: "Myntra", price: "182000.00", rating: 4.7 },
            { site: "Alibaba", price: "170000.00", rating: 4.7 }
        ]
    },
    {
        name: "Lenovo Legion Pro 7i",
        description: "Lenovo Legion Pro 7i with Intel Core i9 13th Gen | NVIDIA RTX 4080 | 32GB RAM | 1TB SSD | 240Hz WQXGA Display | 2024 High-end gaming laptop.",
        image: "images/logo-lenovo.png",
        prices: [
            { site: "Mall2Mart", price: "250000.00", rating: 4.8 },
            { site: "Amazon.in", price: "245000.00", rating: 4.7 },
            { site: "Flipkart", price: "248000.00", rating: 4.6 },
            { site: "Myntra", price: "255000.00", rating: 4.7 },
            { site: "Alibaba", price: "240000.00", rating: 4.8 }
        ]
    }
];






function renderProducts() {
    const productList = document.getElementById('product-list');
    
    products.forEach(product => {
        let totalRating = 0;
        let numberOfRatings = 0;
        
        product.prices.forEach(priceInfo => {
            if (priceInfo.rating) { 
                totalRating += priceInfo.rating;
                numberOfRatings++;
            }
        });

       
        const averageRating = numberOfRatings > 0 ? (totalRating / numberOfRatings).toFixed(1) : 'No ratings';

        
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name}</p>
                <p>Average Rating: ${averageRating} ⭐</p> <!-- Display average rating -->
                <a href="product.html?name=${encodeURIComponent(product.name)}" class="buy-now-btn">Buy Now</a>
            </div>
        `;

        
        productList.innerHTML += productCard;
    });
}



// When on product page, show price comparison
// Merge Sort function to sort prices
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (parseFloat(left[leftIndex].price) < parseFloat(right[rightIndex].price)) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

function renderProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('name');
    console.log("Product name from URL:", productName);

    const product = products.find(p => p.name === productName);
    console.log("Found product:", product);

    if (!product) {
        console.error("Product not found. Make sure the product exists in the array.");
        return;
    }

    const detailsDiv = document.getElementById('product-details');
    const priceComparisonDiv = document.getElementById('price-comparison');

    // Display product details
    detailsDiv.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <img src="${product.image}" alt="${product.name}">
    `;

    // Mapping of sites to their homepage URLs
    const siteLinks = {
        "Mall2Mart": "https://www.mall2mart.com",
        "Amazon.in": "https://www.amazon.in",
        "Flipkart": "https://www.flipkart.com",
        "Myntra": "https://www.myntra.com",
        "Alibaba": "https://www.alibaba.com"
    };

    // Sort prices using merge sort
    const sortedPrices = mergeSort(product.prices);
    console.log("Sorted prices:", sortedPrices);

    // Create table with sorted prices and ratings
    let priceTable = '<h3>Compare Prices</h3><table>';
    sortedPrices.forEach(priceInfo => {
        const price = parseFloat(priceInfo.price);
        const rating = priceInfo.rating ? priceInfo.rating : "Rating not available"; // Handle missing ratings

        // Check if the price is a valid number
        if (!isNaN(price)) {
            priceTable += `
                <tr>
                    <td>${priceInfo.site}</td> <!-- Plain text for the site name -->
                    <td>$${price.toFixed(2)}</td> <!-- Formatted price -->
                    <td>Rating: ${rating}</td> <!-- Display the rating -->
                    <td><a href="${siteLinks[priceInfo.site]}" target="_blank">Go to Site</a></td> <!-- Link next to the price -->
                </tr>
            `;
        } else {
            priceTable += `
                <tr>
                    <td>${priceInfo.site}</td> <!-- Plain text for the site name -->
                    <td>Price not available</td>
                    <td>Rating: ${rating}</td> <!-- Display the rating -->
                    <td><a href="${siteLinks[priceInfo.site]}" target="_blank">Go to Site</a></td> <!-- Link next to the price -->
                </tr>
            `;
        }
    });
    priceTable += '</table>';

    // Insert the sorted table into the DOM
    priceComparisonDiv.innerHTML = priceTable;
}





// Check which page is being loaded and call the respective function
if (document.getElementById('product-details')) {
    renderProductDetails(); // This should be called on the product details page
}
// If on the index page, render the product list
if (document.getElementById('product-list')) {
    renderProducts();
}



// Add product search function
function searchProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase()
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(input) ||
        product.description.toLowerCase().includes(input)
    );
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear the list before showing filtered results
    filteredProducts.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name}</p>
                <a href="product.html?name=${encodeURIComponent(product.name)}" class="buy-now-btn">Buy Now</a>
            </div>
        `;
        productList.innerHTML += productCard;
    });
}
