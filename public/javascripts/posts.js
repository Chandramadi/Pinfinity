

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("cardModal");
    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");
    const modalCaption = document.getElementById("modalCaption");
    const modalDate = document.getElementById("modalDate");
    const closeBtn = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.card').forEach(function(card) {
        card.addEventListener('click', function() {
            const imgSrc = card.querySelector('.card-img').src;
            const caption = card.querySelector('.card-title').innerText;
            const date = card.querySelector('.card-date').innerText;

            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalCaption.innerText = caption;
            modalDate.innerText = date;
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
