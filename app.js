$(".classes").click(function () {

    $(this).toggleClass('ativo');

    $classes = $(this);
    $conteudo = $classes.next();

    $classes.css({
        'border-bottom': 'none'
    });

    $conteudo.slideToggle(10, function () {
        $classes.css({
            'border-bottom': function () {
                if ($conteudo.is(":visible")) {
                    return 'none';
                } else {
                    return '1px solid #91A3AD';
                }
            }
        });
    });

});