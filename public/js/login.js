(()=>{var e={301:(e,t,r)=>{r(147),e.exports=self.fetch.bind(self)},294:(e,t)=>{"use strict";t.__esModule=!0,t.isUsernameValid=void 0,t.isUsernameValid=function(e){return!/[^0-9A-Za-z]/.test(e)}},35:function(e,t,r){"use strict";var o=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function s(e){try{u(o.next(e))}catch(e){i(e)}}function a(e){try{u(o.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}u((o=o.apply(e,t||[])).next())}))},n=this&&this.__generator||function(e,t){var r,o,n,i,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,o&&(n=2&i[0]?o.return:i[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,i[1])).done)return n;switch(o=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((n=(n=s.trys).length>0&&n[n.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){s.label=i[1];break}if(6===i[0]&&s.label<n[1]){s.label=n[1],n=i;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(i);break}n[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],o=0}finally{r=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0,t.sendRequest=void 0;var s=i(r(301));t.sendRequest=function(e,t){return o(this,void 0,void 0,(function(){var r;return n(this,(function(o){switch(o.label){case 0:return[4,(0,s.default)(e,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))];case 1:return r=o.sent(),console.log(r),"object"==typeof r?[2,r]:(console.log("Response unreceived. Try again.."),[2,{}])}}))}))}},147:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Headers:()=>y,Request:()=>_,Response:()=>A,DOMException:()=>x,fetch:()=>B});var o="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==o&&o,n="URLSearchParams"in o,i="Symbol"in o&&"iterator"in Symbol,s="FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch(e){return!1}}(),a="FormData"in o,u="ArrayBuffer"in o;if(u)var h=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],f=ArrayBuffer.isView||function(e){return e&&h.indexOf(Object.prototype.toString.call(e))>-1};function c(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||""===e)throw new TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function l(e){return"string"!=typeof e&&(e=String(e)),e}function d(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return i&&(t[Symbol.iterator]=function(){return t}),t}function y(e){this.map={},e instanceof y?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function p(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function b(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function m(e){var t=new FileReader,r=b(t);return t.readAsArrayBuffer(e),r}function v(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function w(){return this.bodyUsed=!1,this._initBody=function(e){var t;this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:s&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:a&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:n&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():u&&s&&(t=e)&&DataView.prototype.isPrototypeOf(t)?(this._bodyArrayBuffer=v(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):u&&(ArrayBuffer.prototype.isPrototypeOf(e)||f(e))?this._bodyArrayBuffer=v(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s&&(this.blob=function(){var e=p(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer)):this.blob().then(m)}),this.text=function(){var e,t,r,o=p(this);if(o)return o;if(this._bodyBlob)return e=this._bodyBlob,r=b(t=new FileReader),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),o=0;o<t.length;o++)r[o]=String.fromCharCode(t[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(T)}),this.json=function(){return this.text().then(JSON.parse)},this}y.prototype.append=function(e,t){e=c(e),t=l(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},y.prototype.delete=function(e){delete this.map[c(e)]},y.prototype.get=function(e){return e=c(e),this.has(e)?this.map[e]:null},y.prototype.has=function(e){return this.map.hasOwnProperty(c(e))},y.prototype.set=function(e,t){this.map[c(e)]=l(t)},y.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},y.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),d(e)},y.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),d(e)},y.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),d(e)},i&&(y.prototype[Symbol.iterator]=y.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function _(e,t){if(!(this instanceof _))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r,o,n=(t=t||{}).body;if(e instanceof _){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new y(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,n||null==e._bodyInit||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new y(t.headers)),this.method=(o=(r=t.method||this.method||"GET").toUpperCase(),g.indexOf(o)>-1?o:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(n),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==t.cache&&"no-cache"!==t.cache)){var i=/([?&])_=[^&]*/;i.test(this.url)?this.url=this.url.replace(i,"$1_="+(new Date).getTime()):this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}function T(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(o),decodeURIComponent(n))}})),t}function A(e,t){if(!(this instanceof A))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===t.statusText?"":""+t.statusText,this.headers=new y(t.headers),this.url=t.url||"",this._initBody(e)}_.prototype.clone=function(){return new _(this,{body:this._bodyInit})},w.call(_.prototype),w.call(A.prototype),A.prototype.clone=function(){return new A(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new y(this.headers),url:this.url})},A.error=function(){var e=new A(null,{status:0,statusText:""});return e.type="error",e};var E=[301,302,303,307,308];A.redirect=function(e,t){if(-1===E.indexOf(t))throw new RangeError("Invalid status code");return new A(null,{status:t,headers:{location:e}})};var x=o.DOMException;try{new x}catch(e){(x=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack}).prototype=Object.create(Error.prototype),x.prototype.constructor=x}function B(e,t){return new Promise((function(r,n){var i=new _(e,t);if(i.signal&&i.signal.aborted)return n(new x("Aborted","AbortError"));var a=new XMLHttpRequest;function h(){a.abort()}a.onload=function(){var e,t,o={status:a.status,statusText:a.statusText,headers:(e=a.getAllResponseHeaders()||"",t=new y,e.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(e){return 0===e.indexOf("\n")?e.substr(1,e.length):e})).forEach((function(e){var r=e.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();t.append(o,n)}})),t)};o.url="responseURL"in a?a.responseURL:o.headers.get("X-Request-URL");var n="response"in a?a.response:a.responseText;setTimeout((function(){r(new A(n,o))}),0)},a.onerror=function(){setTimeout((function(){n(new TypeError("Network request failed"))}),0)},a.ontimeout=function(){setTimeout((function(){n(new TypeError("Network request failed"))}),0)},a.onabort=function(){setTimeout((function(){n(new x("Aborted","AbortError"))}),0)},a.open(i.method,function(e){try{return""===e&&o.location.href?o.location.href:e}catch(t){return e}}(i.url),!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&(s?a.responseType="blob":u&&i.headers.get("Content-Type")&&-1!==i.headers.get("Content-Type").indexOf("application/octet-stream")&&(a.responseType="arraybuffer")),!t||"object"!=typeof t.headers||t.headers instanceof y?i.headers.forEach((function(e,t){a.setRequestHeader(t,e)})):Object.getOwnPropertyNames(t.headers).forEach((function(e){a.setRequestHeader(e,l(t.headers[e]))})),i.signal&&(i.signal.addEventListener("abort",h),a.onreadystatechange=function(){4===a.readyState&&i.signal.removeEventListener("abort",h)}),a.send(void 0===i._bodyInit?null:i._bodyInit)}))}B.polyfill=!0,o.fetch||(o.fetch=B,o.Headers=y,o.Request=_,o.Response=A)}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,r),i.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e=r(35),t=r(294),o=document.getElementsByTagName("input"),n=document.getElementById("submit");null==n||n.addEventListener("click",(function(){if((0,t.isUsernameValid)(o[0].value)){if(0!==o[1].value.length&&(o[1].value===o[2].value||(o[1].value=o[2].value="",o[1].placeholder=o[2].placeholder="Пароли не совпадают",0))){var r={username:o[0].value,password:o[1].value};(0,e.sendRequest)("/login",r);for(var n=0,i=Array.from(o);n<i.length;n++){var s=i[n];s.value="",s.placeholder=""}alert("Пользователь успешно зарегистрирован")}}else o[0].value="",o[0].placeholder="Имя содержит запрещенные символы"}))})()})();