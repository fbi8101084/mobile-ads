/**
 * mobile 蓋台
 */
function Loc_{{$LocNum}}(block) {
    this.name = "Loc_{{$Loc->getNum()}}";
    this.fix = {{$Loc->getFix()}};
this.block = block;
this.show = function(){
    try{
        //20130611 新增，用來移除陣列中的元素
        this.Ads.remove = function(from, to) {
            var rest = this.slice((to || from) + 1 || this.length);
            this.length = from < 0 ? this.length + from : from;
            return this.push.apply(this, rest);
        };
        var i = 0 , H ="" , T , Tpl , block;
        if (this.block != 0){   block = this.fix;   }
        for (N in AdMap[this.name]){
            if (this.ifexist(N) == false && this.ifshowed(N) == false){//20130605 arthur新增 && this.ifshowed(N) == false, 修正不分配版位，多版輪播會重複的問題
                this.Ads.push(N);
            }
        }

        if (this.fix > this.Ads.length){ this.fix = this.Ads.length;    }

        for(var i=0;i< this.fix ; i++){
            if (!this.isShow(AdMap[this.name][this.Ads[this.idx]]['C']['i'][0])) {
                continue;
            }
            if(typeof(this.idx) == "undefined"){
                this.block == 0 ? this.idx = (AdToday.getSeconds()+i) % this.Ads.length : this.idx = (AdToday.getSeconds()+i+block) % this.Ads.length ;
            }else if (this.idx >= this.Ads.length){
                this.idx = 0;
            }

            if (this.ShowedAds.length>=this.fix){  //同版位多區塊時使用
                this.idx = Math.floor(Math.random()*this.Ads.length);
            }
            Tpl = AdMap[this.name][this.Ads[this.idx]]["T"];
            T = eval("new Tpl_"+Tpl+"('"+this.name+"')");
            H += T.body(this.Ads[this.idx]);
            AdImMap.Add(this.name, this.Ads[this.idx]);
            this.ShowedAds.push(this.Ads[this.idx]);
            this.Ads.remove(this.idx);
            this.idx++;
        }
        H = T.header()+H+T.footer();
        var adObj = document.getElementById("ad"+this.name+"-"+this.block);
        adObj != null ? adObj.innerHTML = H : document.write(H);
        T.start();

        this.action();

        this.Ads = new Array();//20130605 arthur新增, 修正不分配版位，多版輪播會重複的問題
    }catch(err){
        /*alert("No match tpl");*/
    };
};
this.action = function() {
    var $body, $window;
    $body = $(document.body);
    $window = $(window);
    var $ad, $img, html, p, rex,
        _this = this;
    $ad = $('#ad-full-page');
    $img = $ad.find('.ad-image');
    $img.load(function() {
        $ad.css({'padding-top': ($window.height() - $img[0].height) / 2 + 'px'});
        $ad.find('.ad-box').removeClass('hide');
        $ad.find('.ad-close-btn').click(function() {
            _this.cookie.set($img[0].src, 'fullpage', 'every day');
            return $ad.remove();
        });
        return $ad.find('.ad-loading').addClass('hide');
    });
    $ad.height(5000);
};
this.isShow = function(src) {
    return (null === this.cookie.get(src));
};
this.cookie = {set: function(name, value, limit) {
    limit = limit || 1;
    switch (limit) {
        case 'every day':
            var exp = (function() {
                var a = new Date(), tomorrow;
                a.setTime(a.getTime() + 86400000);
                tomorrow = new Date(a.getFullYear() + '-' + (a.getMonth() + 1) + '-' + a.getDate());
                return tomorrow;
            })();
            break;
        default:
            var exp = new Date();
            exp.setTime(exp.getTime() + limit * 24 * 60 * 60 * 1000);
    }
    this.delete(name);
    document.cookie = name + "=" + encodeURI(value) + ";expires=" + exp.toGMTString();
},get: function(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr !== null) {
        return decodeURI(arr[2]);
    }
    return null;
},delete: function(name) {
    var cval = this.get(name);
    if (null !== cval) {
        var exp = new Date();
        exp.setTime(exp.getTime() + -1);
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
}};
};
