// const keys = document.querySelectorAll('.key');

// keys.forEach((key) => {
//     key.addEventListener('keydown', (e) => {
//         console.log(e.keyCode);
//     })
// })

const aKey = document.querySelector('body');

aKey.addEventListener('keydown', function(e) {
    highlightEvent(e.key);
});


function highlightEvent(code) {
    const highlight = document.querySelector(`div[data-key="${code}"]`);

    
    highlight.classList.add('sound');
    

    setInterval(() => {
        highlight.classList.remove('sound');
    }, 200);

}