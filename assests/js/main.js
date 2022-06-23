// фунцкия принудительного скролла наверх при обновлении страницы
history.scrollRestoration = "manual";

$(window).on('beforeunload', function(){
      $(window).scrollTop(0);
});

$(".gallery-list").magnificPopup ({
	delegate: "a",
	type: "image",
	gallery: {
		enabled: true
	}
});

$(".main_page_rightSide-content-photo").magnificPopup ({
	delegate: "a",
	type: "image",
	gallery: {
		enabled: true
	}
});

$(".main_page_rightSide-content-wall_12-img").magnificPopup ({
	delegate: "a",
	type: "image",
	gallery: {
		enabled: true
	}
});

$(".main_page_rightSide-contents-gallery-item").magnificPopup ({
	delegate: "a",
	type: "image",
	gallery: {
		enabled: true
	}
});

// лайки
var btnHeart = document.querySelector(".fav-btn");
var btnHeart1 = document.querySelector(".fav-btn1");

btnHeart.addEventListener("click", () => {
	btnHeart.classList.toggle("active");
});

btnHeart1.addEventListener("click", () => {
	btnHeart1.classList.toggle("active");
});
