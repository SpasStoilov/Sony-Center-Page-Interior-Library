import * as Interior from "./interior.js"
import * as Library from "./library.js"
import {DATA_DICT} from './data.js'

// TEMPLATE-MASTER-----------------------------------------------:

let NAVBAR = Library.NAVBAR
let SUB_NAVBAR = Library.SUB_NAVBAR
let MAIN = Library.MAIN
let IMG_Column_Temp = Library.IMG_Column_Temp
let IMG_Column_Card_Temp = Library.IMG_Column_Card_Temp
let IMG_MAIN_VIEW = Library.IMG_MAIN_VIEW
let ArrrowButtonLeft = Library.ArrrowButtonLeft
let ArrrowButtonRight = Library.ArrrowButtonRight
let INFORMATION_HOLDER = Library.INFORMATION_HOLDER

//-------------------------------------------------------------

//RENDERER-------------------------------------------------------:

Interior.insertTo('body', NAVBAR)
Interior.insertTo('body', SUB_NAVBAR)
Interior.insertTo('body', MAIN)

if (DATA_DICT.TVS.length != 0){
  
    Interior.insertTo('main', IMG_Column_Temp)

    for(let TV of DATA_DICT.TVS){
        IMG_Column_Card_Temp[0].src = TV.imgUrl
        IMG_Column_Card_Temp[0].className = `img-${TV.serialNumber}`
        Interior.insertTo('.img-column', IMG_Column_Card_Temp)
    }

    let IMG_MAIN_VIEW_INNER_VIEW = IMG_Column_Card_Temp
    IMG_MAIN_VIEW_INNER_VIEW[0].className = `image-main-view-inner-view-${DATA_DICT.TVS[0].serialNumber}`
    IMG_MAIN_VIEW_INNER_VIEW[0].style.width = "650px"
    IMG_MAIN_VIEW_INNER_VIEW[0].style.height = "550px"
    IMG_MAIN_VIEW_INNER_VIEW[0].src = DATA_DICT.TVS[0].imgUrl
    IMG_MAIN_VIEW[0].textContent.push(ArrrowButtonLeft[0])
    IMG_MAIN_VIEW[0].textContent.push(IMG_MAIN_VIEW_INNER_VIEW[0])
    IMG_MAIN_VIEW[0].textContent.push(ArrrowButtonRight[0])

    Interior.insertTo('main', IMG_MAIN_VIEW)
    Interior.insertTo('main', INFORMATION_HOLDER)

}
else {
    Interior.insertTo('main', 'NO IFORMATION TO BE DiSPLAY!')
}
