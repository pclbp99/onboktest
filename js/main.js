$(document).ready(function() {
    const scrollThreshold = 800;
    let lastScrollTop = 0;
    const $scrollElement = $('header');

    $(window).scroll(function() {
        const currentScrollTop = $(this).scrollTop();

        if (currentScrollTop > scrollThreshold) {
            if (currentScrollTop > lastScrollTop) {
                $scrollElement.fadeIn();
            } else {
                $scrollElement.fadeOut();
            }
        } else {
            $scrollElement.fadeOut();
        }

        lastScrollTop = currentScrollTop;
    });
});