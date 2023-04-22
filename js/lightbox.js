function lightbox_open(index) {
    var lightbox = document.querySelector(`.lightbox-${index}`);
    var video = document.querySelector(`.video-${index}`);
    var fade = document.querySelector(`.fade-${index}`);
        
    lightbox.style.display = 'block';
    lightbox.style.opacity = 1;
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
    lightbox.style.opacity = 0;
    fade.style.display = 'none';
    video.pause();
}
