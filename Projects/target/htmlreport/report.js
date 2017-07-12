$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LLI/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Login to Llodys list",
  "description": "",
  "id": "login;login-to-llodys-list",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on lloydslist site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"sagar.c.yadav@informa.com\" and password as \"nextgenUAT\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should get message Logged in as \"Artyom Pranovich\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_stepDef.i_am_on_lloydslist_site()"
});
formatter.result({
  "duration": 8988259702,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sagar.c.yadav@informa.com",
      "offset": 21
    },
    {
      "val": "nextgenUAT",
      "offset": 65
    }
  ],
  "location": "Login_stepDef.i_enter_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 422031244,
  "status": "passed"
});
formatter.match({
  "location": "Login_stepDef.i_click_on_Login_button()"
});
formatter.result({
  "duration": 5080733882,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"Login\"}\n  (Session info: chrome\u003d59.0.3071.115)\n  (Driver info: chromedriver\u003d2.28.455520 (cc17746adff54984afff480136733114c6b3704b),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 5.07 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.48.2\u0027, revision: \u002741bccdd10cf2c0560f637404c2d96164b67d9d67\u0027, time: \u00272015-10-09 13:08:06\u0027\nSystem info: host: \u0027DESKTOP-ABLPKLN\u0027, ip: \u0027192.168.0.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.28.455520 (cc17746adff54984afff480136733114c6b3704b), userDataDir\u003dC:\\Users\\Owner\\AppData\\Local\\Temp\\scoped_dir2612_14345}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d59.0.3071.115, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4045e68fd8bff5fe39061f1f42d5e1af\n*** Element info: {Using\u003did, value\u003dLogin}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:647)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:403)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:345)\r\n\tat LLI.Pages.LoginPage.clickOnLoginButton(LoginPage.java:27)\r\n\tat LLI.Login_stepDef.i_click_on_Login_button(Login_stepDef.java:34)\r\n\tat ✽.When I click on Login button(LLI/Login.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Artyom Pranovich",
      "offset": 35
    }
  ],
  "location": "Login_stepDef.i_should_get_message_Logged_in_as(String)"
});
formatter.result({
  "status": "skipped"
});
});