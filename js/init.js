/** *************Init JS*********************
	
    TABLE OF CONTENTS
	---------------------------
	1.Ready function
	2.Load function
	3.Scroll function
	4.Full height function
	5.Scrollspy function
	6.Timeline Function
	7.Resize function
	9.penelope function
		1)Typed js
		2)Client carousel
		3)Header animation
		4)Progressbar animation
		5)Header script
		6)Wow animation
	10.Click function
	11.MasonryPortfolio function
	12.Placehoder ie9
	13.LightGallery init
************************************* **/

"use strict";
/*****Load function start*****/
$(window).on("load",function(){
	/*Page load animaion start*/
	$("#pre_load").delay(500).fadeOut("slow");
	$("body").css('overflow-y', 'visible');
	/*Page load animaion end*/
	onResizePort();
});
/*****Load function* end*****/

/*****Scroll function start*****/
$(window).on("scroll",function() {
	var navTop = $('header');
	
	/*Header animaion onscroll*/
	var scroll = $(window).scrollTop();
	if (scroll >= 150) {
		$(navTop).addClass("fixed");
	} else {
		$(navTop).removeClass("fixed");
	}
	/*Header animaion onscroll*/
});
/*****Scroll function start*****/

/***** Full height function start *****/
var setHeight = function() {
	var height = $(window).height();
	$('.full-height').css('min-height', (height));
};
/***** Full height function end *****/

/***** Scrollspy function start *****/
var fixSpy = function() {
	var body = $('body'),
		navTop = $('header'),
		offset = navTop.outerHeight() + 15;
	body.scrollspy({
		target: '.navbar-collapse',
		offset: offset
	});
	var data = body.data('bs.scrollspy');
	if (data) {
		data.options.offset = offset;
		body.data('bs.scrollspy', data);
		body.scrollspy('refresh');
	}
}
/***** Scrollspy function end *****/

/***** Timeline Function start *****/
var timelineheightCal = function() {
	var container = $('.exp-timeline-wrap');
	var expTimeline = $('.exp-timeline');
	for (var i = 0; i < expTimeline.length; i++) {
		$(expTimeline[i]).hover(
			function() {
				for (var i = 0; i < expTimeline.length; i++) {
					$(expTimeline[i]).addClass("timeline-inactive").removeClass("timeline-active");
				}
				$(this).addClass("timeline-active");
			},
			function() {
				for (var i = 0; i < expTimeline.length; i++) {
					$(expTimeline[i]).removeClass("timeline-active").removeClass("timeline-inactive");
				}
				$(expTimeline).first().addClass("timeline-active");
			}
		);
		$(expTimeline[i]).attr('style', '').find('.timeline-st').attr('style', '');
		var height = $(expTimeline[i]).height();
		var newHeight = 0;
		newHeight = height + 43;
		$(expTimeline[i]).css({
			height: newHeight
		}).find('.timeline-st').css({
			height: newHeight - 15
		});
	}
	$(expTimeline).last().css({
		height: newHeight - 43
	}).find('.timeline-st').css({
		height: newHeight - 58
	});
};
/***** Timeline Function end *****/

