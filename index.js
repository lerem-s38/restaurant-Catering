/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

$('#myModal').on('show.bs.modal', function (e) {
    if (!data) {
      return e.preventDefault() // stops modal from being shown
    }
  })
  
  $('#myCollapse').on('shown.bs.collapse', function (e) {
    // Action to execute once the collapsible area is expanded
  })
  
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  
  $(function () {
    $('[data-toggle="popover"]').popover()
  })