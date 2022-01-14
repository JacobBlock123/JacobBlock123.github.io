function increaseBy1px(id, increaseBy){
    let txt = document.getElementById('gb2');

    let style = window.getComputedStyle(txt, null).getPropertyValue('font-size');

    let currentSize = parseFloat(style);

    txt.style.fontSize = (currentSize + increaseBy) + 'px';
}

function changeBackColor(id)
{
    let num = Math.floor(100000 + Math.random() * 900000);

    const back = document.getElementById('body');
    back.style.backgroundColor = "#" + num;
}






function changep1(id) {
    let num2 = Math.floor(100000 + Math.random() * 900000);

    const back = document.getElementById('gb1');
    back.style.color = "#" + num2;
}