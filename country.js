/* $(document).ready(function() {
            alert('Подключена последняя версия jQuery через Google хостинг');
        });
*/

//скрываем scroll, когда сайт в самом вверху
$(document).ready(function() {
  $('#pageUp').click(function() {
    $('body, html').animate({scrollTop: 627},1000);
  });
});

//делаем всплывающие подсказки
$(document).ready(function() {
$('div.thumbnail-item').mouseenter(function(e) {
    x = e.pageX - $(this).offset().left;
    y = e.pageY - $(this).offset().top;
  $(this).css('z-index', '15')
  .children("div.tooltip")
  .css({'top': y + 10, 'left': x + 20, 'display': 'block'});
}).mousemove(function(e) {
    x = e.pageX - $(this).offset().left;
    y = e.pageY - $(this).offset().top;
  $(this).children("div.tooltip").css({'top': y + 10, 'left': x + 20});  
}).mouseleave(function() {
  $(this).css('z-index', '1')
  .children("div.tooltip")
  .animate({"opacity": "hide"}, "fast");
});
});