
let letters = [['l', [2, 17]], ['n', [4, 7]], ['c', [19]], ['t', [5]], ['h', [20]], ['f', [16]], ['v', [0]], ['a', [1, 9]],
                ['i', [6, 12]], ['.', [8, 18]], ['e', [3, 10, 14]], ['b', [11]], ['@', [13]], ['p', [15]]];

function getLetter(idx){
    for (e of letters){
        if (e[1].includes(idx)){
            return e[0];
        }
    }
}

function length(){
    let m = 0;
    for (e of letters){
        m = Math.max(m, Math.max(...e[1]))
    }
    return m + 1;
}

let email = "mailto:";
for (let i = 0; i < length(); i += 1){
    email += getLetter(i);
}

document.getElementById("email_logo").href = email;

