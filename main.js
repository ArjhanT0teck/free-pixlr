var lol=0;
if(location.href==="https://pixlr.com/x/#editor"&&lol===0){
    lol++
document.getElementById('save').onclick=function(){
setTimeout(function(){
    function downloadURI(d, e) {
    var o = document.createElement("a");
    o.download = e, o.href = d, document.body.appendChild(o), o.click(), document.body.removeChild(o)
}
const canvas=document.getElementsByTagName("canvas")[0];
let canvasW = canvas.getBoundingClientRect().width;
let canvasH = canvas.getBoundingClientRect().height;
let btnC="button big white w-100 pad-30 text-default"
document.getElementsByClassName('heavy bold')[0].parentNode.innerHTML=`
<span><img src="${document.getElementsByClassName("canvas")[0].toDataURL()}" width="${canvasW/10}" height="${canvasH/10}"><h1 class="heavy bold" onclick="window.open('https://github.com/ArjhanT0teck/free-pixlr')">Free pixlr</h1></span>
<a href="https://github.com/ArjhanT0teck/free-pixlr/">Github</a>
Download as:
<button onclick="downloadURI('${document.getElementsByClassName("canvas")[0].toDataURL()}','pixlr.jpg')" class="${btnC}">JPG</button>
<button class="${btnC}" onclick="downloadURI('${document.getElementsByClassName("canvas")[0].toDataURL()}','pixlr.svg')">SVG</button>
<button class="${btnC}" onclick="downloadURI('${document.getElementsByClassName("canvas")[0].toDataURL()}','pixlr.png')">PNG</button>
`
},100)
}
} else {
    alert("Error either go into the editor or press save.")
}
