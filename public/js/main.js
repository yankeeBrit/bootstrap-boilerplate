"use strict";$(document).ready(function(){var n=$(".navbar").outerHeight();$(".navbar__list-item-link").on("click",function(t){t.preventDefault(),i();var a=$(this.hash).offset().top-n+1;$("html, body").animate({scrollTop:a},500)}),$(".navbar__toggle").on("click",function(t){$(this).toggleClass("navbar__toggle--open"),$(".navbar__list").slideToggle("fast")});var i=function(){$(".navbar__toggle").is(":visible")||($(".navbar__toggle").removeClass("navbar__toggle--open"),$(".navbar__list").removeAttr("style"))},t=function(){i()},a=function(){var i=$(window).scrollTop();$(".navbar__list-item-link").each(function(){var t=$(this),a=$(t.attr("href"));a.position().top<=i+n&&a.position().top+a.outerHeight()>i+n?($(".navbar__list a").removeClass("navbar__list-item-link--active"),t.addClass("navbar__list-item-link--active")):t.removeClass("navbar__list-item-link--active")})};t(),$(window).on("resize",t),a(),$(window).on("scroll",a)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJuYXZiYXJIZWlnaHQiLCJvdXRlckhlaWdodCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzZXRNb2JpbGVOYXYiLCJlbGVtUG9zIiwidGhpcyIsImhhc2giLCJvZmZzZXQiLCJ0b3AiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwidG9nZ2xlQ2xhc3MiLCJzbGlkZVRvZ2dsZSIsImlzIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmVBdHRyIiwib25XaW5kb3dSZXNpemUiLCJvbldpbmRvd1Njcm9sbCIsInNjcm9sbFBvcyIsIndpbmRvdyIsImVhY2giLCJfdGhpcyIsInNlY3Rpb24iLCJhdHRyIiwicG9zaXRpb24iLCJhZGRDbGFzcyJdLCJtYXBwaW5ncyI6IkFBQUEsYUFFQUEsRUFBQUMsVUFBQUMsTUFBQSxXQUNBLElBQUFDLEVBQUFILEVBQUEsV0FBQUksY0FFQUosRUFBQSwyQkFBQUssR0FBQSxRQUFBLFNBQUFDLEdBQ0FBLEVBQUFDLGlCQUVBQyxJQUVBLElBQ0FDLEVBREFULEVBQUFVLEtBQUFDLE1BQ0FDLFNBQUFDLElBQUFWLEVBQUEsRUFFQUgsRUFBQSxjQUFBYyxRQUFBLENBQ0FDLFVBQUFOLEdBQ0EsT0FHQVQsRUFBQSxtQkFBQUssR0FBQSxRQUFBLFNBQUFDLEdBQ0FOLEVBQUFVLE1BQUFNLFlBQUEsd0JBQ0FoQixFQUFBLGlCQUFBaUIsWUFBQSxVQUdBLElBQUFULEVBQUEsV0FFQVIsRUFBQSxtQkFBQWtCLEdBQUEsY0FDQWxCLEVBQUEsbUJBQUFtQixZQUFBLHdCQUNBbkIsRUFBQSxpQkFBQW9CLFdBQUEsV0FJQUMsRUFBQSxXQUNBYixLQUdBYyxFQUFBLFdBQ0EsSUFBQUMsRUFBQXZCLEVBQUF3QixRQUFBVCxZQUVBZixFQUFBLDJCQUFBeUIsS0FBQSxXQUNBLElBQUFDLEVBQUExQixFQUFBVSxNQUNBaUIsRUFBQTNCLEVBQUEwQixFQUFBRSxLQUFBLFNBRUFELEVBQUFFLFdBQUFoQixLQUFBVSxFQUFBcEIsR0FBQXdCLEVBQUFFLFdBQUFoQixJQUFBYyxFQUFBdkIsY0FBQW1CLEVBQUFwQixHQUNBSCxFQUFBLG1CQUFBbUIsWUFBQSxrQ0FDQU8sRUFBQUksU0FBQSxtQ0FFQUosRUFBQVAsWUFBQSxxQ0FLQUUsSUFDQXJCLEVBQUF3QixRQUFBbkIsR0FBQSxTQUFBZ0IsR0FFQUMsSUFDQXRCLEVBQUF3QixRQUFBbkIsR0FBQSxTQUFBaUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICB2YXIgbmF2YmFySGVpZ2h0ID0gJCgnLm5hdmJhcicpLm91dGVySGVpZ2h0KCk7XG5cbiAgJCgnLm5hdmJhcl9fbGlzdC1pdGVtLWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHJlc2V0TW9iaWxlTmF2KCk7XG5cbiAgICB2YXIgZWxlbSA9ICQodGhpcy5oYXNoKSxcbiAgICAgICAgZWxlbVBvcyA9IGVsZW0ub2Zmc2V0KCkudG9wIC0gbmF2YmFySGVpZ2h0ICsgMTtcblxuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgIHNjcm9sbFRvcDogZWxlbVBvc1xuICAgIH0sIDUwMCk7XG4gIH0pO1xuXG4gICQoJy5uYXZiYXJfX3RvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnbmF2YmFyX190b2dnbGUtLW9wZW4nKTtcbiAgICAkKCcubmF2YmFyX19saXN0Jykuc2xpZGVUb2dnbGUoJ2Zhc3QnKTtcbiAgfSk7XG5cbiAgdmFyIHJlc2V0TW9iaWxlTmF2ID0gZnVuY3Rpb24gcmVzZXRNb2JpbGVOYXYoKSB7XG4gICAgLy9JZiBkZXNrdG9wLCBjbG9zZSBtb2JpbGUgbmF2XG4gICAgaWYgKCEkKCcubmF2YmFyX190b2dnbGUnKS5pcygnOnZpc2libGUnKSkge1xuICAgICAgJCgnLm5hdmJhcl9fdG9nZ2xlJykucmVtb3ZlQ2xhc3MoJ25hdmJhcl9fdG9nZ2xlLS1vcGVuJyk7XG4gICAgICAkKCcubmF2YmFyX19saXN0JykucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIG9uV2luZG93UmVzaXplID0gZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoKSB7XG4gICAgcmVzZXRNb2JpbGVOYXYoKTtcbiAgfTtcblxuICB2YXIgb25XaW5kb3dTY3JvbGwgPSBmdW5jdGlvbiBvbldpbmRvd1Njcm9sbCgpIHtcbiAgICB2YXIgc2Nyb2xsUG9zID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgJCgnLm5hdmJhcl9fbGlzdC1pdGVtLWxpbmsnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgc2VjdGlvbiA9ICQoX3RoaXMuYXR0cignaHJlZicpKTtcblxuICAgICAgaWYgKHNlY3Rpb24ucG9zaXRpb24oKS50b3AgPD0gc2Nyb2xsUG9zICsgbmF2YmFySGVpZ2h0ICYmIHNlY3Rpb24ucG9zaXRpb24oKS50b3AgKyBzZWN0aW9uLm91dGVySGVpZ2h0KCkgPiBzY3JvbGxQb3MgKyBuYXZiYXJIZWlnaHQpIHtcbiAgICAgICAgJCgnLm5hdmJhcl9fbGlzdCBhJykucmVtb3ZlQ2xhc3MoJ25hdmJhcl9fbGlzdC1pdGVtLWxpbmstLWFjdGl2ZScpO1xuICAgICAgICBfdGhpcy5hZGRDbGFzcygnbmF2YmFyX19saXN0LWl0ZW0tbGluay0tYWN0aXZlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5yZW1vdmVDbGFzcygnbmF2YmFyX19saXN0LWl0ZW0tbGluay0tYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgb25XaW5kb3dSZXNpemUoKTtcbiAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBvbldpbmRvd1Jlc2l6ZSk7XG5cbiAgb25XaW5kb3dTY3JvbGwoKTtcbiAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBvbldpbmRvd1Njcm9sbCk7XG59KTsiXX0=
