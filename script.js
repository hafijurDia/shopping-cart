//single item product increment and decrement
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');

const itemCount = document.getElementById('item-number').value;
let itemNumber = parseFloat(itemCount);


increment.addEventListener('click',function(){
    incrementDecrement(itemNumber);
})

decrement.addEventListener('click',function(){
    incrementDecrement(itemNumber - 2 );
})


//common function for increment and decreament
function incrementDecrement(id){
    itemNumber = id + 1;
    document.getElementById('item-number').value = itemNumber;
}

//common funtion for item input value
function getInputBumber(){

}

