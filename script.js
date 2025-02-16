
let letters = [['l', [11]], ['o', [14]], ['a', [1, 2, 9]], ['m', [8, 15]], ['c', [13]], ['g', [7]], ['@', [6]], ['v', [0]],
               ['i', [5, 10]], ['b', [4]], ['e', [3]], ['.', [12]]];

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
let len = length();
for (let i = 0; i < len; i += 1){
    email += getLetter(i);
}

document.getElementById("email_logo").href = email;

