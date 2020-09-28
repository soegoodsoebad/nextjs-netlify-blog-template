

export default function Footer() {
    return(
        <footer className="footer" data-background-color="black">
            <div className="container">
                <nav>
                    <ul>
                        <li>
                            <a href="#">
                                Village Demands
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            About Us
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Blog
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* <div className="copyright" id="copyright">
                    &copy;
                    <script>
                        document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))
                    </script>
                </div> */}
            </div>
        </footer>
    );
}
