function lightbox_open(index) {
    var lightbox = document.querySelector(`.lightbox-${index}`);
    var video = document.querySelector(`.video-${index}`);
    var fade = document.querySelector(`.fade-${index}`);
        
    lightbox.style.display = 'block';
    fade.style.display = 'block';
    video.play();

    window.document.onkeydown = function (e) {
        if (e.key === 'Escape') {
            lightbox_close(index);
        }
    }
}

function lightbox_close(index) {
    var lightbox = document.querySelector(`.lightbox-${index}`);
    var video = document.querySelector(`.video-${index}`);
    var fade = document.querySelector(`.fade-${index}`);

    lightbox.style.display = 'none';
    fade.style.display = 'none';
    video.pause();
}
