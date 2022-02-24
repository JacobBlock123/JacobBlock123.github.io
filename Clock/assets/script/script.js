setInterval(startTime, 1000);

const alarmSound = new Audio('assets/media/sound.mp3');

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('timer').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);

    let clock = h + ":" + m + ":" + s;

    let checkAlarm1 = alarms[0].innerHTML + ":00";
    let checkAlarm2 = alarms[1].innerHTML + ":00";
    let checkAlarm3 = alarms[2].innerHTML + ":00";

    if (checkAlarm1 == clock || checkAlarm2 == clock || checkAlarm3 == clock) {
      alarmSound.play();
    }
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }

  function buttonClicked() {
    if (alarmCount == 0) {
    alarm1 = false;
    delBtn1.style.opacity = 0;
    delBtn2.style.opacity = 0;
    delBtn3.style.opacity = 0;
  
    delBtn1.disabled = true;
    delBtn2.disabled = true;
    delBtn3.disabled = true;
  }

  if (alarmCount == 1) {
    alarm1 = true;
    alarm2 = false;
    delBtn1.style.opacity = 1;
    delBtn2.style.opacity = 0;
    delBtn3.style.opacity = 0;
  
    delBtn1.disabled = false;
    delBtn2.disabled = true;
    delBtn3.disabled = true;
  }

  if (alarmCount == 2) {
    alarm2 = true;
    alarm3 = false;
    delBtn1.style.opacity = 1;
    delBtn2.style.opacity = 1;
    delBtn3.style.opacity = 0;
  
    delBtn1.disabled = false;
    delBtn2.disabled = false;
    delBtn3.disabled = true;
  }

  if (alarmCount == 3) {
    alarm3 = true;
    delBtn1.style.opacity = 1;
    delBtn2.style.opacity = 1;
    delBtn3.style.opacity = 1;
  
    delBtn1.disabled = false;
    delBtn2.disabled = false;
    delBtn3.disabled = false;
  }
}

  let alarm1 = false;
  let alarm2 = false;
  let alarm3 = false;

  let delBtn1 = document.getElementById('del1');
  let delBtn2 = document.getElementById('del2');
  let delBtn3 = document.getElementById('del3');

  delBtn1.style.opacity = 0;
  delBtn2.style.opacity = 0;
  delBtn3.style.opacity = 0;

  delBtn1.disabled = true;
  delBtn2.disabled = true;
  delBtn3.disabled = true;

  let alarm = document.getElementById('alarm');

  let alarmCount = 0;

  function setTimer() {
    if (alarm.value.length != "") {
      if (alarm.value.length === 5) {
        document.getElementById('message').innerText = "";

        if (alarmCount < 3) {
            alarmCount += 1;
            alarms[alarmCount - 1].innerText = alarm.value;
        }

        else if (alarmCount >= 3) {
            document.getElementById('message').innerText = "You can only have 3 alarms";
        }
      }

      else {
        document.getElementById('message').innerText = "Make sure you enter a valid alarm in the formatting hh:mm";
      }
    }

    else {
      document.getElementById('message').innerText = "Please enter an alarm";
    }
  }

const alarms = [document.getElementById('alarm1'), document.getElementById('alarm2'), document.getElementById('alarm3')];

function delAlarm1() {
  if (alarm1 == true) {
    alarms[0].innerText = alarms[1].innerText;
    alarms[1].innerText = alarms[2].innerText;
    alarms[2].innerText = "";
    alarmCount -= 1;

    document.getElementById('message').innerText = "";
  }
}

function delAlarm2() {
  if (alarm2 == true) {
    alarms[1].innerText = alarms[2].innerText;
    alarmCount -= 1;
    alarms[2].innerText = "";

    document.getElementById('message').innerText = "";
  }
}

function delAlarm3() {
  if (alarm3 == true) {
    alarms[2].innerText = "";
    alarmCount -= 1;

    document.getElementById('message').innerText = "";
  }
}