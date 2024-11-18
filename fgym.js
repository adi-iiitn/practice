// Function to filter songs based on search query
/*document.getElementById('search').addEventListener('input', function () {
    var searchQuery = this.value.toLowerCase();  // Get the search input and convert to lowercase
    var songItems = document.querySelectorAll('.song-item');  // Get all song items

    songItems.forEach(function (songItem) {
        var songTitle = songItem.getAttribute('data-title').toLowerCase();  // Get the song title (stored in data-title attribute)

        // Check if the song title includes the search query
        if (songTitle.includes(searchQuery)) {
            songItem.style.display = 'block';  // Show song if it matches the search query
        } else {
            songItem.style.display = 'none';   // Hide song if it doesn't match the search query
        }
    });

    // Optional: Automatically scroll to the top of the song list when searching
    document.getElementById('song-list').scrollIntoView({ behavior: 'smooth' });
});

// Function to create the song list dynamically (if you decide to populate it from a JS array in future)
document.addEventListener('DOMContentLoaded', function () {
    const songList = document.getElementById('song-list');

    // Example list of song titles
    const songs = [
        { title: "Oompla", artist: "Artist 1", file: "gym.mp3" },
        { title: "Feel the Beat", artist: "Artist 2", file: "songs/feel_the_beat.mp3" },
        { title: "Another Song", artist: "Artist 3", file: "songs/another_song.mp3" },
        { title: "Chill Vibes", artist: "Artist 4", file: "songs/chill_vibes.mp3" },
        { title: "Happy Days", artist: "Artist 5", file: "songs/happy_days.mp3" },
        { title: "Night Drive", artist: "Artist 6", file: "songs/night_drive.mp3" },
        { title: "Summer Breeze", artist: "Artist 7", file: "songs/summer_breeze.mp3" },
        { title: "Dreaming", artist: "Artist 8", file: "songs/dreaming.mp3" }
    ];

    // Create song items dynamically based on the songs array
    songs.forEach(function (song) {
        const songItem = document.createElement('div');
        songItem.classList.add('song-item');
        songItem.setAttribute('data-title', song.title);

        songItem.innerHTML = `
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
            <audio controls>
                <source src="${song.file}" type="audio/mp3">
                Your browser does not support the audio element.
            </audio>
        `;

        songList.appendChild(songItem);
    });
});*/
// Function to filter songs based on search query
document.getElementById('search').addEventListener('input', function () {
    var searchQuery = this.value.toLowerCase();  // Get the search input and convert to lowercase
    var songItems = document.querySelectorAll('.song-item');  // Get all song items

    songItems.forEach(function (songItem) {
        var songTitle = songItem.getAttribute('data-title').toLowerCase();  // Get the song title (stored in data-title attribute)

        // Check if the song title includes the search query
        if (songTitle.includes(searchQuery)) {
            songItem.style.display = 'block';  // Show song if it matches the search query
        } else {
            songItem.style.display = 'none';   // Hide song if it doesn't match the search query
        }
    });

    // Optional: Automatically scroll to the top of the song list when searching
    document.getElementById('song-list').scrollIntoView({ behavior: 'smooth' });
});

// Function to create the song list dynamically (if you decide to populate it from a JS array in future)
document.addEventListener('DOMContentLoaded', function () {
    const songList = document.getElementById('song-list');

    // Example list of song titles
    const songs = [
        { title: "Oompla", artist: "Artist 1", file: "gym.mp3" },
        { title: "Feel the Beat", artist: "Artist 2", file: "songs/feel_the_beat.mp3" },
        { title: "Another Song", artist: "Artist 3", file: "songs/another_song.mp3" },
        { title: "Chill Vibes", artist: "Artist 4", file: "songs/chill_vibes.mp3" },
        { title: "Happy Days", artist: "Artist 5", file: "songs/happy_days.mp3" },
        { title: "Night Drive", artist: "Artist 6", file: "songs/night_drive.mp3" },
        { title: "Summer Breeze", artist: "Artist 7", file: "songs/summer_breeze.mp3" },
        { title: "Dreaming", artist: "Artist 8", file: "songs/dreaming.mp3" }
    ];

    let currentAudio = null;  // Store reference to the currently playing audio element

    // Create song items dynamically based on the songs array
    songs.forEach(function (song) {
        const songItem = document.createElement('div');
        songItem.classList.add('song-item');
        songItem.setAttribute('data-title', song.title);

        songItem.innerHTML = `
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
            <audio class="audio-player">
                <source src="${song.file}" type="audio/mp3">
                Your browser does not support the audio element.
            </audio>
            <button class="play-btn">Play</button>
        `;

        songList.appendChild(songItem);

        // Add event listener to each play button
        const playButton = songItem.querySelector('.play-btn');
        const audio = songItem.querySelector('.audio-player');

        playButton.addEventListener('click', function () {
            // If there is a current audio playing, pause it
            if (currentAudio && currentAudio !== audio) {
                currentAudio.pause();  // Stop the currently playing audio
                currentAudio.currentTime = 0;  // Reset it to the beginning
                currentAudio.parentElement.querySelector('.play-btn').textContent = 'Play';  // Change button text back
            }

            // If the clicked audio is paused, play it
            if (audio.paused) {
                audio.play();
                playButton.textContent = 'Pause';  // Change the button text to 'Pause'
                currentAudio = audio;  // Update the reference to the currently playing audio
            } else {
                audio.pause();  // If the audio is already playing, pause it
                playButton.textContent = 'Play';  // Change the button text back to 'Play'
                currentAudio = null;  // Reset the current audio
            }
        });
    });
});
