// function loadScript(src) {
//     return new Promise(function(resolve, reject) {
//       let script = document.createElement('script');
//       script.src = src;
  
//       script.onload = () => resolve(script);
//       script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));
  
//       document.head.append(script);
//     });
//   }


// let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

// promise.then(
//   script => alert(`${script.src} загружен!`),
//   error => alert(`Ошибка: ${error.message}`)
// );

// promise.then(script => alert('Ещё один обработчик...'));

// function delay(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms)
//     })
// }
  
// delay(3000).then(() => alert('выполнилось через 3 секунды'));

function go() {
    showCircle(150, 150, 100, div => {
      div.classList.add('message-ball');
      div.append("Hello, world!");
    });
  }

  function showCircle(cx, cy, radius, callback) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend', function handler() {
        div.removeEventListener('transitionend', handler);
        callback(div);
      });
    });
  }