/***** penelope function start *****/
var penelope = function() {
	/*SmoothScroll start*/
	smoothScroll.init({
		speed: 800,
		easing: 'easeInOutCubic',
		offset: navTop,
		updateURL: false,
		callbackBefore: function(toggle, anchor) {},
		callbackAfter: function(toggle, anchor) {},
	});
	/*SmoothScroll End*/
	
	/*Typed js start*/
	$("#typed").typed({
		strings: ["Product Manager.", "Marketer.", "Developer.", "Designer.", "Artist."],
		typeSpeed: 80,
		backDelay: 850,
		loop: true,
		cursorChar: "|",
		contentType: 'html', // or text
		// defaults to false for infinite loop
		loopCount: false
	});
	/*Typed js end*/
	
	/*Client carousel start*/
	$('#client_sec .client-carousel').owlCarousel({
		loop: true,
		margin: 15,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			200: {
				items: 2
			},
			400: {
				items: 3
			},
			600: {
				items: 4
			},
			1200: {
				items: 3
			},
			1300: {
				items: 4
			},
			1600: {
				items: 5
			}
		}
	});
	/*Client carousel end*/
	
	/*Header animation start*/
	var scroll = $(window).scrollTop();
	var header = $("header");
	if (scroll >= 150)
		$(header).addClass("fixed");
	else
		$(header).removeClass("fixed");
	/*Header animation end*/
	
	/*Progressbar animation start*/
	var progressBar = $('.progress-bar-graph div');
	for (var i = 0; i < progressBar.length; i++) {
		$(progressBar[i]).appear(function() {
			var percent = $(this).find('span').attr('data-width');
			var $endNum = parseInt($(this).find('.bar-wrap strong i').text(), 10);
			var $that = $(this);
			$(this).find('span').animate({
				'width': percent + '%'
			}, 1600, function() {});
			$(this).find('.bar-wrap strong').animate({
				'opacity': 1
			}, 1400);
			$(this).find('.bar-wrap strong i').countTo({
				from: 0,
				to: $endNum,
				speed: 1200,
				refreshInterval: 30,
				onComplete: function() {}
			});
			if (percent === '100') {
				$that.find('bar-wrap strong').addClass('full');
			}
		});
	}
	/*Progressbar animation end*/
	
	/*Header script start*/
	var navbarList = $('nav.navbar li');
	for (var i = 0; i < navbarList.length; i++) {
		var text = $(navbarList[i]).find('span').text();
		$(navbarList[i]).find('a').append('<span>' + text + '</span>');
	}
	/*Header script end*/
	
	/*Wow animation(Optional) start*/
	/*var wow = new WOW(
	{
	boxClass: 'wow', // animated element css class (default is wow)
	animateClass: 'animated', // animation css class (default is animated)
	offset: 0, // distance to the element when triggering the animation (default is 0)
	mobile: false, // trigger animations on mobile devices (default is true)
	live: true // act on asynchronously loaded content (default is true)
	}
	);
	wow.init();*/
	/*Wow animation end*/
}
/***** penelope function end *****/

/***** Click function start *****/
$(document).on('click','.navbar-collapse.in a',function(e) {
      $('.navbar-collapse.in').collapse('hide'); 
	   return false;
});
/***** Click function end *****/

