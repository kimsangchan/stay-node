  
  const title = document.getElementById("title");
  const stay = document.getElementById("stay");
  const outside = document.getElementById("outside");
  const empty = document.getElementById("empty");
  const vacation = document.getElementById("vacation");
handleStay();
  function handleStay(){
        title.innerText = '재 실 중';
        stay.style.color = "#fff";
        outside.style.color = "#A1A1A1";
        empty.style.color = "#A1A1A1";
        vacation.style.color = "#A1A1A1";
  }
    function handleOut(){
        title.innerText = '외 출 중';
        stay.style.color = "#A1A1A1";
        outside.style.color = "#fff";
        empty.style.color = "#A1A1A1";
        vacation.style.color = "#A1A1A1";
  }
    function handleAbsence(){
        title.innerText = '부 재 중';
        stay.style.color = "#A1A1A1";
        outside.style.color = "#A1A1A1";
        empty.style.color = "#fff";
        vacation.style.color = "#A1A1A1";
  }
    function handleVacation(){
        title.innerText = '휴 가 중';
        stay.style.color = "#A1A1A1";
        outside.style.color = "#A1A1A1";
        empty.style.color = "#A1A1A1";
        vacation.style.color = "#fff";
  }

$(window).scroll(function() {
    var heroHeight = $('header').height();
    var yPosition = $(document).scrollTop();
    
      
    if (yPosition <= heroHeight) {
      var effectFactor = yPosition / heroHeight;
      var rotation = effectFactor * (Math.PI / 2 - Math.asin( (heroHeight - yPosition) / heroHeight ));
      $('.hero').css({
        '-webkit-transform': 'rotateX('+rotation+'rad)',
        'transform': 'rotateX('+rotation+'rad)',
      })
      .find('.overlay').css('opacity', effectFactor);
    }
    
    
    /**
     * Sticky nav-bar
     */
    if (yPosition <= heroHeight) {
      $('nav').removeClass('fixed');
    } else {
      $('nav').addClass('fixed');
    }
    
  });

