@include('header')
<style>
    iframe{
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
</style>
<link rel="stylesheet" href="assets/css/colorbox.css" />
<!--Slider-->
<div class="slider-container">
    <div class="container" style="width: auto;">
        <div class="row">
            <div class="col-sm-10 col-sm-offset-1 slider">
                <div class="flexslider">
                    <ul class="slides">
                        <li data-thumb="assets/img/slider/1.jpg">
                            <img src="assets/img/slider/1.jpg" style="height:600px;">
                            <div class="flex-caption" style="text-align: center">
                                SUCCESSFULL PEOPLE NEVER WORRY ABOUT WHAT OTHERS ARE DOING
                            </div>
                        </li>
                        <!--<li data-thumb="assets/img/slider/2.gif">
                            <img src="assets/img/slider/2.gif" style="height:600px;">
                            <div class="flex-caption" style="text-align: center">
                                ATTITUDE IS A LITTLE THING THAT MAKES A BIG DIFFERENCE
                            </div>
                        </li>-->
                        <li data-thumb="assets/img/slider/3.jpg">
                            <img src="assets/img/slider/3.jpg" style="height:600px;">
                            <div class="flex-caption" style="text-align: center">
                                IF WE DON'T TAKE CARE OF CUSTOMER ,SOMEONE ELSE WILL
                            </div>
                        </li>
                        <li data-thumb="assets/img/slider/4.gif">
                            <img src="assets/img/slider/4.gif" style="height:600px;">
                            <div class="flex-caption" style="text-align: center">
                                WHAT YOU DO TODAY CAN IMPROVE ALL OF YOUR TOMORROWS
                            </div>
                        </li>
                        <li data-thumb="assets/img/slider/5.jpg">
                            <img src="assets/img/slider/5.jpg" style="height:600px;">
                            <div class="flex-caption" style="text-align: center">
                                SUCCESSFULL PEOPLE NEVER WORRY ABOUT WHAT OTHERS ARE DOING
                            </div>
                        </li>
                        <li data-thumb="assets/img/slider/7.jpg">
                            <img src="assets/img/slider/7.jpg" style="height:600px;">
                            <div class="flex-caption" style="text-align: center">
                                SUCCESS IS A JOURNEY , NOT A DESTINATION
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="assets/js/colorbox.js"></script>

<script>
    function openColorBox(){
        <?php if(!empty($image)){ ?>
    $.colorbox({iframe:true, width:"100%", height:"100%", href: 'https://kalpatarugroup.net/popup_images/<?php echo $image; ?>'});
        <?php } ?>
    }

        setTimeout(openColorBox, 1000);
        setTimeout(function () {
            $('iframe').contents().find('html').css({
                'height': '100%',
                'width': '100%'
            });
            $('iframe').contents().find('body').css({
                'height': '100%',
                'width': 'auto',
                'margin': '0 auto',
                'text-align': 'center',
                'background-color':'#DCDCDC'
            });
            $('iframe').contents().find('img').css({
                'height': '100%'
            });
        }, 2300);
    </script>
    @include('footer')
