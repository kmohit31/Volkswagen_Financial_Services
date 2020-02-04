Feature: Volkswagen Financial Services

   Website that checks to see if a vehicle exists

@vehiclesearch
Scenario: Vehicle Search
    Given I launch the website
    # Then I should see "WebPageTitle"
    # Then I should see "FeatureHeaderTitle"
    # Then I should see "VehicleRegistrationSubtitle"
    When I enter "invalidregNumber" in "Registration" textfield
    When I click on "Findvehicle" button
    Then I should see APK
    
    #Then I should see "RecordNotFoundResult"