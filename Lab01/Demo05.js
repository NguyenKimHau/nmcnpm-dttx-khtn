// ECMA Script  = ES7
'use strict'

console.clear();

let a = "Hello World!!!!";
console.log(a);

//Convert number to string
let b = 123;
console.log(b);

let c = '' + 123;
console.log(c);

let d = b.toString();
console.log(d);


//Convert string to number
let e = '1';
let f = '2.5';
let g = parseInt(e) + parseFloat(f);
console.log(g);


//String lines
let h = 'I\'m a student.\nMy university is HCMUS';
console.log(h);

let i = "She is Marry. \
She is student"
console.log(i);


//?String Template
let j = 1000;
let k = "Peter";

let l = `${k} has ${j}$`;
console.log(l);

let m = "    She is Marry. She is Student    ";
console.log(m);
let n = m.trim();
console.log(n);
console.log(n.toUpperCase());
console.log(n.toLowerCase());

//Value character at position
console.log(n[2]);

//Length
console.log("Length:  ", n.length);

//Add string
console.log(m.concat(" -> ", n));
console.log(n + "  ->  " + m);

console.log(n.indexOf('Marry'));
console.log(n.lastIndexOf('She'));

//Sub string
console.log(n.substring(4, 12)); //Start to end
console.log(n.substr(4, 10)); //Start and number character

//Replace
console.log(n.replace('Marry', 'Rose'));

//Split string
console.log(n);
let o = n.split(' ');
console.log(o);

let p = n.slice(4, 6);
console.log(p);

let t = n.split(' ');
console.log(t);
t.splice(2, 2, "Rose");
console.log(t);

let u = t.join(' ');
console.log(u);

let v = u.split('');
console.log(v);
v.reverse();
console.log(v);
u = v.join('');
console.log(u);
