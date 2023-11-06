const results = [0, 1, 2, 3, 4]
let ans = results[Math.floor(Math.random()*results.length)]

let img = document.forms['imageUploadForm']['image'].value;

let eyeimage = document.getElementById('img')
eyeimage.setAttribute("src", img)

const list = ["No Dr", 'Mild', 'Moderate', 'Severe', 'Proliferate']

document.getElementById("results").innerHTML = `he image you have uploaded has ${list[ans]}`;
comsole.log(list[ans])

