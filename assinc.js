console.log('Start')

setTimeout(() => {
    console.log('Inside timeout, after 2000 seconds')
}, 5000)

function timeout2sec() {
    console.log('2 sec')
}

setTimeout(timeout2sec, 2000);