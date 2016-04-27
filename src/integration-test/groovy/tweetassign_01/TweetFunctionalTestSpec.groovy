package tweetassign_01

import geb.spock.GebSpec
import grails.test.mixin.integration.Integration
import spock.lang.Ignore


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
        $("#tweet").value("Bonjour! Comme ca va?")
        $("#postMsg").click()


        then:
        waitFor 5,  { $("#userDetails td")[0].text() == "Donald Trump" }
        waitFor 5, {$("#userMsg td")[0].text() == "Bonjour! Comme ca va?"}
    }

    def 'R1: Use a alert control from the Angular UI library to display an info message saying ‘Message Posted!’.'(){

        when:
        $("#tweet").value("Bonjour! Comme ca va?")
        $("#postMsg").click()

        then:
        waitFor 5, { $('#msgAlert').text() == "×\n" + "Close\n" + "Message posted!" }

    }

    def 'R2: Use Angular validation to validate a message prior to posting it to the server via the REST API (client side validation)’.'(){

        when:
        $("#tweet").value("The quick brown fox jumped over the lazy dog!") //long message


        then:
        //waitFor {$("#postMsg").@disabled == "true"} //button is disabled"
        $("#msgError").text() == 'Message can be between 1 and 40 characters'

    }

}
