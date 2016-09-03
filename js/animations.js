$(document).ready(function() {
    $( '#tweet-controls' ).hide();
    $('.tweet-compose').on('focusin', function() {
        $(this).animate({height: '5em', opacity: 1});
        $('#tweet-controls').show();
    })


    $('.tweet-actions').animate({
        opacity: 0
    }, 0);

    $('.tweet-compose').on('keypress keyup keydown', function() {
        var currentCount = 140 - $(this).val().length;

        $('#char-count').text(currentCount);
        if (currentCount > 10) {
            $('#char-count').css("color", '#999');
        } else {
            $('#char-count').css("color", 'red');
        }

        if (currentCount < 0) {
            $('#tweet-submit').attr('disabled', true);
        } else {
            $('#tweet-submit').attr('disabled', false);
        }
    })

    $('#tweet-submit').on('click', function() {
        var newMessage = $(' .tweet-compose ').val();
        $('#tweet-controls').hide();
        $('.tweet-compose').animate({height: '2.5em'});
        $('#stream').prepend(
            '<div class="tweet">' +
            '<div class="content">' +
            '<img class="avatar" src="img/damenleeturks.jpg" />' +
            '<strong class="fullname">My BFF</strong>' +
            '<span class="username">@mybff</span>' +
            '<p class="tweet-text">' + newMessage + '</p>' +
            '<div class="tweet-actions">' +
            '<ul>' +
            '<li><span class="icon action-reply"></span> Reply</li>' +
            '<li><span class="icon action-retweet"></span> Retweet</li>' +
            '<li><span class="icon action-favorite"></span> Favorite</li>' +
            '<li><span class="icon action-more"></span> More</li>' +
            '</ul>' +
            '</div>' +
            '<div class="stats">' +
            '<div class="retweets">' +
            '<p class="num-retweets">30</p>' +
            '<p>RETWEETS</p>' +
            '</div>' +
            '<div class="favorites">' +
            '<p class="num-favorites">6</p>' +
            '<p>FAVORITES</p>' +
            '</div>' +
            '<div class="users-interact">' +
            '<div>' +
            '<img src="img/alagoon.jpg" />' +
            '<img src="img/vklimenko.jpg" />' +
            '</div>' +
            '</div>' +
            '<div class="time">' +
            '1:04 PM - 19 Sep 13' +
            '</div>' +
            '</div>' +
            '<div class="reply">' +
            '<img class="avatar" src="img/alagoon.jpg" />' +
            '<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>' +
            '</div>' +
            '</div>' +
            '</div>');




            $('.tweet').hover(function() {
                $(this).find(".tweet-actions").animate({
                    opacity: 1
                }, 400, "linear");
            }, function() {
                $(this).find(".tweet-actions").animate({
                    opacity: 0
                }, 200, "linear");
            });

            $ ( '.stat-wrapper' ).hide();

            $( '.tweet' ).on( 'click', function() {
              $( this ).find( '.stat-wrapper' ).animate({height:'toggle', opacity:1});
            })


    });
    $('.tweet').hover(function() {
        $(this).find(".tweet-actions").animate({
            opacity: 1
        }, 400, "linear");
    }, function() {
        $(this).find(".tweet-actions").animate({
            opacity: 0
        }, 200, "linear");
    });

    $ ( '.stat-wrapper' ).hide();

    $( '.tweet' ).on( 'click', function() {
      $( this ).find( '.stat-wrapper' ).animate({height:'toggle', opacity:1});
    })

});
