'use strict';
const keySoundAssociation = {
    'a': 'sounds/003.wav',
    's': 'sounds/004.wav',
    'd': 'sounds/005.wav',
    'f': 'sounds/006.wav',
    'g': 'sounds/007.wav',
    'h': 'sounds/008.wav',
    'j': 'sounds/009.wav'
}

var found = (key, array) => {
    for(var i=0; i<array.length; i++) {
        var item = array[i];
        if (item == key)
            return true;
        }
    return false;
}
function soundHumor(event) {
    var soundKeys = Object.keys(keySoundAssociation);
    if (found(event.key, soundKeys)) {
        var audio = new Audio(keySoundAssociation[event.key]);
        audio.load();
        audio.play();
        var key =  document.querySelector(`.key[data-key="${event.keyCode}"]`)
        key.classList.add('key-pressed');
    }
}

function removeTransition(event) {
    if(event.propertyName !== 'transform') return;
    console.log(this);
    this.classList.remove('key-pressed');
}

window.addEventListener('keydown', soundHumor);
window.onload = function(){
    const keys = document.querySelectorAll('.key');
    console.log(keys);
    keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
};

