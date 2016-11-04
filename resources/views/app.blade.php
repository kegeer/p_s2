<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Microbiota Control system">
        <meta name="author" content="kaige">

        <!-- App favicon -->
        <link rel="shortcut icon" href="/images/favicon.ico">
        <!-- App title -->
        <title>Control System</title>

        <link rel="stylesheet" href="/css/app.css" media="screen" title="no title">
        <link rel="stylesheet" href="/css/all.css" media="screen" title="no title">

        <!-- HTML5 Shiv and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
        <![endif]-->

        <script src="/js/modernizr.min.js"></script>
        <script>
            window.Mb = {!! json_encode([
                    'csrfToken' => csrf_token(),
                    'siteName'  => config('app.name'),
                    'apiDomain' => config('app.url') . '/api'
                ]) !!}
        </script>

    </head>

    <body class="fixed-left">

        <div id="app">
            <app></app>
        </div>

        <script>
            var resizefunc = [];
        </script>

        <script type="text/javascript" src="/js/app.js"></script>
        <script type="text/javascript" src="/js/all.js"></script>


    </body>
