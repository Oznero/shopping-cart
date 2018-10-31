/*
For this assignment you will be building a simple shopping cart application. Upon visiting the website, the user will be presented with a list of items on the left as well as a shopping cart on the right. When the user selects an item from the left, it will be added to the shopping cart. If a user attempts to add an item that already exists in their shopping cart, a message will be displayed alerting them that that item has already been added. The user will also be able to filter the list of all items by category.

Additionally, the user will be able to click items to remove it from their shopping cart. After an item has been removed from their shopping cart, they are then able to add it again from the list of all items.
*/

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
        for(let i = 0; i < cartList.length; i++){
            if(item.text() === name){
                cartList.append(`<button type="button" id="cart-item" class="btn btn-outline-danger btn-sm btn-${index}">${name}</button>`);
            }else{
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