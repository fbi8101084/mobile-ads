var AdToday = new Date();
var NNAdSrcs = new Array("ad3");
var NAdImgSrc = "ad3.fashionguide.com.tw";
var RndNu = Math.floor(Math.random() * 1000000);
var ridx = Math.floor(Math.random() * NNAdSrcs.length);
var NAdSrc = NNAdSrcs[ridx];
var isSend = false;
var xmlHttp;
var AdMap = {};
var MapRnIdx = Math.floor(Math.random() * 210);
var Chans = {
    1: ["www", "p"],
    2: ["blog", "p"],
    3: ["video", "p"],
    5: ["ad", "p"],
    6: ["events", "p"],
    9: ["bid", "a"],
    12: ["member", "p"],
    13: ["beautynews", "p"],
    15: ["officialweb", "p"],
    18: ["skin", "p"],
    19: ["hair", "p"],
    20: ["fgcash", "p"],
    22: ["buy", "p"],
    23: ["sale", "p"],
    24: ["style", "p"],
    26: ["forum", "p"],
    28: ["fit", "p"],
    29: ["m.test.fashionguide.com.tw", "p"],
    30: ["news", "p"],
    31: ["fgmagazine", "p"],
    32: ["search", "p"],
    33: ["active", "p"],
    34: ["diet", "p"],
    35: ["3c", "p"],
    36: ["travel", "p"],
    37: ["man", "p"],
    38: ["award", "p"],
    39: ["m.blog.fashionguide.com.tw", "p"]
};
var theChan = "www";
var ChanIdx = 0;
for (k in Chans) {
    var chkchan;
    chkchan = Chans[k][0];
    if (chkchan == "ad" && (document.domain.indexOf("ad3") == 0 || document.domain.indexOf("adm3") == 0)) {
        theChan = chkchan;
        ChanIdx = k;
    } else if (document.domain.indexOf(chkchan) != -1) {
        if (chkchan.indexOf(".") == -1) {
            var all_url = chkchan + '.fashionguide.com.tw';
            if (document.domain == all_url) {
                theChan = chkchan;
                ChanIdx = k;
            }
        } else {
            theChan = chkchan;
            ChanIdx = k;
        }
    }
}
if (theChan == "www") {
    document.write("<div style=\"height:0px;width:0px;\"><img src=\"http://" + NAdSrc + ".fashionguide.com.tw/rec.php?rnd=" + RndNu + "\" width=\"0\" height=\"0\"/></div>");
}
function AdBeautyNiceAlert() {
    alert('● FG網友評鑑滿意度標章\r\r網友在 【FG投票評鑑】 &【FG市調報告】中，針對商品作滿意度票選。我們\r以綜合性指標來計算網友票選的結果，當票選滿意度達到後，就會獲得【特優】\r或【優選】的星型標章喔！\r\r未來只要大家看到商品獲得這個標章，就代表是由FG網友票選出來的優質商品 ^^\r\r【特優】-網友票選綜合性指標達成8成滿意度\r【優選】-網友票選綜合性指標達成7成滿意度');
}
function isFlashSupported() {
    if (window.ActiveXObject) {
        try {
            if (new ActiveXObject('ShockwaveFlash.ShockwaveFlash'))
                return true;
        } catch (e) {
        }
    }
    return navigator.plugins['Shockwave Flash'] ? true : false;
}
var Ls = {};
function showNAdById(adLoc, Fix, AdN) {
    var Locs = adLoc.replace("ad", "").split("-");
    var Loc = Locs[0];
    var Block = Locs[1];
    try {
        if (typeof(Ls[adLoc]) == "undefined") {
            var L = eval("new " + Loc + "(" + Block + ")");
            if (typeof(Fix) != "undefined") {
                L.fix = Fix;
            }
            if (typeof(AdN) != "undefined") {
                L.AdN = AdN;
            }
            L.show();
            Ls[adLoc] = L;
        } else {
            var L = Ls[adLoc];
            if (typeof(Fix) != "undefined") {
                L.fix = Fix;
            }
            if (typeof(AdN) != "undefined") {
                L.AdN = AdN;
            }
            L.show();
        }
    } catch (err) {
    }
}
function AdImpressMap() {
    this.Map = {};
    this.Add = function (L, N) {
        if (this.isExist(L, N) == false) {
            if (this.Map[L] == null) {
                this.Map[L] = new Array();
            }
            this.Map[L].push(N);
        }
    };
    this.isExist = function (L, N) {
        if (this.Map[L] != null) {
            for (k in this.Map[L]) {
                if (N == this.Map[L][k]) {
                    return true;
                }
            }
        }
        return false;
    };
    this.getChanIdx = function () {
        return ChanIdx;
    };
    this.update = function () {
        if (isSend == true) {
            return false;
        }
        var ap, pa, AdSet, Ads, l, i;
        var Ch = this.getChanIdx();
        if (Ch == 0) {
            return;
        }
        Chans[Ch][1] == "p" ? ap = "http://" + document.domain + "/crossAd.php" : ap = "http://" + document.domain + "/crossAd.asp";
        l = 0;
        i = 0;
        for (k in this.Map) {
            l++;
        }
        AdSet = "{";
        for (L in this.Map) {
            AdSet += "\"" + L.replace("Loc_", "") + "\"" + ":[";
            Ads = "";
            for (k in this.Map[L]) {
                Ads += this.Map[L][k] + ",";
            }
            Ads = Ads.substr(0, Ads.length - 1);
            AdSet += Ads + "]";
            if (i < l - 1) {
                AdSet += ",";
            }
            i++;
        }
        AdSet += "}";
        pa = "Chan=" + Ch + "&Ads=" + AdSet + "&rnd=" + Math.floor(Math.random() * 1000000);
        if (window.XMLHttpRequest) {
            xmlHttp = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        if (xmlHttp) {
            xmlHttp.open("POST", ap, false);
            xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState == 4) {
                    if (xmlHttp.status == 200) {
                        if (xmlHttp.responseText == "false") {
                        } else {
                            isSend = true;
                            setTimeout("", 1000);
                        }
                    }
                }
            };
            xmlHttp.send(pa);
        }
    };
}
var AdImMap = new AdImpressMap();
window.onbeforeunload = function () {
    AdImMap.update();
};
if (typeof(JSON) == 'undefined') {
    if (typeof JSON !== 'object') {
        JSON = {};
    }
    (function () {
        'use strict';
        function f(n) {
            return n < 10 ? '0' + n : n;
        }

        if (typeof Date.prototype.toJSON !== 'function') {
            Date.prototype.toJSON = function () {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + '-' +
                f(this.getUTCMonth() + 1) + '-' +
                f(this.getUTCDate()) + 'T' +
                f(this.getUTCHours()) + ':' +
                f(this.getUTCMinutes()) + ':' +
                f(this.getUTCSeconds()) + 'Z' : null;
            };
            String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
                return this.valueOf();
            };
        }
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"': '\\"',
            '\\': '\\\\'
        }, rep;

        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' : '"' + string + '"';
        }

        function str(key, holder) {
            var i, k, v, length, mind = gap, partial, value = holder[key];
            if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
                value = value.toJSON(key);
            }
            if (typeof rep === 'function') {
                value = rep.call(holder, key, value);
            }
            switch (typeof value) {
                case'string':
                    return quote(value);
                case'number':
                    return isFinite(value) ? String(value) : 'null';
                case'boolean':
                case'null':
                    return String(value);
                case'object':
                    if (!value) {
                        return 'null';
                    }
                    gap += indent;
                    partial = [];
                    if (Object.prototype.toString.apply(value) === '[object Array]') {
                        length = value.length;
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str(i, value) || 'null';
                        }
                        v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[' + partial.join(',') + ']';
                        gap = mind;
                        return v;
                    }
                    if (rep && typeof rep === 'object') {
                        length = rep.length;
                        for (i = 0; i < length; i += 1) {
                            if (typeof rep[i] === 'string') {
                                k = rep[i];
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ': ' : ':') + v);
                                }
                            }
                        }
                    } else {
                        for (k in value) {
                            if (Object.prototype.hasOwnProperty.call(value, k)) {
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ': ' : ':') + v);
                                }
                            }
                        }
                    }
                    v = partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' : '{' + partial.join(',') + '}';
                    gap = mind;
                    return v;
            }
        }

        if (typeof JSON.stringify !== 'function') {
            JSON.stringify = function (value, replacer, space) {
                var i;
                gap = '';
                indent = '';
                if (typeof space === 'number') {
                    for (i = 0; i < space; i += 1) {
                        indent += ' ';
                    }
                } else if (typeof space === 'string') {
                    indent = space;
                }
                rep = replacer;
                if (replacer && typeof replacer !== 'function' && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
                    throw new Error('JSON.stringify');
                }
                return str('', {'': value});
            };
        }
        if (typeof JSON.parse !== 'function') {
            JSON.parse = function (text, reviver) {
                var j;

                function walk(holder, key) {
                    var k, v, value = holder[key];
                    if (value && typeof value === 'object') {
                        for (k in value) {
                            if (Object.prototype.hasOwnProperty.call(value, k)) {
                                v = walk(value, k);
                                if (v !== undefined) {
                                    value[k] = v;
                                } else {
                                    delete value[k];
                                }
                            }
                        }
                    }
                    return reviver.call(holder, key, value);
                }

                text = String(text);
                cx.lastIndex = 0;
                if (cx.test(text)) {
                    text = text.replace(cx, function (a) {
                        return '\\u' +
                            ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                    });
                }
                if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                    j = eval('(' + text + ')');
                    return typeof reviver === 'function' ? walk({'': j}, '') : j;
                }
                throw new SyntaxError('JSON.parse');
            };
        }
    }());
}
function get_cookie_for_track(Name) {
    var search = Name + "="
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search)
        if (offset != -1) {
            offset += search.length
            end = document.cookie.indexOf(";", offset)
            if (end == -1)end = document.cookie.length
            return unescape(document.cookie.substring(offset, end))
        }
        else return ""
    }
}
function set_cookie_for_track(name, value, days) {
    var st
    var expires1 = new Date()
    expires1.setTime(expires1.getTime() + 1000 * 60 * 60 * 24 * days)
    st = name + "=" + value + ";domain=.fashionguide.com.tw;path=/; expires=" + expires1.toGMTString()
    document.cookie = st;
}
function load_xmldoc_for_track(url) {
    expires1 = new Date();
    ap = url + "&rnd=" + expires1.getTime();
    xhr2 = false;
    xdr = false;
    if (window.XDomainRequest) {
        try {
            xdr = new XDomainRequest();
            xhr2 = false;
        } catch (e) {
            xdr = false;
        }
    } else if (window.XMLHttpRequest) {
        try {
            xhr2 = new XMLHttpRequest();
        } catch (e) {
            xhr2 = false;
        }
    } else if (window.ActiveXObject) {
        try {
            xhr2 = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xhr2 = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                xhr2 = false;
            }
        }
    }
    if (xhr2) {
        xhr2.open("GET", ap, true);
        xhr2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr2.onreadystatechange = function () {
            if (xhr2.readyState == 4) {
                if (xhr2.status == 200) {
                    state_change_for_track(xhr2.responseText);
                }
            }
        };
        xhr2.send();
    }
    if (xdr) {
        xdr.onload = function () {
            if (xdr.responseText == "false") {
            } else {
                state_change_for_track(xdr.responseText);
            }
        }
        xdr.open("GET", ap);
        xdr.send();
    }
}
function state_change_for_track(responseText) {
    if (responseText != '') {
        data = JSON.parse(responseText);
        if (data !== null) {
            if ((typeof(data.u_test_days)) == 'number') {
                set_cookie_for_track('u_test', data.u_test, data.u_test_days);
            }
            if ((typeof(data.u_new_days)) == 'number') {
                set_cookie_for_track('u_new', data.u_new, data.u_new_days);
            }
            if ((typeof(data.u_days)) == 'number') {
                set_cookie_for_track('u_v2', data.u_v2, data.u_days);
            }
            if ((typeof(data.favorite_key_days)) == 'number') {
                set_cookie_for_track('favorite_key', data.favorite_key, data.favorite_key_days);
            }
        }
    }
}
function track_visit(unique_keyword_id_str, like_member, like_uid, act) {
    var url = window.location.toString().toLowerCase();
    prefix_url = url.substring(url.indexOf("://") + 3, url.indexOf("."));
    if (url.indexOf("http://www.fashionguide.com.tw/beauty/") >= 0) {
        prefix_url = 'beauty';
    }
    switch (prefix_url) {
        case'blog':
            service_id = 2;
            break;
        case'beautynews':
            service_id = 3;
            break;
        case'sale':
            service_id = 4;
            break;
        case'video':
            service_id = 5;
            break;
        case'forum':
            service_id = 6;
            break;
        case'beauty':
            service_id = 7;
            break;
        case'fit':
            service_id = 8;
            break;
        case'search':
            service_id = 10;
            break;
        case'diet':
            service_id = 11;
            break;
        case'style':
            service_id = 13;
            break;
        case'hair':
            service_id = 14;
            break;
        case'fgmagazine':
            service_id = 15;
            break;
        case'bid':
            service_id = 16;
            break;
        case'fgcash':
            service_id = 17;
            break;
        case'member':
            service_id = 18;
            break;
        default:
            service_id = 0;
            break;
    }
    str = 'uk=' + unique_keyword_id_str + '&s=' + service_id + '&lm=' + like_member + '&lu=' + like_uid + '&ut=' + get_cookie_for_track('u_test') + '&u=' + get_cookie_for_track('u_v2') + '&p=' + navigator.platform + '&a=' + act
    load_xmldoc_for_track('http://track.fashionguide.com.tw/ajax/track_visit.php?' + str);
}
function set_favorite_cookie() {
    if ((get_cookie_for_track('favorite_key') == '') && (get_cookie_for_track('u_v2') != '')) {
        str = 'u=' + get_cookie_for_track('u_v2')
        load_xmldoc_for_track('http://track.fashionguide.com.tw/ajax/set_favorite_cookie.php?' + str);
    }
}
window.mobilecheck = function () {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))check = true
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}
function analyser() {
    this.keynums = '';
    this.result = '';
    this.action_res = false;
    this.browser = '';
    this.sentence = '';
    this.loc = '';
    this.uid = 0;
    this.mid = 0;
    if (navigator.userAgent.search("MSIE 8") > -1)this.browser = 'ie8';
    this.R = function (T) {
        C = T.replace(/&nbsp;/g, ' ');
        C = C.replace(/&/g, ' ');
        return C;
    }
    this.ccookie = function (name, value, days) {
        var t;
        var d = new Date();
        if (days == -1) {
            d.setTime(d.getTime() - (1000 * 60 * 60 * 24 * 1));
            t = name + "=" + value + ";domain=.fashionguide.com.tw;path=/; expires=" + d.toGMTString();
        }
        if (days == 0) {
            d.setTime(d.getTime() + (1000 * 60 * 60 * 1));
            t = name + "=" + value + ";domain=.fashionguide.com.tw;path=/; expires=" + d.toGMTString();
        }
        if (days > 0) {
            d.setTime(d.getTime() + (1000 * 60 * 60 * 24 * days));
            t = name + "=" + value + ";domain=.fashionguide.com.tw;path=/; expires=" + d.toGMTString();
        }
        document.cookie = t;
    }
    this.gcookie = function (cname) {
        var cvalue = "";
        var search = cname + "=";
        var ta_cookie_str;
        var ta_cookie_array;
        if (document.cookie.length > 0) {
            offset = document.cookie.indexOf(search);
            if (offset != -1) {
                end = document.cookie.indexOf(";", offset);
                if (end == -1)end = document.cookie.length;
                ta_cookie_str = unescape(document.cookie.substring(offset, end));
                ta_cookie_array = ta_cookie_str.split('&');
                ta_cookie_array = ta_cookie_array[0].split('=');
                cvalue = ta_cookie_array[1];
                return cvalue;
            }
        }
        return "";
    }
    this.uid = this.gcookie('u_v2');
    this.mid = this.gcookie('MemberNum');
    this.ajax_func = function (action, addr, val, call_func) {
        var send_flag = false;
        var xhr;
        if (window.XDomainRequest) {
            xhr = new XDomainRequest();
            xhr.onerror = function () {
            }
            xhr.onload = call_func;
            xhr.ontimeout = function () {
            }
            action == 'GET' ? xhr.open("GET", addr + val, true) : xhr.open('POST', addr, true);
            action == 'GET' ? xhr.send() : xhr.send(val);
            send_flag = true;
        } else if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            try {
                xhr = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    xhr = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {
                }
            }
        }
        if (send_flag == false) {
            action == 'GET' ? xhr.open("GET", addr + val, true) : xhr.open('POST', addr, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = call_func;
            action == 'GET' ? xhr.send() : xhr.send(val);
        }
    }
    this.get_by_id = function (m, u) {
        m = m || 0;
        u = u || 0;
        if (document.getElementById('fga') != null) {
            var obj = document.getElementById('fga');
            this.sentence = ar.R(obj.value);
            this.go(ar.R(obj.value), m, u);
        }
    }
    this.send_text = function (t, m, u) {
        m = m || 0;
        u = u || 0;
        this.sentence = t;
        this.go(ar.R(this.sentence), m, u);
    }
    this.get_by_useid = function (id, m, u) {
        m = m || 0;
        u = u || 0;
        if (document.getElementById(id) != null) {
            var obj = document.getElementById(id);
            this.sentence = ar.R(obj.innerHTML);
            this.go(ar.R(obj.innerHTML), m, u);
        }
    }
    this.go = function (t, m, u) {
        channel = document.domain;
        channel = channel.split('.')[0];
        ap = "http://54.248.90.126/";
        pa = "Chan=" + channel + "&t=" + t + "&rnd=" + Math.floor(Math.random() * 1000000);
        ar.ajax_func('POST', ap, pa, function () {
            if (this.readyState === 4 && ar.browser == '') {
                if (this.status === 200) {
                    if (this.responseText == "false") {
                    } else {
                        ar.keynums = this.responseText;
                        ar.kmAd(1, this.responseText, m, u);
                        document.domain.indexOf("search") == 0 ? track_visit(this.responseText, m, u, 's') : track_visit(this.responseText, m, u, 'v');
                        set_favorite_cookie();
                    }
                }
            } else {
            }
            if (ar.browser == 'ie8') {
                if (this.responseText == "false") {
                } else {
                    ar.keynums = this.responseText;
                    ar.kmAd(1, this.responseText, m, u);
                    document.domain.indexOf("search") == 0 ? track_visit(this.responseText, m, u, 's') : track_visit(this.responseText, m, u, 'v');
                    set_favorite_cookie();
                }
            }
        });
    }
    this.loc_set = function (L) {
        this.loc = L;
    }
    this.kc_get = function () {
        channel = document.domain;
        channel = channel.split('.')[0];
        var k = '';
        ap = "http://kf.fashionguide.com.tw/s/";
        if (this.loc == 4)k = encodeURIComponent(document.location.href);
        if (this.loc == 5)k = this.sentence;
        pa = "c=" + channel + "&l=" + this.loc + "&k=" + k + '&u=' + ar.uid + '&m=' + ar.mid + "&rnd=" + Math.floor(Math.random() * 1000000);
        ar.ajax_func('POST', ap, pa, function () {
            if (this.readyState === 4 && ar.browser == '') {
                if (this.status === 200) {
                    if (this.responseText == "false") {
                    } else {
                        var json_obj = JSON.parse(this.responseText);
                        for (var key in json_obj) {
                            loc_id = json_obj[key]['loc'];
                            var txt_obj = json_obj[key]['t'];
                            var kb = document.getElementById('fg_k' + loc_id);
                            if (kb !== null)
                                kb.innerHTML = '';
                            for (var obj in txt_obj) {
                                if (kb !== null)
                                    kb.insertAdjacentHTML('beforeend', txt_obj[obj]['c']);
                                ar.result += txt_obj[obj]['c'];
                            }
                        }
                        ar.action_res = true;
                    }
                }
            }
            if (ar.browser == 'ie8') {
                if (this.responseText == "false") {
                } else {
                    var json_obj = JSON.parse(this.responseText);
                    for (var key in json_obj) {
                        loc_id = json_obj[key]['loc'];
                        var txt_obj = json_obj[key]['t'];
                        var kb = document.getElementById('fg_k' + loc_id);
                        if (kb !== null)
                            kb.innerHTML = '';
                        for (var obj in txt_obj) {
                            if (kb !== null)
                                kb.insertAdjacentHTML('beforeend', txt_obj[obj]['c']);
                            ar.result += txt_obj[obj]['c'];
                        }
                    }
                    ar.action_res = true;
                }
            }
        });
    }
    this.kmAd = function (L, K) {
        if (typeof(homeflag) != 'undefined' && homeflag == 'Y')return false;
        if (mobilecheck())return false;
        channel = document.domain;
        channel = channel.split('.')[0];
        ap = "http://kf.fashionguide.com.tw/kf/";
        pa = "?c=" + channel + "&l=" + L + "&k=" + K + "&m=" + this.mid + "&u=" + this.uid + "&rnd=" + Math.floor(Math.random() * 1000000);
        ar.ajax_func('GET', ap, pa, function () {
            if (this.readyState === 4 && ar.browser == '') {
                if (this.status === 200) {
                    if (this.responseText == "false") {
                    } else {
                        var json_obj = JSON.parse(this.responseText);
                        if (json_obj[0].t == undefined) {
                            return false;
                        }
                        ;
                        var htmlstring = json_obj[0].t[0].c;
                        console.log(htmlstring);
                        if (htmlstring) {
                            var iDiv = document.createElement('div');
                            iDiv.id = 'fg_k3';
                            iDiv.innerHTML = htmlstring;
                            document.getElementsByTagName('body')[0].appendChild(iDiv);
                            document.getElementById('per_control').addEventListener('click', function (e) {
                                document.getElementById('fg_k3').style.display = 'none';
                            });
                            var kmad_box = setTimeout(function () {
                                document.getElementById('per_control').style.display = 'inline';
                            }, 3000)
                        }
                    }
                }
            }
            if (ar.browser == 'ie8') {
                if (this.responseText == "false") {
                } else {
                    var json_obj = JSON.parse(this.responseText);
                    if (json_obj[0].t == undefined) {
                        return false;
                    }
                    ;
                    var htmlstring = json_obj[0].t[0].c;
                    if (htmlstring) {
                        var iDiv = document.createElement('div');
                        iDiv.id = 'fg_k3';
                        iDiv.innerHTML = htmlstring;
                        document.getElementsByTagName('body')[0].appendChild(iDiv);
                        document.getElementById('per_control').addEventListener('click', function (e) {
                            document.getElementById('fg_k3').style.display = 'none';
                        });
                        var kmad_box = setTimeout(function () {
                            document.getElementById('per_control').style.display = 'inline';
                        }, 3000)
                    }
                }
            }
        });
    }
    this.perAd = function (L) {
        if (typeof(homeflag) != 'undefined' && homeflag == 'Y')return false;
        if (mobilecheck())return false;
        var perad = ar.gcookie('peradflag');
        var ad_times = ar.gcookie('ad_times');
        if (perad == 'Y') {
            return false;
        }
        ;
        ad_times++;
        if (ad_times >= 6) {
            return false;
        }
        ;
        var favorite_key = ar.gcookie('favorite_key');
        if (favorite_key == '')return false;
        var json_obj = JSON.parse(favorite_key);
        var keynum_string = '';
        for (var i in json_obj) {
            keynum_string == '' ? keynum_string = json_obj[i][0] : keynum_string += ',' + json_obj[i][0];
        }
        if (keynum_string == '') {
            return false;
        }
        ;
        channel = document.domain;
        channel = channel.split('.')[0];
        ap = "http://kf.fashionguide.com.tw/kf/";
        pa = "?c=" + channel + "&l=" + L + "&k=" + keynum_string + "&m=" + this.mid + "&u=" + this.uid + "&rnd=" + Math.floor(Math.random() * 1000000);
        ar.ajax_func('GET', ap, pa, function () {
            if (this.readyState === 4 && ar.browser == '') {
                if (this.status === 200) {
                    if (this.responseText == "false") {
                    } else {
                        var json_obj = JSON.parse(this.responseText);
                        if (json_obj[0].t == undefined) {
                            return false;
                        }
                        ;
                        var htmlstring = json_obj[0].t[0].c;
                        var match_key = json_obj[0].t[0].k;
                        if (htmlstring) {
                            var iDiv = document.createElement('div');
                            iDiv.id = 'perad';
                            iDiv.innerHTML = htmlstring;
                            document.getElementsByTagName('body')[0].appendChild(iDiv);
                            document.getElementById('per_control').addEventListener('click', function (e) {
                                document.getElementById('per_box').style.display = 'none';
                            });
                            var ex = new Date();
                            var per_box = setTimeout(function () {
                                document.getElementById('per_control').style.display = 'inline';
                            }, 3000)
                            ar.ccookie('peradflag', 'Y', 0);
                            ar.ccookie('perad_times', ad_times, 1);
                            ar.action_res = true;
                        }
                    }
                }
            }
            ;
            if (ar.browser == 'ie8') {
                if (this.responseText == "false") {
                } else {
                    var json_obj = JSON.parse(this.responseText);
                    if (json_obj[0].t == undefined) {
                        return false;
                    }
                    ;
                    var htmlstring = json_obj[0].t[0].c;
                    if (htmlstring) {
                        var iDiv = document.createElement('div');
                        iDiv.id = 'perad';
                        iDiv.innerHTML = htmlstring;
                        document.getElementsByTagName('body')[0].appendChild(iDiv);
                        document.getElementById('per_control').attachEvent('onclick', function () {
                            document.getElementById('per_box').style.display = 'none';
                        });
                        var ex = new Date();
                        var per_box = setTimeout(function () {
                            document.getElementById('per_control').style.display = 'inline';
                        }, 3000)
                        ar.ccookie('peradflag', 'Y', 0);
                        ar.ccookie('perad_times', ad_times, 1);
                        ar.action_res = true;
                    }
                }
            }
            ;
        });
    }
}
var ar = new analyser();
ar.perAd(6);
function fg_promote() {
    "use strict";
    (function () {
        navigator.cookieActivated = function () {
            if (navigator.userAgent.indexOf('MSIE') === -1) {
                return navigator.cookieEnabled;
            }
            document.cookie = 'cookieActived=true';
            return (document.cookie.indexOf('cookieActived') !== -1);
        }();
    }())
    var ajax_func = function (action, addr, val) {
        var send_flag = false;
        var xhr;
        if (window.XDomainRequest) {
            xhr = new XDomainRequest();
            xhr.onerror = function () {
            }
            xhr.ontimeout = function () {
            }
            action == 'GET' ? xhr.open("GET", addr + val, true) : xhr.open('POST', addr, true);
            action == 'GET' ? xhr.send() : xhr.send(val);
            send_flag = true;
        } else if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            try {
                xhr = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    xhr = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {
                }
            }
        }
        if (send_flag == false) {
            action == 'GET' ? xhr.open("GET", addr + val, true) : xhr.open('POST', addr, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            action == 'GET' ? xhr.send() : xhr.send(val);
        }
    }
    var get_parameter = function () {
        var query_string = {};
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = pair[1];
            } else if (typeof query_string[pair[0]] === "string") {
                var arr = [query_string[pair[0]], pair[1]];
                query_string[pair[0]] = arr;
            } else {
                query_string[pair[0]].push(pair[1]);
            }
        }
        return query_string;
    }
    var get_cookie = function (cname) {
        var cvalue = "";
        var search = cname + "=";
        var ta_cookie_str;
        var ta_cookie_array;
        if (document.cookie.length > 0) {
            var offset = document.cookie.indexOf(search);
            if (offset != -1) {
                var end = document.cookie.indexOf(";", offset);
                if (end == -1)end = document.cookie.length;
                ta_cookie_str = unescape(document.cookie.substring(offset, end));
                ta_cookie_array = ta_cookie_str.split('&');
                ta_cookie_array = ta_cookie_array[0].split('=');
                cvalue = ta_cookie_array[1];
                return cvalue;
            }
        }
        return "";
    }
    var get_ref = function () {
        return document.referrer;
    }
    var check_iframe = function () {
        var c;
        c = window.location !== window.parent.location ? true : false;
        return c;
    }
    var rid = get_parameter().uid;
    var hid = get_parameter().h;
    var hashcode = get_cookie('_h');
    if (rid == undefined)return false;
    if (hid == undefined)return false;
    if (navigator.cookieActivated == false)return false;
    if (check_iframe() == true)return false;
    var uid = get_cookie('u_v2');
    var mid = get_cookie('MemberNum');
    var ref = get_ref();
    var pa = "rid=" + rid + "&hid=" + hid + "&uid=" + uid + "&mid=" + mid + "&ref=" + ref + "&hash=" + hashcode + "&rnd=" + Math.floor(Math.random() * 1000000);
    var ap = "http://promote.fashionguide.com.tw:8080/promo";
    ajax_func('POST', ap, pa);
}
setTimeout('fg_promote()', 5000);