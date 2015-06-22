$(function () {
  var options = {};

  $('body').tooltip('Welcome', 'primary');

  $('.docs-form').on('change', function (e) {
    var $target = $(e.target);

    options[$target.attr('name')] = $target.is(':checkbox') ? $target.prop('checked') : $target.val();
  }).on('click', 'button', function () {
    var data = $(this).data();

    $(data.target).tooltip('show', (options.content || data.content), options);
  });
});
