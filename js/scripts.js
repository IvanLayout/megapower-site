// Ширина окна для ресайза
WW = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth

// Моб. версия
fakeResize = false
fakeResize2 = true

if (document.body.clientWidth < 375) {
	document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
}

$(() => {
	$('body').on('click', '.mob-menu-btn', function (e) {
		e.preventDefault()

		if ( $(this).hasClass('_active') ) {
			$(this).removeClass('_active')
			$('.header-mob__wrap').removeClass('_active')
			$('.header').removeClass('_show')
			$('body').removeClass('_lock')
		} else {
			$(this).addClass('_active')
			$('.header-mob__wrap').addClass('_active')
			$('.header').addClass('_show')
			$('body').addClass('_lock')
		}
	})

	if ($('.advantages-main__slider').length) {
		swiperAdv = new Swiper(".advantages-main__slider", {
			loop: true,
			loopAdditionalSlides: 1,
			spaceBetween: 16,
			slidesPerView: 'auto',
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 16,
					slidesPerView: 'auto',
				},
				'480': {
					spaceBetween: 16,
					slidesPerView: 'auto',
				},
				'768': {
					spaceBetween: 16,
					slidesPerView: 3
				},
				'1024': {
					spaceBetween: 16,
					slidesPerView: 4
				}
			}
		})

		swiperAdv.slideNext(0, false);
    	swiperAdv.slidePrev(0, false);
	}

	if ($('.inner-news__slider').length) {
		new Swiper(".inner-news__slider", {
			loop: false,
			spaceBetween: 15,
			slidesPerView: 1,
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 15,
					slidesPerView: 1,
				},
				'480': {
					spaceBetween: 15,
					slidesPerView: 2,
				},
				'768': {
					spaceBetween: 16,
					slidesPerView: 3
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 4
				}
			},
			on: {
				init: function (swiper) {
					let posTop = $(swiper.el).find('.inner-news__img').height()

					$(swiper.el).find('.slider-button-prev, .slider-button-next').css('top', posTop/2)
				},
				resize: function (swiper) {
					let posTop = $(swiper.el).find('.inner-news__img').height()

					$(swiper.el).find('.slider-button-prev, .slider-button-next').css('top', posTop/2)
				}
			}
		})
	}

	if ($('.main-news__slider').length) {
		new Swiper(".main-news__slider", {
			loop: false,
			spaceBetween: 16,
			slidesPerView: 'auto',
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 16,
					slidesPerView: 'auto',
				},
				'480': {
					spaceBetween: 16,
					slidesPerView: 'auto',
				},
				'768': {
					spaceBetween: 16,
					slidesPerView: 3
				},
				'1024': {
					spaceBetween: 16,
					slidesPerView: 3
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})
	}

	if ($('.products-slider').length) {
		new Swiper('.products-slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 20,
			slidesPerView: 'auto',
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				'480': {
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				'768': {
					spaceBetween: 16,
					slidesPerView: 3
				},
				'1024': {
					spaceBetween: 16,
					slidesPerView: 3,
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')

					$(swiper.el).find('.product__name, .product__info').height('auto')

					setHeight( $(swiper.el).find('.product__name') )
					setHeight( $(swiper.el).find('.product__info') )
				},
				resize: function (swiper) {
					$(swiper.el).find('.product__name, .product__info').height('auto')

					// setTimeout(function(){
						setHeight( $(swiper.el).find('.product__name') )
						setHeight( $(swiper.el).find('.product__info') )
					// }, 200)
				}
			}
		})
	}


	if ($('.reviews-slider').length) {
		new Swiper('.reviews-slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 20,
			slidesPerView: 'auto',
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				'480': {
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				'768': {
					spaceBetween: 16,
					slidesPerView: 2
				},
				'1024': {
					spaceBetween: 16,
					slidesPerView: 3,
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')

					$(swiper.el).find('.product__name, .product__info').height('auto')

					setHeight( $(swiper.el).find('.product__name') )
					setHeight( $(swiper.el).find('.product__info') )
				},
				resize: function (swiper) {
					$(swiper.el).find('.product__name, .product__info').height('auto')

					// setTimeout(function(){
						setHeight( $(swiper.el).find('.product__name') )
						setHeight( $(swiper.el).find('.product__info') )
					// }, 200)
				}
			}
		})
	}


	if ($('.list-dealers__slider').length) {
		new Swiper('.list-dealers__slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 20,
			slidesPerView: 'auto',
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				'480': {
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				'768': {
					spaceBetween: 16,
					slidesPerView: 3
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})
	}

	if ($('.download-slider').length) {
		new Swiper('.download-slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 16,
			slidesPerView: 'auto',
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'1200': {
					spaceBetween: 16,
					slidesPerView: 3
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})
	}


	if ($('.product-info').length) {
		galleryThumbs = new Swiper('.product-thumbs', {
			spaceBetween: 16,
			slidesPerView: 'auto',
			direction: 'horizontal',
			loop: false,
			speed: 500,
			watchOverflow: true,
			watchSlidesProgress: true,
			breakpoints: {
				'320': {
					spaceBetween: 8,
					slidesPerView: 'auto'
				},
				'480': {
					spaceBetween: 8,
					slidesPerView: 'auto'
				},
				'768': {
					spaceBetween: 16,
					slidesPerView: 'auto'
				}
			},
		})

		new Swiper('.product-images__slider', {
			spaceBetween: 16,
			loop: false,
			speed: 1000,
			watchOverflow: true,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			thumbs: {
				swiper: galleryThumbs
			}
		})
	}
});


