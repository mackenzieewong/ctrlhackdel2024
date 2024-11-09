import $ from 'jquery';


$("p, :header, title").text(function(_, text) {
    return text.replace(/./g, "▮")
});

$("p, :header").wrapInner("<mark></mark>");