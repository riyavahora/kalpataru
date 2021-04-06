/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;

var RADIUS = 70;

var RADIUS_SCALE = 1;
var RADIUS_SCALE_MIN = 1;
var RADIUS_SCALE_MAX = 1.5;
var QUANTITY = 25;

var canvas;
var context;
var particles;

var mouseX = SCREEN_WIDTH * 0.5;
var mouseY = SCREEN_HEIGHT * 0.5;
var mouseIsDown = false;


//window.onload = init;

$(document).ready(function () {
    if ($('.navbar-nav').find('li.cart').find('.cart_count').html() == 0) {
        $('.navbar-nav').find('li.cart').find('.cart_count').hide();
        $('.navbar-nav').find('li.cart').find('.fa-comment').hide();
    } else {
        $('.navbar-nav').find('li.cart').find('.cart_count').show();
        $('.navbar-nav').find('li.cart').find('.fa-comment').show();
    }
    $('.cart').on('click', function () {
        redirect_to_cart();
    });

});

function redirect_to_cart() {
    if ($('.navbar-nav').find('li.cart').find('.cart_count').html() == 0) {
        swal('', 'Your cart is empty', 'error');
    } else {
        window.location.href = "cart_view.php";
    }
}
function checkLogin() {
    var username = $('#AdminLogin').find('#userName').val();
    var pwd = $('#AdminLogin').find('#userPassword').val();
    $.ajax({
        url: 'functions.php',
        data: {"username": username, "password": pwd, "method": 'checkLogin'},
        type: 'post',
        async: false,
        success: function (res) {
            if (res == 'success') {
                window.location.href = "admin_home.php";
            } else {
                alert('invalid username and password');
            }
        }
    });
}


function registerUser() {

    var error = $('.warning').length;
    var flag = false;
    if ($('#registerForm').find('#firstName').val() == '') {
        flag = true;
    }
    if ($('#registerForm').find('#lastName').val() == '') {
        flag = true;
    }
    if ($('#registerForm').find('#companyName').val() == '') {
        flag = true;
    }
    /*if ($('#registerForm').find('#addressLine1').val() == '') {
        flag = true;
    }
    if ($('#registerForm').find('#addressCity').val() == '') {
        flag = true;
    }
    if ($('#registerForm').find('#addressState').val() == '') {
        flag = true;
    }
    if ($('#registerForm').find('#addressCountry').val() == '') {
        flag = true;
    } */
    if ($('#registerForm').find('#email').val() == '') {
        flag = true;
    }
//    if ($('#registerForm').find('#phone').val() == '') {
//        flag = true;
//    }
    if ($('#registerForm').find('#mobile').val() == '') {
        flag = true;
    }
//    if ($('#registerForm').find('#wechat').val() == '') {
//        flag = true;
//    }
//    if ($('#registerForm').find('#qq').val() == '') {
//        flag = true;
//    }
//    if ($('#registerForm').find('#website').val() == '') {
//        flag = true;
//    }
    if (error > 0 || flag) {
        $('#registerForm').find('.ErrorMsg').html('Please fill up the form properly');
        $('#registerForm').find('.ErrorMsg').css('color', '#d41313');
        goToByScroll('registerForm');
        return false;
    } else {
        var data = {
            'first_name': $('#registerForm').find('#firstName').val(),
            'last_name': $('#registerForm').find('#lastName').val(),
            'company_name': $('#registerForm').find('#companyName').val(),
            'address_line1': $('#registerForm').find('#addressLine1').val(),
            'city': $('#registerForm').find('#addressCity').val(),
            'state': $('#registerForm').find('#addressState').val(),
            'country': $('#registerForm').find('#addressCountry').val(),
            'phone': $('#registerForm').find('#phone').val(),
            'mobile': $('#registerForm').find('#mobile').val(),
            'email': $('#registerForm').find('#email').val(),
            'password': $('#registerForm').find('#pass1').val(),
            'website': $('#registerForm').find('#website').val(),
            'wechat': $('#registerForm').find('#wechat').val(),
            'qq': $('#registerForm').find('#qq').val(),
            'method': 'register_user'
        };
        $.ajax({
            url: 'functions.php',
            data: data,
            type: 'post',
            async: false,
            success: function (res) {
                if (res == 'success') {
                    swal('success', 'Thank you for registration. Please confirm your email first to activate your account.', 'success');
                    setTimeout(function () {
                        window.location.href = 'login.php'
                    }, 3000);
                } else if (res == 'email already registered') {
//                    e.preventDefault();
                    $('#registerForm').find('.ErrorMsg').html('Email is already registered');
                    $('#registerForm').find('.ErrorMsg').css('color', '#d41313');
                    goToByScroll('registerForm');
                    return false;
                } else {
                    alert('Ooops! Registration is failed.Please try again');
                }
            }
        });
    }
}

function goToByScroll(id) {
    if ($("#" + id).offset() != null && $("#" + id).offset() != "") {
        $('html,body').animate({
            scrollTop: $("#" + id).offset().top - 60
        }, 'slow');
    }

}

