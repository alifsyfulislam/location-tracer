var sehriTime = [
    "3:52","3:51","3:50","3:50","3:49","3:49","3:48","3:48","3:47","3:47",
    "3:46","3:46","3:45","3:45","3:44","3.44","3:43","3:43","3:42","3:42",
    "3:41","3:41","3:40","3:40","3:40","3:40","3:39","3:39","3:39","3:39"
];

var iftarTime = [
    "18:34","18:34","18:35","18:35","18:36","18:36","18:36","18:37","18:37","18:38",
    "18:38","18:38","18:39","18:39","18:40","18:40","18:41","18:42","18:42","18:42",
    "18:43","18:43","18:44","18:44","18:45","18:45","18:46","18:46","18:47","18:47"
];

var fajarTime = [
    "3:58","3:57","3:56","3:56","3:55","3:55","3:55","3:54","3:54","3:53",
    "3:53","3:52","3:52","3:51","3:50","3:50","3:50","3:49","3:49","3:48",
    "3:48","3:47","3:47","3:46","3:46","3:46","3:45","3:45","3:45","3:45"
];

var johurTime = [
    "11:58","11:58","11:58","11:58","11:58","11:58","11:58","11:58","11:58","11:58",
    "11:58","11:58","11:59","11:59","11:59","11:59","11:59","11:59","11:59","11:59",
    "11:59","11:59","11:59","11:59","12:0","12:0","12:1","12:1","12:1","12:1"
];

var asarTime = [
    "16:31","16:31","16:31","16:31","16:31","16:32","16:32","16:32","16:32","16:32",
    "16:32","16:32","16:33","16:33","16:33","16:33","16:33","16:33","16:33","16:34",
    "16:34","16:34","16:34","16:34","16:34","16:35","16:35","16:35","16:35","16:35"
];

var magribTime = [
    "18:34","18:34","18:35","18:35","18:36","18:36","18:36","18:37","18:37","18:38",
    "18:38","18:38","18:39","18:39","18:40","18:40","18:41","18:42","18:42","18:42",
    "18:43","18:43","18:44","18:44","18:45","18:45","18:46","18:46","18:47","18:47"
];


var eshaTime = [
    "19:58","19:58","19:58","19:58","19:58","19:58","20:1","20:1","20:1","20:1",
    "20:1","20:1","20:1","20:1","20:1","20:1","20:1","20:6","20:6","20:6",
    "20:6","20:9","20:9","20:9","20:11","20:11","20:11","20:11","20:11","20:13"
];

var divisionStatus = " ";
var division = document.getElementById('division');

