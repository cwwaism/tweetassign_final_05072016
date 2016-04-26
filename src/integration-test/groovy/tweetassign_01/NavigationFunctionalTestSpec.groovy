package tweetassign_01

import geb.spock.GebSpec
import grails.test.mixin.integration.Integration
//import org.openqa.selenium.Alert
import spock.lang.Ignore


@Integration

class NavigationFunctionalTestSpec extends GebSpec{

    def setup(){
        when:
        go'/'
        $("#login-form input[name=handle]").value("richelliot")
        $("#login-form input[name=password]").value("msse2016ASSIGN")
        $("#login").click()

        then:
        waitFor { $(".page-header").text() == "Greetings!!" }
    }


    def 'N1: User’s detail page'(){

        when:
        $("#details").click()

        then:
        $(".page-header").text() == "Greetings!!"

    }

    def 'N2: Search box '(){

        when:
        $("#search").click()

        then:
        $("#searchInput").text() == ''

    }

    def 'N3: Logout - clicking this should bring you to the login screen and provide a helpful message ‘Sorry to see you go… etc’'(){

        when:
        $("#logout").click()

        then:
        $("#loggedOut").text()=="Sorry to see you leave..."
        $(".page-header").text() == "Login"


    }

}