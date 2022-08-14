function init(){
    document.addEventListener('click', function(evt) { if (evt.target.tagName.toLowerCase() == 'li') { play(evt.target); } }, false);
}

function skip(){
}

function play(elem){
    let audio = document.getElementById('audio');
    let songTitle = document.getElementById('now-playing');
    songTitle.innerHTML = elem.textContent;
    audio.src = './mp3/' + elem.textContent + '.mp3';
    audio.play();
    elem.className = 'playing';

    skip = function(){
            elem.className = '';
            if (elem.nextElementSibling)
            {
                play(elem.nextElementSibling);
            }
    }
}