var hadithText = [
    "যখন রমযান মাসের আগমন ঘটে, তখন জান্নাতের দরজাসমূহ খুলে দেওয়া হয় এবং জাহান্নামের দরজাসমূহ বন্ধ করে দেওয়া হয়। আর শয়তানদেরকে শৃঙ্খলাবদ্ধ করা হয়।",
    "যে ব্যক্তি অসুস্থতা ও সফর ব্যতীত ইচ্ছাকৃতভাবে রমযানের একটি রোযাও ভঙ্গ করে, সে আজীবন রোযা রাখলেও ঐ রোযার হক আদায় হবে না",
    "তোমাদের কেউ যখন রোযা রাখে তখন সে যেন অশালীন কথাবার্তা না বলে ও হৈ চৈ না করে।",
    "যে ঈমান ও বিশ্বাস সহকারে সওয়াবের আশায় শবে কদরে নামায পড়ে এবং রমজানের রোযা রাখবে,তার অতীতের সকল গুনাহ মাফ করে দেওয়া হবে।",
    "এমন দু’টি মাস আছে যার উভয়টি (পর পর) ঘাটতি অর্থাৎ ঊনত্রিশ দিন হয় না।আর তা হল ঈদের দু’টি মাস রমজান এবং যিলহজ্ব।",
    "রমজানের একদিন বা দু’দিন পূর্বে নফল রোযা রাখা যাবে না। তবে কেউ যদি প্রতিমাসে এ রোযা রাখতে অভ্যস্ত ,তাহলে রাখতে পার।",
    "তোমরা সেহরী খাও। কেননা সেহরী খাওয়ায় বরকত লাভ হয়। ",
    "রোযাদার যদি ভুল করে কিছু খায় বা পান করে, তা হলে সে (ইফতার না করে) রোযা পূর্ণ করবে।",
    "মৃত ব্যক্তির উপর রোযার কাজা থাকলে অভিভাবক তার পক্ষ থেকে তা আদায় করবে।",
    "যতদিন লোকেরা তাড়াতাড়ি (সূর্যাস্তের সাথে সাথে) ইফতার করবে , ততদিন কল্যাণ থেকে বঞ্চিত হবে না।",
    "যখন রমযান মাসের আগমন ঘটে, তখন জান্নাতের দরজাসমূহ খুলে দেওয়া হয় এবং জাহান্নামের দরজাসমূহ বন্ধ করে দেওয়া হয়। আর শয়তানদেরকে শৃঙ্খলাবদ্ধ করা হয়।",
    "যে ব্যক্তি অসুস্থতা ও সফর ব্যতীত ইচ্ছাকৃতভাবে রমযানের একটি রোযাও ভঙ্গ করে, সে আজীবন রোযা রাখলেও ঐ রোযার হক আদায় হবে না",
    "তোমাদের কেউ যখন রোযা রাখে তখন সে যেন অশালীন কথাবার্তা না বলে ও হৈ চৈ না করে।",
    "যে ঈমান ও বিশ্বাস সহকারে সওয়াবের আশায় শবে কদরে নামায পড়ে এবং রমজানের রোযা রাখবে,তার অতীতের সকল গুনাহ মাফ করে দেওয়া হবে।",
    "এমন দু’টি মাস আছে যার উভয়টি (পর পর) ঘাটতি অর্থাৎ ঊনত্রিশ দিন হয় না।আর তা হল ঈদের দু’টি মাস রমজান এবং যিলহজ্ব।",
    "রমজানের একদিন বা দু’দিন পূর্বে নফল রোযা রাখা যাবে না। তবে কেউ যদি প্রতিমাসে এ রোযা রাখতে অভ্যস্ত ,তাহলে রাখতে পার।",
    "তোমরা সেহরী খাও। কেননা সেহরী খাওয়ায় বরকত লাভ হয়। ",
    "রোযাদার যদি ভুল করে কিছু খায় বা পান করে, তা হলে সে (ইফতার না করে) রোযা পূর্ণ করবে।",
    "মৃত ব্যক্তির উপর রোযার কাজা থাকলে অভিভাবক তার পক্ষ থেকে তা আদায় করবে।",
    "যতদিন লোকেরা তাড়াতাড়ি (সূর্যাস্তের সাথে সাথে) ইফতার করবে , ততদিন কল্যাণ থেকে বঞ্চিত হবে না।",
    "যখন রমযান মাসের আগমন ঘটে, তখন জান্নাতের দরজাসমূহ খুলে দেওয়া হয় এবং জাহান্নামের দরজাসমূহ বন্ধ করে দেওয়া হয়। আর শয়তানদেরকে শৃঙ্খলাবদ্ধ করা হয়।",
    "যে ব্যক্তি অসুস্থতা ও সফর ব্যতীত ইচ্ছাকৃতভাবে রমযানের একটি রোযাও ভঙ্গ করে, সে আজীবন রোযা রাখলেও ঐ রোযার হক আদায় হবে না",
    "তোমাদের কেউ যখন রোযা রাখে তখন সে যেন অশালীন কথাবার্তা না বলে ও হৈ চৈ না করে।",
    "যে ঈমান ও বিশ্বাস সহকারে সওয়াবের আশায় শবে কদরে নামায পড়ে এবং রমজানের রোযা রাখবে,তার অতীতের সকল গুনাহ মাফ করে দেওয়া হবে।",
    "এমন দু’টি মাস আছে যার উভয়টি (পর পর) ঘাটতি অর্থাৎ ঊনত্রিশ দিন হয় না।আর তা হল ঈদের দু’টি মাস রমজান এবং যিলহজ্ব।",
    "রমজানের একদিন বা দু’দিন পূর্বে নফল রোযা রাখা যাবে না। তবে কেউ যদি প্রতিমাসে এ রোযা রাখতে অভ্যস্ত ,তাহলে রাখতে পার।",
    "তোমরা সেহরী খাও। কেননা সেহরী খাওয়ায় বরকত লাভ হয়। ",
    "রোযাদার যদি ভুল করে কিছু খায় বা পান করে, তা হলে সে (ইফতার না করে) রোযা পূর্ণ করবে।",
    "মৃত ব্যক্তির উপর রোযার কাজা থাকলে অভিভাবক তার পক্ষ থেকে তা আদায় করবে।",
    "যতদিন লোকেরা তাড়াতাড়ি (সূর্যাস্তের সাথে সাথে) ইফতার করবে , ততদিন কল্যাণ থেকে বঞ্চিত হবে না।"
];





