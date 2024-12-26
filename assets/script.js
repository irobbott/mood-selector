const songsData = {
    happy: {
        color: "linear-gradient(to right, #ff9a9e, #fad0c4)", // Background for happy
        songs: [
            { name: "Houdini", artist: "Eminem", url: "https://maxspeedex.com/mood-songs/eminem.mp3" },
            { name: "Squabble Up", artist: "Kendrick Lamar", url: "https://maxspeedex.com/mood-songs/kendrick.mp3" },
            { name: "Dead Man Walking", artist: "Jon Bellion", url: "https://maxspeedex.com/mood-songs/bellion.mp3" }
        ]
    },
    calm: {
        color: "linear-gradient(to right, #a1c4fd, #c2e9fb)", // Background for calm
        songs: [
            { name: "Raise Me Up", artist: "Tones and I", url: "https://maxspeedex.com/mood-songs/tones.mp3" },
            { name: "Birds of a Feather", artist: "Billie Eilish", url: "https://maxspeedex.com/mood-songs/billie.mp3" },
            { name: "Pray", artist: "Buju", url: "https://maxspeedex.com/mood-songs/buju.mp3" }
        ]
    },
    excited: {
        color: "linear-gradient(to right, #fddb92, #d1fdff)", // Background for excited
        songs: [
            { name: "Ride", artist: "Twenty One Pilots", url: "https://maxspeedex.com/mood-songs/ride.mp3" },
            { name: "Funky Friday", artist: "Dave ft. Fredo", url: "https://maxspeedex.com/mood-songs/dave.mp3" },
            { name: "BoomTrap Protocol", artist: "Logic", url: "https://maxspeedex.com/mood-songs/logic.mp3" }
        ]
    }
};

// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function playMood(mood) {
    const body = document.body;
    const songsDiv = document.getElementById('songs');
    const moodData = songsData[mood];

    // Change background
    body.style.background = moodData.color;

    // Shuffle and display songs
    const shuffledSongs = shuffle([...moodData.songs]);
    songsDiv.innerHTML = `<h2>Here are some songs for the mood "${mood.charAt(0).toUpperCase() + mood.slice(1)}"</h2>`;
    shuffledSongs.forEach(song => {
        songsDiv.innerHTML += `
            <div class="song">
                <p>${song.name} by ${song.artist}</p>
                <audio controls>
                    <source src="${song.url}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </div>
        `;
    });
}