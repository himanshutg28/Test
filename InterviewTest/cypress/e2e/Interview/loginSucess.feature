Feature: Validate the Sucessful test for Login

  Scenario Outline: Validate User is unable to login with incorrect email
    Given User is at login page
    When User enters username as '<username>' & password as '<password>' for login
    Then User should be able to get the error message

    Examples: 
      | username              | password |
      | himanshutg2@gmail.com | Him@2812 |