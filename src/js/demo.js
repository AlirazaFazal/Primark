require(['ojs/ojcore', 'knockout', 'jquery','viewModels/appLayout/navDrawerHybrid/appController', 'ojs/ojknockout',
    'ojs/ojnavigationlist', 'ojs/ojmodule'],
    function (oj, ko, $, app) {
      
      // Change the default location for the viewModel and view files
      oj.ModuleBinding.defaults.modelPath = 'viewModels/appLayout/navDrawerHybrid/';
      oj.ModuleBinding.defaults.viewPath = 'views/appLayout/navDrawerHybrid/';

      // Method for adjusting the content area top/bottom paddings to avoid overlap with any fixed regions. 
      // This method should be called whenever your fixed region height may change.  The application
      // can also adjust content paddings with css classes if the fixed region height is not changing between 
      // views.
      function adjustContentPadding() {
        var topElem = document.getElementsByClassName('oj-applayout-fixed-top')[0];
        var contentElem = document.getElementsByClassName('oj-applayout-content')[0];
        var bottomElem = document.getElementsByClassName('oj-applayout-fixed-bottom')[0];

        if (topElem) {
          contentElem.style.paddingTop = topElem.offsetHeight+'px';
        }
        if (bottomElem) {
          contentElem.style.paddingBottom = bottomElem.offsetHeight+'px';
        }
        // Add oj-complete marker class to signal that the content area can be unhidden.
        // See the CSS demo tab to see when the content area is hidden.
        contentElem.classList.add('oj-complete');
      }

      $(function () {
        oj.Router.sync().then(
          function () {
            ko.applyBindings(app, document.getElementById('page'));
            adjustContentPadding();
          },
          function (error) {
            oj.Logger.error('Error in root start: ' + error.message);
          }
        );
      });
  });
