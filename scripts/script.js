//console.log( window.location.hash);

var hash = window.location.hash

if (hash) {
    var newStr = hash.substr(1, hash.length);
    var initId = $('[data-id="' + newStr + '"]');
    var title = initId.attr('data-title');
    var name = initId.attr('data-name');
    var tools = initId.attr('tools');
    var id = initId.attr('data-id');
    $('#content iframe').attr('src', './' + newStr + '/index.html');
    $('.trigger').removeClass('current');
    initId.addClass('current');
    $('#current-title').html(title);
    $('#current-name').html(name);
    $('#current-tools').html(tools);
    $('body').attr('class', '' + id + '');
}

$('.trigger').click(function () {
    var id = $(this).attr('data-id');
    var name = $(this).attr('data-name');
    var title = $(this).attr('data-title');
    var data_color = $(this).attr('data-color');
    $('#current-name').html(name);
    $('#current-title').html(title);
    $('#current-tools').html(tools);
    $('#content iframe').attr('src', './' + id + '/index.html');
    // $('#current-title').attr('style', data_color);
    $('.trigger').removeClass('current');
    $(this).addClass('current');
    $('body').attr('class', 'not-home ' + id + '');
});


// $('.next').click(function () {
//     if ($('.current').is(':last-child')) {
//         $('.next').addClass('disabled');
//     } else {
//         var id = $('.current').next('li').attr('data-id');
//         var title = $('.current').next('li').attr('data-title');
//         var data_color = $('.current').next('li').attr('data-color');
//         $('#current-title').html(title);
//         $('#content iframe').attr('src', './' + id + '/index.html');
//         $('#current-title').attr('style', data_color);
//         $('.current').removeClass('current').next('li').addClass('current');
//         $('.next').removeClass('disabled');
//     }
// });


// $('.prev').click(function () {
//     if ($('.current').is(':first-child')) {
//         $('.prev').addClass('disabled');
//     } else {
//         var id = $('.current').prev('li').attr('data-id');
//         var title = $('.current').prev('li').attr('data-title');
//         var data_color = $('.current').prev('li').attr('data-color');
//         $('#current-title').html(title);
//         $('#content iframe').attr('src', './' + id + '/index.html');
//         $('#current-title').attr('style', data_color);
//         $('.current').removeClass('current').prev('li').addClass('current');
//         $('.prev').removeClass('disabled');
//     }
// });
