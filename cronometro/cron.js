"use strict"

var hh = 0;
var mm = 0;
var ss = 0;
var tempo = 100;
var cron;

function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

function pause() {
    clearInterval(cron);
}

function reset() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('hh').innerText = '00';
    document.getElementById('mm').innerText = '00';
    document.getElementById('ss').innerText = '00';
}


function timer() {
    ss++

    if (ss == 60) { 
        ss = 0; 
        mm++; 
    }

    if (mm == 60) { 
        mm = 0;
        hh++;
    }

    document.getElementById('hh').innerText = returnData(hh);
    document.getElementById('mm').innerText = returnData(mm);
    document.getElementById('ss').innerText = returnData(ss);
    
    function returnData(cont){
        return cont < 10 ? `0` + cont : cont;
    }

    return returnData;
}