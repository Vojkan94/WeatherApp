import $ from 'jquery';

export function selectCity() {
    $('.dropdown').click(function () {
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(400);
    });
    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
    });    
}

