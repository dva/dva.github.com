$(function(){

    var cMinItems = 1,
        cMaxItems = 100,
        cItemMinColor = 0,
        cItemMaxColor = 255,
        cItemWidth = 100,
        cItemHeight = 100,
        cMinAlpha = 1,
        cMaxAlpha = 9,
        windowHeight = $(document).height(),
        windowWidth = $(document).width();

    for(var i = cMinItems; i < $.randomBetween(cMinItems, cMaxItems); i++) {
        $('<canvas id="canvas-' + i + '" width="' + cItemWidth + '" height="' + cItemHeight + '"></canvas>')
            .appendTo('body')
            .css({
                'position': 'absolute',
                'top': $.random(windowHeight) - (cItemHeight),
                'left': $.random(windowWidth) - (cItemWidth)
            });
        canvasDraw('canvas-' + i, 0, 0, $.random(cItemWidth),$.random(cItemHeight),
            $.randomBetween(cItemMinColor, cItemMaxColor), $.random(cItemMaxColor),
            $.random(cItemMaxColor), '0.' + $.randomBetween(cMinAlpha, cMaxAlpha));
    }

});

function canvasDraw(item, x, y, width, height, colorOne, colorTwo, colorThree, cAlpha) {

    var canvas = document.getElementById(item),
        context = canvas.getContext("2d");

    context.fillStyle = "rgba(" + colorOne + "," + colorTwo + "," + colorThree + "," + cAlpha + ")";
    context.fillRect(x, y, width, height);

}

$.extend({

    random: function(X) {
        return Math.floor(X * (Math.random() % 1));
    },

    randomBetween: function(MinV, MaxV) {
        return MinV + jQuery.random(MaxV - MinV + 1);
    }

});

/**
 * Shortcut for console.log()
 * @param value
 */
function cl(value) {
    console.log(value);
}
