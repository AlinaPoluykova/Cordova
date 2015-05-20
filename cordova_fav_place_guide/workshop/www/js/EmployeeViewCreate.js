var EmployeeViewCreate = function() {

    this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('click', '.add-location-btn', addLocation);
        this.$el.on('click', '.change-pic-btn', changePicture);
        this.$el.on('click', '.add-new', addToStorage);
    };

    this.render = function() {
        this.$el.html(this.template());
        return this;
    };


    function addLocation(event) {
      event.preventDefault();
      navigator.geolocation.getCurrentPosition(function(position) {
        alert(position.coords.latitude + ',' + position.coords.longitude);
          
        var myOptions = {
          center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
          map: map,
          title:"Hello World!"
        });
        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        geocoder = new google.maps.Geocoder();
        geocoder.geocode({'latLng': latlng}, function(results, status) {
          address = results[0].formatted_address;
          console.log(address);
        })

      }, function() {
          alert('Error getting location');
      });
      return false;
  }



    function changePicture(event) {
  event.preventDefault();
  if (!navigator.camera) {
      alert("Camera API not supported", "Error");
      return;
  }
  var options =   {   quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Album
      encodingType: 0     // 0=JPG 1=PNG
  };

  navigator.camera.getPicture(
      function(imgData) {
          $('.media-object', this.$el).attr('src', "data:image/jpeg;base64,"+imgData);
      },

      function() {
          alert('Error taking picture', 'Error');
      },
      options);


  return false;
};

    function addToStorage(){
      var oldItems = JSON.parse(window.localStorage.getItem('employees')) || [];
      var newItem = {
          'id': 15,
          "Name": $('.media-body input').val(),
          "address": address,
          "comment": $('.media-body textarea').val()
      };


      oldItems.push(newItem);

      window.localStorage.setItem('employees', JSON.stringify(oldItems));
      console.log(window.localStorage);
      alert(newItem.pic);
      alert("Successfully added");

    }





    this.initialize();


}
