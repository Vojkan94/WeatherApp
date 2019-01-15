import $ from 'jquery';

export const refreshIconAnimation = () => {

    let rotate = $('.icon-refresh').attr('style');
    console.log(rotate)
    console.log("ej")
    if(rotate !== undefined){
        rotate = rotate.split('(');
        console.log(rotate);
        rotate = rotate[1].split(")"); //to dot slice
        rotate = rotate[0].split('deg');
        rotate = rotate[0]*1 + 360;
        $('.icon-refresh').css({
            'transform': `rotate(${rotate}deg)`
        })
    }else{
        $('.icon-refresh').css({
            'transform': 'rotate(360deg)'
        })
    }

}
