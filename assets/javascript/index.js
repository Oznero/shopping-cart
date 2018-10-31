$(document).ready(function () {

    //Render our buttons on the page so we can start using them
    const render = function () {
        for (let i = 0; i < buttonList.length; i++) {
            $('#buttons').append(`<button class="btn btn-outline-primary btn-sm btn-${i} ${buttonList[i].value} cart-button">${buttonList[i].name}</button>`);
            $(`.btn-${i}`).on('click', function () {
                duplicateCheck(buttonList[i].name, i);
            });
        }
    }
    render();


    //Clear items off the Car List box
    const clear = function () {
        $('.cart-list').empty();
    }
    $('#clear').on('click', clear);


    //Add items to the Cart List box
    function duplicateCheck(name, index) {
        var cartList = $('.cart-list'), item = $(`.btn-${index}`);
        for (let i = 0; i < cartList.length; i++) {
            if (item.text() === name) {
                cartList.append(`<button type="button" id="cart-item" class="btn btn-outline-danger btn-sm btn-${index}">${name}</button>`);
            } else {
                alert('Item exists in cart');
            }
        }
    }

    //Event listener to show buttons based on filter
    const buttonVal = function () {
        const filterVal = parseInt($(this).attr('value'));
        for (let i = 0; i < buttonList.length; i++) {
            if (buttonList[i].value !== filterVal) {
                $(`.${buttonList[i].value}`).hide();
            } else {
                $(`.${buttonList[i].value}`).show();
            }
        }
    }
    $('.filter-btn').on('click', buttonVal);


    //Event listener to show All buttons again
    const showAll = function () {
        $('.cart-button').show();
    }

    $('#all').on('click', showAll);

    //Event listener to remove items from shopping cart
    const removeCartItem = function () {
        $(this).remove();
    }

    $('.cart-list').on('click', '#cart-item', removeCartItem);
});