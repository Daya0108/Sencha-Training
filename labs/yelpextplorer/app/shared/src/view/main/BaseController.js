Ext.define('YelpExtplorer.view.main.BaseController', {
    extend: 'Ext.app.ViewController',

    requires: ['YelpExtplorer.util.Geocode'],

    geocodeCity: function (city) {
        var me = this;
        YelpExtplorer.util.Geocode.geocodeAddress(city, function (coordinates) {
            if (coordinates) {
                me.getViewModel().set('location', coordinates);
            }
        });
    },
    initViewModel: function(vm) {
        var me = this;
    
        // Typed values should always reflect {city} and {category}.
        vm.bind('{city}', function(city){
            vm.set('typedCity', city);
        });
        vm.bind('{category}', function(category){
            vm.set('typedCategory', category);
        });
    
        // When the user types, wait a second before updating {city} and {category}
        vm.bind('{typedCity}', Ext.Function.createBuffered(function(city) {
            vm.set('city', city);
        }, 1000));
        vm.bind('{typedCategory}', Ext.Function.createBuffered(function(category) {
            vm.set('category', category);
        }, 1000));
    
        vm.bind('{city}', me.geocodeCity, me);
        vm.bind('{location}', me.load, me);
        vm.bind('{category}', me.load, me);
    
    },
    load: function() {
        // Loading the store runs the Yelp URL, passing in a "latitude" and
        // "longitude" params, which are set to the view model {location} values.
      
          var vm = this.getViewModel();
          var location = vm.get('location');
          var category = vm.get('category');
          if (!location) return;
          var store = vm.getStore('businesses');
      
          // Yelp expects something like &latitude=43.084&longitude=-89.546&term=pizza
          var params = {
            latitude: location.latitude,
            longitude: location.longitude
          };
          if (category) {
              params.term = category;
          }
          store.load({
              params: params
          });
          // Since the store has new businesses, the detail page shouldn't show the previous business any more.
          vm.set('business', null);
      }
});
