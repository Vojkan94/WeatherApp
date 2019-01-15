import $ from 'jquery';

export const refreshIconAnimation = () => {
    let rotate = $('.icon-refresh').attr('style');
    if(rotate !== undefined){
        rotate = rotate.split('(');
        rotate = rotate[1].slice(0,-5);
        rotate = rotate*1 + 360;
        $('.icon-refresh').css({
            'transform': `rotate(${rotate}deg)`
        })
    }else{
        $('.icon-refresh').css({
            'transform': 'rotate(360deg)'
        })
    }
}
