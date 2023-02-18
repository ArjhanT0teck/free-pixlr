# free-pixlr
It is absolutely disguising how they make you pay for https://pixlr.com/x/#editor so I made this so you can download it for free, the original idea was here https://www.reddit.com/r/pixlr/comments/112ro0l/how_to_bypass_the_image_limit/

# How to use 
Paste main.js into the console on https://pixlr.com/x/#editor


OR USE


Bookmarklet version

```js 
javascript:(function()%7Bvar%20lol%3D0%3B%0Aif(location.href%3D%3D%3D%22https%3A%2F%2Fpixlr.com%2Fx%2F%23editor%22%26%26lol%3D%3D%3D0)%7B%0A%20%20%20%20lol%2B%2B%0Adocument.getElementById('save').onclick%3Dfunction()%7B%0AsetTimeout(function()%7B%0A%20%20%20%20function%20downloadURI(d%2C%20e)%20%7B%0A%20%20%20%20var%20o%20%3D%20document.createElement(%22a%22)%3B%0A%20%20%20%20o.download%20%3D%20e%2C%20o.href%20%3D%20d%2C%20document.body.appendChild(o)%2C%20o.click()%2C%20document.body.removeChild(o)%0A%7D%0Aconst%20canvas%3Ddocument.getElementsByTagName(%22canvas%22)%5B0%5D%3B%0Alet%20canvasW%20%3D%20canvas.getBoundingClientRect().width%3B%0Alet%20canvasH%20%3D%20canvas.getBoundingClientRect().height%3B%0Alet%20btnC%3D%22button%20big%20white%20w-100%20pad-30%20text-default%22%0Adocument.getElementsByClassName('heavy%20bold')%5B0%5D.parentNode.innerHTML%3D%60%0A%3Cspan%3E%3Cimg%20src%3D%22%24%7Bdocument.getElementsByClassName(%22canvas%22)%5B0%5D.toDataURL()%7D%22%20width%3D%22%24%7BcanvasW%2F10%7D%22%20height%3D%22%24%7BcanvasH%2F10%7D%22%3E%3Ch1%20class%3D%22heavy%20bold%22%20onclick%3D%22window.open('https%3A%2F%2Fgithub.com%2FArjhanT0teck%2Ffree-pixlr')%22%3EFree%20pixlr%3C%2Fh1%3E%3C%2Fspan%3E%0A%3Ca%20href%3D%22https%3A%2F%2Fgithub.com%2FArjhanT0teck%2Ffree-pixlr%2F%22%3EGithub%3C%2Fa%3E%0ADownload%20as%3A%0A%3Cbutton%20onclick%3D%22downloadURI('%24%7Bdocument.getElementsByClassName(%22canvas%22)%5B0%5D.toDataURL()%7D'%2C'pixlr.jpg')%22%20class%3D%22%24%7BbtnC%7D%22%3EJPG%3C%2Fbutton%3E%0A%3Cbutton%20class%3D%22%24%7BbtnC%7D%22%20onclick%3D%22downloadURI('%24%7Bdocument.getElementsByClassName(%22canvas%22)%5B0%5D.toDataURL()%7D'%2C'pixlr.svg')%22%3ESVG%3C%2Fbutton%3E%0A%3Cbutton%20class%3D%22%24%7BbtnC%7D%22%20onclick%3D%22downloadURI('%24%7Bdocument.getElementsByClassName(%22canvas%22)%5B0%5D.toDataURL()%7D'%2C'pixlr.png')%22%3EPNG%3C%2Fbutton%3E%0A%60%0A%7D%2C100)%0A%7D%0A%7D%20else%20%7B%0A%20%20%20%20alert(%22Error%20either%20go%20into%20the%20editor%20or%20press%20save.%22)%0A%7D%7D)()%3B```