/***** MasonryPortfolio function start *****/		
if( $('.portfolio-wrap').length > 0 ){	
	var $container = $('.portf'),
	$body = $('body');
	
	/*On Resize Portfolio Function*/
	var onResizePort= function() {
		$body.find('.portf').each(function () { 
			var winWidth = window.innerWidth;
			var container_mock = $('.work-wrap').width();
			columnNumb = 1;			
			var attr_col = $(this).attr('data-col');
				
			 if (winWidth >= 1466) {
				
				$('.portfolio-wrap').css( {width : container_mock});
				$('.portfolio-wrap.no-gutter').css( {width : container_mock});			
				$('.portfolio-wrap.no-gutter.full-width').css( {width : 100  + '%'});			
				var portfolioWidth = $('.portfolio-wrap').width();
				
				if (typeof attr_col !== typeof undefined && attr_col !== false) {
					columnNumb = $(this).attr('data-col');
				} else columnNumb = 3;
					
				var postWidth = Math.floor(portfolioWidth / columnNumb)			
				$(this).find('.item').each(function () { 
					$(this).css( { 
						width : postWidth - 20 + 'px',
						height : 'auto',
						margin : 10 + 'px' 
					});
					$('.no-gutter .'+$(this).attr('class')).css( {
						width : postWidth  + 'px',
						height : 'auto',
						margin : 0 + 'px' 
					});
					$('.wide.'+$(this).attr('class')).css( { 
						width : postWidth * 2 - 20 + 'px'  
					});
					$('.no-gutter .wide.'+$(this).attr('class')).css( { 
						width : postWidth * 2 + 'px'  
					});
					$('.tall.'+$(this).attr('class')).css( {
						height : 'auto' 
					});
					$('.small.'+$(this).attr('class')).css( {
						height : 'auto',  
					});
				
					$('.no-gutter .tall.'+$(this).attr('class')).css( {
						height : 'auto', 
					});
					$('.wide-tall.'+$(this).attr('class')).css( {
						width : postWidth * 2 - 20 + 'px',
						height : postWidth * 2 - 20 + 'px'  
					});
					$('.no-gutter .wide-tall.'+$(this).attr('class')).css( {
						width : postWidth * 2 + 'px',
						height : 'auto', 
					});
				});
				
				
			} else if (winWidth > 1024) {
				
				$('.portfolio-wrap').css( {width : container_mock});
				$('.portfolio-wrap.no-gutter').css( {width : container_mock});		
				var portfolioWidth = $('.portfolio-wrap').width();
							
				if (typeof attr_col !== typeof undefined && attr_col !== false) {
					columnNumb = $(this).attr('data-col'); //alert(columnNumb);
				} else columnNumb = 3;
				
				postWidth = Math.floor(portfolioWidth / columnNumb)			
				$(this).find('.item').each(function () { 
					
					$(this).css( { 
						width : postWidth - 20 + 'px',
						height : 'auto',
						margin : 10 + 'px' 
					});
					
					$('.no-gutter .' +$(this).attr('class')).css( {
						width : postWidth  + 'px',
						height : 'auto',
						margin : 0 + 'px' 
					});
					$('.wide.'+$(this).attr('class') ).css( { 
						width : postWidth * 2 - 20 + 'px'  
					});
					$('.no-gutter .wide.'+$(this).attr('class')).css( { 
						width : postWidth * 2 + 'px'  
					});
					$('.tall.'+$(this).attr('class')).css( {
						height : 'auto', 
					});
					$('.small.'+$(this).attr('class')).css( {
						height : 'auto',  
					});
					$('.no-gutter .tall.'+$(this).attr('class')).css( {
						height : 'auto', 
					});
					$('.wide-tall.'+$(this).attr('class')).css( {
						width : postWidth * 2 - 20 + 'px',
						height : 'auto', 
					});
					$('.no-gutter .wide-tall.'+$(this).attr('class')).css( {
						width : postWidth * 2 + 'px',
						height : 'auto', 
					});
				});
				
				
			} else if (winWidth > 767) {
				
				$('.portfolio-wrap').css( {width : container_mock});
				$('.portfolio-wrap.no-gutter').css({width : container_mock});
				var portfolioWidth = $('.portfolio-wrap').width(),
				
				columnNumb = 2;
				postWidth = Math.floor(portfolioWidth / columnNumb)			
				$(this).find('.item').each(function () { 
					$(this).css( { 
						width : postWidth - 20 + 'px',
						height : 'auto',
						margin : 10 + 'px' 
					});
					$('.no-gutter .'+$(this).attr('class')).css( {
						width : postWidth  + 'px',
						height : 'auto',
						margin : 0 + 'px' 
					});
					$('.wide.'+$(this).attr('class')).css( { 
						width : postWidth * 2 - 20 + 'px'  
					});
					$('.no-gutter .wide.'+$(this).attr('class')).css( { 
						width : postWidth * 2 + 'px'  
					});
					$('.tall.'+$(this).attr('class')).css( {
						height : 'auto',
					});
					$('.small.'+$(this).attr('class')).css( {
						height : 'auto',  
					});
					$('.no-gutter .tall.'+$(this).attr('class')).css( {
						height : 'auto', 
					});
					$('.wide-tall.'+$(this).attr('class')).css( {
						width : postWidth * 2 - 20 + 'px',
						height : postWidth   + 'px', 
					});
					$('.no-gutter .wide-tall.'+$(this).attr('class')).css( {
						width : postWidth * 2 + 'px',
						height : 'auto', 
					});
				});
				
				
			}	else if (winWidth > 479) {
				
				$('.portfolio-wrap').css( {width : container_mock});
				$('.portfolio-wrap.no-gutter').css( {width : container_mock});
				var portfolioWidth = $('.portfolio-wrap').width(),
				
				columnNumb = 1;
				postWidth = Math.floor(portfolioWidth / columnNumb)			
				$(this).find('.item').each(function () { 
					$(this).css( { 
						width : postWidth - 20 + 'px',
						height : 'auto',
						margin : 10 + 'px' 
					});
					$('.no-gutter .'+$(this).attr('class')).css( {
						width : postWidth  + 'px',
						height : 'auto',
						margin : 0 + 'px' 
					});
					$('.wide.'+$(this).attr('class')).css( { 
						width : postWidth - 20 + 'px'  
					});
					$('.no-gutter .wide.'+$(this).attr('class')).css( { 
						width : postWidth + 'px'  
					});
					$('.tall.'+$(this).attr('class')).css( {
						height : 'auto', 
					});
					$('.small.'+$(this).attr('class')).css( {
						height : 'auto',  
					});
					$('.no-gutter .tall.'+$(this).attr('class')).css( {
						height : 'auto', 
					});
					$('.wide-tall.'+$(this).attr('class')).css( {
						width : postWidth - 20 + 'px',
						height : postWidth   + 'px', 
					});
					$('.no-gutter .wide-tall.'+$(this).attr('class')).css( {
						width : postWidth  + 'px',
						height : postWidth   + 'px', 
					});
				});
				
				
			}
			
			else if (winWidth <= 479) {
				
				$('.portfolio-wrap').css( {width : container_mock});
				$('.portfolio-wrap.no-gutter').css( {width : container_mock});
				var portfolioWidth = $('.portfolio-wrap').width(),
				
				columnNumb = 1;
				postWidth = Math.floor(portfolioWidth / columnNumb)			
				$(this).find('.item').each(function () { 
					$(this).css( { 
						width : postWidth - 20 + 'px',
						height : 'auto',
						margin : 10 + 'px' 
					});
					$('.no-gutter .'+$(this).attr('class')).css( {
						width : postWidth  + 'px',
						height : 'auto',
						margin : 0 + 'px' 
					});
					$('.wide.'+$(this).attr('class')).css( { 
						width : postWidth - 20 + 'px'  
					});
					$('.no-gutter .wide.'+$(this).attr('class')).css( { 
						width : postWidth + 'px'  
					});
					$('.tall.'+$(this).attr('class')).css( {
						height : 'auto',  
					});
					$('.small.'+$(this).attr('class')).css( {
						height : 'auto',  
					});
					$('.no-gutter .tall.'+$(this).attr('class')).css( {
						height : 'auto', 
					});
					$('.wide-tall.'+$(this).attr('class')).css( {
						width : postWidth - 20 + 'px',
						height : postWidth   + 'px',  
					});
					$('.no-gutter .wide-tall.'+$(this).attr('class')).css( {
						width : postWidth + 'px',
						height : postWidth   + 'px', 
					});
				});
				
				
			}		
			//alert();
			
			//return columnNumb;
		});
		$container.isotope({
			itemSelector: '.item',
			gutter:0,
			layoutMode: 'packery',
			transitionDuration: "0.8s"
		});		
	};
	/*On Resize Portfolio Function*/
}
/***** MasonryPortfolio function End *****/

