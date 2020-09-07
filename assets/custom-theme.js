// Accordion
$('.accordion').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('active').siblings().toggle();
});