/*******************about*********************/

  $(".my-about").click(function(){
      $("html,body").animate({
          scrollTop:$("#section-about").offset().top-125
      },3000)
     
 })
    
/************************scroll*******************/

  $(window).scroll(function()
{
    if($(this).scrollTop()>= 10 )
        {
            $("#return-to-top ").show();
        }
    else
        {
            $("#return-to-top ").hide();
        }
});

$("#return-to-top ").click(function()
    {
        $("html,body").animate({scrollTop:0},2000)
    })

/******************************/
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-left: 0.08em solid #17a2b8 }";
        document.body.appendChild(css);
    };


/*$(window).load(function(){
    $("body").css("overflow","auto");
    $(".loading .spinner").fadeOut(2000);
});*/

/*****medicin***/

$(window).scroll(function(){
    
    $(".cat").slideDown(2000)
})
/***pain***/
var sel


$(".showR").click(function (event) {
    event.preventDefault();
    var gend = document.getElementsByName("gen");


    for (let i = 0; i < gend.length; i++) {
        if (gend[i].checked) {
            sel = gend[i].value;
            $(".toType").slideUp(1000);
            $(".showR").fadeOut(1000);

            break;
        }
    }


    if (sel == "option1") {
        $(".man").slideDown(1000);
        $(".symK").click(function (event) {
            event.preventDefault();
            var selectedPart = $(".manSel").find(":selected").val();
            console.log(selectedPart)
            if (selectedPart == 1) {
                $(".man").slideUp(2000);
                $(".sel1").animate({
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }, 1000);
                 $(".showL").fadeIn(1000);
            } else if (selectedPart == 2) {

                $(".man").slideUp(2000);
                $(".sel2").animate({
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }, 1000);
 $(".showL").fadeIn(1000);
            } else if (selectedPart == 3) {

                $(".man").slideUp(2000);
                $(".sel3").animate({
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }, 1000);
 $(".showL").fadeIn(1000);
            } else if (selectedPart == 4) {

                $(".man").slideUp(2000);
                $(".sel4").animate({
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }, 1000);
 $(".showL").fadeIn(1000);
            } else if (selectedPart == 5) {

                $(".man").slideUp(2000);
                $(".sel5").animate({
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }, 1000);
 $(".showL").fadeIn(1000);
            } else if (selectedPart == 6) {

                $(".man").slideUp(2000);
                $(".sel6").animate({
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }, 1000);
 $(".showL").fadeIn(1000);
            } else if (selectedPart == 7) {

                $(".man").slideUp(2000);
                $(".sel7").animate({
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }, 1000);
 $(".showL").fadeIn(1000);
            } else if (selectedPart == 8) {

                $(".man").slideUp(2000);
                $(".sel8").animate({
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }, 1000);
 $(".showL").fadeIn(1000);
            }


            $(".symK").fadeOut(1000)



        })

    } else if (sel == "option2") {
        console.log("wes")

        $(".woman").slideDown(2000);
        $(".symK").click(function (event) {
            event.preventDefault();
            var selectedPart = $(".woSel").find(":selected").val();
            console.log(selectedPart)
            if (selectedPart == 1) {
                $(".woman").slideUp(2000);
                $(".sel1wo").animate({
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }, 1000);
                 $(".showL").fadeIn(1000);
            } else if (selectedPart == 2) {
                console.log("dfgvg")
                $(".woman").slideUp(2000);
                $(".sel2wo").animate({
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }, 1000);
 $(".showL").fadeIn(1000);
            } else if (selectedPart == 3) {

                $(".woman").slideUp(2000);
                $(".sel3wo").animate({
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }, 1000);
 $(".showL").fadeIn(1000);
            } else if (selectedPart == 4) {

                $(".woman").slideUp(2000);
                $(".sel4wo").animate({
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }, 1000);
 $(".showL").fadeIn(1000);
            } else if (selectedPart == 5) {

                $(".woman").slideUp(2000);
                $(".sel5wo").animate({
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }, 1000);
 $(".showL").fadeIn(1000);
            } else if (selectedPart == 6) {

                $(".woman").slideUp(2000);
                $(".sel6wo").animate({
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }, 1000);
 $(".showL").fadeIn(1000);
            } else if (selectedPart == 7) {

                $(".woman").slideUp(2000);
                $(".sel7wo").animate({
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }, 1000);
 $(".showL").fadeIn(1000);
            } else if (selectedPart == 8) {

                $(".woman").slideUp(2000);
                $(".sel8wo").animate({
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }, 1000);
 $(".showL").fadeIn(1000);
            }


            $(".symK").fadeOut(1000)



        })

    } else {
        $(".child").slideDown(2000);
        $(".symK").click(function (event) {
            event.preventDefault();
            var selectedPart = $(".childSel").find(":selected").val();
            console.log(selectedPart)
            if (selectedPart == 1) {
                $(".child").slideUp(2000);
                $(".sel1ch").animate({
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }, 1000);
                
                $(".showL").fadeIn(1000);
            } else if (selectedPart == 2) {

                $(".child").slideUp(2000);
                $(".sel2ch").animate({
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }, 1000);
 $(".showL").fadeIn(1000);
            } else if (selectedPart == 3) {

                $(".child").slideUp(2000);
                $(".sel3ch").animate({
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }, 1000);
 $(".showL").fadeIn(1000);
            } else if (selectedPart == 4) {

                $(".child").slideUp(2000);
                $(".sel4ch").animate({
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }, 1000);
 $(".showL").fadeIn(1000);
            } else if (selectedPart == 5) {

                $(".child").slideUp(2000);
                $(".sel5ch").animate({
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }, 1000);
 $(".showL").fadeIn(1000);
            } else if (selectedPart == 6) {

                $(".child").slideUp(2000);
                $(".sel6ch").animate({
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }, 1000);
 $(".showL").fadeIn(1000);
            } 

            

            $(".symK").fadeOut(1000)



        })
    }


    $(".symK").slideDown(2000);
});
