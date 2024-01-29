let http = new XMLHttpRequest();

http.open('get','https://fakestoreapi.com/products',true);

http.send();

http.onload = function() {
    if(this.readyState == 4 && this.status == 200){
        let products = JSON.parse(this.responseText);
        let output = "";

        for(let item of products){
            output += `
            <div class="products">
            <img src ="${item.image}">
            
            <p class="title">${item.title}</p>
            <p class="category">${item.category}</p>
            <p class="description">${item.description}</p>
            <p class="price">
            <span>$</span>
            <span>${item.price}</span>
            </p>
            </div>
            `;
        }
        document.querySelector(".product").innerHTML = output;
    }
}