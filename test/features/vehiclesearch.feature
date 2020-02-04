Feature: Vehicle Search Feature

Background: Launch the application and search for vehicle registration

        Given I launch the "VolkswagenFinancialServices" website
        Then I should see "WebPageTitle"
        Then I should see "FeatureHeaderTitle"
        Then I should see "VehicleRegistrationSubtitle"
        Then I should see "FindvehicleButton"

Scenario: Vehicle Search
######### User enter a Valid Registration Number  #################
    When I enter "validregNumber" in "Registration" textfield
    When I click on "Findvehicle" button
    Then I should see "Result"
    Then I should see "CoverStart"
    Then I should see "CoverEnd"

########## User enter an Invalid Registration Number ##############

    When I enter "invalidregNumber" in "Registration" textfield
    When I click on "Findvehicle" button
    Then I should see "RecordNotFoundResult"

########## User clears Registration Number from Enter Reg text field ###############
    When I enter "validregNumber" in "Registration" textfield
    When I clear the "Registration" textfield
    Then I should see "ErrorMessage"
    #Adding comment

########## Defect when executing Gherkin statment 27 there is no error message popup ########