var audioFile = document.getElementById('audioFile');
var audioFile2 = document.getElementById('audioFile2');




setInterval( function () {
    var today = new Date();
    if (today.getHours()<=19 && today.getHours()>=15){
        checkIftarTime();
    }
    else if (today.getHours()<=4 && today.getHours()>=0) {
        checkSehriTime();
    }
    else {
        document.getElementById('subtitle').innerHTML = "এখন সময়";
        document.getElementById('counter').innerHTML = (today.getHours()<10?"0"+today.getHours() : today.getHours()) + ":" + (today.getMinutes()<10? "0"+today.getMinutes(): today.getMinutes()) + ":" + (today.getSeconds()<10 ? "0"+today.getSeconds():today.getSeconds());
    }
    checkSalahTime();
    checkSalahBoard();
    checkHadith();
    checkPosition();
    ramadanDate();
},1000);


function checkIftarTime() {
    var today = new Date();
    var currDate = today.getDate();
    if (currDate){
        var difference = 0;
        var number = iftarTime[currDate].split(":");
        var givenTime = parseInt(number[0]*60*60)+parseInt(divisionDifference(parseInt(number[1]*60)));
        var lastTIme = (((today.getHours()*60+today.getMinutes())*60)+today.getSeconds());
        difference = givenTime - lastTIme;
        if (difference<4*60*60 && difference>=0){
            document.getElementById('subtitle').innerHTML = "ইফতার সময়সূচী";
            document.getElementById('counter').innerHTML = printTimer(difference);
        }
    }
}

function checkSehriTime() {
    var today = new Date();
    var currDate = today.getDate();
    if (currDate){
        var difference = 0;
        var number = sehriTime[currDate].split(":");
        var givenTime = parseInt(number[0]*60*60)+parseInt(divisionDifference(parseInt(number[1]*60)));
        var lastTIme = (((today.getHours()*60+today.getMinutes())*60)+today.getSeconds());
        difference = givenTime - lastTIme;
        if (difference<4*60*60 && difference>=0){
            document.getElementById('subtitle').innerHTML = "সেহেরী সময়সূচী";
            document.getElementById('counter').innerHTML = printTimer(difference);
        }
    }
}


function printTimer(sec) {
    hr = Math.floor(sec / 3600) % 24;
    mm = Math.floor(sec / 60) % 60;
    ss = sec % 60;

    var x = hr < 10? "0"+hr : hr;
    var y = mm < 10? "0"+mm : mm;
    var z = ss < 10? "0"+ss : ss;
    return ( x+":"+y+":"+z)
}



