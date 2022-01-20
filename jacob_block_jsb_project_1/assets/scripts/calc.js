function calc() {
    let value1 = document.getElementById('input1').value;
    let value2 = document.getElementById('input2').value;

    if (isNaN(value1) == false && isNaN(value2) == false) {
        let int1 = parseFloat(value1);
        let int2 = parseFloat(value2);

        let sum =  + int1 + int2;
        
        document.getElementById('text1').innerText = sum;
    }

    else {
        document.getElementById('text1').innerText = "That is not a number.";
    }
}