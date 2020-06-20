function watanabe1(){
  window.location.href = "watanabe1.html";
}

function imamura1(){
  window.location.href = "imamura1.html";
}

function yanazawa1(){
  window.location.href = "yanazawa1.html";
}

function kansai1(){
  window.location.href = "kansai1.html";
}

function chiba1(){
  window.location.href = "chiba1.html";
}

function showElementAnimation() {

  var element = document.getElementsByClassName('aaa');


  var showTiming = window.innerHeight > 768 ? 200 : 40;
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;

  for(var i=0;i<element.length;i++) { var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
      element[i].classList.add('is-show');
    } else if(scrollY + windowH < elemY) {

      element[i].classList.remove('is-show');
    }
  }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);

function watanabe1(){
  window.location.href = "watanabe1.html";
}
