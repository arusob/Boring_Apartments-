let number = 9999

function WhichNumber (number) {
    if (number > 0 && number < 10) {
        sub1 = 1;
    } else
    if (number >= 10 && number < 100) {
        sub1 = 3;
    } else
    if (number >= 100 && number <= 999) {
        sub1 = 6;
    } else
    if (number >= 1000 && number <= 9999) {
        sub1 = 10;
    };
}

function WhatFirstDigit (number){
    let text = number.toString();
    if (text.charAt(0) == '1') {
        sub2 = 0;
    } else
    if (text.charAt(0) == '2'){
       sub2 = 10;
    } else
    if (text.charAt(0) == '3'){
        sub2 = 20;
    } else 
    if (text.charAt(0) == '4'){
        sub2 = 30;
    } else 
    if (text.charAt(0) == '5'){
        sub2 = 40;
    } else
    if (text.charAt(0) == '6'){
        sub2 = 50;
    } else
    if (text.charAt(0) == '7'){
        sub2 = 60;
    } else
    if (text.charAt(0) == '8'){
        sub2 = 70;
    } else
    if (text.charAt(0) == '9'){
        sub2 = 80;
    }
}

WhichNumber(number)
WhatFirstDigit(number)

console.log(sub1 + sub2)



// budynek składa się z 10 000 apartamentów 
// numeracja nudna 1, 11, 111, 1111, 
// rozwiązanie  zacznij od 1 // doklejaj 1 =< 10 000
// if // for // while 

// 1        // 1 klik       // w sumie 1 klik
// 11       // 2 kliki      // w sumie 3 kliki
// 111      // 3 kliki      // w sumie 6 klików
// 1111     // 4 kliki      // w sumie 10 klików 

// 1111 +"1" !<= 10 000 => 1 pętla "+1"

// jeśli first_character = 2 // +10
// 2        // 10 + 1               // w sumie 11
// 22       // 10 + 1 + 2           // w sumie 13
// 222      // 10 + 1 + 2 + 3       // w sumie 16
// 2222     // 10 + 1 + 2 + 3 + 4   // w sumie 20

// 2 222 +"2" !<= 10 000 => 1 pętla "+1"

// jeśli first_character = 3 // +20
// 3 
// 33
// 333 
// 3333                    // 30 klików

