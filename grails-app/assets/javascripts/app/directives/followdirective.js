/**
 * Created by cwwai on 5/7/2016.
 */
app.directive("twtFollow", function () {
    return {
        replace: true,
        scope: true,
        template: '<a id="followBtn" type="button" ng-show="poster" ng-model="Following" class="btn btn-primary btn-large" ng-click="Follow(accounts.id)">{{state}}</a>'
    }
});