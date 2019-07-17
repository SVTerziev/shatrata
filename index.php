<?php
session_start();
include 'lang.php';
$current = array_key_exists('language', $_SESSION) ? $_SESSION['language'] : 'bg';
?>
<!DOCTYPE HTML>
<html>
<head>
<!-- Made by Stoil Terziev (SVTerziev@gmail.com) -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Вашият релакс в забързаното време, вашата реализирана мечта, оазис в парка на град Сандански! Спокойствие, тишина и безвремие, превръща престоя в истинска наслада.">
    <link rel="canonical" href="http://shatrata.com">
    <meta property="og:title" content='Комплекс "Шатра Инфинити"'>
    <meta property="og:site_name" content='Комплекс "Шатра Инфинити"'>
    <meta property="og:url" content="http://shatrata.com" >
    <meta property="og:description" content="Вашият релакс в забързаното време, вашата реализирана мечта, оазис в парка на град Сандански! Спокойствие, тишина и безвремие, превръща престоя в истинска наслада.">
    <meta property="og:image" content="images/logo.jpg">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="bg_BG">
    <title><?= $lang->$current->title ?></title>
    <link rel="icon" href="images/icon.jpg">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/jquery.fullPage.css">
    <link rel="stylesheet" href="http://sachinchoolur.github.io/lightGallery/lightgallery/css/lightgallery.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div id="container">
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#toggled" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <div class="navbar-brand">
            <?php if ($current == 'bg') { ?>
            <img src="images/gb.svg" height="16px" data-language="en">
            <?php } else { ?>
            <img src="images/bg.svg" height="16px" data-language="bg">
            <?php } ?>
        </div>
                </div>

                <div class="collapse navbar-collapse" id="toggled">
                    <ul class="nav navbar-nav">
                        <li><a href="#home"><?= $lang->$current->menu->index ?></a></li>
                        <li><a href="#about"><?= $lang->$current->menu->about ?></a></li>
                        <li><a href="#restaurant"><?= $lang->$current->menu->restaurant ?></a></li>
                        <li><a href="#rooms"><?= $lang->$current->menu->rooms ?></a></li>
                        <li><a href="#gallery"><?= $lang->$current->menu->gallery ?></a></li>
                        <li><a href="#contact"><?= $lang->$current->menu->contact ?></a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div id="fullpage">
            <section class="section fixed-bg fixed-one" id="home">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2">
                            <div class="topText">
                               <?= $lang->$current->title ?>

                           </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section" id="about">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-5 col-lg-4 col-lg-offset-1">
                            <div class="headerContainer">
                                <h1><?= $lang->$current->menu->about ?></h1>
                                <span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
                            </div>
                            <?= $lang->$current->about ?>

                        </div>
                        <div class="col-sm-7 hidden-xs pictures"><br><br>
                            <ul class="images">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section" id="restaurant">
                <div class="slide">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 col-sm-offset-3">
                                <div class="topText">
                                    <?= $lang->$current->menu->restaurant ?>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slide"></div>
            </section>
            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-5 col-md-4 col-lg-5 col-sm-5 col-sm-offset-0 col-xs-10 col-xs-offset-1">
                                                    <div class="headerContainer">
                                <h1 id="rr"><?= $lang->$current->restaurantReserve ?></h1>
                            </div>
                          <form method="post" id="restaurantReserve">
                                <fieldset class="form-group">
                                    <div>
                                        <input type="text" class="form-control" name="name" placeholder="<?= $lang->$current->form->name ?>">
                                    </div>
                                    <div>
                                        <input type="email" class="form-control" name="email" placeholder="<?= $lang->$current->form->email ?>">
                                    </div>
                                    <div>
                                        <input type="tel" class="form-control" name="phone" placeholder="<?= $lang->$current->form->phone ?>" pattern="[0-9]">
                                    </div>
                                    <div>
                                        <label for="arrival"><?= $lang->$current->form->date ?>:</label>
                                        <input type="date" class="form-control" name="arrival" min="<?= date('Y-m-d') ?>">
                                    </div>
                                    <div>
                                        <input type="number" min="1" class="form-control" name="people" placeholder="<?= $lang->$current->form->people ?>">
                                    </div>
                                    <div>
                                        <textarea class="form-control" name="additional" rows="3" placeholder="<?= $lang->$current->form->additional ?>"></textarea>
                                    </div>
                                </fieldset>
                            <input type="submit" class="btn btn-default">
                            <span class="alert alert-success hasSuccess3"><?= $lang->$current->success ?></span>
                            <span class="alert alert-danger hasError3"><?= $lang->$current->error ?></span>
                          </form>
                        </div>
                        <div class="col-md-5 col-md-offset-1 col-sm-7 col-sm-offset-0 col-xs-10 col-xs-offset-1">
                            <div class="md-modal md-effect">
                                <div class="md-content container">
                                    <span class="md-close glyphicon glyphicon-remove" aria-hidden="true"></span>
                                    <div class="row">
                                        <div class="col-xs-6">
                                            <div class="menus">
                                                <a data-menu='wedding'><?= $lang->$current->weddingMenus ?></a>
                                            </div>
                                            <div class="discount">
                                                <?= $lang->$current->discount ?>
                                            </div>
                                        </div>
                                        <div class="col-xs-6" id="menuContent">
                                            <?= $lang->$current->chooseMenu ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="md-overlay"></div>
                            <div class="headerContainer">
                                <h1 id="openMenu">
                                    <span class="fa fa-angle-double-right"></span>
                                    <?= $lang->$current->checkMenu ?>
                                    <span class="fa fa-angle-double-left"></span>
                                </h1>
                                <span class="fa fa-cutlery fa-2x"></span>
                            </div>
                            <?= $lang->$current->restaurant ?>

                        </div>
                    </div>
                </div>
            </section>
            <section class="section fixed-bg fixed-three" id="rooms">
                <div class="slide">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 col-sm-offset-3">
                                <div class="topText">
                                    <?= $lang->$current->menu->rooms ?>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slide"></div>
                <div class="slide"></div>
            </section>
            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-5 col-lg-4 col-lg-offset-1">
                            <div class="headerContainer">
                                <h1 id='reserveRoom'><?= $lang->$current->reserveRoom ?></h1>
                                <span class="fa fa-bed fa-2x"></span>
                            </div>
                            <?= $lang->$current->rooms ?>
                        </div>
                        <div class="col-sm-6 col-sm-offset-1 col-xs-12">
                            <br>
                            <form method="post" id="reserveForm">
                                <fieldset class="form-group">
                                    <div>
                                        <input type="text" class="form-control" name="name" placeholder="<?= $lang->$current->form->name ?>">
                                    </div>
                                    <div>
                                        <input type="email" class="form-control" name="email" placeholder="<?= $lang->$current->form->email ?>">
                                    </div>
                                    <div>
                                        <input type="tel" class="form-control" name="phone" placeholder="<?= $lang->$current->form->phone ?>" pattern="[0-9]">
                                    </div>
                                    <div>
                                        <label for="arrival"><?= $lang->$current->form->arrival ?>:</label>
                                        <input type="date" class="form-control" name="arrival" min="<?= date('Y-m-d') ?>">
                                    </div>
                                    <div>
                                        <input type="number" min="1" class="form-control" name="people" placeholder="<?= $lang->$current->form->people ?>">
                                    </div>
                                    <div>
                                        <input type="number" min="0" class="form-control" name="nights" placeholder="<?= $lang->$current->form->nights ?>">
                                    </div>
                                    <div>
                                        <select class="form-control" name="roomType">
                                            <option value="double"><?= $lang->$current->form->roomType->double ?></option>
                                            <option value="triple"><?= $lang->$current->form->roomType->triple ?></option>
                                            <option value="apartment"><?= $lang->$current->form->roomType->apartment ?></option>
                                        </select>
                                    </div>
                                    <div>
                                        <textarea class="form-control" name="additional" rows="3" placeholder="<?= $lang->$current->form->additional ?>"></textarea>
                                    </div>
                                </fieldset>
                                <input type="submit" class="btn btn-default">
                                <span class="alert alert-success hasSuccess"><?= $lang->$current->success ?></span>
                                <span class="alert alert-danger hasError"><?= $lang->$current->error ?></span>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
            <section class="section" id="gallery">
            <div style="display:none;" id="video1">
                <video class="lg-video-object lg-html5" controls preload="none">
                    <source src="videos/v1.mov" type="video/mp4">
                    Този браузър не поддържа HTML5 видео.
                </video>
            </div>
            <div style="display:none;" id="video2">
                <video class="lg-video-object lg-html5" controls preload="none">
                    <source src="videos/v2.mov" type="video/mp4">
                    Този браузър не поддържа HTML5 видео.
                </video>
            </div>
            <div class="gallery">
                <ul id="galleria" class="list-unstyled row">
                  <li data-poster="images/gallery/v1.png" data-html="#video1">
                    <a href="">
                      <img class="lazyload" src="images/loading.gif" data-srca="images/gallery/thumbs/v1.jpg">
                    </a>
                  </li>
                  <li data-poster="images/gallery/v2.png" data-html="#video2">
                    <a href="">
                      <img class="lazyload" src="images/loading.gif" data-srca="images/gallery/thumbs/v2.jpg">
                    </a>
                  </li>
                  <?php
                    $gallery = scandir("images/gallery");
                    $gallery = array_slice($gallery, 2, count($gallery) - 5);
                    foreach ($gallery as $image): ?>
