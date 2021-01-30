// const keys = document.querySelectorAll('.key');

// keys.forEach((key) => {
//     key.addEventListener('keydown', (e) => {
//         console.log(e.keyCode);
//     })
// })

const aKey = document.querySelector('body');

aKey.addEventListener('keydown', function(e) {
    console.log(e.keyCode);
});
