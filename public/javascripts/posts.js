document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("cardModal");
    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");
    const modalCaption = document.getElementById("modalCaption");
    const modalDate = document.getElementById("modalDate");
    const closeBtn = document.getElementsByClassName("close")[0];
    const deleteBtn = document.getElementById("deleteBtn");

    document.querySelectorAll('.card').forEach(function(card) {
        card.addEventListener('click', function() {
            const imgSrc = card.querySelector('.card-img').src;
            const caption = card.querySelector('.card-title').innerText;
            const date = card.querySelector('.card-date').innerText;
            const postId = card.getAttribute('data-id');

            modal.style.display = "block";
            modalImg.src = imgSrc;
            modalCaption.innerText = caption;
            modalDate.innerText = date;
            deleteBtn.style.display = "block";
            deleteBtn.setAttribute('data-id', postId);
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
        deleteBtn.style.display = "none";
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            deleteBtn.style.display = "none";
        }
    });

    deleteBtn.addEventListener('click', function() {
        const postId = this.getAttribute('data-id');
        fetch(`/posts/${postId}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Remove the post element from the DOM
                document.querySelector(`.card[data-id="${postId}"]`).remove();
                modal.style.display = "none";
                deleteBtn.style.display = "none";
            } else {
                alert('Failed to delete the post');
            }
        })
        .catch(err => console.error('Error:', err));
    });
});
