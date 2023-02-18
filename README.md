# free-pixlr
It is absolutely disguising how they make you pay for https://pixlr.com/x/#editor so I made this so you can download it for free, the original idea was here https://www.reddit.com/r/pixlr/comments/112ro0l/how_to_bypass_the_image_limit/

# How to use 
Paste main.js into the console on https://pixlr.com/x/#editor


OR USE


Bookmarklet version

```js 
javascript:(function()%7Bif (typeof document.getElementById('save') !%3D%3D "undefined") %7B%0A    function downloadURI(d%2C e) %7B%0A        var o %3D document.createElement("a")%3B%0A        o.download %3D e%2C o.href %3D d%2C document.body.appendChild(o)%2C o.click()%2C document.body.removeChild(o)%0A    %7D%0A    document.getElementById('save').textContent %3D "download"%0A%0A    document.getElementById('save').onclick %3D function() %7B%0A        downloadURI(document.getElementsByClassName("canvas")%5B0%5D.toDataURL())%0A        %2F%2F will add panel later so you can change what you're downloading it as%0A        setTimeout(function() %7B%0A            document.getElementsByClassName("modal dim")%5B0%5D.remove()%0A        %7D%2C 100)%0A%0A    %7D%0A%7D else %7B%0A    alert("You must use it inside of a image editor")%0A%7D%7D)()%3B```
