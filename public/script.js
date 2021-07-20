
$(document).ready(()=>{
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        console.log('hello');
        $('.topbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

})