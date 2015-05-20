// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    // StatusBar.overlaysWebView( false );
    // StatusBar.backgroundColorByHexString('#ffffff');
    // StatusBar.styleDefault();

    // var homeTpl = Handlebars.compile($("#home-tpl").html());
    // var employeeListTpl = Handlebars.compile($("#employee-list-tpl").html());
    var slider = new PageSlider($('body'));

    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    EmployeeListView.prototype.template = Handlebars.compile($("#employee-list-tpl").html());
    EmployeeView.prototype.template = Handlebars.compile($("#employee-tpl").html());
    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new EmployeeService();
    // service.initialize().done(function () {
    //     renderHomeView();
    // });
    service.initialize().done(function () {
      router.addRoute('', function() {
        slider.slidePage(new HomeView(service).render().$el);
          // $('body').html(new HomeView(service).render().$el);
      });

      router.addRoute('employees/:id', function(id) {
          service.findById(parseInt(id)).done(function(employee) {
            slider.slidePage(new EmployeeView(employee).render().$el);
              // $('body').html(new EmployeeView(employee).render().$el);
          });
      });

      router.start();
    });
    /* --------------------------------- Event Registration -------------------------------- */
    // $('.search-key').on('keyup', findByName);
    // $('.help-btn').on('click', function() {
    //     alert("Employee Directory v3.4");
    // });

    /* ---------------------------------- Local Functions ---------------------------------- */
    // function findByName() {
    //     service.findByName($('.search-key').val()).done(function (employees) {
    //         var l = employees.length;
    //         var e;
    //         $('.employee-list').empty();
    //         for (var i = 0; i < l; i++) {
    //             e = employees[i];
    //             $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
    //         }
    //     });
    // }

    // function findByName() {
    //     service.findByName($('.search-key').val()).done(function (employees) {
    //         $('.content').html(employeeListTpl(employees));
    //     });
    // }
    // function renderHomeView() {
    //     $('body').html(homeTpl());
    //     $('.search-key').on('keyup', findByName);
    // }

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