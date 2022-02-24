let textInput = document.getElementById("bday");

let today = new Date();

let toDays = 1000 * 3600 * 24;

function birthday() {
    if (textInput.value != null) {
        if (textInput.value.length == 10) {
            let bdayArray = textInput.value.split("-");
            let year = bdayArray[0];
            let month = bdayArray[1] - 1;
            let day = bdayArray[2];
            if (day <= 31 && day != NaN && month <= 11 && month != NaN && year != NaN) {
                let bday = new Date(year, month, day);

                let daysOld = Math.abs(today-bday);
                daysOld = Math.round(daysOld / toDays);

                let yrsOld = Math.floor(daysOld / 365);

                let nextBday = Math.ceil(((bday.setFullYear(0) - today.setFullYear(0)) / toDays) - 1);

                bday = bday.toString();

                bday = bday.slice(0, 11);

                document.getElementById("info").innerText =
                "Your birthday is " + bday +
                "\n You are " + yrsOld + " years old \n You are " + daysOld + " days old \n There are " + nextBday + " days until your next birthday"
                ;
            }

            else {
                document.getElementById("info").innerText = "Please enter a valid date.";
            }
        }

        else {
            document.getElementById("info").innerText = ("Make sure you enter a valid date: YYYY-MM-DD");
        }
    }

    else {
        document.getElementById("info").innerText = "Enter a date please."
    }
}