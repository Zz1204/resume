"use strict";
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// 在窗口调整高度
$(window).on('resize',function(){
    var slideHeight = $('.slick-track').innerHeight();
	return false;
});


// 平滑滚动
var $root = $('html, body');
$('a.s-scroll').on('click',function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
});


// 页面加载器
$(function(){
	setTimeout(function(){
		$('#page-loader').addClass('hidden');
	},3000)
    
});
/* 页面/部分背景 */

var background = '#ccc';
var backgroundMask = 'rgba(255,255,255,0.92)';
var backgroundVideoUrl = 'none';

/* 背景图像作为数据  */
var list = $('.bg-img');

for (var i = 0; i < list.length; i++) {
	var src = list[i].getAttribute('data-image-src');
	list[i].style.backgroundImage = "url('" + src + "')";
	list[i].style.backgroundRepeat = "no-repeat";
	list[i].style.backgroundPosition = "center";
	list[i].style.backgroundSize = "cover";
}

/* 背景色作为数据使用 */
var list = $('.bg-color');
for (var i = 0; i < list.length; i++) {
	var src = list[i].getAttribute('data-bgcolor');
	list[i].style.backgroundColor = src;
}

/* 幻灯片背景 */
var imageList = $('.slide-show .img');
var imageSlides = [];
for (var i = 0; i < imageList.length; i++) {
	var src = imageList[i].getAttribute('data-src');
	imageSlides.push({src: src});
}
$(function() {
    $('.slide-show').vegas({
        delay: 5000,
        shuffle: true,
        slides: imageSlides,
		animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
    });
});



/* 幻灯片 */
var isSlide = false;
var slideElem = $('.slide');
var arrowElem = $('.p-footer .arrow-d');
var pageElem = $('.page');
/** Init fullpage.js */
$(document).ready(function() {
    $('#mainpage').fullpage({
		menu: '#qmenu',
		anchors: ['home', 'when', 'register', 'about-us', 'contact'],
		scrollOverflow: true,
        css3: false,
        navigation: true,
		onLeave: function(index, nextIndex, direction){
			arrowElem.addClass('gone');
			pageElem.addClass('transition');
			slideElem.removeClass('transition');
			isSlide = false;
		},
        afterLoad: function(anchorLink, index){
			arrowElem.removeClass('gone');
			pageElem.removeClass('transition');
			if(isSlide){
				slideElem.removeClass('transition');
			}
		},
		afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
			slideElem.removeClass('transition');
			isSlide = true;
        },
		onSlideLeave: function( anchorLink, index, slideIndex, direction){
			if(isSlide){
				slideElem.addClass('transition');
			}
        },
        afterRender: function(){}
    });
});

//  图表

jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});