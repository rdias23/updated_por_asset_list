$(function() {
  $('li#li_features').not('.active').click(function() {

    $('.active').removeClass('active');
    $(this).addClass('active');

    $('div#ubi_features').show();
    $('div#ubi_projects').hide();
    $('div#ubi_responsive_design').hide();

  });

  $('li#li_projects').click(function() {

    $('.active').removeClass('active');
    $(this).addClass('active');

    $('div#ubi_features').hide();
    $('div#ubi_projects').show();
    $('div#ubi_responsive_design').hide();
  });

  $('li#li_responsive').not('.active').click(function() {

    $('.active').removeClass('active');
    $(this).addClass('active');

    $('div#ubi_features').hide();
    $('div#ubi_projects').hide();
    $('div#ubi_responsive_design').show();
  });

  $(".fancybox").fancybox();

  $(".fancybox").fancybox({
     titlePosition : 'over',
    onComplete : function() {
    $("#fancybox-title").hide();
     $("#fancybox-wrap").hover(function() {
       $("#fancybox-title").show();
      }, function() {
       $("#fancybox-title").hide();
     });
    }
   });

});

