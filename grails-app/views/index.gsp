<!doctype html>
<html ng-app="app">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <asset:javascript src="application.js"/>
    <asset:stylesheet src="application.css"/>
</head>


<body ng-controller="authController">
<nav class="navbar navbar-default">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="/">MSSE Angular Routing</a>
        </div>

        <!--<h1>Greetings!! {{loggedInUser}}</h1>-->
        <!--<div ng-view>-->
        <ul class="nav navbar-nav navbar-right"> <!--ng-show="isLoggedIn"--> <!-- Show if user is logged in-->
            <li ng-class="{ active: isActive('/login')}" ng-click="destroyToken()"><a href="#logout">Logout</a></li>
            <li ng-class="{ active: isActive('/search')}"><a href="#search">Search</a></li>
            <li ng-class="{ active: isActive('/details')}"><a href="#details">Details</a></li>
        </ul>
        <!--</div>-->
</div>
</nav>

<div ng-view></div>

<!--<footer class="jumbotron text-center">
    <p>Footer Content</p>
</footer>-->

</body>
</html>