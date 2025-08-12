document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll(".video-player");

    videos.forEach(video => {
        video.addEventListener("play", function() {
            videos.forEach(otherVideo => {
                if (otherVideo !== video) {
                    otherVideo.pause();
                }
            });
        });
    });
});

