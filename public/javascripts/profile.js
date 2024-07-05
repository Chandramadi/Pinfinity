

// Upon clicking upload icon(pencil icon) the input field inside the profileForm should be clicked.
document.querySelector("#profileImg").addEventListener("click",()=>{
    document.querySelector("#profileForm input").click(); // ("#profileForm input") it means input tag inside profileForm tag.
})

document.querySelector("#profileForm input").addEventListener("change",()=>{
    document.querySelector("#profileForm").submit();
})

// Upon clicking add new post button the uploadPostInput(the file upload option) should be clicked.
document.getElementById('addPostBtn').addEventListener('click', function() {
    document.getElementById('uploadPostInput').click();
});

// The caption and the upload post are hidden(default) and they will appear after clicking on add new post.
document.getElementById('uploadPostInput').addEventListener('change', function() {
    document.querySelector('.caption-input').style.display = 'block';
    document.querySelector('.submit-btn').style.display = 'inline-block';
});
