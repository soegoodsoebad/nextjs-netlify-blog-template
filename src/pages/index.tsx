import Head from "next/head";
import NavBar from '../elements/NavBar';

export default function Index() {
    return (
        <>
        <Head>
            <meta charset="utf-8" />
            <link rel="apple-touch-icon" sizes="76x76" href="img/apple-icon.png"/>
            <link rel="icon" type="image/png" href="img/favicon.png" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <title>
                Now UI Kit by Creative Tim
            </title>
            <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
            {/* <!--     Fonts and icons     --> */}
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />
            {/* <!-- CSS Files --> */}
            <link href="css/bootstrap.min.css" rel="stylesheet" />
            <link href="css/now-ui-kit.css?v=1.3.0" rel="stylesheet" />
            {/* <!-- CSS Just for demo purpose, don't include it in your project --> */}
            <link href="demo/demo.css" rel="stylesheet" />

        </Head>
        <body className="index-page sidebar-collapse">
            <NavBar/>
            <div className="wrapper">
                <div className="page-header clear-filter" filter-color="orange">
                    <div className="page-header-image" data-parallax="true" style={{backgroundImage:"url('img/header.jpg')"}}>
                    </div>
                    <div className="container">
                        <div className="content-center brand">
                            <img className="n-logo" src="img/now-logo.png" alt="" />
                            <h1 className="h1-seo">Now UI Kit.</h1>
                            <h3>A beautiful Bootstrap 4 UI kit. Yours free.</h3>
                        </div>
                        <h6 className="category category-absolute">Designed by
                        <a href="http://invisionapp.com/" target="_blank">
                            <img src="img/invision-white-slim.png" className="invision-logo" />
                        </a>. Coded by
                        <a href="https://www.creative-tim.com" target="_blank">
                        <img src="img/creative-tim-white-slim2.png" className="creative-tim-logo" />
                        </a>.</h6>
                    </div>
                </div>
                <div className="main">
                    <div className="section section-images">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="hero-images-container">
                                        <img src="assets/img/hero-image-1.png" alt="" />
                                    </div>
                                    <div className="hero-images-container-1">
                                        <img src="assets/img/hero-image-2.png" alt="" />
                                    </div>
                                    <div className="hero-images-container-2">
                                        <img src="assets/img/hero-image-3.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section section-basic" id="basic-elements">
                        <div className="container">
                            <h3 className="title">Basic Elements</h3>
                            <h4>Buttons</h4>
                            <p className="category">Pick your style</p>
                            <div className="row">
                                <div className="col-md-10">
                                    <button className="btn btn-primary" type="button">Default</button>
                                    <button className="btn btn-primary btn-round" type="button">Round</button>
                                    <button className="btn btn-primary btn-round" type="button">
                                        <i className="now-ui-icons ui-2_favourite-28"></i> With Icon
                                    </button>
                                    <button className="btn btn-primary btn-icon btn-round" type="button">
                                        <i className="now-ui-icons ui-2_favourite-28"></i>
                                    </button>
                                    <button className="btn btn-primary btn-outline-primary btn-round" type="button">Outline</button>
                                </div>
                            </div>
                            <p className="category">Pick your size</p>
                            <div className="row">
                                <div className="col-md-10">
                                <button className="btn btn-primary btn-sm">Small</button>
                                <button className="btn btn-primary">Regular</button>
                                <button className="btn btn-primary btn-lg">Large</button>
                                </div>
                            </div>
                            <p className="category">Pick your color</p>
                            <div className="row">
                                <div className="col-md-10">
                                    <button className="btn">Default</button>
                                    <button className="btn btn-primary">Primary</button>
                                    <button className="btn btn-info">Info</button>
                                    <button className="btn btn-success">Success</button>
                                    <button className="btn btn-warning">Warning</button>
                                    <button className="btn btn-danger">Danger</button>
                                    <button className="btn btn-neutral">Neutral</button>
                                </div>
                            </div>
                            <h4>Links</h4>
                            <div className="row">
                                <div className="col-md-8">
                                    <button className="btn btn-link">Default</button>
                                    <button className="btn btn-link btn-primary ">Primary</button>
                                    <button className="btn btn-link btn-info">Info</button>
                                    <button className="btn btn-link btn-success">Success</button>
                                    <button className="btn btn-link btn-warning">Warning</button>
                                    <button className="btn btn-link btn-danger">Danger</button>
                                </div>
                            </div>
                            <div className="space-70"></div>
                            <div id="inputs">
                                <h4>Inputs</h4>
                                <p className="category">Form Controls</p>
                                <div className="row">
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="form-group">
                                            <input type="text" value="" placeholder="Regular" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="form-group has-success">
                                            <input type="text" value="Success" className="form-control form-control-success" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="form-group has-danger">
                                            <input type="email" value="Error Input" className="form-control form-control-danger" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-user-circle"></i></span>
                                            </div>
                                                <input type="text" className="form-control" placeholder="Left Font Awesome Icon" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-3">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Right Nucleo Icon" />
                                                <div className="input-group-append">
                                                    <span className="input-group-text"><i className="now-ui-icons users_single-02"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-70"></div>
                                <div className="row" id="checkRadios">
                                    <div className="col-sm-6 col-lg-3 mb-4">
                                        <p className="category">Checkboxes</p>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="checkbox" />
                                                <span className="form-check-sign"></span>
                                                Unchecked
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="checkbox" checked />
                                                <span className="form-check-sign"></span>
                                                Checked
                                            </label>
                                        </div>
                                        <div className="form-check disabled">
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="checkbox" disabled />
                                                <span className="form-check-sign"></span>
                                                Disabled Unchecked
                                            </label>
                                        </div>
                                        <div className="form-check disabled">
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="checkbox" checked disabled />
                                                <span className="form-check-sign"></span>
                                                Disabled Checked
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3 mb-4">
                                        <p className="category">Radios</p>
                                        <div className="form-check form-check-radio">
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                                <span className="form-check-sign"></span>
                                                Radio is off
                                            </label>
                                        </div>
                                        <div className="form-check form-check-radio">
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" checked />
                                                <span className="form-check-sign"></span>
                                                Radio is on
                                            </label>
                                        </div>
                                        <div className="form-check form-check-radio disabled">
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios2" value="option3" disabled />
                                                <span className="form-check-sign"></span>
                                                Disabled radio is off
                                            </label>
                                        </div>
                                        <div className="form-check form-check-radio disabled">
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios2" value="option4" disabled checked />
                                                <span className="form-check-sign"></span>
                                                Disabled radio is on
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <p className="category">Toggle Buttons</p>
                                        <input type="checkbox" name="checkbox" className="bootstrap-switch" checked/>
                                        <br />
                                        <input type="checkbox" name="checkbox" className="bootstrap-switch" data-on-label="ON" data-off-label="OFF" />
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <p className="category">Sliders</p>
                                        <div id="sliderRegular" className="slider"></div>
                                        <br />
                                        <div id="sliderDouble" className="slider slider-primary"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section section-navbars">
                            <div className="container" id="menu-dropdown">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4>Menu</h4>
                                        <nav className="navbar navbar-expand-lg bg-primary">
                                            <div className="container">
                                                <a className="navbar-brand" href="#">Menu</a>
                                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                    <span className="navbar-toggler-bar bar1"></span>
                                                    <span className="navbar-toggler-bar bar2"></span>
                                                    <span className="navbar-toggler-bar bar3"></span>
                                                </button>
                                                <div className="collapse navbar-collapse" id="example-navbar" data-nav-image="assets/img/blurred-image-1.jpg">
                                                    <ul className="navbar-nav">
                                                        <li className="nav-item active">
                                                            <a className="nav-link" href="#">
                                                            <p>Link</p>
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#">
                                                            <p>Link</p>
                                                            </a>
                                                        </li>
                                                        <li className="nav-item dropdown">
                                                            <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <p>
                                                                Dropdown
                                                            </p>
                                                            </a>
                                                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                            <a className="dropdown-item" href="#">Action</a>
                                                            <a className="dropdown-item" href="#">Another action</a>
                                                            <a className="dropdown-item" href="#">Something else here</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="col-md-6">
                                        <h4>Menu with Icons</h4>
                                        <nav className="navbar navbar-expand-lg bg-info">
                                            <div className="container">
                                                <a className="navbar-brand" href="#">Icons</a>
                                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-icons" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                    <span className="navbar-toggler-bar bar1"></span>
                                                    <span className="navbar-toggler-bar bar2"></span>
                                                    <span className="navbar-toggler-bar bar3"></span>
                                                </button>
                                                <div className="collapse navbar-collapse" id="example-navbar-icons">
                                                    <ul className="navbar-nav ml-auto">
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#pablo"><i className="now-ui-icons ui-1_send" aria-hidden="true"></i></a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#pablo"><i className="now-ui-icons users_single-02" aria-hidden="true"></i></a>
                                                        </li>
                                                        <li className="nav-item dropdown">
                                                            <a href="#" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown">
                                                            <i className="now-ui-icons ui-1_settings-gear-63" aria-hidden="true"></i>
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                                            <a className="dropdown-header">Dropdown header</a>
                                                            <a className="dropdown-item" href="#">Action</a>
                                                            <a className="dropdown-item" href="#">Another action</a>
                                                            <a className="dropdown-item" href="#">Something else here</a>
                                                            <div className="divider"></div>
                                                            <a className="dropdown-item" href="#">Separated link</a>
                                                            <div className="divider"></div>
                                                            <a className="dropdown-item" href="#">One more separated link</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                                <h4>Navigation</h4>
                            </div>
                            <div id="navbar">
                                <div className="navigation-example" style={{backgroundImage:"url('assets/img/bg7.jpg')"}}>
                                    {/* <!-- Navbar Primary  --> */}
                                    <nav className="navbar navbar-expand-lg bg-primary">
                                        <div className="container">
                                            <div className="navbar-translate">
                                                <a className="navbar-brand" href="#pablo">Primary color</a>
                                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-primary" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                    <span className="navbar-toggler-bar bar1"></span>
                                                    <span className="navbar-toggler-bar bar2"></span>
                                                    <span className="navbar-toggler-bar bar3"></span>
                                                </button>
                                            </div>
                                            <div className="collapse navbar-collapse" id="example-navbar-primary">
                                                <ul className="navbar-nav ml-auto">
                                                    <li className="nav-item active">
                                                        <a className="nav-link" href="#pablo">
                                                            <i className="now-ui-icons objects_globe"></i>
                                                            <p>Discover</p>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#pablo">
                                                            <i className="now-ui-icons users_circle-08"></i>
                                                            <p>Profile</p>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#pablo">
                                                            <i className="now-ui-icons ui-1_settings-gear-63"></i>
                                                            <p>Settings</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                    {/* <!-- End Navbar Primary --> */}
                                    {/* <!-- Navbar Info --> */}
                                    <nav className="navbar navbar-expand-lg bg-info">
                                        <div className="container">
                                            <div className="navbar-translate">
                                                <a className="navbar-brand" href="#pablo">Info Color</a>
                                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-info" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                    <span className="navbar-toggler-bar bar1"></span>
                                                    <span className="navbar-toggler-bar bar2"></span>
                                                    <span className="navbar-toggler-bar bar3"></span>
                                                </button>
                                            </div>
                                            <div className="collapse navbar-collapse" id="example-navbar-info">
                                                <ul className="navbar-nav ml-auto">
                                                    <li className="nav-item active">
                                                        <a className="nav-link" href="#pablo">
                                                            <p>Discover</p>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#pablo">
                                                            <p>Profile</p>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#pablo">
                                                            <p>Settings</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                    {/* <!-- End Navbar Info --> */}
                                    {/* <!-- Navbar Success --> */}
                                    <nav className="navbar navbar-expand-lg bg-success">
                                        <div className="container">
                                            <div className="navbar-translate">
                                                <a className="navbar-brand" href="#">Success Color</a>
                                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-success" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                    <span className="navbar-toggler-bar bar1"></span>
                                                    <span className="navbar-toggler-bar bar2"></span>
                                                    <span className="navbar-toggler-bar bar3"></span>
                                                </button>
                                            </div>
                                            <div className="collapse navbar-collapse" id="example-navbar-success">
                                                <ul className="navbar-nav ml-auto">
                                                    <li className="nav-item active">
                                                        <a className="nav-link" href="#pablo">
                                                            <i className="now-ui-icons objects_globe"></i>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#pablo">
                                                            <i className="now-ui-icons users_circle-08"></i>
                                                        </a>
                                                    </li>
                                                        <li className="nav-item">
                                                        <a className="nav-link" href="#pablo">
                                                            <i className="now-ui-icons ui-1_settings-gear-63"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                    {/* <!-- End Navbar Success --> */}
                                    {/* <!-- Navbar Warning --> */}
                                    <nav className="navbar navbar-expand-lg bg-warning">
                                        <div className="container">
                                            <div className="navbar-translate">
                                                <a className="navbar-brand" href="#pablo">Warning Color</a>
                                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-warning" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                    <span className="navbar-toggler-bar bar1"></span>
                                                    <span className="navbar-toggler-bar bar2"></span>
                                                    <span className="navbar-toggler-bar bar3"></span>
                                                </button>
                                            </div>
                                            <div className="collapse navbar-collapse" id="example-navbar-warning">
                                                <ul className="navbar-nav ml-auto">
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#pablo">
                                                            <i className="fab fa-facebook-square"></i>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#pablo">
                                                            <i className="fab fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#pablo">
                                                            <i className="fab fa-google-plus"></i>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#pablo">
                                                            <i className="fab fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                    {/* <!-- End Navbar Warning --> */}
                                    {/* <!-- Navbar Danger --> */}
                                    <nav className="navbar navbar-expand-lg bg-danger">
                                        <div className="container">
                                            <div className="navbar-translate">
                                                <a className="navbar-brand" href="#pablo">Danger Color</a>
                                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-danger" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                    <span className="navbar-toggler-bar bar1"></span>
                                                    <span className="navbar-toggler-bar bar2"></span>
                                                    <span className="navbar-toggler-bar bar3"></span>
                                                </button>
                                            </div>
                                            <div className="collapse navbar-collapse" id="example-navbar-danger">
                                                <ul className="navbar-nav ml-auto">
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#pablo">
                                                            <i className="fab fa-facebook-square"></i>
                                                            <p>Share</p>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#pablo">
                                                            <i className="fab fa-twitter"></i>
                                                            <p>Tweet</p>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#pablo">
                                                            <i className="fab fa-pinterest"></i>
                                                            <p>Pin</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                    {/* <!-- End Navbar Danger --> */}
                                    {/* <!-- Navbar Transparent --> */}
                                    <nav className="navbar navbar-expand-lg navbar-transparent">
                                        <div className="container">
                                            <div className="navbar-translate">
                                                <a className="navbar-brand" href="#pablo">Transparent</a>
                                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-transparent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                    <span className="navbar-toggler-bar bar1"></span>
                                                    <span className="navbar-toggler-bar bar2"></span>
                                                    <span className="navbar-toggler-bar bar3"></span>
                                                </button>
                                            </div>
                                            <div className="collapse navbar-collapse" id="example-navbar-transparent">
                                                <ul className="navbar-nav ml-auto">
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#pablo">
                                                            <i className="fab fa-facebook-square"></i>
                                                            <p>Facebook</p>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#pablo">
                                                            <i className="fab fa-twitter"></i>
                                                            <p>Twitter</p>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#pablo">
                                                            <i className="fab fa-instagram"></i>
                                                            <p>Instagram</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                    {/* <!-- End Navbar Transparent--> */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- End .section-navbars  --> */}
                        <div className="section section-tabs">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-10 ml-auto col-xl-6 mr-auto">
                                        <p className="category">Tabs with Icons on Card</p>
                                        {/* <!-- Nav tabs --> */}
                                        <div className="card">
                                            <div className="card-header">
                                                <ul className="nav nav-tabs justify-content-center" role="tablist">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" data-toggle="tab" href="#home" role="tab">
                                                            <i className="now-ui-icons objects_umbrella-13"></i> Home
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" data-toggle="tab" href="#profile" role="tab">
                                                            <i className="now-ui-icons shopping_cart-simple"></i> Profile
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" data-toggle="tab" href="#messages" role="tab">
                                                            <i className="now-ui-icons shopping_shop"></i> Messages
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" data-toggle="tab" href="#settings" role="tab">
                                                            <i className="now-ui-icons ui-2_settings-90"></i> Settings
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-body">
                                            {/* <!-- Tab panes --> */}
                                                <div className="tab-content text-center">
                                                    <div className="tab-pane active" id="home" role="tabpanel">
                                                        <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>
                                                    </div>
                                                    <div className="tab-pane" id="profile" role="tabpanel">
                                                        <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>
                                                    </div>
                                                    <div className="tab-pane" id="messages" role="tabpanel">
                                                        <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>
                                                    </div>
                                                    <div className="tab-pane" id="settings" role="tabpanel">
                                                        <p>"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-10 ml-auto col-xl-6 mr-auto">
                                        <p className="category">Tabs with Background on Card</p>
                                        {/* <!-- Tabs with Background on Card --> */}
                                        <div className="card">
                                            <div className="card-header">
                                                <ul className="nav nav-tabs nav-tabs-neutral justify-content-center" role="tablist" data-background-color="orange">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" data-toggle="tab" href="#home1" role="tab">Home</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" data-toggle="tab" href="#profile1" role="tab">Profile</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" data-toggle="tab" href="#messages1" role="tab">Messages</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" data-toggle="tab" href="#settings1" role="tab">Settings</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-body">
                                            {/* <!-- Tab panes --> */}
                                                <div className="tab-content text-center">
                                                    <div className="tab-pane active" id="home1" role="tabpanel">
                                                        <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>
                                                    </div>
                                                    <div className="tab-pane" id="profile1" role="tabpanel">
                                                        <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>
                                                    </div>
                                                    <div className="tab-pane" id="messages1" role="tabpanel">
                                                        <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>
                                                    </div>
                                                    <div className="tab-pane" id="settings1" role="tabpanel">
                                                        <p>"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    {/* <!-- End Tabs on plain Card --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Section Tabs --> */}
                        <div className="section section-pagination">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4>Progress Bars</h4>
                                        <div className="progress-container">
                                            <span className="progress-badge">Default</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "25%"}}>
                                                    <span className="progress-value">25%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress-container progress-primary">
                                            <span className="progress-badge">Primary</span>
                                            <div className="progress">
                                                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
                                                    <span className="progress-value">60%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <br/>
                                        <h4>Navigation Pills</h4>
                                        <ul className="nav nav-pills nav-pills-primary nav-pills-just-icons" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#active" role="tablist">
                                                    <i className="far fa-gem"></i>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link active" data-toggle="tab" href="#link" role="tablist">
                                                    <i className="fa fa-thermometer-full"></i>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#link" role="tablist">
                                                    <i className="fa fa-suitcase"></i>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link disabled" data-toggle="tab" href="#disabled" role="tablist">
                                                    <i className="fa fa-exclamation"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6">
                                        <h4>Pagination</h4>
                                        <ul className="pagination pagination-primary">
                                            <li className="page-item active">
                                                <a className="page-link" href="#">1</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#link">2</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#link">3</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#link">4</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#link">5</a>
                                            </li>
                                        </ul>
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <a className="page-link" href="#link" aria-label="Previous">
                                                    <span aria-hidden="true"><i className="fa fa-angle-double-left" aria-hidden="true"></i></span>
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#link">1</a>
                                            </li>
                                            <li className="page-item active">
                                                <a className="page-link" href="#link">2</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#link">3</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#link" aria-label="Next">
                                                    <span aria-hidden="true"><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>
                                                </a>
                                            </li>
                                        </ul>
                                        <br/>
                                        <h4>Labels</h4>
                                        <span className="badge badge-default">Default</span>
                                        <span className="badge badge-primary">Primary</span>
                                        <span className="badge badge-success">Success</span>
                                        <span className="badge badge-info">Info</span>
                                        <span className="badge badge-warning">Warning</span>
                                        <span className="badge badge-danger">Danger</span>
                                        <span className="badge badge-neutral">Neutral</span>
                                    </div>
                                </div>
                                <br/>
                                <div className="space"></div>
                                    <h4>Notifications</h4>
                                </div>
                            </div>
                            <div className="section section-notifications">
                                <div className="alert alert-success" role="alert">
                                    <div className="container">
                                        <div className="alert-icon">
                                            <i className="now-ui-icons ui-2_like"></i>
                                        </div>
                                        <strong>Well done!</strong> You successfully read this important alert message.
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">
                                                <i className="now-ui-icons ui-1_simple-remove"></i>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="alert alert-info" role="alert">
                                    <div className="container">
                                        <div className="alert-icon">
                                            <i className="now-ui-icons travel_info"></i>
                                        </div>
                                        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">
                                                <i className="now-ui-icons ui-1_simple-remove"></i>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="alert alert-warning" role="alert">
                                    <div className="container">
                                        <div className="alert-icon">
                                            <i className="now-ui-icons ui-1_bell-53"></i>
                                        </div>
                                        <strong>Warning!</strong> Better check yourself, you're not looking too good.
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">
                                                <i className="now-ui-icons ui-1_simple-remove"></i>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="alert alert-danger" role="alert">
                                    <div className="container">
                                        <div className="alert-icon">
                                            <i className="now-ui-icons objects_support-17"></i>
                                        </div>
                                        <strong>Oh snap!</strong> Change a few things up and try submitting again.
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">
                                                <i className="now-ui-icons ui-1_simple-remove"></i>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <!--  end notifications --> */}
                            {/* <!-- Typography --> */}
                            <div className="section">
                                <div className="container">
                                <h3 className="title">Typography</h3>
                                    <div id="typography">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="typography-line">
                                                    <h1><span>Header 1</span>The Life of Now UI Kit </h1>
                                                </div>
                                                <div className="typography-line">
                                                    <h2><span>Header 2</span>The Life of Now UI Kit</h2>
                                                </div>
                                                <div className="typography-line">
                                                    <h3><span>Header 3</span>The Life of Now UI Kit</h3>
                                                </div>
                                                <div className="typography-line">
                                                    <h4><span>Header 4</span>The Life of Now UI Kit</h4>
                                                </div>
                                                <div className="typography-line">
                                                    <h5><span>Header 5</span>The Life of Now UI Kit</h5>
                                                </div>
                                                <div className="typography-line">
                                                    <h6><span>Header 6</span>The Life of Now UI Kit</h6>
                                                </div>
                                                <div className="typography-line">
                                                    <p>
                                                        <span>Paragraph</span>
                                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.
                                                    </p>
                                                </div>
                                                <div className="typography-line">
                                                    <span>Quote</span>
                                                    <blockquote>
                                                        <p className="blockquote blockquote-primary">
                                                        "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                                                        <br/>
                                                        <br/>
                                                        <small>
                                                            - Noaa
                                                        </small>
                                                        </p>
                                                    </blockquote>
                                                </div>
                                                <div className="typography-line">
                                                    <span>Muted Text</span>
                                                    <p className="text-muted">
                                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
                                                    </p>
                                                </div>
                                                <div className="typography-line">
                                                    <span>Primary Text</span>
                                                    <p className="text-primary">
                                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>
                                                </div>
                                                <div className="typography-line">
                                                    <span>Info Text</span>
                                                    <p className="text-info">
                                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>
                                                </div>
                                                <div className="typography-line">
                                                    <span>Success Text</span>
                                                    <p className="text-success">
                                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>
                                                </div>
                                                <div className="typography-line">
                                                    <span>Warning Text</span>
                                                    <p className="text-warning">
                                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
                                                    </p>
                                                </div>
                                                <div className="typography-line">
                                                    <span>Danger Text</span>
                                                    <p className="text-danger">
                                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>
                                                </div>
                                                <div className="typography-line">
                                                    <h2>
                                                        <span>Small Tag</span>
                                                        Header with small subtitle
                                                        <br/>
                                                        <small>Use "small" tag for the headers</small>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-50"></div>
                                    <div id="images">
                                        <h4>Images</h4>
                                        <div className="row">
                                            <div className="col-sm-2">
                                                <p className="category">Image</p>
                                                <img src="img/julie.jpg" alt="Rounded Image" className="rounded" />
                                            </div>
                                            <div className="col-sm-2">
                                                <p className="category">Circle Image</p>
                                                <img src="img/julie.jpg" alt="Circle Image" className="rounded-circle" />
                                            </div>
                                            <div className="col-sm-2">
                                                <p className="category">Raised</p>
                                                <img src="img/julie.jpg" alt="Raised Image" className="rounded img-raised" />
                                            </div>
                                            <div className="col-sm-2">
                                                <p className="category">Circle Raised</p>
                                                <img src="img/julie.jpg" alt="Thumbnail Image" className="rounded-circle img-raised" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section section-javascript" id="javascriptComponents">
                                <div className="container">
                                    <h3 className="title">Javascript components</h3>
                                    <div className="row" id="modals">
                                        <div className="col-md-6">
                                            <h4>Modal</h4>
                                            <button className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                                                Launch Modal
                                            </button>
                                            <button className="btn btn-warning" data-toggle="modal" data-target="#myModal1">
                                                Launch Modal Mini
                                            </button>
                                        </div>
                                        <div className="col-md-6">
                                            <h4>Popovers</h4>
                                            <button type="button" className="btn btn-default" data-container="body" data-original-title="Popover On Left" data-toggle="popover" data-placement="left" data-content="Here will be some very useful information about his popover." data-color="primary">
                                                On left
                                            </button>
                                            <button type="button" className="btn btn-default" data-container="body" data-original-title="Popover on Top" data-toggle="popover" data-placement="top" data-content="Here will be some very useful information about his popover.">
                                                On top
                                            </button>
                                            <button type="button" className="btn btn-default" data-container="body" data-original-title="Popover on Right" data-toggle="popover" data-placement="right" data-content="Here will be some very useful information about his popover.<br/> Here will be some very useful information about his popover.">
                                                On right
                                            </button>
                                            <button type="button" className="btn btn-default" data-container="body" data-original-title="Popover on Bottom" data-toggle="popover" data-placement="bottom" data-content="Here will be some very useful information about his popover.">
                                                On bottom
                                            </button>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="col-md-6">
                                            <h4>Datepicker</h4>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="datepicker-container">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control date-picker" value="10/05/2016" data-datepicker-color="primary" />
                                                        </div>
                                                    </div>
                                                </div>
                                             </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h4>Tooltips</h4>
                                            <button type="button" className="btn btn-default btn-tooltip" data-toggle="tooltip" data-placement="left" title="Tooltip on left" data-container="body" data-animation="true" data-delay="100">On left</button>
                                            <button type="button" className="btn btn-default btn-tooltip" data-toggle="tooltip" data-placement="top" title="Tooltip on top" data-container="body" data-animation="true">On top</button>
                                            <button type="button" className="btn btn-default btn-tooltip" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom" data-container="body" data-animation="true">On bottom</button>
                                            <button type="button" className="btn btn-default btn-tooltip" data-toggle="tooltip" data-placement="right" title="Tooltip on right" data-container="body" data-animation="true">On right</button>
                                            <div className="clearfix"></div>
                                            <br/>
                                            <br/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section" id="carousel">
                                <div className="container">
                                    <div className="title">
                                        <h4>Carousel</h4>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8 col-md-12">
                                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                                <ol className="carousel-indicators">
                                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                                </ol>
                                                <div className="carousel-inner" role="listbox">
                                                    <div className="carousel-item active">
                                                        <img className="d-block" src="assets/img/bg1.jpg" alt="First slide" />
                                                        <div className="carousel-caption d-none d-md-block">
                                                            <h5>Nature, United States</h5>
                                                        </div>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <img className="d-block" src="assets/img/bg3.jpg" alt="Second slide" />
                                                        <div className="carousel-caption d-none d-md-block">
                                                        <h5>Somewhere Beyond, United States</h5>
                                                        </div>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <img className="d-block" src="assets/img/bg4.jpg" alt="Third slide" />
                                                        <div className="carousel-caption d-none d-md-block">
                                                        <h5>Yellowstone National Park, United States</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                    <i className="now-ui-icons arrows-1_minimal-left"></i>
                                                </a>
                                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                    <i className="now-ui-icons arrows-1_minimal-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section section-nucleo-icons">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                        <h2 className="title">Nucleo Icons</h2>
                                        <h5 className="description">
                                            Now UI Kit PRO comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with Now UI Kit PRO Make sure you check all of them and use those that you like the most.
                                        </h5>
                                        {/* <!-- <div className="nucleo-container">
                                                        <img src="assets/img/nucleo.svg" alt="">
                                                    </div> --> */}
                                        <a href="nucleo-icons.html" className="btn btn-primary btn-round btn-lg" target="_blank">View Demo Icons</a>
                                        <a href="https://nucleoapp.com/?ref=1712" className="btn btn-outline-primary btn-round btn-lg" target="_blank">View All Icons</a>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="icons-container">
                                                <i className="now-ui-icons ui-1_send"></i>
                                                <i className="now-ui-icons ui-2_like"></i>
                                                <i className="now-ui-icons transportation_air-baloon"></i>
                                                <i className="now-ui-icons text_bold"></i>
                                                <i className="now-ui-icons tech_headphones"></i>
                                                <i className="now-ui-icons emoticons_satisfied"></i>
                                                <i className="now-ui-icons shopping_cart-simple"></i>
                                                <i className="now-ui-icons objects_spaceship"></i>
                                                <i className="now-ui-icons media-2_note-03"></i>
                                                <i className="now-ui-icons ui-2_favourite-28"></i>
                                                <i className="now-ui-icons design_palette"></i>
                                                <i className="now-ui-icons clothes_tie-bow"></i>
                                                <i className="now-ui-icons location_pin"></i>
                                                <i className="now-ui-icons objects_key-25"></i>
                                                <i className="now-ui-icons travel_istanbul"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section">
                                <div className="container text-center">
                                    <div className="row justify-content-md-center">
                                        <div className="col-md-12 col-lg-8">
                                        <h2 className="title">Completed with examples</h2>
                                        <h5 className="description">The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful Bootstrap 4 ui kit.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section section-signup" style= {{backgroundImage:"url('assets/img/bg11.jpg')", backgroundSize: "cover", backgroundPosition: "top center", minHeight: 700}}>
                                <div className="container">
                                    <div className="row">
                                        <div className="card card-signup" data-background-color="orange">
                                            <form className="form" method="" action="">
                                                <div className="card-header text-center">
                                                    <h3 className="card-title title-up">Sign Up</h3>
                                                    <div className="social-line">
                                                        <a href="#pablo" className="btn btn-neutral btn-facebook btn-icon btn-round">
                                                            <i className="fab fa-facebook-square"></i>
                                                        </a>
                                                        <a href="#pablo" className="btn btn-neutral btn-twitter btn-icon btn-lg btn-round">
                                                            <i className="fab fa-twitter"></i>
                                                        </a>
                                                        <a href="#pablo" className="btn btn-neutral btn-google btn-icon btn-round">
                                                            <i className="fab fa-google-plus"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="input-group no-border">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                <i className="now-ui-icons users_circle-08"></i>
                                                            </span>
                                                        </div>
                                                        <input type="text" className="form-control" placeholder="First Name..." />
                                                    </div>
                                                    <div className="input-group no-border">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                <i className="now-ui-icons text_caps-small"></i>
                                                            </span>
                                                        </div>
                                                        <input type="text" placeholder="Last Name..." className="form-control" />
                                                    </div>
                                                    <div className="input-group no-border">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                <i className="now-ui-icons ui-1_email-85"></i>
                                                            </span>
                                                        </div>
                                                        <input type="text" className="form-control" placeholder="Email..."/>
                                                    </div>
                                                    {/* <!-- If you want to add a checkbox to this form, uncomment this code --> */}
                                                    {/* <!-- <div className="checkbox">
                                                                    <input id="checkboxSignup" type="checkbox">
                                                                        <label for="checkboxSignup">
                                                                        Unchecked
                                                                        </label>
                                                                    </div> --> */}
                                                </div>
                                                <div className="card-footer text-center">
                                                    <a href="#pablo" className="btn btn-neutral btn-round btn-lg">Get Started</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col text-center">
                                        <a href="examples/login-page.html" className="btn btn-outline-default btn-round btn-white btn-lg" target="_blank">View Login Page</a>
                                    </div>
                                </div>
                            </div>
                            <div className="section section-examples" data-background-color="black">
                                <div className="space-50"></div>
                                    <div className="container text-center">
                                        <div className="row">
                                            <div className="col">
                                                <a href="examples/landing-page.html" target="_blank">
                                                    <img src="assets/img/landing.jpg" alt="Image" className="img-raised" />
                                                </a>
                                                <a href="examples/landing-page.html" className="btn btn-outline-default btn-primary btn-round">View Landing Page</a>
                                            </div>
                                            <div className="col">
                                                <a href="examples/profile-page.html" target="_blank">
                                                    <img src="assets/img/profile.jpg" alt="Image" className="img-raised" />
                                                </a>
                                                <a href="examples/profile-page.html" className="btn btn-outline-default btn-primary btn-round">View Profile Page</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="section section-download" id="#download-section" data-background-color="black">
                                    <div className="container">
                                    <div className="row justify-content-md-center">
                                        <div className="text-center col-md-12 col-lg-8">
                                        <h3 className="title">Do you love this Bootstrap 4 UI Kit?</h3>
                                        <h5 className="description">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim or Invision where you can find the kit in HTML or Sketch/PSD format. Start a new project or give an old Bootstrap project a new look!</h5>
                                        </div>
                                        <div className="text-center col-md-12 col-lg-8">
                                        <a href="https://www.creative-tim.com/product/now-ui-kit" className="btn btn-primary btn-lg btn-round" role="button">
                                            Download HTML
                                        </a>
                                        <a href="https://www.invisionapp.com/now" target="_blank" className="btn btn-lg btn-outline-primary btn-round" role="button">
                                            Download PSD/Sketch
                                        </a>
                                        </div>
                                    </div>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <div className="row text-center mt-5">
                                        <div className="col-md-8 ml-auto mr-auto">
                                        <h2>Want more?</h2>
                                        <h5 className="description">We've just launched
                                            <a href="http://demos.creative-tim.com/now-ui-kit-pro/presentation.html" target="_blank">Now UI Kit PRO</a>. It has a huge number of components, sections and example pages. Start Your Development With A Badass Bootstrap 4 UI Kit.</h5>
                                        </div>
                                        <div className="col-md-12">
                                        <a href="http://demos.creative-tim.com/now-ui-kit-pro/presentation.html" className="btn btn-neutral btn-round btn-lg" target="_blank">
                                            <i className="now-ui-icons arrows-1_share-66"></i> Upgrade to PRO
                                        </a>
                                        </div>
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="row justify-content-md-center sharing-area text-center">
                                        <div className="text-center col-md-12 col-lg-8">
                                        <h3>Thank you for supporting us!</h3>
                                        </div>
                                        <div className="text-center col-md-12 col-lg-8">
                                        <a target="_blank" href="https://www.twitter.com/creativetim" className="btn btn-neutral btn-icon btn-twitter btn-round btn-lg" rel="tooltip" title="Follow us">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a target="_blank" href="https://www.facebook.com/creativetim" className="btn btn-neutral btn-icon btn-facebook btn-round btn-lg" rel="tooltip" title="Like us">
                                            <i className="fab fa-facebook-square"></i>
                                        </a>
                                        <a target="_blank" href="https://www.linkedin.com/company-beta/9430489/" className="btn btn-neutral btn-icon btn-linkedin btn-lg btn-round" rel="tooltip" title="Follow us">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                        <a target="_blank" href="https://github.com/creativetimofficial/now-ui-kit" className="btn btn-neutral btn-icon btn-github btn-round btn-lg" rel="tooltip" title="Star on Github">
                                            <i className="fab fa-github"></i>
                                        </a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                {/* <!-- Sart Modal --> */}
                <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header justify-content-center">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                        <i className="now-ui-icons ui-1_simple-remove"></i>
                        </button>
                        <h4 className="title title-up">Modal title</h4>
                    </div>
                    <div className="modal-body">
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default">Nice Button</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
                {/* <!--  End Modal --> */}
                {/* <!-- Mini Modal --> */}
                <div className="modal fade modal-mini modal-primary" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header justify-content-center">
                        <div className="modal-profile">
                        <i className="now-ui-icons users_circle-08"></i>
                        </div>
                    </div>
                    <div className="modal-body">
                        <p>Always have an access to your profile</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-link btn-neutral">Back</button>
                        <button type="button" className="btn btn-link btn-neutral" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
                {/* <!--  End Modal --> */}
                <footer className="footer" data-background-color="black">
                <div className=" container ">
                    <nav>
                    <ul>
                        <li>
                        <a href="https://www.creative-tim.com">
                            Creative Tim
                        </a>
                        </li>
                        <li>
                        <a href="http://presentation.creative-tim.com">
                            About Us
                        </a>
                        </li>
                        <li>
                        <a href="http://blog.creative-tim.com">
                            Blog
                        </a>
                        </li>
                    </ul>
                    </nav>
                    <div className="copyright" id="copyright">
                    &copy;
                    <script>
                        document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))
                    </script>, Designed by
                    <a href="https://www.invisionapp.com" target="_blank">Invision</a>. Coded by
                    <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>.
                    </div>
                </div>
                </footer>
            </div>
            {/* <!--   Core JS Files   --> */}
            <script src="js/core/jquery.min.js" type="text/javascript"></script>
            <script src="js/core/popper.min.js" type="text/javascript"></script>
            <script src="js/core/bootstrap.min.js" type="text/javascript"></script>
            {/* <!--  Plugin for Switches, full documentation here: http://www.jque.re/plugins/version3/bootstrap.switch/ --> */}
            <script src="js/plugins/bootstrap-switch.js"></script>
            {/* <!--  Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/ --> */}
            <script src="js/plugins/nouislider.min.js" type="text/javascript"></script>
            {/* <!--  Plugin for the DatePicker, full documentation here: https://github.com/uxsolutions/bootstrap-datepicker --> */}
            <script src="js/plugins/bootstrap-datepicker.js" type="text/javascript"></script>
            {/* <!--  Google Maps Plugin    --> */}
            <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
            {/* <!-- Control Center for Now Ui Kit: parallax effects, scripts for the example pages etc --> */}
            <script src="js/now-ui-kit.js?v=1.3.0" type="text/javascript"></script>
            {/* <script>
                $(document).ready(function() {
                // the body of this function is in assets/js/now-ui-kit.js
                nowuiKit.initSliders();
                });

                function scrollToDownload() {

                if ($('.section-download').length != 0) {
                    $("html, body").animate({
                    scrollTop: $('.section-download').offset().top
                    }, 1000);
                }
                }
            </script> */}
            </body>
            </>
    );
}