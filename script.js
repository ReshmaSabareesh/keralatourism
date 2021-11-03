$('.carousel').carousel({
  interval: 2000
})
$('#myTab a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})