function checkPass()
{
    //Store the password field objects into variables ...
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    //Store the Confimation Message Object ...g
    var message = document.getElementById('confirmMessage');
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    //Compare the values in the password field 
    //and the confirmation field
    if (pass1.value == pass2.value) {
        //The passwords match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match"
    } else {
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!"
    }
}
function validatephone(phone)
{
    var maintainplus = '';
    var numval = phone.value
    if (numval.charAt(0) == '+')
    {
        var maintainplus = '';
    }
    curphonevar = numval.replace(/[\\A-Za-z!"£$%^&\,*+_={};:'@#~,.Š\/<>?|`¬\]\[]/g, '');
    phone.value = maintainplus + curphonevar;
    var maintainplus = '';
    phone.focus;
}
// validates text only
function Validate(txt) {
    txt.value = txt.value.replace(/[^a-zA-Z-'\n\r. ]+/g, '');
}
// validates text only
function address_validate(txt) {
    txt.value = txt.value.replace(/[^a-zA-Z0-9-'\n\r. ,\/]+/g, '');
}
// validate email
function email_validate(email)
{
    var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

    if (regMail.test(email) == false)
    {
        document.getElementById("status").innerHTML = "<span class='warning' style='color:#d41313'>Email address is not valid yet.</span>";
    } else
    {
        document.getElementById("status").innerHTML = "<span class='valid' style='color:#1e840c;'>Thanks, you have entered a valid Email address!</span>";
    }
}

// validate password
function pwd_validate(pwd)
{
   /* var regMail = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
    if (regMail.test(pwd) == false)
    {
        document.getElementById("statusPWD").innerHTML = "<span class='warning' style='color:#d41313'>Password must contain one uppercase letter and one number.</span>";
    }*/  
		
		if (($.trim(pwd).length < 6)) {
        document.getElementById("statusPWD").innerHTML = "<span class='warning' style='color:#d41313'>Password should be atleast of 6 characters.</span>";
    } else
    {
        document.getElementById("statusPWD").innerHTML = "<span class='valid' style='color:#1e840c;'>Thanks, you have entered a valid password!</span>";
    }
}

//clear error

function clearError() {
    document.getElementById("statusPWD").innerHTML = '';
}

// validate website
function website_validate(web)
{
    var regMail = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    if (regMail.test(web) == false)
    {
        document.getElementById("statusweb").innerHTML = "<span class='warning' style='color:#d41313'>Website url is not valid yet.</span>";
    } else
    {
        document.getElementById("statusweb").innerHTML = "<span class='valid' style='color:#1e840c;'>Thanks, you have entered a valid website url!</span>";
    }
}

function loginUser() {
    $('#loginForm').find('.ErrorMsg').html('');
    var flag = false;
    if ($('#loginForm').find('#email').val() == '') {
        flag = true;
    }
    if ($('#loginForm').find('#pwd').val() == '') {
        flag = true;
    }
    if (flag) {
        $('#loginForm').find('.ErrorMsg').html('Please fill up the form properly to sign in');
        $('#loginForm').find('.ErrorMsg').css('color', '#d41313');
        goToByScroll('loginForm');
        return false;
    } else {
        var data = {
            'email': $('#loginForm').find('#email').val(),
            'pwd': $('#loginForm').find('#pwd').val(),
            'method': 'login_user'
        }
        $.ajax({
            url: 'functions.php',
            data: data,
            type: 'post',
            async: false,
            success: function (res) {
                if (res == 'success') {
                    window.location.href = "search.php";
                    $('.fa-home').parents('li').removeClass('active');
                    $('.fa-envelope').parents('li').addClass('active');
                } else if (res == 'not_admin_verified') {
                    $('#loginForm').find('.ErrorMsg').html('Your account has not been approved by admin yet.');
                    $('#loginForm').find('.ErrorMsg').css('color', '#d41313');
                    goToByScroll('loginForm');
                    return false;
                } else if (res == 'not_approved') {
                    $('#loginForm').find('.ErrorMsg').html('Your account has not been activated.Please login to your registered email account to activate it');
                    $('#loginForm').find('.ErrorMsg').css('color', '#d41313');
                    goToByScroll('loginForm');
                    return false;
                } else {
                    $('#loginForm').find('.ErrorMsg').html('Email/Password is not correct');
                    $('#loginForm').find('.ErrorMsg').css('color', '#d41313');
                    goToByScroll('loginForm');
                    return false;
                }
            }
        });
    }
}
function create_error_div(divname, msg, width) {
    var outer_div = document.createElement('div');
    outer_div.setAttribute('id', 'outer_error_div');
    outer_div.setAttribute('class', 'outer_error_class');
    outer_div.style.position = 'relative';
    if (width == undefined || width == '')
        outer_div.style.width = 'auto';
    else {
        outer_div.style.width = width;
    }
    outer_div.style.zIndex = '200';
    var msg_div = document.createElement('div');
    msg_div.setAttribute('class', 'form_error_popup');
    msg_div.innerHTML = msg;
    var arrow_div = document.createElement('div');
    arrow_div.setAttribute('class', 'validation_error_arrow');
    $('#' + divname).before(outer_div);
    $(outer_div).append(msg_div);
    $(outer_div).append(arrow_div);
}
function SubmitForm() {
    $('#currentPwd').removeClass('errorinput');
    $('#newPwd').removeClass('errorinput');
    $('#newPwdMatch').removeClass('errorinput');
    $('#currentPwd').parent().find('.outer_error_class').remove();
    $('#newPwd').parent().find('.outer_error_class').remove();
    $('#newPwdMatch').parent().find('.outer_error_class').remove();
    var old_pwd = $('#currentPwd').val();
    var new_pwd1 = $('#newPwd').val();
    var new_pwd2 = $('#newPwdMatch').val();
    var error = false;
    if (old_pwd == '') {
        create_error_div('currentPwd', 'Please enter current password');
        $('#currentPwd').addClass('errorinput');
        error = true;
    }

    if (new_pwd1 == '') {
        create_error_div('newPwd', 'Please enter new password');
        $('#newPwd').addClass('errorinput');
        error = true;
    }

    if (new_pwd2 == '') {
        create_error_div('newPwdMatch', 'Please re enter new password');
        $('#newPwdMatch').addClass('errorinput');
        error = true;
    } else if (new_pwd1 != new_pwd2) {
        create_error_div('newPwdMatch', 'Password does not match');
        $('#newPwdMatch').addClass('errorinput');
        error = true;
    }
    if (error) {
        return false;
    } else {
        $.ajax({
            url: 'functions.php',
            data: {"old_password": old_pwd, "new_password": new_pwd1, "method": 'pwdChange'},
            type: 'post',
            async: false,
            success: function (res) {
                if (res == 'success') {
                    swal('success', 'Your password has been updated successfully.Please login again with new password', 'success')
                    window.location.href = "admin_login.php";
                } else if (res == 'invalid password') {
                    swal('error', 'Please enter correct current password', 'error')
                    $('#currentPwd').addClass('errorinput');
                    $('#currentPwd').val('');
                } else {
                    swal('error', 'Password could not be updated.Please try again later', 'error')
                }
            }
        });
    }

}
function resetForm() {
    $('#currentPwd').removeClass('errorinput');
    $('#newPwd').removeClass('errorinput');
    $('#newPwdMatch').removeClass('errorinput');
    $('#currentPwd').parent().find('.outer_error_class').remove();
    $('#newPwd').parent().find('.outer_error_class').remove();
    $('#newPwdMatch').parent().find('.outer_error_class').remove();
    $('#currentPwd').val('');
    $('#newPwd').val('');
    $('#newPwdMatch').val('');
}

function validateNum(txt) {
    txt.value = txt.value.replace(/[^0-9\n\r.]+/g, '');
}
function validateCertiNum(txt) {
    txt.value = txt.value.replace(/[^0-9\n\r.,]+/g, '');
}
function updateUser() {

    var error = $('.warning').length;
    var flag = false;
    if ($('#profileForm').find('#firstName').val() == '') {
        flag = true;
    }
    if ($('#profileForm').find('#lastName').val() == '') {
        flag = true;
    }
    if ($('#profileForm').find('#companyName').val() == '') {
        flag = true;
    }
    if ($('#profileForm').find('#addressLine1').val() == '') {
        flag = true;
    }
    if ($('#profileForm').find('#addressCity').val() == '') {
        flag = true;
    }
    if ($('#profileForm').find('#addressState').val() == '') {
        flag = true;
    }
    if ($('#profileForm').find('#addressCountry').val() == '') {
        flag = true;
    }
    if ($('#profileForm').find('#email').val() == '') {
        flag = true;
    }
    if ($('#profileForm').find('#phone').val() == '') {
        flag = true;
    }
    if ($('#profileForm').find('#website').val() == '') {
        flag = true;
    }
    if (error > 0 || flag) {
        $('#profileForm').find('.ErrorMsg').html('Please fill up the form properly');
        $('#profileForm').find('.ErrorMsg').css('color', '#d41313');
        goToByScroll('profileForm');
        return false;
    } else {
        var data = {
            'first_name': $('#profileForm').find('#firstName').val(),
            'last_name': $('#profileForm').find('#lastName').val(),
            'company_name': $('#profileForm').find('#companyName').val(),
            'address_line1': $('#profileForm').find('#addressLine1').val(),
            'city': $('#profileForm').find('#addressCity').val(),
            'state': $('#profileForm').find('#addressState').val(),
            'country': $('#profileForm').find('#addressCountry').val(),
            'phone': $('#profileForm').find('#phone').val(),
            'email': $('#profileForm').find('#email').val(),
            'website': $('#profileForm').find('#website').val(),
            'method': 'update_user_profile'
        };
        $.ajax({
            url: 'functions.php',
            data: data,
            type: 'post',
            async: false,
            success: function (res) {
                if (res == 'success') {
                    swal('success', 'Your Profile has been updated.Thank you', 'success')
                    window.location.href = "index.php";
                } else if (res == 'email alredy registered') {
//                    e.preventDefault();
                    $('#profileForm').find('.ErrorMsg').html('Email is already registered');
                    $('#profileForm').find('.ErrorMsg').css('color', '#d41313');
                    goToByScroll('profileForm');
                    return false;
                } else {
                    swal('error', 'Ooops! Process is failed.Please try again', 'error');
                }
            }
        });
    }
}
function submit_forgot_pwd() {
    var email = $('#pwdModal').find('#reset-email').val();
    var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;
    if (email == '')
    {
        document.getElementById("status").innerHTML = "<span class='warning' style='color:#d41313'>Please enter registered email address.</span>";
    } else if (regMail.test(email) == false) {
        document.getElementById("status").innerHTML = "<span class='warning' style='color:#d41313'>Email address is not valid yet.</span>";
    } else {
        $.ajax({
            url: 'functions.php',
            data: {'email': email, 'method': 'reset_pwd'},
            type: 'post',
            async: false,
            success: function (res) {
                if (res == 'not valid') {
                    document.getElementById("status").innerHTML = "<span class='warning' style='color:#d41313'>Sorry! Email address is not registered with us.</span>";
                } else {
                    swal('success', 'Thank you, Password reset link has been sent to your registered email. Please go through it.', 'success');
                    setTimeout(function () {
                        window.location.href = 'login.php'
                    }, 3000);
                }
            }
        });
    }
}

function ResetPassword() {
    var regMail = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
    var pwd = $('#resetForm').find('#pass1').val();
    var error = false;
    if (pwd == '') {
        document.getElementById("statusPWD").innerHTML = "<span class='warning' style='color:#d41313'>Please enter password.</span>";
        error = true;
    } else if (regMail.test(pwd) == false) {
        document.getElementById("statusPWD").innerHTML = "<span class='warning' style='color:#d41313'>Password must contain one uppercase letter and one number.</span>";
        error = true;
    }

    var conf_pwd = $('#resetForm').find('#pass2').val();
    if (conf_pwd == '') {
        document.getElementById("confirmMessage").innerHTML = "<span class='warning' style='color:#d41313'>Please re-enter password.</span>";
        error = true;
    } else if (pwd !== conf_pwd) {
        document.getElementById("confirmMessage").innerHTML = "<span class='warning' style='color:#d41313'>Password does not match.</span>";
        error = true;
    }
    if (error) {
        goToByScroll('resetForm');
        return false;
    } else {
        $.ajax({
            url: 'functions.php',
            data: {'password': pwd, 'method': 'reset_new_pwd'},
            type: 'post',
            async: false,
            success: function (res) {
                if (res == 'success') {
                    swal('success', 'Thank you,Please login with your new password.', 'success');
                    setTimeout(function () {
                        window.location.href = 'login.php'
                    }, 3000);
                } else {
                    swal('error', 'Oops! Password reset has been failed.Please try again later.', 'error');
                }
            }
        });
    }
}

function SubmitUserForm() {
    $('#currentUserPwd').removeClass('errorinput');
    $('#newUserPwd').removeClass('errorinput');
    $('#newUserPwdMatch').removeClass('errorinput');
    $('#currentUserPwd').parent().find('.outer_error_class').remove();
    $('#newUserPwd').parent().find('.outer_error_class').remove();
    $('#newUserPwdMatch').parent().find('.outer_error_class').remove();
    var old_pwd = $('#currentUserPwd').val();
    var new_pwd1 = $('#newUserPwd').val();
    var new_pwd2 = $('#newUserPwdMatch').val();
    var error = false;
    if (old_pwd == '') {
        create_error_div('currentUserPwd', 'Please enter current password');
        $('#currentUserPwd').addClass('errorinput');
        error = true;
    }

    var regMail = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
    if (new_pwd1 == '') {
        create_error_div('newUserPwd', 'Please enter new password');
        $('#newUserPwd').addClass('errorinput');
        error = true;
    //} 
	/*else if (regMail.test(new_pwd1) == false) {
        create_error_div('newUserPwd', 'Password must contain one uppercase letter and one number.');
        $('#newUserPwd').addClass('errorinput');
        error = true; */
    } else if ($.trim(new_pwd1).length < 6) {
        create_error_div('newUserPwd', 'Password should be atleast of 6 characters');
        $('#newUserPwd').addClass('errorinput');
        error = true;
    }

    if (new_pwd2 == '') {
        create_error_div('newUserPwdMatch', 'Please re enter new password');
        $('#newUserPwdMatch').addClass('errorinput');
        error = true;
    } else if (new_pwd1 != new_pwd2) {
        create_error_div('newUserPwdMatch', 'Password does not match');
        $('#newUserPwdMatch').addClass('errorinput');
        error = true;
    }
    if (error) {
        return false;
    } else {
        $.ajax({
            url: 'functions.php',
            data: {"old_password": old_pwd, "new_password": new_pwd1, "method": 'userPwdChange'},
            type: 'post',
            async: false,
            success: function (res) {
                if (res == 'success') {
                    swal('', 'Your password has been updated successfully.Please login again with new password', 'success');
                    setTimeout(function () {
                        window.location.href = 'login.php'
                    }, 3000);
                } else if (res == 'invalid password') {
                    swal('', 'Please enter correct current password', 'error');
                    $('#currentUserPwd').addClass('errorinput');
                    $('#currentUserPwd').val('');
                } else {
                    swal('', 'Password could not be updated.Please try again later', 'error');
                }
            }
        });
    }

}
function resetUserForm() {
    $('#currentUserPwd').removeClass('errorinput');
    $('#newUserPwd').removeClass('errorinput');
    $('#newUserPwdMatch').removeClass('errorinput');
    $('#currentUserPwd').parent().find('.outer_error_class').remove();
    $('#newUserPwd').parent().find('.outer_error_class').remove();
    $('#newUserPwdMatch').parent().find('.outer_error_class').remove();
    $('#currentUserPwd').val('');
    $('#newUserPwd').val('');
    $('#newUserPwdMatch').val('');
}

function getStones() {
    selected_stone = [];
    pc_cnt = 0;
    cts_cnt = 0.0;
    temp_rap = 0.0;
    rap_cnt = 0.0;
    disc_cnt = 0.0;
    price_cnt = 0.0;
    amt_cnt = 0.0;
    showTotalCalculation();
    var stoneCounts = $('#searchstonecounter').val();
    if (stoneCounts > 400) {
        swal('Refine Search', 'No of stones should be less than 400', 'error');
    } else if (stoneCounts == 0) {
        swal('Refine Search', 'There is no stone of your search result .Please modify your search.', 'error');
    } else {
        var selected_div = $('.ui-selected').parent('div').attr('id');
        var val;
        var selected_carats = [];
        var selected_shape = [];
        var selected_color = [];
        var selected_clarity = [];
        var selected_cut = [];
        var selected_polish = [];
        var selected_symmetry = [];
        var selected_lab = [];
        var selected_fluro = [];
        var selected_loc = [];
        var selected_carat1 = [];
        var selected_carat2 = [];
        $('.ui-selected').each(function (i) {
            var ch = $(this).parent('div').attr('id');
            if (ch == 'selectable_boxcarats') {
                selected_carat1.push($(this).attr('caratsid1'));
                selected_carat2.push($(this).attr('caratsid2'));
            } else if (ch == 'selectable_boxshape') {
                selected_shape.push($(this).attr('cust_id'));
            } else if (ch == 'selectable_boxcolor') {
                selected_color.push($(this).attr('cust_id'));
            } else if (ch == 'selectable_boxclarity') {
                selected_clarity.push($(this).attr('cust_id'));
            } else if (ch == 'selectable_cut') {
                selected_cut.push($(this).attr('cust_id'));
            } else if (ch == 'selectable_polish') {
                selected_polish.push($(this).attr('cust_id'));
            } else if (ch == 'selectable_symmetry') {
                selected_symmetry.push($(this).attr('cust_id'));
            } else if (ch == 'selectable_boxlab') {
                selected_lab.push($(this).attr('cust_id'));
            } else if (ch == 'selectable_boxfluro') {
                selected_fluro.push($(this).attr('cust_id'));
            } else if (ch == 'selectable_location') {
                selected_loc.push($(this).attr('cust_id'));
            } else if (ch == 'selectable_boxsmart') {
                if ($(this).attr('id') == '3EX') {
                    selected_cut.push('EX');
                    selected_polish.push('EX');
                    selected_symmetry.push('EX');
                }
                if ($(this).attr('id') == 'EXVG+') {
                    selected_cut.push('EX');
                    selected_polish.push('EX');
                    selected_polish.push('VG');
                    selected_symmetry.push('EX');
                    selected_symmetry.push('VG');
                }
                if ($(this).attr('id') == '3VG+') {
                    selected_cut.push('EX');
                    selected_cut.push('VG');
                    selected_polish.push('EX');
                    selected_polish.push('VG');
                    selected_symmetry.push('EX');
                    selected_symmetry.push('VG');
                }
            }
        });
        var GirdleFrom = 0;
        var GirdleTo = 10;
        if ($('#girdleFrom').val() != '') {
            GirdleFrom = $('#girdleFrom').val();
        }
        if ($('#girdleTo').val() != '') {
            GirdleTo = $('#girdleTo').val();
        }
        var tableFrom = 0;
        var tableTo = 100;
        if ($('#tableFrom').val() != '') {
            tableFrom = $('#tableFrom').val();
        }
        if ($('#tableTo').val() != '') {
            tableTo = $('#tableTo').val();
        }
        var lengthFrom = 0;
        var lengthTo = 100;
        if ($('#lengthFrom').val() != '') {
            lengthFrom = $('#lengthFrom').val();
        }
        if ($('#lengthTo').val() != '') {
            lengthTo = $('#lengthTo').val();
        }
        var widthFrom = 0;
        var widthTo = 100;
        if ($('#widthFrom').val() != '') {
            widthFrom = $('#widthFrom').val();
        }
        if ($('#widthTo').val() != '') {
            widthTo = $('#widthTo').val();
        }
        var heightFrom = 0;
        var heightTo = 100;
        if ($('#heightFrom').val() != '') {
            heightFrom = $('#heightFrom').val();
        }
        if ($('#heightTo').val() != '') {
            heightTo = $('#heightTo').val();
        }
        var depthFrom = 0;
        var depthTo = 100;
        if ($('#depthFrom').val() != '') {
            depthFrom = $('#depthFrom').val();
        }
        if ($('#depthTo').val() != '') {
            depthTo = $('#depthTo').val();
        }
        var discountFrom = 0;
        var discountTo = 100;
        if ($('#discrlFrom').val() != '') {
            discountFrom = $('#discrlFrom').val();
        }
        if ($('#discrlTo').val() != '') {
            discountTo = $('#discrlTo').val();
        }
        var rapaFrom = 0;
        var rapaTo = 100000;
        if ($('#rapaFrom').val() != '') {
            rapaFrom = $('#rapaFrom').val();
        }
        if ($('#rapaTo').val() != '') {
            rapaTo = $('#rapaTo').val();
        }
        var caratFrom = 0;
        var caratTo = 0;
        if ($('#carot-from').val() != '') {
            caratFrom = $('#carot-from').val();
        }
        if ($('#carot-to').val() != '') {
            caratTo = $('#carot-to').val();
        }
        var certi_no = new Array();
        if ($('#certi_no').val() != '') {
            certi_no = ($('#certi_no').val()).split(",");
        }
        $('.fluid').hide();
        $('.button_Ext_Div1').hide();

        $('#searchbtndiv').show();
        $('body').find('canvas').css('z-index', '-1');

        var data = {
            'method': 'getStonesBySearch',
            'shape': selected_shape,
            'color': selected_color,
            'clarity': selected_clarity,
            'cut': selected_cut,
            'polish': selected_polish,
            'sym': selected_symmetry,
            'lab': selected_lab,
            'fluor': selected_fluro,
            'location': selected_loc,
            'girdleFrom': GirdleFrom,
            'girdleTo': GirdleTo,
            'rapaFrom': rapaFrom,
            'rapaTo': rapaTo,
            'tableTo': tableTo,
            'tableFrom': tableFrom,
            'depthFrom': depthFrom,
            'depthTo': depthTo,
            'caratTo': selected_carat2,
            'caratFrom': selected_carat1,
            //                'txtCaratTo': caratTo,
            //                'txtCaratFrom': caratFrom,
            'discountTo': discountTo,
            'discountFrom': discountFrom,
            'lengthFrom': lengthFrom,
            'lengthTo': lengthTo,
            'widthFrom': widthFrom,
            'widthTo': widthTo,
            'heightFrom': heightFrom,
            'heightTo': heightTo,
        }
        if (certi_no.length > 0) {
            var arr1 = {
                'certi_no': certi_no
            }

            data = $.extend(data, arr1);
        }
        if (caratTo != 0) {
            var arr1 = {
                'txtCaratTo': caratTo
            }

            data = $.extend(data, arr1);
        }
        if (caratFrom != 0) {
            var arr1 = {
                'txtCaratFrom': caratFrom
            }
            data = $.extend(data, arr1);
        }
        $.ajax({
            url: 'functions.php',
            data: data,
            type: 'POST',
            async: false,
            beforeSend: function () {
                $('.scroll-div').show();
                $('.scroll-div').html("<img src='./assets/img/loading.gif'>");

            },
            success: function (res) {
                $('.section-table').show();
                $('.scroll-div').hide();
                //                        $('.section-table').html('');
                $('.section-table #search_table').find('tbody').remove();
                res = $.parseJSON(res);
                var cnt = 1;
				var tbody = $('<tbody/>');
                $(tbody).appendTo($('.section-table #search_table'));
                $.each(res,
                        function (json) {
                            var tr;
                            for (var i = 0; i < Object.keys(res[json]).length; i++) {
                                tr = $('<tr/>', {'class': 'select_tr popoverStoneDetails', 'data-toggle': "popover", 'data-placement': "bottom"});
                                var div1 = $('<input/>', {'type': "hidden", 'id': 'hdn_comment'});
                                var div2 = $('<input/>', {'type': "hidden", 'id': 'hdn_kts'});
                                div1.val(res[json].comments);
                                div2.val(res[json].key_to_symbol);
                                div1.appendTo(tr);
                                div2.appendTo(tr);
                                if ((res[json].remark == "MEMO" || res[json].remark == "M")) {
                                    tr.append("<td><input type='hidden' class='hdn_stock_id' value='" + res[json].stock_id + "'></td>");
                                    tr.css('pointer-events','none');
                                    tr.css('color', '#ff0000');
                                    tr.addClass('hold_tr');
                                    $('.stone_td').css('pointer-events','auto');
                                }else {
                                tr.append("<td><span><input type='checkbox' id='stone_" + cnt + "' class='chk_stone'></span><input type='hidden' class='hdn_stock_id' value='" + res[json].stock_id + "'></td>");    
                                }
                                
                                tr.append("<td>" + cnt + "</td>");
                                if ((res[json].remark == "MEMO" || res[json].remark == "M")) {
                                    tr.append("<td><i class='fa fa-circle fa-1x' aria-hidden='true' style= 'color:rgb(255,192,0);' title='Hold'></i></td>");
                                } else if(res[json].remark == "GIA" || res[json].remark == "LAB"){
                                    tr.append("<td><i class='fa fa-circle fa-1x' aria-hidden='true' style= 'color:rgb(230,13,43);' title='In lab'></i></td>");
                                }else {
                                    tr.append("<td><i class='fa fa-circle fa-1x' aria-hidden='true' style= 'color:rgb(0,176,80);' title='Available'></i></td>");
                                }
                                if (res[json].image == '') {
                                    tr.append("<td><i title='No stone image available' class='lot_no'>" + res[json].lot_no + "</i></td>");
                                } else {
                                    tr.append("<td class='stone_td'><u><i><a href='" + res[json].image + "' target='_blank' title='Click to view stone image' class='lot_no'>" + res[json].lot_no + "</a></i></u></td>");
                                }
                                tr.append("<td>" + res[json].shape + "</td>");
                                tr.append("<td class=cts>" + res[json].size + "</td>");
                                tr.append("<td>" + res[json].color + "</td>");
                                tr.append("<td>" + res[json].clarity + "</td>");
                                tr.append("<td>" + res[json].cut + "</td>");
                                tr.append("<td>" + res[json].polish + "</td>");
                                tr.append("<td>" + res[json].sym + "</td>");
                                tr.append("<td>" + res[json].fluor + "</td>");
                                tr.append("<td class=rap>" + res[json].rap + "</td>");
                                tr.append("<td class=disc>" + res[json].disc + "</td>");
                                tr.append("<td class=price>" + res[json].price + "</td>");
                                tr.append("<td class=amount>" + res[json].total + "</td>");
                                tr.append("<td>" + res[json].depth + "</td>");
                                tr.append("<td>" + res[json].table + "</td>");
                                tr.append("<td>" + res[json].MES1 + "</td>");
                                tr.append("<td>" + res[json].MES2 + "</td>");
                                tr.append("<td>" + res[json].MES3 + "</td>");
                                tr.append("<td>" + res[json].lab + "</td>");
                                tr.append("<td class='certi_no'>" + res[json].certi_no + "</td>");
                                tr.append("<td>" + res[json].location + "</td>");
                                tr.append("<td>" + res[json].crw_h + "</td>");
                                tr.append("<td>" + res[json].crw_a + "</td>");
                                tr.append("<td>" + res[json].pav_d + "</td>");
                                tr.append("<td>" + res[json].pav_a + "</td>");
                                tr.append("<td>" + res[json].girdle + "</td>");
                                tr.append("<td>" + res[json].culet + "</td>");
//                                tr.append("<td>" + res[json].key_to_symbol + "</td>");
                                tr.append("<td>" + res[json].inscription + "</td>");
//                                tr.append("<td>" + res[json].comments + "</td>");
                            }
                            cnt++;
                            $('.section-table tbody').append(tr);
                        });
                //                $('.section-table tbody tr').each(function (i) {
                //                    var td = $('<td>' + i + ' count</td>');
                //                    td.appendTo($(this));
                //                });
                //                $('#searchstonecounter').val(res);
                //                $('#Go1').html('&nbsp;&nbsp;&nbsp;&nbsp;Search&nbsp;&nbsp;(&nbsp;' + res + '&nbsp;)&nbsp;&nbsp;');
            }
        });
    }
    var t = $('#search_table').DataTable({
        "destroy": true,
         "pageLength": 100,
        "columnDefs": [{
                "searchable": false,
                "orderable": false,
                "targets": [0, 1],
            }],
        columnDefs: [{
                targets: [8, 13,14,15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27,28],
               render: $.fn.dataTable.render.number(',', '.', 2)
            }],
																			  																		  
"drawCallback": function( settings ) {
        $('.popoverStoneDetails').on('mouseover', function () {

        $('.popoverStoneDetails').popover({
            trigger: "hover",
            html: true,
            container: 'body',
            content: function () {
                var str = '<b style="font-size:12px;">Comments : </b>' + '<span style="font-size:12px;">' + $(this).find('#hdn_comment').val() + '<span>';
                str += '<br>';
                str += '<b>Key to symbol : </b>' + $(this).find('#hdn_kts').val();
                return str;
            }																			  
															  
        });

    });
    }		
    });
    t.on('order.dt search.dt', function () {
        t.column(1, {search: 'applied', order: 'applied'}).nodes().each(function (cell, i) {
            cell.innerHTML = i + 1;
        });
    }).draw();

    $('.spinner').remove();
    OnSelectRow();
}
function OnSelectRow() {
    $('.select_tr:not(.hold_tr)').on('click', function () {
        if ($(this).find('td:first').find('.chk_stone').is(':checked')) {
            $(this).find('td:first').find('.chk_stone').prop('checked', false);
            $(this).css('background-color', 'transparent');
            $('#all_stone').prop('checked', false);
            selected_stone.splice($.inArray($(this).find('.hdn_stock_id').val(), selected_stone), 1);
            calculateForRemovedStones(this);
        } else {
            $(this).find('td:first').find('.chk_stone').prop('checked', true);
            $(this).css('background-color', 'seashell');
            selected_stone.push($(this).find('.hdn_stock_id').val());
            calcualteForAddedStones(this);
        }
        showTotalCalculation();
    });
    $('.chk_stone').on('click', function () {
        if ($(this).is(':checked')) {
            $(this).prop('checked', false);
            $('#all_stone').prop('checked', false);
            $(this).parents('tr').css('background-color', 'transparent');
        } else {
            $(this).prop('checked', true);
            $(this).parents('tr').css('background-color', 'seashell');
        }
    });
    $('.section-table').find('#all_stone').on('change', function () {
        if ($(this).is(':checked')) {
            $('.section-table').find('.chk_stone').prop('checked', true);
            $('.section-table').find('.chk_stone').parents('tr').css('background-color', 'seashell');
            $('.section-table').find('.chk_stone').each(function () {
                if ($.inArray($(this).parents('td').find('.hdn_stock_id').val(), selected_stone) == -1) {
                    selected_stone.push($(this).parents('td').find('.hdn_stock_id').val());
                    calcualteForAddedStones($(this).parents('tr'));
                    showTotalCalculation();
                }
            });
        } else {
            $('.section-table').find('.chk_stone').parents('tr').css('background-color', 'transparent');
            $('.section-table').find('.chk_stone').prop('checked', false);
            $('.section-table').find('.chk_stone').removeAttr('checked');
            selected_stone = [];
            pc_cnt = 0;
            cts_cnt = 0.0;
            temp_rap = 0.0;
            rap_cnt = 0.0;
            disc_cnt = 0.0;
            price_cnt = 0.0;
            amt_cnt = 0.0;
            showTotalCalculation();
        }
    });
																			  
    $('.popoverStoneDetails').on('mouseover', function () {

        $('.popoverStoneDetails').popover({
            trigger: "hover",
            html: true,
            container: 'body',
            content: function () {
                var str = '<b style="font-size:12px;">Comments : </b>' + '<span style="font-size:12px;">' + $(this).find('#hdn_comment').val() + '<span>';
                str += '<br>';
                str += '<b>Key to symbol : </b>' + $(this).find('#hdn_kts').val();
                return str;
            }																			  
															  
        });

    });
}
																			  

function calcualteForAddedStones(ele) {
    cts_cnt = parseFloat(cts_cnt) + parseFloat($(ele).find('.cts').html());
    temp_rap = temp_rap + parseFloat($(ele).find(".rap").html().replace(/,/g, '')) * parseFloat($(ele).find(".cts").html())
    rap_cnt = temp_rap / cts_cnt;
    amt_cnt = parseFloat(amt_cnt) + parseFloat($(ele).find('.amount').html().replace(/,/g, ''));
    price_cnt = parseFloat(amt_cnt) / parseFloat(cts_cnt);
    disc_cnt = (((amt_cnt / temp_rap) * 100) - 100);
    pc_cnt++;

}

function calculateForRemovedStones(ele) {
    cts_cnt = parseFloat(cts_cnt) - parseFloat($(ele).find('.cts').html());
    temp_rap = temp_rap - ($(ele).find('.rap').html().replace(/,/g, '')) * ($(ele).find('.cts').html());
    rap_cnt = temp_rap / cts_cnt;
    amt_cnt = parseFloat(amt_cnt) - parseFloat($(ele).find('.amount').html().replace(/,/g, ''));
    price_cnt = parseFloat(amt_cnt) / parseFloat(cts_cnt);
    disc_cnt = (((amt_cnt / temp_rap) * 100) - 100);
    pc_cnt--;
}
function showTotalCalculation() {
    if (pc_cnt == 0) {
        cts_cnt = 0.0;
        temp_rap = 0.0;
        rap_cnt = 0.0;
        disc_cnt = 0.0;
        price_cnt = 0.0;
        amt_cnt = 0.0;
    }
    $('#searchbtndiv').find('table').find('#totalpcs').html(pc_cnt);
    $('#searchbtndiv').find('table').find('#ctstotal').html((cts_cnt).toFixed(2) + ' CTS');
    $('#searchbtndiv').find('table').find('#totalrap').html(rap_cnt.toFixed(2));
    $('#searchbtndiv').find('table').find('#totaldiscount').html(disc_cnt.toFixed(2) + '%');
    $('#searchbtndiv').find('table').find('#totalprice').html(price_cnt.toFixed(2) + '$');
    $('#searchbtndiv').find('table').find('#totalamount').html(amt_cnt.toFixed(2) + '$');



}
function ModifySearch() {
    $('.fluid').show();
    $('.button_Ext_Div1').show();
    $('.section-table').hide();
    $('#searchbtndiv').hide();
}
function NewSearch() {
    window.location.href = 'search.php';
}
function getCounts(ch, elem) {
    if ($(elem).hasClass('ui-selectee')) {
        if ($(elem).hasClass('ui-selected')) {
            $(elem).removeClass('ui-selected');
        } else {
            $(elem).addClass('ui-selected');
        }
    }
    if (ch == 'selectable_boxcarats') {
        if ($(elem).hasClass('ui-selected')) {
            selected_carats_count1.push($(elem).attr('caratsid1'));
            selected_carats_count2.push($(elem).attr('caratsid2'));
        } else {
            selected_carats_count1.splice($.inArray($(elem).attr('caratsid1'), selected_carats_count1), 1);
            selected_carats_count2.splice($.inArray($(elem).attr('caratsid2'), selected_carats_count2), 1);
        }
    } else if (ch == 'selectable_boxshape') {

        if ($(elem).hasClass('ui-selected')) {
//                    selected_shape_count.push($(elem).attr('id'));
            selected_shape_count.push(($(elem).attr('cust_id')));
            //        selected_shape_count.push(selected_shape_count.split(' '));
        } else {
            selected_shape_count.splice($.inArray($(elem).attr('cust_id'), selected_shape_count), 1);
        }
        if ($.inArray('B,BR,RB,RD,RBC,RND,ROUND', selected_shape_count) != -1 && selected_shape_count.length==1) {
            $('#selectable_cut').removeClass('disabled_btn');
            $('#selectable_boxsmart').removeClass('disabled_btn');
        } else if(selected_shape_count.length==0){
            $('#selectable_cut').removeClass('disabled_btn');
            $('#selectable_boxsmart').removeClass('disabled_btn');
        }else{
            $('#selectable_cut').addClass('disabled_btn');
            $('#selectable_boxsmart').addClass('disabled_btn');
            selected_cut_count=[];
            $('#selectable_cut').find('.ui-selected').removeClass('ui-selected');
            $('#selectable_boxsmart').find('.ui-selected').removeClass('ui-selected');
        }

    } else if (ch == 'selectable_boxcolor') {
        if ($(elem).hasClass('ui-selected')) {
            selected_color_count.push($(elem).attr('cust_id'));
        } else {
            selected_color_count.splice($.inArray($(elem).attr('cust_id'), selected_color_count), 1);
        }
    } else if (ch == 'selectable_boxclarity') {
        if ($(elem).hasClass('ui-selected')) {
            selected_clarity_count.push($(elem).attr('cust_id'));
        } else {
            selected_clarity_count.splice($.inArray($.trim($(elem).html()), selected_clarity_count), 1);
        }
    } else if (ch == 'selectable_cut') {
        if ($(elem).hasClass('ui-selected')) {
            selected_cut_count.push($(elem).attr('cust_id'));
//            $('#selectable_boxsmart').addClass('disabled_btn');
        } else {
            selected_cut_count.splice($.inArray($.trim($(elem).html()), selected_cut_count), 1);
//            $('#selectable_boxsmart').removeClass('disabled_btn');
        }
    } else if (ch == 'selectable_polish') {
        if ($(elem).hasClass('ui-selected')) {
            selected_polish_count.push($(elem).attr('cust_id'));
//            $('#selectable_boxsmart').addClass('disabled_btn');
        } else {
            selected_polish_count.splice($.inArray($.trim($(elem).html()), selected_polish_count), 1);
//            $('#selectable_boxsmart').removeClass('disabled_btn');
        }
    } else if (ch == 'selectable_symmetry') {
        if ($(elem).hasClass('ui-selected')) {
            selected_symmetry_count.push($(elem).attr('cust_id'));
//            $('#selectable_boxsmart').addClass('disabled_btn');
        } else {
            selected_symmetry_count.splice($.inArray($.trim($(elem).html()), selected_symmetry_count), 1);
//            $('#selectable_boxsmart').removeClass('disabled_btn');
        }
    } else if (ch == 'selectable_boxlab') {
        if ($(elem).hasClass('ui-selected')) {
            selected_lab_count.push($(elem).attr('cust_id'));
        } else {
            selected_lab_count.splice($.inArray($(elem).attr('cust_id'), selected_lab_count), 1);
        }
    } else if (ch == 'selectable_boxfluro') {
        if ($(elem).hasClass('ui-selected')) {
            selected_fluor_count.push($(elem).attr('cust_id'));
        } else {
            selected_fluor_count.splice($.inArray($(elem).attr('cust_id'), selected_fluor_count), 1);
        }
    } else if (ch == 'selectable_location') {
        if ($(elem).hasClass('ui-selected')) {
            selected_location_count.push($(elem).attr('cust_id'));
        } else {
            selected_location_count.splice($.inArray($(elem).attr('cust_id'), selected_location_count), 1);
        }
    } else if (ch == 'selectable_boxsmart') {
        if ($(elem).hasClass('ui-selected')) {
            if ($(elem).attr('id') == '3EX') {
                selected_cut_count.push('EX');
                selected_polish_count.push('EX');
                selected_symmetry_count.push('EX');
            }
            if ($(elem).attr('id') == 'EXVG+') {
                selected_cut_count.push('EX');
                selected_polish_count.push('VG');
                selected_polish_count.push('EX');
                selected_symmetry_count.push('EX');
                selected_symmetry_count.push('VG');
            }
            if ($(elem).attr('id') == '3VG+') {
                selected_cut_count.push('EX');
                selected_cut_count.push('VG');
                selected_polish_count.push('EX');
                selected_polish_count.push('VG');
                selected_symmetry_count.push('EX');
                selected_symmetry_count.push('VG');
            }
            $('#selectable_cut').addClass('disabled_btn');
            $('#selectable_polish').addClass('disabled_btn');
            $('#selectable_symmetry').addClass('disabled_btn');
        } else {
            if ($(elem).attr('id') == '3EX') {
                selected_cut_count.splice($.inArray('EX', selected_cut_count), 1);
                selected_polish_count.splice($.inArray('EX', selected_polish_count), 1);
                selected_symmetry_count.splice($.inArray('EX', selected_symmetry_count), 1);
            }
            if ($(elem).attr('id') == 'EXVG+') {
                selected_cut_count.splice($.inArray('EX', selected_cut_count), 1);
                selected_polish_count.splice($.inArray('EX', selected_polish_count), 1);
                selected_polish_count.splice($.inArray('VG', selected_polish_count), 1);
                selected_symmetry_count.splice($.inArray('EX', selected_symmetry_count), 1);
                selected_symmetry_count.splice($.inArray('VG', selected_symmetry_count), 1);
            }
            if ($(elem).attr('id') == '3VG+') {
                selected_cut_count.splice($.inArray('EX', selected_cut_count), 1);
                selected_cut_count.splice($.inArray('VG', selected_cut_count), 1);
                selected_polish_count.splice($.inArray('EX', selected_polish_count), 1);
                selected_polish_count.splice($.inArray('VG', selected_polish_count), 1);
                selected_symmetry_count.splice($.inArray('EX', selected_symmetry_count), 1);
                selected_symmetry_count.splice($.inArray('VG', selected_symmetry_count), 1);
            }
            if ($('#selectable_boxsmart').find('.ui-selected').length == 0) {
                $('#selectable_cut').removeClass('disabled_btn');
                $('#selectable_polish').removeClass('disabled_btn');
                $('#selectable_symmetry').removeClass('disabled_btn');
            }
        }
    }

    var caratFrom = 0;
    var caratTo = 0;
    if ($('#carot-from').val() != '') {
        caratFrom = $('#carot-from').val();
    }
    if ($('#carot-to').val() != '') {
        caratTo = $('#carot-to').val();
    }
    var lengthFrom = 0;
    var lengthTo = 100;
    if ($('#lengthFrom').val() != '') {
        lengthFrom = $('#lengthFrom').val();
    }
    if ($('#lengthTo').val() != '') {
        lengthTo = $('#lengthTo').val();
    }

    var widthFrom = 0;
    var widthTo = 100;
    if ($('#widthFrom').val() != '') {
        widthFrom = $('#widthFrom').val();
    }
    if ($('#widthTo').val() != '') {
        widthTo = $('#widthTo').val();
    }

    var heightFrom = 0;
    var heightTo = 100;
    if ($('#heightFrom').val() != '') {
        heightFrom = $('#heightFrom').val();
    }
    if ($('#heightTo').val() != '') {
        heightTo = $('#heightTo').val();
    }
    var tableFrom = 0;
    var tableTo = 100;
    if ($('#tableFrom').val() != '') {
        tableFrom = $('#tableFrom').val();
    }
    if ($('#tableTo').val() != '') {
        tableTo = $('#tableTo').val();
    }
    var depthFrom = 0;
    var depthTo = 100;
    if ($('#depthFrom').val() != '') {
        depthFrom = $('#depthFrom').val();
    }
    if ($('#depthTo').val() != '') {
        depthTo = $('#depthTo').val();
    }
    var discountFrom = 0;
    var discountTo = 100;
    if ($('#discrlFrom').val() != '') {
        discountFrom = $('#discrlFrom').val();
    }
    if ($('#discrlTo').val() != '') {
        discountTo = $('#discrlTo').val();
    }
    var rapaFrom = 0;
    var rapaTo = 100000;
    if ($('#rapaFrom').val() != '') {
        rapaFrom = $('#rapaFrom').val();
    }
    if ($('#rapaTo').val() != '') {
        rapaTo = $('#rapaTo').val();
    }
    var GirdleFrom = 0;
    var GirdleTo = 10;
    if ($('#girdleFrom').val() != '') {
        GirdleFrom = $('#girdleFrom').val();
    }
    if ($('#girdleTo').val() != '') {
        GirdleTo = $('#girdleTo').val();
    }
    var certi_no = new Array();
    if ($('#certi_no').val() != '') {
        certi_no = ($('#certi_no').val()).split(",");
    }
    var data = {
        'method': 'getStoneCountBySearch',
        'shape': selected_shape_count,
        'color': selected_color_count,
        'clarity': selected_clarity_count,
        'cut': selected_cut_count,
        'polish': selected_polish_count,
        'sym': selected_symmetry_count,
        'caratTo': selected_carats_count2,
        'caratFrom': selected_carats_count1,
        'lab': selected_lab_count,
        'fluor': selected_fluor_count,
        'location': selected_location_count,
        'lengthFrom': lengthFrom,
        'lengthTo': lengthTo,
        'widthFrom': widthFrom,
        'widthTo': widthTo,
        'heightFrom': heightFrom,
        'heightTo': heightTo,
        'tableTo': tableTo,
        'tableFrom': tableFrom,
        'depthFrom': depthFrom,
        'depthTo': depthTo,
        'girdleFrom': GirdleFrom,
        'girdleTo': GirdleTo,
        'rapaFrom': rapaFrom,
        'rapaTo': rapaTo,
        'discountTo': discountTo,
        'discountFrom': discountFrom,
        //                'txtCaratTo': caratTo,
        //                'txtCaratFrom': caratFrom,
    }
    if (certi_no != 0) {
        var arr1 = {
            'certi_no': certi_no
        }

        data = $.extend(data, arr1);
    }
    if (caratTo != 0) {
        var arr1 = {
            'txtCaratTo': caratTo
        }

        data = $.extend(data, arr1);
    }
    if (caratFrom != 0) {
        var arr1 = {
            'txtCaratFrom': caratFrom
        }
        data = $.extend(data, arr1);
    }
    $.ajax({
        url: 'functions.php',
        data: data,
        type: 'POST',
        async: false,
        success: function (res) {
            $('#searchstonecounter').val(res);
            $('#Go1').html('&nbsp;&nbsp;&nbsp;&nbsp;Search&nbsp;&nbsp;(&nbsp;' + res + '&nbsp;)&nbsp;&nbsp;');
        }
    });
}
function getStoneCounter() {
    $.ajax({
        url: 'functions.php',
        data: {'method': 'getStoneCountTotal'},
        type: 'POST',
        async: false,
        success: function (res) {
            $('#searchstonecounter').val(res);
            $('#Go1').html('&nbsp;&nbsp;&nbsp;&nbsp;Search&nbsp;&nbsp;(&nbsp;' + res + '&nbsp;)&nbsp;&nbsp;');
        }
    });
}

function submitSession() {
    var stone_added = selected_stone.length;
    $('#top-navbar-1').find('ul').find('.cart').find('.cart_count').show();
    $('#top-navbar-1').find('ul').find('.cart').find('.fa-comment').show();
    $('#top-navbar-1').find('ul').find('.cart').find('.cart_count').html(stone_added);
    if (stone_added > 0) {
        swal('Added', stone_added + ' stones has been added to your cart', 'success');
        AddToCart();
    } else {
        swal('', 'Please atleast select one stone to add to cart', 'error');
    }
    //        AddToCartNew(userlevel);
}
function AddToCart() {
    $.ajax({
        url: 'functions.php',
        data: {'selection': selected_stone, 'method': 'addToCart'},
        type: 'POST',
        async: false,
        success: function (res) {
            window.location.href = 'search.php';
        }
    }
    );
}
function calculate_added_stones(ele) {
    pc_cnt++;
    cts_cnt = parseFloat(cts_cnt) + parseFloat($(ele).find('.cts').html());
    temp_rap = temp_rap + parseFloat($(ele).find(".rap").html().replace(/,/g, '')) * parseFloat($(ele).find(".cts").html());
    rap_cnt = temp_rap / cts_cnt;
    amt_cnt = parseFloat(amt_cnt) + parseFloat($(ele).find('.amount').html().replace(/,/g, ''));
    price_cnt = parseFloat(amt_cnt) / parseFloat(cts_cnt);
    disc_cnt = (((amt_cnt / temp_rap) * 100) - 100);
    $('#searchbtndiv').find('table').find('#totalpcs').html(pc_cnt);
    $('#searchbtndiv').find('table').find('#ctstotal').html((cts_cnt).toFixed(2) + ' CTS');
    $('#searchbtndiv').find('table').find('#totalrap').html(rap_cnt.toFixed(2));
    $('#searchbtndiv').find('table').find('#totaldiscount').html(disc_cnt.toFixed(2) + '%');
    $('#searchbtndiv').find('table').find('#totalprice').html(price_cnt.toFixed(2) + '$');
    $('#searchbtndiv').find('table').find('#totalamount').html(amt_cnt.toFixed(2) + '$');
}

function calculate_removed_stones(ele) {
    cts_cnt = parseFloat(cts_cnt) - parseFloat($(ele).find('.cts').html());
    temp_rap = temp_rap - ($(ele).find('.rap').html().replace(/,/g, '')) * ($(ele).find('.cts').html());
    rap_cnt = temp_rap / cts_cnt;
    amt_cnt = parseFloat(amt_cnt) - parseFloat($(ele).find('.amount').html().replace(/,/g, ''));
    price_cnt = parseFloat(amt_cnt) / parseFloat(cts_cnt);
    disc_cnt = (((amt_cnt / temp_rap) * 100) - 100);
    pc_cnt--;
    if (pc_cnt == 0) {
        cts_cnt = 0.0;
        temp_rap = 0.0;
        rap_cnt = 0.0;
        disc_cnt = 0.0;
        price_cnt = 0.0;
        amt_cnt = 0.0;
    }
    $('#searchbtndiv').find('table').find('#totalpcs').html(pc_cnt);
    $('#searchbtndiv').find('table').find('#ctstotal').html((cts_cnt).toFixed(2) + ' CTS');
    $('#searchbtndiv').find('table').find('#totalrap').html(rap_cnt.toFixed(2));
    $('#searchbtndiv').find('table').find('#totaldiscount').html(disc_cnt.toFixed(2) + '%');
    $('#searchbtndiv').find('table').find('#totalprice').html(price_cnt.toFixed(2) + '$');
    $('#searchbtndiv').find('table').find('#totalamount').html(amt_cnt.toFixed(2) + '$');
}
function delete_cart_stoness() {
    if ($(".chk_stone:checked").length == 0) {
        swal('', 'Please select atleast one stone to remove', 'info');
    } else {
    var lot_array =[];
    var certi_array = [];
        $('.select_tr').each(function (i) {
            if (!($(this).find('.chk_stone').is(':checked'))) {
                cart_stones.push($(this).find('td:first').find('.hdn_stock_id').val());
            }else{
                lot_array.push($(this).find('.lot_no').html());
                certi_array.push($(this).find('.certi_no').html());
            }
        });
        
        var empty_cart = false;
        if (cart_stones.length == 0) {
            empty_cart = true;
        }

        var data =
                {'empty_cart': empty_cart, 'selected_stones': cart_stones, 'lot_array': lot_array, 'certi_array': certi_array, 'method': 'remove_selected_from_cart'};
        $.ajax({
            url: 'functions.php',
            data: data,
            type: 'POST',
            async: false,
            success: function (res) {
                if (res == 'success') {
                    if (empty_cart) {
                        swal('Updated', 'Your cart is empty', 'success');
                        window.location.href = 'search.php';
                    } else {
                        swal('Updated', 'Your cart has been updated', 'success');
                        window.location.href = 'cart_view.php';
                    }
                }
            }
        });
    }
}
function confirm_cart_stoness() {
    if ($(".chk_stone:checked").length == 0) {
        swal('', 'Please select atleast one stone to order', 'info');
    } else {
        var lot_array = [];
        var certi_array = [];
        $('.select_tr').each(function (i) {
            if (($(this).find('.chk_stone').is(':checked'))) {
                ordered_stones.push($(this).find('td:first').find('.hdn_stock_id').val());
                lot_array.push($(this).find('.lot_no').html());
                certi_array.push($(this).find('.certi_no').html());
            } else {
                remaining_stones.push($(this).find('td:first').find('.hdn_stock_id').val());
            }
        });
        var empty_cart = false;
        if (remaining_stones.length == 0) {
            empty_cart = true;
        }
        $.ajax({
            url: 'functions.php',
            data: {'ordered_stones': ordered_stones, 'method': 'confirm_stones', 'remaining_stones': remaining_stones, 'empty_cart': empty_cart, 'pcs_count': pc_cnt, 'carat_count': cts_cnt, 'rap_count': rap_cnt, 'disc_count': disc_cnt, 'price_count': price_cnt, 'amount_count': amt_cnt, 'lot_array': lot_array, 'certi_array': certi_array},
            type: 'POST',
            async: false,
            success: function (res) {
                if (res == 'success deleted') {
                    swal('success', 'Thank you for your order.Please check your registered email for order summary.', 'success');
                    setTimeout(function(){
						window.location.href = 'search.php';
					},3000);
                } else {
                    swal('', 'Please try again later', 'error');
                }
            }
        });
    }
}

function Deactivate_user(ele) {
    var userID = $(ele).parents('tr').find('#user_id').val();
    $.ajax({
        url: 'functions.php',
        data: {'user_id': userID, 'method': 'deactivate_user'},
        type: 'POST',
        async: false,
        success: function (res) {
            if (res == 'success') {
                swal('success', 'This user account has been deactivated successfully', 'success');
                $(ele).removeAttr('id');
                $(ele).attr('id', 'disable');
                $(ele).css('color', 'rgb(255,192,0)');
                $(ele).attr('title', 'Click to enable');
                $(ele).attr('onclick', 'Activate_user(this);');
            } else {
                swal('', 'Error in deactivating user account. Please try again later', 'error');
            }
        }
    });
}
function Activate_user(ele) {
    var userID = $(ele).parents('tr').find('#user_id').val();
    $.ajax({
        url: 'functions.php',
        data: {'user_id': userID, 'method': 'activate_user'},
        type: 'POST',
        async: false,
        success: function (res) {
            if (res == 'success') {
                swal('success', 'This user account has been activated successfully', 'success');
                $(ele).removeAttr('id');
                $(ele).attr('id', 'active');
                $(ele).css('color', 'rgb(0,176,80)');
                $(ele).attr('title', 'Click to disable');
                $(ele).attr('onclick', 'Deactivate_user(this);');
            } else {
                swal('', 'Error in activating user account. Please try again later', 'error');
            }
        }
    });
}

function getMouseOver(ele) {
    $(ele).css('color', '#00508e');
}
function getMouseOut(ele) {
    $(ele).css('color', 'rgb(128, 130, 133)');
}
function scrollbartop() {
    $(document).ready(function () {
        $(this).scrollTop(0);
        $(this).scrollLeft(0);
    });
}
function ToggleAdvanceDiv() {
    $('#searchDiv').find('#advanceddiv11').show();
}
function change_language() {
	var url=window.location.href;
	console.log(url.substring(url.lastIndexOf('/') + 1));
	window.location.href = 'search-cn.php';
        var data = {
            'lang' : 'en',
            'method': 'change_language'
        };
        $.ajax({
            url: 'functions.php',
            data: data,
            type: 'post',
            async: false,
            success: function (res) {
                console.log(res);
            }
        });
 
}

function downloadExcel() {
    var stones_array = [];
    $('#table_order').find('.select_tr').each(function (i) {
        if ($(this).find('.chk_stone').is(':checked')) {
            stones_array.push($(this).find('.stone_lot').html());
        }
    });
    
    var empty_cart = false;
    if (stones_array.length == 0) {
        empty_cart = true;
    }
    var data = {
        'stones' : stones_array,
        'method': 'download_excel',
        'carat': $('#ctstotal').html(),
        'rap': $('#totalrap').html(),
        'disc': $('#totaldiscount').html(),
        'price': $('#totalprice').html(),
        'amount': $('#totalamount').html()
    };
    var excel_data = '';
    $.ajax({
        url: 'functions.php',
        data: data,
        type: 'post',
        async: false,
        success: function (res) {
            excel_data = res;
        }
    });
    var url = 'data:application/vnd.ms-excel,' + excel_data;
    location.href = url
    return false;
}

$(document).ready(function () {
    0 == $(".navbar-nav").find("li.cart").find(".cart_count").html() ? ($(".navbar-nav").find("li.cart").find(".cart_count").hide(), $(".navbar-nav").find("li.cart").find(".fa-comment").hide()) : ($(".navbar-nav").find("li.cart").find(".cart_count").show(), $(".navbar-nav").find("li.cart").find(".fa-comment").show()), $(".cart").on("click", function () {
        redirect_to_cart()
    })
    $('.toggler').on('click', function () {
        $(this).parent().children().toggle();  //swaps the display:none between the two spans
        $(this).parent().parent().find('.toggled_content').slideToggle();  //swap the display of the main content with slide action

    });
});
