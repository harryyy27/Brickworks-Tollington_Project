const textAlt = (list)=> {
    for(let i=0;i<list.length; i++){
        if(i%2===0){
            list[i].classList.add("grey");
        }
        else {
            list[i].classList.add("shadow");
        }
    }
}

export { textAlt }