$(document).ready(function() {

  var animating = false;
  var cardsCounter = 0;
  var numOfCards = 5;
  var decisionVal = 80;
  var pullDeltaX = 0;
  var deg = 0;
  var $card, $cardReject, $cardLike;
  
  function pullChange() {
    animating = true;
    $card.css("transform", "translateX("+ pullDeltaX +"px)");

    var opacity = pullDeltaX / 100;
    var rejectOpacity = (opacity >= 0) ? 0 : Math.abs(opacity);
    var likeOpacity = (opacity <= 0) ? 0 : opacity;
    $cardReject.css("opacity", rejectOpacity/2);
    $cardLike.css("opacity", likeOpacity/2);
  };

  function release() {
    console.log(numOfCards);
    if (pullDeltaX >= decisionVal) {
      $card.addClass("to-right");
      document.getElementById('e'+$card[0].querySelector(".f").value).classList.remove("card_like", "card_dislike");
      document.getElementById('e'+$card[0].querySelector(".f").value).classList.add("card_like");
      document.getElementById('f'+$card[0].querySelector(".f").value).querySelector(".demo__card__top").classList.remove("demo__card__like", "demo__card__dislike");
      document.getElementById('f'+$card[0].querySelector(".f").value).querySelector(".demo__card__top").classList.add("demo__card__like");
    } else if (pullDeltaX <= -decisionVal) {
      $card.addClass("to-left");
      document.getElementById('e'+$card[0].querySelector(".f").value).classList.remove("card_like", "card_dislike");
      document.getElementById('e'+$card[0].querySelector(".f").value).classList.add("card_dislike");
      document.getElementById('f'+$card[0].querySelector(".f").value).querySelector(".demo__card__top").classList.remove("demo__card__like", "demo__card__dislike");
      document.getElementById('f'+$card[0].querySelector(".f").value).querySelector(".demo__card__top").classList.add("demo__card__dislike");
    }

    if (Math.abs(pullDeltaX) >= decisionVal) {
      $card.addClass("inactive");
      setTimeout(function() {
        
        $card.addClass("below").removeClass("inactive to-left to-right");
        cardsCounter++;
        if (cardsCounter === numOfCards) {
          cardsCounter = 0;
          $(".demo__card").removeClass("below");
        }
      }, 300);
    }

    if (Math.abs(pullDeltaX) < decisionVal) {
      $card.addClass("reset");
    }

    setTimeout(function() {
      $card.attr("style", "").removeClass("reset")
        .find(".demo__card__choice").attr("style", "");

      pullDeltaX = 0;
      animating = false;
    }, 300);
  };

  $(document).on("mousedown touchstart", ".demo__card:not(.inactive)", function(e) {
    if (animating) return;

    $card = $(this);
    $cardReject = $(".demo__card__choice.m--reject", $card);
    $cardLike = $(".demo__card__choice.m--like", $card);
    var startX =  e.pageX || e.originalEvent.touches[0].pageX;

    $(document).on("mousemove touchmove", function(e) {
      var x = e.pageX || e.originalEvent.touches[0].pageX;
      pullDeltaX = (x - startX);
      if (!pullDeltaX) return;
      pullChange();
    });

    $(document).on("mouseup touchend", function() {
      $(document).off("mousemove touchmove mouseup touchend");
      if (!pullDeltaX) return; // prevents from rapid click events
      release();
    });
  });

});
function addcards(){
  numOfCards++;
}