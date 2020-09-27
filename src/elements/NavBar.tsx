

export default function NavBar() {
    return (

        <nav className="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent " color-on-scroll="400">
        <div className="container">
        <div className="navbar-translate">
            <a className="navbar-brand" href="https://demos.creative-tim.com/now-ui-kit/index.html" rel="tooltip" title="Designed by Invision. Coded by Creative Tim" data-placement="bottom" target="_blank">
            Now Ui Kit
            </a>
            <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-bar top-bar"></span>
            <span className="navbar-toggler-bar middle-bar"></span>
            <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
        </div>
        <div className="collapse navbar-collapse justify-content-end" id="navigation" data-nav-image="img/blurred-image-1.jpg">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)" onclick="scrollToDownload()">
                <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                <p>Download</p>
                </a>
            </li>
            <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink1" data-toggle="dropdown">
                <i className="now-ui-icons design_app"></i>
                <p>Components</p>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink1">
                <a className="dropdown-item" href="./index.html">
                    <i className="now-ui-icons business_chart-pie-36"></i> All components
                </a>
                <a className="dropdown-item" target="_blank" href="https://demos.creative-tim.com/now-ui-kit/docs/1.0/getting-started/introduction.html">
                    <i className="now-ui-icons design_bullet-list-67"></i> Documentation
                </a>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link btn btn-neutral" href="https://www.creative-tim.com/product/now-ui-kit-pro" target="_blank">
                <i className="now-ui-icons arrows-1_share-66"></i>
                <p>Upgrade to PRO</p>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" rel="tooltip" title="Follow us on Twitter" data-placement="bottom" href="https://twitter.com/CreativeTim" target="_blank">
                <i className="fab fa-twitter"></i>
                <p className="d-lg-none d-xl-none">Twitter</p>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" rel="tooltip" title="Like us on Facebook" data-placement="bottom" href="https://www.facebook.com/CreativeTim" target="_blank">
                <i className="fab fa-facebook-square"></i>
                <p className="d-lg-none d-xl-none">Facebook</p>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" rel="tooltip" title="Follow us on Instagram" data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial" target="_blank">
                <i className="fab fa-instagram"></i>
                <p className="d-lg-none d-xl-none">Instagram</p>
                </a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    );
};