# free-pixlr
It is absolutely disguising how they make you pay for https://pixlr.com/x/#editor so I made this so you can download it for free, the original idea was here https://www.reddit.com/r/pixlr/comments/112ro0l/how_to_bypass_the_image_limit/

# How to use 
Paste this into the console on https://pixlr.com/x/#editor

Bookmarklet version

```js 
javascript:(function()%7Bif(typeof%20document.getElementById('save')%20!%3D%3D%22undefined%22)%7B%0Afunction%20downloadURI(d%2C%20e)%20%7B%0A%20%20%20%20var%20o%20%3D%20document.createElement(%22a%22)%3B%0A%20%20%20%20o.download%20%3D%20e%2C%20o.href%20%3D%20d%2C%20document.body.appendChild(o)%2C%20o.click()%2C%20document.body.removeChild(o)%0A%7D%0Adocument.getElementById('save').textContent%3D%22download%22%0A%0Adocument.getElementById('save').onclick%3Dfunction()%7B%0A%20%20%20%20downloadURI(document.getElementsByClassName(%22canvas%22)%5B0%5D.toDataURL())%0A%20%20%20%20%2F%2F%20will%20add%20panel%20later%20so%20you%20can%20change%20what%20you're%20downloading%20it%20as%0A%20%20%20%20setTimeout(function()%7B%0A%20%20%20%20document.getElementsByClassName(%22modal%20dim%22)%5B0%5D.remove()%0A%20%20%20%20%7D%2C100)%0A%0A%7D%0A%7D%20else%20%7B%0A%20%20%20%20alert(%22You%20must%20use%20it%20inside%20of%20a%20image%20editors%22)%0A%7D%7D)()%3B```
