$(document).ready(function () {

    //Render our buttons on the page so we can start using them
    const render = function () {
        for (let i = 0; i < buttonList.length; i++) {
            const shopBtn = $('<button>').addClass('proj-button proj proj-button-color').attr('data-proj', buttonList[i].name).text(buttonList[i].name);
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
    const addItems = function (){
        const item = $('<div>').addClass('proj task-color').text($(this).attr("data-proj"));
        $('#display').append(item);
    }
    $('#buttons').on('click', '.proj-button', addItems);
});