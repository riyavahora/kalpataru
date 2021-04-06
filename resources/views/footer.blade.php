<!-- Footer -->
<footer>
    <div class="container">
        <div class="row">
            <div class="col-sm-4 footer-box wow fadeInUp">
                <h4><?= $lang['page-about'] ?> </h4>
                <div class="footer-box-text">
                    <p>
                        Kalpataru, is <strong>the world’s largest company of diamonds</strong>.

                        We are the <b>benchmark in the industry </b>when it comes to <b>ethical diamond manufacturing, quality of diamonds, diamond variety and quantity</b>.
                    </p>
                    <p><a href="about.php">Read more...</a></p>
                </div>
            </div>
            <div class="col-sm-4 footer-box wow fadeInDown">
                <h4><?= $lang['sub-updates'] ?></h4>
                <div class="footer-box-text footer-box-text-subscribe">
                    <p><?= $lang['sub-email'] ?></p>
                    <form role="form" action="assets/subscribe.php" method="post" id="subscribtion-form">
                        <div class="form-group">
                            <label class="sr-only" for="subscribe-name"><?= $lang['sub-name'] ?></label>
                            <input type="text" name="name" placeholder="Name..." class="subscribe-email" id="subscribe-name" required>
                        </div>
                        <div class="form-group">
                            <label class="sr-only" for="subscribe-email"><?= $lang['sub-address'] ?></label>
                            <input type="text" name="email" placeholder="Email..." class="subscribe-email" id="subscribe-email" required>
                        </div>
                        <button type="submit" class="btn"><?= $lang['sub-subscribe'] ?></button>
                    </form>
                    <p class="success-message"></p>
                    <p class="error-message"></p>
                </div>
            </div>
            <!--            <div class="col-sm-3 footer-box wow fadeInUp">
                            <h4>Flickr Photos</h4>
                            <div class="footer-box-text flickr-feed"></div>
                        </div>-->
            <div class="col-sm-4 footer-box wow fadeInDown">
                <h4><?= $lang['page-contact'] ?></h4>
                <div class="footer-box-text footer-box-text-contact">
                    <p><i class="fa fa-map-marker"></i> <?= $lang['link-address'] ?> Room 701 Hart Avenue Plaza,5-9A Hart Avenue, Tsim Sha Tsui, Hong Kong</p>
                    <p><i class="fa fa-phone"></i> <?= $lang['link-phone'] ?> +852 27238114</p>
                    <p><i class="fa fa-mobile-phone"></i> <?= $lang['link-mobile'] ?> +852 68971514 / +852 54400473 / +852 54209200</p>
                    <p><i class="fa fa-skype"></i> <?= $lang['link-skype'] ?> kalpataru9 / in.kalpataru</p>
                    <p><i class="fa fa-wechat"></i> <?= $lang['link-wechat'] ?> kalpataru9 / KathanKalpataru9</p>
                   <!-- <p><i class="fa fa-qq"></i> QQ: 1841749587</p>-->
                    <p><i class="fa fa-envelope"></i> <?= $lang['link-email'] ?> <a href="">sales@kalpatarugroup.net</a></p>
                    <p><i class="fa fa-envelope"></i> <?= $lang['link-email'] ?> <a href="">kalpataru.hk@gmail.com</a></p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 wow fadeIn">
                <div class="footer-border"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-7 footer-copyright wow fadeIn">
                <p>Copyright <i class="fa fa-copyright"></i> 2020 Kalpataru - All rights reserved by Parshwa.</p>
            </div>
            <div class="col-sm-5 footer-social wow fadeIn">
                <a href="https://www.facebook.com/pg/kalpataruhkltd/about/"><i class="fa fa-facebook"></i></a>
                <a href="https://plus.google.com/108523064727603328928"><i class="fa fa-google-plus"></i></a>
                <a href="skype:Kalpataru9?add"><i class="fa fa-skype"></i></a>
                <!--<a href="https://in.linkedin.com/pub/dir/Kalpataru/+"><i class="fa fa-linkedin"></i></a>-->
            </div>
        </div>
    </div>
</footer>

<!-- Javascript -->
<script src="assets/js/jquery-1.11.1.min.js"></script>
<script src="assets/bootstrap/js/bootstrap.min.js"></script>
<script src="assets/js/bootstrap-hover-dropdown.min.js"></script>
<script src="assets/js/jquery.backstretch.min.js"></script>
<script src="assets/js/wow.min.js"></script>
<script src="assets/js/retina-1.1.0.min.js"></script>
<script src="assets/js/jquery.magnific-popup.min.js"></script>
<script src="assets/flexslider/jquery.flexslider-min.js"></script>
<script src="assets/js/jflickrfeed.min.js"></script>
<script src="assets/js/masonry.pkgd.min.js"></script>
<script src="assets/js/colorbox.js"></script>
<script src="assets/js/jquery.ui.map.min.js"></script>
<script src="assets/js/scripts.js"></script>
<script src="assets/js/functions.js?v=1.3.1.5"></script>
<script src="assets/js/sweetalert.min.js"></script>
<script>
    function initMap() {
        var map;
        var bounds = new google.maps.LatLngBounds();
        var mapOptions = {
            mapTypeId: 'roadmap'
        };

        // Display a map on the web page
        map = new google.maps.Map(document.getElementById("map"), mapOptions);
        map.setTilt(50);

        // Multiple markers location, latitude, and longitude
      var markers = [
            ['KALPATARU HK LTD ,Hart Avenue Plaza , Tsim Sha Tsui, Hong Kong',22.2979489,114.1741949],
//        ['Hoveniersstraat, Antwerpen, Belgium', 51.215118, 4.418783],
        ];

        // Info window content
        var infoWindowContent = [
            ['<div class="info_content">' +
                        '<h3>KALPATARU HK LTD</h3>' +
                        '<h5>5-9A Hart Avenue</h5>' +
                        '<p>Hart Avenue Plaza located in the Tsim Sha Tsui, Hong Kong.</p>' + '</div>'],
			//        ['<div class="info_content">' +
//        '<h3>Brooklyn Public Library</h3>' +
//        '<p>The Brooklyn Public Library (BPL) is the public library system of the borough of Brooklyn, in New York City.</p>' +
//        '</div>']
        ];

        // Add multiple markers to map
        var infoWindow = new google.maps.InfoWindow(), marker, i;

        // Place each marker on the map
        for (i = 0; i < markers.length; i++) {
            var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
            bounds.extend(position);
            marker = new google.maps.Marker({
                position: position,
                map: map,
                title: markers[i][0]
            });

            // Add info window to marker
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infoWindow.setContent(infoWindowContent[i][0]);
                    infoWindow.open(map, marker);
                }
            })(marker, i));

            // Center the map to fit all markers on the screen
            map.fitBounds(bounds);
        }

        // Set zoom level
        var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function (event) {
            this.setZoom(14);
            google.maps.event.removeListener(boundsListener);
        });

    }
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDNXL6PurSBjQbkUjzZsR3skgVYxEjuv4g&callback=initMap"></script>
<script src="assets/js/jquery.dataTables.min.js"></script>
<script>
    $(document).ready(function () {
        var id = $('.page-title-container').find('div:first').attr('id');
        $('.nav li').removeClass('active');
        $('.nav').find('.' + id).parents('li').addClass('active');
        if (id == undefined) {
            $('.nav').find('li:first').addClass('active');
        }
    });
</script>
</body>
</html>
