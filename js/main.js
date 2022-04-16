$(function (){
    'use strict';
    var winH = $(window).height(),
        upperH =$('.upper-bar').innerHight(),
        navH = $('navbar').innerHight();
     $('.slider').height(winH - (upperH + navH));
});