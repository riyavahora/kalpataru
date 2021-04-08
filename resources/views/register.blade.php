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
        width: 98%;
    }
    label small {
        color: #678 !important;
    }
    span.req {
        color:maroon;
        font-size: 112%;
    }
</style>
<script src="assets/js/sketch.js"></script>
<div class="page-title-container">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 wow fadeIn">
                <i class="fa fa-tasks"></i>
                <h1><?= $lang['page-sign-up'] ?> /</h1>
                <p><?= $lang['sign-up-desc'] ?></p>
            </div>
        </div>
    </div>
</div>
<div class="diamond_bg_class">
    <div class="container">
        <div class="row">
            <div class="col-md-12 fadeInLeft" style="padding: 3%;z-index: 1099;">
                <form action="" method="post" id="registerForm" role="form">
                    <fieldset><legend class="text-center"><?= $lang['sign-up-alert'] ?> <span class="req"><small> <?= $lang['req'] ?></small></span></legend>

                        <label class="ErrorMsg"></label>
                        <label for="firstname" class='pull-left' style="padding-top:4%;"><span class="req pull-right">* </span> <?= $lang['fname'] ?> </label>
                        <div class="form-group">
                            <input class="form-control" type="text" name="firstname" id = "firstName" onkeyup = "Validate(this)" required placeholder="As appears officially"/>
                            <div id="errFirst"></div>
                        </div>
                        <label for="lastname" class='pull-left'><span class="req pull-right">* </span> <?= $lang['lname'] ?> </label>
                        <div class="form-group">
                            <input class="form-control" type="text" name="lastname" id = "lastName" onkeyup = "Validate(this)" placeholder="As appears officially" required />
                            <div id="errLast"></div>
                        </div>
                        <label for="companyname" class="pull-left"><span class="req pull-right">* </span> <?= $lang['cname'] ?> </label>
                        <div class="form-group">
                            <input class="form-control" type="text" name="companyname" id = "companyName" onkeyup = "Validate(this)" placeholder="Company Name of an account applicant as appears officially"/>
                            <div id="errFirst"></div>
                        </div>
                        <label for="addline1" class="pull-left"> <?= $lang['addlin1'] ?> </label>
                        <div class="form-group">
                            <input class="form-control" type="text" name="addline1" id = "addressLine1" onkeyup = "address_validate(this)" placeholder="Office No. -Building Name -Street Name"/>
                            <div id="errFirst"></div>
                        </div>
                        <label for="addline2" class="pull-left"> <?= $lang['addlin2'] ?> </label>
                        <div class="col-md-12">
                            <div class="form-group col-md-3">
                                <input class="form-control" type="text" name="cityname" id = "addressCity" onkeyup = "Validate(this)" required placeholder="City Name"/>
                            </div>
                            <div class="form-group col-md-3">
                                <input class="form-control" type="text" name="statename" id = "addressState" onkeyup = "Validate(this)" required placeholder="State Name" />
                            </div>
                            <div class="form-group col-md-3">
                                <input class="form-control" type="text" name="countryename" id = "addressCountry" onkeyup = "Validate(this)" required placeholder="Country Name"/>
                                <div id="errFirst"></div>
                            </div>
                        </div>
                        <label for="officephonenumber" class="pull-left"><?= $lang['ophoneno'] ?> </label>
                        <div class="col-md-12">
                            <div class="form-group">
                                <input type="text" name="phonenumber" id="phone" class="form-control phone" onkeyup="validatephone(this);" placeholder="Phone Number"/>
                            </div>
                        </div>
                        <label for="mobilenumber" class="pull-left"><span class="req pull-right">* </span><?= $lang['link-mobile'] ?> </label>
                        <div class="col-md-12">
                            <div class="form-group">
                                <input required type="text" name="mobilenumber" id="mobile" class="form-control phone" onkeyup="validatephone(this);" placeholder="Mobile Number (Whatsapp registered)"/>
                            </div>
                        </div>
                        <label for="wechat" class="pull-left"><?= $lang['link-wechat'] ?> </label>
                        <div class="col-md-12">
                            <div class="form-group">
                                <input type="text" name="wechatid" id="wechat" class="form-control phone" placeholder="Wechat ID"/>
                            </div>
                        </div>
                        <label for="qq" class="pull-left">QQ: </label>
                        <div class="col-md-12">
                            <div class="form-group">
                                <input type="text" name="qq" id="qq" class="form-control phone" placeholder="QQ"/>
                            </div>
                        </div>
                        <label for="email" class="pull-left"><span class="req pull-right">* </span> <?= $lang['sub-address'] ?>  <small><?= $lang['email-msg'] ?></small> </label>
                        <div class="form-group">
                            <input class="form-control" required type="text" name="email" id = "email"  onchange="email_validate(this.value);" placeholder="Official Email id"/>
                            <div class="status" id="status"></div>
                        </div>
                        <label for="password" class="pull-left"><span class="req pull-right">* </span> <?= $lang['pwd'] ?> </label>
                        <div class="col-md-12">
                            <div class="form-group col-md-6">
                                <input required name="password" type="password" class="form-control inputpass" minlength="8" maxlength="16"  id="pass1" placeholder="Password" onchange="pwd_validate(this.value);" onfocus="clearError();"/> </p>
                                <div class="status" id="statusPWD"></div>
                            </div>
                            <div class="form-group col-md-6">
                                <!--<label for="password"><span class="req">* </span> Password Confirm: </label>-->
                                <input required name="password" type="password" class="form-control inputpass" minlength="8" maxlength="16" placeholder="Enter again to validate"  id="pass2" onkeyup="checkPass(); return false;" />
                                <span id="confirmMessage" class="confirmMessage"></span>
                            </div>
                        </div>
                        <label for="website" class="pull-left" style="width:100%"><span class="pull-left"><?= $lang['website'] ?></span></label>
                        <div class="form-group">
                            <input class="form-control" type="text" name="website" id = "website" placeholder="www.xyzcompanyname.com" onchange="website_validate(this.value);"/>
                            <div class="status" id="statusweb"></div>
                        </div>

                        <div class="form-group">

                            <?php //$date_entered = date('m/d/Y H:i:s'); ?>
                            <input type="hidden" value="<?php //echo $date_entered;     ?>" name="dateregistered">
                            <input type="hidden" value="0" name="activate" />
                            <hr>

                            <input type="checkbox" required name="terms" onchange="this.setCustomValidity(validity.valueMissing ? 'Please indicate that you accept the Terms and Conditions' : '');" id="field_terms">   <label for="terms">I agree with the <a href="terms.php" title="You may read our terms and conditions by clicking on this link" target = '_blank'>terms and conditions</a> for Registration.</label><span class="req">* </span>
                        </div>

                        <div class="form-group">
                            <input class="btn btn-success" type="button" name="submit_reg" value="Register" onclick="registerUser();">
                        </div>
                        <h5><?= $lang['register-msg'] ?> </h5>
                        <h5><?= $lang['register-msg1'] ?> </h5>


                    </fieldset>
                </form><!-- ends register form -->

                <script type="text/javascript">
                    document.getElementById("field_terms").setCustomValidity("Please indicate that you accept the Terms and Conditions");
                </script>
            </div><!-- ends col-6 -->
        </div>
    </div>
</div>
@include('footer')
