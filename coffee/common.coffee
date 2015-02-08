(($)->
  $.ad = $.ad || {}
  $.get('dist/template.html')
  .done (html)->
    $(document.body).append html
    $.ad.fullpage()
    $.ad.floor()
)(window.jQuery)