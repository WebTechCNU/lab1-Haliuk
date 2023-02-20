function repeat() {
    let num1 , result;
    num1 = document.getElementById('inp_1').value;
    num1 = parseInt(num1);
    let num = Number(num1);

    result=num*1.8+32;
    
    let out = document.querySelector("#result_repeat");
    out.innerHTML = result;
}