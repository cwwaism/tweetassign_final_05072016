/**
 * Created by nansak1 on 3/28/2016.
 */
import org.openqa.selenium.chrome.ChromeDriver
import org.openqa.selenium.firefox.FirefoxDriver
import org.openqa.selenium.remote.DesiredCapabilities
import org.openqa.selenium.Alert

waiting {
    timeout = 10
}

driver = {
    def path = System.properties['os.name'].toLowerCase().contains('windows') ?
            'node_modules\\.bin\\chromedriver.exe' : './node_modules/.bin/chromedriver'
    System.setProperty("webdriver.chrome.driver", path);
    System.properties['browser']?.toString()?.toLowerCase() == 'chrome' ? new ChromeDriver(new DesiredCapabilities()) : new FirefoxDriver()
}