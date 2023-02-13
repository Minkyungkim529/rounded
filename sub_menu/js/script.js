$(function(){
    $(".heart").click(function(){
        $(this).addClass('heart_hide').siblings().removeClass('heart_hide');
    });
});
//하트 찜하기 버튼

// $(function(){
//     $(".off").click(function(){
//         $(this).removeClass('off').addClass("on").siblings('.on').removeClass('on').addClass('off');
//     });
// });
// //hot, iced버튼 토글

$(function(){
    //.board li a를 누르면
    $('.coffee li .hi').click(function(){
    //눌러진 a의 부모요소에 'on'클래스를 추가하고,
    //부모의 형제요소들은 .on을 지운다.
        $(this).parent().addClass('mbtn_on').siblings().removeClass('mbtn_on');
    });
});