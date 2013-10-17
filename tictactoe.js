$(document).ready(function(){
    var crosses = 0,
        circles = 0;
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
        var $this = $(this);
        if ($this.hasClass('cross') || $this.hasClass('circle'))
            return;
        if ($turn.text() == 'Cross') {
            $this.addClass('cross');
            $turn.text('Circle');
            crosses++;
        } else if ($turn.text() == 'Circle') {
            $this.addClass('circle');
            $turn.text('Cross');
            circles++;
        }
        if (crosses == 5)
            $turn.text('');
    });
});
