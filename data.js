$(document).ready(function () {
    FillDataList();
     populateEmployeeIdDropdown();
     timedropdown();
     clientdropdown();
});
function populateEmployeeIdDropdown()
{
        $.getJSON("https://script.google.com/macros/s/AKfycbxnm67XusUiuZRJGIvubrmIU6xc8ywRIRt-H1zhKeYDU7EMQ-Og7nm2LLPjxT_ZvCo/exec?page=employee-id", 
        function (data) {                              //01
          var Options="";                              
          $.each(data, function(key, value)            //02
          {
            Options = Options + '<option>' + value + '</option>';   //03
          });
          $("#EmployeeCode").append(Options);               //04
        });

}
function FillDataList()
{
        $.getJSON("https://script.google.com/macros/s/AKfycbxnm67XusUiuZRJGIvubrmIU6xc8ywRIRt-H1zhKeYDU7EMQ-Og7nm2LLPjxT_ZvCo/exec?page=dropdown", 
        function (data) {                              //01
          var Options="";                              
          $.each(data, function(key, value)            //02
          {
            Options = Options + '<option>' + value + '</option>';   //03
          });
          $("#EmployeeName").append(Options);               //04
        });

}
function timedropdown()
{
        $.getJSON("https://script.google.com/macros/s/AKfycbxnm67XusUiuZRJGIvubrmIU6xc8ywRIRt-H1zhKeYDU7EMQ-Og7nm2LLPjxT_ZvCo/exec?page=time", 
        function (data) {                              //01
          var Options="";                              
          $.each(data, function(key, value)            //02
          {
            Options = Options + '<option>' + value + '</option>';   //03
          });
          $("#workTime").append(Options);               //04
        });

}
function clientdropdown()
{
        $.getJSON("https://script.google.com/macros/s/AKfycbxnm67XusUiuZRJGIvubrmIU6xc8ywRIRt-H1zhKeYDU7EMQ-Og7nm2LLPjxT_ZvCo/exec?page=clientdropdown", 
        function (data) {                              //01
          var Options="";                              
          $.each(data, function(key, value)            //02
          {
            Options = Options + '<option>' + value + '</option>';   //03
          });
          $("#clientWorked").append(Options);               //04
        });

}

function addInput(containerId) {
    const container = document.getElementById(containerId);
    const input = container.querySelector('input, textarea').cloneNode(true);
    input.value = ''; // Clear the input field for the new entry
    container.insertBefore(input, container.querySelector('button'));
}
