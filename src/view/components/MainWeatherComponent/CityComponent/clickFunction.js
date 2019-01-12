import $ from 'jquery';

export function click() {
    $('.dropdown-el').click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).toggleClass('expanded');
        $('#'+$(event.target).attr('for')).prop('checked',true);
        $('.weather-date').addClass('weather-date--opacity');
      });
      $(document).click(function() {
        $('.dropdown-el').removeClass('expanded');
        $('.weather-date').removeClass('weather-date--opacity');
    });
}

