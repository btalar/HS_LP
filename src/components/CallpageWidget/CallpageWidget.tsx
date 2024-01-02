import React, { useEffect } from 'react';

const CallPageWidget: React.FC = () => {
    useEffect(() => {
        const loadBabel = (url: string, callback: Function) => {
            const script = document.createElement('script');
            script.async = true;
            if (script.readyState) {
                script.onreadystatechange = function () {
                    if (script.readyState === 'loaded' || script.readyState === 'complete') {
                        script.onreadystatechange = null;
                        callback(window, document);
                    }
                };
            } else {
                script.onload = function () {
                    callback(window, document);
                };
            }
            script.src = url;
            document.head.appendChild(script);
        };

        const getCookie = (cname: string) => {
            const objToday = new Date();
            const version = objToday.toISOString().split('T')[0].split('-').join('');
            const name = cname + '=';
            const decodedCookie = decodeURIComponent(document.cookie);
            const cookieArray = decodedCookie.split(';');
            for (let i = 0; i < cookieArray.length; i++) {
                let cookie = cookieArray[i];
                cookie = cookie.trim();
                if (cookie.indexOf(name) === 0) {
                    return cookie.substring(name.length, cookie.length);
                }
            }
            return version;
        };

        const loadWidget = function (window: Window, document: Document) {
            const __cp = { "id": "sKJXV7RAICOom6apMk-g36lf0Rg2Ltn_dP74ciJ-hhw", "version": "1.1" };
            const cp = document.createElement('script');
            cp.type = 'text/javascript';
            cp.async = true;
            cp.src = "++cdn-widget.callpage.io+build+js+callpage.js".replace(/[+]/g, '/').replace(/[=]/g, '.') + '?v=' + getCookie('callpage-widget-version');
            const s = document.getElementsByTagName('script')[0];
            s.parentNode?.insertBefore(cp, s);
            if (window.callpage) {
                alert('You could have only 1 CallPage code on your website!');
            } else {
                window.callpage = function (method: string) {
                    if (method === '__getQueue') {
                        return this.methods;
                    } else if (method) {
                        if (typeof window.callpage.execute === 'function') {
                            return window.callpage.execute.apply(this, arguments);
                        } else {
                            (this.methods = this.methods || []).push({ arguments: arguments });
                        }
                    }
                };
                window.callpage.__cp = __cp;
                window.callpage('api.button.autoshow');
            }
        };

        loadBabel('https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js', function () {
            return loadWidget(window, document);
        });
    }, []); // Empty dependency array ensures the effect runs once after the initial render

    return null; // Since this is a script, no need to render anything
};
export default CallPageWidget;