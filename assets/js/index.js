const form = document.getElementById('form');
const modal = document.querySelector('.modal');
const contentBlock = document.querySelector(".content");
const alertNode = document.querySelector('.alert_block');
const preloader = document.getElementById('preloader');
const closeModalButton = document.querySelector('.modal-footer button');

const inputPhone = $('#phoneNumber');
const inputEmail = $('#email');
const inputFullName = $("#fullName");

inputPhone.mask("+375(99)-999 99 99");
inputPhone.click(function() {
    let value = $(this).val();

    if(value[5] === '_') {
        $(this).setCursorPosition(5);
    }
    else {
        $(this).setCursorPosition(20);
    }
})


closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none';
    contentBlock.style.display = 'flex';

    const orderInfo = document.querySelectorAll('.modal-body p');
    for(let i = 0; i < orderInfo.length; i++) {
        orderInfo[i].remove();
    }
});


form.addEventListener("submit", (event) => {

let errorsAlert = document.querySelector('.alert-danger');

if(errorsAlert) {
    errorsAlert.remove();
    alertNode.style.display = 'none';
}



event.preventDefault();

let countErrors = 0;
let errorsDescription = [];


let valueInputNumber = inputPhone.val().split(' ').join('');
let valueInputEmail = inputEmail.val();
let valueInputFullName = inputFullName.val();

let regEmail = /@/;
let regInputNumber = /^\+375\([0-9]{2}\)-[0-9]{7}$/;


if(!regInputNumber.test(valueInputNumber)) {
    countErrors++;
    errorsDescription.push("phone");
}

if(!regEmail.test(valueInputEmail)) {
    countErrors++;
    errorsDescription.push("email");
}

if(valueInputFullName.length === 0) {
    countErrors++;
    errorsDescription.push("fullName");
}


if(countErrors > 0) {

    const errorNode = document.createElement("div");
    errorNode.classList.add('alert');
    errorNode.classList.add('alert-danger');

    errorsDescription.forEach((value) => {

        const descriptionError = document.createElement('p');

        if(value === 'email') {
            descriptionError.innerHTML = "Поле Email не заполнено или не соответствует формату";
        }

        if(value === 'phone') {
            descriptionError.innerHTML = "Поле Phone не заполнено или не соответствует формату";
        }

        if(value === 'fullName') {
            descriptionError.innerHTML = "Поле ФИО не заполнено";
        }


        errorNode.append(descriptionError);

    });


    alertNode.append(errorNode);
    alertNode.style.display = 'block';

    return;
}



preloader.style.display = 'flex';



fetch("../../src/bookingHandler.php", {
    method: 'post',
    body: new FormData(form),
})
    .then(response => response.json())
    .then(result => {
        preloader.style.display = "none";
        contentBlock.style.display = "none";
        const modalBody = document.querySelector(".modal-body");
        insertOrderInfo(modalBody, result);
        modal.style.display = "block";

        inputFullName.val('');
        inputEmail.val('');
        inputPhone.val('');
        $("select option:eq(0)").prop('selected', true);
    })

});







function insertOrderInfo(modalNode, orderInfo) {

    for(key in orderInfo) {
        const infoNode = document.createElement('p');

        switch(key) {
            case 'fullName':
                infoNode.innerHTML = `ФИО: ${orderInfo[key]}`;
                break;
            case 'email':
                infoNode.innerHTML = `Почта: ${orderInfo[key]}`;
                break;
            case 'phone':
                infoNode.innerHTML = `Номер: ${orderInfo[key]}`;
                break;
            case 'typeRoom':
                infoNode.innerHTML = `Тип номера: ${orderInfo[key]}`;
                break;
            case 'price':
                infoNode.innerHTML = `Стоиомость заказа: ${orderInfo[key]}`;
                break;               
        }

        modalNode.append(infoNode);
    }
}