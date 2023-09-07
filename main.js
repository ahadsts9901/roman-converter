function roman(event) {
    event.preventDefault()

    let input = document.getElementById("input").value;
    let output = document.getElementById("result");

    // console.log(input)

    let romanObject = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        XXX: 30,
        XX: 20,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };
    let inputber = parseInt(input);

    if (input.trim().length == 0) {
        output.value = "Invalid Input";
        output.style.color = "#F64A4A";
        output.innerHTML = "";
        return ;
    }
    if (inputber > 4999 || inputber < 1) {
        output.value = "Input Out Of Range";
        output.style.color = "#F64A4A";
        output.innerHTML = "";
        return ;
    }

    output.style.color = "#fff";
    output.value = "";

    let result = "";
    let romanValues = Object.keys(romanObject);
    romanValues.forEach((key) => {
        while (romanObject[key] <= inputber) {
            inputber -= romanObject[key];
            result += key;
        }
    });
    output.value = result;
}

function copy(event) {
    event.preventDefault();

    let input = document.getElementById("result");
    input.select();
    document.execCommand("copy");
    
    event.target.className = "bi bi-clipboard-check-fill";
    event.target.style.color = "#fff";
    
    setTimeout(function() {
        event.target.className = "bi bi-clipboard";
        event.target.style.color = "#fff";
    }, 500);
}
