var HomeView = function (service) {

    var employeeListView; var employeeViewCreate;

    this.render = function() {
	    this.$el.html(this.template());
	    $('.content', this.$el).html(employeeListView.$el);
	    return this;
	};
	   //  function renderHomeView() {
    //     $('body').html(homeTpl());
    //     $('.search-key').on('keyup', findByName);
    // }

    this.findByName = function() {
	    service.findByName($('.search-key').val()).done(function(employees) {
	        employeeListView.setEmployees(employees);
	    });
	};
  this.createPlace = function(){
    alert("Created")
;  }

	  this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div/>');
        this.$el.on('keyup', '.search-key', this.findByName);
        employeeListView = new EmployeeListView();
        this.render();
        this.$el.on('click', '.add_place', this.createPlace); 
    };

    this.initialize();
}

	 // function findByName() {
  //       service.findByName($('.search-key').val()).done(function (employees) {
  //           $('.content').html(employeeListTpl(employees));
  //       });
  //   }


