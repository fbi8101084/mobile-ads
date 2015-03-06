function abstract_Loc() {
    this.name;
    this.fix;
    this.block;
    this.Ads = new Array();
    this.ShowedAds = new Array();
    this.ifexist = function (N) {
        if (this.Ads.length > 0) {
            for (cN in this.Ads) {
                if (N == this.Ads[cN]) {
                    return true;
                }
            }
        }
        return false;
    };
    this.ifshowed = function (N) {
        if (this.ShowedAds.length > 0) {
            for (cN in this.ShowedAds) {
                if (N == this.ShowedAds[cN]) {
                    return true;
                }
            }
        }
        return false;
    };
    this.in_array = function (stringToSearch, arrayToSearch) {
        if (arrayToSearch != null) {
            for (s = 0; s < arrayToSearch.length; s++) {
                thisEntry = arrayToSearch[s].toString();
                if (thisEntry == stringToSearch) {
                    return true;
                }
            }
        } else {
            return false;
        }
        return false;
    };
    this.idx;
    this.show = function () {
        try {
            this.Ads.remove = function (from, to) {
                var rest = this.slice((to || from) + 1 || this.length);
                this.length = from < 0 ? this.length + from : from;
                return this.push.apply(this, rest);
            };
            var i = 0, H = "", T, Tpl, block;
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
            H = T.header() + H + T.footer();
            var adObj = document.getElementById("ad" + this.name + "-" + this.block);
            adObj != null ? adObj.innerHTML = H : document.write(H);
            T.start();
            this.Ads = new Array();
        } catch (err) {
        }
        ;
    };
}
function Loc_82(block) {
    this.name = "Loc_82";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_82.prototype = new abstract_Loc();
function Loc_85(block) {
    this.name = "Loc_85";
    this.fix = 2;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_85.prototype = new abstract_Loc();
function Loc_110(block) {
    this.name = "Loc_110";
    this.fix = 4;
    this.block = block;
    this.show = function () {
        if ((document.location.href.substring(0, 11) != "http://adm3" && document.location.href.substring(0, 12) == "https://adm3") || document.location.href.indexOf("P-A-P") > 0) {
            if (document.getElementById("Loc_110_Display") == null) {
                return;
            }
        }
        try {
            var i = 0, H = "", HB = "", T, Tpl, block;
            if (this.block != 0) {
                block = this.fix;
            }
            for (N in AdMap[this.name]) {
                if (this.ifexist(N) == false) {
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
                Tpl = AdMap[this.name][this.Ads[this.idx]]["T"];
                T = eval("new Tpl_" + Tpl + "('" + this.name + "')");
                H += T.body(this.Ads[this.idx]);
                AdImMap.Add(this.name, this.Ads[this.idx]);
                this.idx++;
            }
            H = T.header() + H + T.footer();
            var adObj = document.getElementById("ad" + this.name + "-" + this.block);
            adObj != null ? adObj.innerHTML = H : document.write(H);
            T.start();
            T.showDisplay(N);
        } catch (err) {
        }
        ;
    };
};
Loc_110.prototype = new abstract_Loc();
function Loc_111(block) {
    this.name = "Loc_111";
    this.fix = 4;
    this.block = block;
    this.show = function () {
        if ((document.location.href.substring(0, 11) != "http://adm3" && document.location.href.substring(0, 12) == "https://adm3") || document.location.href.indexOf("P-A-P") > 0) {
            if (document.getElementById("Loc_110_Display") == null) {
                return;
            }
        }
        try {
            var i = 0, H = "", HB = "", T, Tpl, block;
            if (this.block != 0) {
                block = this.fix;
            }
            for (N in AdMap[this.name]) {
                if (this.ifexist(N) == false) {
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
                Tpl = AdMap[this.name][this.Ads[this.idx]]["T"];
                T = eval("new Tpl_" + Tpl + "('" + this.name + "')");
                H += T.body(this.Ads[this.idx]);
                AdImMap.Add(this.name, this.Ads[this.idx]);
                this.idx++;
            }
            H = T.header() + H + T.footer();
            var adObj = document.getElementById("ad" + this.name + "-" + this.block);
            adObj != null ? adObj.innerHTML = H : document.write(H);
            T.start();
            T.showDisplay(N);
        } catch (err) {
        }
        ;
    };
};
Loc_111.prototype = new abstract_Loc();
function Loc_113(block) {
    this.name = "Loc_113";
    this.fix = 2;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_113.prototype = new abstract_Loc();
function Loc_114(block) {
    this.name = "Loc_114";
    this.fix = 10;
    this.block = block;
    this.show = function () {
        try {
            var i = 0, H = "", T, Tpl, block;
            if (this.block != 0) {
                block = this.fix;
            }
            for (N in AdMap[this.name]) {
                if (this.ifexist(N) == false) {
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
                    var iii = 0;
                    while ((this.ifshowed(this.Ads[this.idx]) == true && this.ShowedAds.length < this.Ads.length) || (this.lastidx == this.idx && this.Ads.length != 1)) {
                        this.idx = Math.floor(Math.random() * this.Ads.length);
                        iii++;
                        if (iii > 10) {
                            break;
                        }
                    }
                    this.lastidx = this.idx;
                }
                Tpl = AdMap[this.name][this.Ads[this.idx]]["T"];
                T = eval("new Tpl_" + Tpl + "('" + this.name + "')");
                H += T.body(this.Ads[this.idx]);
                if (i == (Math.floor(this.fix / 2) - 1)) {
                    H += "<br>";
                }
                AdImMap.Add(this.name, this.Ads[this.idx]);
                this.ShowedAds.push(this.Ads[this.idx]);
                this.idx++;
            }
            H = T.header() + H + T.footer();
            var adObj = document.getElementById("ad" + this.name + "-" + this.block);
            adObj != null ? adObj.innerHTML = H : document.write(H);
            T.start();
        } catch (err) {
        }
        ;
    };
};
Loc_114.prototype = new abstract_Loc();
function Loc_117(block) {
    this.name = "Loc_117";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_117.prototype = new abstract_Loc();
function Loc_118(block) {
    this.name = "Loc_118";
    this.fix = 2;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_118.prototype = new abstract_Loc();
function Loc_131(block) {
    this.name = "Loc_131";
    this.fix = 3;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_131.prototype = new abstract_Loc();
function Loc_4(block) {
    this.name = "Loc_4";
    this.fix = 1;
    this.block = block;
    this.show = function () {
        try {
            var i = 0, H = "", T, Tpl, block, Ads = new Array(), idx;
            if (this.block != 0) {
                block = this.fix;
            }
            for (N in AdMap[this.name]) {
                Ads.push(N);
            }
            if (this.fix > Ads.length) {
                this.fix = Ads.length;
            }
            for (var i = 0; i < this.fix; i++) {
                if (typeof(idx) == "undefined") {
                    this.block == 0 ? idx = (AdToday.getSeconds() + i) % Ads.length : idx = (AdToday.getSeconds() + i + block) % Ads.length;
                }
                AdImMap.Add(this.name, Ads[idx]);
                idx++;
            }
        } catch (err) {
        }
        ;
    };
};
Loc_4.prototype = new abstract_Loc();
function Loc_6(block) {
    this.name = "Loc_6";
    this.fix = 1;
    this.block = block;
    this.AdN;
    this.show = function () {
        try {
            AdImMap.Add(this.name, this.AdN);
        } catch (err) {
        }
        ;
    };
};
Loc_6.prototype = new abstract_Loc();
function Loc_7(block) {
    this.name = "Loc_7";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_7.prototype = new abstract_Loc();
function Loc_8(block) {
    this.name = "Loc_8";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_8.prototype = new abstract_Loc();
function Loc_107(block) {
    this.name = "Loc_107";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_107.prototype = new abstract_Loc();
function Loc_23(block) {
    this.name = "Loc_23";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_23.prototype = new abstract_Loc();
function Loc_24(block) {
    this.name = "Loc_24";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_24.prototype = new abstract_Loc();
function Loc_25(block) {
    this.name = "Loc_25";
    this.fix = 3;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_25.prototype = new abstract_Loc();
function Loc_26(block) {
    this.name = "Loc_26";
    this.fix = 3;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_26.prototype = new abstract_Loc();
function Loc_27(block) {
    this.name = "Loc_27";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_27.prototype = new abstract_Loc();
function Loc_28(block) {
    this.name = "Loc_28";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_28.prototype = new abstract_Loc();
function Loc_46(block) {
    this.name = "Loc_46";
    this.fix = 3;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_46.prototype = new abstract_Loc();
function Loc_47(block) {
    this.name = "Loc_47";
    this.fix = 3;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_47.prototype = new abstract_Loc();
function Loc_49(block) {
    this.name = "Loc_49";
    this.fix = 4;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_49.prototype = new abstract_Loc();
function Loc_50(block) {
    this.name = "Loc_50";
    this.fix = 4;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_50.prototype = new abstract_Loc();
function Loc_51(block) {
    this.name = "Loc_51";
    this.fix = 4;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_51.prototype = new abstract_Loc();
function Loc_52(block) {
    this.name = "Loc_52";
    this.fix = 6;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_52.prototype = new abstract_Loc();
function Loc_53(block) {
    this.name = "Loc_53";
    this.fix = 4;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_53.prototype = new abstract_Loc();
function Loc_54(block) {
    this.name = "Loc_54";
    this.fix = 2;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_54.prototype = new abstract_Loc();
function Loc_55(block) {
    this.name = "Loc_55";
    this.fix = 2;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_55.prototype = new abstract_Loc();
function Loc_56(block) {
    this.name = "Loc_56";
    this.fix = 2;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_56.prototype = new abstract_Loc();
function Loc_57(block) {
    this.name = "Loc_57";
    this.fix = 2;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_57.prototype = new abstract_Loc();
function Loc_58(block) {
    this.name = "Loc_58";
    this.fix = 2;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_58.prototype = new abstract_Loc();
function Loc_59(block) {
    this.name = "Loc_59";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_59.prototype = new abstract_Loc();
function Loc_63(block) {
    this.name = "Loc_63";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_63.prototype = new abstract_Loc();
function Loc_65(block) {
    this.name = "Loc_65";
    this.fix = 5;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_65.prototype = new abstract_Loc();
function Loc_95(block) {
    this.name = "Loc_95";
    this.fix = 3;
    this.block = block;
    this.show = function () {
        var catnum = this.getParameter(window.location.toString(), "cate_id");
        if (catnum == "null") {
            return H;
        }
        try {
            var i = 0, H = "", T, Tpl, block;
            var d = 1;
            if (this.block != 0) {
                block = this.fix;
            }
            if (window.XMLHttpRequest) {
                xmlHttp = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            ap_f = "http://" + document.domain + "/cateAd.php";
            pa_f = "rnd=" + Math.floor(Math.random() * 1000000);
            if (xmlHttp) {
                xmlHttp.open("POST", ap_f, false);
                xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xmlHttp.onreadystatechange = function () {
                    if (xmlHttp.readyState == 4) {
                        if (xmlHttp.status == 200) {
                            var objs = eval(xmlHttp.responseText);
                            AdMap[this.name] = objs;
                            if (xmlHttp.responseText == "false") {
                            } else {
                                isSend = true;
                                setTimeout("", 1000);
                            }
                        }
                    }
                };
                xmlHttp.send(pa_f);
            }
            for (N in AdMap[this.name]) {
                if (this.ifexist(N) == false) {
                    this.Ads.push(N);
                }
            }
            this.idx = (AdToday.getSeconds() + i) % this.Ads.length;
            var choice = 0;
            for (var k = 0; k < this.Ads.length; k++) {
                var cns = this.plustonbsp(decodeURIComponent(AdMap[this.name][this.Ads[k]]["C"]["cn"]));
                if (cns == catnum) {
                    if (this.ifshowed(this.Ads[k]) != true) {
                        Tpl = AdMap[this.name][this.Ads[k]]["T"];
                        T = eval("new Tpl_" + Tpl + "('" + this.name + "')");
                        H += T.body(this.Ads[k]);
                        AdImMap.Add(this.name, this.Ads[k]);
                        this.ShowedAds.push(this.Ads[k]);
                        this.idx++;
                        choice++;
                    }
                    if (choice == this.fix) {
                        break;
                    }
                }
            }
            H = T.header() + H + T.footer();
            var adObj = document.getElementById("ad" + this.name + "-" + this.block);
            adObj != null ? adObj.innerHTML = H : document.write(H);
            T.start();
        } catch (err) {
        }
        ;
    };
    this.getParameter = function (queryString, parameterName) {
        var parameterName = parameterName + "=";
        if (queryString.length > 0) {
            begin = queryString.indexOf(parameterName);
            if (begin != -1) {
                begin += parameterName.length;
                end = queryString.indexOf("&", begin);
                if (end == -1) {
                    end = queryString.length
                }
                return unescape(queryString.substring(begin, end));
            }
            return "null";
        }
    }
    this.plustonbsp = function (str) {
        return str.replace(/\+/g, "&nbsp;");
    }
};
Loc_95.prototype = new abstract_Loc();
var Loc96_AdShowed = 0;
function Loc_96(block) {
    this.name = "Loc_96";
    this.fix = 1;
    this.block = block;
    this.show = function () {
        var catnum = this.getParameter(window.location.toString(), "cate_id");
        try {
            var i = 0, H = "", HB = "", T, Tpl, block;
            if (this.block != 0) {
                block = this.fix;
            }
            for (N in AdMap[this.name]) {
                if (this.ifexist(N) == false) {
                    this.Ads.push(N);
                }
            }
            if (this.Ads.length == 0) {
                return;
            }
            this.idx = (AdToday.getSeconds() + i) % this.Ads.length;
            var choice = 0;
            for (var i = 0; i < this.Ads.length; i++) {
                var cns = this.plustonbsp(decodeURIComponent(AdMap[this.name][this.Ads[this.idx]]["C"]["cn"])).split(",");
                for (var j = 1; j <= cns.length; j++) {
                    if (catnum == cns[j - 1]) {
                        Tpl = AdMap[this.name][this.Ads[this.idx]]["T"];
                        T = eval("new Tpl_" + Tpl + "('" + this.name + "')");
                        H += T.body(this.Ads[this.idx]);
                        AdImMap.Add(this.name, this.Ads[this.idx]);
                        choice++;
                    }
                }
                if (choice == this.fix) {
                    break;
                }
                this.idx++;
                if (this.idx >= this.Ads.length) {
                    this.idx = 0;
                }
            }
            H = T.header() + H + T.footer();
            var adObj = document.getElementById("ad" + this.name + "-" + this.block);
            adObj != null ? adObj.innerHTML = H : document.write(H);
            T.start();
        } catch (err) {
        }
        ;
    };
    this.getParameter = function (queryString, parameterName) {
        var parameterName = parameterName + "=";
        if (queryString.length > 0) {
            begin = queryString.indexOf(parameterName);
            if (begin != -1) {
                begin += parameterName.length;
                end = queryString.indexOf("&", begin);
                if (end == -1) {
                    end = queryString.length
                }
                return unescape(queryString.substring(begin, end));
            }
            return "null";
        }
    }
    this.plustonbsp = function (str) {
        return str.replace(/\+/g, "&nbsp;");
    }
};
Loc_96.prototype = new abstract_Loc();
function Loc_97(block) {
    this.name = "Loc_97";
    this.fix = 1;
    this.block = block;
    this.show = function () {
        var catnum = this.getParameter(window.location.toString(), "cate_id");
        if (typeof(Loc96_AdShowed) != "undefined") {
            if (Loc96_AdShowed == 1) {
                return;
            }
        }
        try {
            var i = 0, H = "", HB = "", T, Tpl, block;
            if (this.block != 0) {
                block = this.fix;
            }
            for (N in AdMap[this.name]) {
                if (this.ifexist(N) == false) {
                    this.Ads.push(N);
                }
            }
            if (this.Ads.length == 0) {
                return;
            }
            this.idx = (AdToday.getSeconds() + i) % this.Ads.length;
            var choice = 0;
            for (var i = 0; i < this.Ads.length; i++) {
                var cns = this.plustonbsp(decodeURIComponent(AdMap[this.name][this.Ads[this.idx]]["C"]["cn"])).split(",");
                for (var j = 1; j <= cns.length; j++) {
                    if (catnum == cns[j - 1]) {
                        Tpl = AdMap[this.name][this.Ads[this.idx]]["T"];
                        T = eval("new Tpl_" + Tpl + "('" + this.name + "')");
                        H += T.body(this.Ads[this.idx]);
                        AdImMap.Add(this.name, this.Ads[this.idx]);
                        choice++;
                    }
                }
                if (choice == this.fix) {
                    break;
                }
                this.idx++;
                if (this.idx >= this.Ads.length) {
                    this.idx = 0;
                }
            }
            H = T.header() + H + T.footer();
            var adObj = document.getElementById("ad" + this.name + "-" + this.block);
            adObj != null ? adObj.innerHTML = H : document.write(H);
            T.start();
        } catch (err) {
        }
        ;
    };
    this.plustonbsp = function (str) {
        return str.replace(/\+/g, "&nbsp;");
    };
};
Loc_97.prototype = new abstract_Loc();
function Loc_121(block) {
    this.name = "Loc_121";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_121.prototype = new abstract_Loc();
function Loc_145(block) {
    this.name = "Loc_145";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_145.prototype = new abstract_Loc();
function Loc_45(block) {
    this.name = "Loc_45";
    this.fix = 4;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_45.prototype = new abstract_Loc();
function Loc_74(block) {
    this.name = "Loc_74";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_74.prototype = new abstract_Loc();
function Loc_75(block) {
    this.name = "Loc_75";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_75.prototype = new abstract_Loc();
function Loc_66(block) {
    this.name = "Loc_66";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_66.prototype = new abstract_Loc();
function Loc_67(block) {
    this.name = "Loc_67";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_67.prototype = new abstract_Loc();
var resLd1_AdAmount = 0;
function Loc_92(block) {
    this.name = "Loc_92";
    this.fix = 3;
    this.block = block;
    this.show = function () {
        try {
            var i = 0, H = "", HB = "", T, Tpl, block;
            if (this.block != 0) {
                block = this.fix;
            }
            for (N in AdMap[this.name]) {
                if (this.ifexist(N) == false) {
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
                Tpl = AdMap[this.name][this.Ads[this.idx]]["T"];
                T = eval("new Tpl_" + Tpl + "('" + this.name + "')");
                H += T.body(this.Ads[this.idx]);
                AdImMap.Add(this.name, this.Ads[this.idx]);
                this.idx++;
            }
            H = T.header() + H + T.footer();
            var adObj = document.getElementById("ad" + this.name + "-" + this.block);
            adObj != null ? adObj.innerHTML = H : document.write(H);
            T.start();
        } catch (err) {
        }
        ;
        resLd1_AdAmount = this.Ads.length;
    };
};
Loc_92.prototype = new abstract_Loc();
function Loc_93(block) {
    this.name = "Loc_93";
    this.fix = 5;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_93.prototype = new abstract_Loc();
function Loc_94(block) {
    this.name = "Loc_94";
    this.fix = 3;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_94.prototype = new abstract_Loc();
var TopicLd1_AdAmount = 0;
function Loc_98(block) {
    this.name = "Loc_98";
    this.fix = 3;
    this.block = block;
    this.show = function () {
        try {
            var i = 0, H = "", HB = "", T, Tpl, block;
            if (this.block != 0) {
                block = this.fix;
            }
            for (N in AdMap[this.name]) {
                if (this.ifexist(N) == false) {
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
                Tpl = AdMap[this.name][this.Ads[this.idx]]["T"];
                T = eval("new Tpl_" + Tpl + "('" + this.name + "')");
                H += T.body(this.Ads[this.idx]);
                AdImMap.Add(this.name, this.Ads[this.idx]);
                this.idx++;
            }
            H = T.header() + H + T.footer();
            var adObj = document.getElementById("ad" + this.name + "-" + this.block);
            adObj != null ? adObj.innerHTML = H : document.write(H);
            T.start();
        } catch (err) {
        }
        ;
        TopicLd1_AdAmount = this.Ads.length;
    };
};
Loc_98.prototype = new abstract_Loc();
function Loc_99(block) {
    this.name = "Loc_99";
    this.fix = 3;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_99.prototype = new abstract_Loc();
function Loc_101(block) {
    this.name = "Loc_101";
    this.fix = 6;
    this.block = block;
    this.show = function () {
        if ((document.location.href.substring(0, 11) != "http://adm3" && document.location.href.substring(0, 12) == "https://adm3") || document.location.href.indexOf("P-A-P") > 0) {
            if (document.getElementById("Loc_101_Display") == null) {
                return;
            }
        }
        try {
            var i = 0, H = "", HB = "", T, Tpl, block;
            if (this.block != 0) {
                block = this.fix;
            }
            for (N in AdMap[this.name]) {
                if (this.ifexist(N) == false) {
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
                Tpl = AdMap[this.name][this.Ads[this.idx]]["T"];
                T = eval("new Tpl_" + Tpl + "('" + this.name + "')");
                H += T.body(this.Ads[this.idx]);
                AdImMap.Add(this.name, this.Ads[this.idx]);
                this.idx++;
            }
            H = T.header() + H + T.footer();
            var adObj = document.getElementById("ad" + this.name + "-" + this.block);
            adObj != null ? adObj.innerHTML = H : document.write(H);
            T.start();
            T.showDisplay(N);
        } catch (err) {
        }
        ;
    };
};
Loc_101.prototype = new abstract_Loc();
function Loc_102(block) {
    this.name = "Loc_102";
    this.fix = 6;
    this.block = block;
    this.show = function () {
        if ((document.location.href.substring(0, 11) != "http://adm3" && document.location.href.substring(0, 12) == "https://adm3") || document.location.href.indexOf("P-A-P") > 0) {
            if (document.getElementById("Loc_102_Display") == null) {
                return;
            }
        }
        try {
            var i = 0, H = "", HB = "", T, Tpl, block;
            if (this.block != 0) {
                block = this.fix;
            }
            for (N in AdMap[this.name]) {
                if (this.ifexist(N) == false) {
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
                Tpl = AdMap[this.name][this.Ads[this.idx]]["T"];
                T = eval("new Tpl_" + Tpl + "('" + this.name + "')");
                H += T.body(this.Ads[this.idx]);
                AdImMap.Add(this.name, this.Ads[this.idx]);
                this.idx++;
            }
            H = T.header() + H + T.footer();
            var adObj = document.getElementById("ad" + this.name + "-" + this.block);
            adObj != null ? adObj.innerHTML = H : document.write(H);
            T.start();
            T.showDisplay(N);
        } catch (err) {
        }
        ;
    };
};
Loc_102.prototype = new abstract_Loc();
function Loc_1(block) {
    this.name = "Loc_1";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_1.prototype = new abstract_Loc();
function Loc_30(block) {
    this.name = "Loc_30";
    this.fix = 2;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_30.prototype = new abstract_Loc();
function Loc_31(block) {
    this.name = "Loc_31";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_31.prototype = new abstract_Loc();
function Loc_32(block) {
    this.name = "Loc_32";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_32.prototype = new abstract_Loc();
var AdShowAmount_251 = 0;
function Loc_33(block) {
    this.name = "Loc_33";
    this.fix = 1;
    this.block = block;
    this.show = function () {
        try {
            var i = 0, H = "", HB = "", T, Tpl, block;
            if (this.block != 0) {
                block = this.fix;
            }
            for (N in AdMap[this.name]) {
                if (this.ifexist(N) == false) {
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
                Tpl = AdMap[this.name][this.Ads[this.idx]]["T"];
                T = eval("new Tpl_" + Tpl + "('" + this.name + "')");
                H += T.body(this.Ads[this.idx]);
                AdImMap.Add(this.name, this.Ads[this.idx]);
                this.idx++;
            }
            H = T.header() + H + T.footer();
            var adObj = document.getElementById("ad" + this.name + "-" + this.block);
            adObj != null ? adObj.innerHTML = H : document.write(H);
            T.start();
        } catch (err) {
        }
        ;
        AdShowAmount_251 = this.Ads.length;
    };
};
Loc_33.prototype = new abstract_Loc();
function Loc_34(block) {
    this.name = "Loc_34";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_34.prototype = new abstract_Loc();
function Loc_80(block) {
    this.name = "Loc_80";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_80.prototype = new abstract_Loc();
function Loc_83(block) {
    this.name = "Loc_83";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_83.prototype = new abstract_Loc();
function Loc_89(block) {
    this.name = "Loc_89";
    this.fix = 1;
    this.block = block;
    this.show = function () {
        try {
            var i = 0, H = "", HB = "", T, Tpl, block;
            if (this.block != 0) {
                block = this.fix;
            }
            for (N in AdMap[this.name]) {
                if (this.ifexist(N) == false) {
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
                Tpl = AdMap[this.name][this.Ads[this.idx]]["T"];
                T = eval("new Tpl_" + Tpl + "('" + this.name + "')");
                H += T.body(this.Ads[this.idx]);
                AdImMap.Add(this.name, this.Ads[this.idx]);
                this.idx++;
            }
            H = "<div id='adPos_225-0'>" + T.header() + H + T.footer() + "</div>";
            var adObj = document.getElementById("ad" + this.name + "-" + this.block);
            adObj != null ? adObj.innerHTML = H : document.write(H);
            T.start();
        } catch (err) {
        }
        ;
    };
};
Loc_89.prototype = new abstract_Loc();
function Loc_152(block) {
    this.name = "Loc_152";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_152.prototype = new abstract_Loc();
function Loc_154(block) {
    this.name = "Loc_154";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_154.prototype = new abstract_Loc();
function Loc_155(block) {
    this.name = "Loc_155";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_155.prototype = new abstract_Loc();
function Loc_156(block) {
    this.name = "Loc_156";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_156.prototype = new abstract_Loc();
function Loc_157(block) {
    this.name = "Loc_157";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_157.prototype = new abstract_Loc();
function Loc_158(block) {
    this.name = "Loc_158";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_158.prototype = new abstract_Loc();
function Loc_159(block) {
    this.name = "Loc_159";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_159.prototype = new abstract_Loc();
function Loc_162(block) {
    this.name = "Loc_162";
    this.fix = 4;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_162.prototype = new abstract_Loc();
function Loc_2(block) {
    this.name = "Loc_2";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_2.prototype = new abstract_Loc();
function Loc_3(block) {
    this.name = "Loc_3";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_3.prototype = new abstract_Loc();
function Loc_9(block) {
    this.name = "Loc_9";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_9.prototype = new abstract_Loc();
function Loc_10(block) {
    this.name = "Loc_10";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_10.prototype = new abstract_Loc();
function Loc_11(block) {
    this.name = "Loc_11";
    this.fix = 4;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_11.prototype = new abstract_Loc();
function Loc_12(block) {
    this.name = "Loc_12";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_12.prototype = new abstract_Loc();
function Loc_13(block) {
    this.name = "Loc_13";
    this.fix = 1;
    this.block = block;
    this.show = function () {
        try {
            var i = 0, H = "", T, Tpl, block;
            if (this.block != 0) {
                block = this.fix;
            }
            for (N in AdMap[this.name]) {
                if (this.ifexist(N) == false) {
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
                Tpl = AdMap[this.name][this.Ads[this.idx]]["T"];
                T = eval("new Tpl_" + Tpl + "('" + this.name + "')");
                H += T.body(this.Ads[this.idx]);
                this.idx++;
            }
            H = T.header() + H + T.footer();
            var adObj = document.getElementById("ad" + this.name + "-" + this.block);
            adObj != null ? adObj.innerHTML = H : document.write(H);
            T.start();
        } catch (err) {
        }
        ;
    };
};
Loc_13.prototype = new abstract_Loc();
function Loc_150(block) {
    this.name = "Loc_150";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_150.prototype = new abstract_Loc();
function Loc_153(block) {
    this.name = "Loc_153";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_153.prototype = new abstract_Loc();
function Loc_160(block) {
    this.name = "Loc_160";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_160.prototype = new abstract_Loc();
function Loc_14(block) {
    this.name = "Loc_14";
    this.fix = 1;
    this.block = block;
    this.ShowedAds = new Array();
    this.ShowedAdNums = 0;
    this.isShowRows = new Array("3", "6", "9");
    this.nextRowIdx = 0;
    this.preRowId = "ad_rnd_";
    this.callCount = 0;
    this.show = function () {
        try {
            if (this.in_array(this.callCount, this.isShowRows) == true) {
                var i = 0, H = "", T, Tpl, block;
                if (this.block != 0) {
                    block = this.fix;
                }
                for (N in AdMap[this.name]) {
                    if (this.ifexist(N) == false) {
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
                    if (this.ShowedAdNums >= this.fix) {
                        this.idx = (AdToday.getSeconds() + i) % this.Ads.length;
                        this.idx = Math.floor(Math.random() * this.Ads.length);
                        var iii = 0;
                        while (this.ifshowed(this.Ads[this.idx]) == true) {
                            this.idx = Math.floor(Math.random() * this.Ads.length);
                            iii++;
                            if (iii > 10) {
                                break;
                            }
                        }
                    }
                    Tpl = AdMap[this.name][this.Ads[this.idx]]["T"];
                    T = eval("new Tpl_" + Tpl + "('" + this.name + "')");
                    H += T.body(this.Ads[this.idx]);
                    AdImMap.Add(this.name, this.Ads[this.idx]);
                    this.ShowedAds.push(this.Ads[this.idx]);
                    this.idx++;
                    this.ShowedAdNums++;
                }
                H = T.header() + H + T.footer();
                if (this.isShowRows[this.nextRowIdx] != null) {
                    var adObj = document.getElementById(this.preRowId + this.isShowRows[this.nextRowIdx]);
                    if (adObj != null) {
                        adObj.innerHTML = H;
                        this.nextRowIdx++;
                    }
                }
                T.start();
            }
            this.callCount++;
        } catch (err) {
        }
        ;
    };
};
Loc_14.prototype = new abstract_Loc();
function Loc_15(block) {
    this.name = "Loc_15";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_15.prototype = new abstract_Loc();
function Loc_16(block) {
    this.name = "Loc_16";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_16.prototype = new abstract_Loc();
function Loc_17(block) {
    this.name = "Loc_17";
    this.fix = 2;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_17.prototype = new abstract_Loc();
function Loc_19(block) {
    this.name = "Loc_19";
    this.fix = 12;
    this.block = block;
    this.show = function () {
        try {
            var i = 0, H = "", HB = "", T, Tpl, block;
            if (this.block != 0) {
                block = this.fix;
            }
            for (N in AdMap[this.name]) {
                if (this.ifexist(N) == false) {
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
                Tpl = AdMap[this.name][this.Ads[this.idx]]["T"];
                T = eval("new Tpl_" + Tpl + "('" + this.name + "')");
                H += T.body(this.Ads[this.idx]);
                AdImMap.Add(this.name, this.Ads[this.idx]);
                this.idx++;
            }
            H = T.header() + H + T.footer();
            var adObj = document.getElementById("ad" + this.name + "-" + this.block);
            adObj != null ? adObj.innerHTML = H : document.write(H);
            T.start();
        } catch (err) {
        }
        ;
    };
};
Loc_19.prototype = new abstract_Loc();
function Loc_20(block) {
    this.name = "Loc_20";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_20.prototype = new abstract_Loc();
function Loc_48(block) {
    this.name = "Loc_48";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_48.prototype = new abstract_Loc();
function Loc_146(block) {
    this.name = "Loc_146";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_146.prototype = new abstract_Loc();
function Loc_18(block) {
    this.name = "Loc_18";
    this.fix = 4;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_18.prototype = new abstract_Loc();
function Loc_21(block) {
    this.name = "Loc_21";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_21.prototype = new abstract_Loc();
function Loc_22(block) {
    this.name = "Loc_22";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_22.prototype = new abstract_Loc();
var AdShowAmount = 0;
function Loc_35(block) {
    this.name = "Loc_35";
    this.fix = 4;
    this.block = block;
    this.show = function () {
        try {
            var i = 0, H = "", HB = "", T, Tpl, block;
            if (this.block != 0) {
                block = this.fix;
            }
            for (N in AdMap[this.name]) {
                if (this.ifexist(N) == false) {
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
                Tpl = AdMap[this.name][this.Ads[this.idx]]["T"];
                T = eval("new Tpl_" + Tpl + "('" + this.name + "')");
                if (i % 2 == 0) {
                    H += "<div style='background-color:#F1E9E4;width:100%;'>" + T.body(this.Ads[this.idx]) + "</div>";
                } else {
                    H += T.body(this.Ads[this.idx]);
                }
                AdImMap.Add(this.name, this.Ads[this.idx]);
                this.idx++;
            }
            H = T.header() + H + T.footer();
            var adObj = document.getElementById("ad" + this.name + "-" + this.block);
            adObj != null ? adObj.innerHTML = H : document.write(H);
            T.start();
        } catch (err) {
        }
        ;
        AdShowAmount = this.Ads.length;
    };
};
Loc_35.prototype = new abstract_Loc();
function Loc_36(block) {
    this.name = "Loc_36";
    this.fix = 3;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_36.prototype = new abstract_Loc();
function Loc_37(block) {
    this.name = "Loc_37";
    this.fix = 3;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_37.prototype = new abstract_Loc();
function Loc_38(block) {
    this.name = "Loc_38";
    this.fix = 3;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_38.prototype = new abstract_Loc();
function Loc_39(block) {
    this.name = "Loc_39";
    this.fix = 3;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_39.prototype = new abstract_Loc();
function Loc_40(block) {
    this.name = "Loc_40";
    this.fix = 3;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_40.prototype = new abstract_Loc();
function Loc_62(block) {
    this.name = "Loc_62";
    this.fix = 5;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_62.prototype = new abstract_Loc();
function Loc_116(block) {
    this.name = "Loc_116";
    this.fix = 2;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_116.prototype = new abstract_Loc();
function Loc_77(block) {
    this.name = "Loc_77";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_77.prototype = new abstract_Loc();
function Loc_86(block) {
    this.name = "Loc_86";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_86.prototype = new abstract_Loc();
function Loc_134(block) {
    this.name = "Loc_134";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_134.prototype = new abstract_Loc();
function Loc_138(block) {
    this.name = "Loc_138";
    this.fix = 2;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_138.prototype = new abstract_Loc();
function Loc_139(block) {
    this.name = "Loc_139";
    this.fix = 4;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_139.prototype = new abstract_Loc();
function Loc_147(block) {
    this.name = "Loc_147";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_147.prototype = new abstract_Loc();
var Loc165_AdShowed = 0;
function Loc_165(block) {
    this.name = "Loc_165";
    this.fix = 1;
    this.block = block;
    this.show = function () {
        var catnum = this.getParameter(window.location.toString(), "cate_id");
        try {
            var i = 0, H = "", HB = "", T, Tpl, block;
            if (this.block != 0) {
                block = this.fix;
            }
            for (N in AdMap[this.name]) {
                if (this.ifexist(N) == false) {
                    this.Ads.push(N);
                }
            }
            if (this.Ads.length == 0) {
                return;
            }
            this.idx = (AdToday.getSeconds() + i) % this.Ads.length;
            var choice = 0;
            for (var i = 0; i < this.Ads.length; i++) {
                var cns = this.plustonbsp(decodeURIComponent(AdMap[this.name][this.Ads[this.idx]]["C"]["cn"])).split(",");
                for (var j = 1; j <= cns.length; j++) {
                    if (catnum == cns[j - 1]) {
                        Tpl = AdMap[this.name][this.Ads[this.idx]]["T"];
                        T = eval("new Tpl_" + Tpl + "('" + this.name + "')");
                        H += T.body(this.Ads[this.idx]);
                        AdImMap.Add(this.name, this.Ads[this.idx]);
                        choice++;
                    }
                }
                if (choice == this.fix) {
                    break;
                }
                this.idx++;
                if (this.idx >= this.Ads.length) {
                    this.idx = 0;
                }
            }
            H = T.header() + H + T.footer();
            var adObj = document.getElementById("ad" + this.name + "-" + this.block);
            adObj != null ? adObj.innerHTML = H : document.write(H);
            T.start();
        } catch (err) {
        }
        ;
    };
    this.getParameter = function (queryString, parameterName) {
        var parameterName = parameterName + "=";
        if (queryString.length > 0) {
            begin = queryString.indexOf(parameterName);
            if (begin != -1) {
                begin += parameterName.length;
                end = queryString.indexOf("&", begin);
                if (end == -1) {
                    end = queryString.length
                }
                return unescape(queryString.substring(begin, end));
            }
            return "null";
        }
    }
    this.plustonbsp = function (str) {
        return str.replace(/\+/g, "&nbsp;");
    }
};
Loc_165.prototype = new abstract_Loc();
var Loc166_AdShowed = 0;
function Loc_166(block) {
    this.name = "Loc_166";
    this.fix = 1;
    this.block = block;
    this.show = function () {
        var catnum = this.getParameter(window.location.toString(), "cate_id");
        try {
            var i = 0, H = "", HB = "", T, Tpl, block;
            if (this.block != 0) {
                block = this.fix;
            }
            for (N in AdMap[this.name]) {
                if (this.ifexist(N) == false) {
                    this.Ads.push(N);
                }
            }
            if (this.Ads.length == 0) {
                return;
            }
            this.idx = (AdToday.getSeconds() + i) % this.Ads.length;
            var choice = 0;
            for (var i = 0; i < this.Ads.length; i++) {
                var cns = this.plustonbsp(decodeURIComponent(AdMap[this.name][this.Ads[this.idx]]["C"]["cn"])).split(",");
                for (var j = 1; j <= cns.length; j++) {
                    if (catnum == cns[j - 1]) {
                        Tpl = AdMap[this.name][this.Ads[this.idx]]["T"];
                        T = eval("new Tpl_" + Tpl + "('" + this.name + "')");
                        H += T.body(this.Ads[this.idx]);
                        AdImMap.Add(this.name, this.Ads[this.idx]);
                        choice++;
                    }
                }
                if (choice == this.fix) {
                    break;
                }
                this.idx++;
                if (this.idx >= this.Ads.length) {
                    this.idx = 0;
                }
            }
            H = T.header() + H + T.footer();
            var adObj = document.getElementById("ad" + this.name + "-" + this.block);
            adObj != null ? adObj.innerHTML = H : document.write(H);
            T.start();
        } catch (err) {
        }
        ;
    };
    this.getParameter = function (queryString, parameterName) {
        var parameterName = parameterName + "=";
        if (queryString.length > 0) {
            begin = queryString.indexOf(parameterName);
            if (begin != -1) {
                begin += parameterName.length;
                end = queryString.indexOf("&", begin);
                if (end == -1) {
                    end = queryString.length
                }
                return unescape(queryString.substring(begin, end));
            }
            return "null";
        }
    }
    this.plustonbsp = function (str) {
        return str.replace(/\+/g, "&nbsp;");
    }
};
Loc_166.prototype = new abstract_Loc();
var Loc167_AdShowed = 0;
function Loc_167(block) {
    this.name = "Loc_167";
    this.fix = 1;
    this.block = block;
    this.show = function () {
        var catnum = this.getParameter(window.location.toString(), "cate_id");
        try {
            var i = 0, H = "", HB = "", T, Tpl, block;
            if (this.block != 0) {
                block = this.fix;
            }
            for (N in AdMap[this.name]) {
                if (this.ifexist(N) == false) {
                    this.Ads.push(N);
                }
            }
            if (this.Ads.length == 0) {
                return;
            }
            this.idx = (AdToday.getSeconds() + i) % this.Ads.length;
            var choice = 0;
            for (var i = 0; i < this.Ads.length; i++) {
                var cns = this.plustonbsp(decodeURIComponent(AdMap[this.name][this.Ads[this.idx]]["C"]["cn"])).split(",");
                for (var j = 1; j <= cns.length; j++) {
                    if (catnum == cns[j - 1]) {
                        Tpl = AdMap[this.name][this.Ads[this.idx]]["T"];
                        T = eval("new Tpl_" + Tpl + "('" + this.name + "')");
                        H += T.body(this.Ads[this.idx]);
                        AdImMap.Add(this.name, this.Ads[this.idx]);
                        choice++;
                    }
                }
                if (choice == this.fix) {
                    break;
                }
                this.idx++;
                if (this.idx >= this.Ads.length) {
                    this.idx = 0;
                }
            }
            H = T.header() + H + T.footer();
            var adObj = document.getElementById("ad" + this.name + "-" + this.block);
            adObj != null ? adObj.innerHTML = H : document.write(H);
            T.start();
        } catch (err) {
        }
        ;
    };
    this.getParameter = function (queryString, parameterName) {
        var parameterName = parameterName + "=";
        if (queryString.length > 0) {
            begin = queryString.indexOf(parameterName);
            if (begin != -1) {
                begin += parameterName.length;
                end = queryString.indexOf("&", begin);
                if (end == -1) {
                    end = queryString.length
                }
                return unescape(queryString.substring(begin, end));
            }
            return "null";
        }
    }
    this.plustonbsp = function (str) {
        return str.replace(/\+/g, "&nbsp;");
    }
};
Loc_167.prototype = new abstract_Loc();
function Loc_176(block) {
    this.name = "Loc_176";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_176.prototype = new abstract_Loc();
function Loc_194(block) {
    this.name = "Loc_194";
    this.fix = 3;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_194.prototype = new abstract_Loc();
function Loc_171(block) {
    this.name = "Loc_171";
    this.fix = 3;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_171.prototype = new abstract_Loc();
function Loc_217(block) {
    this.name = "Loc_217";
    this.fix = 1;
    typeof(block) != "undefined" ? this.block = block : this.block = 0;
}
Loc_217.prototype = new abstract_Loc();