function checkSalahTime() {
    var today = new Date();
    var currHour = today.getHours();
    var currMin = today.getMinutes();
    var currSec = today.getSeconds();
    var currDate = today.getDate();
    if (currDate){
        var fajarSalah = fajarTime[currDate]+":"+"0";
        var johurSalah = johurTime[currDate]+":"+"0";
        var asarSalah = asarTime[currDate]+":"+"0";
        var mafribSalah = magribTime[currDate]+":"+"0";
        var eshaSalah = eshaTime[currDate]+":"+"0";
        var currentClock = currHour+":"+currMin+":"+currSec;
        if (fajarSalah == currentClock){
            document.getElementById('sub2').innerText = "ফজর নামাজের ওয়াক্ত";
            audioFile.autoplay = true;
            audioFile.load();
            console.log("match");
        }
        else if (johurSalah == currentClock) {
            document.getElementById('sub2').innerText = "জহুর নামাজের ওয়াক্ত";
            audioFile2.autoplay = true;
            audioFile2.load();
            console.log("johur");
        }

        else if (asarSalah == currentClock) {
            document.getElementById('sub2').innerText = "আসর নামাজের ওয়াক্ত";
            audioFile2.autoplay = true;
            audioFile2.load();
            console.log("asar");
        }

        else if (mafribSalah == currentClock){
            document.getElementById('sub2').innerText = "মাগরিব নামাজের ওয়াক্ত";
            audioFile2.autoplay = true;
            audioFile2.load();
            console.log("magrib");
        }

        else if (eshaSalah == currentClock){
            document.getElementById('sub2').innerText = "এশা নামাজের ওয়াক্ত";
            audioFile2.autoplay = true;
            audioFile2.load();
            console.log("esha");
        }
    }
}



function checkSalahBoard() {
    var today = new Date();
    var currDate = today.getDate();
    setTimeout(function () {
        document.getElementById('fajr').innerText = "ফজর\n"+fajarTime[currDate];
        document.getElementById('johur').innerText = "জহুর\n"+johurTime[currDate];
        document.getElementById('asar').innerText = "আসর\n"+asarTime[currDate];
        document.getElementById('magrib').innerText = "মাগরিব\n"+magribTime[currDate];
        document.getElementById('esha').innerText = "এশা\n"+eshaTime[currDate];
    },2e3)
}


function checkHadith() {
    var today = new Date();
    var currDate = today.getDate();
    if (currDate){
        document.getElementById('hadis').innerHTML = hadithText[currDate];
    }
}


function checkPosition() {
    getLocation();
}


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}

function showPosition(position) {
    var low = (position.coords.latitude).toFixed(2);
    var high = (position.coords.longitude).toFixed(2);
    if (low >= "23.70" || low<"23.80" && high >= "90.40" || high<"90.50"){
        divisionStatus = division.innerText = "dhk";

    }
    else if (low >= "22.30" || low<"22.40" && high >= "91.80" || high<"91.90") {
        divisionStatus = division.innerText = "ctg";
    }

    else if (low >= "22.75" || low<"22.85" && high >= "89.50" || high<"89.60") {
        divisionStatus = division.innerText = "khu";
    }

    else if (low >= "24.30" || low<"24.40" && high >= "88.55" || high<"88.65") {
        divisionStatus = division.innerText = "raj";
    }

    else if (low >= "24.80" || low<"24.90" && high >= "91.80" || high<"91.90") {
        divisionStatus = division.innerText = "sly";
    }

    else if (low >= "22.60" || low<"22.70" && high >= "90.30" || high<"90.40") {
        divisionStatus = idivision.innerText = "bar";
    }

    else if (low >= "25.70" || low<"25.80" && high >= "89.20" || high<"89.30") {
        divisionStatus = division.innerText = "ran";
    }


    else if (low >= "24.70" || low<"24.80" && high >= "90.30" || high<"90.40") {
        divisionStatus = division.innerText = "myn";
    }
}

