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
/*
* 跟 AdTpl_217 的差別只有
* */
this.action = function() {
    var $window, timer;
    $window = $(window);
    timer = 0;
    var $ad, html, p, rex;
    $ad = $('#ad-floor');
    $ad.find('.ad-close-btn').click(function() {
        return $ad.remove();
    });
    $ad.addClass('show');
    $window.scroll(function() {
        if ($ad.hasClass('show')) {
            $ad.removeClass('show');
        }
        clearTimeout(timer);
        setTimeout(function() {
            return $ad.addClass('show');
        }, 1000);
    });
};
};

