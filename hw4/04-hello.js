
var img = new Image();
img.src = 'http://placekitten.com/200/200';
img.width = 200;
img.height = 200;
img.style.display = "block"
img.style.marginLeft = "auto"
img.style.marginRight = "auto"
img.style.marginTop = "10mm";
img.style.borderRadius = "50mm";

var para = `Cat ipsum dolor sit amet, 
purrrrrr so mice but jump on fridge or ask to go outside 
and ask to come inside and ask to go outside and ask to come inside. `;

var create_p = document.createElement("p");
var text = document.createTextNode(para);
create_p.append(text);
create_p.style.padding="10mm";
create_p.style.textAlign = "center"
document.body.appendChild(img);

document.body.appendChild(create_p);

