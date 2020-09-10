//Accordion
$('.accordion').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('active').siblings().toggle();
});

//Header Bars
window.onscroll = function() {topBar()};

function topBar() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $("#header-bars").remove();
        $('.site-header').addClass('header-onroll');
    }
}

//Collection List
$('.collection-active').on('click', function(event) {
    event.preventDefault();
    console.log(this);

    console.log($(this).attr('id'));

    var id = $(this).attr('id');

    $("#list-product-custom").append("{% include 'collection-list-item', collection: collections[" + id + "]%}");
});
 