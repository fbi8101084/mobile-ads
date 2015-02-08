(($)->
  $.ad = $.ad || {}
  $.ad.floor = ()->
    $body = $(document.body)
    $window = $(window)
    timer = 0
    $.getJSON('lib/floor.json').done (data)->
      return if not data
      html = $('#ad-floor-template').html()
      for p of data
        rex = new RegExp("\{#{p}\}", 'g')
        html = html.replace(rex, data[p])

      $body.append(html)
      $ad = $('#ad-floor')


      $ad.find('.ad-close-btn').click ()->
        $ad.remove()

      setTimeout(()->
        $ad.addClass('show')
      )

      $window.scroll ()->
        $ad.removeClass('show') if $ad.hasClass('show')
        clearTimeout(timer)
        setTimeout(()->
          $ad.addClass('show')
        , 1000)

)(window.jQuery)
