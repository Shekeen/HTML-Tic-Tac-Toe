$(document).ready(function(){
    var $cell11 = $('#cell11'),
        $cell12 = $('#cell12'),
        $cell13 = $('#cell13'),
        $cell21 = $('#cell21'),
        $cell22 = $('#cell22'),
        $cell23 = $('#cell23'),
        $cell31 = $('#cell31'),
        $cell32 = $('#cell32'),
        $cell33 = $('#cell33');
    var $turn = $('span#turn');

    $('span.cell').click(function() {
        if ($(this).hasClass('cross') || $(this).hasClass('circle'))
            return;
        if ($turn.text() == 'Cross') {
            $(this).addClass('cross');
            $turn.text('Circle');
        } else if ($turn.text() == 'Circle') {
            $(this).addClass('circle');
            $turn.text('Cross');
        }
    });
});
