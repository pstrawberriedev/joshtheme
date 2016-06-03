
$(document).ready(function() {
  
  if(!$('.page-ark').length) { return; }
  
  // Set up the Ark Server Status Widget
  var widget = $('.ark-widget');
  var widgetStatus = $('.ark-widget .status');
  var widgetName = $('.ark-widget .name');
  var widgetPlayers = $('.ark-widget .players');
  var widgetMap = $('.ark-widget .map');
  var widgetUpdated = $('.ark-widget .check');
  
  var widgetConnect = $('.ark-widget .connect');
  
  
  // Get the Ark Server Status json
  $.ajax({
    url: 'http://ark.josh.care/status',
    type: 'GET',
    dataType: 'json',

    success: function (json) {
      
      var info = json.josh;
      var status = json.updated;

      var serverStatus = info.status;
      var lastCheckedDate = status.date;
      var lastCheckedMinutes = status.minutes;

      //console.log(info);
      
      // Populate Widget Info
      widgetStatus.addClass(serverStatus);
      widgetConnect.addClass(serverStatus);
      widgetName.text(info.serverName);
      
      if(serverStatus === "up") {
        widgetPlayers.text(info.numberOfPlayers + '/' + info.maxNumberOfPlayers);
        widgetMap.text(' playing on ' + info.map);
        widgetUpdated.text('Status updated at' + lastCheckedMinutes);
        widgetConnect.attr('href', info.connectUrl);
      }
      else {
        widgetPlayers.text("Server is down");
      }

    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      
      widgetPlayers.text("Server is down");
      widgetStatus.addClass('down');
      widgetConnect.addClass('down');
      console.log('there was an error getting ark info for ' + url + '\n' + errorThrown);
      

    }
  });
  
});