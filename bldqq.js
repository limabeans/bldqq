// ==UserScript==
// @name        bldqq
// @namespace   Angel Lim
// @include     http://www.qqtimer.net/
// @version     1
// @grant       none
// ==/UserScript==

var exednfcount = 0;
var memodnfcount = 0;
var numsolves = 0;

var successrate = -1.0;

var space=document.createTextNode(" ");
var space2=document.createTextNode(" ");
var space3=document.createTextNode(" ");
var slash1=document.createTextNode(" / ");
var slash2=document.createTextNode(" / ");
var slash3=document.createTextNode(" / ");
var slash4=document.createTextNode(" / ");



var solveslabel=document.createTextNode("solves tracked: ");
document.body.appendChild(solveslabel);
var solves=document.createTextNode(numsolves);
document.body.appendChild(solves);

document.body.appendChild(slash3);

var exelabel=document.createTextNode("exe dnfs: ");
document.body.appendChild(exelabel);
var exe=document.createTextNode(exednfcount);
document.body.appendChild(exe);

document.body.appendChild(slash1);

var memolabel=document.createTextNode("memo dnfs: ");
document.body.appendChild(memolabel);
var memo=document.createTextNode(memodnfcount);
document.body.appendChild(memo);

document.body.appendChild(slash2);

var dnflabel=document.createTextNode("total dnfs: ");
document.body.appendChild(dnflabel);
var dnf=document.createTextNode(exednfcount+memodnfcount);
document.body.appendChild(dnf);


document.body.appendChild(slash4);
document.body.appendChild(document.createTextNode(" Success rate: "));
var rate=document.createTextNode(successrate);
document.body.appendChild(rate);
var percent=document.createTextNode("%");
document.body.appendChild(percent);

window.onkeydown = function(event) 
{ 
    if(timerStatus==3 && event.keyCode==17) //17-Ctrl, exe
    { 
	changeNotes(1); 
	comments[comments.length-1] = "exe"; 
	exednfcount=exednfcount+1; exe.nodeValue=exednfcount; 
	dnf.nodeValue=exednfcount+memodnfcount; } 
    if(timerStatus==3 && event.keyCode==16 ) //16-Shift, memo
    { 
	changeNotes(1); 
	comments[comments.length-1] = "memo"; 
	memodnfcount=memodnfcount+1; memo.nodeValue=memodnfcount; d
	nf.nodeValue=exednfcount+memodnfcount;  }
    if(timerStatus==1) 
    { 
	stopTimer(32); numsolves=numsolves+1; solves.nodeValue=numsolves; 
    }  
    successrate=100-((exednfcount+memodnfcount)/numsolves*100); rate.nodeValue=successrate;
}


var div=document.createElement("div");
div.innerHTML="<b>Angel's greasy qqtimer extension (for blders) :D</b> ----------- <b>SHIFT</b> for a <b>MEMO DNF</b>, <b>CTRL</b> for an <b>EXE DNF</b>  //<i>NOTE: only press the key binding <b>once</b>, unless you want corrupted stats! <b>Start with a clean session each time</b>. The dnf stats I encoded are <b>blind</b> (haha) to the session, times list, and stats.</i>";
document.body.insertBefore(div,document.body.firstChild);
