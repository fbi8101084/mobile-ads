function Loc_218(block) {
    this.name = "Loc_218";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
    this.show = function () {
        try {
            var elements = document.getElementsByClassName("ad" + this.name + "-" + this.block),
                adObj,
                channel;

            Loc_218.channel = Loc_218.channel || {};
            channel = Loc_218.channel;

            for (var i = 0; i < elements.length; i++) {
                var isShow = elements[i].attributes['data-isshowed'].value;

                if ('true' !== isShow) {
                    adObj = elements[i];
                    dataType = parseInt(adObj.attributes['data-type'].value, 10);

                    if ('undefined' === typeof channel[dataType]) {
                        channel[dataType] = {};
                    }

                    if ('undefined' === typeof channel[dataType].idx) {
                        channel[dataType].idx = 0;
                    }
                    if ('undefined' === typeof channel[dataType].ShowedAds) {
                        channel[dataType].ShowedAds = [];
                    }


                    var adsObj = AdMap[this.name],
                        adLen = ('undefined' === typeof adsObj) ? 0 : this.keys(adsObj).length;

                    // 判斷如果 廣告存在，且廣告數量大於等於 3 以以上，且 ShowedAds 的長度等於廣告數量，則重置"一次" ShowedAds
                    if (0 !== adLen &&
                        3 >= adLen &&
                        channel[dataType].ShowedAds.length === adLen &&
                        !channel[dataType].isRepeated
                    ) {
                        channel[dataType].ShowedAds = [];
                        channel[dataType].isRepeated = true;
                    }

                    this.idx       = channel[dataType].idx;
                    this.ShowedAds = channel[dataType].ShowedAds;
                    break;
                }
            }

            if (!adObj) {
                return;
            }

            this.Ads.remove = function (from, to) {
                var rest = this.slice((to || from) + 1 || this.length);
                this.length = from < 0 ? this.length + from : from;
                return this.push.apply(this, rest);
            };
            var i = 0, H = "", T, Tpl, block, dataType = 0;
            if (this.block != 0) {
                block = this.fix;
            }
            for (N in AdMap[this.name]) {
                if (this.ifexist(N) == false && this.ifshowed(N) == false) {
                    this.Ads.push(N);
                }
            }

            if (this.fix > this.Ads.length) {
                this.fix = this.Ads.length;
            }

            for (var i = 0; i < this.fix; i++) {
                if (typeof(this.idx) == "undefined") {
                    this.block == 0 ? this.idx = (AdToday.getSeconds() + i) % this.Ads.length : this.idx = (AdToday.getSeconds() + i + block) % this.Ads.length;
                } else if (this.idx >= this.Ads.length) {
                    this.idx = 0;
                }
                if (this.ShowedAds.length >= this.fix) {
                    this.idx = Math.floor(Math.random() * this.Ads.length);
                }
                Tpl = AdMap[this.name][this.Ads[this.idx]]["T"];
                T = eval("new Tpl_" + Tpl + "('" + this.name + "')");
                H += T.body(this.Ads[this.idx]);
                AdImMap.Add(this.name, this.Ads[this.idx]);
                this.ShowedAds.push(this.Ads[this.idx]);
                this.Ads.remove(this.idx);
                this.idx++;
            }

            if (!T) {
                return;
            }

            H = T.header() + H + T.footer();

            channel[dataType].idx = this.idx;

            if (adObj) {
                adObj.innerHTML = H;
                adObj.attributes['data-isshowed'].value = 'true';
            } else {
                document.write(H);
            }

            T.start();
            this.Ads = new Array();
        } catch (err) {}
    };
    // 建立 keys method 用於計算
    this.keys = function(obj) {
        if ('object' !== typeof obj) {
            return [];
        }

        if (Object.keys) {
            return Object.keys(obj);
        } else {
            var result = [];
            for (var p in obj) {
                result.push(p);
            }
            return result;
        }
    };
}
Loc_218.prototype = new abstract_Loc();