/***** Resize function start *****/
var resizeTimer,
navTop = $('header').height() - 1,
navBar = $('nav.navbar'),
navCollapse = $('.navbar-collapse.in');
$(window).on("resize", function() {
	var winWidth = $(window).outerWidth();
	onResizePort();
	
	/*Function calls onresize start*/
	setHeight();
	timelineheightCal();
	/*Function calls onresize end*/
	
	/*Scrollspy start*/
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(fixSpy, 200);
	/*Scrollspy end*/
	
	/*Header Related start*/
	if (winWidth <= 1182)
		navBar.removeClass("vertical-nav").appendTo($(".header-wrap"));
	else
		navBar.addClass("vertical-nav").appendTo($("#vertical_nav_wrap"));
	navCollapse.collapse('hide');
	/*Header Related end*/
}).resize();
/***** Resize function end *****/

/*****Ready function start*****/
$(document).on("ready",function() {
	/*Penelope function init start*/
	penelope();
	/*Penelope function init end*/
	
	/*Preload anim start*/
	$('#la_anim').addClass('la-animate');
	/*Preload anim end*/
});
/*****Ready function end*****/

/***** Placehoder ie9 start*****/
$('input[type=text], textarea').placeholder();
/***** Placehoder ie9 end*****/

/***** LightGallery init start*****/
$('#portfolio').lightGallery({
	showThumbByDefault: false,
	hash: false
});
/***** LightGallery init end*****/

/***** Charts init start*****/
            var randomScalingFactor = function () {
                return Math.round(Math.random() * 100);
            };

            var chartColors = {
                red: 'rgb(255, 99, 132)',
                orange: 'rgb(255, 159, 64)',
                yellow: 'rgb(255, 205, 86)',
                green: 'rgb(75, 192, 192)',
                blue: 'rgb(54, 162, 235)',
                purple: 'rgb(153, 102, 255)',
                grey: 'rgb(231,233,237)'
            };

var color = Chart.helpers.color;

/***** Chart Sets *******/

/****** Marketing *******/

