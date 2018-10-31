/*
For this assignment you will be building a simple shopping cart application. Upon visiting the website, the user will be presented with a list of items on the left as well as a shopping cart on the right. When the user selects an item from the left, it will be added to the shopping cart. If a user attempts to add an item that already exists in their shopping cart, a message will be displayed alerting them that that item has already been added. The user will also be able to filter the list of all items by category.

Additionally, the user will be able to click items to remove it from their shopping cart. After an item has been removed from their shopping cart, they are then able to add it again from the list of all items.
*/

$(document).ready(function () {

    //Render our buttons on the page so we can start using them
    const render = function () {
        for (let i = 0; i < buttonList.length; i++) {
            const shopBtn = $(`<button class="btn btn-outline-primary btn-sm ${buttonList[i].value} ${buttonList[i].category}" id="cart-button"></button>`).attr('btn-name', buttonList[i].name).text(buttonList[i].name);
            $('#buttons').append(shopBtn);
        }
    }
    render();


    //Clear items off the Car List box
    const clear = function () {
        $('#display').empty();
    }
    $('#clear').on('click', clear);


    //Add items to the Cart List box
    const addItems = function () {
        var randomNum = Math.floor(100000000 + Math.random() * 900000000);
        const item = $(`<button type="button" id="cart-item" class="btn btn-outline-danger btn-sm" value="${randomNum}"></button>`).text($(this).attr("btn-name"));
        $('#display').append(item);
    }
    $('#buttons').on('click', '#cart-button', addItems);

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
        $('#cart-button').show();
    }

    $('#all').on('click', showAll);

    //Event listener to remove items from shopping cart
    const removeCartItem = function () {
        $(this).remove();
    }

    $('#display').on('click', '#cart-item', removeCartItem);
});