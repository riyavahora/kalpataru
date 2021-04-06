@include('header')

<!-- Page Title -->
<div class="page-title-container">
    <div class="container" id="fa-envelope">
        <div class="row">
            <div class="col-sm-12 wow fadeIn">
                <i class="fa fa-envelope"></i>
                <h1><?= $lang['page-contact'] ?> /</h1>
                <p><?= $lang['contact-desc'] ?></p>
            </div>
        </div>
    </div>
</div>

<!-- Contact Us -->
<div class="contact-us-container">
    <div class="container">
        <div class="row">
            <div class="col-sm-7 contact-form wow fadeInLeft">
                <p>
                    <?= $lang['con-alert'] ?>
                </p>
                <form role="form" action="sendmail.php" method="post">
                    <div class="form-group">
                        <label for="contact-name"><?= $lang['sub-name'] ?></label>
                        <input type="text" name="name" placeholder="Enter your name..." class="contact-name" id="contact-name">
                    </div>
                    <div class="form-group">
                        <label for="contact-email"><?= $lang['sub-address'] ?></label>
                        <input type="text" name="email" placeholder="Enter your email..." class="contact-email" id="contact-email">
                    </div>
                    <div class="form-group">
                        <label for="contact-mb"><?= $lang['link-mobile'] ?></label>
                        <input type="text" name="mb" placeholder="Enter your mobile number..." class="contact-mb" id="contact-mb">
                    </div>
                    <div class="form-group">
                        <label for="contact-subject"><?= $lang['con-sub'] ?></label>
                        <input type="text" name="subject" placeholder="Your subject..." class="contact-subject" id="contact-subject">
                    </div>
                    <div class="form-group">
                        <label for="contact-message"><?= $lang['con-msg'] ?></label>
                        <textarea name="message" placeholder="Your message..." class="contact-message" id="contact-message"></textarea>
                    </div>
                    <button type="submit" class="btn"><?= $lang['con-send'] ?></button>
                </form>
            </div>
            <div class="col-sm-5 contact-address wow fadeInUp">
                <h3><?= $lang['con-loc'] ?></h3>
                <div class="map" id="map"></div>
                <h5><b><?= $lang['hk-add'] ?></b></h5>
                <h5><b>Kalpataru(HK) Ltd</b></h5>
                Room 701 Hart Avenue Plaza , 5-9 Hart Avenue ,
                <br/>Tsim Sha Tsui,Kowloon Hong Kong
                <br/><b>Phone:</b> +852 27238114
                <br/><b>Mobile No:</b> +852 68971514



                <br/><h5><b><?= $lang['be-add'] ?></b></h5>
                <h5><b>Kalpataru BVBA/DIAVEER BVBA</b></h5>
                Hoveniersstraat 30, Bus 229 , Room 415-416,
                <br/>2018 Antwerpen, Belgium
                <br/><b>Phone:</b> +323 2260750
                <br/><b>Mobile No:</b> +32 479685863
            </div>
        </div>
    </div>
</div>
@include('footer')