var markChart = {
	type: 'radar',
	data: {
		labels: ["HTML", "CSS", "Javascript", ["Ruby", "on", "Rails"], "PHP", "Python", "Postgres", "MongoDb", "MySQL"],
		datasets: [{
			label: "Front-End",
			backgroundColor: color(chartColors.red).alpha(0.2).rgbString(),
			borderColor: chartColors.red,
			pointBackgroundColor: chartColors.red,
			data: [
				4, 5, 3, 2, 0, 0, 0, 0, 0
			]
		}, {
			label: "Back-End",
			backgroundColor: color(chartColors.blue).alpha(0.2).rgbString(),
			borderColor: chartColors.blue,
			pointBackgroundColor: chartColors.blue,
			data: [
				0, 0, 1, 3, 2, 1, 3, 2, 1
			]
		}, {
			label: "Database",
			backgroundColor: color(chartColors.orange).alpha(0.2).rgbString(),
			borderColor: chartColors.orange,
			pointBackgroundColor: chartColors.orange,
			data: [
				0, 0, 0, 0, 0, 0, 3, 2, 4
			]
		},]
	},
	options: {
		legend: {
			position: 'top',
			labels: {
				fontColor: 'rgb(255, 99, 132)'
			},
			onHover: function (event, legendItem) {
				document.getElementById("markChart").style.cursor = 'pointer';
			},
			onClick: function (e, legendItem) {
				var index = legendItem.datasetIndex;
				var ci = this.chart;
				var alreadyHidden = (ci.getDatasetMeta(index).hidden === null) ? false : ci.getDatasetMeta(index).hidden;

				ci.data.datasets.forEach(function (e, i) {
					var meta = ci.getDatasetMeta(i);

					if (i !== index) {
						if (!alreadyHidden) {
							meta.hidden = meta.hidden === null ? !meta.hidden : null;
						} else if (meta.hidden === null) {
							meta.hidden = true;
						}
					} else if (i === index) {
						meta.hidden = null;
					}
				});

				ci.update();
			},
		},
		tooltips: {
			custom: function (tooltip) {
				if (!tooltip.opacity) {
					document.getElementById("markChart").style.cursor = 'default';
					return;
				}
			}
		},
		title: {
			display: true,
			text: 'Spikes'
		},
		scale: {
			ticks: {
				beginAtZero: true
			}
		}
	}
};

/***** Engineering ******/

            var engChart = {
                type: 'radar',
                data: {
                    labels: ["HTML", "CSS", "Javascript", ["Ruby", "on", "Rails"], "PHP", "Python", "Postgres", "MongoDb", "MySQL"],
                    datasets: [{
                        label: "Front-End",
                        backgroundColor: color(chartColors.red).alpha(0.2).rgbString(),
                        borderColor: chartColors.red,
                        pointBackgroundColor: chartColors.red,
                        data: [
                            4, 5, 3, 2, 0, 0, 0, 0, 0
                        ]
                    }, {
                        label: "Back-End",
                        backgroundColor: color(chartColors.blue).alpha(0.2).rgbString(),
                        borderColor: chartColors.blue,
                        pointBackgroundColor: chartColors.blue,
                        data: [
                            0, 0, 1, 3, 2, 1, 3, 2, 1
                        ]
                    }, {
                        label: "Database",
                        backgroundColor: color(chartColors.orange).alpha(0.2).rgbString(),
                        borderColor: chartColors.orange,
                        pointBackgroundColor: chartColors.orange,
                        data: [
                            0, 0, 0, 0, 0, 0, 3, 2, 4
                        ]
                    },]
                },
                options: {
                    legend: {
                        position: 'top',
                        labels: {
                            fontColor: 'rgb(255, 99, 132)'
                        },
                        onHover: function (event, legendItem) {
                            document.getElementById("engChart").style.cursor = 'pointer';
                        },
                        onClick: function (e, legendItem) {
                            var index = legendItem.datasetIndex;
                            var ci = this.chart;
                            var alreadyHidden = (ci.getDatasetMeta(index).hidden === null) ? false : ci.getDatasetMeta(index).hidden;

                            ci.data.datasets.forEach(function (e, i) {
                                var meta = ci.getDatasetMeta(i);

                                if (i !== index) {
                                    if (!alreadyHidden) {
                                        meta.hidden = meta.hidden === null ? !meta.hidden : null;
                                    } else if (meta.hidden === null) {
                                        meta.hidden = true;
                                    }
                                } else if (i === index) {
                                    meta.hidden = null;
                                }
                            });

                            ci.update();
                        },
                    },
                    tooltips: {
                        custom: function (tooltip) {
                            if (!tooltip.opacity) {
                                document.getElementById("engChart").style.cursor = 'default';
                                return;
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'Spikes'
                    },
                    scale: {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                }
            };

window.onload = function () {
	window.myRadar = new Chart(document.getElementById("allChart"), allChart);
	window.myRadar = new Chart(document.getElementById("prodChart"), prodChart);
	window.myRadar = new Chart(document.getElementById("markChart"), markChart);
	window.myRadar = new Chart(document.getElementById("desChart"), desChart);
	window.myRadar = new Chart(document.getElementById("engChart"), engChart);
			};

/******* Charts init end ****/