import { DATA_DICT } from "./data.js";

// EVENTS:

export function OnMouseover (e) {
    if (e.target.tagName === "IMG" && !e.target.className.startsWith('image-main')){
        e.target.style.backgroundColor = '#e5e8ed';
    }
   
}
export function OnMouseout (e) {
    if (e.target.tagName === "IMG" && !e.target.className.startsWith('image-main')){
        e.target.style.backgroundColor = '';
    }
   
}

export function OnClick(e){

    let tvInformation = ''
    const SERIAL_DATA =  e.target.className.split('-')
    const LAST_INDEX = SERIAL_DATA.length - 1
    let IMG_MAIN_VIEW_INNER_VIEW = document.querySelector(`.image-main-view > img`)
    
    
    if (e.target.className.startsWith('img')){
        const INDEX_TO_FIND = SERIAL_DATA[LAST_INDEX]
        let TV = DATA_DICT.TVS.filter(tv => tv.serialNumber == INDEX_TO_FIND)[0]
        IMG_MAIN_VIEW_INNER_VIEW.src = TV.imgUrl
        IMG_MAIN_VIEW_INNER_VIEW.className = `image-main-view-${TV.serialNumber}`
        tvInformation = TV
    }
    else if (e.target.className.startsWith('arrrow-button')){
        const direction = SERIAL_DATA[LAST_INDEX]
        const SERIAL_INNER_VIEW_DATA = IMG_MAIN_VIEW_INNER_VIEW.className.split('-')
        const SERIAL_INNER_VIEW = SERIAL_INNER_VIEW_DATA[SERIAL_INNER_VIEW_DATA.length - 1]
        
        let NEXT_TV_IN_LINE = DATA_DICT.TVS.map((tv, i, arr) => {
            
                if (tv.serialNumber == SERIAL_INNER_VIEW){
                    let index = (direction == 'left')? 
                        (i-1>-1)?i-1:DATA_DICT.TVS.length - 1 : (i+1<DATA_DICT.TVS.length)?i+1:0

                    let ex = arr[index]
                    return ex
                }
            }
        ).filter(tv => tv)[0]
        
        IMG_MAIN_VIEW_INNER_VIEW.src = NEXT_TV_IN_LINE.imgUrl
        IMG_MAIN_VIEW_INNER_VIEW.className = `image-main-view-${NEXT_TV_IN_LINE.serialNumber}`
        tvInformation = NEXT_TV_IN_LINE
    }

    if (tvInformation){
        let informationHolderPrice = document.querySelector(`.information-holder-price`)
        informationHolderPrice.textContent = tvInformation.price

        let informationHolderInstock = document.querySelector(`.information-holder-instock`)
        informationHolderInstock.textContent = tvInformation.inStock ?'В наличност': 'Изчерпан'
        informationHolderInstock.style.color = tvInformation.inStock ? 'green': 'red'
        
        let informationHolderSerialNumber = document.querySelector(`.information-holder-serial-number`)
        informationHolderSerialNumber.textContent = tvInformation.serialNumber
        
        let informationHolderSubHeader = document.querySelector(`.information-holder-sub-header`)
        informationHolderSubHeader.textContent = tvInformation.subHeader

        let informationHolderHeader = document.querySelector(`.information-holder-header`)
        informationHolderHeader.textContent = tvInformation.header
    }

}
//------------------------------------------------------------