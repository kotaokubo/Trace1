;(function($) {

  $.fn.textfadeIn = function() {
          this.ready(function(){
              var DELAY_SPEED = 30;//文字が流れる速さ
              var FADE_SPEED = 200;//文字のフェードインの速さ
              var str = [];
              $('.fadein > span').each(function(i){//セレクタで指定した要素すべて
                  $(this).css('opacity','1');//行を不透明にする
                  str[i] = $(this).text();//元のテキストをコピーし
                  $(this).text('');//テキストを消す
                  var no = i;
                  var self = this;
                  var interval = setInterval(function(){
                      if(no == 0 || $('.fadein > span').eq(no - 1).children('span:last').css('opacity') == 1){//最初の要素または前の要素が全文字表示された時
                          clearInterval(interval);
                          for (var j = 0; j < str[no].length; j++) {
                              $(self).append('<span>'+str[no].substr(j, 1)+'</span>');
                              $(self).children('span:last').delay(DELAY_SPEED * j).animate({opacity:'1'}, FADE_SPEED);
                            }
                          }
                        }, 50);
                      });
                    });
                    return this;
  };

})(jQuery);
