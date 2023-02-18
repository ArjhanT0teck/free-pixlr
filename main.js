if(typeof document.getElementById('save') !=="undefined"){
function downloadURI(d, e) {
    var o = document.createElement("a");
    o.download = e, o.href = d, document.body.appendChild(o), o.click(), document.body.removeChild(o)
}
document.getElementById('save').textContent="download"

document.getElementById('save').onclick=function(){
    downloadURI(document.getElementsByClassName("canvas")[0].toDataURL())
    // will add panel later so you can change what you're downloading it as
    setTimeout(function(){
    document.getElementsByClassName("modal dim")[0].remove()
    },100)

}
} else {
    alert("You must use it inside of a image editor")
}
