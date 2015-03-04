function abstract_Tpl() {
    this.Loc;
    this.AdN;
    this.header = function () {
        return "<div class=\"AdBlock AdBlock_" + this.Loc + "\">";
    };
    this.footer = function () {
        return "</div>";
    };
    this.start = function () {
    };
    this.getCfgs = function () {
        var acs = document.cookie.split(';');
        var atc = '';
        var cn = '';
        var cv = '';
        var bcf = false;
        var cfgs;
        for (i = 0; i < acs.length; i++) {
            atc = acs[i].split('=');
            cn = atc[0].replace(/^\s+|\s+$/g, '');
            if (cn == "AdCfg") {
                bcf = true;
                if (atc.length > 1) {
                    cv = unescape(atc[1].replace(/^\s+|\s+$/g, ''));
                }
                var str = "cfgs = " + cv + ";";
                eval(str);
                return cfgs;
                break;
            }
            atc = null;
            cn = '';
        }
        if (!bcf) {
            return null;
        }
    };
    this.getAdCfg = function (N) {
        var cfgs = this.getCfgs();
        if (cfgs != null) {
            for (K in cfgs) {
                if (K == N) {
                    return cfgs[N];
                }
            }
        }
        return null;
    };
    this.setCfg = function (N, Cfg) {
        var cfgs = this.getCfgs();
        if (cfgs != null) {
            l = 0;
            i = 0;
            for (K in cfgs) {
                l++;
            }
            cfgsstr = "{";
            for (K in cfgs) {
                if (K != N) {
                    cfgsstr += "\"" + K + "\"" + ":[";
                    cfgdata = "";
                    for (k in cfgs[K]) {
                        cfgdata += "\"" + cfgs[K][k] + "\",";
                    }
                    cfgdata = cfgdata.substr(0, cfgdata.length - 1);
                    cfgsstr += cfgdata + "]";
                    cfgsstr += ",";
                }
                i++;
            }
            cfgsstr += "\"" + N + "\":" + Cfg;
            cfgsstr += "}";
        } else {
            var cfgsstr = "{\"" + N + "\":" + Cfg + "}";
        }
        var expires = new Date((new Date()).getTime() + 86400000);
        var st = "AdCfg=" + cfgsstr + "; domain=.fashionguide.com.tw;path=/; expires=" + expires.toGMTString();
        document.cookie = st;
    };
    this.plustonbsp = function (str) {
        return str.replace(/\+/g, "&nbsp;");
    }
};
function Tpl_1(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var img = AdMap[Loc][N]["C"]["i"][0];
        var img_w = AdMap[Loc][N]["C"]["i"][1];
        var img_h = AdMap[Loc][N]["C"]["i"][2];
        if (typeof AdMap[Loc][N]["C"]["ib"] != 'undefined') {
            var b_img = AdMap[Loc][N]["C"]["ib"][0];
            var b_img_w = AdMap[Loc][N]["C"]["ib"][1];
            var b_img_h = AdMap[Loc][N]["C"]["ib"][2];
        }
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var H = "<div class=\"AdItem AdItem_" + Loc + "\" style=\"width:" + img_w + "px;height:" + img_h + "px;margin-left:auto;margin-right:auto;\">";
        if (img.indexOf("swf") == "-1") {
            H += "<div class=\"AdImg\"><a href='" + link + "' target='_blank'><img src='" + img + "' border='0' width='" + img_w + "' height='" + img_h + "'></a></div>";
        } else {
            if (isFlashSupported() || typeof AdMap[Loc][N]["C"]["ib"] == 'undefined') {
                H += "<div style=\"cursor: pointer; background: url('http://" + NAdImgSrc + "/i/ebg.png') repeat scroll 0% 0% transparent; position: absolute; width: " + img_w + "px; height: " + img_h + "px; z-index: 1;\" onclick=\"window.open('" + link + "','" + N + "')\">&nbsp;</div>";
                H += "<object width=\"" + img_w + "\" height=\"" + img_h + "\">";
                H += "<param name=\"fgclick\" value=\"" + link + "\">";
                H += "<embed src=\"" + img + "\" width=\"" + img_w + "\" height=\"" + img_h + "\" wmode=\"opaque\"></embed>";
                H += "</object>";
            } else {
                H += "<div class=\"AdImg\"><a href='" + link + "' target='_blank'><img src='" + b_img + "' border='0' width='" + b_img_w + "' height='" + b_img_h + "'></a></div>";
            }
        }
        H += "</div>";
        return H;
    };
}
Tpl_1.prototype = new abstract_Tpl();
function Tpl_2(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var text = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["t"]));
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var H = "";
        H += "<div class=\"AdItem AdItem_" + Loc + "\">";
        H += "<div class=\"AdText AdText_" + Loc + "\"><a href='" + link + "' target='_blank'>" + text + "</a></div>";
        H += "</div>";
        return H;
    };
}
Tpl_2.prototype = new abstract_Tpl();
function Tpl_3(Loc) {
    this.header = function () {
        return "";
    };
    this.body = function (N) {
        return "";
    };
    this.footer = function () {
        return "";
    };
}
Tpl_3.prototype = new abstract_Tpl();
function Tpl_4(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var img = AdMap[Loc][N]["C"]["i"][0];
        var img_w = AdMap[Loc][N]["C"]["i"][1];
        var img_h = AdMap[Loc][N]["C"]["i"][2];
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var text = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["t"]));
        var H = "<div class=\"AdItem AdItem_" + Loc + "\">";
        if (img.indexOf("swf") == "-1") {
            H += "<div class=\"AdFrameL AdFrameL_" + Loc + "\"><a href='" + link + "' target='_blank'><div class=\"AdImg\" style=\"width:" + img_w + "px;height:" + img_h + "px\"><img src='" + img + "' border='0' width='" + img_w + "' height='" + img_h + "'></div></a></div>";
        } else {
            H += "<div class=\"AdFrameL AdFrameL_" + Loc + "\" style=\"width:" + img_w + "px;height:" + img_h + "px;margin-left:auto;margin-right:auto;\">";
            H += "<div style=\"cursor: pointer; background: url('http://" + NAdImgSrc + "/i/ebg.png') repeat scroll 0% 0% transparent; position: absolute; width: " + img_w + "px; height: " + img_h + "px; z-index: 1;\" onclick=\"window.open('" + link + "','" + N + "')\">&nbsp;</div>";
            H += "<object width=\"" + img_w + "\" height=\"" + img_h + "\">";
            H += "<param name=\"fgclick\" value=\"" + link + "\">";
            H += "<embed src=\"" + img + "\" width=\"" + img_w + "\" height=\"" + img_h + "\" wmode=\"opaque\"></embed>";
            H += "</object>";
            H += "</div>";
        }
        H += "<div class=\"AdFrameR AdFrameR_" + Loc + "\">";
        H += "<span class=\"AdText AdText_" + Loc + "\"><a href='" + link + "' target='_blank'>" + text + "</a></span>";
        H += "</div>";
        H += "<div class=\"AdFrameC AdFrameC_" + Loc + "\"\"></div>";
        H += "</div>";
        return H;
    };
}
Tpl_4.prototype = new abstract_Tpl();
function Tpl_5(Loc) {
    var obj = this;
    this.Loc = Loc;
    this.picH = 16;
    this.scrollstep = 3;
    this.scrolltime = 20;
    this.stoptime = 5000;
    this.tmpH = 0;
    this.mar = "";
    this.mar_childDiv = "";
    this.line_height = 16;
    this.header = function () {
        return "<div id=\"AdMarquee_" + Loc + "\" class=\"AdBlock\" style=\"height:" + this.line_height + "px; overflow:hidden;\">";
    };
    this.body = function (N) {
        var text = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["t"]));
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var H = "<div class=\"AdItem AdItem_" + Loc + " AdText AdText_" + Loc + "\" style=\"height:" + this.line_height + "px;\"><a href='" + link + "' target='_blank'>" + text + "</a></div>";
        return H;
    };
    this.start = function () {
        obj.mar = document.getElementById("AdMarquee_" + Loc);
        obj.mar_childDiv = obj.mar.getElementsByTagName("div");
        obj.mar.innerHTML += obj.mar.innerHTML;
        setTimeout(obj.mar_start, obj.stoptime);
    };
    this.mar_start = function () {
        if (obj.tmpH < obj.picH) {
            obj.tmpH += obj.scrollstep;
            if (obj.tmpH > obj.picH) {
                obj.tmpH = obj.picH;
            }
            obj.mar.scrollTop = obj.tmpH;
            setTimeout(obj.mar_start, obj.scrolltime);
        } else {
            obj.tmpH = 0;
            obj.mar.appendChild(obj.mar_childDiv[0]);
            obj.mar.scrollTop = 0;
            setTimeout(obj.mar_start, obj.stoptime);
        }
    };
}
Tpl_5.prototype = new abstract_Tpl();
function Tpl_6(Loc) {
    this.Loc = Loc;
    this.showLimit = 1;
    this.frame;
    this.header = function () {
        return "";
    };
    this.body = function (N) {
        this.AdN = N;
        var img = AdMap[Loc][N]["C"]["i"][0];
        var img_w = AdMap[Loc][N]["C"]["i"][1];
        var img_h = AdMap[Loc][N]["C"]["i"][2];
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        if (img.indexOf("swf") == "-1") {
            var item = "<a target=\"_blank\" href=" + link + "><img border=\"0\" src=" + img + "></a>";
        } else {
            var item = "<div style=\"cursor: pointer; background: url('http://" + NAdImgSrc + "/i/ebg.png') repeat scroll 0% 0% transparent; position: absolute; width: " + img_w + "px; height: " + img_h + "px; z-index: 1;\" onclick=\"window.open('" + link + "','" + N + "')\">&nbsp;</div>";
            item += "<object width=\"" + img_w + "\" height=\"" + img_h + "\">";
            item += "<param name=\"fgclick\" value=\"" + link + "\">";
            item += "<embed src=\"" + img + "\" width=\"" + img_w + "\" height=\"" + img_h + "\" wmode=\"opaque\"></embed>";
            item += "</object>";
        }
        this.frame = "<html>" + "<title>POP</title>" + "<scr" + "ipt>" + "function init(){" + " var x_o=16, y_o=16;" + " if(document.getElementsByTagName(\"*\")){x_o=16,y_o=83};" + " var iW=" + img_w + ",iH=" + img_h + ";" + " window.resizeTo(iW+x_o,iH+y_o);" + "}" + "</scr" + "ipt>" + "<body topmargin=\"0\" leftmargin=\"0\" onload=\"init();\" bgcolor=\"#FFFFFF\">" +
        item + "</body>" + "</html>";
        return "";
    };
    this.footer = function () {
        return "";
    };
    this.start = function () {
        var CanShow = this.isShow();
        if (CanShow == true) {
            AdImMap.Add(this.Loc, this.AdN);
            this.popopen();
        }
    };
    this.popopen = function () {
        var POP = window.open("", "POP" + this.AdN, "resizable=1");
        POP.blur();
        if (POP.opener == null) {
            POP.opener = window;
        }
        POP.document.open();
        POP.document.writeln(this.frame);
        POP.document.close();
    };
    this.isShow = function () {
        var cfg = this.getAdCfg(this.AdN);
        var t = new Date();
        var tS = t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
        var isShow = false;
        if (cfg == null) {
            isShow = true;
            cfgstr = "[\"" + tS + "\",\"1\"]";
            this.setCfg(this.AdN, cfgstr);
        } else {
            var ss = cfg[0].split("-");
            var s = new Date(ss[0], ss[1], ss[2]);
            if (t > s) {
                isShow = true;
                cfgstr = "[\"" + tS + "\",\"1\"]";
                this.setCfg(this.AdN, cfgstr);
            } else {
                var n = cfg[1];
                n = parseInt(n, 10);
                if (n < this.showLimit) {
                    cfgstr = "[\"" + tS + "\",\"" + (n + 1) + "\"]";
                    this.setCfg(this.AdN, cfgstr);
                    isShow = true;
                }
            }
        }
        return isShow;
    };
}
Tpl_6.prototype = new abstract_Tpl();
var AdFloatLayer;
function Tpl_7(Loc) {
    AdFloatLayer = this;
    this.getdEcH = function () {
        if (document.documentElement && document.documentElement.clientHeight && (navigator.userAgent.search("MSIE") > -1 || document.domain.indexOf("www.fashionguide.com.tw") == -1)) {
            return document.documentElement.clientHeight;
        } else if (document.body && document.body.clientHeight) {
            return document.body.clientHeight;
        } else {
            return 0;
        }
    };
    this.getdEcW = function () {
        if (document.documentElement && document.documentElement.clientWidth && (navigator.userAgent.search("MSIE") > -1 || document.domain.indexOf("www.fashionguide.com.tw") == -1)) {
            return document.documentElement.clientWidth;
        } else if (document.body && document.body.clientWidth) {
            return document.body.clientWidth;
        } else {
            return 0;
        }
    };
    this.getSclTop = function () {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (document.body) {
            return document.body.scrollTop;
        } else if (document.documentElement) {
            return document.documentElement.scrollTop;
        }
    };
    this.getSclLeft = function () {
        if (document.body) {
            return document.body.scrollLeft;
        } else if (document.documentElement) {
            return document.documentElement.scrollLeft;
        }
    };
    this.img = new Image();
    this.Loc = Loc;
    this.header = function () {
        return "";
    }
    this.body = function (N) {
        this.AdN = N;
        var H = "<div id=\"AdFloatLayer_" + this.Loc + "\" class=\"AdBlock\" style=\"position: absolute; top: 50px; Left:" + this.getdEcW() + "px; width:0px; height:0px;\"></div>";
        return H;
    };
    this.footer = function () {
        return "";
    };
    this.firstLayer = function () {
        var simg = AdMap[AdFloatLayer.Loc][AdFloatLayer.AdN]["C"]["si"][0];
        var simg_w = AdMap[AdFloatLayer.Loc][AdFloatLayer.AdN]["C"]["si"][1];
        var simg_h = AdMap[AdFloatLayer.Loc][AdFloatLayer.AdN]["C"]["si"][2];
        var link = AdMap[AdFloatLayer.Loc][AdFloatLayer.AdN]["C"]["l"][theChan];
        AdFloatLayer.img.src = simg;
        var H = "<div onmouseover=\"AdFloatLayer.secondLayer()\"><div class=\"AdImg\" style=\"width:" + simg_w + "px;height:" + simg_h + "px\"><a href='" + link + "' target='_blank'><img src='" + simg + "' border='0' width='" + simg_w + "' height='" + simg_h + "'></a></div></div>";
        var Layer = document.getElementById("AdFloatLayer_" + AdFloatLayer.Loc);
        Layer.style.left = ((AdFloatLayer.getdEcW() - simg_w) + AdFloatLayer.getSclLeft()) + "px";
        Layer.style.top = (Math.floor((AdFloatLayer.getdEcH() - simg_h) / 1.2) + (AdFloatLayer.getSclTop())) + "px";
        Layer.style.width = simg_w + "px";
        Layer.style.height = simg_h + "px";
        Layer.innerHTML = H;
    };
    this.secondLayer = function () {
        bimg = AdMap[AdFloatLayer.Loc][AdFloatLayer.AdN]["C"]["bi"][0];
        bimg_w = AdMap[AdFloatLayer.Loc][AdFloatLayer.AdN]["C"]["bi"][1];
        bimg_h = AdMap[AdFloatLayer.Loc][AdFloatLayer.AdN]["C"]["bi"][2];
        link = AdMap[AdFloatLayer.Loc][AdFloatLayer.AdN]["C"]["l"][theChan];
        AdFloatLayer.img.src = bimg;
        var H = "<div onmouseout=\"AdFloatLayer.firstLayer()\">";
        if (bimg.indexOf("swf") == "-1") {
            H += "<div class=\"AdImg\" style=\"width:" + bimg_w + "px;height:" + bimg_h + "px\"><a href='" + link + "' target='_blank'><img src='" + bimg + "' border='0' width='" + bimg_w + "' height='" + bimg_h + "'></a></div>";
        } else {
            H += "<div style=\"cursor: pointer; background: url('http://" + NAdImgSrc + "/i/ebg.png') repeat scroll 0% 0% transparent; position: absolute; width: " + bimg_w + "px; height: " + bimg_h + "px; z-index: 1;\" onclick=\"window.open('" + link + "','" + N + "')\">&nbsp;</div>";
            H += "<object width=\"" + bimg_w + "\" height=\"" + bimg_h + "\">";
            H += "<param name=\"fgclick\" value=\"" + link + "\">";
            H += "<embed src=\"" + bimg + "\" width=\"" + bimg_w + "\" height=\"" + bimg_h + "\" wmode=\"opaque\"></embed>";
            H += "</object>";
        }
        H += "</div>";
        var Layer = document.getElementById("AdFloatLayer_" + AdFloatLayer.Loc);
        Layer.style.left = ((AdFloatLayer.getdEcW() - bimg_w) + AdFloatLayer.getSclLeft()) + "px";
        Layer.style.top = (Math.floor((AdFloatLayer.getdEcH() - bimg_h) / 1.2) + (AdFloatLayer.getSclTop())) + "px";
        Layer.style.width = bimg_w + "px";
        Layer.style.height = bimg_h + "px";
        Layer.innerHTML = H;
    };
    this.start = function () {
        this.firstLayer();
        this.float();
        if (document.all) {
            window.attachEvent("onscroll", AdFloatLayer.float);
            window.attachEvent("onresize", AdFloatLayer.float);
        } else {
            window.addEventListener("scroll", AdFloatLayer.float, false);
            window.addEventListener("onresize", AdFloatLayer.float, false);
        }
    };
    this.float = function () {
        var Layer = document.getElementById("AdFloatLayer_" + AdFloatLayer.Loc);
        var tPsY = Math.floor((AdFloatLayer.getdEcH() - AdFloatLayer.img.height) / 1.2) + AdFloatLayer.getSclTop();
        var tPsX = AdFloatLayer.getdEcW() - AdFloatLayer.img.width + AdFloatLayer.getSclLeft();
        Layer.style.top = tPsY + "px";
        Layer.style.left = tPsX + "px";
    };
}
Tpl_7.prototype = new abstract_Tpl();
var AdFrenchWindow;
function Tpl_8(Loc) {
    AdFrenchWindow = this;
    this.Loc = Loc;
    this.showLimit = 1;
    this.isOpen = false;
    this.header = function () {
        return "";
    };
    this.foooter = function () {
        return "";
    };
    this.body = function (N) {
        this.AdN = N;
        var link = AdMap[this.Loc][this.AdN]["C"]["l"][theChan];
        var H = "<div id=\"AdFrenchWindowBlock_" + this.Loc + "\" class=\"AdBlock AdBlock_" + Loc + "\" style=\"width:1150px; height:0px;\">";
        H += "<div id=\"AdFrenchWindowBorder_" + this.Loc + "\" style=\"position: relative; top: 0px; left: 0px; width:0px;margin-left:auto;margin-right:auto;\">";
        H += "<div id=\"AdFrenchWindowContent_" + this.Loc + "\" class=\"AdItem AdItem_" + this.Loc + "\" style=\"position: absolute; top:0px; left:0px; z-index:0;\"></div>";
        H += "<div id=\"AdFrenchWindowLink\" style=\"position:absolute; top:0px; left:0px; z-index :1 ; background-image: url('http://" + NAdImgSrc + "/i/ebg.png'); cursor: pointer; \" onclick=\"window.open('" + link + "','" + N + "')\"></div>";
        H += "<div style=\"position:absolute; right: 5px; top: 5px; width: 30px; height: 16px; z-index: 2; filter:alpha(opacity=70);-moz-opacity:0.8;opacity: 0.8;\">";
        H += "<img id=\"AdFrenchWindowSwitch\" src=\"http://" + NAdImgSrc + "/i/open.png\" border=\"0\" onclick=\"AdFrenchWindow.switcher()\"/>";
        H += "</div>";
        H += "</div>";
        H += "</div>";
        return H;
    };
    this.start = function () {
        if (this.isFirst() == true) {
            this.secondLayer();
            setTimeout("AdFrenchWindow.firstLayer();", 7000);
        } else {
            this.firstLayer();
        }
    };
    this.switcher = function () {
        if (AdFrenchWindow.isOpen == true) {
            AdFrenchWindow.firstLayer();
        } else {
            AdFrenchWindow.secondLayer();
        }
    };
    this.firstLayer = function () {
        this.isOpen = false;
        var simg = AdMap[AdFrenchWindow.Loc][AdFrenchWindow.AdN]["C"]["si"][0];
        var simg_w = AdMap[AdFrenchWindow.Loc][AdFrenchWindow.AdN]["C"]["si"][1];
        var simg_h = AdMap[AdFrenchWindow.Loc][AdFrenchWindow.AdN]["C"]["si"][2];
        if (typeof AdMap[Loc][N]["C"]["ibsi"] != 'undefined') {
            var ibsi_simg = AdMap[Loc][N]["C"]["ibsi"][0];
            var ibsi_simg_w = AdMap[Loc][N]["C"]["ibsi"][1];
            var ibsi_simg_h = AdMap[Loc][N]["C"]["ibsi"][2];
        }
        var link = AdMap[AdFrenchWindow.Loc][AdFrenchWindow.AdN]["C"]["l"][theChan];
        var H = "";
        if (simg.indexOf("swf") == "-1") {
            H += "<a href='" + link + "' target='_blank'><div class=\"AdImg\" style=\"width:" + simg_w + "px;height:" + simg_h + "px\"><img src='" + simg + "' border='0' width='" + simg_w + "' height='" + simg_h + "'/></div></a>";
        } else {
            if (isFlashSupported() || typeof AdMap[Loc][N]["C"]["ibsi"] == 'undefined') {
                H += "<object width=\"" + simg_w + "\" height=\"" + simg_h + "\">";
                H += "<param name=\"fgclick\" value=\"" + link + "\">";
                H += "<param name=\"wmode\" value=\"opaque\">";
                H += "<embed src=\"" + simg + "\" width=\"" + simg_w + "\" height=\"" + simg_h + "\" wmode=\"opaque\"></embed>";
                H += "</object>";
            } else {
                H += "<a href='" + link + "' target='_blank'><div class=\"AdImg\" style=\"width:" + ibsi_simg_w + "px;height:" + ibsi_simg_h + "px\"><img src='" + ibsi_simg + "' border='0' width='" + ibsi_simg_w + "' height='" + ibsi_simg_h + "'/></div></a>";
            }
        }
        document.getElementById("AdFrenchWindowBorder_" + AdFrenchWindow.Loc).style.width = simg_w + "px";
        document.getElementById("AdFrenchWindowBlock_" + AdFrenchWindow.Loc).style.height = simg_h + "px";
        document.getElementById("AdFrenchWindowLink").style.width = simg_w + "px";
        document.getElementById("AdFrenchWindowLink").style.height = simg_h + "px";
        document.getElementById("AdFrenchWindowContent_" + AdFrenchWindow.Loc).innerHTML = H;
        document.getElementById("AdFrenchWindowSwitch").src = "http://" + NAdImgSrc + "/i/open.png";
    };
    this.secondLayer = function () {
        this.isOpen = true;
        var bimg = AdMap[AdFrenchWindow.Loc][AdFrenchWindow.AdN]["C"]["bi"][0];
        var bimg_w = AdMap[AdFrenchWindow.Loc][AdFrenchWindow.AdN]["C"]["bi"][1];
        var bimg_h = AdMap[AdFrenchWindow.Loc][AdFrenchWindow.AdN]["C"]["bi"][2];
        if (typeof AdMap[Loc][N]["C"]["ibbi"] != 'undefined') {
            var ibbi_bimg = AdMap[Loc][N]["C"]["ibbi"][0];
            var ibbi_bimg_w = AdMap[Loc][N]["C"]["ibbi"][1];
            var ibbi_bimg_h = AdMap[Loc][N]["C"]["ibbi"][2];
        }
        var link = AdMap[AdFrenchWindow.Loc][AdFrenchWindow.AdN]["C"]["l"][theChan];
        var H = "";
        if (bimg.indexOf("swf") == "-1") {
            H += "<a href='" + link + "' target='_blank'><div class=\"AdImg\" style=\"width:" + bimg_w + "px;height:" + bimg_h + "px\"><img src='" + bimg + "' border='0' width='" + bimg_w + "' height='" + bimg_h + "'/></div></a>";
        } else {
            if (isFlashSupported() || typeof AdMap[Loc][N]["C"]["ibsi"] == 'undefined') {
                H += "<object width=\"" + bimg_w + "\" height=\"" + bimg_h + "\">";
                H += "<param name=\"link\" value=\"" + link + "\">";
                H += "<param name=\"wmode\" value=\"opaque\">";
                H += "<embed src=\"" + bimg + "\" width=\"" + bimg_w + "\" height=\"" + bimg_h + "\" wmode=\"opaque\"></embed>";
                H += "</object>";
            } else {
                H += "<a href='" + link + "' target='_blank'><div class=\"AdImg\" style=\"width:" + ibbi_bimg_w + "px;height:" + ibbi_bimg_h + "px\"><img src='" + ibbi_bimg + "' border='0' width='" + ibbi_bimg_w + "' height='" + ibbi_bimg_h + "'/></div></a>";
            }
        }
        document.getElementById("AdFrenchWindowBorder_" + AdFrenchWindow.Loc).style.width = bimg_w + "px";
        document.getElementById("AdFrenchWindowBlock_" + AdFrenchWindow.Loc).style.height = bimg_h + "px";
        document.getElementById("AdFrenchWindowLink").style.width = bimg_w + "px";
        document.getElementById("AdFrenchWindowLink").style.height = bimg_h + "px";
        document.getElementById("AdFrenchWindowContent_" + AdFrenchWindow.Loc).innerHTML = H;
        document.getElementById("AdFrenchWindowSwitch").src = "http://" + NAdImgSrc + "/i/close.png";
    };
    this.isFirst = function () {
        var cfg = this.getAdCfg(this.AdN);
        var t = new Date();
        var tS = t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
        var isFirst = false;
        if (cfg == null) {
            isFirst = true;
            cfgstr = "[\"" + tS + "\",\"1\"]";
            this.setCfg(this.AdN, cfgstr);
        } else {
            var ss = cfg[0].split("-");
            var s = new Date(ss[0], ss[1], ss[2]);
            if (t > s) {
                isFirst = true;
                cfgstr = "[\"" + tS + "\",\"1\"]";
                this.setCfg(this.AdN, cfgstr);
            } else {
                var n = cfg[1];
                n = parseInt(n, 10);
                if (n < this.showLimit) {
                    cfgstr = "[\"" + tS + "\",\"" + (n + 1) + "\"]";
                    this.setCfg(this.AdN, cfgstr);
                    isFirst = true;
                }
            }
        }
        return isFirst;
    };
}
Tpl_8.prototype = new abstract_Tpl();
function Tpl_9(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var img = AdMap[Loc][N]["C"]["i"][0];
        var img_w = AdMap[Loc][N]["C"]["i"][1];
        var img_h = AdMap[Loc][N]["C"]["i"][2];
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var ptext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["pt"]));
        var stext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["st"]));
        var H = "<div class=\"AdItem AdItem_" + Loc + "\">";
        if (img.indexOf("swf") == "-1") {
            H += "<div class=\"AdFrameL AdFrameL_" + Loc + "\"><div class=\"AdImg\" style=\"width:" + img_w + "px;height:" + img_h + "px\"><a href='" + link + "' target='_blank'><img src='" + img + "' border='0' width='" + img_w + "' height='" + img_h + "'></a></div></div>";
        } else {
            H += "<div class=\"AdFrameL AdFrameL_" + Loc + "\" style=\"width:" + img_w + "px;height:" + img_h + "px;margin-left:auto;margin-right:auto;\">";
            H += "<div style=\"cursor: pointer; background: url('http://" + NAdImgSrc + "/i/ebg.png') repeat scroll 0% 0% transparent; position: absolute; width: " + img_w + "px; height: " + img_h + "px; z-index: 1;\" onclick=\"window.open('" + link + "','" + N + "')\">&nbsp;</div>";
            H += "<object width=\"" + img_w + "\" height=\"" + img_h + "\">";
            H += "<param name=\"fgclick\" value=\"" + link + "\">";
            H += "<embed src=\"" + img + "\" width=\"" + img_w + "\" height=\"" + img_h + "\" wmode=\"opaque\"></embed>";
            H += "</object>";
            H += "</div>";
        }
        H += "<div class=\"AdFrameR AdFrameR_" + Loc + "\">";
        H += "<div class=\"AdTitle AdTitle_" + Loc + "\"><a href='" + link + "' target='_blank'>" + ptext + "</a></div>";
        H += "<div class=\"AdText AdText_" + Loc + "\"><a href='" + link + "' target='_blank'>" + stext + "</a></div>";
        H += "</div>";
        H += "<div class=\"AdFrameC AdFrameC_" + Loc + "\"\"></div>";
        H += "</div>";
        return H;
    };
}
Tpl_9.prototype = new abstract_Tpl();
function Tpl_10(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var ptext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["pt"]));
        var stext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["st"]));
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var H = ""
        H += "<div class=\"AdItem AdItem_" + Loc + "\">";
        H += "<div style=\"width:30px; height:36px; padding-top:4px; float:left\"><img src=\"http://ad3.fashionguide.com.tw/i/ad_iconf.gif\"></div>"
        H += "<div class=\"AdTitle AdTitle_" + Loc + "\"><a href='" + link + "' target='_blank'>" + ptext + "</a></div>";
        H += "<div class=\"AdText AdText_" + Loc + "\"><a href='" + link + "' target='_blank'>" + stext + "</a></div>";
        H += "</div>";
        return H;
    };
}
Tpl_10.prototype = new abstract_Tpl();
function Tpl_11(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var Fixed = false;
        var nowhref = location.href;
        ExceptArray = new Array('www.fashionguide.com.tw/news07/Detail.asp', 'www.fashionguide.com.tw/news07/List.asp', 'member.fashionguide', 'www.fashionguide.com.tw/sn/', 'www.fashionguide.com.tw/men/', 'http://www.fashionguide.com.tw/BeautyRes/Add.asp', 'http://www.fashionguide.com.tw/res/Add.asp', 'http://www.fashionguide.com.tw/res/07/BeautyTopicLogin.asp');
        for (i = 0; i < ExceptArray.length; i++) {
            if (nowhref.indexOf(ExceptArray[i]) != -1) {
                Fixed = true;
                break;
            }
        }
        if (Fixed == true) {
            var img = AdMap[Loc][N]["C"]["si"][0];
            var img_w = AdMap[Loc][N]["C"]["si"][1];
            var img_h = AdMap[Loc][N]["C"]["si"][2];
            var link = AdMap[Loc][N]["C"]["l"][theChan];
        }
        else {
            if (screen.width >= 1280) {
                var img = AdMap[Loc][N]["C"]["li"][0];
                var img_w = AdMap[Loc][N]["C"]["li"][1];
                var img_h = AdMap[Loc][N]["C"]["li"][2];
                var link = AdMap[Loc][N]["C"]["l"][theChan];
            } else {
                var img = AdMap[Loc][N]["C"]["si"][0];
                var img_w = AdMap[Loc][N]["C"]["si"][1];
                var img_h = AdMap[Loc][N]["C"]["si"][2];
                var link = AdMap[Loc][N]["C"]["l"][theChan];
            }
        }
        var H = "<div class=\"AdItem AdItem_" + Loc + "\" style=\"width:" + img_w + "px;height:" + img_h + "px;margin-left:auto;margin-right:auto;\">";
        if (img.indexOf("swf") == "-1") {
            H += "<div class=\"AdImg\"><a href='" + link + "' target='_blank'><img src='" + img + "' border='0' width='" + img_w + "' height='" + img_h + "'></a></div>";
        } else {
            H += "<div style=\"cursor: pointer; background: url('http://" + NAdImgSrc + "/i/ebg.png') repeat scroll 0% 0% transparent; position: absolute; width: " + img_w + "px; height: " + img_h + "px; z-index: 1;\" onclick=\"window.open('" + link + "','" + N + "')\">&nbsp;</div>";
            H += "<object width=\"" + img_w + "\" height=\"" + img_h + "\">";
            H += "<param name=\"link\" value=\"" + link + "\">";
            H += "<embed src=\"" + img + "\" width=\"" + img_w + "\" height=\"" + img_h + "\" wmode=\"opaque\"></embed>";
            H += "</object>";
        }
        H += "</div>";
        return H;
    };
}
Tpl_11.prototype = new abstract_Tpl();
function Tpl_12(Loc) {
    this.Loc = Loc;
    this.header = function () {
        var h = "<div class=\"AdHeader AdHeader_" + this.Loc + "\"></div>";
        h += "<div class=\"AdBlock AdBlock_" + this.Loc + "\">";
        return h;
    };
    this.body = function (N) {
        var tn = AdMap[Loc][N]["C"]["tn"];
        var tp = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["tp"]));
        var ths = AdMap[Loc][N]["C"]["ths"];
        var nc = AdMap[Loc][N]["C"]["nc"];
        var nci = "http://i.fgi.tw/images/BeautyRes" + nc + "s76.gif";
        var img = AdMap[Loc][N]["C"]["i"];
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var H = ""
        H += "<div class=\"AdItem AdItem_" + Loc + "\">";
        H += "<div style=\"width:50%;float:left;\" class=\"AdImg AdImg_" + Loc + "\"><a href=\"" + link + "\" target=\"_blank\"><img src=\"" + img + "\" border=\"0\" width=\"80\" height=\"80\"></a></div>";
        H += "<div style=\"width:50%;float:right;\" class=\"AdTitle AdTitle_" + Loc + "\"><a href=\"" + link + "\" target=\"_blank\">" + tp + "</a></div>";
        H += "<div style=\"clear:both\"></div>";
        for (var i = 0; i < ths.length; i++) {
            var intro = this.plustonbsp(decodeURIComponent(ths[i]["in"]));
            var star = ths[i]["st"];
            H += "<div style=\"margin-top:5px;\">";
            H += "<span style=\"display:-moz-inline-box; display:inline-block; width:59%;\" class=\"AdText AdText_" + Loc + "\"><a href=\"" + link + "\" target=\"_blank\">" + intro + "</a></span>";
            H += "<span style=\"display:-moz-inline-box; display:inline-block; width:39%;vertical-align:middle;\"><img src=\"" + star + "\" border=\"0\"></span>";
            H += "</div>";
        }
        H += "<div style=\"width:49%;float:left;margin-top:5px;\" class=\"AdImg\"><img src=\"" + nci + "\" width=\"80\" height=\"80\" border=\"0\" onclick=\"javascript:AdBeautyNiceAlert()\"></div>";
        H += "<div style=\"width:49%;float:right;margin-top:5px;\" class=\"AdSText AdSText_" + Loc + "\"><a href=\"http://www.fashionguide.com.tw/BresL/1.html\" target=\"_blank\">更多的市調大隊商品</a></div>";
        H += "<div style=\"clear:both\"></div>";
        H += "</div>";
        return H;
    };
}
Tpl_12.prototype = new abstract_Tpl();
function Tpl_13(Loc) {
    this.Loc = Loc;
    this.header = function () {
        var h = "<div class=\"AdHeader AdHeader_" + this.Loc + "\"></div>";
        h += "<div class=\"AdBlock AdBlock_" + this.Loc + "\">";
        return h;
    };
    this.body = function (N) {
        var Evas = new Array("很好", "好", "普通", "差", "很差");
        var EvaClrs = new Array("#FF0000", "#0000FF", "#00FF00", "#FFFF00", "#00FFFF");
        var tn = AdMap[Loc][N]["C"]["tn"];
        var tp = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["tp"]));
        var am = AdMap[Loc][N]["C"]["am"]
        var nc = AdMap[Loc][N]["C"]["nc"];
        var nci = "http://i.fgi.tw/images/BeautyRes" + nc + "s76.gif";
        var img = AdMap[Loc][N]["C"]["i"];
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var H = ""
        H += "<div class=\"AdItem AdItem_" + Loc + "\">";
        H += "<div style=\"width:50%;float:left;\" class=\"AdImg AdImg_" + Loc + "\"><a href=\"" + link + "\" target=\"_blank\"><img src=\"" + img + "\" border=\"0\" width=\"80\" height=\"80\"></a></div>";
        H += "<div style=\"width:50%;float:right;\" class=\"AdTitle AdTitle_" + Loc + "\"><a href=\"" + link + "\" target=\"_blank\">" + tp + "</a></div>";
        H += "<div style=\"clear:both\"></div>";
        for (var i = 0; i < 5; i++) {
            var ia = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["i" + (i + 1) + "a"]));
            H += "<div style=\"text-align:left;margin-top:5px;\">";
            H += "<span style=\"display:-moz-inline-box; display:inline-block; width:47%;\">";
            H += "<span style=\"display:-moz-inline-box; display:inline-block; width:47%;\" class=\"AdText AdText_" + Loc + "\">" + (i + 1) + ".<a href=\"" + link + "\" target=\"_blank\">" + Evas[i] + "</a></span>";
            H += "<span style=\"display:-moz-inline-box; display:inline-block; width:53%;\" class=\"AdSText AdSText_" + Loc + "\">" + ia + " 票</span>";
            H += "</span>";
            H += "<span style=\"display:-moz-inline-box; display:inline-block; width:49%;margin-left:5px;vertical-align:middle;\">";
            H += "<span style=\"background-color:" + EvaClrs[i] + ";display:-moz-inline-box; display:inline-block; width:" + this.calpa(ia, am) + "%;line-height:5px;\">&nbsp;</span>";
            H += "</span>";
            H += "</div>";
        }
        H += "<div style=\"width:49%;float:left;margin-top:5px;\" class=\"AdImg\" style=\"width:80px;height:80px;\"><img src=\"" + nci + "\" width=\"80\" height=\"80\" border=\"0\" onclick=\"javascript:AdBeautyNiceAlert()\"></div>";
        H += "<div style=\"width:49%;float:right;margin-top:5px;\" class=\"AdTText AdTText_" + Loc + "\" style=\"width:80px;height:80px;vertical-align:middle;\"><a href=\"http://www.fashionguide.com.tw/BTopicL/1.html\" target=\"_blank\">更多的投票評鑑/心得分享商品</a></div>";
        H += "<div style=\"clear:both\"></div>";
        H += "</div>";
        return H;
    };
    this.calpa = function (n, A) {
        if (A > 0) {
            return 120 * n / A;
        } else {
            return 0;
        }
    };
}
Tpl_13.prototype = new abstract_Tpl();
function Tpl_14(Loc) {
    this.Loc = Loc;
    this.header = function () {
        var h = "<div class=\"AdBlock AdBlock_" + this.Loc + "\">";
        return h;
    };
    this.body = function (N) {
        var text = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["t"]));
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var H = "";
        H += "<div class=\"AdItem AdItem_" + Loc + "\">";
        H += "<div class=\"AdText AdText_" + Loc + "\"><a href='" + link + "' target='_blank'>" + text + "</a></div>";
        H += "</div>";
        return H;
    };
}
Tpl_14.prototype = new abstract_Tpl();
function Tpl_15(Loc) {
    this.Loc = Loc;
    this.header = function () {
        return "";
    }
    this.footer = function () {
        return "";
    }
    this.body = function (N) {
        var topic = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["tp"]));
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var nick = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["ni"]));
        var am = AdMap[Loc][N]["C"]["am"];
        var pdate = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["pd"]));
        var H = "";
        if (ChanIdx == 28 && Loc == 'Loc_53') {
            H += "<div class=\"topic\">";
            H += "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" onmouseout=\"this.style.backgroundColor=''\" onmouseover=\"this.style.backgroundColor='#F5F5F5'\"><tbody><tr>";
            H += "<td width=\"40\" align=\"center\"><img src=\"http://i.fgi.tw/Forum/Img/Mark1.gif\" border=\"0\"> </td>";
            H += "<td width=\"370\" class=\"topicwords\"><a href=\"" + link + "\">" + topic + "</a></td>";
            H += "<td width=\"81\" align=\"center\">" + am + "</td>";
            H += "<td width=\"113\" align=\"center\" class=\"topicname\">" + nick + "</td>";
            H += "<td width=\"156\" align=\"center\" class=\"topictime\">" + pdate + "</td>";
            H += "</tr></tbody></table>";
            H += "</div>";
        } else {
            H += "<tr valign=\"top\" bgcolor=\"#FFFFFF\" align=\"center\">";
            H += "<td width=\"15\"><img src=\"http://i.fgi.tw/Forum/Img/Mark1.gif\" border=\"0\"></td>";
            H += "<td align=\"left\" class=\"AdText AdText_" + Loc + "\"><a href='" + link + "' target='_blank'>" + topic + "</a></td>";
            H += "<td class=\"AdText AdText_" + Loc + "\">" + am + "</td>";
            H += "<td align=\"left\" class=\"AdText AdText_" + Loc + "\">" + nick + "</td>";
            H += "<td class=\"AdText AdText_" + Loc + "\">" + pdate + "</td>"
            H += "</tr>";
        }
        return H;
    };
}
Tpl_15.prototype = new abstract_Tpl();
function Tpl_16(Loc) {
    this.Loc = Loc;
    this.header = function () {
        return "";
    }
    this.footer = function () {
        return "";
    }
    this.body = function (N) {
        var text = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["t"]));
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var H = "";
        H += "<tr valign=\"top\" bgcolor=\"#FFFFFF\" align=\"center\">";
        H += "<td width=\"15\"><img src=\"http://i.fgi.tw/Forum/Img/Mark1.gif\" border=\"0\"></td>";
        H += "<td align=\"left\" class=\"AdText AdText_" + Loc + "\"><a href='" + link + "' target='_blank'>" + text + "</a></td>";
        H += "<td>&nbsp;</td>";
        H += "<td>&nbsp;</td>";
        H += "<td>&nbsp;</td>"
        H += "</tr>";
        return H;
    };
}
Tpl_16.prototype = new abstract_Tpl();
function Tpl_17(Loc) {
    this.Loc = Loc;
    this.header = function () {
        var h = "<div class=\"AdBlock AdBlock_" + this.Loc + "\">";
        return h;
    };
    this.body = function (N) {
        var text = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["t"]));
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var H = "";
        H += "<div class=\"AdItem AdItem_" + Loc + "\">";
        H += "<div class=\"AdText AdText_" + Loc + "\"><a href='" + link + "' target='_blank'>" + text + "</a></div>";
        H += "</div>";
        return H;
    };
}
Tpl_17.prototype = new abstract_Tpl();
var AdFloatLayerswf;
function Tpl_18(Loc) {
    AdFloatLayerswf = this;
    this.showLimit = 1;
    this.getdEcH = function () {
        if (document.documentElement && document.documentElement.clientHeight && (navigator.userAgent.search("MSIE") > -1 || document.domain.indexOf("www.fashionguide.com.tw") == -1)) {
            return document.documentElement.clientHeight;
        } else if (document.body && document.body.clientHeight) {
            return document.body.clientHeight;
        } else {
            return 0;
        }
    };
    this.getdEcW = function () {
        if (document.documentElement && document.documentElement.clientWidth && (navigator.userAgent.search("MSIE") > -1 || document.domain.indexOf("www.fashionguide.com.tw") == -1)) {
            return document.documentElement.clientWidth;
        } else if (document.body && document.body.clientWidth) {
            return document.body.clientWidth;
        } else {
            return 0;
        }
    };
    this.getSclTop = function () {
        if (document.body) {
            return document.body.scrollTop;
        } else if (document.documentElement) {
            return document.documentElement.scrollTop;
        }
    };
    this.getSclLeft = function () {
        if (document.body) {
            return document.body.scrollLeft;
        } else if (document.documentElement) {
            return document.documentElement.scrollLeft;
        }
    };
    this.img = new Image();
    this.Loc = Loc;
    this.header = function () {
        return "";
    }
    this.body = function (N) {
        this.AdN = N;
        var H = "<div id=\"AdFloatLayerswf_" + this.Loc + "\" class=\"AdBlock\" style=\"position: absolute; top: 50px; Left:" + this.getdEcW() + "px; width:0px; height:0px;\"></div>";
        return H;
    };
    this.footer = function () {
        return "";
    };
    this.firstLayer = function () {
        var simg = AdMap[AdFloatLayerswf.Loc][AdFloatLayerswf.AdN]["C"]["si"][0];
        var simg_w = AdMap[AdFloatLayerswf.Loc][AdFloatLayerswf.AdN]["C"]["si"][1];
        var simg_h = AdMap[AdFloatLayerswf.Loc][AdFloatLayerswf.AdN]["C"]["si"][2];
        var link = AdMap[AdFloatLayerswf.Loc][AdFloatLayerswf.AdN]["C"]["l"][theChan];
        AdFloatLayerswf.img.src = simg;
        var H = "<div onmouseover=\"AdFloatLayerswf.secondLayer()\"><div class=\"AdImg\" style=\"width:" + simg_w + "px;height:" + simg_h + "px\"><a href='" + link + "' target='_blank'><img src='" + simg + "' border='0' width='" + simg_w + "' height='" + simg_h + "'></a></div></div>";
        var Layer = document.getElementById("AdFloatLayerswf_" + AdFloatLayerswf.Loc);
        Layer.style.left = ((AdFloatLayerswf.getdEcW() - simg_w) + AdFloatLayerswf.getSclLeft()) + "px";
        Layer.style.top = (Math.floor((AdFloatLayerswf.getdEcH() - simg_h) / 1.2) + (AdFloatLayerswf.getSclTop())) + "px";
        Layer.style.width = simg_w + "px";
        Layer.style.height = simg_h + "px";
        Layer.innerHTML = H;
    };
    this.secondLayer = function () {
        bimg = AdMap[AdFloatLayerswf.Loc][AdFloatLayerswf.AdN]["C"]["bi"][0];
        bimg_w = AdMap[AdFloatLayerswf.Loc][AdFloatLayerswf.AdN]["C"]["bi"][1];
        bimg_h = AdMap[AdFloatLayerswf.Loc][AdFloatLayerswf.AdN]["C"]["bi"][2];
        link = AdMap[AdFloatLayerswf.Loc][AdFloatLayerswf.AdN]["C"]["l"][theChan];
        AdFloatLayerswf.img.src = bimg;
        var H = "<div onmouseout=\"AdFloatLayerswf.firstLayer()\">";
        if (bimg.indexOf("swf") == "-1") {
            H += "<div class=\"AdImg\" style=\"width:" + bimg_w + "px;height:" + bimg_h + "px\"><a href='" + link + "' target='_blank'><img src='" + bimg + "' border='0' width='" + bimg_w + "' height='" + bimg_h + "'></a></div>";
        } else {
            H += "<object width=\"" + bimg_w + "\" height=\"" + bimg_h + "\">";
            H += "<param name=\"FlashVars\" value=\"fgclick=" + link + "\">";
            H += "<embed src=\"" + bimg + "\" width=\"" + bimg_w + "\" height=\"" + bimg_h + "\" wmode=\"opaque\" FlashVars=\"fgclick=" + link + "\"></embed>";
            var CanShow = this.isShow();
            if (CanShow == true) {
                H += "<div style=\"height:0px;width:0px;\"><img src=\"" + link + "\" width=\"0\" height=\"0\" style=\"width:0px;height:0px;\"></div>";
            }
        }
        H += "</div>";
        var Layer = document.getElementById("AdFloatLayerswf_" + AdFloatLayerswf.Loc);
        Layer.style.left = ((AdFloatLayerswf.getdEcW() - bimg_w) + AdFloatLayerswf.getSclLeft()) + "px";
        Layer.style.top = (Math.floor((AdFloatLayerswf.getdEcH() - bimg_h) / 1.2) + (AdFloatLayerswf.getSclTop())) + "px";
        Layer.style.width = bimg_w + "px";
        Layer.style.height = bimg_h + "px";
        Layer.innerHTML = H;
    };
    this.start = function () {
        this.firstLayer();
        this.float();
        if (document.all) {
            window.attachEvent("onscroll", AdFloatLayerswf.float);
            window.attachEvent("onresize", AdFloatLayerswf.float);
        } else {
            window.addEventListener("scroll", AdFloatLayerswf.float, false);
            window.addEventListener("onresize", AdFloatLayerswf.float, false);
        }
    };
    this.float = function () {
        var Layer = document.getElementById("AdFloatLayerswf_" + AdFloatLayerswf.Loc);
        var tPsY = Math.floor((AdFloatLayerswf.getdEcH() - AdFloatLayerswf.img.height) / 1.2) + AdFloatLayerswf.getSclTop();
        var tPsX = AdFloatLayerswf.getdEcW() - AdFloatLayerswf.img.width + AdFloatLayerswf.getSclLeft();
        Layer.style.top = tPsY + "px";
        Layer.style.left = tPsX + "px";
    };
    this.isShow = function () {
        var cfg = this.getAdCfg(this.AdN);
        var t = new Date();
        var tS = t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
        var isShow = false;
        if (cfg == null) {
            isShow = true;
            cfgstr = "[\"" + tS + "\",\"1\"]";
            this.setCfg(this.AdN, cfgstr);
        } else {
            var ss = cfg[0].split("-");
            var s = new Date(ss[0], ss[1], ss[2]);
            if (t > s) {
                isShow = true;
                cfgstr = "[\"" + tS + "\",\"1\"]";
                this.setCfg(this.AdN, cfgstr);
            } else {
                var n = cfg[1];
                n = parseInt(n, 10);
                if (n < this.showLimit) {
                    cfgstr = "[\"" + tS + "\",\"" + (n + 1) + "\"]";
                    this.setCfg(this.AdN, cfgstr);
                    isShow = true;
                }
            }
        }
        return isShow;
    };
}
Tpl_18.prototype = new abstract_Tpl();
function Tpl_19(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var img = AdMap[Loc][N]["C"]["i"][0];
        var img_w = AdMap[Loc][N]["C"]["i"][1];
        var img_h = AdMap[Loc][N]["C"]["i"][2];
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var ptext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["pt"]));
        var stext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["st"]));
        var H = "<div class=\"AdItem AdItem_" + Loc + "\">";
        if (img.indexOf("swf") == "-1") {
            H += "<div class=\"AdFrameL AdFrameL_" + Loc + "\"><div class=\"AdImg\" style=\"width:" + img_w + "px;height:" + img_h + "px\"><a href='" + link + "' target='_blank'><img src='" + img + "' border='0' width='" + img_w + "' height='" + img_h + "'></a></div></div>";
        } else {
            H += "<div class=\"AdFrameL AdFrameL_" + Loc + "\" style=\"width:" + img_w + "px;height:" + img_h + "px;margin-left:auto;margin-right:auto;\">";
            H += "<div style=\"cursor: pointer; background: url('http://" + NAdImgSrc + "/i/ebg.png') repeat scroll 0% 0% transparent; position: absolute; width: " + img_w + "px; height: " + img_h + "px; z-index: 1;\" onclick=\"window.open('" + link + "','" + N + "')\">&nbsp;</div>";
            H += "<object width=\"" + img_w + "\" height=\"" + img_h + "\">";
            H += "<param name=\"fgclick\" value=\"" + link + "\">";
            H += "<embed src=\"" + img + "\" width=\"" + img_w + "\" height=\"" + img_h + "\" wmode=\"opaque\"></embed>";
            H += "</object>";
            H += "</div>";
        }
        H += "<div class=\"AdFrameR AdFrameR_" + Loc + "\">";
        H += "<div class=\"AdTitle AdTitle_" + Loc + "\"><a href='" + link + "' target='_blank'>" + ptext + "</a></div>";
        H += "<div class=\"AdText AdText_" + Loc + "\"><a href='" + link + "' target='_blank'>" + stext + "</a></div>";
        H += "</div>";
        H += "<div class=\"AdFrameC AdFrameC_" + Loc + "\"\"></div>";
        H += "</div>";
        return H;
    };
}
Tpl_19.prototype = new abstract_Tpl();
function Tpl_20(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var img = AdMap[Loc][N]["C"]["i"][0];
        var img_w = AdMap[Loc][N]["C"]["i"][1];
        var img_h = AdMap[Loc][N]["C"]["i"][2];
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var ptext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["pt"]));
        var stext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["st"]));
        var H = "<div class=\"AdItem AdItem_" + Loc + "\">";
        if (img.indexOf("swf") == "-1") {
            H += "<div class=\"AdFrameL AdFrameL_" + Loc + "\"><div class=\"AdImg\" style=\"width:" + img_w + "px;height:" + img_h + "px\"><a href='" + link + "' target='_blank'><img src='" + img + "' border='0' width='" + img_w + "' height='" + img_h + "'></a></div></div>";
        } else {
            H += "<div class=\"AdFrameL AdFrameL_" + Loc + "\" style=\"width:" + img_w + "px;height:" + img_h + "px;margin-left:auto;margin-right:auto;\">";
            H += "<div style=\"cursor: pointer; background: url('http://" + NAdImgSrc + "/i/ebg.png') repeat scroll 0% 0% transparent; position: absolute; width: " + img_w + "px; height: " + img_h + "px; z-index: 1;\" onclick=\"window.open('" + link + "','" + N + "')\">&nbsp;</div>";
            H += "<object width=\"" + img_w + "\" height=\"" + img_h + "\">";
            H += "<param name=\"fgclick\" value=\"" + link + "\">";
            H += "<embed src=\"" + img + "\" width=\"" + img_w + "\" height=\"" + img_h + "\" wmode=\"opaque\"></embed>";
            H += "</object>";
            H += "</div>";
        }
        H += "<div class=\"AdFrameR AdFrameR_" + Loc + "\">";
        H += "<div class=\"AdTitle AdTitle_" + Loc + "\"><a href='" + link + "' target='_blank'>" + ptext + "</a></div>";
        H += "<div class=\"AdText AdText_" + Loc + "\"><a href='" + link + "' target='_blank'>" + stext + "</a></div>";
        H += "</div>";
        H += "<div class=\"AdFrameC AdFrameC_" + Loc + "\"\"></div>";
        H += "</div>";
        return H;
    };
}
Tpl_20.prototype = new abstract_Tpl();
function Tpl_21(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var text = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["t"]));
        var H = "";
        H += "<div class=\"AdItem AdItem_" + Loc + "\">";
        H += "<div class=\"AdText AdText_" + Loc + "\">" + text + "</div>";
        H += "</div>";
        return H;
    };
}
Tpl_21.prototype = new abstract_Tpl();
function Tpl_22(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var img = AdMap[Loc][N]["C"]["i"][0];
        var img_w = AdMap[Loc][N]["C"]["i"][1];
        var img_h = AdMap[Loc][N]["C"]["i"][2];
        var H = "<div class=\"AdItem AdItem_" + Loc + "\" style=\"width:" + img_w + "px;height:" + img_h + "px;margin-left:auto;margin-right:auto;\">";
        if (img.indexOf("swf") == "-1") {
            H += "<div class=\"AdImg\"><img src='" + img + "' border='0' width='" + img_w + "' height='" + img_h + "'></div>";
        } else {
            H += "<div style=\"cursor: pointer; background: url('http://" + NAdImgSrc + "/i/ebg.png') repeat scroll 0% 0% transparent; position: absolute; width: " + img_w + "px; height: " + img_h + "px; z-index: 1;\" >&nbsp;</div>";
            H += "<object width=\"" + img_w + "\" height=\"" + img_h + "\">";
            H += "<embed src=\"" + img + "\" width=\"" + img_w + "\" height=\"" + img_h + "\" wmode=\"opaque\"></embed>";
            H += "</object>";
        }
        H += "</div>";
        return H;
    };
}
Tpl_22.prototype = new abstract_Tpl();
function Tpl_23(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var img = AdMap[Loc][N]["C"]["i"][0];
        var img_w = AdMap[Loc][N]["C"]["i"][1];
        var img_h = AdMap[Loc][N]["C"]["i"][2];
        var text = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["t"]));
        var H = "<div class=\"AdItem AdItem_" + Loc + "\">";
        if (img.indexOf("swf") == "-1") {
            H += "<div class=\"AdFrameL AdFrameL_" + Loc + "\"><div class=\"AdImg\" style=\"width:" + img_w + "px;height:" + img_h + "px\"><img src='" + img + "' border='0' width='" + img_w + "' height='" + img_h + "'></div></div>";
        } else {
            H += "<div class=\"AdFrameL AdFrameL_" + Loc + "\" style=\"width:" + img_w + "px;height:" + img_h + "px;margin-left:auto;margin-right:auto;\">";
            H += "<div style=\"cursor: pointer; background: url('http://" + NAdImgSrc + "/i/ebg.png') repeat scroll 0% 0% transparent; position: absolute; width: " + img_w + "px; height: " + img_h + "px; z-index: 1;\" >&nbsp;</div>";
            H += "<object width=\"" + img_w + "\" height=\"" + img_h + "\">";
            H += "<embed src=\"" + img + "\" width=\"" + img_w + "\" height=\"" + img_h + "\" wmode=\"opaque\"></embed>";
            H += "</object>";
            H += "</div>";
        }
        H += "<div class=\"AdFrameR AdFrameR_" + Loc + "\">";
        H += "<span class=\"AdText AdText_" + Loc + "\">" + text + "</span>";
        H += "</div>";
        H += "<div class=\"AdFrameC AdFrameC_" + Loc + "\"\"></div>";
        H += "</div>";
        return H;
    };
}
Tpl_23.prototype = new abstract_Tpl();
function Tpl_24(Loc) {
    this.Loc = Loc;
    this.header = function () {
        return "";
    }
    this.footer = function () {
        return "";
    }
    this.body = function (N) {
        var topic = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["t"]));
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var H = "";
        H += "<tr valign=\"top\" bgcolor=\"#FFFFFF\" align=\"center\">";
        H += "<td width=\"15\"><img src=\"http://i.fgi.tw/Forum/Img/Mark1.gif\" border=\"0\"></td>";
        H += "<td align=\"left\" class=\"AdText AdText_" + Loc + "\"><a href='" + link + "' target='_blank'>" + topic + "</a></td>";
        H += "<td ></td>";
        H += "<td ></td>";
        H += "<td ></td>";
        H += "</tr>";
        return H;
    };
}
Tpl_24.prototype = new abstract_Tpl();
function Tpl_25(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var img = AdMap[Loc][N]["C"]["i"][0];
        var img_w = AdMap[Loc][N]["C"]["i"][1];
        var img_h = AdMap[Loc][N]["C"]["i"][2];
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var H = "";
        if (Loc == "Loc_96" && typeof(Loc96_AdShowed) != "undefined") {
            Loc96_AdShowed = 1;
        }
        H = "<div class=\"AdItem AdItem_" + Loc + "\" style=\"width:" + img_w + "px;height:" + img_h + "px;margin-left:auto;margin-right:auto;\">";
        if (img.indexOf("swf") == "-1") {
            H += "<div class=\"AdImg\"><a href='" + link + "' target='_blank'><img src='" + img + "' border='0' width='" + img_w + "' height='" + img_h + "'></a></div>";
        } else {
            H += "<div style=\"cursor: pointer; background: url('http://" + NAdImgSrc + "/i/ebg.png') repeat scroll 0% 0% transparent; position: absolute; width: " + img_w + "px; height: " + img_h + "px; z-index: 1;\" onclick=\"window.open('" + link + "','" + N + "')\">&nbsp;</div>";
            H += "<object width=\"" + img_w + "\" height=\"" + img_h + "\">";
            H += "<param name=\"fgclick\" value=\"" + link + "\">";
            H += "<embed src=\"" + img + "\" width=\"" + img_w + "\" height=\"" + img_h + "\" wmode=\"opaque\"></embed>";
            H += "</object>";
        }
        H += "</div>";
        return H;
    };
}
Tpl_25.prototype = new abstract_Tpl();
function Tpl_26(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var img = AdMap[Loc][N]["C"]["i"];
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var ptext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["pt"]));
        var stext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["dt"]));
        var H = "<div class=\"AdItem AdItem_" + Loc + "\">";
        if (img.indexOf("swf") == "-1") {
            H += "<div class=\"AdFrameL AdFrameL_" + Loc + "\"><div class=\"AdImg\" style=\"width:124px;height:171px\"><a href='" + link + "' target='_blank'><img src='" + img + "' border='0' width='124' height='171'></a></div></div>";
        } else {
            H += "<div class=\"AdFrameL AdFrameL_" + Loc + "\" style=\"width:124px;height:171px;margin-left:auto;margin-right:auto;\">";
            H += "<div style=\"cursor: pointer; background: url('http://" + NAdImgSrc + "/i/ebg.png') repeat scroll 0% 0% transparent; position: absolute; width: 124px; height: 171px; z-index: 1;\" onclick=\"window.open('" + link + "','" + N + "')\">&nbsp;</div>";
            H += "<object width=\"124\" height=\"171\">";
            H += "<param name=\"fgclick\" value=\"" + link + "\">";
            H += "<embed src=\"" + img + "\" width=\"124\" height=\"171\" wmode=\"opaque\"></embed>";
            H += "</object>";
            H += "</div>";
        }
        H += "<div class=\"AdFrameR AdFrameR_" + Loc + "\">";
        H += "<div class=\"AdTitle AdTitle_" + Loc + "\"><a href='" + link + "' target='_blank'>" + ptext + "</a></div>";
        H += "<div class=\"AdText AdText_" + Loc + "\"><a href='" + link + "' target='_blank'>" + stext + "</a></div>";
        H += "</div>";
        H += "<div class=\"AdFrameC AdFrameC_" + Loc + "\"\"></div>";
        H += "</div>";
        return H;
    };
}
Tpl_26.prototype = new abstract_Tpl();
function Tpl_27(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var text = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["pt"]));
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var sdate = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["dt"]));
        var amount = AdMap[Loc][N]["C"]["am"];
        var H = "";
        H += "<tr valign=\"top\" bgcolor=\"#FFFFFF\" align=\"center\">";
        H += "<td width=\"15\"><img src=\"http://i.fgi.tw/Forum/Img/Mark1.gif\" border=\"0\"></td>";
        H += "<td align=\"left\" class=\"AdText AdText_" + Loc + "\"><a href='" + link + "' target='_blank'>" + text + "</a></td>";
        H += "<td>" + amount + "&nbsp;</td>";
        H += "<td>" + sdate + "&nbsp;</td>";
        H += "</tr>";
        return H;
    };
}
Tpl_27.prototype = new abstract_Tpl();
var Loc_101_Ad = new Array();
var Loc_102_Ad = new Array();
function Loc_101_DisplayControl(N, Loc, s1, s2, s3, s4, s5) {
    if (document.getElementById("Loc_101_Display") != null) {
        document.getElementById('Loc_101_Display').innerHTML = Loc_101_Ad[N];
    }
    document.getElementById("AdPie_" + Loc).innerHTML = "<table><tr><td><img src='http://chart.apis.google.com/chart?cht=p&chd=t:" + s5 + "," + s4 + "," + s3 + "," + s2 + "," + s1 + "&chs=100x100&chco=cdbae1|a791bd|87719d|4c3662|311b47'></td><td width='75'><table border='0' cellspacing='0' height='96' cellpadding='2' style='color:#4B4B4B;font-size:12px;'><tr><td><img src='http://i.fgi.tw/Beauty/Img/rc1.gif'></td><td>很好</td><td>" + s1 + "%</td></tr><tr><td><img src='http://i.fgi.tw/Beauty/Img/rc2.gif'></td><td>好</td><td>" + s2 + "%</td></tr><tr> <td><img src='http://i.fgi.tw/Beauty/Img/rc3.gif'></td><td>普通</td><td>" + s3 + "%</td></tr><tr><td><img src='http://i.fgi.tw/Beauty/Img/rc4.gif'></td><td>差</td><td>" + s4 + "%</td></tr><tr> <td><img src='http://i.fgi.tw/Beauty/Img/rc5.gif'></td><td>很差</td><td>" + s5 + "%</td></tr></table>";
}
function Loc_102_DisplayControl(N, Loc, s1, s2, s3, s4, s5) {
    if (document.getElementById("Loc_102_Display") != null) {
        document.getElementById('Loc_102_Display').innerHTML = Loc_102_Ad[N];
    }
    document.getElementById("AdPie_" + Loc).innerHTML = "<table><tr><td><img src='http://chart.apis.google.com/chart?cht=p&chd=t:" + s5 + "," + s4 + "," + s3 + "," + s2 + "," + s1 + "&chs=100x100&chco=87c7b1|B2C97E|Fdd876|F6AC69|F08D76'></td><td width='75'><table border='0' cellspacing='0' height='96' cellpadding='2' style='color:#4B4B4B;font-size:12px;'><tr><td><img src='http://i.fgi.tw/Beauty/Img/c1.gif'></td><td>很好</td><td>" + s1 + "%</td></tr><tr><td><img src='http://i.fgi.tw/Beauty/Img/c2.gif'></td><td>好</td><td>" + s2 + "%</td></tr><tr> <td><img src='http://i.fgi.tw/Beauty/Img/c3.gif'></td><td>普通</td><td>" + s3 + "%</td></tr><tr><td><img src='http://i.fgi.tw/Beauty/Img/c4.gif'></td><td>差</td><td>" + s4 + "%</td></tr><tr> <td><img src='http://i.fgi.tw/Beauty/Img/c5.gif'></td><td>很差</td><td>" + s5 + "%</td></tr></table>";
}
function Tpl_28(Loc) {
    this.Loc = Loc;
    this.header = function () {
        var h = "<div class=\"AdBlock AdBlock_" + Loc + "\">";
        return h;
    };
    this.footer = function () {
        var h = "</div>";
        return h;
    };
    this.body = function (N) {
        var s1 = AdMap[Loc][N]["C"]["i1p"];
        var s2 = AdMap[Loc][N]["C"]["i2p"];
        var s3 = AdMap[Loc][N]["C"]["i3p"];
        var s4 = AdMap[Loc][N]["C"]["i4p"];
        var s5 = AdMap[Loc][N]["C"]["i5p"];
        var img = AdMap[Loc][N]["C"]["i"];
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var H = "";
        var innerHtml = this.makeInnerHtml(N);
        if (typeof(eval(Loc + "_Ad")) != "undefined") {
            eval(Loc + "_Ad")[N] = innerHtml;
        }
        if ((document.location.href.substring(0, 11) == "http://adm3" || document.location.href.substring(0, 12) == "https://adm3") && document.location.href.indexOf("P-A-P") == -1) {
            H = "<div id=\"" + Loc + "_Display\">" + innerHtml + "</div>";
        }
        H += "<div class=\"AdItem AdItem_" + Loc + "\">";
        if (typeof(eval(Loc + "_DisplayControl")) != "undefined") {
            H += "<a href=\"" + link + "\" target=\"_blank\" onmouseover=\"" + Loc + "_DisplayControl(" + N + ",'" + Loc + "'," + s1 + "," + s2 + "," + s3 + "," + s4 + "," + s5 + ");\">";
        }
        H += "<img src=\"" + img + "\" width=\"49\" height=\"49\" border=\"0\" />";
        H += "</a>";
        H += "</div>";
        return H;
    };
    this.makeInnerHtml = function (N) {
        var tp = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["tp"]));
        var s1 = AdMap[Loc][N]["C"]["i1p"];
        var s2 = AdMap[Loc][N]["C"]["i2p"];
        var s3 = AdMap[Loc][N]["C"]["i3p"];
        var s4 = AdMap[Loc][N]["C"]["i4p"];
        var s5 = AdMap[Loc][N]["C"]["i5p"];
        var pri = AdMap[Loc][N]["C"]["pri"];
        var vol = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["vol"]));
        var am = AdMap[Loc][N]["C"]["am"];
        var img = AdMap[Loc][N]["C"]["i"];
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var nc = AdMap[Loc][N]["C"]["nc"];
        var innerHtml = "";
        innerHtml += "<div class=\"AdFrameL AdFrameL_" + Loc + "\">";
        innerHtml += "<table><tr><td background=\"" + img + "\" height=\"144\" width=\"141\" valign=\"top\">";
        switch (nc) {
            case"1":
            case"2":
                innerHtml += "<img src=\"http://" + NAdImgSrc + "/i/AdTpl_28_icon_" + nc + ".gif\"/>";
                break
        }
        innerHtml += "</td></tr></table>";
        innerHtml += "</div>";
        innerHtml += "<div class=\"AdFrameR AdFrameR_" + Loc + "\">";
        innerHtml += "<div class=\"AdTitle AdTitle_" + Loc + "\">";
        innerHtml += "<a href=\"" + link + "\" target=\"_blank\">" + tp + "</a>";
        innerHtml += "</div>";
        innerHtml += "<div style=\"float:left;width:100%;\">";
        innerHtml += "<div style=\"width:40%;float:left;\">";
        innerHtml += "<div style=\"height:20px\"></div>";
        innerHtml += "<div>";
        innerHtml += "<span class=\"AdText AdText_" + Loc + "\">參考價格</span>";
        innerHtml += "<span class=\"AdSText AdSText_" + Loc + "\">" + pri + "元</span>";
        innerHtml += "</div>";
        innerHtml += "<div>";
        innerHtml += "<span class=\"AdText AdText_" + Loc + "\">容量</span>";
        innerHtml += "<span class=\"AdSText AdSText_" + Loc + "\">" + vol + "</span>";
        innerHtml += "</div>";
        innerHtml += "<div>";
        innerHtml += "<span class=\"AdText AdText_" + Loc + "\">票數</span>";
        innerHtml += "<span class=\"AdSText AdSText_" + Loc + "\">" + am + "票</span>";
        innerHtml += "</div>";
        innerHtml += "<span class=\"AdText AdText_" + Loc + "\"><a href=\"" + link + "\" target=\"_blank\">看使用心得</a></span>";
        innerHtml += "</div>";
        innerHtml += "<div id=\"AdPie_" + Loc + "\" style=\"width:60%;float:right;\">";
        innerHtml += "</div>";
        innerHtml += "</div>";
        innerHtml += "</div>";
        innerHtml += "<div style=\"clear:both\"></div>";
        return innerHtml;
    };
    this.showDisplay = function (N) {
        var s1 = AdMap[Loc][N]["C"]["i1p"];
        var s2 = AdMap[Loc][N]["C"]["i2p"];
        var s3 = AdMap[Loc][N]["C"]["i3p"];
        var s4 = AdMap[Loc][N]["C"]["i4p"];
        var s5 = AdMap[Loc][N]["C"]["i5p"];
        eval(Loc + "_DisplayControl(" + N + ",'" + Loc + "'," + s1 + "," + s2 + "," + s3 + "," + s4 + "," + s5 + ")");
    };
}
Tpl_28.prototype = new abstract_Tpl();
var AdFloatLayerLeft;
function Tpl_29(Loc) {
    AdFloatLayerLeft = this;
    this.getdEcH = function () {
        if (document.documentElement && document.documentElement.clientHeight && (navigator.userAgent.search("MSIE") > -1 || document.domain.indexOf("www.fashionguide.com.tw") == -1)) {
            return document.documentElement.clientHeight;
        } else if (document.body && document.body.clientHeight) {
            return document.body.clientHeight;
        } else {
            return 0;
        }
    };
    this.getdEcW = function () {
        if (document.documentElement && document.documentElement.clientWidth && (navigator.userAgent.search("MSIE") > -1 || document.domain.indexOf("www.fashionguide.com.tw") == -1)) {
            return document.documentElement.clientWidth;
        } else if (document.body && document.body.clientWidth) {
            return document.body.clientWidth;
        } else {
            return 0;
        }
    };
    this.getSclTop = function () {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    };
    this.getSclLeft = function () {
        return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    };
    this.img = new Image();
    this.Loc = Loc;
    this.header = function () {
        return "";
    }
    this.body = function (N) {
        this.AdN = N;
        StartTime = this.plustonbsp(decodeURIComponent(AdMap[AdFloatLayerLeft.Loc][AdFloatLayerLeft.AdN]["C"]["t1"])).split(":");
        EndTime = this.plustonbsp(decodeURIComponent(AdMap[AdFloatLayerLeft.Loc][AdFloatLayerLeft.AdN]["C"]["t2"])).split(":");
        if (StartTime.length != 2 || EndTime.length != 2) {
            return "";
        }
        Now = new Date();
        if ((Now.getHours() * 60 + Now.getMinutes()) < (StartTime[0] * 60 + StartTime[1] * 1)) {
            return "";
        }
        if ((Now.getHours() * 60 + Now.getMinutes()) > (EndTime[0] * 60 + EndTime[1] * 1)) {
            return "";
        }
        var H = "<div id=\"AdFloatLayerLeft_" + this.Loc + "\" class=\"AdBlock\" style=\"position: absolute; top: 50px; Left:" + this.getdEcW() + "px; width:0px; height:0px;\"></div>";
        return H;
    };
    this.footer = function () {
        return "";
    };
    this.firstLayer = function () {
        var simg = AdMap[AdFloatLayerLeft.Loc][AdFloatLayerLeft.AdN]["C"]["si"][0];
        var simg_w = AdMap[AdFloatLayerLeft.Loc][AdFloatLayerLeft.AdN]["C"]["si"][1];
        var simg_h = AdMap[AdFloatLayerLeft.Loc][AdFloatLayerLeft.AdN]["C"]["si"][2];
        var link = AdMap[AdFloatLayerLeft.Loc][AdFloatLayerLeft.AdN]["C"]["l"][theChan];
        AdFloatLayerLeft.img.src = simg;
        var H = "<div onmouseover=\"AdFloatLayerLeft.secondLayer()\"><div class=\"AdImg\" style=\"width:" + simg_w + "px;height:" + simg_h + "px\"><a href='" + link + "' target='_blank'><img src='" + simg + "' border='0' width='" + simg_w + "' height='" + simg_h + "'></a></div></div>";
        var Layer = document.getElementById("AdFloatLayerLeft_" + AdFloatLayerLeft.Loc);
        Layer.style.left = AdFloatLayerLeft.getSclLeft() + "px";
        Layer.style.top = (Math.floor((AdFloatLayerLeft.getdEcH() - simg_h) / 1.2) + (AdFloatLayerLeft.getSclTop())) + "px";
        Layer.style.width = simg_w + "px";
        Layer.style.height = simg_h + "px";
        Layer.innerHTML = H;
    };
    this.secondLayer = function () {
        bimg = AdMap[AdFloatLayerLeft.Loc][AdFloatLayerLeft.AdN]["C"]["bi"][0];
        bimg_w = AdMap[AdFloatLayerLeft.Loc][AdFloatLayerLeft.AdN]["C"]["bi"][1];
        bimg_h = AdMap[AdFloatLayerLeft.Loc][AdFloatLayerLeft.AdN]["C"]["bi"][2];
        link = AdMap[AdFloatLayerLeft.Loc][AdFloatLayerLeft.AdN]["C"]["l"][theChan];
        AdFloatLayerLeft.img.src = bimg;
        var H = "<div onmouseout=\"AdFloatLayerLeft.firstLayer()\">";
        if (bimg.indexOf("swf") == "-1") {
            H += "<div class=\"AdImg\" style=\"width:" + bimg_w + "px;height:" + bimg_h + "px\"><a href='" + link + "' target='_blank'><img src='" + bimg + "' border='0' width='" + bimg_w + "' height='" + bimg_h + "'></a></div>";
        } else {
            H += "<div style=\"cursor: pointer; background: url('http://" + NAdImgSrc + "/i/ebg.png') repeat scroll 0% 0% transparent; position: absolute; width: " + bimg_w + "px; height: " + bimg_h + "px; z-index: 1;\" onclick=\"window.open('" + link + "','" + N + "')\">&nbsp;</div>";
            H += "<object width=\"" + bimg_w + "\" height=\"" + bimg_h + "\">";
            H += "<param name=\"fgclick\" value=\"" + link + "\">";
            H += "<embed src=\"" + bimg + "\" width=\"" + bimg_w + "\" height=\"" + bimg_h + "\" wmode=\"opaque\"></embed>";
            H += "</object>";
        }
        H += "</div>";
        var Layer = document.getElementById("AdFloatLayerLeft_" + AdFloatLayerLeft.Loc);
        Layer.style.left = AdFloatLayerLeft.getSclLeft() + "px";
        Layer.style.top = (Math.floor((AdFloatLayerLeft.getdEcH() - bimg_h) / 1.2) + (AdFloatLayerLeft.getSclTop())) + "px";
        Layer.style.width = bimg_w + "px";
        Layer.style.height = bimg_h + "px";
        Layer.innerHTML = H;
    };
    this.start = function () {
        this.firstLayer();
        this.float();
        if (document.all) {
            window.attachEvent("onscroll", AdFloatLayerLeft.float);
            window.attachEvent("onresize", AdFloatLayerLeft.float);
        } else {
            window.addEventListener("scroll", AdFloatLayerLeft.float, false);
            window.addEventListener("onresize", AdFloatLayerLeft.float, false);
        }
    };
    this.float = function () {
        var Layer = document.getElementById("AdFloatLayerLeft_" + AdFloatLayerLeft.Loc);
        var tPsY = Math.floor((AdFloatLayerLeft.getdEcH() - AdFloatLayerLeft.img.height) / 1.2) + AdFloatLayerLeft.getSclTop();
        var tPsX = AdFloatLayerLeft.getSclLeft();
        Layer.style.top = tPsY + "px";
        Layer.style.left = tPsX + "px";
    };
}
Tpl_29.prototype = new abstract_Tpl();
function Tpl_30(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var img = AdMap[Loc][N]["C"]["i"][0];
        var img_w = AdMap[Loc][N]["C"]["i"][1];
        var img_h = AdMap[Loc][N]["C"]["i"][2];
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var H = "<div class=\"AdItem AdItem_" + Loc + "\" style=\"width:" + img_w + "px;height:" + img_h + "px;margin-left:auto;margin-right:auto;\">";
        H += "<object width=\"" + img_w + "\" height=\"" + img_h + "\">";
        H += "<param name=\"FlashVars\" value=\"fgclick=" + link + "\">";
        H += "<embed src=\"" + img + "\" width=\"" + img_w + "\" height=\"" + img_h + "\" wmode=\"opaque\" FlashVars=\"fgclick=" + link + "\"></embed>";
        H += "</object>";
        H += "</div>";
        return H;
    };
}
Tpl_30.prototype = new abstract_Tpl();
var AdMovieFloatLayer;
function Tpl_31(Loc) {
    AdMovieFloatLayer = this;
    this.getdEcH = function () {
        if (document.documentElement && document.documentElement.clientHeight && navigator.userAgent.search("MSIE") > -1) {
            return document.documentElement.clientHeight;
        } else if (document.body && document.body.clientHeight) {
            return document.body.clientHeight;
        } else {
            return 0;
        }
    };
    this.getdEcW = function () {
        if (document.documentElement && document.documentElement.clientWidth && navigator.userAgent.search("MSIE") > -1) {
            return document.documentElement.clientWidth;
        } else if (document.body && document.body.clientWidth) {
            return document.body.clientWidth;
        } else {
            return 0;
        }
    };
    this.getSclTop = function () {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    };
    this.getSclLeft = function () {
        return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    };
    this.img = new Image();
    this.Loc = Loc;
    this.header = function () {
        return "";
    }
    this.body = function (N) {
        this.AdN = N;
        var H = "<div id=\"AdMovieFloatLayer_" + this.Loc + "\" class=\"AdBlock\" style=\"position: absolute; top: 50px; Left:" + this.getdEcW() + "px; width:0px; height:0px;\"></div>";
        return H;
    };
    this.footer = function () {
        return "";
    };
    this.firstLayer = function () {
        var img = AdMap[AdMovieFloatLayer.Loc][AdMovieFloatLayer.AdN]["C"]["i"][0];
        var img_w = AdMap[AdMovieFloatLayer.Loc][AdMovieFloatLayer.AdN]["C"]["i"][1];
        var img_h = AdMap[AdMovieFloatLayer.Loc][AdMovieFloatLayer.AdN]["C"]["i"][2];
        var link = AdMap[AdMovieFloatLayer.Loc][AdMovieFloatLayer.AdN]["C"]["l"][theChan];
        var movieNum = AdMap[AdMovieFloatLayer.Loc][AdMovieFloatLayer.AdN]["C"]["mn"];
        var mType = AdMap[AdMovieFloatLayer.Loc][AdMovieFloatLayer.AdN]["C"]["tp"];
        switch (mType) {
            case"DF":
            case"OL":
            case"TP":
            default:
                var mSize_w = 640;
                var mSize_h = 360;
                break;
            case"CB":
                var mSize_w = 640;
                var mSize_h = 450;
                break;
            case"CB":
                var mSize_w = 760;
                var mSize_h = 360;
                break;
        }
        AdMovieFloatLayer.img.src = img;
        var H = "<div id=\"AdMovieFloatLayer_" + AdMovieFloatLayer.Loc + "\"><div class=\"AdImg\" style=\"width:" + img_w + "px;height:" + img_h + "px\"><a href='javascript:parent.creatLightbox(\"" + movieNum + "\",\"" + mType + "\"," + mSize_w + "," + mSize_h + ",\"http://ad-specs.guoshipartners.com/static/images/close.png\",\"onead.onevision.com.tw\",\"" + link + "\");' ><img src='" + img + "' border='0' width='" + img_w + "' height='" + img_h + "'></a></div></div>";
        var Layer = document.getElementById("AdMovieFloatLayer_" + AdMovieFloatLayer.Loc);
        Layer.style.left = ((AdMovieFloatLayer.getdEcW() - img_w) + AdMovieFloatLayer.getSclLeft()) + "px";
        Layer.style.top = (Math.floor((AdMovieFloatLayer.getdEcH() - img_h) / 1.2) + (AdMovieFloatLayer.getSclTop())) + "px";
        Layer.style.width = img_w + "px";
        Layer.style.height = img_h + "px";
        Layer.innerHTML = H;
    };
    this.start = function () {
        this.firstLayer();
        this.float();
        if (document.all) {
            window.attachEvent("onscroll", AdMovieFloatLayer.float);
            window.attachEvent("onresize", AdMovieFloatLayer.float);
        } else {
            window.addEventListener("scroll", AdMovieFloatLayer.float, false);
            window.addEventListener("onresize", AdMovieFloatLayer.float, false);
        }
    };
    this.float = function () {
        var Layer = document.getElementById("AdMovieFloatLayer_" + AdMovieFloatLayer.Loc);
        var tPsY = Math.floor((AdMovieFloatLayer.getdEcH() - AdMovieFloatLayer.img.height) / 1.2) + AdMovieFloatLayer.getSclTop();
        var tPsX = AdMovieFloatLayer.getdEcW() - AdMovieFloatLayer.img.width + AdMovieFloatLayer.getSclLeft();
        Layer.style.top = tPsY + "px";
        Layer.style.left = tPsX + "px";
    };
}
Tpl_31.prototype = new abstract_Tpl();
var Loc_110_Ad = new Array();
var Loc_111_Ad = new Array();
function Loc_110_DisplayControl(N, Loc, s1, s2, s3, s4, s5) {
    if (document.getElementById("Loc_110_Display") != null) {
        document.getElementById('Loc_110_Display').innerHTML = Loc_110_Ad[N];
    }
    document.getElementById("AdPie_" + Loc).innerHTML = "<table><tr><td><img src='http://chart.apis.google.com/chart?cht=p&chd=t:" + s5 + "," + s4 + "," + s3 + "," + s2 + "," + s1 + "&chs=100x100&chco=cdbae1|a791bd|87719d|4c3662|311b47'></td><td width='75'><table border='0' cellspacing='0' height='96' cellpadding='2' style='color:#4B4B4B;font-size:12px;'><tr><td><img src='http://i.fgi.tw/Beauty/Img/rc1.gif'></td><td>很好</td><td>" + s1 + "%</td></tr><tr><td><img src='http://i.fgi.tw/Beauty/Img/rc2.gif'></td><td>好</td><td>" + s2 + "%</td></tr><tr> <td><img src='http://i.fgi.tw/Beauty/Img/rc3.gif'></td><td>普通</td><td>" + s3 + "%</td></tr><tr><td><img src='http://i.fgi.tw/Beauty/Img/rc4.gif'></td><td>差</td><td>" + s4 + "%</td></tr><tr> <td><img src='http://i.fgi.tw/Beauty/Img/rc5.gif'></td><td>很差</td><td>" + s5 + "%</td></tr></table>";
}
function Loc_111_DisplayControl(N, Loc, s1, s2, s3, s4, s5) {
    if (document.getElementById("Loc_111_Display") != null) {
        document.getElementById('Loc_111_Display').innerHTML = Loc_111_Ad[N];
    }
    document.getElementById("AdPie_" + Loc).innerHTML = "<table><tr><td><img src='http://chart.apis.google.com/chart?cht=p&chd=t:" + s5 + "," + s4 + "," + s3 + "," + s2 + "," + s1 + "&chs=100x100&chco=87c7b1|B2C97E|Fdd876|F6AC69|F08D76'></td><td width='75'><table border='0' cellspacing='0' height='96' cellpadding='2' style='color:#4B4B4B;font-size:12px;'><tr><td><img src='http://i.fgi.tw/Beauty/Img/c1.gif'></td><td>很好</td><td>" + s1 + "%</td></tr><tr><td><img src='http://i.fgi.tw/Beauty/Img/c2.gif'></td><td>好</td><td>" + s2 + "%</td></tr><tr> <td><img src='http://i.fgi.tw/Beauty/Img/c3.gif'></td><td>普通</td><td>" + s3 + "%</td></tr><tr><td><img src='http://i.fgi.tw/Beauty/Img/c4.gif'></td><td>差</td><td>" + s4 + "%</td></tr><tr> <td><img src='http://i.fgi.tw/Beauty/Img/c5.gif'></td><td>很差</td><td>" + s5 + "%</td></tr></table>";
}
function Tpl_32(Loc) {
    this.Loc = Loc;
    this.header = function () {
        var h = "<div class=\"AdBlock AdBlock_" + Loc + "\">";
        return h;
    };
    this.footer = function () {
        var h = "</div>";
        return h;
    };
    this.body = function (N) {
        var s1 = AdMap[Loc][N]["C"]["i1p"];
        var s2 = AdMap[Loc][N]["C"]["i2p"];
        var s3 = AdMap[Loc][N]["C"]["i3p"];
        var s4 = AdMap[Loc][N]["C"]["i4p"];
        var s5 = AdMap[Loc][N]["C"]["i5p"];
        var img = AdMap[Loc][N]["C"]["i"];
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var H = "";
        var innerHtml = this.makeInnerHtml(N);
        if (typeof(eval(Loc + "_Ad")) != "undefined") {
            eval(Loc + "_Ad")[N] = innerHtml;
        }
        if ((document.location.href.substring(0, 11) == "http://adm3" || document.location.href.substring(0, 12) == "https://adm3") && document.location.href.indexOf("P-A-P") == -1) {
            H = "<div id=\"" + Loc + "_Display\">" + innerHtml + "</div>";
        }
        H += "<div class=\"AdItem AdItem_" + Loc + "\">";
        if (typeof(eval(Loc + "_DisplayControl")) != "undefined") {
            H += "<a href=\"" + link + "\" target=\"_blank\" onmouseover=\"" + Loc + "_DisplayControl(" + N + ",'" + Loc + "'," + s1 + "," + s2 + "," + s3 + "," + s4 + "," + s5 + ");\">";
        }
        H += "<img src=\"" + img + "\" width=\"60\" height=\"60\" border=\"0\" />";
        H += "</a>";
        H += "</div>";
        return H;
    };
    this.makeInnerHtml = function (N) {
        var tp = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["tp"]));
        var mgn = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["mgn"]));
        var mga = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["mga"]));
        var mgs = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["mgs"]));
        var mg = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["mg"]));
        var s1 = AdMap[Loc][N]["C"]["i1p"];
        var s2 = AdMap[Loc][N]["C"]["i2p"];
        var s3 = AdMap[Loc][N]["C"]["i3p"];
        var s4 = AdMap[Loc][N]["C"]["i4p"];
        var s5 = AdMap[Loc][N]["C"]["i5p"];
        var img = AdMap[Loc][N]["C"]["i"];
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var nc = AdMap[Loc][N]["C"]["nc"];
        var innerHtml = "";
        innerHtml += "<div class=\"AdTitle AdTitle_" + Loc + "\">";
        innerHtml += "<a href=\"" + link + "\" target=\"_blank\">" + tp + "</a>";
        innerHtml += "</div>";
        innerHtml += "<div class=\"AdHead AdHead_" + Loc + "\">";
        innerHtml += "<div style='float:left;margin-top:2px;'>";
        innerHtml += "<img border='0' width='15' height='17' src='http://" + NAdImgSrc + "/i/AdTpl_32_icon_1.gif'>";
        innerHtml += "</div>";
        innerHtml += "<div class='AdHeadT AdHeadT_" + Loc + "'>";
        innerHtml += "<span class=\"AdText AdText_" + Loc + "\">";
        innerHtml += "暱稱:" + mgn + "&nbsp;年齡:" + mga + "&nbsp;" + mgs + "</span><br>";
        innerHtml += "<span class=\"AdSText AdSText_" + Loc + "\">" + mg + "...more</span>";
        innerHtml += "</div>";
        innerHtml += "</div>";
        innerHtml += "<div class=\"AdFrameL AdFrameL_" + Loc + "\">";
        innerHtml += "<table><tr><td background=\"" + img + "\" height=\"144\" width=\"120\" valign=\"top\">";
        switch (nc) {
            case"1":
            case"2":
                innerHtml += "<img src=\"http://" + NAdImgSrc + "/i/AdTpl_28_icon_" + nc + ".gif\"/>";
                break
        }
        innerHtml += "</td></tr></table>";
        innerHtml += "</div>";
        innerHtml += "<div class=\"AdFrameR AdFrameR_" + Loc + "\">";
        innerHtml += "<div>";
        innerHtml += "<img border='0' vspace='3' src=\"http://" + NAdImgSrc + "/i/AdTpl_32_icon_2.gif\"/>";
        innerHtml += "</div>";
        innerHtml += "<div id=\"AdPie_" + Loc + "\">";
        innerHtml += "</div>";
        innerHtml += "</div>";
        innerHtml += "</div>";
        innerHtml += "<div style=\"clear:both\"></div>";
        return innerHtml;
    };
    this.showDisplay = function (N) {
        var s1 = AdMap[Loc][N]["C"]["i1p"];
        var s2 = AdMap[Loc][N]["C"]["i2p"];
        var s3 = AdMap[Loc][N]["C"]["i3p"];
        var s4 = AdMap[Loc][N]["C"]["i4p"];
        var s5 = AdMap[Loc][N]["C"]["i5p"];
        eval(Loc + "_DisplayControl(" + N + ",'" + Loc + "'," + s1 + "," + s2 + "," + s3 + "," + s4 + "," + s5 + ")");
    };
}
Tpl_32.prototype = new abstract_Tpl();
function Tpl_33(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var img = AdMap[Loc][N]["C"]["i"][0];
        var img_w = AdMap[Loc][N]["C"]["i"][1];
        var img_h = AdMap[Loc][N]["C"]["i"][2];
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var ptext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["pt"]));
        var stext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["st"]));
        var H = "<div class=\"AdItem AdItem_" + Loc + "\">";
        H += "<div style=\"width: 175px;height:35px;\">";
        H += "<div class=\"AdTitle AdTitle_" + Loc + "\"><a href='" + link + "' target='_blank'>" + ptext + "</a></div>";
        H += "<div class=\"AdText AdText_" + Loc + "\">" + stext + "</div>";
        H += "</div>";
        if (img.indexOf("swf") == "-1") {
            H += "<div class=\"AdImg\"><a href='" + link + "' target='_blank'><img src='" + img + "' border='0' width='" + img_w + "' height='" + img_h + "'></a></div>";
        } else {
            H += "<div style=\"margin-left:auto;margin-right:auto;\">";
            H += "<div style=\"cursor: pointer; background: url('http://" + NAdImgSrc + "/i/ebg.png') repeat scroll 0% 0% transparent; position: absolute; width: " + img_w + "px; height: " + img_h + "px; z-index: 1;\" onclick=\"window.open('" + link + "','" + N + "')\">&nbsp;</div>";
            H += "<object width=\"" + img_w + "\" height=\"" + img_h + "\">";
            H += "<param name=\"fgclick\" value=\"" + link + "\">";
            H += "<embed src=\"" + img + "\" width=\"" + img_w + "\" height=\"" + img_h + "\" wmode=\"opaque\"></embed>";
            H += "</object>";
            H += "</div>";
        }
        H += "</div>";
        return H;
    };
}
Tpl_33.prototype = new abstract_Tpl();
function Tpl_34(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var text = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["t"]));
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var H = "";
        H += "<span class=\"AdItem AdItem_" + Loc + "\">";
        H += "<span class=\"AdText AdText_" + Loc + "\">‧<a href='" + link + "' target='_blank'>" + text + "</a></span>";
        H += "</span>";
        return H;
    };
}
Tpl_34.prototype = new abstract_Tpl();
function Tpl_35(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var img = AdMap[Loc][N]["C"]["i"];
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var ptext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["pt"]));
        var dtext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["dt"]));
        var H = "<div class=\"AdItem AdItem_" + Loc + "\">";
        H += "<div style=\"width: 175px;height:35px;\">";
        H += "<div class=\"AdTitle AdTitle_" + Loc + "\"><a href='" + link + "' target='_blank'>" + ptext + "</a></div>";
        H += "<div class=\"AdText AdText_" + Loc + "\">" + dtext + "</div>";
        H += "</div>";
        H += "<div class=\"AdImg\"><a href='" + link + "' target='_blank'><img src='" + img + "' border='0'></a></div>";
        H += "</div>";
        return H;
    };
}
Tpl_35.prototype = new abstract_Tpl();
function Tpl_36(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var img = AdMap[Loc][N]["C"]["i"][0];
        var img_w = AdMap[Loc][N]["C"]["i"][1];
        var img_h = AdMap[Loc][N]["C"]["i"][2];
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var ptext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["tp"]));
        var stext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["co"]));
        switch (Loc) {
            case"Loc_117":
                if (ptext.length > 10) {
                    ptext = ptext.substring(0, 10) + "...";
                }
                if (stext.length > 40) {
                    stext = stext.substring(0, 40) + "...";
                }
                break;
            case"Loc_122":
                if (ptext.length > 30) {
                    ptext = ptext.substring(0, 30) + "...";
                }
                if (stext.length > 190) {
                    stext = stext.substring(0, 190) + "...";
                }
                break;
        }
        var H = "<div class=\"AdItem AdItem_" + Loc + "\">";
        H += "<div class=\"AdImg AdImg_" + Loc + "\"><a href='" + link + "' target='_blank'><img src='" + img + "' border='0'></a></div>";
        H += "<div class=\"AdTitle AdTitle_" + Loc + "\"><a href='" + link + "' target='_blank'>" + ptext + "</a></div>";
        H += "<div class=\"AdText AdText_" + Loc + "\">" + stext + "</div>";
        H += "</div>";
        return H;
    };
}
Tpl_36.prototype = new abstract_Tpl();
function Tpl_37(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var img = AdMap[Loc][N]["C"]["i"][0];
        var img_w = AdMap[Loc][N]["C"]["i"][1];
        var img_h = AdMap[Loc][N]["C"]["i"][2];
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var ptext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["tp"]));
        if (ptext.length > 10) {
            ptext = ptext.substring(0, 10) + "...";
        }
        var H = "<div class=\"AdItem AdItem_" + Loc + "\">";
        H += "<div class=\"AdImg AdImg_" + Loc + "\"\"><a href='" + link + "' target='_blank'><img src='" + img + "' border='0'></a></div>";
        H += "<div class=\"AdTitle AdTitle_" + Loc + "\"><a href='" + link + "' target='_blank'>" + ptext + "</a></div>";
        H += "</div>";
        return H;
    };
}
Tpl_37.prototype = new abstract_Tpl();
function Tpl_38(Loc) {
    this.Loc = Loc;
    this.header = function () {
        return "<div class=\"AdBlock AdBlock_" + this.Loc + "\"><div class=\"AdHeader_" + this.Loc + "\">商品好感度排行</div>"
    };
    this.footer = function () {
        return "<div align=\"right\" style=\"margin-right:5px;font-size:15px;\"><a href=\"http://buy.fashionguide.com.tw/index.php/rank/amount?from=right\">more</a></div></div>"
    };
    this.body = function (N) {
        var gd = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["gd"]));
        var gdn = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["gdn"]));
        var gdi = decodeURIComponent(AdMap[Loc][N]["C"]["gdi"]);
        var link = AdMap[Loc][N]["C"]["gdl"][theChan];
        var am = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["am"]));
        var H = "<div class=\"AdItem AdItem_" + Loc + "\">";
        H += "<div class=\"AdFrameL AdFrameL_" + Loc + "\"><div class=\"AdImg AdImg_" + Loc + "\" ><a href='" + link + "' target='_blank'><img width=\"80\" height=\"80\" src='" + gdi + "' border='0'></a></div></div>";
        H += "<div class=\"AdFrameR AdFrameR_" + Loc + "\">";
        H += "<div class=\"AdTitle AdTitle_" + Loc + "\"><a href='" + link + "' target='_blank'>" + gdn + "</a></div>";
        H += "<div><img src=\"http://i.fgi.tw/Img/heart_03.gif\" style=\"vertical-align:middle\"/><span class=\"AdText AdText_" + Loc + "\">" + am + "人喜歡</span></div>";
        H += "</div>";
        H += "<div class=\"AdFrameC AdFrameC_" + Loc + "\"></div>";
        H += "</div>";
        return H;
    };
}
Tpl_38.prototype = new abstract_Tpl();
function Tpl_39(Loc) {
    this.Loc = Loc;
    this.header = function () {
        return "<div class=\"AdBlock AdBlock_" + this.Loc + "\"><div class=\"AdHeader_" + this.Loc + "\">購物情報熱賣推薦</div>"
    };
    this.body = function (N) {
        var img = AdMap[Loc][N]["C"]["i"][0];
        var img_w = AdMap[Loc][N]["C"]["i"][1];
        var img_h = AdMap[Loc][N]["C"]["i"][2];
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var ptext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["pt"]));
        var H = "<div class=\"AdItem AdItem_" + Loc + "\">";
        if (img.indexOf("swf") == "-1") {
            H += "<div class=\"AdFrameL AdFrameL_" + Loc + "\"><div class=\"AdImg AdImg_" + Loc + "\" style=\"width:" + img_w + "px;height:" + img_h + "px\"><a href='" + link + "' target='_blank'><img src='" + img + "' border='0' width='" + img_w + "' height='" + img_h + "'></a></div></div>";
        } else {
            H += "<div class=\"AdFrameL AdFrameL_" + Loc + "\" style=\"width:" + img_w + "px;height:" + img_h + "px;margin-left:auto;margin-right:auto;\">";
            H += "<div style=\"cursor: pointer; background: url('http://" + NAdImgSrc + "/i/ebg.png') repeat scroll 0% 0% transparent; position: absolute; width: " + img_w + "px; height: " + img_h + "px; z-index: 1;\" onclick=\"window.open('" + link + "','" + N + "')\">&nbsp;</div>";
            H += "<object width=\"" + img_w + "\" height=\"" + img_h + "\">";
            H += "<param name=\"fgclick\" value=\"" + link + "\">";
            H += "<embed src=\"" + img + "\" width=\"" + img_w + "\" height=\"" + img_h + "\" wmode=\"opaque\"></embed>";
            H += "</object>";
            H += "</div>";
        }
        H += "<div class=\"AdFrameR AdFrameR_" + Loc + "\">";
        H += "<div class=\"AdTitle AdTitle_" + Loc + "\"><a href='" + link + "' target='_blank'>" + ptext + "</a></div>";
        H += "</div>";
        H += "<div class=\"AdFrameC AdFrameC_" + Loc + "\"\"></div>";
        H += "</div>";
        return H;
    };
}
Tpl_39.prototype = new abstract_Tpl();
function Tpl_40(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var bimg = AdMap[Loc][N]["C"]["bi"];
        var simg = AdMap[Loc][N]["C"]["si"];
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var ptext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["pt"]));
        var stext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["st"]));
        var H = "<div class=\"AdItem AdItem_" + Loc + "\">";
        H += "<div style=\"background-image: url(http://ad3.fashionguide.com.tw/i/AdTpl_40_icon_3.gif); background-position: center 5px; background-repeat: no-repeat; width:175; height: 35px;\"></div>";
        if (bimg.indexOf("swf") == "-1") {
            H += "<div class=\"AdFrameT AdFrameT_" + Loc + "\"><a href=\"" + link + "\" target=\"_blank\"><img src=\"" + bimg + "\" width=\"174\" /></a></div>";
        } else {
            H += "<div class=\"AdFrameT AdFrameT_" + Loc + "\" style=\"width:174px;height:126px;margin-left:auto;margin-right:auto;\">";
            H += "<div style=\"cursor: pointer; background: url('http://" + NAdImgSrc + "/i/ebg.png') repeat scroll 0% 0% transparent; position: absolute; width: 174px;  z-index: 1;\" onclick=\"window.open('" + link + "','" + N + "')\">&nbsp;</div>";
            H += "<object width=\"174\" >";
            H += "<param name=\"fgclick\" value=\"" + link + "\">";
            H += "<embed src=\"" + bimg + "\" width=\"174\" wmode=\"opaque\"></embed>";
            H += "</object>";
            H += "</div>";
        }
        H += "<div style='width: 174px; background-color: #FFFFFF; float:left; padding:2px; color: #696969; font-size: 12px; line-height: 16px; position: relative; font-family: Arial, \"新細明體\", \"微軟正黑體\";'>";
        H += "<div class=\"AdFrameL AdFrameL_" + Loc + "\"><img src=\"" + simg + "\" width=\"40\" height=\"40\" /></div>";
        H += "<div class=\"AdFrameR AdFrameR_" + Loc + "\">";
        H += "<div class=\"AdTitle AdTitle_" + Loc + "\"><a href=\"" + link + "\" target=\"_blank\">" + ptext + "</a></div>";
        H += "<div class=\"AdText AdText_" + Loc + "\">" + stext + "</div>";
        H += "</div>";
        H += "</div>";
        return H;
    };
}
Tpl_40.prototype = new abstract_Tpl();
function Tpl_41(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var bimg = AdMap[Loc][N]["C"]["bi"][0];
        var simg = AdMap[Loc][N]["C"]["si"][0];
        var bw = AdMap[Loc][N]["C"]["bi"][1];
        var bh = AdMap[Loc][N]["C"]["bi"][2];
        var sw = AdMap[Loc][N]["C"]["si"][1];
        var sh = AdMap[Loc][N]["C"]["si"][2];
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var ptext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["pt"]));
        var stext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["st"]));
        var H = "<div class=\"AdItem AdItem_" + Loc + "\">";
        H += "<div style=\"background-image: url(http://ad3.fashionguide.com.tw/i/AdTpl_40_icon_3.gif); background-position: center 5px; background-repeat: no-repeat; width:175; height: 35px;\"></div>";
        if (bimg.indexOf("swf") == "-1") {
            H += "<div class=\"AdFrameT AdFrameT_" + Loc + "\"><a href=\"" + link + "\" target=\"_blank\"><img src=\"" + bimg + "\" width=\"" + bw + "\" height=\"" + bh + "\"  /></a></div>";
        } else {
            H += "<div class=\"AdFrameT AdFrameT_" + Loc + "\" style=\"width:174px;height:126px;margin-left:auto;margin-right:auto;\">";
            H += "<div style=\"cursor: pointer; background: url('http://" + NAdImgSrc + "/i/ebg.png') repeat scroll 0% 0% transparent; position: absolute; width:" + bw + "px; height:" + bh + ";  z-index: 1;\" onclick=\"window.open('" + link + "','" + N + "')\">&nbsp;</div>";
            H += "<object width=\"" + bw + "\" height=\"" + bh + "\" >";
            H += "<param name=\"fgclick\" value=\"" + link + "\">";
            H += "<embed src=\"" + bimg + "\" width=\"" + bw + "\" height=\"" + bh + "\" wmode=\"opaque\"></embed>";
            H += "</object>";
            H += "</div>";
        }
        H += "<div style='width: 174px; background-color: #FFFFFF; float:left; padding:2px; color: #696969; font-size: 12px; line-height: 16px; position: relative; font-family: Arial, \"新細明體\", \"微軟正黑體\";'>";
        H += "<div class=\"AdFrameL AdFrameL_" + Loc + "\"><img src=\"" + simg + "\" width=\"" + sw + "\" height=\"" + sh + "\" /></div>";
        H += "<div class=\"AdFrameR AdFrameR_" + Loc + "\">";
        H += "<div class=\"AdTitle AdTitle_" + Loc + "\"><a href=\"" + link + "\" target=\"_blank\">" + ptext + "</a></div>";
        H += "<div class=\"AdText AdText_" + Loc + "\">" + stext + "</div>";
        H += "</div>";
        H += "</div>";
        return H;
    };
}
Tpl_41.prototype = new abstract_Tpl();
function Tpl_42(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var img = AdMap[Loc][N]["C"]["i"][0];
        var img_w = AdMap[Loc][N]["C"]["i"][1];
        var img_h = AdMap[Loc][N]["C"]["i"][2];
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var ptext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["tp"]));
        var stext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["co"]));
        switch (Loc) {
            case"Loc_124":
                if (ptext.length > 8) {
                    ptext = ptext.substring(0, 8) + "...";
                }
                if (stext.length > 18) {
                    stext = stext.substring(0, 18) + "...";
                }
                break;
            case"Loc_125":
                if (ptext.length > 8) {
                    ptext = ptext.substring(0, 8) + "...";
                }
                if (stext.length > 18) {
                    stext = stext.substring(0, 18) + "...";
                }
                break;
            case"Loc_127":
                if (ptext.length > 8) {
                    ptext = ptext.substring(0, 8) + "...";
                }
                if (stext.length > 18) {
                    stext = stext.substring(0, 18) + "...";
                }
                break;
            case"Loc_128":
                if (ptext.length > 8) {
                    ptext = ptext.substring(0, 8) + "...";
                }
                if (stext.length > 18) {
                    stext = stext.substring(0, 18) + "...";
                }
                break;
        }
        var H = "<div class=\"AdItem AdItem_" + Loc + "\">";
        H += "<div class=\"AdFrameL AdFrameL_" + Loc + "\">";
        H += "<div class='AdImg' >";
        H += "<a target='_blank' href='" + link + "'>";
        H += "<img border='0' src='" + img + "'>";
        H += "</a>";
        H += "</div>";
        H += "</div>";
        H += "<div class=\"AdFrameR AdFrameR_" + Loc + "\">";
        H += "<div class=\"AdTitle AdTitle_" + Loc + "\">";
        H += "<a target='_blank' href='" + link + "'>" + ptext + "</a>";
        H += "</div>";
        H += "<div class=\"AdText AdText_" + Loc + "\">";
        H += "<a target='_blank' href='" + link + "'>" + stext + "</a>";
        H += "</div>";
        H += "</div>";
        H += "<div class=\"AdFrameC AdFrameC_" + Loc + "\"></div>";
        H += "</div>";
        return H;
    };
}
Tpl_42.prototype = new abstract_Tpl();
function Tpl_43(Loc) {
    this.Loc = Loc;
    this.header = function () {
        return "";
    }
    this.footer = function () {
        return "";
    }
    this.body = function (N) {
        var topic = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["tp"]));
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var pdate = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["pd"]));
        link = link.replace('http%3A%2F%2Fforum.fashionguide.com.tw%2Fpost_list.php', 'http%3A%2F%2Ffit.fashionguide.com.tw%2Findex.php%2Fforum%2Fpost_list');
        var H = "";
        H += "<div class=\"ad_hottopic\">";
        H += "<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" height=\"40\">";
        H += "<tbody><tr>";
        H += "<td width=\"25\"><img src=\"http://ad3.fashionguide.com.tw/i/AdTpl_144_icon.gif\"></td>";
        H += "<td width=\"410\"><a href=\"" + link + "\">" + topic + "</a></td>";
        H += "<td align=\"center\">" + pdate + "</td>";
        H += "</tr>";
        H += "</tbody></table>";
        H += "</div>";
        return H;
    };
}
Tpl_43.prototype = new abstract_Tpl();
function Tpl_44(Loc) {
    this.Loc = Loc;
    this.header = function () {
        var h = "<div class=\"AdHeader AdHeader_" + this.Loc + "\"></div>";
        h += "<div class=\"AdBlock AdBlock_" + this.Loc + "\">";
        return h;
    };
    this.body = function (N) {
        var tp = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["tp"]));
        var ths = AdMap[Loc][N]["C"]["ths"];
        var nc = AdMap[Loc][N]["C"]["nc"];
        var img = AdMap[Loc][N]["C"]["i"];
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var ct = AdMap[Loc][N]["C"]["ct"];
        var H = ""
        H += "<div class=\"AdItem AdItem_" + Loc + "\">";
        H += "<div style=\"width:50%;float:left;\" class=\"AdImg AdImg_" + Loc + "\"><table width=\"80\" height=\"80\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"position:relative;\"><tr><td><div style=\"position:absolute; width:39px; height:39px; z-index:1; left: 0px; top: 0px;\"><img src=\"" + nc + "\" width=\"35\" height=\"36\" /></div><img src=\"" + img + "\" width=\"80\" height=\"80\" /></td></tr></table></div>"
        H += "<div style=\"width:50%;float:right;\" class=\"AdTitle AdTitle_" + Loc + "\"><a href=\"" + link + "\" target=\"_blank\">" + tp + "</a></div>";
        H += "<div style=\"clear:both\"></div>";
        for (var i = 0; i < ths.length; i++) {
            var intro = this.plustonbsp(decodeURIComponent(ths[i]["in"]));
            var star = ths[i]["st"];
            H += "<div style=\"margin-top:5px;\">";
            H += "<span style=\"display:-moz-inline-box; display:inline-block; width:59%;\" class=\"AdText AdText_" + Loc + "\"><a href=\"" + link + "\" target=\"_blank\">" + intro + "</a></span>";
            H += "<span style=\"display:-moz-inline-box; display:inline-block; width:39%;vertical-align:middle;\"><img src=\"" + star + "\" border=\"0\"></span>";
            H += "</div>";
        }
        H += "<div style=\"text-align:center;margin-top:5px;\" class=\"AdSText AdSText_" + Loc + "\"><a href=\"http://www.fashionguide.com.tw/BresL/1.html\" target=\"_blank\">更多的市調大隊商品</a></div>";
        H += "<div style=\"clear:both\"></div>";
        H += "</div>";
        return H;
    };
}
Tpl_44.prototype = new abstract_Tpl();
function Tpl_45(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var text = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["t"]));
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var d = new Date();
        d.setHours(d.getHours() - 2);
        var H = "";
        H += "<div class=\"ad_hottopic\">";
        H += "<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" height=\"40\">";
        H += "<tbody><tr>";
        H += "<td width=\"25\"><img src=\"http://ad3.fashionguide.com.tw/i/AdTpl_144_icon.gif\"></td>";
        H += "<td width=\"410\"><a href=\"" + link + "\">" + text + "</a></td>";
        H += "<td align=\"center\">" + d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + "</td>";
        H += "</tr>";
        H += "</tbody></table>";
        H += "</div>";
        return H;
    };
}
Tpl_45.prototype = new abstract_Tpl();
function Tpl_46(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var img = AdMap[Loc][N]["C"]["i"][0];
        var img_w = AdMap[Loc][N]["C"]["i"][1];
        var img_h = AdMap[Loc][N]["C"]["i"][2];
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var text = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["t"]));
        var H = "<ul class=\"Ad_" + Loc + "_sub_img\">";
        H += "<li>";
        H += "<a href=\"" + link + "\" target=\"_blank\"><img src=\"" + img + "\"></img></a><span class=\"gray\"></span><p class=\"Ad_" + Loc + "_ellipsis\"><a href=\"" + link + "\" target=\"_blank\">" + text + "</a></p>";
        H += "</li>";
        H += "</ul>";
        return H;
    };
}
Tpl_46.prototype = new abstract_Tpl();
function Tpl_47(Loc) {
    this.Loc = Loc;
    this.header = function () {
        return "";
    }
    this.footer = function () {
        return "";
    }
    this.body = function (N) {
        var topic = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["t"]));
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var H = "";
        H += "<span class=\"AdText AdText_" + Loc + "\"><a href='" + link + "' target='_blank'>" + topic + "</a></span>";
        ;
        return H;
    };
}
Tpl_47.prototype = new abstract_Tpl();
function Tpl_48(Loc) {
    this.Loc = Loc;
    this.header = function () {
        return "";
    }
    this.footer = function () {
        return "";
    }
    this.body = function (N) {
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var H = "";
        H += "<span class=\"AdText AdText_" + Loc + "\"><a href='" + link + "' target='_blank'>adText</a></span>";
        ;
        return H;
    };
}
Tpl_48.prototype = new abstract_Tpl();
function Tpl_49(Loc) {
    this.Loc = Loc;
    this.header = function () {
        return "";
    }
    this.footer = function () {
        return "";
    }
    this.body = function (N) {
        var topic = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["t"]));
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var H = "";
        H += "<tr valign=\"top\" bgcolor=\"#FFFFFF\" align=\"center\">";
        H += "<td width=\"15\"><img src=\"http://i.fgi.tw/Forum/Img/Mark1.gif\" border=\"0\"></td>";
        H += "<td align=\"left\" class=\"AdText AdText_" + Loc + "\"><a href='" + link + "' target='_blank'>" + topic + "</a></td>";
        H += "<td ></td>";
        H += "<td ></td>";
        H += "</tr>";
        return H;
    };
}
Tpl_49.prototype = new abstract_Tpl();
function Tpl_50(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var t1img = AdMap[Loc][N]["C"]["t1i"][0];
        var t2img = AdMap[Loc][N]["C"]["t2i"][0];
        var t3img = AdMap[Loc][N]["C"]["t3i"][0];
        var t4img = AdMap[Loc][N]["C"]["t4i"][0];
        var t1text = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["t1t"]));
        var t2text = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["t2t"]));
        var t3text = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["t3t"]));
        var t4text = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["t4t"]));
        var t1link = AdMap[Loc][N]["C"]["t1l"][theChan];
        var t2link = AdMap[Loc][N]["C"]["t2l"][theChan];
        var t3link = AdMap[Loc][N]["C"]["t3l"][theChan];
        var t4link = AdMap[Loc][N]["C"]["t4l"][theChan];
        var t1img_w = AdMap[Loc][N]["C"]["t1i"][1];
        var t1img_h = AdMap[Loc][N]["C"]["t1i"][2];
        var t2img_w = AdMap[Loc][N]["C"]["t2i"][1];
        var t2img_h = AdMap[Loc][N]["C"]["t2i"][2];
        var t3img_w = AdMap[Loc][N]["C"]["t3i"][1];
        var t3img_h = AdMap[Loc][N]["C"]["t3i"][2];
        var t4img_w = AdMap[Loc][N]["C"]["t4i"][1];
        var t4img_h = AdMap[Loc][N]["C"]["t4i"][2];
        var ptext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["pt"]));
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var H = "<ul class=\"relate-product\">";
        H += "<li><a href=\"" + t1link + "\" target=\"_blank\"><img src=\"" + t1img + "\"><span class=\"ellipsis\">" + t1text + "</span></a></li>";
        H += "<li><a href=\"" + t2link + "\" target=\"_blank\"><img src=\"" + t2img + "\"><span class=\"ellipsis\">" + t2text + "</span></a></li>";
        H += "<li><a href=\"" + t3link + "\" target=\"_blank\"><img src=\"" + t3img + "\"><span class=\"ellipsis\">" + t3text + "</span></a></li>";
        H += "<li><a href=\"" + t4link + "\" target=\"_blank\"><img src=\"" + t4img + "\"><span class=\"ellipsis\">" + t4text + "</span></a></li>";
        H += "</ul>";
        H += "<p class=\"tip\"><a href=\"" + link + "\" target=\"_blank\">TIPS:" + ptext + "</a></p>;"
        return H;
    };
}
Tpl_50.prototype = new abstract_Tpl();
function Tpl_51(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var img = AdMap[Loc][N]["C"]["i"][0];
        var img_w = AdMap[Loc][N]["C"]["i"][1];
        var img_h = AdMap[Loc][N]["C"]["i"][2];
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var ptext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["pt"]));
        var stext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["st"]));
        var t1text = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["t1t"]));
        var t2text = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["t2t"]));
        var t1link = AdMap[Loc][N]["C"]["t1l"][theChan];
        var t2link = AdMap[Loc][N]["C"]["t2l"][theChan];
        var H = "<div class=\"groupbox\">";
        H += "<div class=\"groupbox01\">";
        H += "<div class=\"groupbox01_pic\"><img src=\"" + img + "\" width=\"" + img_w + "\" height=\"" + img_h + "\" /></div>";
        H += "<h1><a href=\"" + link + "\" target=\"_blank\">" + ptext + "</a></h1>";
        H += "<p class=\"word\"><a href=\"" + link + "\" target=\"_blank\">" + stext + "</a></p>";
        H += "</div>";
        H += "<div class=\"groupbox02\">";
        H += "<ul>";
        H += "<li><a href=\"" + t1link + "\" target=\"_blank\">" + t1text + "</a></li>";
        H += "<li><a href=\"" + t2link + "\" target=\"_blank\">" + t2text + "</a></li>";
        H += "</ul>";
        H += "</div>";
        H += "</div>";
        return H;
    };
}
Tpl_51.prototype = new abstract_Tpl();
function Tpl_52(Loc) {
    this.Loc = Loc;
    this.body = function (N) {
        var img = AdMap[Loc][N]["C"]["i"][0];
        var img_w = AdMap[Loc][N]["C"]["i"][1];
        var img_h = AdMap[Loc][N]["C"]["i"][2];
        var link = AdMap[Loc][N]["C"]["l"][theChan];
        var ptext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["pt"]));
        var stext = this.plustonbsp(decodeURIComponent(AdMap[Loc][N]["C"]["st"]));
        var H = "<div class=\"travel_ad\">";
        H += "<a href=\"" + link + "\" target=\"_blank\">";
        H += "<img src=\"" + img + "\" width=\"" + img_w + "\" height=\"" + img_h + "\" border=\"0\" style=\"background-color: #666666\">";
        H += "</a>";
        H += "<p style=\"text-decoration:none;\">" + ptext + "...</p>";
        H += "<div class=\"price\">" + stext + "<span class=\"up\">起</span>";
        H += "</div>";
        H += "<div class=\"more\"><a href=\"" + link + "\" target=\"_blank\">更多詳情></a></div>";
        H += "</div>";
        return H;
    };
}
Tpl_52.prototype = new abstract_Tpl();
var AdFrenchWindow;
function Tpl_54(Loc) {
    AdFrenchWindow = this;
    this.Loc = Loc;
    this.showLimit = 1;
    this.isOpen = false;
    this.header = function () {
        return "";
    };
    this.foooter = function () {
        return "";
    };
    this.body = function (N) {
        this.AdN = N;
        var link = AdMap[this.Loc][this.AdN]["C"]["l"][theChan];
        var H = "<div id=\"AdFrenchWindowBlock_" + this.Loc + "\" class=\"AdBlock AdBlock_" + Loc + "\" style=\"width:1150px; height:0px;\">";
        H += "<div id=\"AdFrenchWindowBorder_" + this.Loc + "\" style=\"position: relative; top: 0px; left: 0px; width:0px;margin-left:auto;margin-right:auto;\">";
        H += "<div id=\"AdFrenchWindowContent_" + this.Loc + "\" class=\"AdItem AdItem_" + this.Loc + "\" style=\"position: absolute; top:0px; left:0px; z-index:0;\"></div>";
        H += "<div id=\"AdFrenchWindowLink\" style=\"position:absolute; top:0px; left:0px; z-index :1 ; background-image: url('http://" + NAdImgSrc + "/i/ebg.png'); cursor: pointer; \" onclick=\"window.open('" + link + "','" + N + "')\"></div>";
        H += "<div style=\"position:absolute; right: 5px; top: 5px; width: 30px; height: 16px; z-index: 2; filter:alpha(opacity=70);-moz-opacity:0.8;opacity: 0.8;\">";
        H += "<img id=\"AdFrenchWindowSwitch\" src=\"http://" + NAdImgSrc + "/i/open.png\" border=\"0\" onclick=\"AdFrenchWindow.switcher()\"/>";
        H += "</div>";
        H += "</div>";
        H += "</div>";
        return H;
    };
    this.start = function () {
        if (this.isFirst() == true) {
            this.secondLayer();
            setTimeout("AdFrenchWindow.firstLayer();", 7000);
        } else {
            this.firstLayer();
        }
    };
    this.switcher = function () {
        if (AdFrenchWindow.isOpen == true) {
            AdFrenchWindow.firstLayer();
        } else {
            AdFrenchWindow.secondLayer();
        }
    };
    this.firstLayer = function () {
        this.isOpen = false;
        var simg = AdMap[AdFrenchWindow.Loc][AdFrenchWindow.AdN]["C"]["si"][0];
        var simg_w = AdMap[AdFrenchWindow.Loc][AdFrenchWindow.AdN]["C"]["si"][1];
        var simg_h = AdMap[AdFrenchWindow.Loc][AdFrenchWindow.AdN]["C"]["si"][2];
        if (typeof AdMap[Loc][N]["C"]["ibsi"] != 'undefined') {
            var ibsi_simg = AdMap[Loc][N]["C"]["ibsi"][0];
            var ibsi_simg_w = AdMap[Loc][N]["C"]["ibsi"][1];
            var ibsi_simg_h = AdMap[Loc][N]["C"]["ibsi"][2];
        }
        var link = AdMap[AdFrenchWindow.Loc][AdFrenchWindow.AdN]["C"]["l"][theChan];
        var H = "";
        if (simg.indexOf("swf") == "-1") {
            H += "<a href='" + link + "' target='_blank'><div class=\"AdImg\" style=\"width:" + simg_w + "px;height:" + simg_h + "px\"><img src='" + simg + "' border='0' width='" + simg_w + "' height='" + simg_h + "'/></div></a>";
        } else {
            if (isFlashSupported() || typeof AdMap[Loc][N]["C"]["ibsi"] == 'undefined') {
                H += "<object width=\"" + simg_w + "\" height=\"" + simg_h + "\">";
                H += "<param name=\"fgclick\" value=\"" + link + "\">";
                H += "<param name=\"wmode\" value=\"opaque\">";
                H += "<embed src=\"" + simg + "\" width=\"" + simg_w + "\" height=\"" + simg_h + "\" wmode=\"opaque\"></embed>";
                H += "</object>";
            } else {
                H += "<a href='" + link + "' target='_blank'><div class=\"AdImg\" style=\"width:" + ibsi_simg_w + "px;height:" + ibsi_simg_h + "px\"><img src='" + ibsi_simg + "' border='0' width='" + ibsi_simg_w + "' height='" + ibsi_simg_h + "'/></div></a>";
            }
        }
        document.getElementById("AdFrenchWindowBorder_" + AdFrenchWindow.Loc).style.width = simg_w + "px";
        document.getElementById("AdFrenchWindowBlock_" + AdFrenchWindow.Loc).style.height = simg_h + "px";
        document.getElementById("AdFrenchWindowLink").style.width = simg_w + "px";
        document.getElementById("AdFrenchWindowLink").style.height = simg_h + "px";
        document.getElementById("AdFrenchWindowContent_" + AdFrenchWindow.Loc).innerHTML = H;
        document.getElementById("AdFrenchWindowSwitch").src = "http://" + NAdImgSrc + "/i/open.png";
    };
    this.secondLayer = function () {
        this.isOpen = true;
        var bimg = AdMap[AdFrenchWindow.Loc][AdFrenchWindow.AdN]["C"]["bi"][0];
        var bimg_w = AdMap[AdFrenchWindow.Loc][AdFrenchWindow.AdN]["C"]["bi"][1];
        var bimg_h = AdMap[AdFrenchWindow.Loc][AdFrenchWindow.AdN]["C"]["bi"][2];
        if (typeof AdMap[Loc][N]["C"]["ibbi"] != 'undefined') {
            var ibbi_bimg = AdMap[Loc][N]["C"]["ibbi"][0];
            var ibbi_bimg_w = AdMap[Loc][N]["C"]["ibbi"][1];
            var ibbi_bimg_h = AdMap[Loc][N]["C"]["ibbi"][2];
        }
        var link = AdMap[AdFrenchWindow.Loc][AdFrenchWindow.AdN]["C"]["l"][theChan];
        var H = "";
        if (bimg.indexOf("swf") == "-1") {
            H += "<a href='" + link + "' target='_blank'><div class=\"AdImg\" style=\"width:" + bimg_w + "px;height:" + bimg_h + "px\"><img src='" + bimg + "' border='0' width='" + bimg_w + "' height='" + bimg_h + "'/></div></a>";
        } else {
            if (isFlashSupported() || typeof AdMap[Loc][N]["C"]["ibsi"] == 'undefined') {
                H += "<object width=\"" + bimg_w + "\" height=\"" + bimg_h + "\">";
                H += "<param name=\"link\" value=\"" + link + "\">";
                H += "<param name=\"wmode\" value=\"opaque\">";
                H += "<embed src=\"" + bimg + "\" width=\"" + bimg_w + "\" height=\"" + bimg_h + "\" wmode=\"opaque\"></embed>";
                H += "</object>";
            } else {
                H += "<a href='" + link + "' target='_blank'><div class=\"AdImg\" style=\"width:" + ibbi_bimg_w + "px;height:" + ibbi_bimg_h + "px\"><img src='" + ibbi_bimg + "' border='0' width='" + ibbi_bimg_w + "' height='" + ibbi_bimg_h + "'/></div></a>";
            }
        }
        document.getElementById("AdFrenchWindowBorder_" + AdFrenchWindow.Loc).style.width = bimg_w + "px";
        document.getElementById("AdFrenchWindowBlock_" + AdFrenchWindow.Loc).style.height = bimg_h + "px";
        document.getElementById("AdFrenchWindowLink").style.width = bimg_w + "px";
        document.getElementById("AdFrenchWindowLink").style.height = bimg_h + "px";
        document.getElementById("AdFrenchWindowContent_" + AdFrenchWindow.Loc).innerHTML = H;
        document.getElementById("AdFrenchWindowSwitch").src = "http://" + NAdImgSrc + "/i/close.png";
    };
    this.isFirst = function () {
        var cfg = this.getAdCfg(this.AdN);
        var t = new Date();
        var tS = t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
        var isFirst = false;
        if (cfg == null) {
            isFirst = true;
            cfgstr = "[\"" + tS + "\",\"1\"]";
            this.setCfg(this.AdN, cfgstr);
        } else {
            var ss = cfg[0].split("-");
            var s = new Date(ss[0], ss[1], ss[2]);
            if (t > s) {
                isFirst = true;
                cfgstr = "[\"" + tS + "\",\"1\"]";
                this.setCfg(this.AdN, cfgstr);
            } else {
                var n = cfg[1];
                n = parseInt(n, 10);
                if (n < this.showLimit) {
                    cfgstr = "[\"" + tS + "\",\"" + (n + 1) + "\"]";
                    this.setCfg(this.AdN, cfgstr);
                    isFirst = true;
                }
            }
        }
        return isFirst;
    };
}
Tpl_54.prototype = new abstract_Tpl();

function Tpl_99(Loc) {
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
Tpl_99.prototype = new abstract_Tpl();