let accordianInfo = [1, 2, 3];

openedItem = 0
function whichItem(id) {
  if (this.openedItem == id) {
    document.getElementById(id).classList.remove('open')
  } else {
    for (let item of accordianInfo) {
      if (item == id) {
        this.openedItem = item
        document.getElementById(item).classList.add('open')
      } else {
        document.getElementById(item).classList.remove('open')
      }
    }
  }
}
console.log("from script file");
// document.getElementById("demo").innerHTML = "Paragraph changed.";
// let c = document.createElement('div');
// c.id='cont123';
// document.body.appendChild(c)
let a=[1,2,3,4,5];
let cont =document.createElement('div');
cont.setAttribute("id", 'ui');

for(let i of a){
  // let g = document.createElement('div');
  // g.setAttribute("id", i);
  let newEl = document.createElement('p');
  newEl.id = i;
  newEl.innerHTML = 'ki';
  cont.appendChild(newEl);
}
console.log(cont);

// document.body.innerHTML= cont;
let abc = document.getElementById('example1234');
console.log(abc)
// abc.appendChild(cont)
// document.body.appendChild(cont)/