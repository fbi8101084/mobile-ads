(($)->
  $.ad = $.ad || {}
  $.ad.fullpage = ()->
    $body = $(document.body)
    $window = $(window)
    $.getJSON('lib/fullpage.json').done (data)->
      return if not data
      html = $('#ad-full-page-template').html()
      for p of data
        rex = new RegExp("\{#{p}\}", 'g')
        html = html.replace(rex, data[p])

      $body.append(html)

      $ad = $('#ad-full-page')
      $link = $ad.find('.ad-link')
      $img = $ad.find('.ad-image')
      $img.load ()->
        $ad.css(
          'padding-top': (($window.height() - $img[0].height) / 2 + 'px')
        )
        $link.append(this).attr('href', data.link)
        $ad.find('.ad-box').removeClass('hide')
        $ad.find('.ad-loading').addClass('hide')

      $ad.height($body.height())
      $ad.find('.ad-close-btn').click ()->
        $ad.remove()
)(window.jQuery)
