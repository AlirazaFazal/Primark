/*
 * Your customer ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'viewModels/appLayout/navDrawerHybrid/appController'],
 function(oj, ko, $, app) {

    function PastPurchasesViewModel() {

      var self = this;
     
      self.handleAttached = function() {
        app.generateContent();
      };

    }

    return new PastPurchasesViewModel();
  }
);