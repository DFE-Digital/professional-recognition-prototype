const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'degree-answer'
router.post('/degree-answer', function (req, res) {

    // Make a variable and give it the value from 'degree'
    var haveDegree = req.session.data['Degree']
  
    // Check whether the variable matches a condition
    if (haveDegree == "Yes"){
      // Send user to next page
      res.redirect('/prototype-1/check-eligibility/question-formal-training')
    } else {
      // Send user to ineligible page
      res.redirect('/prototype-1/check-eligibility/ineligible-degree')
    }
  
  })


      // Run this code when a form is submitted to 'formal-training-answer'
  router.post('/formal-training-answer', function (req, res) {
  
    // Make a variable and give it the value from 'formalTraining'
    var formalTraining = req.session.data['formal-training']
  
    // Check whether the variable matches a condition
    if (formalTraining == "Yes"){
      // Send user to next page
      res.redirect('/prototype-1/check-eligibility/question-special-educational-needs')
    } else {
      // Send user to ineligible page
      res.redirect('/prototype-1/check-eligibility/ineligible-formal-training')
    }
  
  })

        // Run this code when a form is submitted to 'special-educational-needs-answer'
        router.post('/special-educational-needs-answer', function (req, res) {
    
          // Make a variable and give it the value from 'specialEducationalNeeds'
          var specialeducationalNeeds = req.session.data['special-educational-needs']
        
          // Check whether the variable matches a condition
          if (specialeducationalNeeds == "Yes"){
            // Send user to next page
            res.redirect('/prototype-1/check-eligibility/question-completed-year')
          } else {
            // Send user to ineligible page
            res.redirect('/prototype-1/check-eligibility/ineligible-special-educational-needs')
          }
        
      })


        // Run this code when a form is submitted to 'completed-year-answer'
        router.post('/completed-year-answer', function (req, res) {
    
          // Make a variable and give it the value from 'completedYear'
          var completedYear = req.session.data['completed-year']
        
          // Check whether the variable matches a condition
          if (completedYear == "Yes"){
            // Send user to next page
            res.redirect('/prototype-1/check-eligibility/question-registered-teacher')
          } else {
            // Send user to ineligible page
            res.redirect('/prototype-1/check-eligibility/ineligible-no-experience')
          }
        
      })

    // Run this code when a form is submitted to 'registered-teacher-answer'
    router.post('/registered-teacher-answer', function (req, res) {
    
        // Make a variable and give it the value from 'registeredTeacher'
        var registeredTeacher = req.session.data['registered-teacher']
      
        // Check whether the variable matches a condition
        if (registeredTeacher == "Yes"){
          // Send user to next page
          res.redirect('/prototype-1/check-eligibility/question-misconduct')
        } else {
          // Send user to ineligible page
          res.redirect('/prototype-1/check-eligibility/ineligible-not-registered')
        }
      
    })


