$(document).ready(function () {
    setTimeout(function () {
        $('#loading').fadeOut();
    }, 5000);
    setTimeout(function () {
        $('#loadingBar').fadeIn(800).css('display', 'block');
    }, 1800);
});

$('#btnJugar').click(function () {
    $('.scoreFlecha').fadeIn(500).css('display', 'block');
});


$('.triviaCheck').on('change', function () {
    $('.triviaCheck').not(this).prop('checked', false);
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var myTicket = document.getElementById('myTicket');

// Get the button that opens the modal
var ticket = document.getElementById("btnTicket");

// Get the <span> element that closes the modal
var spanTicket = document.getElementsByClassName("ticketClose")[0];

// When the user clicks on the button, open the modal 
ticket.onclick = function () {
    myTicket.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanTicket.onclick = function () {
    myTicket.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == myTicket) {
        myTicket.style.display = "none";
    }
}