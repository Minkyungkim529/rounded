$(function(){
	AOS.init();	
});

$(function(){
    //.board li a를 누르면
    $('.character_tab li a').click(function(){
    //눌러진 a의 부모요소에 'on'클래스를 추가하고,
    //부모의 형제요소들은 .on을 지운다.
        $(this).parent().addClass('cbtn_on').siblings().removeClass('cbtn_on');
    });
});