$(function(){
	$('#img-load').load();
	var lock = true;

	$('#menu-toggle').on('click',function() {
	    $('#menu-toggle').toggleClass('show-menu'); 
	    $('.wrap-header').toggleClass('close'); 
	});

	$('.top-btn .year').on('click',function() {
	    $('.top-year').toggleClass('show-menu'); 
	    $('.top-enter').removeClass('show-menu'); 
	    return false;
	});
	$('.top-reg .enter.realy').on('click',function() {
	    $('.top-enter').toggleClass('show-menu'); 
	    $('.top-year').removeClass('show-menu'); 
	    return false;
	});
	$('.marker a').on('click',function() {
	    $('.wrap-maps').toggleClass('show-maps'); 
	    return false;
	});
	$('.desc').on('click',function() {
	    $(this).children(".dropdown").show();
	    return false;
	});
	$('.dropdown .close').on('click',function() {
	    $(this).parent(".dropdown").hide();
	    return false;
	});
	$('.btn-edit, .back-edit').on('click',function() {
	    $('.inf-edit').toggleClass('show'); 
	    return false;
	});
	$('.res .each').on('click',function() {
	    $(this).children('.crowd').toggleClass('show'); 
	    return false;
	});
	$('#example2-click-prev,#example1-click-next').on('click',function() {
	    var Frst =  $('.slider-kamod.first div:first-child').hasClass('active');
	    var Lst =  $('.slider-kamod.second div[href]:last').hasClass('active');
	    if (Frst) {
	    	$('#example2-click-prev').hide();
	    } else {
	    	$('#example2-click-prev').show();
	    }
	    if (Lst) {
	    	$('#example1-click-next').hide();
	    } else {
	    	$('#example1-click-next').show();
	    }
	    return false;
	});

	$('a[href^="#"]').click(function(){
			        var el = $(this).attr('href');
			        $('body, html').animate({
			            scrollTop: $(el).offset().top}, 2000);
			        return false; 
			});

	// ajax показать еще номинация премия
	$('.more').on('click', function(event) {
				preventDefault();
				var link = $(this),
					list = $('#'+ link.attr('rel')),
					href = link.data('ajaxhref');

				if(!list.length || !href) {
					return;
				}

				var page = list.data('page'); // страница
				if(!page) {
					page = 1;
				}
				
				var nextPage = page + 1,
					url = href + nextPage; // путь к обработчику

				$.ajax({
						url: url // путь к обработчику
					}).done(function(data) {
					console.log(url, 'done');
					// @prod
					if(!data) {
		                $('.more').hide();
		                showFlash('done');
						return;
					}
		            var items = $(data).children().css('opacity', 0);

					// append
					list.append( items );

					items.each(function(i, item){
						$(item).delay(i * 150).fadeTo(300, 1);
					});

					// update page
					list.data('page', nextPage);
				});
			});

});

$(window).scroll(function () {
	var scroll = $('body').scrollTop();
	var flag=false;
	if ((scroll > 350)) {
		flag = true;
	    $('.wrap-header').removeClass('close'); 
    } else {
	    $('.wrap-header').addClass('close');
    }
    if ((scroll > 0)) {
		flag = true;
	    $('.wrap-header.order').removeClass('close'); 
    } else {
	    $('.wrap-header.order').addClass('close');
    }
    if (scroll > 400) {
		$('.time-box, .sect-box').addClass('fixed'); 
	} else if (scroll < 400) {
		$('.time-box, .sect-box').removeClass('fixed'); 
    }
});

$(window).resize(function(){
    var width = $(window).width();
		if (width<'1024') {
			$('.menu-toggle, .mobile-menu, .movedown ').removeClass('show-menu'); 
			$('.section-for-menu').removeClass('open'); 
			$('html').removeClass('non-scrol'); 
		}
});



		
