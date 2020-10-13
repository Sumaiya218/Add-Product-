
var productsContainer ;
if(localStorage.getItem("productsData") == null){
    productsContainer = [];
}else{
    productsContainer = JSON.parse( localStorage.getItem("productsData")) ;
    displayProducts();
}

var inps = document.getElementsByClassName("form-control");

function validateForm(userName){
    var userNameRegex = /^[A-Z][a-z]{3,8}/;
    if ( userNameRegex.test(userName) == false){
        document.getElementById("addBtn").disabled = "true";
    }else{
        document.getElementById("addBtn").removeAttribute("disabled");
    }
}

function addProduct() {
    var productName = document.getElementById("productNameInp").value;
    var productPrice = document.getElementById("productPriceInp").value;
    var productCategory = document.getElementById("productCategoryInp").value;
    var productDesc = document.getElementById("productDescInp").value;


    var product =
    {
        name: productName,
        price: productPrice,
        category: productCategory,
        desc: productDesc,
    }

    productsContainer.push(product);
    localStorage.setItem("productsData" , JSON.stringify(productsContainer));
    clearForm();
    displayProducts();
    
   
}
function clearForm()
{
    for (var i = 0; i < inps.length; i++) {
        inps[i].value = "";
    }
}
function displayProducts()
{
    var temp = "";
    for(var i = 0 ; i < productsContainer.length ;i++)
    {
        temp +=`<div class="col-md-3 mb-4">
            <div class="product">
                <img src="images/2.jpg" class="img-fluid">
                <h4>`+productsContainer[i].name+`<span class="ml-3 badge badge-info">`+productsContainer[i].category+`</span>
                </h4>
                <p>`+productsContainer[i].desc+`</p>
                <div class="price">`+productsContainer[i].price+`</div>
                <button onclick="deleteProduct(`+i+`)" class="btn btn-outline-info btn-sm">delete</button>
            </div>
        </div>
    `;
    }
    document.getElementById("productsRow").innerHTML = temp;
}

function deleteProduct(index){
    var deleted = productsContainer.splice(index ,1);
    localStorage.setItem("productsData" , JSON.stringify(productsContainer));
    displayProducts();
}
function updateProduct(){

}
function searchProducts(term){
    var temp= ``;
    for(var i = 0 ; i<productsContainer.length;i++){
        if( productsContainer[i].name.toLowerCase().includes(term.toLowerCase())){
            temp +=`<div class="col-md-3">
            <div class="product">
                <img src="images/2.jpg" class="img-fluid">
                <h4>`+productsContainer[i].name+`<span class="ml-3 badge badge-info">`+productsContainer[i].category+`</span>
                </h4>
                <p>`+productsContainer[i].desc+`</p>
                <div class="price">`+productsContainer[i].price+`</div>
                
            </div>
        </div>
        `;
        }
    }
    document.getElementById("productsRow").innerHTML = temp;
}




