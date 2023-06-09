document.addEventListener('DOMContentLoaded', function () {
    [].forEach.call(document.querySelectorAll(".card"), function (card, i, cards) {
        card.addEventListener("click", function (e) {
            e.currentTarget.classList.toggle("flipped");
        });
    });
});
