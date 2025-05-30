// function setButtonColorOnClick(className, color) {
//   const buttons = document.querySelectorAll('.' + className);
//  const totalSeatValue = document.getElementById('total-seat');
//  const totalSeat = totalSeatValue.innerText;
//  console.log(totalSeat);
//   buttons.forEach(button => {
//     button.addEventListener('click', function () {
    
//     button.style.backgroundColor = color;
   
//     });
//   });
// }

function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function seatsNum(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const elementValue = parseInt(elementValueText);
    return  elementValue;
}