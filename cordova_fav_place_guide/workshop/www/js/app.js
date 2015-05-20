
(function () {

    var slider = new PageSlider($('body'));

    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    EmployeeListView.prototype.template = Handlebars.compile($("#employee-list-tpl").html());
    EmployeeView.prototype.template = Handlebars.compile($("#employee-tpl").html());
    EmployeeViewCreate.prototype.template = Handlebars.compile($("#employee-view-create-tpl").html());
    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new EmployeeService();
    
    service.initialize().done(function () {
      router.addRoute('', function() {
        slider.slidePage(new HomeView(service).render().$el);
      });

      router.addRoute('employees/:id', function(id) {
          service.findById(parseInt(id)).done(function(employee) {
            slider.slidePage(new EmployeeView(employee).render().$el);
          });
      });

      router.addRoute('create', function() {
        console.log(new EmployeeViewCreate(service))
        slider.slidePage(new EmployeeViewCreate(service).render().$el);
      });

      router.start();
    });
    

    document.addEventListener('deviceready', function () {
      if (navigator.notification) { // Override default HTML alert with native dialog
          window.alert = function (message) {
              navigator.notification.alert(
                  message,    // message
                  null,       // callback
                  "Workshop", // title
                  'OK'        // buttonName
              );
          };
      }
    }, false);

    FastClick.attach(document.body);

}());