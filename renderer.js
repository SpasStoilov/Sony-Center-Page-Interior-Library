import {insertTo, DEEP_COPY_ARRAY, DEEP_COPY_OBJECT} from "./interior.js"
import * as Library from "./library.js"
import {DATA_DICT} from './data.js'


// TEMPLATE-MASTER-----------------------------------------------:

let NAVBAR = Library.NAVBAR
let SUB_NAVBAR = Library.SUB_NAVBAR
let MAIN = Library.MAIN

let IMG_Column_Temp = Library.IMG_Column_Temp
//update:
for(let TV of DATA_DICT.TVS){
    let newCARD = DEEP_COPY_ARRAY(Library.IMG_Column_Card_Temp)
    newCARD[0].src = TV.imgUrl
    newCARD[0].className = `img-${TV.serialNumber}`
    IMG_Column_Temp[0].textContent.push(newCARD[0])
}

let IMG_MAIN_VIEW = Library.IMG_MAIN_VIEW
let ArrrowButtonLeft = Library.ArrrowButtonLeft
let ArrrowButtonRight = Library.ArrrowButtonRight
let INFORMATION_HOLDER = Library.INFORMATION_HOLDER

let IMG_MAIN_VIEW_INNER_VIEW = DEEP_COPY_ARRAY(Library.IMG_Column_Card_Temp) 
//update:
IMG_MAIN_VIEW_INNER_VIEW[0].className = `image-main-view-inner-view-${DATA_DICT.TVS[0].serialNumber}`
IMG_MAIN_VIEW_INNER_VIEW[0].style.width = "650px"
IMG_MAIN_VIEW_INNER_VIEW[0].style.height = "550px"
IMG_MAIN_VIEW_INNER_VIEW[0].src = DATA_DICT.TVS[0].imgUrl
IMG_MAIN_VIEW[0].textContent.push(ArrrowButtonLeft[0])
IMG_MAIN_VIEW[0].textContent.push(IMG_MAIN_VIEW_INNER_VIEW[0])
IMG_MAIN_VIEW[0].textContent.push(ArrrowButtonRight[0])


//-------------------------------------------------------------

//RENDERER-------------------------------------------------------:

insertTo('body', NAVBAR)
insertTo('body', SUB_NAVBAR)
insertTo('body', MAIN)
insertTo('main', IMG_Column_Temp)
insertTo('main', IMG_MAIN_VIEW)
insertTo('main', INFORMATION_HOLDER)