function ramadanDate() {
    var today = new Date();
    var currentDate = today.getDate();
    var currMonth = today.getMonth();

    setTimeout(function () {
        switch (currentDate) {
            case 31:
                dateReminder.innerHTML = "আজ ২৫ রমাজান";
                break;
            case 1:
                dateReminder.innerHTML = "আজ ২৬ রমাজান";
                break;
            case 2:
                dateReminder.innerHTML = "আজ ২৭ রমাজান";
                break;
            case 3:
                dateReminder.innerHTML = "আজ ২৮ রমাজান";
                break;
            case 4:
                dateReminder.innerHTML = "আজ ২৯ রমাজান";
                break;
            case 5:
                dateReminder.innerHTML = "আজ ৩০ রমাজান";
                break;
            case 7:
                dateReminder.innerHTML = "আজ ১ রমাজান";
                break;
            case 8:
                dateReminder.innerHTML = "আজ ২ রমাজান";
                break;
            case 9:
                dateReminder.innerHTML = "আজ ৩ রমাজান";
                break;
            case 10:
                dateReminder.innerHTML = "আজ ৪ রমাজান";
                break;
            case 11:
                dateReminder.innerHTML = "আজ ৫ রমাজান";
                break;
            case 12:
                dateReminder.innerHTML = "আজ ৬ রমাজান";
                break;
            case 13:
                dateReminder.innerHTML = "আজ ৭ রমাজান";
                break;
            case 14:
                dateReminder.innerHTML = "আজ ৮ রমাজান";
                break;
            case 15:
                dateReminder.innerHTML = "আজ ৯ রমাজান";
                break;
            case 16:
                dateReminder.innerHTML = "আজ ১০ রমাজান";
                break;
            case 17:
                dateReminder.innerHTML = "আজ ১১ রমাজান";
                break;
            case 18:
                dateReminder.innerHTML = "আজ ১২ রমাজান";
                break;
            case 19:
                dateReminder.innerHTML = "আজ ১৩ রমাজান";
                break;
            case 20:
                dateReminder.innerHTML = "আজ ১৪ রমাজান";
                break;
            case 21:
                dateReminder.innerHTML = "আজ ১৫ রমাজান";
                break;
            case 22:
                dateReminder.innerHTML = "আজ ১৬ রমাজান";
                break;
            case 23:
                dateReminder.innerHTML = "আজ ১৭ রমাজান";
                break;
            case 24:
                dateReminder.innerHTML = "আজ ১৮ রমাজান";
                break;
            case 25 :
                dateReminder.innerHTML = "আজ ১৯ রমাজান";
                break;
            case 26:
                dateReminder.innerHTML = "আজ ২০ রমাজান";
                break;
            case 27:
                dateReminder.innerHTML = "আজ ২১ রমাজান";
                break;
            case 28:
                dateReminder.innerHTML = "আজ ২২ রমাজান";
                break;
            case 29:
                dateReminder.innerHTML = "আজ ২৩ রমাজান";
                break;
            case 30:
                dateReminder.innerHTML = "আজ ২৪ রমাজান";
                break;
            default :
                dateReminder.innerHTML = "ঈদ মুবারক";
                break;
        }
    },4e3)
}


function divisionDifference(diff) {
    var time  = parseInt(diff);
    if (divisionStatus == "dhk"){
        document.getElementById('sub').innerHTML = "ঢাকা বিভাগ";
        console.log(time);
        return time;
    }

    else if (divisionStatus == "ctg"){
        document.getElementById('sub').innerHTML = "চট্রগ্রাম বিভাগ";
        time = time + 300;
        console.log(time);
        return time;
    }

    else if (divisionStatus == "myn"){
        document.getElementById('sub').innerHTML = "ময়মনসিংহ বিভাগ";
        time = time + 120;
        console.log(time);
        return time;
    }

    else if (divisionStatus == "raj"){
        document.getElementById('sub').innerHTML = "রাজশাহী বিভাগ";
        time = time + 420;
        console.log(time);
        return time;
    }

    else if (divisionStatus == "sly"){
        document.getElementById('sub').innerHTML = "সিলেট বিভাগ";
        time = time + 300;
        console.log(time);
        return time;
    }

    else if (divisionStatus == "ran"){
        document.getElementById('sub').innerHTML = "রংপুর বিভাগ";
        time = time + 360;
        console.log(time);
        return time;
    }

    else if (divisionStatus == "bar"){
        document.getElementById('sub').innerHTML = "বরিশাল বিভাগ";
        time = time + 60;
        console.log(time);
        return time;
    }

    else if (divisionStatus == "khu"){
        document.getElementById('sub').innerHTML = "খুলনা বিভাগ";
        time = time + 180;
        console.log(time);
        return time;
    }

    else{
        document.getElementById('sub').innerHTML = "ঢাকা বিভাগ";
        console.log(time);
        return time;
    }
}












