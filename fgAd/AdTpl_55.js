function Tpl_55(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var img   = AdMap[Loc][N]["C"]["i"][0],
            img_w = AdMap[Loc][N]["C"]["i"][1],
            img_h = AdMap[Loc][N]["C"]["i"][2],
            link  = AdMap[Loc][N]["C"]["l"][theChan],
            H = '<div id="ad-full-page" class="cover">' +
                '<div class="ad-loading"></div><div class="ad-box hide">' +
                '<a class="ad-close-btn" href="javascript:;">×</a>' +
                '<div class="ad-content"><a class="ad-link" href="' + link + '" target="_blank"><img class="ad-image" src="' + img + '" alt="' + img + '"/>' +
                '</a></div></div></div>';

        return H;
    };
}
Tpl_55.prototype = new abstract_Tpl();