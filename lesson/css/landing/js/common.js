$(document).ready(function() {

	$(".main_menu_button ").click(function() {
		$(".main_mnu li").next().slideToggle(750);
	});


	//Stellar - Parallax Plugin

	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 40
	});

	
	var eqElement = ".element"
	$(window).load(function(){equalheight(eqElement);}).resize(function(){equalheight(eqElement);});

	
	
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});
	//Скролл до id, указанного в hash URL
	var elem = window.location.hash;
	if(elem) {
		$.scrollTo(elem, 800, {
			offset: -90
		});
	};

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	function carousel_1() {
		var owl = $(".carousel");
		owl.owlCarousel({
			items : 4,
			loop : true,
			autoHeight : true,
			dots : true,
			
		});
		owl.on("mousewheel", ".owl-wrapper", function (e) {
			if (e.deltaY > 0) {
				owl.trigger("owl.prev");
			} else {
				owl.trigger("owl.next");
			}
			e.preventDefault();
		});
		$(".next_button").click(function() {
			owl.trigger("owl.next");
		});
		$(".prev_button").click(function() {
			owl.trigger("owl.prev");
		});
		owl.on("resized.owl.carousel", function(event) {
			var $this = $(this);
			$this.find(".owl-height").css("height", $this.find(".owl-item.active").height());
		});
		setTimeout(function() {
			owl.find(".owl-height").css("height", owl.find(".owl-item.active").height());
		}, 2000);
	};
	carousel_1();

	//Кнопка "Наверх"
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//Аякс отправка форм
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
	
});


// Адаптивное слайд-шоу


var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,20000);

function nextSlide(){
	slides[currentSlide].className = 'slide';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'slide showing';
};




$(function() {
	$('.toggles button').click(function(){
		var get_id = this.id;
		var get_current = $('.posts .' + get_id);


		$('.post').not(get_current).hide(1000);
		get_current.show(1000);
	});

	$('#showall').click(function() {
		$('.post').show(1000);
	});






});


$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.menu-nav').toggleClass('menu-nav_active');
});