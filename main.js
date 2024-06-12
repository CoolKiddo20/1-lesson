// let monthNumber = prompt("Iltimos, 1 dan 12 gacha bo'lgan oy raqamini kiriting:");

// let h1 = document.createElement('h1');

// switch (monthNumber) {
//   case '1':
//     h1.textContent = "October";
//         document.body.appendChild(h1)
//         break;
//   case '2':
//     h1.textContent = "October";
//         document.body.appendChild(h1)
//         break;
//   case '3':
//     h1.textContent = "October";
//         document.body.appendChild(h1)
//     break;
//   case '4':
//     h1.textContent = "October";
//         document.body.appendChild(h1)
//         break;
//   case '5':
//     h1.textContent = "October";
//         document.body.appendChild(h1)
//         break;
//   case '6':
//     h1.textContent = "October";
//         document.body.appendChild(h1)
//         break;
//   case '7':
//     h1.textContent = "October";
//         document.body.appendChild(h1)
//         break;
//   case '8':
//     h1.textContent = "October";
//         document.body.appendChild(h1)
//         break;
//   case '9':
//     h1.textContent = "October";
//         document.body.appendChild(h1)
//         break;
//   case '10':
//     h1.textContent = "October";
//         document.body.appendChild(h1)
//         break;
//   case '11':
//     h1.textContent = "October";
//         document.body.appendChild(h1)
//         break;
//   case '12':
//     h1.textContent = "October";
//         document.body.appendChild(h1)
//         break;
//   default:
//     monthName = 'Nototogri raqam kiritildi';
//     break;
// }


// alert(monthName);



let username = +prompt("Raqam kiriting")

let newText = document.createElement("p")
switch(username){
    case 1:
        newText.textContent = "Dushanba"
        document.body.appendChild(newText)
        break;
    case 2:
        newText.textContent = "Seshanba"
        document.body.appendChild(newText)
        break;
    case 3:
        newText.textContent = "Chorshanba"
        document.body.appendChild(newText)
        break;
    case 4:
        newText.textContent = "Payshanba"
        document.body.appendChild(newText)
        break;
    case 5:
    newText.textContent = "Juma"
        document.body.appendChild(newText)
        break;
    case 6:
        newText.textContent = "Shanba"
        document.body.appendChild(newText)
        break; 
    case 7:
        newText.textContent = "Yakshanba"
        document.body.appendChild(newText)
        break;
        default: 
        newText.textContent = "Notogri raqam"
        document.body.appendChild(newText)
       }