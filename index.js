function createButtonAdd(){
    const buttonAdd = document.createElement('button');
    buttonAdd.classList.add('button_add');
    buttonAdd.innerText='Add Button';
    document.body.append(buttonAdd);
}
createButtonAdd();
document.querySelector('.button_add').addEventListener('click',createClicker);

function createClicker(){
    const clicker = document.createElement('div');
    clicker.classList.add('clicker');

    const top = document.createElement('div');
    top.classList.add('top');
    clicker.append(top);

    const counter = document.createElement('span');
    counter.innerText='0';
    counter.classList.add('counter');
    top.append(counter);

    const bottom = document.createElement('div');
    bottom.classList.add('bottom');
    clicker.append(bottom);

    const buttonPlus  = document.createElement('button')
    buttonPlus.classList.add('butPlus')
    buttonPlus.classList.add('plus-color')
    buttonPlus.innerText="+";
    bottom.append(buttonPlus);

    const buttonRefresh  = document.createElement('button')
    buttonRefresh.classList.add('butRefresh')
    buttonRefresh.classList.add('refr-color')
    bottom.append(buttonRefresh);

    const refrIcon = document.createElement('img');
    refrIcon.src = './refresh.png';
    buttonRefresh.append(refrIcon);

    const buttonMinus  = document.createElement('button')
    buttonMinus.classList.add('butMinus')
    buttonMinus.classList.add('minus-color')
    buttonMinus.innerHTML='-'
    bottom.append(buttonMinus);
    document.body.append(clicker);

    // createClicker();
    function addPlusOne(){
        let counter = parseInt(document.querySelector('.counter').innerText);
        document.querySelector('.counter').innerText = counter+1;
    }

    function addMinusOne(){
        let counter = parseInt(document.querySelector('.counter').innerText);
        document.querySelector('.counter').innerText = counter-1;
    }

    function addRefresh(){
        document.querySelector('.counter').innerHTML ='0';
    }

    document.querySelector('.butPlus').addEventListener('click', addPlusOne);
    document.querySelector('.butMinus').addEventListener('click', addMinusOne);
    document.querySelector('.butRefresh').addEventListener('click', addRefresh);
   
}









