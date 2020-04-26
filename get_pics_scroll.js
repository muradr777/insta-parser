let arr1 = []; // Array DOM Elements
let arr2 = []; // Array Urls
let arr3 = []; // Ready Rows 


let j = 0, lim = 16, krows = 0;

scrollImgRow(j, lim, krows); // ( j-counter, limit)

function scrollImgRow(j, lim, irows, start = 0) {
    arr1 = [];

    arr3[irows] = false;

    let imgRow = document.querySelectorAll('.weEfm')[j];
    
    imgRow.scrollIntoView({behavior: "smooth"});
    
    if(irows < start)
        scrollImgRow(j, lim, ++irows);

    imgRow.querySelectorAll('a').forEach(val => arr1.push(val));
    
    console.log('Row #' + irows);

    setTimeout(() => {
        getPic(arr1, 0, irows);

        --lim;

        if(j < 9)
            ++j;           

        if(document.querySelectorAll('.weEfm')[j] == null || lim == 0) {
            j=undefined;
            arr1 = [];

            console.log('Ready!'); 
            return false;
        }

        let i_timer = null;
        let timer = setInterval(() => {
            if(readyToGo(irows)) {
                i_timer = null;
                clearInterval(timer);

                console.log('Scroooolll...');
                scrollImgRow(j, lim, ++irows);

            } else if(i_timer > 5) {
                clearInterval(timer);
                console.log('Check your internet connection...');
                return ;
            }

            ++i_timer;

        }, 1000);

        

    }, 1000);

    return ;
}




function getPic(arr1, i, irows) {
    let res = '';

    arr1[i].click();
    

    setTimeout(() => {
        document.querySelectorAll("article img")
        .forEach((el, idx, array) => {
            getImgSrc(el);
        });

        if(document.querySelector("[role='dialog']") != null && res.length != null) {
            document.querySelector("[role='dialog']").click();
                    
            if(i < arr1.length-1)
                getPic(arr1, ++i, irows);
            else {
                console.log(res='Images added.');
                arr3[irows] = true; // Set row as readyToGo
            }
        }

         

        return true;

    }, 1500);
}

function getImgSrc(el) {
    if(el.getAttribute('src') != null && el.height > 300) {
        arr2.push(el.getAttribute('src'));     
    }

    return ;
}


function readyToGo(irow) {
    return arr3[irow];
}
