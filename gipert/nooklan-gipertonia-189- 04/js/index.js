jQuery(document).ready(function ($) {
    $('#progression-toggle-tada').click(function () {
        $(".progression-playlist-height").toggleClass('active-progression');
    });
});
;(function ($) {
    var defaults = {
        mode: 'horizontal',
        slideSelector: '',
        infiniteLoop: true,
        hideControlOnEnd: false,
        speed: 500,
        easing: null,
        slideMargin: 0,
        startSlide: 0,
        randomStart: false,
        captions: false,
        ticker: false,
        tickerHover: false,
        adaptiveHeight: false,
        adaptiveHeightSpeed: 500,
        video: false,
        useCSS: true,
        preloadImages: 'visible',
        responsive: true,
        slideZIndex: 50,
        wrapperClass: 'bx-wrapper',
        touchEnabled: true,
        swipeThreshold: 50,
        oneToOneTouch: true,
        preventDefaultSwipeX: true,
        preventDefaultSwipeY: false,
        ariaLive: true,
        ariaHidden: true,
        keyboardEnabled: false,
        pager: true,
        pagerType: 'full',
        pagerShortSeparator: ' / ',
        pagerSelector: null,
        buildPager: null,
        pagerCustom: null,
        controls: true,
        nextText: 'Next',
        prevText: 'Prev',
        nextSelector: null,
        prevSelector: null,
        autoControls: false,
        startText: 'Start',
        stopText: 'Stop',
        autoControlsCombine: false,
        autoControlsSelector: null,
        auto: false,
        pause: 4000,
        autoStart: true,
        autoDirection: 'next',
        stopAutoOnClick: false,
        autoHover: false,
        autoDelay: 0,
        autoSlideForOnePage: false,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 0,
        shrinkItems: false,
        onSliderLoad: function () {
            return true;
        },
        onSlideBefore: function () {
            return true;
        },
        onSlideAfter: function () {
            return true;
        },
        onSlideNext: function () {
            return true;
        },
        onSlidePrev: function () {
            return true;
        },
        onSliderResize: function () {
            return true;
        }
    };
    $.fn.bxSlider = function (options) {
        if (this.length === 0) {
            return this;
        }
        if (this.length > 1) {
            this.each(function () {
                $(this).bxSlider(options);
            });
            return this;
        }
        var slider = {}, el = this, windowWidth = $(window).width(), windowHeight = $(window).height();
        if ($(el).data('bxSlider')) {
            return;
        }
        var init = function () {
            if ($(el).data('bxSlider')) {
                return;
            }
            slider.settings = $.extend({}, defaults, options);
            slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
            slider.children = el.children(slider.settings.slideSelector);
            if (slider.children.length < slider.settings.minSlides) {
                slider.settings.minSlides = slider.children.length;
            }
            if (slider.children.length < slider.settings.maxSlides) {
                slider.settings.maxSlides = slider.children.length;
            }
            if (slider.settings.randomStart) {
                slider.settings.startSlide = Math.floor(Math.random() * slider.children.length);
            }
            slider.active = {index: slider.settings.startSlide};
            slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1 ? true : false;
            if (slider.carousel) {
                slider.settings.preloadImages = 'all';
            }
            slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
            slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
            slider.working = false;
            slider.controls = {};
            slider.interval = null;
            slider.animProp = slider.settings.mode === 'vertical' ? 'top' : 'left';
            slider.usingCSS = slider.settings.useCSS && slider.settings.mode !== 'fade' && (function () {
                var div = document.createElement('div'),
                    props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
                for (var i = 0; i < props.length; i++) {
                    if (div.style[props[i]] !== undefined) {
                        slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
                        slider.animProp = '-' + slider.cssPrefix + '-transform';
                        return true;
                    }
                }
                return false;
            }());
            if (slider.settings.mode === 'vertical') {
                slider.settings.maxSlides = slider.settings.minSlides;
            }
            el.data('origStyle', el.attr('style'));
            el.children(slider.settings.slideSelector).each(function () {
                $(this).data('origStyle', $(this).attr('style'));
            });
            setup();
        };
        var setup = function () {
            var preloadSelector = slider.children.eq(slider.settings.startSlide);
            el.wrap('<div class="' + slider.settings.wrapperClass + '"><div class="bx-viewport"></div></div>');
            slider.viewport = el.parent();
            if (slider.settings.ariaLive && !slider.settings.ticker) {
                slider.viewport.attr('aria-live', 'polite');
            }
            slider.loader = $('<div class="bx-loading" />');
            slider.viewport.prepend(slider.loader);
            el.css({
                width: slider.settings.mode === 'horizontal' ? (slider.children.length * 1000 + 215) + '%' : 'auto',
                position: 'relative'
            });
            if (slider.usingCSS && slider.settings.easing) {
                el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
            } else if (!slider.settings.easing) {
                slider.settings.easing = 'swing';
            }
            slider.viewport.css({width: '100%', overflow: 'hidden', position: 'relative'});
            slider.viewport.parent().css({maxWidth: getViewportMaxWidth()});
            if (!slider.settings.pager && !slider.settings.controls) {
                slider.viewport.parent().css({margin: '0 auto 0px'});
            }
            slider.children.css({
                float: slider.settings.mode === 'horizontal' ? 'left' : 'none',
                listStyle: 'none',
                position: 'relative'
            });
            slider.children.css('width', getSlideWidth());
            if (slider.settings.mode === 'horizontal' && slider.settings.slideMargin > 0) {
                slider.children.css('marginRight', slider.settings.slideMargin);
            }
            if (slider.settings.mode === 'vertical' && slider.settings.slideMargin > 0) {
                slider.children.css('marginBottom', slider.settings.slideMargin);
            }
            if (slider.settings.mode === 'fade') {
                slider.children.css({position: 'absolute', zIndex: 0, display: 'none'});
                slider.children.eq(slider.settings.startSlide).css({
                    zIndex: slider.settings.slideZIndex,
                    display: 'block'
                });
            }
            slider.controls.el = $('<div class="bx-controls" />');
            if (slider.settings.captions) {
                appendCaptions();
            }
            slider.active.last = slider.settings.startSlide === getPagerQty() - 1;
            if (slider.settings.video) {
                el.fitVids();
            }
            if (slider.settings.preloadImages === 'all' || slider.settings.ticker) {
                preloadSelector = slider.children;
            }
            if (!slider.settings.ticker) {
                if (slider.settings.controls) {
                    appendControls();
                }
                if (slider.settings.auto && slider.settings.autoControls) {
                    appendControlsAuto();
                }
                if (slider.settings.pager) {
                    appendPager();
                }
                if (slider.settings.controls || slider.settings.autoControls || slider.settings.pager) {
                    slider.viewport.after(slider.controls.el);
                }
            } else {
                slider.settings.pager = false;
            }
            loadElements(preloadSelector, start);
        };
        var loadElements = function (selector, callback) {
            var total = selector.find('img:not([src=""]), iframe').length, count = 0;
            if (total === 0) {
                callback();
                return;
            }
            selector.find('img:not([src=""]), iframe').each(function () {
                $(this).one('load error', function () {
                    if (++count === total) {
                        callback();
                    }
                }).each(function () {
                    if (this.complete) {
                        $(this).load();
                    }
                });
            });
        };
        var start = function () {
            if (slider.settings.infiniteLoop && slider.settings.mode !== 'fade' && !slider.settings.ticker) {
                var slice = slider.settings.mode === 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides,
                    sliceAppend = slider.children.slice(0, slice).clone(true).addClass('bx-clone'),
                    slicePrepend = slider.children.slice(-slice).clone(true).addClass('bx-clone');
                if (slider.settings.ariaHidden) {
                    sliceAppend.attr('aria-hidden', true);
                    slicePrepend.attr('aria-hidden', true);
                }
                el.append(sliceAppend).prepend(slicePrepend);
            }
            slider.loader.remove();
            setSlidePosition();
            if (slider.settings.mode === 'vertical') {
                slider.settings.adaptiveHeight = true;
            }
            slider.viewport.height(getViewportHeight());
            el.redrawSlider();
            slider.settings.onSliderLoad.call(el, slider.active.index);
            slider.initialized = true;
            if (slider.settings.responsive) {
                $(window).bind('resize', resizeWindow);
            }
            if (slider.settings.auto && slider.settings.autoStart && (getPagerQty() > 1 || slider.settings.autoSlideForOnePage)) {
                initAuto();
            }
            if (slider.settings.ticker) {
                initTicker();
            }
            if (slider.settings.pager) {
                updatePagerActive(slider.settings.startSlide);
            }
            if (slider.settings.controls) {
                updateDirectionControls();
            }
            if (slider.settings.touchEnabled && !slider.settings.ticker) {
                initTouch();
            }
            if (slider.settings.keyboardEnabled && !slider.settings.ticker) {
                $(document).keydown(keyPress);
            }
        };
        var getViewportHeight = function () {
            var height = 0;
            var children = $();
            if (slider.settings.mode !== 'vertical' && !slider.settings.adaptiveHeight) {
                children = slider.children;
            } else {
                if (!slider.carousel) {
                    children = slider.children.eq(slider.active.index);
                } else {
                    var currentIndex = slider.settings.moveSlides === 1 ? slider.active.index : slider.active.index * getMoveBy();
                    children = slider.children.eq(currentIndex);
                    for (i = 1; i <= slider.settings.maxSlides - 1; i++) {
                        if (currentIndex + i >= slider.children.length) {
                            children = children.add(slider.children.eq(i - 1));
                        } else {
                            children = children.add(slider.children.eq(currentIndex + i));
                        }
                    }
                }
            }
            if (slider.settings.mode === 'vertical') {
                children.each(function (index) {
                    height += $(this).outerHeight();
                });
                if (slider.settings.slideMargin > 0) {
                    height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
                }
            } else {
                height = Math.max.apply(Math, children.map(function () {
                    return $(this).outerHeight(false);
                }).get());
            }
            if (slider.viewport.css('box-sizing') === 'border-box') {
                height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom')) + parseFloat(slider.viewport.css('border-top-width')) + parseFloat(slider.viewport.css('border-bottom-width'));
            } else if (slider.viewport.css('box-sizing') === 'padding-box') {
                height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom'));
            }
            return height;
        };
        var getViewportMaxWidth = function () {
            var width = '100%';
            if (slider.settings.slideWidth > 0) {
                if (slider.settings.mode === 'horizontal') {
                    width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
                } else {
                    width = slider.settings.slideWidth;
                }
            }
            return width;
        };
        var getSlideWidth = function () {
            var newElWidth = slider.settings.slideWidth, wrapWidth = slider.viewport.width();
            if (slider.settings.slideWidth === 0 || (slider.settings.slideWidth > wrapWidth && !slider.carousel) || slider.settings.mode === 'vertical') {
                newElWidth = wrapWidth;
            } else if (slider.settings.maxSlides > 1 && slider.settings.mode === 'horizontal') {
                if (wrapWidth > slider.maxThreshold) {
                    return newElWidth;
                } else if (wrapWidth < slider.minThreshold) {
                    newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
                } else if (slider.settings.shrinkItems) {
                    newElWidth = Math.floor((wrapWidth + slider.settings.slideMargin) / (Math.ceil((wrapWidth + slider.settings.slideMargin) / (newElWidth + slider.settings.slideMargin))) - slider.settings.slideMargin);
                }
            }
            return newElWidth;
        };
        var getNumberSlidesShowing = function () {
            var slidesShowing = 1, childWidth = null;
            if (slider.settings.mode === 'horizontal' && slider.settings.slideWidth > 0) {
                if (slider.viewport.width() < slider.minThreshold) {
                    slidesShowing = slider.settings.minSlides;
                } else if (slider.viewport.width() > slider.maxThreshold) {
                    slidesShowing = slider.settings.maxSlides;
                } else {
                    childWidth = slider.children.first().width() + slider.settings.slideMargin;
                    slidesShowing = Math.floor((slider.viewport.width() + slider.settings.slideMargin) / childWidth);
                }
            } else if (slider.settings.mode === 'vertical') {
                slidesShowing = slider.settings.minSlides;
            }
            return slidesShowing;
        };
        var getPagerQty = function () {
            var pagerQty = 0, breakPoint = 0, counter = 0;
            if (slider.settings.moveSlides > 0) {
                if (slider.settings.infiniteLoop) {
                    pagerQty = Math.ceil(slider.children.length / getMoveBy());
                } else {
                    while (breakPoint < slider.children.length) {
                        ++pagerQty;
                        breakPoint = counter + getNumberSlidesShowing();
                        counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
                    }
                }
            } else {
                pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
            }
            return pagerQty;
        };
        var getMoveBy = function () {
            if (slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()) {
                return slider.settings.moveSlides;
            }
            return getNumberSlidesShowing();
        };
        var setSlidePosition = function () {
            var position, lastChild, lastShowingIndex;
            if (slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop) {
                if (slider.settings.mode === 'horizontal') {
                    lastChild = slider.children.last();
                    position = lastChild.position();
                    setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.outerWidth())), 'reset', 0);
                } else if (slider.settings.mode === 'vertical') {
                    lastShowingIndex = slider.children.length - slider.settings.minSlides;
                    position = slider.children.eq(lastShowingIndex).position();
                    setPositionProperty(-position.top, 'reset', 0);
                }
            } else {
                position = slider.children.eq(slider.active.index * getMoveBy()).position();
                if (slider.active.index === getPagerQty() - 1) {
                    slider.active.last = true;
                }
                if (position !== undefined) {
                    if (slider.settings.mode === 'horizontal') {
                        setPositionProperty(-position.left, 'reset', 0);
                    } else if (slider.settings.mode === 'vertical') {
                        setPositionProperty(-position.top, 'reset', 0);
                    }
                }
            }
        };
        var setPositionProperty = function (value, type, duration, params) {
            var animateObj, propValue;
            if (slider.usingCSS) {
                propValue = slider.settings.mode === 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
                el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
                if (type === 'slide') {
                    el.css(slider.animProp, propValue);
                    if (duration !== 0) {
                        el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function (e) {
                            if (!$(e.target).is(el)) {
                                return;
                            }
                            el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
                            updateAfterSlideTransition();
                        });
                    } else {
                        updateAfterSlideTransition();
                    }
                } else if (type === 'reset') {
                    el.css(slider.animProp, propValue);
                } else if (type === 'ticker') {
                    el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
                    el.css(slider.animProp, propValue);
                    if (duration !== 0) {
                        el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function (e) {
                            if (!$(e.target).is(el)) {
                                return;
                            }
                            el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
                            setPositionProperty(params.resetValue, 'reset', 0);
                            tickerLoop();
                        });
                    } else {
                        setPositionProperty(params.resetValue, 'reset', 0);
                        tickerLoop();
                    }
                }
            } else {
                animateObj = {};
                animateObj[slider.animProp] = value;
                if (type === 'slide') {
                    el.animate(animateObj, duration, slider.settings.easing, function () {
                        updateAfterSlideTransition();
                    });
                } else if (type === 'reset') {
                    el.css(slider.animProp, value);
                } else if (type === 'ticker') {
                    el.animate(animateObj, duration, 'linear', function () {
                        setPositionProperty(params.resetValue, 'reset', 0);
                        tickerLoop();
                    });
                }
            }
        };
        var populatePager = function () {
            var pagerHtml = '', linkContent = '', pagerQty = getPagerQty();
            for (var i = 0; i < pagerQty; i++) {
                linkContent = '';
                if (slider.settings.buildPager && $.isFunction(slider.settings.buildPager) || slider.settings.pagerCustom) {
                    linkContent = slider.settings.buildPager(i);
                    slider.pagerEl.addClass('bx-custom-pager');
                } else {
                    linkContent = i + 1;
                    slider.pagerEl.addClass('bx-default-pager');
                }
                pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
            }
            slider.pagerEl.html(pagerHtml);
        };
        var appendPager = function () {
            if (!slider.settings.pagerCustom) {
                slider.pagerEl = $('<div class="bx-pager" />');
                if (slider.settings.pagerSelector) {
                    $(slider.settings.pagerSelector).html(slider.pagerEl);
                } else {
                    slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
                }
                populatePager();
            } else {
                slider.pagerEl = $(slider.settings.pagerCustom);
            }
            slider.pagerEl.on('click touchend', 'a', clickPagerBind);
        };
        var appendControls = function () {
            slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
            slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
            slider.controls.next.bind('click touchend', clickNextBind);
            slider.controls.prev.bind('click touchend', clickPrevBind);
            if (slider.settings.nextSelector) {
                $(slider.settings.nextSelector).append(slider.controls.next);
            }
            if (slider.settings.prevSelector) {
                $(slider.settings.prevSelector).append(slider.controls.prev);
            }
            if (!slider.settings.nextSelector && !slider.settings.prevSelector) {
                slider.controls.directionEl = $('<div class="bx-controls-direction" />');
                slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
                slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
            }
        };
        var appendControlsAuto = function () {
            slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
            slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
            slider.controls.autoEl = $('<div class="bx-controls-auto" />');
            slider.controls.autoEl.on('click', '.bx-start', clickStartBind);
            slider.controls.autoEl.on('click', '.bx-stop', clickStopBind);
            if (slider.settings.autoControlsCombine) {
                slider.controls.autoEl.append(slider.controls.start);
            } else {
                slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
            }
            if (slider.settings.autoControlsSelector) {
                $(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
            } else {
                slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
            }
            updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
        };
        var appendCaptions = function () {
            slider.children.each(function (index) {
                var title = $(this).find('img:first').attr('title');
                if (title !== undefined && ('' + title).length) {
                    $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
                }
            });
        };
        var clickNextBind = function (e) {
            e.preventDefault();
            if (slider.controls.el.hasClass('disabled')) {
                return;
            }
            if (slider.settings.auto && slider.settings.stopAutoOnClick) {
                el.stopAuto();
            }
            el.goToNextSlide();
        };
        var clickPrevBind = function (e) {
            e.preventDefault();
            if (slider.controls.el.hasClass('disabled')) {
                return;
            }
            if (slider.settings.auto && slider.settings.stopAutoOnClick) {
                el.stopAuto();
            }
            el.goToPrevSlide();
        };
        var clickStartBind = function (e) {
            el.startAuto();
            e.preventDefault();
        };
        var clickStopBind = function (e) {
            el.stopAuto();
            e.preventDefault();
        };
        var clickPagerBind = function (e) {
            var pagerLink, pagerIndex;
            e.preventDefault();
            if (slider.controls.el.hasClass('disabled')) {
                return;
            }
            if (slider.settings.auto && slider.settings.stopAutoOnClick) {
                el.stopAuto();
            }
            pagerLink = $(e.currentTarget);
            if (pagerLink.attr('data-slide-index') !== undefined) {
                pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
                if (pagerIndex !== slider.active.index) {
                    el.goToSlide(pagerIndex);
                }
            }
        };
        var updatePagerActive = function (slideIndex) {
            var len = slider.children.length;
            if (slider.settings.pagerType === 'short') {
                if (slider.settings.maxSlides > 1) {
                    len = Math.ceil(slider.children.length / slider.settings.maxSlides);
                }
                slider.pagerEl.html((slideIndex + 1) + slider.settings.pagerShortSeparator + len);
                return;
            }
            slider.pagerEl.find('a').removeClass('active');
            slider.pagerEl.each(function (i, el) {
                $(el).find('a').eq(slideIndex).addClass('active');
            });
        };
        var updateAfterSlideTransition = function () {
            if (slider.settings.infiniteLoop) {
                var position = '';
                if (slider.active.index === 0) {
                    position = slider.children.eq(0).position();
                } else if (slider.active.index === getPagerQty() - 1 && slider.carousel) {
                    position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
                } else if (slider.active.index === slider.children.length - 1) {
                    position = slider.children.eq(slider.children.length - 1).position();
                }
                if (position) {
                    if (slider.settings.mode === 'horizontal') {
                        setPositionProperty(-position.left, 'reset', 0);
                    } else if (slider.settings.mode === 'vertical') {
                        setPositionProperty(-position.top, 'reset', 0);
                    }
                }
            }
            slider.working = false;
            slider.settings.onSlideAfter.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
        };
        var updateAutoControls = function (state) {
            if (slider.settings.autoControlsCombine) {
                slider.controls.autoEl.html(slider.controls[state]);
            } else {
                slider.controls.autoEl.find('a').removeClass('active');
                slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
            }
        };
        var updateDirectionControls = function () {
            if (getPagerQty() === 1) {
                slider.controls.prev.addClass('disabled');
                slider.controls.next.addClass('disabled');
            } else if (!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd) {
                if (slider.active.index === 0) {
                    slider.controls.prev.addClass('disabled');
                    slider.controls.next.removeClass('disabled');
                } else if (slider.active.index === getPagerQty() - 1) {
                    slider.controls.next.addClass('disabled');
                    slider.controls.prev.removeClass('disabled');
                } else {
                    slider.controls.prev.removeClass('disabled');
                    slider.controls.next.removeClass('disabled');
                }
            }
        };
        var initAuto = function () {
            if (slider.settings.autoDelay > 0) {
                var timeout = setTimeout(el.startAuto, slider.settings.autoDelay);
            } else {
                el.startAuto();
                $(window).focus(function () {
                    el.startAuto();
                }).blur(function () {
                    el.stopAuto();
                });
            }
            if (slider.settings.autoHover) {
                el.hover(function () {
                    if (slider.interval) {
                        el.stopAuto(true);
                        slider.autoPaused = true;
                    }
                }, function () {
                    if (slider.autoPaused) {
                        el.startAuto(true);
                        slider.autoPaused = null;
                    }
                });
            }
        };
        var initTicker = function () {
            var startPosition = 0, position, transform, value, idx, ratio, property, newSpeed, totalDimens;
            if (slider.settings.autoDirection === 'next') {
                el.append(slider.children.clone().addClass('bx-clone'));
            } else {
                el.prepend(slider.children.clone().addClass('bx-clone'));
                position = slider.children.first().position();
                startPosition = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
            }
            setPositionProperty(startPosition, 'reset', 0);
            slider.settings.pager = false;
            slider.settings.controls = false;
            slider.settings.autoControls = false;
            if (slider.settings.tickerHover) {
                if (slider.usingCSS) {
                    idx = slider.settings.mode === 'horizontal' ? 4 : 5;
                    slider.viewport.hover(function () {
                        transform = el.css('-' + slider.cssPrefix + '-transform');
                        value = parseFloat(transform.split(',')[idx]);
                        setPositionProperty(value, 'reset', 0);
                    }, function () {
                        totalDimens = 0;
                        slider.children.each(function (index) {
                            totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
                        });
                        ratio = slider.settings.speed / totalDimens;
                        property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
                        newSpeed = ratio * (totalDimens - (Math.abs(parseInt(value))));
                        tickerLoop(newSpeed);
                    });
                } else {
                    slider.viewport.hover(function () {
                        el.stop();
                    }, function () {
                        totalDimens = 0;
                        slider.children.each(function (index) {
                            totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
                        });
                        ratio = slider.settings.speed / totalDimens;
                        property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
                        newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
                        tickerLoop(newSpeed);
                    });
                }
            }
            tickerLoop();
        };
        var tickerLoop = function (resumeSpeed) {
            var speed = resumeSpeed ? resumeSpeed : slider.settings.speed, position = {left: 0, top: 0},
                reset = {left: 0, top: 0}, animateProperty, resetValue, params;
            if (slider.settings.autoDirection === 'next') {
                position = el.find('.bx-clone').first().position();
            } else {
                reset = slider.children.first().position();
            }
            animateProperty = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
            resetValue = slider.settings.mode === 'horizontal' ? -reset.left : -reset.top;
            params = {resetValue: resetValue};
            setPositionProperty(animateProperty, 'ticker', speed, params);
        };
        var isOnScreen = function (el) {
            var win = $(window), viewport = {top: win.scrollTop(), left: win.scrollLeft()}, bounds = el.offset();
            viewport.right = viewport.left + win.width();
            viewport.bottom = viewport.top + win.height();
            bounds.right = bounds.left + el.outerWidth();
            bounds.bottom = bounds.top + el.outerHeight();
            return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
        };
        var keyPress = function (e) {
            var activeElementTag = document.activeElement.tagName.toLowerCase(), tagFilters = 'input|textarea',
                p = new RegExp(activeElementTag, ['i']), result = p.exec(tagFilters);
            if (result == null && isOnScreen(el)) {
                if (e.keyCode === 39) {
                    clickNextBind(e);
                    return false;
                } else if (e.keyCode === 37) {
                    clickPrevBind(e);
                    return false;
                }
            }
        };
        var initTouch = function () {
            slider.touch = {start: {x: 0, y: 0}, end: {x: 0, y: 0}};
            slider.viewport.bind('touchstart MSPointerDown pointerdown', onTouchStart);
            slider.viewport.on('click', '.bxslider a', function (e) {
                if (slider.viewport.hasClass('click-disabled')) {
                    e.preventDefault();
                    slider.viewport.removeClass('click-disabled');
                }
            });
        };
        var onTouchStart = function (e) {
            slider.controls.el.addClass('disabled');
            if (slider.working) {
                e.preventDefault();
                slider.controls.el.removeClass('disabled');
            } else {
                slider.touch.originalPos = el.position();
                var orig = e.originalEvent,
                    touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig];
                slider.touch.start.x = touchPoints[0].pageX;
                slider.touch.start.y = touchPoints[0].pageY;
                if (slider.viewport.get(0).setPointerCapture) {
                    slider.pointerId = orig.pointerId;
                    slider.viewport.get(0).setPointerCapture(slider.pointerId);
                }
                slider.viewport.bind('touchmove MSPointerMove pointermove', onTouchMove);
                slider.viewport.bind('touchend MSPointerUp pointerup', onTouchEnd);
                slider.viewport.bind('MSPointerCancel pointercancel', onPointerCancel);
            }
        };
        var onPointerCancel = function (e) {
            setPositionProperty(slider.touch.originalPos.left, 'reset', 0);
            slider.controls.el.removeClass('disabled');
            slider.viewport.unbind('MSPointerCancel pointercancel', onPointerCancel);
            slider.viewport.unbind('touchmove MSPointerMove pointermove', onTouchMove);
            slider.viewport.unbind('touchend MSPointerUp pointerup', onTouchEnd);
            if (slider.viewport.get(0).releasePointerCapture) {
                slider.viewport.get(0).releasePointerCapture(slider.pointerId);
            }
        };
        var onTouchMove = function (e) {
            var orig = e.originalEvent,
                touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig],
                xMovement = Math.abs(touchPoints[0].pageX - slider.touch.start.x),
                yMovement = Math.abs(touchPoints[0].pageY - slider.touch.start.y), value = 0, change = 0;
            if ((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX) {
                e.preventDefault();
            } else if ((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY) {
                e.preventDefault();
            }
            if (slider.settings.mode !== 'fade' && slider.settings.oneToOneTouch) {
                if (slider.settings.mode === 'horizontal') {
                    change = touchPoints[0].pageX - slider.touch.start.x;
                    value = slider.touch.originalPos.left + change;
                } else {
                    change = touchPoints[0].pageY - slider.touch.start.y;
                    value = slider.touch.originalPos.top + change;
                }
                setPositionProperty(value, 'reset', 0);
            }
        };
        var onTouchEnd = function (e) {
            slider.viewport.unbind('touchmove MSPointerMove pointermove', onTouchMove);
            slider.controls.el.removeClass('disabled');
            var orig = e.originalEvent,
                touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig], value = 0,
                distance = 0;
            slider.touch.end.x = touchPoints[0].pageX;
            slider.touch.end.y = touchPoints[0].pageY;
            if (slider.settings.mode === 'fade') {
                distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
                if (distance >= slider.settings.swipeThreshold) {
                    if (slider.touch.start.x > slider.touch.end.x) {
                        el.goToNextSlide();
                    } else {
                        el.goToPrevSlide();
                    }
                    el.stopAuto();
                }
            } else {
                if (slider.settings.mode === 'horizontal') {
                    distance = slider.touch.end.x - slider.touch.start.x;
                    value = slider.touch.originalPos.left;
                } else {
                    distance = slider.touch.end.y - slider.touch.start.y;
                    value = slider.touch.originalPos.top;
                }
                if (!slider.settings.infiniteLoop && ((slider.active.index === 0 && distance > 0) || (slider.active.last && distance < 0))) {
                    setPositionProperty(value, 'reset', 200);
                } else {
                    if (Math.abs(distance) >= slider.settings.swipeThreshold) {
                        if (distance < 0) {
                            el.goToNextSlide();
                        } else {
                            el.goToPrevSlide();
                        }
                        el.stopAuto();
                    } else {
                        setPositionProperty(value, 'reset', 200);
                    }
                }
            }
            slider.viewport.unbind('touchend MSPointerUp pointerup', onTouchEnd);
            if (slider.viewport.get(0).releasePointerCapture) {
                slider.viewport.get(0).releasePointerCapture(slider.pointerId);
            }
        };
        var resizeWindow = function (e) {
            if (!slider.initialized) {
                return;
            }
            if (slider.working) {
                window.setTimeout(resizeWindow, 10);
            } else {
                var windowWidthNew = $(window).width(), windowHeightNew = $(window).height();
                if (windowWidth !== windowWidthNew || windowHeight !== windowHeightNew) {
                    windowWidth = windowWidthNew;
                    windowHeight = windowHeightNew;
                    el.redrawSlider();
                    slider.settings.onSliderResize.call(el, slider.active.index);
                }
            }
        };
        var applyAriaHiddenAttributes = function (startVisibleIndex) {
            var numberOfSlidesShowing = getNumberSlidesShowing();
            if (slider.settings.ariaHidden && !slider.settings.ticker) {
                slider.children.attr('aria-hidden', 'true');
                slider.children.slice(startVisibleIndex, startVisibleIndex + numberOfSlidesShowing).attr('aria-hidden', 'false');
            }
        };
        var setSlideIndex = function (slideIndex) {
            if (slideIndex < 0) {
                if (slider.settings.infiniteLoop) {
                    return getPagerQty() - 1;
                } else {
                    return slider.active.index;
                }
            } else if (slideIndex >= getPagerQty()) {
                if (slider.settings.infiniteLoop) {
                    return 0;
                } else {
                    return slider.active.index;
                }
            } else {
                return slideIndex;
            }
        };
        el.goToSlide = function (slideIndex, direction) {
            var performTransition = true, moveBy = 0, position = {left: 0, top: 0}, lastChild = null, lastShowingIndex,
                eq, value, requestEl;
            slider.oldIndex = slider.active.index;
            slider.active.index = setSlideIndex(slideIndex);
            if (slider.working || slider.active.index === slider.oldIndex) {
                return;
            }
            slider.working = true;
            performTransition = slider.settings.onSlideBefore.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
            if (typeof(performTransition) !== 'undefined' && !performTransition) {
                slider.active.index = slider.oldIndex;
                slider.working = false;
                return;
            }
            if (direction === 'next') {
                if (!slider.settings.onSlideNext.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
                    performTransition = false;
                }
            } else if (direction === 'prev') {
                if (!slider.settings.onSlidePrev.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
                    performTransition = false;
                }
            }
            slider.active.last = slider.active.index >= getPagerQty() - 1;
            if (slider.settings.pager || slider.settings.pagerCustom) {
                updatePagerActive(slider.active.index);
            }
            if (slider.settings.controls) {
                updateDirectionControls();
            }
            if (slider.settings.mode === 'fade') {
                if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
                    slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
                }
                slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
                slider.children.eq(slider.active.index).css('zIndex', slider.settings.slideZIndex + 1).fadeIn(slider.settings.speed, function () {
                    $(this).css('zIndex', slider.settings.slideZIndex);
                    updateAfterSlideTransition();
                });
            } else {
                if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
                    slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
                }
                if (!slider.settings.infiniteLoop && slider.carousel && slider.active.last) {
                    if (slider.settings.mode === 'horizontal') {
                        lastChild = slider.children.eq(slider.children.length - 1);
                        position = lastChild.position();
                        moveBy = slider.viewport.width() - lastChild.outerWidth();
                    } else {
                        lastShowingIndex = slider.children.length - slider.settings.minSlides;
                        position = slider.children.eq(lastShowingIndex).position();
                    }
                } else if (slider.carousel && slider.active.last && direction === 'prev') {
                    eq = slider.settings.moveSlides === 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
                    lastChild = el.children('.bx-clone').eq(eq);
                    position = lastChild.position();
                } else if (direction === 'next' && slider.active.index === 0) {
                    position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
                    slider.active.last = false;
                } else if (slideIndex >= 0) {
                    requestEl = slideIndex * parseInt(getMoveBy());
                    position = slider.children.eq(requestEl).position();
                }
                if (typeof(position) !== 'undefined') {
                    value = slider.settings.mode === 'horizontal' ? -(position.left - moveBy) : -position.top;
                    setPositionProperty(value, 'slide', slider.settings.speed);
                } else {
                    slider.working = false;
                }
            }
            if (slider.settings.ariaHidden) {
                applyAriaHiddenAttributes(slider.active.index * getMoveBy());
            }
        };
        el.goToNextSlide = function () {
            if (!slider.settings.infiniteLoop && slider.active.last) {
                return;
            }
            var pagerIndex = parseInt(slider.active.index) + 1;
            el.goToSlide(pagerIndex, 'next');
        };
        el.goToPrevSlide = function () {
            if (!slider.settings.infiniteLoop && slider.active.index === 0) {
                return;
            }
            var pagerIndex = parseInt(slider.active.index) - 1;
            el.goToSlide(pagerIndex, 'prev');
        };
        el.startAuto = function (preventControlUpdate) {
            if (slider.interval) {
                return;
            }
            slider.interval = setInterval(function () {
                if (slider.settings.autoDirection === 'next') {
                    el.goToNextSlide();
                } else {
                    el.goToPrevSlide();
                }
            }, slider.settings.pause);
            if (slider.settings.autoControls && preventControlUpdate !== true) {
                updateAutoControls('stop');
            }
        };
        el.stopAuto = function (preventControlUpdate) {
            if (!slider.interval) {
                return;
            }
            clearInterval(slider.interval);
            slider.interval = null;
            if (slider.settings.autoControls && preventControlUpdate !== true) {
                updateAutoControls('start');
            }
        };
        el.getCurrentSlide = function () {
            return slider.active.index;
        };
        el.getCurrentSlideElement = function () {
            return slider.children.eq(slider.active.index);
        };
        el.getSlideElement = function (index) {
            return slider.children.eq(index);
        };
        el.getSlideCount = function () {
            return slider.children.length;
        };
        el.isWorking = function () {
            return slider.working;
        };
        el.redrawSlider = function () {
            slider.children.add(el.find('.bx-clone')).outerWidth(getSlideWidth());
            slider.viewport.css('height', getViewportHeight());
            if (!slider.settings.ticker) {
                setSlidePosition();
            }
            if (slider.active.last) {
                slider.active.index = getPagerQty() - 1;
            }
            if (slider.active.index >= getPagerQty()) {
                slider.active.last = true;
            }
            if (slider.settings.pager && !slider.settings.pagerCustom) {
                populatePager();
                updatePagerActive(slider.active.index);
            }
            if (slider.settings.ariaHidden) {
                applyAriaHiddenAttributes(slider.active.index * getMoveBy());
            }
        };
        el.destroySlider = function () {
            if (!slider.initialized) {
                return;
            }
            slider.initialized = false;
            $('.bx-clone', this).remove();
            slider.children.each(function () {
                if ($(this).data('origStyle') !== undefined) {
                    $(this).attr('style', $(this).data('origStyle'));
                } else {
                    $(this).removeAttr('style');
                }
            });
            if ($(this).data('origStyle') !== undefined) {
                this.attr('style', $(this).data('origStyle'));
            } else {
                $(this).removeAttr('style');
            }
            $(this).unwrap().unwrap();
            if (slider.controls.el) {
                slider.controls.el.remove();
            }
            if (slider.controls.next) {
                slider.controls.next.remove();
            }
            if (slider.controls.prev) {
                slider.controls.prev.remove();
            }
            if (slider.pagerEl && slider.settings.controls && !slider.settings.pagerCustom) {
                slider.pagerEl.remove();
            }
            $('.bx-caption', this).remove();
            if (slider.controls.autoEl) {
                slider.controls.autoEl.remove();
            }
            clearInterval(slider.interval);
            if (slider.settings.responsive) {
                $(window).unbind('resize', resizeWindow);
            }
            if (slider.settings.keyboardEnabled) {
                $(document).unbind('keydown', keyPress);
            }
            $(this).removeData('bxSlider');
        };
        el.reloadSlider = function (settings) {
            if (settings !== undefined) {
                options = settings;
            }
            el.destroySlider();
            init();
            $(el).data('bxSlider', this);
        };
        init();
        $(el).data('bxSlider', this);
        return this;
    };
})(jQuery);
$(document).ready(function () {
    $('.close_modal, .overlay').click(function () {
        $('.popup3, .popup4, .overlay').css({'opacity': '0', 'visibility': 'hidden'});
        $('.popup3 > .fofm textarea').val('');
        $(':input', '.fofm').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
        $(".fofm input[type=submit]").attr('disabled', 'disabled');
    });
    $('.call-me-button-head').click(function (e) {
        e.preventDefault();
        $('.popup3, .overlay').css({'opacity': '1', 'visibility': 'visible'});
    });
    $(document).ready(function () {
        $('.phoneJs').click(function () {
            $('.popup3, .overlay').css({'opacity': '1', 'visibility': 'visible'});
        });
    });
    $(document).keyup(function (event) {
        if (event.which == '27') {
            $(".popup3, .popup4, .overlay").css({'opacity': '0', 'visibility': 'hidden'});
        }
    });
});
var mouse = true;
var popUpBy = true;
var checkCode = true;
var todayBayVal = true;
var bPhone = true;
var mBrowser = true;
var internetEx = true;
var safariWin = true;
var fireFox = true;
var lastPackNum = 'one';
$('.bxslider').bxSlider({adaptiveHeight: true, mode: 'fade'});
$(document).ready(function () {
    var countryCodeLocation = $("input[name='country_code']").val();

    function codeCheck() {
        var $code = $(".check_popup_code_input"), $message = $(".js-message"), $button = $(".button-popup-first");
        var codeValues = /^\d+$/;
        $button.on("click", function (ev) {
            ev.preventDefault();
            var $codeLenght = $(".check_popup_code_input").val().length;
            var codeValue = $code.val();
            if (codeValues.test(codeValue) && $codeLenght == 15) {
                return $message.text("Данный код верен. Cпасибо, что выбрали нашу продукцию!");
            } else if ($code.val() !== '' && $code.val() !== ' ' && $code.val() !== '  ') {
                return $message.text("К сожалению, данный код не найден! Вероятнее всего, вы приобрели поддельный продукт.");
            } else {
                return $message.text("Введите, пожалуйста, код.");
            }
        });
    };

    function NowTime() {
        var d = new Date();
        var result = (d.getHours() * 60 + d.getMinutes()) * 2 + 2000;
        $('#todayBay').html(result);
    };

    function check() {
        if (checkCode == true) {
            codeCheck();
        }
        if (todayBayVal == true) {
            NowTime();
            setInterval(NowTime, 1000);
        }
    };check();
});