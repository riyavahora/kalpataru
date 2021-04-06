@include('header')
<style>
    fieldset {
        border: thin solid #ccc;
        border-radius: 4px;
        padding: 20px;
        padding-left: 40px;
        background: #fbfbfb;
    }
    legend {
        color: #678;
    }
    .form-control {
        width: 95%;
    }
    label small {
        color: #678 !important;
    }
    span.req {
        color:maroon;
        font-size: 112%;
    }
    canvas{
        position: fixed;top: 0;left: 0;height: 100%;width: 100%;display: block;
    }
</style>
<div class="page-title-container">
    <div class="container" id="fa-sign-in">
        <div class="row">
            <div class="col-sm-12 wow fadeIn">
                <i class="fa fa-tasks"></i>
                <h1><?= $lang['page-sign-in'] ?> /</h1>
                <p><?= $lang['sign-in-desc'] ?></p>
            </div>
        </div>
    </div>
</div>
<script src="assets/js/sketch.js"></script>
<script>
$(document).keydown(function (e) {
        var c = e.which;
        e.stopPropagation();
        if (c == 13) {
            e.preventDefault();
            $(".btn-success").trigger("click");
        }
    });

</script>

<div id="">
    <div class="row" style="padding-top:3%;padding-bottom: 3%;padding-left: 35%">
        <div class="col-md-6" style="z-index: 1099;">
            <form action="" method="post" id="loginForm" role="form">
                <fieldset><legend class="text-center"><?= $lang['sign-in-alert'] ?> <span class="req"><small> <?= $lang['req'] ?></small></span></legend>
                    <label class="ErrorMsg"></label>
                    <div class="form-group">
                        <label for="email" class="pull-left"><span class="req pull-right">* </span> <?= $lang['sub-address'] ?></label>
                        <input class="form-control" required type="text" name="email" id = "email" placeholder="E-mail" style="background-color: #fff;"/>
                    </div>

                    <div class="form-group">
                        <label for="password" class="pull-left"><span class="req pull-right">* </span> <?= $lang['pwd'] ?> </label>
                        <input required name="password" type="password" class="form-control inputpass" id="pwd" placeholder="Password"/>
                    </div>

                    <div class="form-group">
                        <input class="btn btn-success" type="button" name="submit_login" value="Login" onclick="loginUser();">
                    </div>
                    <div class="form-group">
                        <a href="#" style="cursor: pointer;" data-target="#pwdModal" data-toggle="modal"><?= $lang['fpwd'] ?>?</a>
                    </div>
                    <div class="form-group">
                        <?= $lang['no-account'] ?> <a href="register.php" style="cursor: pointer;"><?= $lang['register'] ?> </a> <?= $lang['now'] ?>
                    </div>
                </fieldset>
            </form><!-- ends login form -->
        </div><!-- ends col-6 -->
    </div>
</div>
<div id="pwdModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true" style="z-index: 1100;">
    <div class="modal-dialog" style="width: 500px;">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 class="text-center"><?= $lang['what-my-pwd'] ?></h4>
            </div>
            <div class="modal-body">
                <div class="col-md-12">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <div class="text-center">

                                <p><?= $lang['reset-msg'] ?></p>
                                <div class="panel-body">
                                    <fieldset>
                                        <div class="form-group">
                                            <input class="form-control input-lg" placeholder="E-mail Address" name="email" type="email" id="reset-email" style="height:35px !important;">
                                            <div class="status" id="status"></div>
                                        </div>
                                        <input class="btn btn-lg btn-primary btn-block" value="Send" type="submit" onclick="submit_forgot_pwd();">
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <div class="col-md-12">
                    <button class="btn" data-dismiss="modal" aria-hidden="true"><?= $lang['cancel'] ?></button>
                </div>
            </div>
        </div>
    </div>
</div>
@include('footer')
