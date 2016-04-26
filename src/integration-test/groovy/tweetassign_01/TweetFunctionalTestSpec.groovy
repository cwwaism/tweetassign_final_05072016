package tweetassign_01

import geb.spock.GebSpec
import grails.test.mixin.integration.Integration
import spock.lang.Ignore

@Ignore
@Integration
class TweetFunctionalTestSpec extends GebSpec{

    def setup(){
        when:
        go'/'
        $("#login-form input[name=handle]").value("donaldtrump")
        $("#login-form input[name=password]").value("msse2016ASSIGN")
        $("#login").click()

        then:
        waitFor { $(".page-header").text() == "Greetings!!" }
    }

    def 'R0: Allow for the logged in user to post a new message'(){

        when:
        $("#form input[name=msgText]").value("Bonjour! Comme ca va?")
        $("#postMsg").click()

        then:
        waitFor 2, { $("#userDetails td")[0].text() == "Donald Trump" }
        $("#userMsg td")[0].text() == "Bonjour! Comme ca va?"
    }

    def 'R1: Use a alert control from the Angular UI library to display an info message saying ‘Message Posted!’.'(){

        when:
        $("#form input[name=msgText]").value("Bonjour! Comme ca va?")
        $("#postMsg").click()

        then:
        waitFor 2, { $('uib-alert')[0].text() == "Message posted!" }

    }

    def 'R2: Use Angular validation to validate a message prior to posting it to the server via the REST API (client side validation)’.'(){

        when:
        $("#form input[name=msgText]").value("Bonjour! Comme ca va?") //long message


        then:
        $("#postMsg").click() //button is disabled
                                //error message about text between 1-40 characters
        //waitFor 2, { $("#userDetails td")[0].text() == "Donald Trump" }
        //$("#userMsg td")[0].text() == "Welcome to Minnesota"
        //$("#userMsg td")[1].text() == "It's getting better, infact it is warm."
    }

}
