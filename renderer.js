import * as act from "./interior.js"
import * as lb from "./library.js"
import * as data from './data.js'


let Interior = {
    //global
    name:"app",
    to: "body",
    act,
    lb,
    stgAt: act.insertTo,

    NAVBAR:lb.NAVBAR,
    SUB_NAVBAR:lb.SUB_NAVBAR,

    //Some times we do not need all info from global CTX so, we need to def what part of the global contex a component must use:
    mainCTX: {
        name:"main",
        to:"body",
        data: data.DATA_DICT,
        MAIN: lb.MAIN,
        IMG_Column_Temp: lb.IMG_Column_Temp,
        CARD: lb.IMG_Column_Card_Temp,
        IMG_MAIN_VIEW: lb.IMG_MAIN_VIEW,
        INFORMATION_HOLDER: lb.INFORMATION_HOLDER,
        IMG_MAIN_VIEW_INNER_VIEW: act.DEEP_COPY_ARRAY(lb.IMG_Column_Card_Temp),
        ArrrowButtonLeft: lb.ArrrowButtonLeft,
        ArrrowButtonRight: lb.ArrrowButtonRight,
        copy: act.DEEP_COPY_ARRAY,
        stgAt: act.insertTo
    },


    start(){

        // We use arrow function when we need our component to use the global CTX
        // We use function expression when we need our component to use particilura part of the global CTX.

        (   //Application component:
            this.app = () => {
              
                (   //Header component:
                    this.header = () => {
                        this.stgAt(this.to, this.NAVBAR);
                    }
                )();

                (   //subNav component:
                    this.subNav = () => {
                        this.stgAt(this.to, this.SUB_NAVBAR);
                    }
                )();

                (   //Main component:
                    this.main = function(){
                        
                        //first we must stage Parent, then its children:
                        this.stgAt(this.to, this.MAIN);

                        (   //IMG_Column_Temp:
                            this.imgColumnTemp = () => {
                                console.log(this);
                                for(let TV of this.data.TVS){
                                    let newCARD = this.copy(this.CARD)
                                    newCARD[0].src = TV.imgUrl
                                    newCARD[0].className = `img-${TV.serialNumber}`
                                    this.IMG_Column_Temp[0].textContent.push(newCARD[0])
                                }
        
                                this.stgAt(this.name, this.IMG_Column_Temp)
                            }
                        )();
                       
                        (   //IMG_MAIN_VIEW:
                            this.imgMainView = () => {

                                this.IMG_MAIN_VIEW_INNER_VIEW[0].className = `image-main-view-inner-view-${this.data.TVS[0].serialNumber}`
                                this.IMG_MAIN_VIEW_INNER_VIEW[0].style.width = "650px"
                                this.IMG_MAIN_VIEW_INNER_VIEW[0].style.height = "550px"
                                this.IMG_MAIN_VIEW_INNER_VIEW[0].src = this.data.TVS[0].imgUrl
                                this.IMG_MAIN_VIEW[0].textContent.push(this.ArrrowButtonLeft[0])
                                this.IMG_MAIN_VIEW[0].textContent.push(this.IMG_MAIN_VIEW_INNER_VIEW[0])
                                this.IMG_MAIN_VIEW[0].textContent.push(this.ArrrowButtonRight[0])
                                
                                this.stgAt(this.name, this.IMG_MAIN_VIEW)
                            }
                        )();

                        (   //INFORMATION_HOLDER:
                            this.infoHolder = ()=>{
                                this.stgAt(this.name, this.INFORMATION_HOLDER)
                            }
                        )();

                    }

                ).call(this.mainCTX);

            }

        )();

    },
}

Interior.start()




