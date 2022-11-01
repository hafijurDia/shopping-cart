function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1
    }
    else if (isIncreasing == false && productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //update product total value
    let productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    calculateTotal();

}

function getInputNumber(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){
    const phoneTotal  = getInputNumber('phone') * 1219;
    const caseTotal  = getInputNumber('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;

}
function removeProduct(item) {
    document.getElementById(item + '-display').style.display = 'none';
}


//phone increment event
document.getElementById('phone-increment').addEventListener('click',function(){
    updateProductNumber('phone',1219,true);
})
//phone decrement event
document.getElementById('phone-decrement').addEventListener('click',function(){
    updateProductNumber('phone',1219,false);
})

//case increment event
document.getElementById('case-increment').addEventListener('click',function(){
    updateProductNumber('case',59,true);
})
//case decrement event
document.getElementById('case-decrement').addEventListener('click',function(){
    updateProductNumber('case',59,false);
})

// remove item
document.getElementById("phone-remove").addEventListener('click', function () {
    removeProduct('phone');
});
document.getElementById("case-remove").addEventListener('click', function () {
    removeProduct('case');
});

// check out
document.getElementById("check-btn").addEventListener('click', function () {
    alert('successful');
});