// Run this script in browser
// For download urls array as .txt file

let a = document.createElement('a');
let file = new Blob([ arr2.toString() ], { type: 'text/plain' });
a.href = URL.createObjectURL(file);
a.download = 'urls_input';
a.click();

