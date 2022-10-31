//single item product increment and decrement
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');


//incremnet event
increment.addEventListener('click',function(){
    let getInutNumber = getInputBumber('item-number');
    incrementDecrement(getInutNumber);
    console.log(getInutNumber);

    let singleItemPrice = document.getElementById('item-price').innerText;
    singleItemPrice = parseFloat(singleItemPrice);
    document.getElementById('item-price').innerText = singleItemPrice * getInutNumber;
})

//decrement event
decrement.addEventListener('click',function(){
    let getInutNumber = getInputBumber('item-number');
    console.log(getInutNumber);
    
    if ( getInutNumber < 2) {
        document.getElementById('item-number').value = 1;
    }
    else{
        incrementDecrement(getInutNumber - 2 );
    }
    
    
})




//common function for increment and decreament
function incrementDecrement(id){
    itemNumber = id + 1;
    document.getElementById('item-number').value = itemNumber;
}

//common funtion for item input value
function getInputBumber(id){
    const itemCount = document.getElementById(id).value;
    let itemNumber = parseFloat(itemCount);
    return itemNumber;
}

