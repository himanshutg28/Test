Feature: Validate the Request Quotation page

  Scenario Outline: Validate that user is able to request the Quotation
    Given User is at the home page
    When User create the Quotation
    Then User should get the unique ID

    Examples: 
      | username              | password |
      | himanshutg2@gmail.com | Him@2812 |