// Run this code when a form is submitted to 'misconduct-answer'
router.post('/misconduct-answer', function (req, res) {

  // Make a variable and give it the value from 'haveMisconduct'
  var haveMisconduct = req.session.data['misconduct']

  // Check whether the variable matches a condition
  if (haveMisconduct == "Yes"){
    // Send user to next page
    res.redirect('/prototype-1/check-eligibility/eligible')
  } else {
    // Send user to ineligible page
    res.redirect('/prototype-1/check-eligibility/ineligible-misconduct')
  }

})


        // Run this code when a form is submitted to 'restrictions'
        router.post('/restrictions-answer', function (req, res) {
    
          // Make a variable and give it the value from 'haveRestrictions'
          var haveRestrictions = req.session.data['restrictions']
        
          // Check whether the variable matches a condition
          if (haveRestrictions == "Yes"){
            // Send user to next page
            res.redirect('/prototype-1/check-eligibility/ineligible-restrictions')
          } else {
            // Send user to ineligible page
            res.redirect('/prototype-1/check-eligibility/eligible')
          }
        
      })

    // Run this code when a form is submitted to 'Country Trained in'
    router.post('/country-trained-answer', function (req, res) {
    
      // Make a variable and give it the value from 'degree'
      var countryTrained = req.session.data['country']
    
      // Check whether the variable matches a condition
      if (countryTrained == "Canada"){
        // Send user to Degree english
        res.redirect('/prototype-1/get-prepared/question-degree-stem')
      } else {
        // Send user to STEM
        res.redirect('/prototype-1/get-prepared/question-degree-english')
      }
    
  })

  // Run this code when a form is submitted to 'Degree in STEM'
  router.post('/stem-answer', function (req, res) {
  
      // Make a variable and give it the value from 'degree'
      var countryTrained = req.session.data['DegreeStem']
    
      // Check whether the variable matches a condition
      if (countryTrained == "Yes"){
        // Send user to check answers
        res.redirect('/prototype-1/get-prepared/check-prepare-answers')
      } else {
        // Send user to Primary or secondary
        res.redirect('/prototype-1/get-prepared/question-primary-secondary')
      }
    
  })

        // Run this code when a form is submitted to 'Country Trained in'
        router.post('/passive-country-answer', function (req, res) {
    
          // Make a variable and give it the value from 'degree'
          var passiveCountry = req.session.data['passiveCountry']
        
          // Check whether the variable matches a condition
          if (passiveCountry == "India"){
            // Send user to India guidance page
            res.redirect('/prototype-2/documents-you-will-need-india')
            // Send user to Zimbabwe guidance page
          } else if (passiveCountry == "Zimbabwe") {
            res.redirect('/prototype-2/documents-you-will-need-zimbabwe')
            // Send user to Nigeria guidance page
          } else if (passiveCountry == "Nigeria") {
            res.redirect('/prototype-2/documents-you-will-need-nigeria')
            // Send user to Jamaica guidance page
          } else if (passiveCountry == "Zimbabwe") {
            res.redirect('/prototype-2/documents-you-will-need-jamaica')
          } else {
            // Send user to STEM
            res.redirect('/prototype-1/get-prepared/question-degree-english')
          }
        
      })

       // Run this code when a form is submitted to 'together-separate'
      router.post('/together-separate-answer', function (req, res) {
    
        // Make a variable and give it the value from 'togetherSeparate'
        var togetherSeparate = req.session.data['together-separate']
      
        // Check whether the variable matches a condition
        if (togetherSeparate == "Together"){
          // Send user to next page
          res.redirect('/prototype-3/qualifications/question-qualification-title')
        } else {
          // Send user to ineligible page
          res.redirect('/prototype-3/qualifications/question-degree-title')
        }
      
    })

            // Run this code when a form is submitted to 'evidence-professional-standing-answer'
            router.post('/evidence-professional-standing-answer', function (req, res) {
    
              // Make a variable and give it the value from 'professionalStandingAnswer'
              var professionalStandingAnswer = req.session.data['evidence-professional-standing']
            
              // Check whether the variable matches a condition
              if (professionalStandingAnswer== "Online Portal"){
                // Send user to online portal page
                res.redirect('/prototype-3/professional-standing/question-reference-number')
            // Send user to upload LOPS
          } else if (professionalStandingAnswer == "LOPS CA") {
            res.redirect('/prototype-3/professional-standing/upload-lops')
              } else {
                // Send users who cannot evidence to summary
                res.redirect('/prototype-3/professional-standing/professional-standing-summary')
              }
            
          })

                      // Run this code when a form is submitted to 'reference-number-answer'
                      router.post('/reference-number-answer', function (req, res) {
    
                        // Make a variable and give it the value from 'professionalStandingAnswer'
                        var referenceNumberAnswer = req.session.data['reference-number']
                      
                        // Check whether the variable matches a condition
                        if (referenceNumberAnswer== "Yes Reference Number"){
                          // Send user to next page
                          res.redirect('/prototype-3/professional-standing/enter-reference-number')
                        } else {
                          // Send user to ineligible page
                          res.redirect('/prototype-3/professional-standing/professional-standing-summary')
                        }
                      
                    })

                      // Run this code when a form is submitted to 'current-legal-name'
                      router.post('/current-legal-name-answer', function (req, res) {
    
                        // Make a variable and give it the value from 'currentLegalNameAnswer'
                        var currentLegalNameAnswer = req.session.data['current-legal-name']
                      
                        // Check whether the variable matches a condition
                        if (currentLegalNameAnswer== "Yes"){
                          // Send user to next page
                          res.redirect('/prototype-3/personal-information/question-nationality')
                        } else {
                          // Send user to ineligible page
                          res.redirect('/prototype-3/personal-information/upload-name-change-evidence')
                        }
                      
                    })



module.exports = router
