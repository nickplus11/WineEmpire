const modal = document.querySelector('.modal');
const modal_overlay = document.querySelector('.overlay-modal');
const special_offer = document.querySelector('.special_offer_top');
countdown('12/31/2020 11:59:59 PM');

document.addEventListener("DOMContentLoaded", function (event) {
    special_offer.addEventListener('click', show_offer);
});

function show_offer() {
    const modal = document.querySelector('.modal');
    let modal_overlay = document.querySelector('.overlay-modal');
    modal.classList.add('active');
    modal_overlay.classList.add('active');
    modal_overlay.addEventListener('click', refresh_modal);
    modal.addEventListener('click', refresh_modal);
}

refresh_modal = function () {
    modal.classList.remove('active');
    modal_overlay.classList.remove('active');
    modal_overlay.removeEventListener('click', refresh_modal, false);
    modal.removeEventListener('click', refresh_modal, false);
}

function countdown(dateEnd) {
    var timer, days, hours, minutes, seconds;

    dateEnd = new Date(dateEnd);
    dateEnd = dateEnd.getTime();

    if ( isNaN(dateEnd) ) {
        return;
    }

    timer = setInterval(calculate, 1000);

    function calculate() {
        var dateStart = new Date();
        var dateStart = new Date(dateStart.getUTCFullYear(),
            dateStart.getUTCMonth(),
            dateStart.getUTCDate(),
            dateStart.getUTCHours(),
            dateStart.getUTCMinutes(),
            dateStart.getUTCSeconds());
        var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

        if ( timeRemaining >= 0 ) {
            days    = parseInt(timeRemaining / 86400);
            timeRemaining   = (timeRemaining % 86400);
            hours   = parseInt(timeRemaining / 3600);
            timeRemaining   = (timeRemaining % 3600);
            minutes = parseInt(timeRemaining / 60);
            timeRemaining   = (timeRemaining % 60);
            seconds = parseInt(timeRemaining);

            document.getElementById("days").innerHTML    = parseInt(days, 10);
            document.getElementById("hours").innerHTML   = ("0" + hours).slice(-2);
            document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
            document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
        } else {
            return;
        }
    }

    function display(days, hours, minutes, seconds) {}
}
