;(function($) {

  $.fn.animefadeIn = function() {
                    anime.timeline({loop: 0})
                    .add({
                      targets: '.ml5 .line',
                      opacity: [0.5,0.00001],
                      scaleX: [0],
                      easing: "easeInOutExpo",
                      duration: 1100
                    }).add({
                      targets: '.ml5 .line',
                      duration: 1000,
                      easing: "easeOutExpo",
                      translateY: function(e, i, l) {
                        var offset = -0.625 + 0.625*2*i;
                        return offset + "em";
                      }
                    }).add({
                      targets: '.ml5 .ampersand',
                      opacity: [0,1],
                      scaleY: [0.5, 1],
                      easing: "easeOutExpo",
                      duration: 1000,
                      offset: '-=600'
                    }).add({
                      targets: '.ml5 .letters-left',
                      opacity: [0,1],
                      translateX: ["0.5em", 0],
                      easing: "easeOutExpo",
                      duration: 1000,
                      offset: '-=300'
                    }).add({
                      targets: '.ml5 .letters-right',
                      opacity: [0,1],
                      translateX: ["-0.5em", 0],
                      easing: "easeOutExpo",
                      duration: 1000,
                      offset: '-=600'
                    }).add({
                      targets: '.ml5',
                      opacity: 1,
                      duration: 1400,
                      easing: "easeOutExpo",
                      delay: 1000
                    });
                    return this;
  };

})(jQuery);
