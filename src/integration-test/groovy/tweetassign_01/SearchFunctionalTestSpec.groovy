package tweetassign_01

import geb.spock.GebSpec
import grails.test.mixin.integration.Integration
import spock.lang.Ignore


@Integration
class SearchFunctionalTestSpec extends GebSpec {


    def setup() {

        when:
        go '/'
        $("#login-form input[name=handle]").value("richelliot")
        $("#login-form input[name=password]").value("msse2016ASSIGN")
        $("#login").click()
        waitFor 1, { $("#search").click() }

        then:
        $(".page-header").text() == "Search"
    }


    def 'S1A,S3: Provide a search box for finding messages by message poster and message contents - INPUT partial message '() {

        when:
        //perform a search by message content
        $("#searchInput").value("Atl")
        $("#searchBtn").click()

        then:
        waitFor { $("#searchResults td")[0].text() == "richelliot" }
        waitFor { $("#searchResults td")[1].text() == "Welcome to Atlanta" }
    }

    def 'S1B,S3: Provide a search box for finding messages by message poster and message contents - INPUT poster'() {

        when:
        //perform a search by message content
        $("#searchInput").value("nayna")
        $("#searchBtn").click()

        then:
        waitFor { $("#searchResults td")[0].text() == "nayna" }
        waitFor { $("#searchResults td")[1].text() == "nayna is awesome" }
    }

    def 'S1C,S3 Count results [rows in table] for search messages retrieved on a given message poster/text'() {
        when:
        $("#searchInput").value("jeremy")
        $("#searchBtn").click()

        then:
        waitFor { $('#tblSearchResults tr').size() == 4 }
    }

    def 'S4: Clicking on the posting user’s name in a message will route to the user’s detail page'() {
        when:
        $("#searchInput").value("nayna")
        $("#searchBtn").click()
        waitFor { $(".handle")[0].click() }

        then:
        waitFor 5, { $(".page-header").text() == "Greetings!!" }
    }

}