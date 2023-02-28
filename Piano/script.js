document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLocaleLowerCase());
});

let key = document.querySelectorAll('.key');
key.forEach(key => {
    key.addEventListener('click', (event) => {
        playSound(event.target.getAttribute('data-key'));
        console.log(event.target.getAttribute('data-key'));
    })
});

let composer = document.querySelector(`.composer button`);
composer.addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    if (song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if (keyElement) {
        keyElement.classList.add('active');

        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
    }
}

function playComposition(songArray) {
    let wait = 0;

    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);
        wait += 250;
    }
}