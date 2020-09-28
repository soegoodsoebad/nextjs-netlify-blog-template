

export default function Script(){
    return(
        <>
        <script src="js/core/jquery.min.js" type="text/javascript"></script>
        <script src="js/core/popper.min.js" type="text/javascript"></script>
        <script src="js/core/bootstrap.min.js" type="text/javascript"></script>
        <script src="js/plugins/bootstrap-switch.js"></script>
        <script src="js/plugins/nouislider.min.js" type="text/javascript"></script>
        <script src="js/plugins/bootstrap-datepicker.js" type="text/javascript"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
        <script src="js/now-ui-kit.js?v=1.3.0" type="text/javascript"></script>
        {/* <script>
            $(document).ready(function() {
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
        </>
    );
}