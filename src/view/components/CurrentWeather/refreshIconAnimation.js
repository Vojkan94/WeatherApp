import $ from 'jquery';

export const refreshIconAnimation = () => {
    



    let rotate = $('.icon-refresh').attr('style');
    if(rotate != undefined){

        rotate =rotate.split('(');
        rotate = rotate[rotate.length-1].split(")");
        rotate = rotate[0].split('deg');
        rotate = rotate[0]*1 + 360;
        console.log(rotate)
        $('.icon-refresh').css({
            'transform': `rotate(${rotate}deg)`
        })
    }

    if($('.icon-refresh').css('transform') === "none"){
        console.log("nema")
            $('.icon-refresh').css({
                'transform': 'rotate(360deg)'
            })
    }
 
}
