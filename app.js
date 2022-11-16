function makeHover() {
    let header = document.getElementById(`header`);
    header.insertAdjacentHTML("afterend", `<h3>secret hover</h3>`); 
}

function removeH3() {
    let h3 = document.querySelector(`#header + h3`);//Found this web3 schools css selectors
    h3.remove();
    //h3.remove();
}

function makePurple(event){
    if(event.code == `KeyP`){
        document.body.style.backgroundColor = `purple`
    } else{
        console.log(event.key);
    }
}

function makeBisque(event){
    if(event.code == `KeyP`){
        document.body.style.backgroundColor = `bisque`
    } else{
        console.log(event.key);
    }
}

function changePicture(event){
    console.log(`Cupcake is ${isCupcake}`);
    if (isCupcake == true){
        isCupcake = false;
        event.target.setAttribute(`src`, cupcakeLink);
    } else{
        isCupcake = true;
        event.target.setAttribute(`src`, muffinLink);
    }
}

//Nice shortcut to save links and urls
const cupcakeLink = `https://imgs.search.brave.com/SCX5XFQJQ9IQRhZcNMcw-_dOgNL13qp7qdiPzzhBAPE/rs:fit:1200:1114:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8ta1BBVm01b2ha/V00vVDcwT2h1SzZj/QkkvQUFBQUFBQUFC/d3MvTFNPMjNySFRz/VmcvczE2MDAvSU1H/XzI0NzYuSlBH`;
const muffinLink = `https://imgs.search.brave.com/PvHzFwvHyWiw_X2coll0JB7u4Gt5_P1BEqjxhoULTFU/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/MlhHZ2RJdElHMVdK/X3hxSEVJWmV3SGFF/NyZwaWQ9QXBp`;

let heading = document.getElementById(`header`);
heading.addEventListener(`mouseover`, makeHover);
heading.addEventListener(`mouseleave`, removeH3);
document.body.addEventListener(`keydown`, makePurple);
document.body.addEventListener(`keyup`, makeBisque);

let isCupcake = true;
document.getElementById(`pastry`),addEventListener(`click`, changePicture);
