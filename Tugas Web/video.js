// Akses elemen iframe untuk video YouTube
const youtubeVideo = document.getElementById("youtube-video");

// Tombol untuk memutar dan menghentikan video
const playButton = document.getElementById("playBtn");
const pauseButton = document.getElementById("pauseBtn");

// Fungsi untuk menambahkan autoplay dan memulai video
playButton.addEventListener("click", function() {
    youtubeVideo.src += "?autoplay=1";
});

// Fungsi untuk menghentikan video dengan menghapus autoplay
pauseButton.addEventListener("click", function() {
    youtubeVideo.src = youtubeVideo.src.replace("?autoplay=1", "");
});
