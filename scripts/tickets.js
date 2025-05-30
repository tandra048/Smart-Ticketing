// console.log('hi');

function buyTickets(){
document.getElementById('paribahan').scrollIntoView({behavior:"smooth"});
}

// Function to handle seat selection with a max limit
function enableSeatSelection(className, maxSeats) {
  const seats = document.querySelectorAll('.' + className);
  let selectedSeats = 0;


  seats.forEach(seat => {
    seat.addEventListener('click', function () {
        let totalSeat = seatsNum('total-seat');
        console.log(totalSeat);
     
         if (seat.classList.contains('selected')) {
        seat.classList.remove('selected');
        selectedSeats--;
      } else if (selectedSeats < maxSeats) {
        seat.classList.add('selected');
        seat.style.backgroundColor = '#1DD100'; 
        selectedSeats++;
        let updatedSeat = totalSeat - 1;
        totalSeat.innerText = updatedSeat;
        console.log(updatedSeat);
      } else {
        alert('You can only select up to ' + maxSeats + ' seats.');
      }
     
    });
  });
}

// Call the function
enableSeatSelection('seat', 4);



  function successful(){
    hideElementById('home-page');
    showElementById('success');
    
  }

const phoneInput = document.getElementById('phone');
const nextButton = document.getElementById('next');
phoneInput.addEventListener('input', function(){
    const phone = phoneInput.value ;
    console.log(phone);
    if(/^\d{11}$/.test(phone)){
        nextButton.disabled = false;
    }
    else{
        nextButton.disabled = true;
    }

    
});


