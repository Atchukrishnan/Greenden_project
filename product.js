// Selecting Side Navbar, MenuIcon,closenav
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right = 0
})

closenav.addEventListener("click",function(){
    sidenav.style.right = "-50%"
})

// Search functionality

var search = document.getElementById("search")
var productcontainer = document.getElementById("product-container")
var productList = productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(event){
    var enteredvalue = event.target.value.toUpperCase() 
    
    for(count=0; count<productList.length; count=count+1){
        var productname = productList[count].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredvalue)<0){
            productList[count].style.display = "none"
        }
        else{
            productList[count].style.display = "block"
        }
    }

})