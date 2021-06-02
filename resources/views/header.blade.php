<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Kalpataru</title>

    <!-- CSS -->
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,400">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Droid+Sans">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Lobster">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/css/animate.css">
    <link rel="stylesheet" href="assets/css/magnific-popup.css">
    <link rel="stylesheet" href="assets/flexslider/flexslider.css">
    <link rel="stylesheet" href="assets/css/form-elements.css">
    <link rel="stylesheet" href="assets/css/style.css?v=1.1">
    <link rel="stylesheet" href="assets/css/media-queries.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->

    <!-- Favicon and touch icons -->
    <link rel="shortcut icon" href="assets/ico/favicon.ico">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="assets/ico/apple-touch-icon-57-precomposed.png">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">

    <script src="assets/js/jquery-1.11.1.min.js"></script>
</head>

<body>
    <?php
        // if (isset($_SESSION['user']) && $_SESSION['user'] != '') {
        //     if (isset($_SESSION['lang']) && $_SESSION['lang'] != '') {

        //     } else {
        //         $servername = "localhost:3306";
        //         $username = "root";
        //         $password = "";
        //         $dbname = "testdb";
        //         $conn = new mysqli($servername, $username, $password, $dbname);
        //         $sql = 'SELECT language FROM  `users` WHERE  `user_id` =  ' . $_SESSION['user_id'];
        //         $result = $conn->query($sql);

        //         if (($result = $conn->query($sql)) !== FALSE) {
        //             if ($result->num_rows > 0) {
        //                 while ($row = $result->fetch_assoc()) {
        //                     $_SESSION['lang'] = $row['language'];
        //                 }
        //             }
        //         }
        //     }
        // }
        // if (empty($_SESSION['lang'])) {
        //     $_SESSION['lang'] = 'en';
        // }

        // if (isset($_GET['lang'])) {
        //     $_SESSION['lang'] = $_GET['lang'];
        // }
        // if (isset($_GET['lang']) && isset($_SESSION['user_id'])) {
        //     $_SESSION['lang'] = $_GET['lang'];
        //     $servername = "localhost:3306";
        //     $username = "root";
        //     $password = "";
        //     $dbname = "testdb";
        //     $conn = new mysqli($servername, $username, $password, $dbname);
        //     $insert_sql = "UPDATE `users` SET `language` = '" . $_SESSION['lang'] . "'  WHERE `user_id` =  " . $_SESSION['user_id'];
        //     $result = $conn->query($insert_sql);
        //     $inserted_id = $conn->insert_id;
        //     if ($result) {
        //         return "success";
        //     }
        // }


        // $file = 'lang-' . $_SESSION['lang'] . '.php';
        // include $file;
        ?>
    <!-- Top menu -->
    <nav class="navbar" role="navigation" style="z-index: 1099;">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#top-navbar-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">Kalpataru - Importer and exporter of diamonds...</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="top-navbar-1">
                <ul class="nav navbar-nav navbar-right" style="z-index: 199;">
                    <li class="active">
                        <a href="/" class="clickable">
                            <i class="fa fa-home"></i><br><?= $lang['nav-home'] ?>
                        </a>
                    </li>
                    <li>
                        <?php
                            if($loggedUser) {
                                ?>
                        <a href="search" class="clickable"><i
                                class="fa fa-search"></i><br><?= $lang['nav-stock'] ?></a>
                        <?php
                            } else {
                                ?>
                        <a href="login" class="search-page"><i class="fa fa-search"></i><br><?= $lang['nav-stock'] ?></a>
                        <script type="text/javascript">
                            $(document).ready(function () {
                                        $('.search-page').parents('li').on('click', function () {
											 swal({
														title: "",
														text: "Please login to access Stock",
														type: "info"
													});
										});
                                    });
                        </script>
                        <?php } ?>
                    </li>
                    <!--   <li>
                               <a href="about.php"><i class="fa fa-info-circle"></i><br><?= $lang['nav-about'] ?></a>
                           </li>-->
                    <li>
                        <a href="contact"><i class="fa fa-envelope"></i><br><?= $lang['nav-contact'] ?></a>
                    </li>
                    <?php
  						// if (session_id() == '') {
                        //     session_start();
                        // }
                        // if (isset($_SESSION['user']) && $_SESSION['user'] != '') {
                        //     $servername = "localhost";
                        //     $username = "u284333242_kalpataru";
                        //     $password = "Kalpataru9";
                        //     $dbname = "u284333242_testdb";
                        //     $conn = new mysqli($servername, $username, $password, $dbname);
                        //     $sql = 'SELECT COUNT(*) as total FROM  `shopping_cart` WHERE  `user_id` =  ' . $_SESSION['user_id'];
                        //     $result = $conn->query($sql);

                        //     if (($result = $conn->query($sql)) !== FALSE) {
                        //         if ($result->num_rows > 0) {
                        //             while ($row = $result->fetch_assoc()) {
                        //                 $num = $row['total'];
                        //             }
                        //         } else {
                        //             $num = 0;
                        //         }
                        //     }
                            ?>
                    <?php
                            // session_start();
                            // if (isset($_SESSION['user']) && $_SESSION['user'] != '') {
                                ?>
                    <li class="cart" style="display:<?= $loggedUser ? 'block' : 'none' ?>">
                        <a class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000">
                            <i class="fa fa-shopping-cart"
                                style="position: relative;cursor: pointer;margin-right: 15px;">
                                <i class="fa fa-comment"
                                    style="position: absolute;font-size: 1.2em;top: -11px;color: red;right: -11px;"></i>
                                <i class="cart_count"
                                    style="position: absolute;font-size: 0.8em;top: -11px;color: #fff;right: -5px;"><?php echo '$num'; ?></i>
                            </i>
                            <br>
                            <?= $lang['CART'] ?>
                        </a>
                    </li>
                    <?php
                        // }
                         ?>
                    <?php
                        // }
                        // if (isset($_SESSION['user']) && $_SESSION['user'] != '') {
                        //     $name = $_SESSION['user_name'];
                            ?>
                    <li style="display:<?= $loggedUser ? 'block' : 'none' ?>">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"
                            data-delay="1000">
                            <i class="fa fa-user"></i><br>Hi , <?php echo '$name'; ?> <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-left" role="menu">
                            <li><a href="profile.php"><i class="fa fa-reorder"
                                        style="margin-right: 15px;"></i><?= $lang['nav-profile'] ?></a></li>
                            <li><a href="order_history.php"><i class="fa fa-reorder" style="margin-right: 15px;"></i>
                                    <?= $lang['ORDER_HISTORY'] ?>
                                </a></li>
                            <!--   <li><a href="order_history.php"><i class="fa fa-history" style="margin-right: 15px;"></i>ORDER SUMMARY</a></li> -->
                            <li><a href="change_pwd.php"><i class="fa fa-key"
                                        style="margin-right: 15px;"></i><?= $lang['nav-chng_pwd'] ?></a></li>
                            <li><a href="login"><i class="fa fa-sign-out"
                                        style="margin-right: 15px;"></i><?= $lang['nav-sign_out'] ?></a></li>
                        </ul>
                    </li>
                    <?php
                    //  } else { ?>
                    <li style="display:<?= $loggedUser ? 'none' : 'block' ?>">
                        <a href="login">
                            <i class="fa fa-sign-in"></i><br>
                            <?= $lang['nav-sign_in'] ?>
                        </a>
                    </li>
                    <?php
                    // } ?>

                    <li>
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"
                            data-delay="1000">
                            <i class="fa fa-globe"></i><br><?= $lang['langua'] ?> <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-left" role="menu">

                            <li><a href="?lang=en">English</a></li>
                            <li><a href="?lang=cn">中文</a></li>
                        </ul>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
