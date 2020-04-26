// Run this script in browser at your profile "Saved" tab, just replace **username**
// https://www.instagram.com/**yourusername**/saved/

let arr1 = []; // Array DOM Elements
let arr2 = []; // Array Urls

document.querySelectorAll('article a')
.forEach(val => arr1.push(val));

getPic(arr1, 0);

function getPic(arr1, i) {
    let src = '';
    setTimeout(() => {
        arr1[i].click();
    }, 200);

    setTimeout(() => {
        document.querySelectorAll("article [role='button'] img")
           .forEach(el =>  {
                if(el != null && el.height > 300) {
                    src = el.getAttribute('src');
                    arr2.push(src);
                }
        });
        if(src != undefined) {
            try {
                document.querySelector("[role='dialog']").click();
                if(i < arr1.length-1)
                    getPic(arr1, ++i);

            } catch (err) {
                console.log('it is ok! loading...');
            }
        }

    }, 3000);

    return false;
}
