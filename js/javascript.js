
$(function(){

/* ---------------라이트박스--------------- */

  const $story = $('.story');
  const $shadow = $('.shadow')
  const $lightbox = $('.lightbox');
  const $clse = $('.clse')

  $story.on('click', function (evt) {
      evt.preventDefault();

      $lightbox.children('img').attr({
          src: $(this).attr('href'),
          alt: $(this).children('img').attr('alt')
      });

      $shadow.show();


  });

  $clse.on('click', function (evt) {
      evt.preventDefault();
      // $lightbox.hide();
      $shadow.hide();
  });

  $shadow.on('click', function () {
      $(this).hide();
  });

  $lightbox.on('click', function (evt) {
      evt.stopPropagation();
  });

 
/* ---------------메뉴클릭,스크롤이벤트--------------- */

const arrTopVal=[];

for(let i=0;i<4;i++){
  arrTopVal[i] = $('article').eq(i).offset().top;
}

const scrollFn = function(idx){
  $('html,body').animate({scrollTop:arrTopVal[idx]-100},'easeInOutCubic')
};

const $mnu = $('header > nav > .gnb > li > a')


//메뉴에 대한 click 이벤트 구문
 $mnu.on('click',function(evt){
    evt.preventDefault();
    const hereIdx = $mnu.index(this);
    scrollFn(hereIdx);
  });

//window에 대한 스크롤이벤트 구문
$(window).on('scroll',function(){
  const scrollTop = $(window).scrollTop();
  for(let i=0;i<5;i++){
    if(scrollTop>=arrTopVal[i]-200){
      $mnu.eq(i).parent().addClass('on').siblings().removeClass('on');
    }else if(scrollTop<arrTopVal[0]-200){
      $mnu.parent().removeClass('on');
    }
  }
})

//.loho에 대한 click 이벤트 구문
$('.logo>a').on('click',function(evt){
  evt.preventDefault();
  $('html,body').stop().animate({scrollTop:0});
})

$(window).on('load',function(){
  $('.logo>a').trigger('click')
});


});