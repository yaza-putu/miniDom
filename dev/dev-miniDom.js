/****
 * Autor : yaza
 * License : MIT
 * *****************
 * fitur
 * *****************
 * css, rawCss, attr, getAttr, removeAttr, animate, on, addClass, toggleClass,html
 * text, val, insertBefore, insertAfter, insertFirst, insertLast, empty, fetch
 * 
 * ******************
 * Total fitur (18)
 * ******************
 ****/

!(function (factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        window.select = factory();
    }
})(function () {
    var miniDOM = function (s) {
        if (typeof s === "string") {
            this.value = Array.prototype.slice.call(document.querySelectorAll(s));
        }
        if (typeof s === "object") {
            this.value = [s];
        }
    };

    miniDOM.prototype = {
        ready : function(callback) {
           // in case the document is already rendered
            if (document.readyState!='loading') callback();
            // modern browsers
            else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
            // IE <= 8
            else document.attachEvent('onreadystatechange', function(){
                if (document.readyState=='complete') callback();
            });
        },
        each: function (fn) {
            [].forEach.call(this.value, fn);
            return this;
        },
        css: function (s,v) {
            return this.each(function (i) {
                i.style.cssText = i.style.cssText + s+':'+v;
            });
        },
        rawCss: function (v) {
            return this.each(function (i) {
                i.style.cssText = i.style.cssText + v;
            });
        },
        attr: function (a, v) {
            return this.each(function (i) {
                i.setAttribute(a, v);
            });
        },
        getAttr: function (v) {
            return this.value[0].getAttribute(v);
        },
        removeAttr: function (v) {
            return this.each(function (i) {
                i.removeAttribute(v);
            });
        },
        animate: function (time, scale, rotate, rotateX, rotateY, translateX, translateY, skewX, skewY, opacity) {
            return this.each(function (i) {
                i.style.cssText = i.style.cssText + 'transition: all ' + time + 's ease-in-out; transform: scale(' + scale + ') rotate(' + rotate + 'deg) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translate(' + translateX + 'px, ' + translateY + 'px) skew(' + skewX + 'deg, ' + skewY + 'deg); opacity:' + opacity + ';'
            });
        },
        on: function (type, fn) {
            return this.each(function (i) {
                i.addEventListener(type, fn, false);
            });
        },
        addClass: function (v) {
            var a = v.split(' ');
            return this.each(function (i) {
                for (var x = 0; x < a.length; x++) {
                    if (i.classList) {
                      i.classList.add(a[x]);
                    }
                    else {
                      i.className += ' ' + a[x];
                    }
                }
            });
        },
        toggleClass: function (v) {
            var a = v.split(' ');
            return this.each(function (i) {
                for (var x = 0; x < a.length; x++) {
                    if (i.classList) {
                        i.classList.toggle(a[x]);
                    }
                    else {
                        if (new RegExp('\\b'+ a[x] +'\\b').test(i.className)) {
                            i.className = i.className.replace(new RegExp('\\b'+ a[x] +'\\b', 'g'), '');
                        } else {
                            i.className += ' ' + a[x];
                        }
                    }
                }
            });
        },
        removeClass: function (v) {
            var a = v.split(' ');
            return this.each(function (i) {
                for (var x = 0; x < a.length; x++) {
                    if (i.classList) {
                        i.classList.remove(a[x]);
                    }
                    else {
                        i.className = i.className.replace(new RegExp('\\b'+ a[x] +'\\b', 'g'), '');
                    }
                }
            });
        },
        html: function (v) {
            return (typeof v == 'undefined') ? this.value[0].innerHTML : this.each(function(i) {
                i.innerHTML = v;
            });
        },
        text: function (v) {
            return (typeof v == 'undefined') ? this.value[0].innerText || this.value[0].textContent : this.each(function(i) {
                i.innerText = v;
                i.textContent = v;
            });
        },
        val: function (v) {
            return (typeof v == 'undefined') ? this.value[0].value : this.each(function(i) {
                i.value = v;
            });
        },
        insertBefore: function (v) {
            return this.each(function (i) {
                i.insertAdjacentHTML("beforeBegin", v);
            });
        },
        insertAfter: function (v) {
            return this.each(function (i) {
                i.insertAdjacentHTML("afterEnd", v);
            });
        },
        insertFirst: function (v) {
            return this.each(function (i) {
                i.insertAdjacentHTML("afterBegin", v);
            });
        },
        insertLast: function (v) {
            return this.each(function (i) {
                i.insertAdjacentHTML("beforeEnd", v);
            });
        },
        empty: function () {
            return this.each(function (i) {
                i.innerHTML = "";
            });
        },
    };

    return function (selector) {
        return new miniDOM(selector);
    };
});