<li data-src="images/gallery/<?= $image ?>">
                    <a href="">
                      <img class="lazyload" src="images/loading.gif" data-srca="images/gallery/thumbs/<?= $image ?>">
                    </a>
                    </li>
                    <?php endforeach; ?>

                </ul>
            </div>
            </section>
            <section class="section" id="contact">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7 col-sm-7 col-sm-offset-0 col-xs-10 col-xs-offset-1">
                            <div class="google-map" data-lat="41.570878" data-lng="23.286910"></div>
                        </div>
                        <div class="col-sm-5 col-md-4 col-lg-4 col-sm-5 col-sm-offset-0 col-xs-10 col-xs-offset-1">
                            <div class="headerContainer">
                                <h2><?= $lang->$current->title ?></h2>
                            </div>
                            <address>
                                <?= $lang->$current->address ?>
                            </address>
                            <form method="post" id="contactForm">
                                <fieldset class="form-group">
                                    <div>
                                        <input type="text" class="form-control" name="name" placeholder="<?= $lang->$current->form->name ?>">
                                    </div>
                                    <div>
                                        <input type="email" class="form-control" name="email" placeholder="<?= $lang->$current->form->email ?>">
                                    </div>
                                    <div>
                                        <input type="tel" class="form-control" name="phone" placeholder="<?= $lang->$current->form->phone ?>" pattern="[0-9]">
                                    </div>
                                    <div>
                                        <textarea class="form-control" name="message" rows="3" placeholder="<?= $lang->$current->form->message ?>"></textarea>
                                    </div>
                                </fieldset>
                                <input type="submit" class="btn btn-default">
                                <span class="alert alert-success hasSuccess2"><?= $lang->$current->success ?></span>
                                <span class="alert alert-danger hasError2"><?= $lang->$current->error ?></span>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <script src="js/lib/jquery-2.1.4.min.js"></script>
    <script src="js/lib/bootstrap.min.js"></script>
    <script src="js/lib/jquery.slimscroll.min.js"></script>
    <script src="js/lib/jquery.fullpage.js"></script>
    <script src="js/lib/lazysizes.min.js"></script>
    <script src="js/lib/lightgallery.js"></script>
    <script src="js/lib/lg-thumbnail.js"></script>
    <script src="js/lib/lg-autoplay.js"></script>
    <script src="js/lib/lg-video.js"></script>
    <script src="js/lib/jquery.lazy-load-google-maps.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>