$(window).on('load', () => {
	if ($('.areas-activity__wrap').length){
		areasActivitySlider()
	}


	//
	if ($('.products__grid').length){
		$('.products .products__grid').each(function() {
			productsHeight($(this), parseInt($(this).css('--products_count')))
		})
	}
});


$(window).on('resize', () => {
	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Перезапись ширины окна
		WW = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth

		// Моб. версия
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}


	if ($('.areas-activity__wrap').length){
		areasActivitySlider()
	}

	//
	if ($('.products__grid').length){
		$('.products .products__grid').each(function() {
			productsHeight($(this), parseInt($(this).css('--products_count')))
		})
	}
});


// 
function productsHeight(context, step) {
	let start    = 0
	let finish   = step
	let products = context.find('.product')

	products.find('.product__name').height('auto')
	products.find('.product__info').height('auto')

	for (let i = 0; i < products.length; i++) {
		setHeight(products.slice(start, finish).find('.product__name'))
		setHeight(products.slice(start, finish).find('.product__info'))

		start  = start + step
		finish = finish + step
	}
}


function areasActivitySlider(){
	if ( $(window).width() < 1024 && !$('.areas-activity__wrap').hasClass('swiper-initialized') ) {
		$('.areas-activity__wrap').addClass('swiper')
		$('.areas-activity__grid').addClass('swiper-wrapper').removeClass('_flex')
		$('.areas-activity__item').addClass('swiper-slide')

		areasActivitySwiperSlider = new Swiper('.areas-activity__wrap', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 10,
			slidesPerView: 1,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 10,
					slidesPerView: 1,
				},
				'480': {
					spaceBetween: 10,
					slidesPerView: 1,
				},
				'768': {
					spaceBetween: 15,
					slidesPerView: 2,
				}
			},
		})
	} else if ($(window).width() > 1023 && $('.areas-activity__wrap').hasClass('swiper-initialized')) {
		if ($('.areas-activity__wrap').length === 1 && $('.areas-activity__wrap').hasClass('swiper-initialized')) {
			areasActivitySwiperSlider.destroy(true, true)
		} else if ($('.areas-activity__wrap').length >= 2 && $('.areas-activity__wrap').hasClass('swiper-initialized')) {
			areasActivitySwiperSlider.forEach(function (element) {
				element.destroy(true, true)
			})
		}

		$('.areas-activity__wrap').removeClass('swiper')
		$('.areas-activity__grid').removeClass('swiper-wrapper').addClass('_flex')
		$('.areas-activity__item').removeClass('swiper-slide')
	}
}