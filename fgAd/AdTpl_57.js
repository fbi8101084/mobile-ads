function Tpl_57(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var img   = AdMap[Loc][N]["C"]["i"][0],
            img_w = AdMap[Loc][N]["C"]["i"][1],
            img_h = AdMap[Loc][N]["C"]["i"][2],
            link  = AdMap[Loc][N]["C"]["l"][theChan],
            H = '<div id="ad-floor" class="ad-content">' +
                '<a class="ad-close-btn" href="javascript:;">×</a>' +
                '<a class="ad-link" href="' + link + '" target="_blank">' +
                '<img class="ad-image" src="' + img + '" alt="' + img + '" style="height:' + h + 'px;width:' + w + 'px">' +
                '</a>' +
                '</div>';

        return H;
    };
}
Tpl_57.prototype = new abstract_Tpl();