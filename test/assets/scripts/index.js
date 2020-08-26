/*========================================================================

	** 編集時注意事項 **

	「/assets/scripts/」以下のjsファイルは、webpackによって全てbundle.jsへ統合されます。
	webpackを使用出来ない場合で、add.jsなど別ファイルにてscriptを書く場合は
	「/assets/scripts_unbundle/」内にファイルを追加して、htmlよりscriptタグで読み込んでください。

========================================================================*/

const Promise = require('es6-promise').Promise

/*====================================

	1. event Function

====================================*/

window.onload = () => {
}

window.addEventListener('DOMContentLoaded', () => {
	Squib.slickIntro()
	Squib.slickNews()
	Squib.splitting()
	Squib.paroller()
	Squib.scrollInview()
})



// /*====================================

// 	2. Squib Module

// ====================================*/

const Squib = {
	slickIntro: () => {
		$('.intro-slider-list').slick({
			autoplay: true,
			dots: false,
			arrows: false,
			draggable: false,
			pauseOnFocus: false,
			pauseOnHover: false,
			autoplaySpeed: 1200,
			slidesToShow: 5,
			slidesToScroll: 1,
			centerMode: true,
			variableWidth: true,
			speed: 800
		})
	},
	slickNews: () => {
		$('.news-slider-list').slick({
			autoplay: false,
			dots: true,
			arrows: true,
			draggable: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			centerMode: true,
			variableWidth: true,
			speed: 400,
		})
	},
	splitting: () => {
		const results = Splitting()
	},
	paroller: () => {
		$('#js--paroller-img01, #js--paroller-img02, #js--paroller-img03').paroller({
			factor: 0.15,
			type: 'foreground',
			direction: 'vertical'
		})
	},
	scrollInview: () => {
		const trigger = document.querySelectorAll('.style--inview-splitting')
		for(let value = 0; value < trigger.length; value++) {
			const controller = new ScrollMagic.Controller()
			const scene = new ScrollMagic.Scene({
				offset: 0,
				triggerHook: 'onEnter',
				triggerElement: trigger[value]
			})
			.setTween(TweenMax.staggerTo(trigger[value].querySelectorAll('.char'), 1, {transform: 'translate3d(0, 0%, 0)', ease:Elastic.easeInOut}, .05))
			// debug
			// .addIndicators({name: '(duration: 0)'})
			.addTo(controller)
		}
	},
}
