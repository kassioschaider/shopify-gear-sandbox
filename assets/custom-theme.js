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
    hiddenAllCollections();
    var id = $(this).attr('id');
    $('#products-' + id).css("display", "inline-flex");
}); 

function hiddenAllCollections() {
    var list = document.querySelectorAll('.list-collection');
    list.forEach( c => {
        c.style.display = "none";
    });
}