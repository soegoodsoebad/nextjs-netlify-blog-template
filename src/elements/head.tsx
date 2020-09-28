import Head from "next/head";

export default function headscript(){
    return(
        <Head>
            <meta charset="utf-8" />
            <link rel="apple-touch-icon" sizes="76x76" href="img/apple-icon.png"/>
            <link rel="icon" type="image/png" href="img/favicon.png" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <title>
                Village Demands
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
    );
}