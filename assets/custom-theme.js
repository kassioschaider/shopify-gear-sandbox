// Accordion
$('.accordion').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('active').siblings().toggle();
});

window.onscroll = function() {topBar()};

function topBar() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $("#header-bars").remove();
        $('.site-header').addClass('header-onroll');
    }
}