window.onload = function () {

    var socket = io('/');

    let inp = document.getElementById('input');
    let btn = document.getElementById('btn');
    let div = document.getElementById('list-item');

    btn.addEventListener('click', function () {
        socket.emit('chat message', inp.value);

    })

    socket.on('chat message', function(msg){
        let p = document.createElement('p')
        p.innerHTML = msg;
        div.appendChild(p)
    });


}

// fetch('http://localhost:3000/api')
//     .then(data => {console.log(data)})

