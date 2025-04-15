const audio = document.getElementById("audio");

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}


function togglePlay(button) {
    const icon = button.querySelector('i');
    if (icon.classList.contains('bi-play-fill')) {
        icon.classList.remove('bi-play-fill');
        icon.classList.add('bi-pause-fill');
        // You can add real music play logic here
    } else {
        icon.classList.remove('bi-pause-fill');
        icon.classList.add('bi-play-fill');
        // Pause music logic here
    }
}


document.querySelector('form[role="search"]').addEventListener('submit', function (e) {
    e.preventDefault();
    const searchType = document.getElementById('searchType').value;
    const searchQuery = document.getElementById('searchInput').value;

    console.log(`Searching for "${searchQuery}" in category: ${searchType}`);
    // You can now handle the search logic based on the type
    // For example: redirect, filter music section, etc.
});

