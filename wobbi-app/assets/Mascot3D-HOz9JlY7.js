import{b as e,l as t,n,o as r,p as i,x as a,y as o}from"./index-nzJ2oBXc.js";var s=a((t=>{var n=e(),r=o();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var a=Symbol.for(`react.transitional.element`),s=Symbol.for(`react.portal`),c=Symbol.for(`react.fragment`),l=Symbol.for(`react.strict_mode`),u=Symbol.for(`react.profiler`),d=Symbol.for(`react.consumer`),f=Symbol.for(`react.context`),p=Symbol.for(`react.forward_ref`),m=Symbol.for(`react.suspense`),h=Symbol.for(`react.suspense_list`),g=Symbol.for(`react.memo`),_=Symbol.for(`react.lazy`),v=Symbol.for(`react.scope`),y=Symbol.for(`react.activity`),b=Symbol.for(`react.legacy_hidden`),x=Symbol.for(`react.memo_cache_sentinel`),S=Symbol.for(`react.view_transition`),C=Symbol.for(`react.recoverable`),w=Symbol.iterator;function T(e){return typeof e!=`object`||!e?null:(e=w&&e[w]||e[`@@iterator`],typeof e==`function`?e:null)}var E=Symbol.for(`react.optimistic_key`),D=Array.isArray;function O(e,t){var n=e.length&3,r=e.length-n,i=t;for(t=0;t<r;){var a=e.charCodeAt(t)&255|(e.charCodeAt(++t)&255)<<8|(e.charCodeAt(++t)&255)<<16|(e.charCodeAt(++t)&255)<<24;++t,a=3432918353*(a&65535)+((3432918353*(a>>>16)&65535)<<16)&4294967295,a=a<<15|a>>>17,a=461845907*(a&65535)+((461845907*(a>>>16)&65535)<<16)&4294967295,i^=a,i=i<<13|i>>>19,i=5*(i&65535)+((5*(i>>>16)&65535)<<16)&4294967295,i=(i&65535)+27492+(((i>>>16)+58964&65535)<<16)}switch(a=0,n){case 3:a^=(e.charCodeAt(t+2)&255)<<16;case 2:a^=(e.charCodeAt(t+1)&255)<<8;case 1:a^=e.charCodeAt(t)&255,a=3432918353*(a&65535)+((3432918353*(a>>>16)&65535)<<16)&4294967295,a=a<<15|a>>>17,i^=461845907*(a&65535)+((461845907*(a>>>16)&65535)<<16)&4294967295}return i^=e.length,i^=i>>>16,i=2246822507*(i&65535)+((2246822507*(i>>>16)&65535)<<16)&4294967295,i^=i>>>13,i=3266489909*(i&65535)+((3266489909*(i>>>16)&65535)<<16)&4294967295,(i^i>>>16)>>>0}var k=Object.assign,A=Object.prototype.hasOwnProperty,j=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),M={},N={};function P(e){return A.call(N,e)?!0:A.call(M,e)?!1:j.test(e)?N[e]=!0:(M[e]=!0,!1)}var F=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `)),I=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),L=/["'&<>]/;function R(e){if(typeof e==`boolean`||typeof e==`number`||typeof e==`bigint`)return``+e;e=``+e;var t=L.exec(e);if(t){var n=``,r,i=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t=`&quot;`;break;case 38:t=`&amp;`;break;case 39:t=`&#x27;`;break;case 60:t=`&lt;`;break;case 62:t=`&gt;`;break;default:continue}i!==r&&(n+=e.slice(i,r)),i=r+1,n+=t}e=i===r?n:n+e.slice(i,r)}return e}var ee=/([A-Z])/g,te=/^ms-/,z=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function B(e){return z.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}var V=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},U=H.d;H.d={f:U.f,r:U.r,D:ot,C:st,L:ct,m:lt,X:dt,S:ut,M:ft};var re=[],ie=null,ae=/(<\/|<)(s)(cript)/gi;function oe(e,t,n,r){return``+t+(n===`s`?`\\u0073`:`\\u0053`)+r}function se(e,t,n,r,i){return{idPrefix:e===void 0?``:e,nextFormID:0,streamingFormat:0,bootstrapScriptContent:n,bootstrapScripts:r,bootstrapModules:i,instructions:0,hasBody:!1,hasHtml:!1,unknownResources:{},dnsResources:{},connectResources:{default:{},anonymous:{},credentials:{}},imageResources:{},styleResources:{},scriptResources:{},moduleUnknownResources:{},moduleScriptResources:{}}}function ce(e,t,n,r){return{insertionMode:e,selectedValue:t,tagScope:n,viewTransition:r}}function le(e,t,n){var r=e.tagScope&-25;switch(t){case`noscript`:return ce(2,null,r|1,null);case`select`:return ce(2,n.value==null?n.defaultValue:n.value,r,null);case`svg`:return ce(4,null,r,null);case`picture`:return ce(2,null,r|2,null);case`math`:return ce(5,null,r,null);case`foreignObject`:return ce(2,null,r,null);case`table`:return ce(6,null,r,null);case`thead`:case`tbody`:case`tfoot`:return ce(7,null,r,null);case`colgroup`:return ce(9,null,r,null);case`tr`:return ce(8,null,r,null);case`head`:if(2>e.insertionMode)return ce(3,null,r,null);break;case`html`:if(e.insertionMode===0)return ce(1,null,r,null)}return 6<=e.insertionMode||2>e.insertionMode?ce(2,null,r,null):e.viewTransition!==null||e.tagScope!==r?ce(e.insertionMode,e.selectedValue,r,null):e}function W(e){return e===null?null:{update:e.update,enter:`none`,exit:`none`,share:e.update,parentEnter:`none`,parentExit:`none`,name:e.autoName,autoName:e.autoName,nameIdx:0}}function ue(e,t){return t.tagScope&32&&(e.instructions|=128),ce(t.insertionMode,t.selectedValue,t.tagScope|12,W(t.viewTransition))}function de(e,t){e=W(t.viewTransition);var n=t.tagScope|16;return e!==null&&e.share!==`none`&&(n|=64),ce(t.insertionMode,t.selectedValue,n,e)}function fe(e,t,n){return e=`_`+e.idPrefix+`R_`+t,0<n&&(e+=`H`+n.toString(32)),e+`_`}function pe(e,t){t=t.viewTransition,t!==null&&(t.name!==`auto`&&(_e(e,`vt-name`,t.nameIdx===0?t.name:t.name+`_`+t.nameIdx),t.nameIdx++),_e(e,`vt-update`,t.update),t.enter!==`none`&&_e(e,`vt-enter`,t.enter),t.exit!==`none`&&_e(e,`vt-exit`,t.exit),t.share!==`none`&&_e(e,`vt-share`,t.share))}var me=new Map;function he(e,t){if(typeof t!=`object`)throw Error(i(62));var n=!0,r;for(r in t)if(A.call(t,r)){var a=t[r];if(a!=null&&typeof a!=`boolean`&&a!==``){if(r.indexOf(`--`)===0){var o=R(r);a=R((``+a).trim())}else o=me.get(r),o===void 0&&(o=R(r.replace(ee,`-$1`).toLowerCase().replace(te,`-ms-`)),me.set(r,o)),a=typeof a==`number`?a===0||F.has(r)?``+a:a+`px`:R((``+a).trim());n?(n=!1,e.push(` style="`,o,`:`,a)):e.push(`;`,o,`:`,a)}}n||e.push(`"`)}function ge(e,t,n){n&&typeof n!=`function`&&typeof n!=`symbol`&&e.push(` `,t,`=""`)}function _e(e,t,n){typeof n!=`function`&&typeof n!=`symbol`&&typeof n!=`boolean`&&e.push(` `,t,`="`,R(n),`"`)}var ve=R(`javascript:throw new Error('React form unexpectedly submitted.')`);function ye(e,t){this.push(`<input type="hidden"`),be(e),_e(this,`name`,t),_e(this,`value`,e),this.push(`/>`)}function be(e){if(typeof e!=`string`)throw Error(i(480))}function xe(e,t){if(typeof t.$$FORM_ACTION==`function`){var n=e.nextFormID++;e=e.idPrefix+n;try{var r=t.$$FORM_ACTION(e);return r&&r.data?.forEach(be),r}catch(e){if(typeof e==`object`&&e&&typeof e.then==`function`)throw e}}return null}function Se(e,t,n,r,i,a,o,s){var c=null;if(typeof r==`function`){var l=xe(t,r);l===null?(e.push(` `,`formAction`,`="`,ve,`"`),o=a=i=r=s=null,Te(t,n)):(s=l.name,r=l.action||``,i=l.encType,a=l.method,o=l.target,c=l.data)}return s!=null&&Ce(e,`name`,s),r!=null&&Ce(e,`formAction`,r),i!=null&&Ce(e,`formEncType`,i),a!=null&&Ce(e,`formMethod`,a),o!=null&&Ce(e,`formTarget`,o),c}function Ce(e,t,n){switch(t){case`className`:_e(e,`class`,n);break;case`tabIndex`:_e(e,`tabindex`,n);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:_e(e,t,n);break;case`style`:he(e,n);break;case`src`:case`href`:if(n===``)break;case`action`:case`formAction`:if(n==null||typeof n==`function`||typeof n==`symbol`||typeof n==`boolean`)break;n=B(``+n),e.push(` `,t,`="`,R(n),`"`);break;case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`ref`:break;case`autoFocus`:case`multiple`:case`muted`:ge(e,t.toLowerCase(),n);break;case`xlinkHref`:if(typeof n==`function`||typeof n==`symbol`||typeof n==`boolean`)break;n=B(``+n),e.push(` `,`xlink:href`,`="`,R(n),`"`);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:typeof n!=`function`&&typeof n!=`symbol`&&e.push(` `,t,`="`,R(n),`"`);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:n&&typeof n!=`function`&&typeof n!=`symbol`&&e.push(` `,t,`=""`);break;case`capture`:case`download`:!0===n?e.push(` `,t,`=""`):!1!==n&&typeof n!=`function`&&typeof n!=`symbol`&&e.push(` `,t,`="`,R(n),`"`);break;case`cols`:case`rows`:case`size`:case`span`:typeof n!=`function`&&typeof n!=`symbol`&&!isNaN(n)&&1<=n&&e.push(` `,t,`="`,R(n),`"`);break;case`rowSpan`:case`start`:typeof n==`function`||typeof n==`symbol`||isNaN(n)||e.push(` `,t,`="`,R(n),`"`);break;case`xlinkActuate`:_e(e,`xlink:actuate`,n);break;case`xlinkArcrole`:_e(e,`xlink:arcrole`,n);break;case`xlinkRole`:_e(e,`xlink:role`,n);break;case`xlinkShow`:_e(e,`xlink:show`,n);break;case`xlinkTitle`:_e(e,`xlink:title`,n);break;case`xlinkType`:_e(e,`xlink:type`,n);break;case`xmlBase`:_e(e,`xml:base`,n);break;case`xmlLang`:_e(e,`xml:lang`,n);break;case`xmlSpace`:_e(e,`xml:space`,n);break;default:if((!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`)&&(t=I.get(t)||t,P(t))){switch(typeof n){case`function`:case`symbol`:return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`)return}e.push(` `,t,`="`,R(n),`"`)}}}function G(e,t,n){if(t!=null){if(n!=null)throw Error(i(60));if(typeof t!=`object`||!(`__html`in t))throw Error(i(61));t=t.__html,t!=null&&e.push(``+t)}}function we(e){var t=``;return n.Children.forEach(e,function(e){e!=null&&(t+=e)}),t}function Te(e,t){if(!(e.instructions&16)){e.instructions|=16;var n=t.preamble,r=t.bootstrapChunks;(n.htmlChunks||n.headChunks)&&r.length===0?(r.push(t.startInlineScript),nt(r,e),r.push(`>`,`addEventListener("submit",function(a){if(!a.defaultPrevented){var b=a.target,d=a.submitter,c=b.action,e=d;if(d){var f=d.getAttribute("formAction");null!=f&&(c=f,e=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===c&&(a.preventDefault(),a=new FormData(b,e),c=b.ownerDocument||b,(c.$$reactFormReplay=c.$$reactFormReplay||[]).push(b,d,a))}});`,`<\/script>`)):r.unshift(t.startInlineScript,`>`,`addEventListener("submit",function(a){if(!a.defaultPrevented){var b=a.target,d=a.submitter,c=b.action,e=d;if(d){var f=d.getAttribute("formAction");null!=f&&(c=f,e=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===c&&(a.preventDefault(),a=new FormData(b,e),c=b.ownerDocument||b,(c.$$reactFormReplay=c.$$reactFormReplay||[]).push(b,d,a))}});`,`<\/script>`)}}function Ee(e,t){for(var n in e.push(Pe(`link`)),t)if(A.call(t,n)){var r=t[n];if(r!=null)switch(n){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(399,`link`));default:Ce(e,n,r)}}return e.push(`/>`),null}var K=/(<\/|<)(s)(tyle)/gi;function De(e,t,n,r){return``+t+(n===`s`?`\\73 `:`\\53 `)+r}function q(e,t,n,r){for(var a in e.push(Pe(n)),t)if(A.call(t,a)){var o=t[a];if(o!=null)switch(a){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(399,n));default:Ce(e,a,o)}}return pe(e,r),e.push(`/>`),null}function Oe(e,t){e.push(Pe(`title`));var n=null,r=null,i;for(i in t)if(A.call(t,i)){var a=t[i];if(a!=null)switch(i){case`children`:n=a;break;case`dangerouslySetInnerHTML`:r=a;break;default:Ce(e,i,a)}}return e.push(`>`),t=Array.isArray(n)?2>n.length?n[0]:null:n,typeof t!=`function`&&typeof t!=`symbol`&&t!=null&&e.push(R(``+t)),G(e,r,n),e.push(Le(`title`)),null}function ke(e,t){e.push(Pe(`script`));var n=null,r=null,i;for(i in t)if(A.call(t,i)){var a=t[i];if(a!=null)switch(i){case`children`:n=a;break;case`dangerouslySetInnerHTML`:r=a;break;default:Ce(e,i,a)}}return e.push(`>`),G(e,r,n),typeof n==`string`&&e.push((``+n).replace(ae,oe)),e.push(Le(`script`)),null}function Ae(e,t,n,r){e.push(Pe(n));var i=n=null,a;for(a in t)if(A.call(t,a)){var o=t[a];if(o!=null)switch(a){case`children`:n=o;break;case`dangerouslySetInnerHTML`:i=o;break;default:Ce(e,a,o)}}return pe(e,r),e.push(`>`),G(e,i,n),n}function je(e,t,n,r){e.push(Pe(n));var i=n=null,a;for(a in t)if(A.call(t,a)){var o=t[a];if(o!=null)switch(a){case`children`:n=o;break;case`dangerouslySetInnerHTML`:i=o;break;default:Ce(e,a,o)}}return pe(e,r),e.push(`>`),G(e,i,n),typeof n==`string`?(e.push(R(n)),null):n}var Me=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Ne=new Map;function Pe(e){var t=Ne.get(e);if(t===void 0){if(!Me.test(e))throw Error(i(65,e));t=`<`+e,Ne.set(e,t)}return t}function Fe(e,t,n,r,a,o,s,c,l){switch(t){case`div`:case`span`:case`svg`:case`path`:break;case`a`:e.push(Pe(`a`));var u=null,d=null,f;for(f in n)if(A.call(n,f)){var p=n[f];if(p!=null)switch(f){case`children`:u=p;break;case`dangerouslySetInnerHTML`:d=p;break;case`href`:p===``?_e(e,`href`,``):Ce(e,f,p);break;default:Ce(e,f,p)}}if(pe(e,c),e.push(`>`),G(e,d,u),typeof u==`string`){e.push(R(u));var m=null}else m=u;return m;case`g`:case`p`:case`li`:break;case`select`:e.push(Pe(`select`));var h=null,g=null,_;for(_ in n)if(A.call(n,_)){var v=n[_];if(v!=null)switch(_){case`children`:h=v;break;case`dangerouslySetInnerHTML`:g=v;break;case`defaultValue`:case`value`:break;default:Ce(e,_,v)}}return pe(e,c),e.push(`>`),G(e,g,h),h;case`option`:var y=c.selectedValue;e.push(Pe(`option`));var b=null,x=null,S=null,C=null,w;for(w in n)if(A.call(n,w)){var T=n[w];if(T!=null)switch(w){case`children`:b=T;break;case`selected`:S=T;break;case`dangerouslySetInnerHTML`:C=T;break;case`value`:x=T;default:Ce(e,w,T)}}if(y!=null){var E=x===null?we(b):``+x;if(D(y)){for(var O=0;O<y.length;O++)if(``+y[O]===E){e.push(` selected=""`);break}}else``+y===E&&e.push(` selected=""`)}else S&&e.push(` selected=""`);return e.push(`>`),G(e,C,b),b;case`textarea`:e.push(Pe(`textarea`));var j=null,M=null,N=null,F;for(F in n)if(A.call(n,F)){var I=n[F];if(I!=null)switch(F){case`children`:N=I;break;case`value`:j=I;break;case`defaultValue`:M=I;break;case`dangerouslySetInnerHTML`:throw Error(i(91));default:Ce(e,F,I)}}if(j===null&&M!==null&&(j=M),pe(e,c),e.push(`>`),N!=null){if(j!=null)throw Error(i(92));if(D(N)){if(1<N.length)throw Error(i(93));j=``+N[0]}j=``+N}return typeof j==`string`&&j[0]===`
`&&e.push(`
`),j!==null&&e.push(R(``+j)),null;case`input`:e.push(Pe(`input`));var L=null,ee=null,te=null,z=null,V=null,H=null,ne=null,U=null,ie=null,ae;for(ae in n)if(A.call(n,ae)){var oe=n[ae];if(oe!=null)switch(ae){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(399,`input`));case`name`:L=oe;break;case`formAction`:ee=oe;break;case`formEncType`:te=oe;break;case`formMethod`:z=oe;break;case`formTarget`:V=oe;break;case`defaultChecked`:ie=oe;break;case`defaultValue`:ne=oe;break;case`checked`:U=oe;break;case`value`:H=oe;break;default:Ce(e,ae,oe)}}var se=Se(e,r,a,ee,te,z,V,L);return U===null?ie!==null&&ge(e,`checked`,ie):ge(e,`checked`,U),H===null?ne!==null&&Ce(e,`value`,ne):Ce(e,`value`,H),pe(e,c),e.push(`/>`),se?.forEach(ye,e),null;case`button`:e.push(Pe(`button`));var ce=null,le=null,W=null,ue=null,de=null,fe=null,me=null,be;for(be in n)if(A.call(n,be)){var Me=n[be];if(Me!=null)switch(be){case`children`:ce=Me;break;case`dangerouslySetInnerHTML`:le=Me;break;case`name`:W=Me;break;case`formAction`:ue=Me;break;case`formEncType`:de=Me;break;case`formMethod`:fe=Me;break;case`formTarget`:me=Me;break;default:Ce(e,be,Me)}}var Ne=Se(e,r,a,ue,de,fe,me,W);if(pe(e,c),e.push(`>`),Ne?.forEach(ye,e),G(e,le,ce),typeof ce==`string`){e.push(R(ce));var Fe=null}else Fe=ce;return Fe;case`form`:e.push(Pe(`form`));var Ie=null,Re=null,ze=null,Be=null,Ve=null,He=null,Ue;for(Ue in n)if(A.call(n,Ue)){var We=n[Ue];if(We!=null)switch(Ue){case`children`:Ie=We;break;case`dangerouslySetInnerHTML`:Re=We;break;case`action`:ze=We;break;case`encType`:Be=We;break;case`method`:Ve=We;break;case`target`:He=We;break;default:Ce(e,Ue,We)}}var Ge=null,Ke=null;if(typeof ze==`function`){var qe=xe(r,ze);qe===null?(e.push(` `,`action`,`="`,ve,`"`),He=Ve=Be=ze=null,Te(r,a)):(ze=qe.action||``,Be=qe.encType,Ve=qe.method,He=qe.target,Ge=qe.data,Ke=qe.name)}if(ze!=null&&Ce(e,`action`,ze),Be!=null&&Ce(e,`encType`,Be),Ve!=null&&Ce(e,`method`,Ve),He!=null&&Ce(e,`target`,He),pe(e,c),e.push(`>`),Ke!==null&&(e.push(`<input type="hidden"`),_e(e,`name`,Ke),e.push(`/>`),Ge?.forEach(ye,e)),G(e,Re,Ie),typeof Ie==`string`){e.push(R(Ie));var Je=null}else Je=Ie;return Je;case`menuitem`:for(var Ye in e.push(Pe(`menuitem`)),n)if(A.call(n,Ye)){var Xe=n[Ye];if(Xe!=null)switch(Ye){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(400));default:Ce(e,Ye,Xe)}}return pe(e,c),e.push(`>`),null;case`object`:e.push(Pe(`object`));var Ze=null,Qe=null,$e;for($e in n)if(A.call(n,$e)){var et=n[$e];if(et!=null)switch($e){case`children`:Ze=et;break;case`dangerouslySetInnerHTML`:Qe=et;break;case`data`:var tt=B(``+et);if(tt===``)break;e.push(` `,`data`,`="`,R(tt),`"`);break;default:Ce(e,$e,et)}}if(pe(e,c),e.push(`>`),G(e,Qe,Ze),typeof Ze==`string`){e.push(R(Ze));var J=null}else J=Ze;return J;case`title`:var Y=c.tagScope&1,nt=c.tagScope&4;if(c.insertionMode===4||Y||n.itemProp!=null)var rt=Oe(e,n);else nt?rt=null:(Oe(a.hoistableChunks,n),rt=void 0);return rt;case`link`:var it=c.tagScope&1,at=c.tagScope&4,ot=n.rel,st=n.href,ct=n.precedence;if(c.insertionMode===4||it||n.itemProp!=null||typeof ot!=`string`||typeof st!=`string`||st===``){Ee(e,n);var lt=null}else if(n.rel===`stylesheet`){if(typeof ct!=`string`||n.disabled!=null||n.onLoad||n.onError)lt=Ee(e,n);else{var ut=a.styles.get(ct),dt=r.styleResources.hasOwnProperty(st)?r.styleResources[st]:void 0;if(dt!==null){r.styleResources[st]=null,ut||(ut={precedence:R(ct),rules:[],hrefs:[],sheets:new Map},a.styles.set(ct,ut));var ft={state:0,props:k({},n,{"data-precedence":n.precedence,precedence:null})};if(dt){dt.length===2&&pt(ft.props,dt);var ht=a.preloads.stylesheets.get(st);ht&&0<ht.length?ht.length=0:ft.state=1}ut.sheets.set(st,ft),s&&s.stylesheets.add(ft)}else if(ut){var gt=ut.sheets.get(st);gt&&s&&s.stylesheets.add(gt)}l&&e.push(`<!-- -->`),lt=null}}else n.onLoad||n.onError?lt=Ee(e,n):(l&&e.push(`<!-- -->`),lt=at?null:Ee(a.hoistableChunks,n));return lt;case`script`:var _t=c.tagScope&1,vt=n.async;if(typeof n.src!=`string`||!n.src||!vt||typeof vt==`function`||typeof vt==`symbol`||n.onLoad||n.onError||c.insertionMode===4||_t||n.itemProp!=null)var yt=ke(e,n);else{var bt=n.src;if(n.type===`module`)var xt=r.moduleScriptResources,St=a.preloads.moduleScripts;else xt=r.scriptResources,St=a.preloads.scripts;var Ct=xt.hasOwnProperty(bt)?xt[bt]:void 0;if(Ct!==null){xt[bt]=null;var wt=n;if(Ct){Ct.length===2&&(wt=k({},n),pt(wt,Ct));var Tt=St.get(bt);Tt&&(Tt.length=0)}var Et=[];a.scripts.add(Et),ke(Et,wt)}l&&e.push(`<!-- -->`),yt=null}return yt;case`style`:var Dt=c.tagScope&1,Ot=n.precedence,kt=n.href,At=n.nonce;if(c.insertionMode===4||Dt||n.itemProp!=null||typeof Ot!=`string`||typeof kt!=`string`||kt===``){e.push(Pe(`style`));var jt=null,Mt=null,X;for(X in n)if(A.call(n,X)){var Nt=n[X];if(Nt!=null)switch(X){case`children`:jt=Nt;break;case`dangerouslySetInnerHTML`:Mt=Nt;break;default:Ce(e,X,Nt)}}e.push(`>`);var Z=Array.isArray(jt)?2>jt.length?jt[0]:null:jt;typeof Z!=`function`&&typeof Z!=`symbol`&&Z!=null&&e.push((``+Z).replace(K,De)),G(e,Mt,jt),e.push(Le(`style`));var Pt=null}else{var Ft=a.styles.get(Ot);if((r.styleResources.hasOwnProperty(kt)?r.styleResources[kt]:void 0)!==null){r.styleResources[kt]=null,Ft||(Ft={precedence:R(Ot),rules:[],hrefs:[],sheets:new Map},a.styles.set(Ot,Ft));var Q=a.nonce.style;if(!Q||Q===At){Ft.hrefs.push(R(kt));var It=Ft.rules,Lt=null,Rt=null,zt;for(zt in n)if(A.call(n,zt)){var Bt=n[zt];if(Bt!=null)switch(zt){case`children`:Lt=Bt;break;case`dangerouslySetInnerHTML`:Rt=Bt}}var Vt=Array.isArray(Lt)?2>Lt.length?Lt[0]:null:Lt;typeof Vt!=`function`&&typeof Vt!=`symbol`&&Vt!=null&&It.push((``+Vt).replace(K,De)),G(It,Rt,Lt)}}Ft&&s&&s.styles.add(Ft),l&&e.push(`<!-- -->`),Pt=void 0}return Pt;case`meta`:var Ht=c.tagScope&1,Ut=c.tagScope&4;if(c.insertionMode===4||Ht||n.itemProp!=null)var Wt=q(e,n,`meta`,c);else l&&e.push(`<!-- -->`),Wt=Ut?null:typeof n.charSet==`string`?q(a.charsetChunks,n,`meta`,c):n.name===`viewport`?q(a.viewportChunks,n,`meta`,c):q(a.hoistableChunks,n,`meta`,c);return Wt;case`listing`:case`pre`:e.push(Pe(t));var Gt=null,Kt=null,qt;for(qt in n)if(A.call(n,qt)){var Jt=n[qt];if(Jt!=null)switch(qt){case`children`:Gt=Jt;break;case`dangerouslySetInnerHTML`:Kt=Jt;break;default:Ce(e,qt,Jt)}}if(pe(e,c),e.push(`>`),Kt!=null){if(Gt!=null)throw Error(i(60));if(typeof Kt!=`object`||!(`__html`in Kt))throw Error(i(61));var Yt=Kt.__html;Yt!=null&&(typeof Yt==`string`&&0<Yt.length&&Yt[0]===`
`?e.push(`
`,Yt):e.push(``+Yt))}return typeof Gt==`string`&&Gt[0]===`
`&&e.push(`
`),Gt;case`img`:var Xt=c.tagScope&3,Zt=n.src,Qt=n.srcSet;if(!(n.loading===`lazy`||!Zt&&!Qt||typeof Zt!=`string`&&Zt!=null||typeof Qt!=`string`&&Qt!=null||n.fetchPriority===`low`||Xt)&&(typeof Zt!=`string`||Zt[4]!==`:`||Zt[0]!==`d`&&Zt[0]!==`D`||Zt[1]!==`a`&&Zt[1]!==`A`||Zt[2]!==`t`&&Zt[2]!==`T`||Zt[3]!==`a`&&Zt[3]!==`A`)&&(typeof Qt!=`string`||Qt[4]!==`:`||Qt[0]!==`d`&&Qt[0]!==`D`||Qt[1]!==`a`&&Qt[1]!==`A`||Qt[2]!==`t`&&Qt[2]!==`T`||Qt[3]!==`a`&&Qt[3]!==`A`)){s!==null&&c.tagScope&64&&(s.suspenseyImages=!0);var $t=typeof n.sizes==`string`?n.sizes:void 0,en=Qt?Qt+`
`+($t||``):Zt,tn=a.preloads.images,nn=tn.get(en);if(nn)(n.fetchPriority===`high`||10>a.highImagePreloads.size)&&(tn.delete(en),a.highImagePreloads.add(nn));else if(!r.imageResources.hasOwnProperty(en)){r.imageResources[en]=re;var rn=n.crossOrigin,an=typeof rn==`string`?rn===`use-credentials`?rn:``:void 0,on=a.headers,sn;on&&0<on.remainingCapacity&&typeof n.srcSet!=`string`&&(n.fetchPriority===`high`||500>on.highImagePreloads.length)&&(sn=mt(Zt,`image`,{imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:an,integrity:n.integrity,nonce:n.nonce,type:n.type,fetchPriority:n.fetchPriority,referrerPolicy:n.referrerPolicy}),0<=(on.remainingCapacity-=sn.length+2))?(a.resets.image[en]=re,on.highImagePreloads&&(on.highImagePreloads+=`, `),on.highImagePreloads+=sn):(nn=[],Ee(nn,{rel:`preload`,as:`image`,href:Qt?void 0:Zt,imageSrcSet:Qt,imageSizes:$t,crossOrigin:an,integrity:n.integrity,type:n.type,fetchPriority:n.fetchPriority,referrerPolicy:n.referrerPolicy}),n.fetchPriority===`high`||10>a.highImagePreloads.size?a.highImagePreloads.add(nn):(a.bulkPreloads.add(nn),tn.set(en,nn)))}}return q(e,n,`img`,c);case`base`:case`area`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`param`:case`source`:case`track`:case`wbr`:return q(e,n,t,c);case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:break;case`head`:if(2>c.insertionMode){var cn=o||a.preamble;if(cn.headChunks)throw Error(i(545,"`<head>`"));o!==null&&e.push(`<!--head-->`),cn.headChunks=[];var ln=Ae(cn.headChunks,n,`head`,c)}else ln=je(e,n,`head`,c);return ln;case`body`:if(2>c.insertionMode){var un=o||a.preamble;if(un.bodyChunks)throw Error(i(545,"`<body>`"));o!==null&&e.push(`<!--body-->`),un.bodyChunks=[];var dn=Ae(un.bodyChunks,n,`body`,c)}else dn=je(e,n,`body`,c);return dn;case`html`:if(c.insertionMode===0){var fn=o||a.preamble;if(fn.htmlChunks)throw Error(i(545,"`<html>`"));o!==null&&e.push(`<!--html-->`),fn.htmlChunks=[``];var pn=Ae(fn.htmlChunks,n,`html`,c)}else pn=je(e,n,`html`,c);return pn;default:if(t.indexOf(`-`)!==-1){e.push(Pe(t));var mn=null,hn=null,gn;for(gn in n)if(A.call(n,gn)){var _n=n[gn];if(_n!=null){var vn=gn;switch(gn){case`children`:mn=_n;break;case`dangerouslySetInnerHTML`:hn=_n;break;case`style`:he(e,_n);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`ref`:break;case`className`:vn=`class`;default:if(P(gn)&&typeof _n!=`function`&&typeof _n!=`symbol`&&!1!==_n){if(!0===_n)_n=``;else if(typeof _n==`object`)continue;e.push(` `,vn,`="`,R(_n),`"`)}}}}return pe(e,c),e.push(`>`),G(e,hn,mn),mn}}return je(e,n,t,c)}var Ie=new Map;function Le(e){var t=Ie.get(e);return t===void 0&&(t=`</`+e+`>`,Ie.set(e,t)),t}function Re(e,t){e=e.preamble,e.htmlChunks===null&&t.htmlChunks&&(e.htmlChunks=t.htmlChunks),e.headChunks===null&&t.headChunks&&(e.headChunks=t.headChunks),e.bodyChunks===null&&t.bodyChunks&&(e.bodyChunks=t.bodyChunks)}function ze(e,t){t=t.bootstrapChunks;for(var n=0;n<t.length-1;n++)e.push(t[n]);return n<t.length?(n=t[n],t.length=0,e.push(n)):!0}function Be(e,t,n){if(e.push(`<!--$?--><template id="`),n===null)throw Error(i(395));return e.push(t.boundaryPrefix),t=n.toString(16),e.push(t),e.push(`"></template>`)}function Ve(e,t,n,r){switch(n.insertionMode){case 0:case 1:case 3:case 2:return e.push(`<div hidden id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);case 4:return e.push(`<svg aria-hidden="true" style="display:none" id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);case 5:return e.push(`<math aria-hidden="true" style="display:none" id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);case 6:return e.push(`<table hidden id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);case 7:return e.push(`<table hidden><tbody id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);case 8:return e.push(`<table hidden><tr id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);case 9:return e.push(`<table hidden><colgroup id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);default:throw Error(i(397))}}function He(e,t){switch(t.insertionMode){case 0:case 1:case 3:case 2:return e.push(`</div>`);case 4:return e.push(`</svg>`);case 5:return e.push(`</math>`);case 6:return e.push(`</table>`);case 7:return e.push(`</tbody></table>`);case 8:return e.push(`</tr></table>`);case 9:return e.push(`</colgroup></table>`);default:throw Error(i(397))}}var Ue=/[<\u2028\u2029]/g;function We(e){return JSON.stringify(e).replace(Ue,function(e){switch(e){case`<`:return`\\u003c`;case`\u2028`:return`\\u2028`;case`\u2029`:return`\\u2029`;default:throw Error(`escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`)}})}var Ge=/[&><\u2028\u2029]/g;function Ke(e){return JSON.stringify(e).replace(Ge,function(e){switch(e){case`&`:return`\\u0026`;case`>`:return`\\u003e`;case`<`:return`\\u003c`;case`\u2028`:return`\\u2028`;case`\u2029`:return`\\u2029`;default:throw Error(`escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`)}})}var qe=!1,Je=!0;function Ye(e){var t=e.rules,n=e.hrefs,r=0;if(n.length){for(this.push(ie.startInlineStyle),this.push(` media="not all" data-precedence="`),this.push(e.precedence),this.push(`" data-href="`);r<n.length-1;r++)this.push(n[r]),this.push(` `);for(this.push(n[r]),this.push(`">`),r=0;r<t.length;r++)this.push(t[r]);Je=this.push(`</style>`),qe=!0,t.length=0,n.length=0}}function Xe(e){return e.state===2?!1:qe=!0}function Ze(e,t,n){return qe=!1,Je=!0,ie=n,t.styles.forEach(Ye,e),ie=null,t.stylesheets.forEach(Xe),qe&&(n.stylesToHoist=!0),Je}function Qe(e){for(var t=0;t<e.length;t++)this.push(e[t]);e.length=0}var $e=[];function et(e){Ee($e,e.props);for(var t=0;t<$e.length;t++)this.push($e[t]);$e.length=0,e.state=2}function tt(e){var t=0<e.sheets.size;e.sheets.forEach(et,this),e.sheets.clear();var n=e.rules,r=e.hrefs;if(!t||r.length){if(this.push(ie.startInlineStyle),this.push(` data-precedence="`),this.push(e.precedence),e=0,r.length){for(this.push(`" data-href="`);e<r.length-1;e++)this.push(r[e]),this.push(` `);this.push(r[e])}for(this.push(`">`),e=0;e<n.length;e++)this.push(n[e]);this.push(`</style>`),n.length=0,r.length=0}}function J(e){if(e.state===0){e.state=1;var t=e.props;for(Ee($e,{rel:`preload`,as:`style`,href:e.props.href,crossOrigin:t.crossOrigin,fetchPriority:t.fetchPriority,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy}),e=0;e<$e.length;e++)this.push($e[e]);$e.length=0}}function Y(e){e.sheets.forEach(J,this),e.sheets.clear()}function nt(e,t){!(t.instructions&32)&&(t.instructions|=32,e.push(` id="`,R(`_`+t.idPrefix+`R_`),`"`))}function rt(e,t){e.push(`[`);var n=`[`;t.stylesheets.forEach(function(t){if(t.state!==2){if(t.state===3)e.push(n),t=Ke(``+t.props.href),e.push(t),e.push(`]`),n=`,[`;else{e.push(n);var r=t.props[`data-precedence`],a=t.props,o=B(``+t.props.href);for(var s in o=Ke(o),e.push(o),r=``+r,e.push(`,`),r=Ke(r),e.push(r),a)if(A.call(a,s)&&(r=a[s],r!=null))switch(s){case`href`:case`rel`:case`precedence`:case`data-precedence`:break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(399,`link`));default:it(e,s,r)}e.push(`]`),n=`,[`,t.state=3}}}),e.push(`]`)}function it(e,t,n){var r=t.toLowerCase();switch(typeof n){case`function`:case`symbol`:return}switch(t){case`innerHTML`:case`dangerouslySetInnerHTML`:case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`style`:case`ref`:return;case`className`:r=`class`,t=``+n;break;case`hidden`:if(!1===n)return;t=``;break;case`src`:case`href`:n=B(n),t=``+n;break;default:if(2<t.length&&(t[0]===`o`||t[0]===`O`)&&(t[1]===`n`||t[1]===`N`)||!P(t))return;t=``+n}e.push(`,`),r=Ke(r),e.push(r),e.push(`,`),r=Ke(t),e.push(r)}function at(){return{styles:new Set,stylesheets:new Set,suspenseyImages:!1}}function ot(e){var t=Vn||null;if(t){var n=t.resumableState,r=t.renderState;if(typeof e==`string`&&e){if(!n.dnsResources.hasOwnProperty(e)){n.dnsResources[e]=null,n=r.headers;var i,a;(a=n&&0<n.remainingCapacity)&&(a=(i=`<`+(``+e).replace(ht,gt)+`>; rel=dns-prefetch`,0<=(n.remainingCapacity-=i.length+2))),a?(r.resets.dns[e]=null,n.preconnects&&(n.preconnects+=`, `),n.preconnects+=i):(i=[],Ee(i,{href:e,rel:`dns-prefetch`}),r.preconnects.add(i))}Lr(t)}}else U.D(e)}function st(e,t){var n=Vn||null;if(n){var r=n.resumableState,i=n.renderState;if(typeof e==`string`&&e){var a=t===`use-credentials`?`credentials`:typeof t==`string`?`anonymous`:`default`;if(!r.connectResources[a].hasOwnProperty(e)){r.connectResources[a][e]=null,r=i.headers;var o,s;if(s=r&&0<r.remainingCapacity){if(s=`<`+(``+e).replace(ht,gt)+`>; rel=preconnect`,typeof t==`string`){var c=(``+t).replace(_t,vt);s+=`; crossorigin="`+c+`"`}s=(o=s,0<=(r.remainingCapacity-=o.length+2))}s?(i.resets.connect[a][e]=null,r.preconnects&&(r.preconnects+=`, `),r.preconnects+=o):(a=[],Ee(a,{rel:`preconnect`,href:e,crossOrigin:t}),i.preconnects.add(a))}Lr(n)}}else U.C(e,t)}function ct(e,t,n){var r=Vn||null;if(r){var i=r.resumableState,a=r.renderState;if(t&&e){switch(t){case`image`:if(n)var o=n.imageSrcSet,s=n.imageSizes,c=n.fetchPriority;var l=o?o+`
`+(s||``):e;if(i.imageResources.hasOwnProperty(l))return;i.imageResources[l]=re,i=a.headers;var u;i&&0<i.remainingCapacity&&typeof o!=`string`&&c===`high`&&(u=mt(e,t,n),0<=(i.remainingCapacity-=u.length+2))?(a.resets.image[l]=re,i.highImagePreloads&&(i.highImagePreloads+=`, `),i.highImagePreloads+=u):(i=[],Ee(i,k({rel:`preload`,href:o?void 0:e,as:t},n)),c===`high`?a.highImagePreloads.add(i):(a.bulkPreloads.add(i),a.preloads.images.set(l,i)));break;case`style`:if(i.styleResources.hasOwnProperty(e))return;o=[],Ee(o,k({rel:`preload`,href:e,as:t},n)),i.styleResources[e]=!n||typeof n.crossOrigin!=`string`&&typeof n.integrity!=`string`?re:[n.crossOrigin,n.integrity],a.preloads.stylesheets.set(e,o),a.bulkPreloads.add(o);break;case`script`:if(i.scriptResources.hasOwnProperty(e))return;o=[],a.preloads.scripts.set(e,o),a.bulkPreloads.add(o),Ee(o,k({rel:`preload`,href:e,as:t},n)),i.scriptResources[e]=!n||typeof n.crossOrigin!=`string`&&typeof n.integrity!=`string`?re:[n.crossOrigin,n.integrity];break;default:if(i.unknownResources.hasOwnProperty(t)){if(o=i.unknownResources[t],o.hasOwnProperty(e))return}else o={},i.unknownResources[t]=o;if(o[e]=re,(i=a.headers)&&0<i.remainingCapacity&&t===`font`&&(l=mt(e,t,n),0<=(i.remainingCapacity-=l.length+2)))a.resets.font[e]=re,i.fontPreloads&&(i.fontPreloads+=`, `),i.fontPreloads+=l;else switch(i=[],e=k({rel:`preload`,href:e,as:t},n),Ee(i,e),t){case`font`:a.fontPreloads.add(i);break;default:a.bulkPreloads.add(i)}}Lr(r)}}else U.L(e,t,n)}function lt(e,t){var n=Vn||null;if(n){var r=n.resumableState,i=n.renderState;if(e){var a=t&&typeof t.as==`string`?t.as:`script`;switch(a){case`script`:if(r.moduleScriptResources.hasOwnProperty(e))return;a=[],r.moduleScriptResources[e]=!t||typeof t.crossOrigin!=`string`&&typeof t.integrity!=`string`?re:[t.crossOrigin,t.integrity],i.preloads.moduleScripts.set(e,a);break;default:if(r.moduleUnknownResources.hasOwnProperty(a)){var o=r.moduleUnknownResources[a];if(o.hasOwnProperty(e))return}else o={},r.moduleUnknownResources[a]=o;a=[],o[e]=re}Ee(a,k({rel:`modulepreload`,href:e},t)),i.bulkPreloads.add(a),Lr(n)}}else U.m(e,t)}function ut(e,t,n){var r=Vn||null;if(r){var i=r.resumableState,a=r.renderState;if(e){t||=`default`;var o=a.styles.get(t),s=i.styleResources.hasOwnProperty(e)?i.styleResources[e]:void 0;s!==null&&(i.styleResources[e]=null,o||(o={precedence:R(t),rules:[],hrefs:[],sheets:new Map},a.styles.set(t,o)),t={state:0,props:k({rel:`stylesheet`,href:e,"data-precedence":t},n)},s&&(s.length===2&&pt(t.props,s),(a=a.preloads.stylesheets.get(e))&&0<a.length?a.length=0:t.state=1),o.sheets.set(e,t),Lr(r))}}else U.S(e,t,n)}function dt(e,t){var n=Vn||null;if(n){var r=n.resumableState,i=n.renderState;if(e){var a=r.scriptResources.hasOwnProperty(e)?r.scriptResources[e]:void 0;a!==null&&(r.scriptResources[e]=null,t=k({src:e,async:!0},t),a&&(a.length===2&&pt(t,a),e=i.preloads.scripts.get(e))&&(e.length=0),e=[],i.scripts.add(e),ke(e,t),Lr(n))}}else U.X(e,t)}function ft(e,t){var n=Vn||null;if(n){var r=n.resumableState,i=n.renderState;if(e){var a=r.moduleScriptResources.hasOwnProperty(e)?r.moduleScriptResources[e]:void 0;a!==null&&(r.moduleScriptResources[e]=null,t=k({src:e,type:`module`,async:!0},t),a&&(a.length===2&&pt(t,a),e=i.preloads.moduleScripts.get(e))&&(e.length=0),e=[],i.scripts.add(e),ke(e,t),Lr(n))}}else U.M(e,t)}function pt(e,t){e.crossOrigin??=t[0],e.integrity??=t[1]}function mt(e,t,n){for(var r in e=(``+e).replace(ht,gt),t=(``+t).replace(_t,vt),t=`<`+e+`>; rel=preload; as="`+t+`"`,n)A.call(n,r)&&(e=n[r],typeof e==`string`&&(t+=`; `+r.toLowerCase()+`="`+(``+e).replace(_t,vt)+`"`));return t}var ht=/[<>\r\n]/g;function gt(e){switch(e){case`<`:return`%3C`;case`>`:return`%3E`;case`
`:return`%0A`;case`\r`:return`%0D`;default:throw Error(`escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`)}}var _t=/["';,\r\n]/g;function vt(e){switch(e){case`"`:return`%22`;case`'`:return`%27`;case`;`:return`%3B`;case`,`:return`%2C`;case`
`:return`%0A`;case`\r`:return`%0D`;default:throw Error(`escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`)}}function yt(e){this.styles.add(e)}function bt(e){this.stylesheets.add(e)}function xt(e,t){t.styles.forEach(yt,e),t.stylesheets.forEach(bt,e),t.suspenseyImages&&(e.suspenseyImages=!0)}function St(e,t){var n=e.idPrefix,r=[],i=e.bootstrapScriptContent,a=e.bootstrapScripts,o=e.bootstrapModules;i!==void 0&&(r.push(`<script`),nt(r,e),r.push(`>`,(``+i).replace(ae,oe),`<\/script>`)),i=n+`P:`;var s=n+`S:`;n+=`B:`;var c=new Set,l=new Set,u=new Set,d=new Map,f=new Set,p=new Set,m=new Set,h={images:new Map,stylesheets:new Map,scripts:new Map,moduleScripts:new Map};if(a!==void 0)for(var g=0;g<a.length;g++){var _=a[g],v,y=void 0,b=void 0,x={rel:`preload`,as:`script`,fetchPriority:`low`,nonce:void 0};typeof _==`string`?x.href=v=_:(x.href=v=_.src,x.integrity=b=typeof _.integrity==`string`?_.integrity:void 0,x.crossOrigin=y=typeof _==`string`||_.crossOrigin==null?void 0:_.crossOrigin===`use-credentials`?`use-credentials`:``),_=e;var S=v;_.scriptResources[S]=null,_.moduleScriptResources[S]=null,_=[],Ee(_,x),f.add(_),r.push(`<script src="`,R(v),`"`),typeof b==`string`&&r.push(` integrity="`,R(b),`"`),typeof y==`string`&&r.push(` crossorigin="`,R(y),`"`),nt(r,e),r.push(` async=""><\/script>`)}if(o!==void 0)for(a=0;a<o.length;a++)x=o[a],y=v=void 0,b={rel:`modulepreload`,fetchPriority:`low`,nonce:void 0},typeof x==`string`?b.href=g=x:(b.href=g=x.src,b.integrity=y=typeof x.integrity==`string`?x.integrity:void 0,b.crossOrigin=v=typeof x==`string`||x.crossOrigin==null?void 0:x.crossOrigin===`use-credentials`?`use-credentials`:``),x=e,_=g,x.scriptResources[_]=null,x.moduleScriptResources[_]=null,x=[],Ee(x,b),f.add(x),r.push(`<script type="module" src="`,R(g),`"`),typeof y==`string`&&r.push(` integrity="`,R(y),`"`),typeof v==`string`&&r.push(` crossorigin="`,R(v),`"`),nt(r,e),r.push(` async=""><\/script>`);return{placeholderPrefix:i,segmentPrefix:s,boundaryPrefix:n,startInlineScript:`<script`,startInlineStyle:`<style`,preamble:{htmlChunks:null,headChunks:null,bodyChunks:null},externalRuntimeScript:null,bootstrapChunks:r,importMapChunks:[],onHeaders:void 0,headers:null,resets:{font:{},dns:{},connect:{default:{},anonymous:{},credentials:{}},image:{},style:{}},charsetChunks:[],viewportChunks:[],hoistableChunks:[],preconnects:c,fontPreloads:l,highImagePreloads:u,styles:d,bootstrapScripts:f,scripts:p,bulkPreloads:m,preloads:h,nonce:{script:void 0,style:void 0},stylesToHoist:!1,generateStaticMarkup:t}}function Ct(e,t,n,r){return n.generateStaticMarkup?(e.push(R(t)),!1):(t===``?e=r:(r&&e.push(`<!-- -->`),e.push(R(t)),e=!0),e)}function wt(e,t,n,r){t.generateStaticMarkup||n&&r&&e.push(`<!-- -->`)}var Tt=Function.prototype.bind,Et=Symbol.for(`react.client.reference`);function Dt(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===Et?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case c:return`Fragment`;case u:return`Profiler`;case l:return`StrictMode`;case m:return`Suspense`;case h:return`SuspenseList`;case y:return`Activity`;case S:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case s:return`Portal`;case f:return e.displayName||`Context`;case d:return(e._context.displayName||`Context`)+`.Consumer`;case p:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case g:return t=e.displayName||null,t===null?Dt(e.type)||`Memo`:t;case _:t=e._payload,e=e._init;try{return Dt(e(t))}catch{}}return null}var Ot={},kt=null;function At(e,t){if(e!==t){e.context._currentValue2=e.parentValue,e=e.parent;var n=t.parent;if(e===null){if(n!==null)throw Error(i(401))}else{if(n===null)throw Error(i(401));At(e,n)}t.context._currentValue2=t.value}}function jt(e){e.context._currentValue2=e.parentValue,e=e.parent,e!==null&&jt(e)}function Mt(e){var t=e.parent;t!==null&&Mt(t),e.context._currentValue2=e.value}function X(e,t){if(e.context._currentValue2=e.parentValue,e=e.parent,e===null)throw Error(i(402));e.depth===t.depth?At(e,t):X(e,t)}function Nt(e,t){var n=t.parent;if(n===null)throw Error(i(402));e.depth===n.depth?At(e,n):Nt(e,n),t.context._currentValue2=t.value}function Z(e){var t=kt;t!==e&&(t===null?Mt(e):e===null?jt(t):t.depth===e.depth?At(t,e):t.depth>e.depth?X(t,e):Nt(t,e),kt=e)}var Pt={enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}},Ft={id:1,overflow:``};function Q(e){var t=e.overflow;return e=e.id,(e&~(1<<32-Lt(e)-1)).toString(32)+t}function It(e,t,n){var r=e.id;e=e.overflow;var i=32-Lt(r)-1;r&=~(1<<i),n+=1;var a=32-Lt(t)+i;if(30<a){var o=i-i%5;return a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,{id:1<<32-Lt(t)+i|n<<i|r,overflow:a+e}}return{id:1<<a|n<<i|r,overflow:e}}var Lt=Math.clz32?Math.clz32:Bt,Rt=Math.log,zt=Math.LN2;function Bt(e){return e>>>=0,e===0?32:31-(Rt(e)/zt|0)|0}function Vt(){}var Ht=Error(i(460));function Ut(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Vt,Vt),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,e===void 0&&!(`reason`in t)?Error(i(600)):e;default:switch(typeof t.status==`string`?t.then(Vt,Vt):(e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})),t.status){case`fulfilled`:return t.value;case`rejected`:throw t.reason}throw Wt=t,Ht}}var Wt=null;function Gt(){if(Wt===null)throw Error(i(459));var e=Wt;return Wt=null,e}function Kt(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var qt=typeof Object.is==`function`?Object.is:Kt,Jt=null,Yt=null,Xt=null,Zt=null,Qt=null,$t=null,en=!1,tn=!1,nn=0,rn=0,an=-1,on=0,sn=null;function cn(e){if(e=e._reason,typeof e==`function`)try{var t=e()}catch{t=`The reason for browser-only rendering could not be determined because its initializer threw.`}else t=e;return t=Error(i(603),e===void 0?void 0:{cause:t}),Object.defineProperty(t,C,{value:!0}),t}function ln(e){return typeof e!=`object`||!e?!1:!0===e[C]}function un(e){var t=Error(i(604),A.call(e,`cause`)?{cause:e.cause}:void 0);if(e=e.stack,e!==void 0){var n=e.indexOf(`
`);t.stack=t.name+`: `+t.message+(n===-1?``:e.slice(n))}else t.stack=void 0;return t}var dn=null,fn=0;function pn(){if(Jt===null)throw Error(i(321));return Jt}function mn(){if(0<fn)throw Error(i(312));return{memoizedState:null,queue:null,next:null}}function hn(){return $t===null?Qt===null?(en=!1,Qt=$t=mn()):(en=!0,$t=Qt):$t.next===null?(en=!1,$t=$t.next=mn()):(en=!0,$t=$t.next),$t}function gn(){var e=sn;return sn=null,e}function _n(){Zt=Xt=Yt=Jt=null,tn=!1,Qt=null,fn=0,$t=dn=null}function vn(e,t){return typeof t==`function`?t(e):t}function yn(e,t,n){if(Jt=pn(),$t=hn(),en){var r=$t.queue;if(t=r.dispatch,dn!==null&&(n=dn.get(r),n!==void 0)){dn.delete(r),r=$t.memoizedState;do r=e(r,n.action),n=n.next;while(n!==null);return $t.memoizedState=r,[r,t]}return[$t.memoizedState,t]}return e=e===vn?typeof t==`function`?t():t:n===void 0?t:n(t),$t.memoizedState=e,e=$t.queue={last:null,dispatch:null},e=e.dispatch=xn.bind(null,Jt,e),[$t.memoizedState,e]}function bn(e,t){if(Jt=pn(),$t=hn(),t=t===void 0?null:t,$t!==null){var n=$t.memoizedState;if(n!==null&&t!==null){var r=n[1];a:if(r===null)r=!1;else{for(var i=0;i<r.length&&i<t.length;i++)if(!qt(t[i],r[i])){r=!1;break a}r=!0}if(r)return n[0]}}return e=e(),$t.memoizedState=[e,t],e}function xn(e,t,n){if(25<=fn)throw Error(i(301));if(e===Jt){if(tn=!0,e={action:n,next:null},dn===null&&(dn=new Map),n=dn.get(t),n===void 0)dn.set(t,e);else{for(t=n;t.next!==null;)t=t.next;t.next=e}}}function Sn(){throw Error(i(440))}function Cn(){throw Error(i(394))}function wn(){throw Error(i(479))}function Tn(e,t,n){pn();var r=rn++,i=Xt;if(typeof e.$$FORM_ACTION==`function`){var a=null,o=Zt;i=i.formState;var s=e.$$IS_SIGNATURE_EQUAL;if(i!==null&&typeof s==`function`){var c=i[1];s.call(e,i[2],i[3])&&(a=n===void 0?`k`+O(JSON.stringify([o,null,r]),0):`p`+n,c===a&&(an=r,t=i[0]))}var l=e.bind(null,t);return e=function(e){l(e)},typeof l.$$FORM_ACTION==`function`&&(e.$$FORM_ACTION=function(e){e=l.$$FORM_ACTION(e),n!==void 0&&(n+=``,e.action=n);var t=e.data;return t&&(a===null&&(a=n===void 0?`k`+O(JSON.stringify([o,null,r]),0):`p`+n),t.append(`$ACTION_KEY`,a)),e}),[t,e,!1]}var u=e.bind(null,t);return[t,function(e){u(e)},!1]}function En(e){var t=on;return on+=1,sn===null&&(sn=[]),Ut(sn,e,t)}function Dn(){throw Error(i(393))}var On={readContext:function(e){return e._currentValue2},use:function(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return En(e);if(e.$$typeof===C)throw cn(e);if(e.$$typeof===f)return e._currentValue2}throw Error(i(438,String(e)))},useContext:function(e){return pn(),e._currentValue2},useMemo:bn,useReducer:yn,useRef:function(e){Jt=pn(),$t=hn();var t=$t.memoizedState;return t===null?(e={current:e},$t.memoizedState=e):t},useState:function(e){return yn(vn,e)},useInsertionEffect:Vt,useLayoutEffect:Vt,useCallback:function(e,t){return bn(function(){return e},t)},useImperativeHandle:Vt,useEffect:Vt,useDebugValue:Vt,useDeferredValue:function(e,t){return pn(),t===void 0?e:t},useTransition:function(){return pn(),[!1,Cn]},useId:function(){var e=Q(Yt.treeContext),t=kn;if(t===null)throw Error(i(404));return fe(t,e,nn++)},useSyncExternalStore:function(e,t,n){if(n===void 0)throw Error(i(407));return n()},useOptimistic:function(e){return pn(),[e,wn]},useActionState:Tn,useFormState:Tn,useHostTransitionStatus:function(){return pn(),ne},useMemoCache:function(e){for(var t=Array(e),n=0;n<e;n++)t[n]=x;return t},useCacheRefresh:function(){return Dn},useEffectEvent:function(){return Sn}},kn=null,An={getCacheForType:function(){throw Error(i(248))},cacheSignal:function(){throw Error(i(248))}},jn,Mn;function Nn(e){if(jn===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);jn=t&&t[1]||``,Mn=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+jn+e+Mn}var Pn=!1;function Fn(e,t){if(!e||Pn)return``;Pn=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Pn=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Nn(n):``}function In(e){if(typeof e==`string`)return Nn(e);if(typeof e==`function`)return e.prototype&&e.prototype.isReactComponent?Fn(e,!0):Fn(e,!1);if(typeof e==`object`&&e){switch(e.$$typeof){case p:return Fn(e.render,!1);case g:return Fn(e.type,!1);case _:var t=e,n=t._payload;t=t._init;try{e=t(n)}catch{return Nn(`Lazy`)}return In(e)}if(typeof e.name==`string`){a:{n=e.name,t=e.env;var r=e.debugLocation;if(r!=null&&(e=Error.prepareStackTrace,Error.prepareStackTrace=void 0,r=r.stack,Error.prepareStackTrace=e,r.startsWith(`Error: react-stack-top-frame
`)&&(r=r.slice(29)),e=r.indexOf(`
`),e!==-1&&(r=r.slice(e+1)),e=r.indexOf(`react_stack_bottom_frame`),e!==-1&&(e=r.lastIndexOf(`
`,e)),e=e===-1?``:r=r.slice(0,e),r=e.lastIndexOf(`
`),e=r===-1?e:e.slice(r+1),e.indexOf(n)!==-1)){n=`
`+e;break a}n=Nn(n+(t?` [`+t+`]`:``))}return n}}switch(e){case h:return Nn(`SuspenseList`);case m:return Nn(`Suspense`);case S:return Nn(`ViewTransition`)}return``}function Ln(e,t){return(500<t.byteSize||t.defer)&&t.preamble===null}function Rn(e){if(typeof e==`object`&&e&&typeof e.environmentName==`string`){var t=e.environmentName;e=[e].slice(0),typeof e[0]==`string`?e.splice(0,1,`[%s] `+e[0],` `+t+` `):e.splice(0,0,`[%s]`,` `+t+` `),e.unshift(console),t=Tt.apply(console.error,e),t()}else console.error(e);return null}function zn(e,t,n,r,i,a,o,s,c,l,u){var d=new Set;this.destination=null,this.flushScheduled=!1,this.resumableState=e,this.renderState=t,this.rootFormatContext=n,this.progressiveChunkSize=r===void 0?12800:r,this.status=10,this.fatalError=null,this.aborted=!1,this.pendingRootTasks=this.allPendingTasks=this.nextSegmentId=0,this.completedPreambleSegments=this.completedRootSegment=null,this.byteSize=0,this.abortableTasks=d,this.pingedTasks=[],this.currentTask=null,this.clientRenderedBoundaries=[],this.completedBoundaries=[],this.partialBoundaries=[],this.postponedState=this.trackedPostpones=null,this.onError=i===void 0?Rn:i,this.onBrowserBailout=a===void 0?Vt:a,this.onAllReady=o===void 0?Vt:o,this.onShellReady=s===void 0?Vt:s,this.onShellError=c===void 0?Vt:c,this.onFatalError=l===void 0?Vt:l,this.renderLifetimeController=null,this.formState=u===void 0?null:u}function Bn(e,t,n,r,i,a,o,s,c,l,u,d){return t=new zn(t,n,r,i,a,o,s,c,l,u,d),n=Kn(t,0,null,r,!1,!1),n.parentFlushed=!0,e=Wn(t,null,e,-1,null,n,null,null,t.abortableTasks,null,r,null,Ft,null,null),qn(e),t.pingedTasks.push(e),t}var Vn=null;function Hn(e,t){e.pingedTasks.push(t),e.pingedTasks.length===1&&(e.flushScheduled=e.destination!==null,Tr(e))}function Un(e,t,n,r,i){return n={status:0,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,row:t,completedSegments:[],byteSize:0,defer:i,fallbackAbortableTasks:n,errorDigest:null,contentState:at(),fallbackState:at(),preamble:r,tracked:null},t!==null&&(t.pendingTasks++,r=t.boundaries,r!==null&&(e.allPendingTasks++,n.pendingTasks++,r.push(n)),e=t.inheritedHoistables,e!==null&&xt(n.contentState,e)),n}function Wn(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){e.allPendingTasks++,i===null?e.pendingRootTasks++:i.pendingTasks++,p!==null&&p.pendingTasks++;var h={replay:null,node:n,childIndex:r,ping:{resolve:function(){return Hn(e,h)},reject:function(t){e.aborted?h.abortSet.delete(h)&&yr(h,e,t):Hn(e,h)}},blockedBoundary:i,blockedSegment:a,blockedPreamble:o,hoistableState:s,abortSet:c,keyPath:l,formatContext:u,context:d,treeContext:f,row:p,componentStack:m,thenableState:t};return c.add(h),h}function Gn(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.allPendingTasks++,a===null?e.pendingRootTasks++:a.pendingTasks++,f!==null&&f.pendingTasks++,n.pendingTasks++;var m={replay:n,node:r,childIndex:i,ping:{resolve:function(){return Hn(e,m)},reject:function(t){e.aborted?m.abortSet.delete(m)&&yr(m,e,t):Hn(e,m)}},blockedBoundary:a,blockedSegment:null,blockedPreamble:null,hoistableState:o,abortSet:s,keyPath:c,formatContext:l,context:u,treeContext:d,row:f,componentStack:p,thenableState:t};return s.add(m),m}function Kn(e,t,n,r,i,a){return{status:0,parentFlushed:!1,id:-1,index:t,chunks:[],children:[],preambleChildren:[],parentFormatContext:r,boundary:n,lastPushedText:i,textEmbedded:a}}function qn(e){var t=e.node;if(typeof t==`object`&&t)switch(t.$$typeof){case a:e.componentStack={parent:e.componentStack,type:t.type}}}function Jn(e){return e===null?null:{parent:e.parent,type:`Suspense Fallback`}}function Yn(e){var t={};return e&&Object.defineProperty(t,"componentStack",{configurable:!0,enumerable:!0,get:function(){try{var n=``,r=e;do n+=In(r.type),r=r.parent;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return Object.defineProperty(t,"componentStack",{value:i}),i}}),t}function Xn(e,t,n){if(ln(t))return e=e.onBrowserBailout,e(t,n),``;if(e=e.onError,t=e(t,n),t==null||typeof t==`string`)return t===``?void 0:t}function Zn(e,t){var n=e.onShellError,r=e.onFatalError;e.pendingRootTasks!==0&&n(t),r(t),Br(e),e.destination===null?(e.status=12,e.aborted||(e.fatalError=t)):(e.status=13,e.destination.destroy(t))}function Qn(e,t){$n(e,t.next,t.hoistables)}function $n(e,t,n){for(;t!==null;){n!==null&&(xt(t.hoistables,n),t.inheritedHoistables=n);var r=t.boundaries;if(r!==null){t.boundaries=null;for(var i=0;i<r.length;i++){var a=r[i];n!==null&&xt(a.contentState,n),wr(e,a,null,null)}}if(t.pendingTasks--,0<t.pendingTasks)break;n=t.hoistables,t=t.next}}function er(e,t){var n=t.boundaries;if(n!==null&&t.pendingTasks===n.length){for(var r=!0,i=0;i<n.length;i++){var a=n[i];if(a.pendingTasks!==1||a.parentFlushed||Ln(e,a)){r=!1;break}}r&&$n(e,t,t.hoistables)}}function tr(e){var t={pendingTasks:1,boundaries:null,hoistables:at(),inheritedHoistables:null,together:!1,next:null};return e!==null&&0<e.pendingTasks&&(t.pendingTasks++,t.boundaries=[],e.next=t),t}function nr(e,t,n,r,i){var a=t.keyPath,o=t.treeContext,s=t.row;t.keyPath=n,n=r.length;var c=null;if(t.replay!==null){var l=t.replay.slots;if(typeof l==`object`&&l)for(var u=0;u<n;u++){var d=i!==`backwards`&&i!==`unstable_legacy-backwards`?u:n-1-u,f=r[d];t.row=c=tr(c),t.treeContext=It(o,n,d);var p=l[d];typeof p==`number`?(or(e,t,p,f,d),delete l[d]):hr(e,t,f,d),--c.pendingTasks===0&&Qn(e,c)}else for(l=0;l<n;l++)u=i!==`backwards`&&i!==`unstable_legacy-backwards`?l:n-1-l,d=r[u],t.row=c=tr(c),t.treeContext=It(o,n,u),hr(e,t,d,u),--c.pendingTasks===0&&Qn(e,c)}else if(i!==`backwards`&&i!==`unstable_legacy-backwards`)for(i=0;i<n;i++)l=r[i],t.row=c=tr(c),t.treeContext=It(o,n,i),hr(e,t,l,i),--c.pendingTasks===0&&Qn(e,c);else{for(l=t.blockedSegment,u=l.children.length,d=l.chunks.length,f=0;f<n;f++){p=i===`unstable_legacy-backwards`?n-1-f:f;var m=r[p];t.row=c=tr(c),t.treeContext=It(o,n,p);var h=Kn(e,d,null,t.formatContext,p!==0||l.lastPushedText,!0);l.children.splice(u,0,h),t.blockedSegment=h;try{hr(e,t,m,p),wt(h.chunks,e.renderState,h.lastPushedText,h.textEmbedded),h.status=1,--c.pendingTasks===0&&Qn(e,c)}catch(t){throw h.status=e.aborted?3:4,t}}t.blockedSegment=l,l.lastPushedText=!1}s!==null&&c!==null&&0<c.pendingTasks&&(s.pendingTasks++,c.next=s),t.treeContext=o,t.row=s,t.keyPath=a}function rr(e,t,n,r,i,a){var o=t.thenableState;for(t.thenableState=null,Jt={},Yt=t,Xt=e,Zt=n,rn=nn=0,an=-1,on=0,sn=o,e=r(i,a);tn;)tn=!1,rn=nn=0,an=-1,on=0,fn+=1,$t=null,e=r(i,a);return _n(),e}function ir(e,t,n,r,i,a,o){var s=!1;if(a!==0&&e.formState!==null){var c=t.blockedSegment;if(c!==null){s=!0,c=c.chunks;for(var l=0;l<a;l++)l===o?c.push(`<!--F!-->`):c.push(`<!--F-->`)}}a=t.keyPath,t.keyPath=n,i?(n=t.treeContext,t.treeContext=It(n,1,0),hr(e,t,r,-1),t.treeContext=n):s?hr(e,t,r,-1):sr(e,t,r,-1),t.keyPath=a}function ar(e,t,n,r,a,o){if(typeof r==`function`){if(r.prototype&&r.prototype.isReactComponent){var s=a;if(`ref`in a)for(var x in s={},a)x!==`ref`&&(s[x]=a[x]);var C=r.defaultProps;if(C)for(var w in s===a&&(s=k({},s,a)),C)s[w]===void 0&&(s[w]=C[w]);var E=s,O=Ot,A=r.contextType;typeof A==`object`&&A&&(O=A._currentValue2);var j=new r(E,O),M=j.state===void 0?null:j.state;j.updater=Pt,j.props=E,j.state=M;var N={queue:[],replace:!1};j._reactInternals=N;var P=r.contextType;j.context=typeof P==`object`&&P?P._currentValue2:Ot;var F=r.getDerivedStateFromProps;if(typeof F==`function`){var I=F(E,M);j.state=I==null?M:k({},M,I)}if(typeof r.getDerivedStateFromProps!=`function`&&typeof j.getSnapshotBeforeUpdate!=`function`&&(typeof j.UNSAFE_componentWillMount==`function`||typeof j.componentWillMount==`function`)){var L=j.state;if(typeof j.componentWillMount==`function`&&j.componentWillMount(),typeof j.UNSAFE_componentWillMount==`function`&&j.UNSAFE_componentWillMount(),L!==j.state&&Pt.enqueueReplaceState(j,j.state,null),N.queue!==null&&0<N.queue.length){var R=N.queue,ee=N.replace;if(N.queue=null,N.replace=!1,ee&&R.length===1)j.state=R[0];else{for(var te=ee?R[0]:j.state,z=!0,B=+!!ee;B<R.length;B++){var V=R[B],H=typeof V==`function`?V.call(j,te,E,void 0):V;H!=null&&(z?(z=!1,te=k({},te,H)):k(te,H))}j.state=te}}else N.queue=null}var ne=j.render();if(e.aborted)throw null;var U=t.keyPath;t.keyPath=n,sr(e,t,ne,-1),t.keyPath=U}else{var re=rr(e,t,n,r,a,void 0);if(e.aborted)throw null;ir(e,t,n,re,nn!==0,rn,an)}}else if(typeof r==`string`){var ie=t.blockedSegment;if(ie===null){var ae=a.children,oe=t.formatContext,se=t.keyPath;t.formatContext=le(oe,r,a),t.keyPath=n,hr(e,t,ae,-1),t.formatContext=oe,t.keyPath=se}else{var ce=Fe(ie.chunks,r,a,e.resumableState,e.renderState,t.blockedPreamble,t.hoistableState,t.formatContext,ie.lastPushedText);ie.lastPushedText=!1;var W=t.formatContext,pe=t.keyPath;if(t.keyPath=n,(t.formatContext=le(W,r,a)).insertionMode===3){var me=Kn(e,0,null,t.formatContext,!1,!1);ie.preambleChildren.push(me),t.blockedSegment=me;try{hr(e,t,ce,-1),wt(me.chunks,e.renderState,me.lastPushedText,me.textEmbedded),me.status=1}finally{t.blockedSegment=ie}}else hr(e,t,ce,-1);t.formatContext=W,t.keyPath=pe;a:{var he=ie.chunks,ge=e.resumableState;switch(r){case`title`:case`style`:case`script`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`img`:case`input`:case`keygen`:case`link`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:break a;case`body`:if(1>=W.insertionMode){ge.hasBody=!0;break a}break;case`html`:if(W.insertionMode===0){ge.hasHtml=!0;break a}break;case`head`:if(1>=W.insertionMode)break a}he.push(Le(r))}ie.lastPushedText=!1}}else{switch(r){case b:case l:case u:case c:var _e=t.keyPath;t.keyPath=n,sr(e,t,a.children,-1),t.keyPath=_e;return;case y:var ve=t.blockedSegment;if(ve===null){if(a.mode!==`hidden`){var ye=t.keyPath;t.keyPath=n,hr(e,t,a.children,-1),t.keyPath=ye}}else if(a.mode!==`hidden`){e.renderState.generateStaticMarkup||ve.chunks.push(`<!--&-->`),ve.lastPushedText=!1;var be=t.keyPath;t.keyPath=n,hr(e,t,a.children,-1),t.keyPath=be,e.renderState.generateStaticMarkup||ve.chunks.push(`<!--/&-->`),ve.lastPushedText=!1}return;case h:a:{var xe=a.children,Se=a.revealOrder;if(Se!==`independent`&&Se!==`together`){if(D(xe)){nr(e,t,n,xe,Se);break a}var Ce=T(xe);if(Ce){var G=Ce.call(xe);if(G){var we=G.next();if(!we.done){do we=G.next();while(!we.done);nr(e,t,n,xe,Se)}break a}}}if(Se===`together`){var Te=t.keyPath,Ee=t.row,K=t.row=tr(null);K.boundaries=[],K.together=!0,t.keyPath=n,sr(e,t,xe,-1),--K.pendingTasks===0&&Qn(e,K),t.keyPath=Te,t.row=Ee,Ee!==null&&0<K.pendingTasks&&(Ee.pendingTasks++,K.next=Ee)}else{var De=t.keyPath;t.keyPath=n,sr(e,t,xe,-1),t.keyPath=De}}return;case S:var q=t.formatContext,Oe=t.keyPath,ke=e.resumableState;if((a.name==null||a.name===`auto`)&&fe(ke,Q(t.treeContext),0),t.formatContext=q,t.keyPath=n,a.name!=null&&a.name!==`auto`)sr(e,t,a.children,-1);else{var Ae=t.treeContext;t.treeContext=It(Ae,1,0),hr(e,t,a.children,-1),t.treeContext=Ae}t.formatContext=q,t.keyPath=Oe;return;case v:throw Error(i(343));case m:a:if(t.replay!==null){var je=t.keyPath,Me=t.formatContext,Ne=t.row;t.keyPath=n,t.formatContext=de(e.resumableState,Me),t.row=null;var Pe=a.children;try{hr(e,t,Pe,-1)}finally{t.keyPath=je,t.formatContext=Me,t.row=Ne}}else{var Ie=t.keyPath,Re=t.formatContext,ze=t.row,Be=t.blockedBoundary,Ve=t.blockedPreamble,He=t.hoistableState,Ue=t.blockedSegment,We=a.fallback,Ge=a.children,Ke=new Set,qe=Un(e,t.row,Ke,null,!1),Je=Kn(e,Ue.chunks.length,qe,t.formatContext,!1,!1);Ue.children.push(Je),Ue.lastPushedText=!1;var Ye=Kn(e,0,null,t.formatContext,!1,!1);Ye.parentFlushed=!0;var Xe=e.trackedPostpones;if(Xe!==null){var Ze=t.componentStack,Qe=[n[0],`Suspense Fallback`,n[2]];if(Xe!==null){var $e=[Qe[1],Qe[2],[],null];Xe.workingMap.set(Qe,$e),qe.tracked={contentKeyPath:n,fallbackNode:$e}}t.blockedSegment=Je,t.blockedPreamble=qe.preamble===null?null:qe.preamble.fallback,t.keyPath=Qe,t.formatContext=ue(e.resumableState,Re),t.componentStack=Jn(Ze);try{hr(e,t,We,-1),wt(Je.chunks,e.renderState,Je.lastPushedText,Je.textEmbedded),Je.status=1}catch(t){throw Je.status=e.aborted?3:4,t}finally{t.blockedSegment=Ue,t.blockedPreamble=Ve,t.keyPath=Ie,t.formatContext=Re}var et=Wn(e,null,Ge,-1,qe,Ye,qe.preamble===null?null:qe.preamble.content,qe.contentState,t.abortSet,n,de(e.resumableState,t.formatContext),t.context,t.treeContext,null,Ze);qn(et),e.pingedTasks.push(et)}else{t.blockedBoundary=qe,t.blockedPreamble=qe.preamble===null?null:qe.preamble.content,t.hoistableState=qe.contentState,t.blockedSegment=Ye,t.keyPath=n,t.formatContext=de(e.resumableState,Re),t.row=null;try{if(hr(e,t,Ge,-1),wt(Ye.chunks,e.renderState,Ye.lastPushedText,Ye.textEmbedded),Ye.status=1,Cr(qe,Ye),qe.pendingTasks===0&&qe.status===0){if(qe.status=1,!Ln(e,qe)){ze!==null&&--ze.pendingTasks===0&&Qn(e,ze),e.pendingRootTasks===0&&t.blockedPreamble&&Or(e);break a}}else ze!==null&&ze.together&&er(e,ze)}catch(n){if(qe.status=4,e.aborted){Ye.status=3;var tt=e.fatalError}else Ye.status=4,tt=n;var J=Yn(t.componentStack);qe.errorDigest=Xn(e,tt,J),fr(e,qe)}finally{t.blockedBoundary=Be,t.blockedPreamble=Ve,t.hoistableState=He,t.blockedSegment=Ue,t.keyPath=Ie,t.formatContext=Re,t.row=ze}var Y=Wn(e,null,We,-1,Be,Je,qe.preamble===null?null:qe.preamble.fallback,qe.fallbackState,Ke,[n[0],`Suspense Fallback`,n[2]],ue(e.resumableState,t.formatContext),t.context,t.treeContext,t.row,Jn(t.componentStack));qn(Y),e.pingedTasks.push(Y)}}return}if(typeof r==`object`&&r)switch(r.$$typeof){case p:if(`ref`in a){var nt={};for(var rt in a)rt!==`ref`&&(nt[rt]=a[rt])}else nt=a;ir(e,t,n,rr(e,t,n,r.render,nt,o),nn!==0,rn,an);return;case g:ar(e,t,n,r.type,a,o);return;case f:var it=a.children,at=t.keyPath,ot=a.value,st=r._currentValue2;r._currentValue2=ot;var ct=kt,lt={parent:ct,depth:ct===null?0:ct.depth+1,context:r,parentValue:st,value:ot};kt=lt,t.context=lt,t.keyPath=n,sr(e,t,it,-1);var ut=kt;if(ut===null)throw Error(i(403));ut.context._currentValue2=ut.parentValue,t.context=kt=ut.parent,t.keyPath=at;return;case d:var dt=a.children,ft=dt(r._context._currentValue2),pt=t.keyPath;t.keyPath=n,sr(e,t,ft,-1),t.keyPath=pt;return;case _:var mt=r._init,ht=mt(r._payload);if(e.aborted)throw null;ar(e,t,n,ht,a,o);return}throw Error(i(130,r==null?r:typeof r,``))}}function or(e,t,n,r,i){var a=t.replay,o=t.blockedBoundary,s=Kn(e,0,null,t.formatContext,!1,!1);s.id=n,s.parentFlushed=!0;try{t.replay=null,t.blockedSegment=s,hr(e,t,r,i),s.status=1,o===null?e.completedRootSegment=s:(Cr(o,s),o.parentFlushed&&e.partialBoundaries.push(o))}finally{t.replay=a,t.blockedSegment=null}}function sr(e,t,n,r){t.replay!==null&&typeof t.replay.slots==`number`?or(e,t,t.replay.slots,n,r):(t.node=n,t.childIndex=r,n=t.componentStack,qn(t),cr(e,t),t.componentStack=n)}function cr(e,t){var n=t.node,r=t.childIndex;if(n!==null){if(typeof n==`object`){switch(n.$$typeof){case a:var o=n.type,c=n.key,l=n.props;n=l.ref;var u=n===void 0?null:n,d=Dt(o),p=c==null||c===E?r===-1?0:r:c;if(c=[t.keyPath,d,p],t.replay!==null)a:{var h=t.replay;for(r=h.nodes,n=0;n<r.length;n++){var g=r[n];if(p===g[1]){if(g.length===4){if(d!==null&&d!==g[0])throw Error(i(490,g[0],d));var v=g[2],y=g[3],b=t.node;t.replay={nodes:v,slots:y,pendingTasks:1};try{if(ar(e,t,c,o,l,u),t.replay.pendingTasks===1&&0<t.replay.nodes.length)throw Error(i(488));t.replay.pendingTasks--}catch(i){if(typeof i==`object`&&i&&(i===Ht||typeof i.then==`function`||i.message===`Maximum call stack size exceeded`))throw t.node===b?t.replay=h:r.splice(n,1),i;t.replay.pendingTasks--,c=Yn(t.componentStack),b=e,l=t.blockedBoundary,e=e.aborted?e.fatalError:i,c=Xn(b,e,c),_r(b,l,v,y,e,c)}t.replay=h}else{if(o!==m)throw Error(i(490,`Suspense`,Dt(o)||`Unknown`));b:{h=g[5],o=g[2],u=g[3],d=g[4]===null?[]:g[4][2],g=g[4]===null?null:g[4][3],p=t.keyPath;var x=t.formatContext,S=t.row,C=t.replay,w=t.blockedBoundary,O=t.hoistableState,k=l.children;l=l.fallback;var A=new Set,j=Un(e,t.row,A,null,!1);j.parentFlushed=!0,j.rootSegmentID=h,t.blockedBoundary=j,t.hoistableState=j.contentState,t.keyPath=c,t.formatContext=de(e.resumableState,x),t.row=null,t.replay={nodes:o,slots:u,pendingTasks:1};try{if(hr(e,t,k,-1),t.replay.pendingTasks===1&&0<t.replay.nodes.length)throw Error(i(488));if(t.replay.pendingTasks--,j.pendingTasks===0&&j.status===0){j.status=1,e.completedBoundaries.push(j);break b}}catch(n){j.status=4,v=e.aborted?e.fatalError:n,y=Yn(t.componentStack),b=Xn(e,v,y),j.errorDigest=b,t.replay.pendingTasks--,e.clientRenderedBoundaries.push(j)}finally{t.blockedBoundary=w,t.hoistableState=O,t.replay=C,t.keyPath=p,t.formatContext=x,t.row=S}v=Gn(e,null,{nodes:d,slots:g,pendingTasks:0},l,-1,w,j.fallbackState,A,[c[0],`Suspense Fallback`,c[2]],ue(e.resumableState,t.formatContext),t.context,t.treeContext,t.row,Jn(t.componentStack)),qn(v),e.pingedTasks.push(v)}}r.splice(n,1);break a}}}else ar(e,t,c,o,l,u);return;case s:throw Error(i(257));case _:if(v=n._init,n=v(n._payload),e.aborted)throw null;sr(e,t,n,r);return}if(D(n)){lr(e,t,n,r);return}if((v=T(n))&&(v=v.call(n))){if(n=v.next(),!n.done){y=[];do y.push(n.value),n=v.next();while(!n.done);lr(e,t,y,r)}return}if(typeof n.then==`function`)return t.thenableState=null,sr(e,t,En(n),r);if(n.$$typeof===f)return sr(e,t,n._currentValue2,r);throw r=Object.prototype.toString.call(n),Error(i(31,r===`[object Object]`?`object with keys {`+Object.keys(n).join(`, `)+`}`:r))}typeof n==`string`?(r=t.blockedSegment,r!==null&&(r.lastPushedText=Ct(r.chunks,n,e.renderState,r.lastPushedText))):(typeof n==`number`||typeof n==`bigint`)&&(r=t.blockedSegment,r!==null&&(r.lastPushedText=Ct(r.chunks,``+n,e.renderState,r.lastPushedText)))}}function lr(e,t,n,r){var a=t.keyPath;if(r!==-1&&(t.keyPath=[t.keyPath,`Fragment`,r],t.replay!==null)){for(var o=t.replay,s=o.nodes,c=0;c<s.length;c++){var l=s[c];if(l[1]===r){r=l[2],l=l[3],t.replay={nodes:r,slots:l,pendingTasks:1};try{if(lr(e,t,n,-1),t.replay.pendingTasks===1&&0<t.replay.nodes.length)throw Error(i(488));t.replay.pendingTasks--}catch(i){if(typeof i==`object`&&i&&(i===Ht||typeof i.then==`function`))throw i;t.replay.pendingTasks--;var u=Yn(t.componentStack);n=e;var d=t.blockedBoundary;e=e.aborted?e.fatalError:i,u=Xn(n,e,u),_r(n,d,r,l,e,u)}t.replay=o,s.splice(c,1);break}}t.keyPath=a;return}if(o=t.treeContext,s=n.length,t.replay!==null&&(c=t.replay.slots,typeof c==`object`&&c)){for(r=0;r<s;r++)l=n[r],t.treeContext=It(o,s,r),d=c[r],typeof d==`number`?(or(e,t,d,l,r),delete c[r]):hr(e,t,l,r);t.treeContext=o,t.keyPath=a;return}for(c=0;c<s;c++)r=n[c],t.treeContext=It(o,s,c),hr(e,t,r,c);t.treeContext=o,t.keyPath=a}function ur(e,t,n){n.status=5,n.rootSegmentID=e.nextSegmentId++;var r=n.tracked;if(r===null||(e=r.contentKeyPath,e===null))throw Error(i(486));r=r.fallbackNode;var a=[],o=t.workingMap.get(e);return o===void 0?(n=[e[1],e[2],a,null,r,n.rootSegmentID],t.workingMap.set(e,n),Hr(n,e[0],t),n):(o[4]=r,o[5]=n.rootSegmentID,o)}function dr(e,t,n,r){r.status=5;var a=n.keyPath,o=n.blockedBoundary;if(o===null)r.id=e.nextSegmentId++,t.rootSlots=r.id,e.completedRootSegment!==null&&(e.completedRootSegment.status=5);else{if(o!==null&&o.status===0){var s=ur(e,t,o);if(o.tracked!==null&&o.tracked.contentKeyPath===a&&n.childIndex===-1){r.id===-1&&(r.id=r.parentFlushed?o.rootSegmentID:e.nextSegmentId++),s[3]=r.id;return}}if(r.id===-1&&(r.id=r.parentFlushed&&o!==null?o.rootSegmentID:e.nextSegmentId++),n.childIndex===-1)a===null?t.rootSlots=r.id:(n=t.workingMap.get(a),n===void 0?(n=[a[1],a[2],[],r.id],Hr(n,a[0],t)):n[3]=r.id);else{if(a===null){if(e=t.rootSlots,e===null)e=t.rootSlots={};else if(typeof e==`number`)throw Error(i(491))}else if(o=t.workingMap,s=o.get(a),s===void 0)e={},s=[a[1],a[2],[],e],o.set(a,s),Hr(s,a[0],t);else if(e=s[3],e===null)e=s[3]={};else if(typeof e==`number`)throw Error(i(491));e[n.childIndex]=r.id}}}function fr(e,t){e=e.trackedPostpones,e!==null&&(t=t.tracked,t!==null&&(t=t.contentKeyPath,t!==null&&(e=e.workingMap.get(t),e!==void 0&&(e.length=4,e[2]=[],e[3]=null))))}function pr(e,t,n){return Gn(e,n,t.replay,t.node,t.childIndex,t.blockedBoundary,t.hoistableState,t.abortSet,t.keyPath,t.formatContext,t.context,t.treeContext,t.row,t.componentStack)}function mr(e,t,n){var r=t.blockedSegment,i=Kn(e,r.chunks.length,null,t.formatContext,r.lastPushedText,!0);return r.children.push(i),r.lastPushedText=!1,Wn(e,n,t.node,t.childIndex,t.blockedBoundary,i,t.blockedPreamble,t.hoistableState,t.abortSet,t.keyPath,t.formatContext,t.context,t.treeContext,t.row,t.componentStack)}function hr(e,t,n,r){var i=t.formatContext,a=t.context,o=t.keyPath,s=t.treeContext,c=t.componentStack,l=t.blockedSegment;if(l===null){l=t.replay;try{return sr(e,t,n,r)}catch(u){if(_n(),n=u===Ht?Gt():u,!e.aborted&&typeof n==`object`&&n){if(typeof n.then==`function`){r=u===Ht?gn():null,e=pr(e,t,r).ping,n.then(e.resolve,e.reject),t.formatContext=i,t.context=a,t.keyPath=o,t.treeContext=s,t.componentStack=c,t.replay=l,Z(a);return}if(n.message===`Maximum call stack size exceeded`){n=u===Ht?gn():null,n=pr(e,t,n),e.pingedTasks.push(n),t.formatContext=i,t.context=a,t.keyPath=o,t.treeContext=s,t.componentStack=c,t.replay=l,Z(a);return}}}}else{var u=l.children.length,d=l.chunks.length;try{return sr(e,t,n,r)}catch(r){if(_n(),l.children.length=u,l.chunks.length=d,n=r===Ht?Gt():r,!e.aborted&&typeof n==`object`&&n){if(typeof n.then==`function`){l=n,n=r===Ht?gn():null,e=mr(e,t,n).ping,l.then(e.resolve,e.reject),t.formatContext=i,t.context=a,t.keyPath=o,t.treeContext=s,t.componentStack=c,Z(a);return}if(n.message===`Maximum call stack size exceeded`){l=r===Ht?gn():null,l=mr(e,t,l),e.pingedTasks.push(l),t.formatContext=i,t.context=a,t.keyPath=o,t.treeContext=s,t.componentStack=c,Z(a);return}}}}throw t.formatContext=i,t.context=a,t.keyPath=o,t.treeContext=s,Z(a),n}function gr(e){var t=e.blockedBoundary,n=e.blockedSegment;n!==null&&(n.status=3,wr(this,t,e.row,n))}function _r(e,t,n,r,a,o){for(var s=0;s<n.length;s++){var c=n[s];if(c.length===4)_r(e,t,c[2],c[3],a,o);else{c=c[5];var l=e,u=o,d=Un(l,null,new Set,null,!1);d.parentFlushed=!0,d.rootSegmentID=c,d.status=4,d.errorDigest=u,d.parentFlushed&&l.clientRenderedBoundaries.push(d)}}if(n.length=0,r!==null){if(t===null)throw Error(i(487));if(t.status!==4&&(t.status=4,t.errorDigest=o,t.parentFlushed&&e.clientRenderedBoundaries.push(t)),typeof r==`object`)for(var f in r)delete r[f]}}function vr(e,t){if(e!==t.currentTask){var n=e.blockedBoundary;e=e.blockedSegment,e!==null&&(e.status=3),n!==null&&n.fallbackAbortableTasks.forEach(function(e){return vr(e,t)})}}function yr(e,t,n){if(e!==t.currentTask){var r=e.blockedBoundary,i=e.blockedSegment;if(i===null||i.status===3){var a=Yn(e.componentStack),o=ln(n);if(r===null){if(r=e.replay,r===null){o||t.trackedPostpones===null||i===null?o?(e=un(n),Xn(t,e,a),t.status!==12&&t.status!==13&&Zn(t,e)):(Xn(t,n,a),t.status!==12&&t.status!==13&&Zn(t,n)):(r=t.trackedPostpones,Xn(t,n,a),dr(t,r,e,i),wr(t,null,e.row,i));return}t.status!==12&&t.status!==13&&(r.pendingTasks--,r.pendingTasks===0&&0<r.nodes.length&&(a=Xn(t,n,a),_r(t,null,r.nodes,r.slots,n,a)),t.pendingRootTasks--,t.pendingRootTasks===0&&xr(t))}else{var s=t.trackedPostpones;if(r.status!==4){if(!o&&s!==null&&i!==null)return Xn(t,n,a),dr(t,s,e,i),r.fallbackAbortableTasks.forEach(function(e){return yr(e,t,n)}),r.fallbackAbortableTasks.clear(),wr(t,r,e.row,i);r.status=4,a=Xn(t,n,a),r.errorDigest=a,fr(t,r),r.parentFlushed&&t.clientRenderedBoundaries.push(r)}r.pendingTasks--,a=r.row,a!==null&&--a.pendingTasks===0&&Qn(t,a),r.fallbackAbortableTasks.forEach(function(e){return yr(e,t,n)}),r.fallbackAbortableTasks.clear()}e=e.row,e!==null&&--e.pendingTasks===0&&Qn(t,e),t.allPendingTasks--,t.allPendingTasks===0&&Sr(t)}}}function br(e,t){try{var n=e.renderState,r=n.onHeaders;if(r){var i=n.headers;if(i){n.headers=null;var a=i.preconnects;if(i.fontPreloads&&(a&&(a+=`, `),a+=i.fontPreloads),i.highImagePreloads&&(a&&(a+=`, `),a+=i.highImagePreloads),!t){var o=n.styles.values(),s=o.next();b:for(;0<i.remainingCapacity&&!s.done;s=o.next())for(var c=s.value.sheets.values(),l=c.next();0<i.remainingCapacity&&!l.done;l=c.next()){var u=l.value,d=u.props,f=d.href,p=u.props,m=mt(p.href,`style`,{crossOrigin:p.crossOrigin,integrity:p.integrity,nonce:p.nonce,type:p.type,fetchPriority:p.fetchPriority,referrerPolicy:p.referrerPolicy,media:p.media});if(0<=(i.remainingCapacity-=m.length+2))n.resets.style[f]=re,a&&(a+=`, `),a+=m,n.resets.style[f]=typeof d.crossOrigin==`string`||typeof d.integrity==`string`?[d.crossOrigin,d.integrity]:re;else break b}}r(a?{Link:a}:{})}}}catch(t){Xn(e,t,{})}}function xr(e){e.trackedPostpones===null&&br(e,!0),e.trackedPostpones===null&&Or(e),e=e.onShellReady,e()}function Sr(e){br(e,e.trackedPostpones===null||e.completedRootSegment===null||e.completedRootSegment.status!==5),Or(e),e=e.onAllReady,e()}function Cr(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null&&t.children[0].id===-1){var n=t.children[0];n.id=t.id,n.parentFlushed=!0,n.status!==1&&n.status!==3&&n.status!==4||Cr(e,n)}else e.completedSegments.push(t)}function wr(e,t,n,r){if(n!==null&&(--n.pendingTasks===0?Qn(e,n):n.together&&er(e,n)),e.allPendingTasks--,t===null){if(r!==null&&r.parentFlushed){if(e.completedRootSegment!==null)throw Error(i(389));e.completedRootSegment=r}e.pendingRootTasks--,e.pendingRootTasks===0&&xr(e)}else if(t.pendingTasks--,t.status!==4){if(t.pendingTasks===0){if(t.status===0&&(t.status=1),r!==null&&r.parentFlushed&&(r.status===1||r.status===3)&&Cr(t,r),t.parentFlushed&&e.completedBoundaries.push(t),t.status===1)n=t.row,n!==null&&xt(n.hoistables,t.contentState),Ln(e,t)||(e.allPendingTasks++,t.fallbackAbortableTasks.forEach(gr,e),t.fallbackAbortableTasks.clear(),n!==null&&--n.pendingTasks===0&&Qn(e,n),e.allPendingTasks--),e.pendingRootTasks===0&&e.trackedPostpones===null&&t.preamble!==null&&Or(e);else if(t.status===5&&(t=t.row,t!==null)){if(e.trackedPostpones!==null){n=e.trackedPostpones;var a=t.next;if(a!==null&&(r=a.boundaries,r!==null))for(a.boundaries=null,a=0;a<r.length;a++){var o=r[a];ur(e,n,o),wr(e,o,null,null)}}e.allPendingTasks++,--t.pendingTasks===0&&Qn(e,t),e.allPendingTasks--}}else r===null||!r.parentFlushed||r.status!==1&&r.status!==3||(Cr(t,r),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)),t=t.row,t!==null&&t.together&&er(e,t)}e.allPendingTasks===0&&Sr(e)}function Tr(e){if(!(e.aborted||11<e.status)){var t=kt,n=V.H;V.H=On;var r=V.A;V.A=An;var a=Vn;Vn=e;var o=kn;kn=e.resumableState;try{for(var s=e.pingedTasks,c=0;c<s.length;c++){var l=s[c],u=e,d=l.blockedSegment;if(d===null){a:if(l.replay.pendingTasks!==0){var f=u.currentTask;u.currentTask=l,Z(l.context);var p=l.node;try{if(typeof l.replay.slots==`number`?or(u,l,l.replay.slots,l.node,l.childIndex):cr(u,l),l.replay.pendingTasks===1&&0<l.replay.nodes.length)throw Error(i(488));l.replay.pendingTasks--,l.abortSet.delete(l),wr(u,l.blockedBoundary,l.row,null)}catch(e){_n();var m=e===Ht?Gt():e;if(u.aborted){e===Ht&&(l.thenableState=gn()),u.currentTask=f;var h=u;vr(l,h),l.abortSet.delete(l),yr(l,h,h.fatalError)}else{if(typeof m==`object`&&m){if(typeof m.then==`function`){var g=l.ping;m.then(g.resolve,g.reject),l.thenableState=e===Ht?gn():null;break a}if(m.message===`Maximum call stack size exceeded`&&l.node!==p){l.thenableState=null,u.pingedTasks.push(l);break a}}l.replay.pendingTasks--,l.abortSet.delete(l);var _=Yn(l.componentStack);h=u;var v=l.blockedBoundary,y=u.aborted?u.fatalError:m,b=l.replay.nodes,x=l.replay.slots,S=Xn(h,y,_);_r(h,v,b,x,y,S),u.pendingRootTasks--,u.pendingRootTasks===0&&xr(u),u.allPendingTasks--,u.allPendingTasks===0&&Sr(u)}}finally{u.currentTask=f}}}else a:if(h=d,h.status===0){var C=u.currentTask;u.currentTask=l,Z(l.context);var w=h.children.length,T=h.chunks.length,E=l.node;try{cr(u,l),wt(h.chunks,u.renderState,h.lastPushedText,h.textEmbedded),l.abortSet.delete(l),h.status=1,wr(u,l.blockedBoundary,l.row,h)}catch(e){_n(),h.children.length=w,h.chunks.length=T;var D=e===Ht?Gt():e;if(u.aborted)e===Ht&&(l.thenableState=gn()),u.currentTask=C,h=u,vr(l,h),l.abortSet.delete(l),yr(l,h,h.fatalError);else{if(typeof D==`object`&&D){if(typeof D.then==`function`){h.status=0,l.thenableState=e===Ht?gn():null;var O=l.ping;D.then(O.resolve,O.reject);break a}if(D.message===`Maximum call stack size exceeded`&&l.node!==E){h.status=0,l.thenableState=null,u.pingedTasks.push(l);break a}}var k=Yn(l.componentStack);l.abortSet.delete(l),h.status=4;var A=l.blockedBoundary,j=l.row;if(j!==null&&--j.pendingTasks===0&&Qn(u,j),u.allPendingTasks--,A===null){if(ln(D)){var M=un(D);Xn(u,M,k),Zn(u,M)}else Xn(u,D,k),Zn(u,D)}else{var N=Xn(u,D,k);if(A.pendingTasks--,A.status!==4){A.status=4,A.errorDigest=N,fr(u,A);var P=A.row;P!==null&&(u.allPendingTasks++,--P.pendingTasks===0&&Qn(u,P),u.allPendingTasks--),A.parentFlushed&&u.clientRenderedBoundaries.push(A),u.pendingRootTasks===0&&u.trackedPostpones===null&&A.preamble!==null&&Or(u)}u.allPendingTasks===0&&Sr(u)}}}finally{u.currentTask=C}}}s.splice(0,c),e.destination!==null&&Ir(e,e.destination)}catch(t){Xn(e,t,{}),Zn(e,t)}finally{kn=o,V.H=n,V.A=r,n===On&&Z(t),Vn=a}}}function Er(e,t,n){t.preambleChildren.length&&n.push(t.preambleChildren);for(var r=!1,i=0;i<t.children.length;i++)r=Dr(e,t.children[i],n)||r;return r}function Dr(e,t,n){var r=t.boundary;if(r===null)return Er(e,t,n);var a=r.preamble;if(a===null)return!1;switch(r.status){case 1:if(Re(e.renderState,a.content),e.byteSize+=r.byteSize,t=r.completedSegments[0],!t)throw Error(i(391));return Er(e,t,n);case 5:if(e.trackedPostpones!==null)return!0;case 4:if(t.status===1)return Re(e.renderState,a.fallback),Er(e,t,n);default:return!0}}function Or(e){if(e.completedRootSegment&&e.completedPreambleSegments===null){var t=[],n=e.byteSize,r=Dr(e,e.completedRootSegment,t),i=e.renderState.preamble;!1===r||i.headChunks&&i.bodyChunks?e.completedPreambleSegments=t:e.byteSize=n}}function kr(e,t,n,r){switch(n.parentFlushed=!0,n.status){case 0:n.id=e.nextSegmentId++;case 5:return r=n.id,n.lastPushedText=!1,n.textEmbedded=!1,e=e.renderState,t.push(`<template id="`),t.push(e.placeholderPrefix),e=r.toString(16),t.push(e),t.push(`"></template>`);case 1:n.status=2;var a=!0,o=n.chunks,s=0;n=n.children;for(var c=0;c<n.length;c++){for(a=n[c];s<a.index;s++)t.push(o[s]);a=jr(e,t,a,r)}for(;s<o.length-1;s++)t.push(o[s]);return s<o.length&&(a=t.push(o[s])),a;case 3:return!0;default:throw Error(i(390))}}var Ar=0;function jr(e,t,n,r){var a=n.boundary;if(a===null)return kr(e,t,n,r);if(n.boundary=null,a.parentFlushed=!0,a.status===4){var o=a.row;return o!==null&&--o.pendingTasks===0&&Qn(e,o),e.renderState.generateStaticMarkup||(a=a.errorDigest,t.push(`<!--$!-->`),t.push(`<template`),a!=null&&(t.push(` data-dgst="`),a=R(a),t.push(a),t.push(`"`)),t.push(`></template>`)),kr(e,t,n,r),e=e.renderState.generateStaticMarkup?!0:t.push(`<!--/$-->`),e}if(a.status!==1)return a.status===0&&(a.rootSegmentID=e.nextSegmentId++),0<a.completedSegments.length&&e.partialBoundaries.push(a),Be(t,e.renderState,a.rootSegmentID),r&&xt(r,a.fallbackState),kr(e,t,n,r),t.push(`<!--/$-->`);if(!Fr&&Ln(e,a)&&(Ar+a.byteSize>e.progressiveChunkSize||a.defer))return a.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(a),Be(t,e.renderState,a.rootSegmentID),kr(e,t,n,r),t.push(`<!--/$-->`);if(Ar+=a.byteSize,r&&xt(r,a.contentState),n=a.row,n!==null&&Ln(e,a)&&--n.pendingTasks===0&&Qn(e,n),e.renderState.generateStaticMarkup||t.push(`<!--$-->`),n=a.completedSegments,n.length!==1)throw Error(i(391));return jr(e,t,n[0],r),e=e.renderState.generateStaticMarkup?!0:t.push(`<!--/$-->`),e}function Mr(e,t,n,r){return Ve(t,e.renderState,n.parentFormatContext,n.id),jr(e,t,n,r),He(t,n.parentFormatContext)}function Nr(e,t,n){Ar=n.byteSize;for(var r=n.completedSegments,i=0;i<r.length;i++)Pr(e,t,n,r[i]);r.length=0,r=n.row,r!==null&&Ln(e,n)&&--r.pendingTasks===0&&Qn(e,r),Ze(t,n.contentState,e.renderState),r=e.resumableState,e=e.renderState,i=n.rootSegmentID,n=n.contentState;var a=e.stylesToHoist,o=!!(r.instructions&128);return e.stylesToHoist=!1,t.push(e.startInlineScript),t.push(`>`),a?(!(r.instructions&4)&&(r.instructions|=4,t.push(`$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,null!=c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};`)),!(r.instructions&2)&&(r.instructions|=2,t.push(`$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};`)),o&&!(r.instructions&256)&&(r.instructions|=256,t.push(`$RV=function(B,g){function h(a,c){var e=a.getAttribute(c);e&&(c=a.style,l.push(a,c.viewTransitionName,c.viewTransitionClass),"auto"!==e&&(c.viewTransitionClass=e),(a=a.getAttribute("vt-name"))||(a="_T_"+N++ +"_"),a=CSS.escape(a)!==a?"r-"+btoa(a).replace(/=/g,""):a,c.viewTransitionName=a,C=!0)}var C=!1,N=0,l=[];try{var f=document.__reactViewTransition;if(f){f.finished.finally($RV.bind(null,g));return}var m=new Map;for(f=1;f<g.length;f+=2)for(var k=g[f].querySelectorAll("[vt-share]"),d=0;d<k.length;d++){var b=k[d];m.set(b.getAttribute("vt-name"),b)}var u=[];for(k=0;k<g.length;k+=2){var D=g[k],x=D.parentNode;if(x){var v=x.getBoundingClientRect();if(v.left||v.top||v.width||v.height){b=D;for(f=0;b;){if(8===b.nodeType){var t=b.data;if("/$"===t)if(0===f)break;else f--;else"$"!==t&&"$?"!==t&&"$~"!==t&&"$!"!==t||f++}else if(1===b.nodeType){d=b;var E=d.getAttribute("vt-name"),y=m.get(E);h(d,y?"vt-share":"vt-exit");y&&(h(y,"vt-share"),m.set(E,null));for(var F=d.querySelectorAll("[vt-share]"),
z=0;z<F.length;z++){var G=F[z],H=G.getAttribute("vt-name"),I=m.get(H);I&&(h(G,"vt-share"),h(I,"vt-share"),m.set(H,null))}var J=d.querySelectorAll("[vt-parent-exit]");for(d=0;d<J.length;d++)h(J[d],"vt-parent-exit")}b=b.nextSibling}for(var K=g[k+1],n=K.firstElementChild;n;){null!==m.get(n.getAttribute("vt-name"))&&h(n,"vt-enter");var L=n.querySelectorAll("[vt-parent-enter]");for(b=0;b<L.length;b++)h(L[b],"vt-parent-enter");n=n.nextElementSibling}b=x;do for(var p=b.firstElementChild;p;){var M=p.getAttribute("vt-update");
M&&"none"!==M&&!l.includes(p)&&h(p,"vt-update");p=p.nextElementSibling}while((b=b.parentNode)&&1===b.nodeType&&"none"!==b.getAttribute("vt-update"));u.push.apply(u,K.querySelectorAll('img[src]:not([loading="lazy"])'))}}}if(C){var A=document.__reactViewTransition=document.startViewTransition({update:function(){B(g);for(var a=[document.documentElement.clientHeight,document.fonts.ready],c={},e=0;e<u.length;c={g:c.g},e++)if(c.g=u[e],!c.g.complete){var q=c.g.getBoundingClientRect();0<q.bottom&&0<q.right&&
q.top<window.innerHeight&&q.left<window.innerWidth&&(q=new Promise(function(w){return function(r){w.g.addEventListener("load",r);w.g.addEventListener("error",r)}}(c)),a.push(q))}return Promise.race([Promise.all(a),new Promise(function(w){var r=performance.now();setTimeout(w,2300>r&&2E3<r?2300-r:500)})])},types:[]});A.ready.finally(function(){for(var a=l.length-3;0<=a;a-=3){var c=l[a],e=c.style;e.viewTransitionName=l[a+1];e.viewTransitionClass=l[a+1];""===c.getAttribute("style")&&c.removeAttribute("style")}});
A.finished.finally(function(){document.__reactViewTransition===A&&(document.__reactViewTransition=null)});$RB=[];return}}catch(a){}B(g)}.bind(null,$RV);`)),r.instructions&8?t.push(`$RR("`):(r.instructions|=8,t.push(`$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=e[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&$RM.set(b.getAttribute("href"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement("link");a.href=d;a.rel=
"stylesheet";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute("media");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=
"$~";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,"CSS failed to load"))};$RR("`))):(!(r.instructions&2)&&(r.instructions|=2,t.push(`$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};`)),o&&!(r.instructions&256)&&(r.instructions|=256,t.push(`$RV=function(B,g){function h(a,c){var e=a.getAttribute(c);e&&(c=a.style,l.push(a,c.viewTransitionName,c.viewTransitionClass),"auto"!==e&&(c.viewTransitionClass=e),(a=a.getAttribute("vt-name"))||(a="_T_"+N++ +"_"),a=CSS.escape(a)!==a?"r-"+btoa(a).replace(/=/g,""):a,c.viewTransitionName=a,C=!0)}var C=!1,N=0,l=[];try{var f=document.__reactViewTransition;if(f){f.finished.finally($RV.bind(null,g));return}var m=new Map;for(f=1;f<g.length;f+=2)for(var k=g[f].querySelectorAll("[vt-share]"),d=0;d<k.length;d++){var b=k[d];m.set(b.getAttribute("vt-name"),b)}var u=[];for(k=0;k<g.length;k+=2){var D=g[k],x=D.parentNode;if(x){var v=x.getBoundingClientRect();if(v.left||v.top||v.width||v.height){b=D;for(f=0;b;){if(8===b.nodeType){var t=b.data;if("/$"===t)if(0===f)break;else f--;else"$"!==t&&"$?"!==t&&"$~"!==t&&"$!"!==t||f++}else if(1===b.nodeType){d=b;var E=d.getAttribute("vt-name"),y=m.get(E);h(d,y?"vt-share":"vt-exit");y&&(h(y,"vt-share"),m.set(E,null));for(var F=d.querySelectorAll("[vt-share]"),
z=0;z<F.length;z++){var G=F[z],H=G.getAttribute("vt-name"),I=m.get(H);I&&(h(G,"vt-share"),h(I,"vt-share"),m.set(H,null))}var J=d.querySelectorAll("[vt-parent-exit]");for(d=0;d<J.length;d++)h(J[d],"vt-parent-exit")}b=b.nextSibling}for(var K=g[k+1],n=K.firstElementChild;n;){null!==m.get(n.getAttribute("vt-name"))&&h(n,"vt-enter");var L=n.querySelectorAll("[vt-parent-enter]");for(b=0;b<L.length;b++)h(L[b],"vt-parent-enter");n=n.nextElementSibling}b=x;do for(var p=b.firstElementChild;p;){var M=p.getAttribute("vt-update");
M&&"none"!==M&&!l.includes(p)&&h(p,"vt-update");p=p.nextElementSibling}while((b=b.parentNode)&&1===b.nodeType&&"none"!==b.getAttribute("vt-update"));u.push.apply(u,K.querySelectorAll('img[src]:not([loading="lazy"])'))}}}if(C){var A=document.__reactViewTransition=document.startViewTransition({update:function(){B(g);for(var a=[document.documentElement.clientHeight,document.fonts.ready],c={},e=0;e<u.length;c={g:c.g},e++)if(c.g=u[e],!c.g.complete){var q=c.g.getBoundingClientRect();0<q.bottom&&0<q.right&&
q.top<window.innerHeight&&q.left<window.innerWidth&&(q=new Promise(function(w){return function(r){w.g.addEventListener("load",r);w.g.addEventListener("error",r)}}(c)),a.push(q))}return Promise.race([Promise.all(a),new Promise(function(w){var r=performance.now();setTimeout(w,2300>r&&2E3<r?2300-r:500)})])},types:[]});A.ready.finally(function(){for(var a=l.length-3;0<=a;a-=3){var c=l[a],e=c.style;e.viewTransitionName=l[a+1];e.viewTransitionClass=l[a+1];""===c.getAttribute("style")&&c.removeAttribute("style")}});
A.finished.finally(function(){document.__reactViewTransition===A&&(document.__reactViewTransition=null)});$RB=[];return}}catch(a){}B(g)}.bind(null,$RV);`)),t.push(`$RC("`)),r=i.toString(16),t.push(e.boundaryPrefix),t.push(r),t.push(`","`),t.push(e.segmentPrefix),t.push(r),a?(t.push(`",`),rt(t,n)):t.push(`"`),n=t.push(`)<\/script>`),ze(t,e)&&n}function Pr(e,t,n,r){if(r.status===2)return!0;var a=n.contentState,o=r.id;if(o===-1){if((r.id=n.rootSegmentID)===-1)throw Error(i(392));return Mr(e,t,r,a)}return o===n.rootSegmentID?Mr(e,t,r,a):(Mr(e,t,r,a),n=e.resumableState,e=e.renderState,t.push(e.startInlineScript),t.push(`>`),n.instructions&1?t.push(`$RS("`):(n.instructions|=1,t.push(`$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`)),t.push(e.segmentPrefix),o=o.toString(16),t.push(o),t.push(`","`),t.push(e.placeholderPrefix),t.push(o),t=t.push(`")<\/script>`),t)}var Fr=!1;function Ir(e,t){try{if(!(0<e.pendingRootTasks)){var n,r=e.completedRootSegment;if(r!==null){if(r.status===5)return;var i=e.completedPreambleSegments;if(i===null)return;Ar=e.byteSize;var a=e.resumableState,o=e.renderState,s=o.preamble,c=s.htmlChunks,l=s.headChunks,u;if(c){for(u=0;u<c.length;u++)t.push(c[u]);if(l)for(u=0;u<l.length;u++)t.push(l[u]);else{var d=Pe(`head`);t.push(d),t.push(`>`)}}else if(l)for(u=0;u<l.length;u++)t.push(l[u]);var f=o.charsetChunks;for(u=0;u<f.length;u++)t.push(f[u]);f.length=0,o.preconnects.forEach(Qe,t),o.preconnects.clear();var p=o.viewportChunks;for(u=0;u<p.length;u++)t.push(p[u]);p.length=0,o.fontPreloads.forEach(Qe,t),o.fontPreloads.clear(),o.highImagePreloads.forEach(Qe,t),o.highImagePreloads.clear(),ie=o,o.styles.forEach(tt,t),ie=null;var m=o.importMapChunks;for(u=0;u<m.length;u++)t.push(m[u]);m.length=0,o.bootstrapScripts.forEach(Qe,t),o.scripts.forEach(Qe,t),o.scripts.clear(),o.bulkPreloads.forEach(Qe,t),o.bulkPreloads.clear(),a.instructions|=32;var h=o.hoistableChunks;for(u=0;u<h.length;u++)t.push(h[u]);for(a=h.length=0;a<i.length;a++){var g=i[a];for(o=0;o<g.length;o++)jr(e,t,g[o],null)}var _=e.renderState.preamble,v=_.headChunks;if(_.htmlChunks||v){var y=Le(`head`);t.push(y)}var b=_.bodyChunks;if(b)for(i=0;i<b.length;i++)t.push(b[i]);jr(e,t,r,null),e.completedRootSegment=null;var x=e.renderState;if(e.allPendingTasks!==0||e.clientRenderedBoundaries.length!==0||e.completedBoundaries.length!==0||e.trackedPostpones!==null&&(e.trackedPostpones.rootNodes.length!==0||e.trackedPostpones.rootSlots!==null)){var S=e.resumableState;if(!(S.instructions&64)){if(S.instructions|=64,t.push(x.startInlineScript),!(S.instructions&32)){S.instructions|=32;var C=`_`+S.idPrefix+`R_`;t.push(` id="`);var w=R(C);t.push(w),t.push(`"`)}t.push(`>`),t.push(`requestAnimationFrame(function(){$RT=performance.now()});`),t.push(`<\/script>`)}}ze(t,x)}var T=e.renderState;r=0;var E=T.viewportChunks;for(r=0;r<E.length;r++)t.push(E[r]);E.length=0,T.preconnects.forEach(Qe,t),T.preconnects.clear(),T.fontPreloads.forEach(Qe,t),T.fontPreloads.clear(),T.highImagePreloads.forEach(Qe,t),T.highImagePreloads.clear(),T.styles.forEach(Y,t),T.scripts.forEach(Qe,t),T.scripts.clear(),T.bulkPreloads.forEach(Qe,t),T.bulkPreloads.clear();var D=T.hoistableChunks;for(r=0;r<D.length;r++)t.push(D[r]);D.length=0;var O=e.clientRenderedBoundaries;for(n=0;n<O.length;n++){var k=O[n];T=t;var A=e.resumableState,j=e.renderState,M=k.rootSegmentID,N=k.errorDigest;T.push(j.startInlineScript),T.push(`>`),A.instructions&4?T.push(`$RX("`):(A.instructions|=4,T.push(`$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,null!=c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("`)),T.push(j.boundaryPrefix);var P=M.toString(16);if(T.push(P),T.push(`"`),N!=null){if(T.push(`,`),N==null)T.push(`null`);else{var F=We(N);T.push(F)}}var I=T.push(`)<\/script>`);if(!I){e.destination=null,n++,O.splice(0,n);return}}O.splice(0,n);var L=e.completedBoundaries;for(n=0;n<L.length;n++)if(!Nr(e,t,L[n])){e.destination=null,n++,L.splice(0,n);return}L.splice(0,n),Fr=!0;var ee=e.partialBoundaries;for(n=0;n<ee.length;n++){var te=ee[n];a:{O=e,k=t,Ar=te.byteSize;var z=te.completedSegments;for(I=0;I<z.length;I++)if(!Pr(O,k,te,z[I])){I++,z.splice(0,I);var B=!1;break a}z.splice(0,I);var V=te.row;V!==null&&V.together&&te.pendingTasks===1&&(V.pendingTasks===1?$n(O,V,V.hoistables):V.pendingTasks--),B=Ze(k,te.contentState,O.renderState)}if(!B){e.destination=null,n++,ee.splice(0,n);return}}ee.splice(0,n),Fr=!1;var H=e.completedBoundaries;for(n=0;n<H.length;n++)if(!Nr(e,t,H[n])){e.destination=null,n++,H.splice(0,n);return}H.splice(0,n)}}finally{Fr=!1,n=e.postponedState,n!==null&&(n.nextSegmentId=e.nextSegmentId),e.allPendingTasks===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&(e.flushScheduled=!1,n=e.resumableState,n.hasBody&&(ee=Le(`body`),t.push(ee)),n.hasHtml&&(n=Le(`html`),t.push(n)),Br(e),e.status=13,t.push(null),e.destination=null)}}function Lr(e){if(!1===e.flushScheduled&&e.pingedTasks.length===0&&e.destination!==null){e.flushScheduled=!0;var t=e.destination;t?Ir(e,t):e.flushScheduled=!1}}function Rr(e,t){if(e.status===12)e.status=13,e=e.fatalError,ln(e)&&(e=un(e)),t.destroy(e);else if(e.status!==13&&e.destination===null){e.destination=t;try{Ir(e,t)}catch(t){Xn(e,t,{}),Zn(e,t)}}}function zr(e,t){try{if(0<t.size){var n=e.fatalError;t.forEach(function(t){return yr(t,e,n)}),t.clear()}e.destination!==null&&Ir(e,e.destination)}catch(t){Xn(e,t,{}),Zn(e,t)}}function Br(e){e=e.renderLifetimeController,e!==null&&e.abort(`The render ended.`)}function Vr(e,t){if(!(e.aborted||e.status!==11&&e.status!==10)){Br(e);var n=typeof t==`object`&&!!t&&t.$$typeof===C;e.aborted=!0,t=n?cn(t):t===void 0?Error(i(432)):typeof t==`object`&&t&&typeof t.then==`function`?Error(i(530)):t,e.fatalError=t,t=e.abortableTasks,t.forEach(function(t){return vr(t,e)}),zr(e,t)}}function Hr(e,t,n){if(t===null)n.rootNodes.push(e);else{var r=n.workingMap,i=r.get(t);i===void 0&&(i=[t[1],t[2],[],null],r.set(t,i),Hr(i,t[0],n)),i[2].push(e)}}function Ur(){}function Wr(e,t,n,r){var a=!1,o=null,s=``,c=!1;if(t=se(t?t.identifierPrefix:void 0),e=Bn(e,t,St(t,n),ce(0,null,0,null),1/0,Ur,void 0,void 0,function(){c=!0},void 0,void 0,void 0),e.flushScheduled=e.destination!==null,Tr(e),e.status===10&&(e.status=11),e.trackedPostpones===null&&br(e,e.pendingRootTasks===0),Vr(e,r),Rr(e,{push:function(e){return e!==null&&(s+=e),!0},destroy:function(e){a=!0,o=e}}),a&&o!==r)throw o;if(!c)throw Error(i(426));return s}t.renderToStaticMarkup=function(e,t){return Wr(e,t,!0,`The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`)},t.renderToString=function(e,t){return Wr(e,t,!1,`The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`)},t.version=`19.3.0`})),c=a((t=>{var n=e(),r=o();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var a=Symbol.for(`react.transitional.element`),s=Symbol.for(`react.portal`),c=Symbol.for(`react.fragment`),l=Symbol.for(`react.strict_mode`),u=Symbol.for(`react.profiler`),d=Symbol.for(`react.consumer`),f=Symbol.for(`react.context`),p=Symbol.for(`react.forward_ref`),m=Symbol.for(`react.suspense`),h=Symbol.for(`react.suspense_list`),g=Symbol.for(`react.memo`),_=Symbol.for(`react.lazy`),v=Symbol.for(`react.scope`),y=Symbol.for(`react.activity`),b=Symbol.for(`react.legacy_hidden`),x=Symbol.for(`react.memo_cache_sentinel`),S=Symbol.for(`react.view_transition`),C=Symbol.for(`react.recoverable`),w=Symbol.iterator;function T(e){return typeof e!=`object`||!e?null:(e=w&&e[w]||e[`@@iterator`],typeof e==`function`?e:null)}var E=Symbol.for(`react.optimistic_key`),D=Array.isArray;function O(e,t){var n=e.length&3,r=e.length-n,i=t;for(t=0;t<r;){var a=e.charCodeAt(t)&255|(e.charCodeAt(++t)&255)<<8|(e.charCodeAt(++t)&255)<<16|(e.charCodeAt(++t)&255)<<24;++t,a=3432918353*(a&65535)+((3432918353*(a>>>16)&65535)<<16)&4294967295,a=a<<15|a>>>17,a=461845907*(a&65535)+((461845907*(a>>>16)&65535)<<16)&4294967295,i^=a,i=i<<13|i>>>19,i=5*(i&65535)+((5*(i>>>16)&65535)<<16)&4294967295,i=(i&65535)+27492+(((i>>>16)+58964&65535)<<16)}switch(a=0,n){case 3:a^=(e.charCodeAt(t+2)&255)<<16;case 2:a^=(e.charCodeAt(t+1)&255)<<8;case 1:a^=e.charCodeAt(t)&255,a=3432918353*(a&65535)+((3432918353*(a>>>16)&65535)<<16)&4294967295,a=a<<15|a>>>17,i^=461845907*(a&65535)+((461845907*(a>>>16)&65535)<<16)&4294967295}return i^=e.length,i^=i>>>16,i=2246822507*(i&65535)+((2246822507*(i>>>16)&65535)<<16)&4294967295,i^=i>>>13,i=3266489909*(i&65535)+((3266489909*(i>>>16)&65535)<<16)&4294967295,(i^i>>>16)>>>0}var k=new MessageChannel,A=[];k.port1.onmessage=function(){var e=A.shift();e&&e()};function j(e){A.push(e),k.port2.postMessage(null)}function M(e){setTimeout(function(){throw e})}var N=Promise,P=typeof queueMicrotask==`function`?queueMicrotask:function(e){N.resolve(null).then(e).catch(M)},F=null,I=0;function L(e,t){if(t.byteLength!==0){if(2048<t.byteLength)0<I&&(e.enqueue(new Uint8Array(F.buffer,0,I)),F=new Uint8Array(2048),I=0),e.enqueue(t);else{var n=F.length-I;n<t.byteLength&&(n===0?e.enqueue(F):(F.set(t.subarray(0,n),I),e.enqueue(F),t=t.subarray(n)),F=new Uint8Array(2048),I=0),F.set(t,I),I+=t.byteLength}}}function R(e,t){return L(e,t),!0}function ee(e){F&&0<I&&(e.enqueue(new Uint8Array(F.buffer,0,I)),F=null,I=0)}var te=new TextEncoder;function z(e){return te.encode(e)}function B(e){return te.encode(e)}function V(e){return e.byteLength}function H(e,t){typeof e.error==`function`?e.error(t):e.close()}var ne=Object.assign,U=Object.prototype.hasOwnProperty,re=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),ie={},ae={};function oe(e){return U.call(ae,e)?!0:U.call(ie,e)?!1:re.test(e)?ae[e]=!0:(ie[e]=!0,!1)}var se=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `)),ce=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),le=/["'&<>]/;function W(e){if(typeof e==`boolean`||typeof e==`number`||typeof e==`bigint`)return``+e;e=``+e;var t=le.exec(e);if(t){var n=``,r,i=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t=`&quot;`;break;case 38:t=`&amp;`;break;case 39:t=`&#x27;`;break;case 60:t=`&lt;`;break;case 62:t=`&gt;`;break;default:continue}i!==r&&(n+=e.slice(i,r)),i=r+1,n+=t}e=i===r?n:n+e.slice(i,r)}return e}var ue=/([A-Z])/g,de=/^ms-/,fe=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pe(e){return fe.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}var me=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ge={pending:!1,data:null,method:null,action:null},_e=he.d;he.d={f:_e.f,r:_e.r,D:gr,C:_r,L:vr,m:yr,X:xr,S:br,M:Sr};var ve=[],ye=null;B(`"></template>`);var be=B(`<script`),xe=B(`<\/script>`),Se=B(`<script src="`),Ce=B(`<script type="module" src="`),G=B(` nonce="`),we=B(` integrity="`),Te=B(` crossorigin="`),Ee=B(` async=""><\/script>`),K=B(`<style`),De=/(<\/|<)(s)(cript)/gi;function q(e,t,n,r){return``+t+(n===`s`?`\\u0073`:`\\u0053`)+r}var Oe=B(`<script type="importmap">`),ke=B(`<\/script>`);function Ae(e,t,n,r,i,a){n=typeof t==`string`?t:t&&t.script;var o=n===void 0?be:B(`<script nonce="`+W(n)+`"`),s=typeof t==`string`?void 0:t&&t.style,c=s===void 0?K:B(`<style nonce="`+W(s)+`"`),l=e.idPrefix,u=[],d=e.bootstrapScriptContent,f=e.bootstrapScripts,p=e.bootstrapModules;if(d!==void 0&&(u.push(o),cr(u,e),u.push(at,z((``+d).replace(De,q)),xe)),d=[],r!==void 0&&(d.push(n===void 0?Oe:B(`<script type="importmap" nonce="`+W(n)+`">`)),d.push(z((``+JSON.stringify(r)).replace(De,q))),d.push(ke)),r=i?{preconnects:``,fontPreloads:``,highImagePreloads:``,remainingCapacity:2+(typeof a==`number`?a:2e3)}:null,i={placeholderPrefix:B(l+`P:`),segmentPrefix:B(l+`S:`),boundaryPrefix:B(l+`B:`),startInlineScript:o,startInlineStyle:c,preamble:Me(),externalRuntimeScript:null,bootstrapChunks:u,importMapChunks:d,onHeaders:i,headers:r,resets:{font:{},dns:{},connect:{default:{},anonymous:{},credentials:{}},image:{},style:{}},charsetChunks:[],viewportChunks:[],hoistableChunks:[],preconnects:new Set,fontPreloads:new Set,highImagePreloads:new Set,styles:new Map,bootstrapScripts:new Set,scripts:new Set,bulkPreloads:new Set,preloads:{images:new Map,stylesheets:new Map,scripts:new Map,moduleScripts:new Map},nonce:{script:n,style:s},hoistableState:null,stylesToHoist:!1},f!==void 0)for(r=0;r<f.length;r++)l=f[r],s=o=void 0,c={rel:`preload`,as:`script`,fetchPriority:`low`,nonce:t},typeof l==`string`?c.href=a=l:(c.href=a=l.src,c.integrity=s=typeof l.integrity==`string`?l.integrity:void 0,c.crossOrigin=o=typeof l==`string`||l.crossOrigin==null?void 0:l.crossOrigin===`use-credentials`?`use-credentials`:``),l=e,d=a,l.scriptResources[d]=null,l.moduleScriptResources[d]=null,l=[],mt(l,c),i.bootstrapScripts.add(l),u.push(Se,z(W(a)),Xe),n&&u.push(G,z(W(n)),Xe),typeof s==`string`&&u.push(we,z(W(s)),Xe),typeof o==`string`&&u.push(Te,z(W(o)),Xe),cr(u,e),u.push(Ee);if(p!==void 0)for(t=0;t<p.length;t++)s=p[t],a=r=void 0,o={rel:`modulepreload`,fetchPriority:`low`,nonce:n},typeof s==`string`?o.href=f=s:(o.href=f=s.src,o.integrity=a=typeof s.integrity==`string`?s.integrity:void 0,o.crossOrigin=r=typeof s==`string`||s.crossOrigin==null?void 0:s.crossOrigin===`use-credentials`?`use-credentials`:``),s=e,c=f,s.scriptResources[c]=null,s.moduleScriptResources[c]=null,s=[],mt(s,o),i.bootstrapScripts.add(s),u.push(Ce,z(W(f)),Xe),n&&u.push(G,z(W(n)),Xe),typeof a==`string`&&u.push(we,z(W(a)),Xe),typeof r==`string`&&u.push(Te,z(W(r)),Xe),cr(u,e),u.push(Ee);return i}function je(e,t,n,r,i){return{idPrefix:e===void 0?``:e,nextFormID:0,streamingFormat:0,bootstrapScriptContent:n,bootstrapScripts:r,bootstrapModules:i,instructions:0,hasBody:!1,hasHtml:!1,unknownResources:{},dnsResources:{},connectResources:{default:{},anonymous:{},credentials:{}},imageResources:{},styleResources:{},scriptResources:{},moduleUnknownResources:{},moduleScriptResources:{}}}function Me(){return{htmlChunks:null,headChunks:null,bodyChunks:null}}function Ne(e,t,n,r){return{insertionMode:e,selectedValue:t,tagScope:n,viewTransition:r}}function Pe(e){return Ne(e===`http://www.w3.org/2000/svg`?4:e===`http://www.w3.org/1998/Math/MathML`?5:0,null,0,null)}function Fe(e,t,n){var r=e.tagScope&-25;switch(t){case`noscript`:return Ne(2,null,r|1,null);case`select`:return Ne(2,n.value==null?n.defaultValue:n.value,r,null);case`svg`:return Ne(4,null,r,null);case`picture`:return Ne(2,null,r|2,null);case`math`:return Ne(5,null,r,null);case`foreignObject`:return Ne(2,null,r,null);case`table`:return Ne(6,null,r,null);case`thead`:case`tbody`:case`tfoot`:return Ne(7,null,r,null);case`colgroup`:return Ne(9,null,r,null);case`tr`:return Ne(8,null,r,null);case`head`:if(2>e.insertionMode)return Ne(3,null,r,null);break;case`html`:if(e.insertionMode===0)return Ne(1,null,r,null)}return 6<=e.insertionMode||2>e.insertionMode?Ne(2,null,r,null):e.viewTransition!==null||e.tagScope!==r?Ne(e.insertionMode,e.selectedValue,r,null):e}function Ie(e){return e===null?null:{update:e.update,enter:`none`,exit:`none`,share:e.update,parentEnter:`none`,parentExit:`none`,name:e.autoName,autoName:e.autoName,nameIdx:0}}function Le(e,t){return t.tagScope&32&&(e.instructions|=128),Ne(t.insertionMode,t.selectedValue,t.tagScope|12,Ie(t.viewTransition))}function Re(e,t){e=Ie(t.viewTransition);var n=t.tagScope|16;return e!==null&&e.share!==`none`&&(n|=64),Ne(t.insertionMode,t.selectedValue,n,e)}function ze(e,t,n){return e=`_`+e.idPrefix+`R_`+t,0<n&&(e+=`H`+n.toString(32)),e+`_`}var Be=B(`<!-- -->`);function Ve(e,t,n,r){return t===``?r:(r&&e.push(Be),e.push(z(W(t))),!0)}function He(e,t){t=t.viewTransition,t!==null&&(t.name!==`auto`&&($e(e,`vt-name`,t.nameIdx===0?t.name:t.name+`_`+t.nameIdx),t.nameIdx++),$e(e,`vt-update`,t.update),t.enter!==`none`&&$e(e,`vt-enter`,t.enter),t.exit!==`none`&&$e(e,`vt-exit`,t.exit),t.share!==`none`&&$e(e,`vt-share`,t.share))}var Ue=new Map,We=B(` style="`),Ge=B(`:`),Ke=B(`;`);function qe(e,t){if(typeof t!=`object`)throw Error(i(62));var n=!0,r;for(r in t)if(U.call(t,r)){var a=t[r];if(a!=null&&typeof a!=`boolean`&&a!==``){if(r.indexOf(`--`)===0){var o=z(W(r));a=z(W((``+a).trim()))}else o=Ue.get(r),o===void 0&&(o=B(W(r.replace(ue,`-$1`).toLowerCase().replace(de,`-ms-`))),Ue.set(r,o)),a=typeof a==`number`?a===0||se.has(r)?z(``+a):z(a+`px`):z(W((``+a).trim()));n?(n=!1,e.push(We,o,Ge,a)):e.push(Ke,o,Ge,a)}}n||e.push(Xe)}var Je=B(` `),Ye=B(`="`),Xe=B(`"`),Ze=B(`=""`);function Qe(e,t,n){n&&typeof n!=`function`&&typeof n!=`symbol`&&e.push(Je,z(t),Ze)}function $e(e,t,n){typeof n!=`function`&&typeof n!=`symbol`&&typeof n!=`boolean`&&e.push(Je,z(t),Ye,z(W(n)),Xe)}var et=B(W(`javascript:throw new Error('React form unexpectedly submitted.')`)),tt=B(`<input type="hidden"`);function J(e,t){this.push(tt),Y(e),$e(this,`name`,t),$e(this,`value`,e),this.push(ot)}function Y(e){if(typeof e!=`string`)throw Error(i(480))}function nt(e,t){if(typeof t.$$FORM_ACTION==`function`){var n=e.nextFormID++;e=e.idPrefix+n;try{var r=t.$$FORM_ACTION(e);return r&&r.data?.forEach(Y),r}catch(e){if(typeof e==`object`&&e&&typeof e.then==`function`)throw e}}return null}function rt(e,t,n,r,i,a,o,s){var c=null;if(typeof r==`function`){var l=nt(t,r);l===null?(e.push(Je,z(`formAction`),Ye,et,Xe),o=a=i=r=s=null,dt(t,n)):(s=l.name,r=l.action||``,i=l.encType,a=l.method,o=l.target,c=l.data)}return s!=null&&it(e,`name`,s),r!=null&&it(e,`formAction`,r),i!=null&&it(e,`formEncType`,i),a!=null&&it(e,`formMethod`,a),o!=null&&it(e,`formTarget`,o),c}function it(e,t,n){switch(t){case`className`:$e(e,`class`,n);break;case`tabIndex`:$e(e,`tabindex`,n);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:$e(e,t,n);break;case`style`:qe(e,n);break;case`src`:case`href`:if(n===``)break;case`action`:case`formAction`:if(n==null||typeof n==`function`||typeof n==`symbol`||typeof n==`boolean`)break;n=pe(``+n),e.push(Je,z(t),Ye,z(W(n)),Xe);break;case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`ref`:break;case`autoFocus`:case`multiple`:case`muted`:Qe(e,t.toLowerCase(),n);break;case`xlinkHref`:if(typeof n==`function`||typeof n==`symbol`||typeof n==`boolean`)break;n=pe(``+n),e.push(Je,z(`xlink:href`),Ye,z(W(n)),Xe);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:typeof n!=`function`&&typeof n!=`symbol`&&e.push(Je,z(t),Ye,z(W(n)),Xe);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:n&&typeof n!=`function`&&typeof n!=`symbol`&&e.push(Je,z(t),Ze);break;case`capture`:case`download`:!0===n?e.push(Je,z(t),Ze):!1!==n&&typeof n!=`function`&&typeof n!=`symbol`&&e.push(Je,z(t),Ye,z(W(n)),Xe);break;case`cols`:case`rows`:case`size`:case`span`:typeof n!=`function`&&typeof n!=`symbol`&&!isNaN(n)&&1<=n&&e.push(Je,z(t),Ye,z(W(n)),Xe);break;case`rowSpan`:case`start`:typeof n==`function`||typeof n==`symbol`||isNaN(n)||e.push(Je,z(t),Ye,z(W(n)),Xe);break;case`xlinkActuate`:$e(e,`xlink:actuate`,n);break;case`xlinkArcrole`:$e(e,`xlink:arcrole`,n);break;case`xlinkRole`:$e(e,`xlink:role`,n);break;case`xlinkShow`:$e(e,`xlink:show`,n);break;case`xlinkTitle`:$e(e,`xlink:title`,n);break;case`xlinkType`:$e(e,`xlink:type`,n);break;case`xmlBase`:$e(e,`xml:base`,n);break;case`xmlLang`:$e(e,`xml:lang`,n);break;case`xmlSpace`:$e(e,`xml:space`,n);break;default:if((!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`)&&(t=ce.get(t)||t,oe(t))){switch(typeof n){case`function`:case`symbol`:return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`)return}e.push(Je,z(t),Ye,z(W(n)),Xe)}}}var at=B(`>`),ot=B(`/>`);function st(e,t,n){if(t!=null){if(n!=null)throw Error(i(60));if(typeof t!=`object`||!(`__html`in t))throw Error(i(61));t=t.__html,t!=null&&e.push(z(``+t))}}function ct(e){var t=``;return n.Children.forEach(e,function(e){e!=null&&(t+=e)}),t}var lt=B(` selected=""`),ut=B(`addEventListener("submit",function(a){if(!a.defaultPrevented){var b=a.target,d=a.submitter,c=b.action,e=d;if(d){var f=d.getAttribute("formAction");null!=f&&(c=f,e=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===c&&(a.preventDefault(),a=new FormData(b,e),c=b.ownerDocument||b,(c.$$reactFormReplay=c.$$reactFormReplay||[]).push(b,d,a))}});`);function dt(e,t){if(!(e.instructions&16)){e.instructions|=16;var n=t.preamble,r=t.bootstrapChunks;(n.htmlChunks||n.headChunks)&&r.length===0?(r.push(t.startInlineScript),cr(r,e),r.push(at,ut,xe)):r.unshift(t.startInlineScript,at,ut,xe)}}var ft=B(`<!--F!-->`),pt=B(`<!--F-->`);function mt(e,t){for(var n in e.push(Ot(`link`)),t)if(U.call(t,n)){var r=t[n];if(r!=null)switch(n){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(399,`link`));default:it(e,n,r)}}return e.push(ot),null}var ht=/(<\/|<)(s)(tyle)/gi;function gt(e,t,n,r){return``+t+(n===`s`?`\\73 `:`\\53 `)+r}function _t(e,t,n,r){for(var a in e.push(Ot(n)),t)if(U.call(t,a)){var o=t[a];if(o!=null)switch(a){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(399,n));default:it(e,a,o)}}return He(e,r),e.push(ot),null}function vt(e,t){e.push(Ot(`title`));var n=null,r=null,i;for(i in t)if(U.call(t,i)){var a=t[i];if(a!=null)switch(i){case`children`:n=a;break;case`dangerouslySetInnerHTML`:r=a;break;default:it(e,i,a)}}return e.push(at),t=Array.isArray(n)?2>n.length?n[0]:null:n,typeof t!=`function`&&typeof t!=`symbol`&&t!=null&&e.push(z(W(``+t))),st(e,r,n),e.push(Mt(`title`)),null}var yt=B(`<!--head-->`),bt=B(`<!--body-->`),xt=B(`<!--html-->`);function St(e,t){e.push(Ot(`script`));var n=null,r=null,i;for(i in t)if(U.call(t,i)){var a=t[i];if(a!=null)switch(i){case`children`:n=a;break;case`dangerouslySetInnerHTML`:r=a;break;default:it(e,i,a)}}return e.push(at),st(e,r,n),typeof n==`string`&&e.push(z((``+n).replace(De,q))),e.push(Mt(`script`)),null}function Ct(e,t,n,r){e.push(Ot(n));var i=n=null,a;for(a in t)if(U.call(t,a)){var o=t[a];if(o!=null)switch(a){case`children`:n=o;break;case`dangerouslySetInnerHTML`:i=o;break;default:it(e,a,o)}}return He(e,r),e.push(at),st(e,i,n),n}function wt(e,t,n,r){e.push(Ot(n));var i=n=null,a;for(a in t)if(U.call(t,a)){var o=t[a];if(o!=null)switch(a){case`children`:n=o;break;case`dangerouslySetInnerHTML`:i=o;break;default:it(e,a,o)}}return He(e,r),e.push(at),st(e,i,n),typeof n==`string`?(e.push(z(W(n))),null):n}var Tt=B(`
`),Et=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Dt=new Map;function Ot(e){var t=Dt.get(e);if(t===void 0){if(!Et.test(e))throw Error(i(65,e));t=B(`<`+e),Dt.set(e,t)}return t}var kt=B(`<!DOCTYPE html>`);function At(e,t,n,r,a,o,s,c,l){switch(t){case`div`:case`span`:case`svg`:case`path`:break;case`a`:e.push(Ot(`a`));var u=null,d=null,f;for(f in n)if(U.call(n,f)){var p=n[f];if(p!=null)switch(f){case`children`:u=p;break;case`dangerouslySetInnerHTML`:d=p;break;case`href`:p===``?$e(e,`href`,``):it(e,f,p);break;default:it(e,f,p)}}if(He(e,c),e.push(at),st(e,d,u),typeof u==`string`){e.push(z(W(u)));var m=null}else m=u;return m;case`g`:case`p`:case`li`:break;case`select`:e.push(Ot(`select`));var h=null,g=null,_;for(_ in n)if(U.call(n,_)){var v=n[_];if(v!=null)switch(_){case`children`:h=v;break;case`dangerouslySetInnerHTML`:g=v;break;case`defaultValue`:case`value`:break;default:it(e,_,v)}}return He(e,c),e.push(at),st(e,g,h),h;case`option`:var y=c.selectedValue;e.push(Ot(`option`));var b=null,x=null,S=null,C=null,w;for(w in n)if(U.call(n,w)){var T=n[w];if(T!=null)switch(w){case`children`:b=T;break;case`selected`:S=T;break;case`dangerouslySetInnerHTML`:C=T;break;case`value`:x=T;default:it(e,w,T)}}if(y!=null){var E=x===null?ct(b):``+x;if(D(y)){for(var O=0;O<y.length;O++)if(``+y[O]===E){e.push(lt);break}}else``+y===E&&e.push(lt)}else S&&e.push(lt);return e.push(at),st(e,C,b),b;case`textarea`:e.push(Ot(`textarea`));var k=null,A=null,j=null,M;for(M in n)if(U.call(n,M)){var N=n[M];if(N!=null)switch(M){case`children`:j=N;break;case`value`:k=N;break;case`defaultValue`:A=N;break;case`dangerouslySetInnerHTML`:throw Error(i(91));default:it(e,M,N)}}if(k===null&&A!==null&&(k=A),He(e,c),e.push(at),j!=null){if(k!=null)throw Error(i(92));if(D(j)){if(1<j.length)throw Error(i(93));k=``+j[0]}k=``+j}return typeof k==`string`&&k[0]===`
`&&e.push(Tt),k!==null&&e.push(z(W(``+k))),null;case`input`:e.push(Ot(`input`));var P=null,F=null,I=null,L=null,R=null,ee=null,te=null,B=null,V=null,H;for(H in n)if(U.call(n,H)){var re=n[H];if(re!=null)switch(H){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(399,`input`));case`name`:P=re;break;case`formAction`:F=re;break;case`formEncType`:I=re;break;case`formMethod`:L=re;break;case`formTarget`:R=re;break;case`defaultChecked`:V=re;break;case`defaultValue`:te=re;break;case`checked`:B=re;break;case`value`:ee=re;break;default:it(e,H,re)}}var ie=rt(e,r,a,F,I,L,R,P);return B===null?V!==null&&Qe(e,`checked`,V):Qe(e,`checked`,B),ee===null?te!==null&&it(e,`value`,te):it(e,`value`,ee),He(e,c),e.push(ot),ie?.forEach(J,e),null;case`button`:e.push(Ot(`button`));var ae=null,se=null,ce=null,le=null,ue=null,de=null,fe=null,me;for(me in n)if(U.call(n,me)){var he=n[me];if(he!=null)switch(me){case`children`:ae=he;break;case`dangerouslySetInnerHTML`:se=he;break;case`name`:ce=he;break;case`formAction`:le=he;break;case`formEncType`:ue=he;break;case`formMethod`:de=he;break;case`formTarget`:fe=he;break;default:it(e,me,he)}}var ge=rt(e,r,a,le,ue,de,fe,ce);if(He(e,c),e.push(at),ge?.forEach(J,e),st(e,se,ae),typeof ae==`string`){e.push(z(W(ae)));var _e=null}else _e=ae;return _e;case`form`:e.push(Ot(`form`));var ye=null,be=null,xe=null,Se=null,Ce=null,G=null,we;for(we in n)if(U.call(n,we)){var Te=n[we];if(Te!=null)switch(we){case`children`:ye=Te;break;case`dangerouslySetInnerHTML`:be=Te;break;case`action`:xe=Te;break;case`encType`:Se=Te;break;case`method`:Ce=Te;break;case`target`:G=Te;break;default:it(e,we,Te)}}var Ee=null,K=null;if(typeof xe==`function`){var De=nt(r,xe);De===null?(e.push(Je,z(`action`),Ye,et,Xe),G=Ce=Se=xe=null,dt(r,a)):(xe=De.action||``,Se=De.encType,Ce=De.method,G=De.target,Ee=De.data,K=De.name)}if(xe!=null&&it(e,`action`,xe),Se!=null&&it(e,`encType`,Se),Ce!=null&&it(e,`method`,Ce),G!=null&&it(e,`target`,G),He(e,c),e.push(at),K!==null&&(e.push(tt),$e(e,`name`,K),e.push(ot),Ee?.forEach(J,e)),st(e,be,ye),typeof ye==`string`){e.push(z(W(ye)));var q=null}else q=ye;return q;case`menuitem`:for(var Oe in e.push(Ot(`menuitem`)),n)if(U.call(n,Oe)){var ke=n[Oe];if(ke!=null)switch(Oe){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(400));default:it(e,Oe,ke)}}return He(e,c),e.push(at),null;case`object`:e.push(Ot(`object`));var Ae=null,je=null,Me;for(Me in n)if(U.call(n,Me)){var Ne=n[Me];if(Ne!=null)switch(Me){case`children`:Ae=Ne;break;case`dangerouslySetInnerHTML`:je=Ne;break;case`data`:var Pe=pe(``+Ne);if(Pe===``)break;e.push(Je,z(`data`),Ye,z(W(Pe)),Xe);break;default:it(e,Me,Ne)}}if(He(e,c),e.push(at),st(e,je,Ae),typeof Ae==`string`){e.push(z(W(Ae)));var Fe=null}else Fe=Ae;return Fe;case`title`:var Ie=c.tagScope&1,Le=c.tagScope&4;if(c.insertionMode===4||Ie||n.itemProp!=null)var Re=vt(e,n);else Le?Re=null:(vt(a.hoistableChunks,n),Re=void 0);return Re;case`link`:var ze=c.tagScope&1,Ve=c.tagScope&4,Ue=n.rel,We=n.href,Ge=n.precedence;if(c.insertionMode===4||ze||n.itemProp!=null||typeof Ue!=`string`||typeof We!=`string`||We===``){mt(e,n);var Ke=null}else if(n.rel===`stylesheet`){if(typeof Ge!=`string`||n.disabled!=null||n.onLoad||n.onError)Ke=mt(e,n);else{var Ze=a.styles.get(Ge),Y=r.styleResources.hasOwnProperty(We)?r.styleResources[We]:void 0;if(Y!==null){r.styleResources[We]=null,Ze||(Ze={precedence:z(W(Ge)),rules:[],hrefs:[],sheets:new Map},a.styles.set(Ge,Ze));var ut={state:0,props:ne({},n,{"data-precedence":n.precedence,precedence:null})};if(Y){Y.length===2&&Cr(ut.props,Y);var ft=a.preloads.stylesheets.get(We);ft&&0<ft.length?ft.length=0:ut.state=1}Ze.sheets.set(We,ut),s&&s.stylesheets.add(ut)}else if(Ze){var pt=Ze.sheets.get(We);pt&&s&&s.stylesheets.add(pt)}l&&e.push(Be),Ke=null}}else n.onLoad||n.onError?Ke=mt(e,n):(l&&e.push(Be),Ke=Ve?null:mt(a.hoistableChunks,n));return Ke;case`script`:var Et=c.tagScope&1,Dt=n.async;if(typeof n.src!=`string`||!n.src||!Dt||typeof Dt==`function`||typeof Dt==`symbol`||n.onLoad||n.onError||c.insertionMode===4||Et||n.itemProp!=null)var At=St(e,n);else{var jt=n.src;if(n.type===`module`)var X=r.moduleScriptResources,Nt=a.preloads.moduleScripts;else X=r.scriptResources,Nt=a.preloads.scripts;var Z=X.hasOwnProperty(jt)?X[jt]:void 0;if(Z!==null){X[jt]=null;var Pt=n;if(Z){Z.length===2&&(Pt=ne({},n),Cr(Pt,Z));var Ft=Nt.get(jt);Ft&&(Ft.length=0)}var Q=[];a.scripts.add(Q),St(Q,Pt)}l&&e.push(Be),At=null}return At;case`style`:var It=c.tagScope&1,Lt=n.precedence,Rt=n.href,zt=n.nonce;if(c.insertionMode===4||It||n.itemProp!=null||typeof Lt!=`string`||typeof Rt!=`string`||Rt===``){e.push(Ot(`style`));var Bt=null,Vt=null,Ht;for(Ht in n)if(U.call(n,Ht)){var Ut=n[Ht];if(Ut!=null)switch(Ht){case`children`:Bt=Ut;break;case`dangerouslySetInnerHTML`:Vt=Ut;break;default:it(e,Ht,Ut)}}e.push(at);var Wt=Array.isArray(Bt)?2>Bt.length?Bt[0]:null:Bt;typeof Wt!=`function`&&typeof Wt!=`symbol`&&Wt!=null&&e.push(z((``+Wt).replace(ht,gt))),st(e,Vt,Bt),e.push(Mt(`style`));var Gt=null}else{var Kt=a.styles.get(Lt);if((r.styleResources.hasOwnProperty(Rt)?r.styleResources[Rt]:void 0)!==null){r.styleResources[Rt]=null,Kt||(Kt={precedence:z(W(Lt)),rules:[],hrefs:[],sheets:new Map},a.styles.set(Lt,Kt));var qt=a.nonce.style;if(!qt||qt===zt){Kt.hrefs.push(z(W(Rt)));var Jt=Kt.rules,Yt=null,Xt=null,Zt;for(Zt in n)if(U.call(n,Zt)){var Qt=n[Zt];if(Qt!=null)switch(Zt){case`children`:Yt=Qt;break;case`dangerouslySetInnerHTML`:Xt=Qt}}var $t=Array.isArray(Yt)?2>Yt.length?Yt[0]:null:Yt;typeof $t!=`function`&&typeof $t!=`symbol`&&$t!=null&&Jt.push(z((``+$t).replace(ht,gt))),st(Jt,Xt,Yt)}}Kt&&s&&s.styles.add(Kt),l&&e.push(Be),Gt=void 0}return Gt;case`meta`:var en=c.tagScope&1,tn=c.tagScope&4;if(c.insertionMode===4||en||n.itemProp!=null)var nn=_t(e,n,`meta`,c);else l&&e.push(Be),nn=tn?null:typeof n.charSet==`string`?_t(a.charsetChunks,n,`meta`,c):n.name===`viewport`?_t(a.viewportChunks,n,`meta`,c):_t(a.hoistableChunks,n,`meta`,c);return nn;case`listing`:case`pre`:e.push(Ot(t));var rn=null,an=null,on;for(on in n)if(U.call(n,on)){var sn=n[on];if(sn!=null)switch(on){case`children`:rn=sn;break;case`dangerouslySetInnerHTML`:an=sn;break;default:it(e,on,sn)}}if(He(e,c),e.push(at),an!=null){if(rn!=null)throw Error(i(60));if(typeof an!=`object`||!(`__html`in an))throw Error(i(61));var cn=an.__html;cn!=null&&(typeof cn==`string`&&0<cn.length&&cn[0]===`
`?e.push(Tt,z(cn)):e.push(z(``+cn)))}return typeof rn==`string`&&rn[0]===`
`&&e.push(Tt),rn;case`img`:var ln=c.tagScope&3,un=n.src,dn=n.srcSet;if(!(n.loading===`lazy`||!un&&!dn||typeof un!=`string`&&un!=null||typeof dn!=`string`&&dn!=null||n.fetchPriority===`low`||ln)&&(typeof un!=`string`||un[4]!==`:`||un[0]!==`d`&&un[0]!==`D`||un[1]!==`a`&&un[1]!==`A`||un[2]!==`t`&&un[2]!==`T`||un[3]!==`a`&&un[3]!==`A`)&&(typeof dn!=`string`||dn[4]!==`:`||dn[0]!==`d`&&dn[0]!==`D`||dn[1]!==`a`&&dn[1]!==`A`||dn[2]!==`t`&&dn[2]!==`T`||dn[3]!==`a`&&dn[3]!==`A`)){s!==null&&c.tagScope&64&&(s.suspenseyImages=!0);var fn=typeof n.sizes==`string`?n.sizes:void 0,pn=dn?dn+`
`+(fn||``):un,mn=a.preloads.images,hn=mn.get(pn);if(hn)(n.fetchPriority===`high`||10>a.highImagePreloads.size)&&(mn.delete(pn),a.highImagePreloads.add(hn));else if(!r.imageResources.hasOwnProperty(pn)){r.imageResources[pn]=ve;var gn=n.crossOrigin,_n=typeof gn==`string`?gn===`use-credentials`?gn:``:void 0,vn=a.headers,yn;vn&&0<vn.remainingCapacity&&typeof n.srcSet!=`string`&&(n.fetchPriority===`high`||500>vn.highImagePreloads.length)&&(yn=wr(un,`image`,{imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:_n,integrity:n.integrity,nonce:n.nonce,type:n.type,fetchPriority:n.fetchPriority,referrerPolicy:n.referrerPolicy}),0<=(vn.remainingCapacity-=yn.length+2))?(a.resets.image[pn]=ve,vn.highImagePreloads&&(vn.highImagePreloads+=`, `),vn.highImagePreloads+=yn):(hn=[],mt(hn,{rel:`preload`,as:`image`,href:dn?void 0:un,imageSrcSet:dn,imageSizes:fn,crossOrigin:_n,integrity:n.integrity,type:n.type,fetchPriority:n.fetchPriority,referrerPolicy:n.referrerPolicy}),n.fetchPriority===`high`||10>a.highImagePreloads.size?a.highImagePreloads.add(hn):(a.bulkPreloads.add(hn),mn.set(pn,hn)))}}return _t(e,n,`img`,c);case`base`:case`area`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`param`:case`source`:case`track`:case`wbr`:return _t(e,n,t,c);case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:break;case`head`:if(2>c.insertionMode){var bn=o||a.preamble;if(bn.headChunks)throw Error(i(545,"`<head>`"));o!==null&&e.push(yt),bn.headChunks=[];var xn=Ct(bn.headChunks,n,`head`,c)}else xn=wt(e,n,`head`,c);return xn;case`body`:if(2>c.insertionMode){var Sn=o||a.preamble;if(Sn.bodyChunks)throw Error(i(545,"`<body>`"));o!==null&&e.push(bt),Sn.bodyChunks=[];var Cn=Ct(Sn.bodyChunks,n,`body`,c)}else Cn=wt(e,n,`body`,c);return Cn;case`html`:if(c.insertionMode===0){var wn=o||a.preamble;if(wn.htmlChunks)throw Error(i(545,"`<html>`"));o!==null&&e.push(xt),wn.htmlChunks=[kt];var Tn=Ct(wn.htmlChunks,n,`html`,c)}else Tn=wt(e,n,`html`,c);return Tn;default:if(t.indexOf(`-`)!==-1){e.push(Ot(t));var En=null,Dn=null,On;for(On in n)if(U.call(n,On)){var kn=n[On];if(kn!=null){var An=On;switch(On){case`children`:En=kn;break;case`dangerouslySetInnerHTML`:Dn=kn;break;case`style`:qe(e,kn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`ref`:break;case`className`:An=`class`;default:if(oe(On)&&typeof kn!=`function`&&typeof kn!=`symbol`&&!1!==kn){if(!0===kn)kn=``;else if(typeof kn==`object`)continue;e.push(Je,z(An),Ye,z(W(kn)),Xe)}}}}return He(e,c),e.push(at),st(e,Dn,En),En}}return wt(e,n,t,c)}var jt=new Map;function Mt(e){var t=jt.get(e);return t===void 0&&(t=B(`</`+e+`>`),jt.set(e,t)),t}function X(e,t){e=e.preamble,e.htmlChunks===null&&t.htmlChunks&&(e.htmlChunks=t.htmlChunks),e.headChunks===null&&t.headChunks&&(e.headChunks=t.headChunks),e.bodyChunks===null&&t.bodyChunks&&(e.bodyChunks=t.bodyChunks)}function Nt(e,t){t=t.bootstrapChunks;for(var n=0;n<t.length-1;n++)L(e,t[n]);return n<t.length?(n=t[n],t.length=0,R(e,n)):!0}var Z=B(`requestAnimationFrame(function(){$RT=performance.now()});`),Pt=B(`<template id="`),Ft=B(`"></template>`),Q=B(`<!--&-->`),It=B(`<!--/&-->`),Lt=B(`<!--$-->`),Rt=B(`<!--$?--><template id="`),zt=B(`"></template>`),Bt=B(`<!--$!-->`),Vt=B(`<!--/$-->`),Ht=B(`<template`),Ut=B(`"`),Wt=B(` data-dgst="`);B(` data-msg="`),B(` data-stck="`),B(` data-cstck="`);var Gt=B(`></template>`);function Kt(e,t,n){if(L(e,Rt),n===null)throw Error(i(395));return L(e,t.boundaryPrefix),L(e,z(n.toString(16))),R(e,zt)}var qt=B(`<div hidden id="`),Jt=B(`">`),Yt=B(`</div>`),Xt=B(`<svg aria-hidden="true" style="display:none" id="`),Zt=B(`">`),Qt=B(`</svg>`),$t=B(`<math aria-hidden="true" style="display:none" id="`),en=B(`">`),tn=B(`</math>`),nn=B(`<table hidden id="`),rn=B(`">`),an=B(`</table>`),on=B(`<table hidden><tbody id="`),sn=B(`">`),cn=B(`</tbody></table>`),ln=B(`<table hidden><tr id="`),un=B(`">`),dn=B(`</tr></table>`),fn=B(`<table hidden><colgroup id="`),pn=B(`">`),mn=B(`</colgroup></table>`);function hn(e,t,n,r){switch(n.insertionMode){case 0:case 1:case 3:case 2:return L(e,qt),L(e,t.segmentPrefix),L(e,z(r.toString(16))),R(e,Jt);case 4:return L(e,Xt),L(e,t.segmentPrefix),L(e,z(r.toString(16))),R(e,Zt);case 5:return L(e,$t),L(e,t.segmentPrefix),L(e,z(r.toString(16))),R(e,en);case 6:return L(e,nn),L(e,t.segmentPrefix),L(e,z(r.toString(16))),R(e,rn);case 7:return L(e,on),L(e,t.segmentPrefix),L(e,z(r.toString(16))),R(e,sn);case 8:return L(e,ln),L(e,t.segmentPrefix),L(e,z(r.toString(16))),R(e,un);case 9:return L(e,fn),L(e,t.segmentPrefix),L(e,z(r.toString(16))),R(e,pn);default:throw Error(i(397))}}function gn(e,t){switch(t.insertionMode){case 0:case 1:case 3:case 2:return R(e,Yt);case 4:return R(e,Qt);case 5:return R(e,tn);case 6:return R(e,an);case 7:return R(e,cn);case 8:return R(e,dn);case 9:return R(e,mn);default:throw Error(i(397))}}var _n=B(`$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`),vn=B(`$RS("`),yn=B(`","`),bn=B(`")<\/script>`);B(`<template data-rsi="" data-sid="`),B(`" data-pid="`);var xn=B(`$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};`),Sn=z(`$RV=function(B,g){function h(a,c){var e=a.getAttribute(c);e&&(c=a.style,l.push(a,c.viewTransitionName,c.viewTransitionClass),"auto"!==e&&(c.viewTransitionClass=e),(a=a.getAttribute("vt-name"))||(a="_T_"+N++ +"_"),a=CSS.escape(a)!==a?"r-"+btoa(a).replace(/=/g,""):a,c.viewTransitionName=a,C=!0)}var C=!1,N=0,l=[];try{var f=document.__reactViewTransition;if(f){f.finished.finally($RV.bind(null,g));return}var m=new Map;for(f=1;f<g.length;f+=2)for(var k=g[f].querySelectorAll("[vt-share]"),d=0;d<k.length;d++){var b=k[d];m.set(b.getAttribute("vt-name"),b)}var u=[];for(k=0;k<g.length;k+=2){var D=g[k],x=D.parentNode;if(x){var v=x.getBoundingClientRect();if(v.left||v.top||v.width||v.height){b=D;for(f=0;b;){if(8===b.nodeType){var t=b.data;if("/$"===t)if(0===f)break;else f--;else"$"!==t&&"$?"!==t&&"$~"!==t&&"$!"!==t||f++}else if(1===b.nodeType){d=b;var E=d.getAttribute("vt-name"),y=m.get(E);h(d,y?"vt-share":"vt-exit");y&&(h(y,"vt-share"),m.set(E,null));for(var F=d.querySelectorAll("[vt-share]"),
z=0;z<F.length;z++){var G=F[z],H=G.getAttribute("vt-name"),I=m.get(H);I&&(h(G,"vt-share"),h(I,"vt-share"),m.set(H,null))}var J=d.querySelectorAll("[vt-parent-exit]");for(d=0;d<J.length;d++)h(J[d],"vt-parent-exit")}b=b.nextSibling}for(var K=g[k+1],n=K.firstElementChild;n;){null!==m.get(n.getAttribute("vt-name"))&&h(n,"vt-enter");var L=n.querySelectorAll("[vt-parent-enter]");for(b=0;b<L.length;b++)h(L[b],"vt-parent-enter");n=n.nextElementSibling}b=x;do for(var p=b.firstElementChild;p;){var M=p.getAttribute("vt-update");
M&&"none"!==M&&!l.includes(p)&&h(p,"vt-update");p=p.nextElementSibling}while((b=b.parentNode)&&1===b.nodeType&&"none"!==b.getAttribute("vt-update"));u.push.apply(u,K.querySelectorAll('img[src]:not([loading="lazy"])'))}}}if(C){var A=document.__reactViewTransition=document.startViewTransition({update:function(){B(g);for(var a=[document.documentElement.clientHeight,document.fonts.ready],c={},e=0;e<u.length;c={g:c.g},e++)if(c.g=u[e],!c.g.complete){var q=c.g.getBoundingClientRect();0<q.bottom&&0<q.right&&
q.top<window.innerHeight&&q.left<window.innerWidth&&(q=new Promise(function(w){return function(r){w.g.addEventListener("load",r);w.g.addEventListener("error",r)}}(c)),a.push(q))}return Promise.race([Promise.all(a),new Promise(function(w){var r=performance.now();setTimeout(w,2300>r&&2E3<r?2300-r:500)})])},types:[]});A.ready.finally(function(){for(var a=l.length-3;0<=a;a-=3){var c=l[a],e=c.style;e.viewTransitionName=l[a+1];e.viewTransitionClass=l[a+1];""===c.getAttribute("style")&&c.removeAttribute("style")}});
A.finished.finally(function(){document.__reactViewTransition===A&&(document.__reactViewTransition=null)});$RB=[];return}}catch(a){}B(g)}.bind(null,$RV);`),Cn=B(`$RC("`),wn=B(`$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=e[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&$RM.set(b.getAttribute("href"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement("link");a.href=d;a.rel=
"stylesheet";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute("media");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=
"$~";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,"CSS failed to load"))};$RR("`),Tn=B(`$RR("`),En=B(`","`),Dn=B(`",`),On=B(`"`),kn=B(`)<\/script>`);B(`<template data-rci="" data-bid="`),B(`<template data-rri="" data-bid="`),B(`" data-sid="`),B(`" data-sty="`);var An=B(`$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,null!=c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};`),jn=B(`$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,null!=c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("`),Mn=B(`$RX("`),Nn=B(`"`),Pn=B(`,`),Fn=B(`null`),In=B(`)<\/script>`);B(`<template data-rxi="" data-bid="`),B(`" data-dgst="`),B(`" data-msg="`),B(`" data-stck="`),B(`" data-cstck="`);var Ln=/[<\u2028\u2029]/g;function Rn(e){return JSON.stringify(e).replace(Ln,function(e){switch(e){case`<`:return`\\u003c`;case`\u2028`:return`\\u2028`;case`\u2029`:return`\\u2029`;default:throw Error(`escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`)}})}var zn=/[&><\u2028\u2029]/g;function Bn(e){return JSON.stringify(e).replace(zn,function(e){switch(e){case`&`:return`\\u0026`;case`>`:return`\\u003e`;case`<`:return`\\u003c`;case`\u2028`:return`\\u2028`;case`\u2029`:return`\\u2029`;default:throw Error(`escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`)}})}var Vn=B(` media="not all" data-precedence="`),Hn=B(`" data-href="`),Un=B(`">`),Wn=B(`</style>`),Gn=!1,Kn=!0;function qn(e){var t=e.rules,n=e.hrefs,r=0;if(n.length){for(L(this,ye.startInlineStyle),L(this,Vn),L(this,e.precedence),L(this,Hn);r<n.length-1;r++)L(this,n[r]),L(this,tr);for(L(this,n[r]),L(this,Un),r=0;r<t.length;r++)L(this,t[r]);Kn=R(this,Wn),Gn=!0,t.length=0,n.length=0}}function Jn(e){return e.state===2?!1:Gn=!0}function Yn(e,t,n){return Gn=!1,Kn=!0,ye=n,t.styles.forEach(qn,e),ye=null,t.stylesheets.forEach(Jn),Gn&&(n.stylesToHoist=!0),Kn}function Xn(e){for(var t=0;t<e.length;t++)L(this,e[t]);e.length=0}var Zn=[];function Qn(e){mt(Zn,e.props);for(var t=0;t<Zn.length;t++)L(this,Zn[t]);Zn.length=0,e.state=2}var $n=B(` data-precedence="`),er=B(`" data-href="`),tr=B(` `),nr=B(`">`),rr=B(`</style>`);function ir(e){var t=0<e.sheets.size;e.sheets.forEach(Qn,this),e.sheets.clear();var n=e.rules,r=e.hrefs;if(!t||r.length){if(L(this,ye.startInlineStyle),L(this,$n),L(this,e.precedence),e=0,r.length){for(L(this,er);e<r.length-1;e++)L(this,r[e]),L(this,tr);L(this,r[e])}for(L(this,nr),e=0;e<n.length;e++)L(this,n[e]);L(this,rr),n.length=0,r.length=0}}function ar(e){if(e.state===0){e.state=1;var t=e.props;for(mt(Zn,{rel:`preload`,as:`style`,href:e.props.href,crossOrigin:t.crossOrigin,fetchPriority:t.fetchPriority,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy}),e=0;e<Zn.length;e++)L(this,Zn[e]);Zn.length=0}}function or(e){e.sheets.forEach(ar,this),e.sheets.clear()}B(`<link rel="expect" href="#`),B(`" blocking="render"/>`);var sr=B(` id="`);function cr(e,t){!(t.instructions&32)&&(t.instructions|=32,e.push(sr,z(W(`_`+t.idPrefix+`R_`)),Xe))}var lr=B(`[`),ur=B(`,[`),dr=B(`,`),fr=B(`]`);function pr(e,t){L(e,lr);var n=lr;t.stylesheets.forEach(function(t){if(t.state!==2){if(t.state===3)L(e,n),L(e,z(Bn(``+t.props.href))),L(e,fr),n=ur;else{L(e,n);var r=t.props[`data-precedence`],a=t.props;for(var o in L(e,z(Bn(pe(``+t.props.href)))),r=``+r,L(e,dr),L(e,z(Bn(r))),a)if(U.call(a,o)&&(r=a[o],r!=null))switch(o){case`href`:case`rel`:case`precedence`:case`data-precedence`:break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(399,`link`));default:mr(e,o,r)}L(e,fr),n=ur,t.state=3}}}),L(e,fr)}function mr(e,t,n){var r=t.toLowerCase();switch(typeof n){case`function`:case`symbol`:return}switch(t){case`innerHTML`:case`dangerouslySetInnerHTML`:case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`style`:case`ref`:return;case`className`:r=`class`,t=``+n;break;case`hidden`:if(!1===n)return;t=``;break;case`src`:case`href`:n=pe(n),t=``+n;break;default:if(2<t.length&&(t[0]===`o`||t[0]===`O`)&&(t[1]===`n`||t[1]===`N`)||!oe(t))return;t=``+n}L(e,dr),L(e,z(Bn(r))),L(e,dr),L(e,z(Bn(t)))}function hr(){return{styles:new Set,stylesheets:new Set,suspenseyImages:!1}}function gr(e){var t=ta||null;if(t){var n=t.resumableState,r=t.renderState;if(typeof e==`string`&&e){if(!n.dnsResources.hasOwnProperty(e)){n.dnsResources[e]=null,n=r.headers;var i,a;(a=n&&0<n.remainingCapacity)&&(a=(i=`<`+(``+e).replace(Tr,Er)+`>; rel=dns-prefetch`,0<=(n.remainingCapacity-=i.length+2))),a?(r.resets.dns[e]=null,n.preconnects&&(n.preconnects+=`, `),n.preconnects+=i):(i=[],mt(i,{href:e,rel:`dns-prefetch`}),r.preconnects.add(i))}eo(t)}}else _e.D(e)}function _r(e,t){var n=ta||null;if(n){var r=n.resumableState,i=n.renderState;if(typeof e==`string`&&e){var a=t===`use-credentials`?`credentials`:typeof t==`string`?`anonymous`:`default`;if(!r.connectResources[a].hasOwnProperty(e)){r.connectResources[a][e]=null,r=i.headers;var o,s;if(s=r&&0<r.remainingCapacity){if(s=`<`+(``+e).replace(Tr,Er)+`>; rel=preconnect`,typeof t==`string`){var c=(``+t).replace(Dr,Or);s+=`; crossorigin="`+c+`"`}s=(o=s,0<=(r.remainingCapacity-=o.length+2))}s?(i.resets.connect[a][e]=null,r.preconnects&&(r.preconnects+=`, `),r.preconnects+=o):(a=[],mt(a,{rel:`preconnect`,href:e,crossOrigin:t}),i.preconnects.add(a))}eo(n)}}else _e.C(e,t)}function vr(e,t,n){var r=ta||null;if(r){var i=r.resumableState,a=r.renderState;if(t&&e){switch(t){case`image`:if(n)var o=n.imageSrcSet,s=n.imageSizes,c=n.fetchPriority;var l=o?o+`
`+(s||``):e;if(i.imageResources.hasOwnProperty(l))return;i.imageResources[l]=ve,i=a.headers;var u;i&&0<i.remainingCapacity&&typeof o!=`string`&&c===`high`&&(u=wr(e,t,n),0<=(i.remainingCapacity-=u.length+2))?(a.resets.image[l]=ve,i.highImagePreloads&&(i.highImagePreloads+=`, `),i.highImagePreloads+=u):(i=[],mt(i,ne({rel:`preload`,href:o?void 0:e,as:t},n)),c===`high`?a.highImagePreloads.add(i):(a.bulkPreloads.add(i),a.preloads.images.set(l,i)));break;case`style`:if(i.styleResources.hasOwnProperty(e))return;o=[],mt(o,ne({rel:`preload`,href:e,as:t},n)),i.styleResources[e]=!n||typeof n.crossOrigin!=`string`&&typeof n.integrity!=`string`?ve:[n.crossOrigin,n.integrity],a.preloads.stylesheets.set(e,o),a.bulkPreloads.add(o);break;case`script`:if(i.scriptResources.hasOwnProperty(e))return;o=[],a.preloads.scripts.set(e,o),a.bulkPreloads.add(o),mt(o,ne({rel:`preload`,href:e,as:t},n)),i.scriptResources[e]=!n||typeof n.crossOrigin!=`string`&&typeof n.integrity!=`string`?ve:[n.crossOrigin,n.integrity];break;default:if(i.unknownResources.hasOwnProperty(t)){if(o=i.unknownResources[t],o.hasOwnProperty(e))return}else o={},i.unknownResources[t]=o;if(o[e]=ve,(i=a.headers)&&0<i.remainingCapacity&&t===`font`&&(l=wr(e,t,n),0<=(i.remainingCapacity-=l.length+2)))a.resets.font[e]=ve,i.fontPreloads&&(i.fontPreloads+=`, `),i.fontPreloads+=l;else switch(i=[],e=ne({rel:`preload`,href:e,as:t},n),mt(i,e),t){case`font`:a.fontPreloads.add(i);break;default:a.bulkPreloads.add(i)}}eo(r)}}else _e.L(e,t,n)}function yr(e,t){var n=ta||null;if(n){var r=n.resumableState,i=n.renderState;if(e){var a=t&&typeof t.as==`string`?t.as:`script`;switch(a){case`script`:if(r.moduleScriptResources.hasOwnProperty(e))return;a=[],r.moduleScriptResources[e]=!t||typeof t.crossOrigin!=`string`&&typeof t.integrity!=`string`?ve:[t.crossOrigin,t.integrity],i.preloads.moduleScripts.set(e,a);break;default:if(r.moduleUnknownResources.hasOwnProperty(a)){var o=r.moduleUnknownResources[a];if(o.hasOwnProperty(e))return}else o={},r.moduleUnknownResources[a]=o;a=[],o[e]=ve}mt(a,ne({rel:`modulepreload`,href:e},t)),i.bulkPreloads.add(a),eo(n)}}else _e.m(e,t)}function br(e,t,n){var r=ta||null;if(r){var i=r.resumableState,a=r.renderState;if(e){t||=`default`;var o=a.styles.get(t),s=i.styleResources.hasOwnProperty(e)?i.styleResources[e]:void 0;s!==null&&(i.styleResources[e]=null,o||(o={precedence:z(W(t)),rules:[],hrefs:[],sheets:new Map},a.styles.set(t,o)),t={state:0,props:ne({rel:`stylesheet`,href:e,"data-precedence":t},n)},s&&(s.length===2&&Cr(t.props,s),(a=a.preloads.stylesheets.get(e))&&0<a.length?a.length=0:t.state=1),o.sheets.set(e,t),eo(r))}}else _e.S(e,t,n)}function xr(e,t){var n=ta||null;if(n){var r=n.resumableState,i=n.renderState;if(e){var a=r.scriptResources.hasOwnProperty(e)?r.scriptResources[e]:void 0;a!==null&&(r.scriptResources[e]=null,t=ne({src:e,async:!0},t),a&&(a.length===2&&Cr(t,a),e=i.preloads.scripts.get(e))&&(e.length=0),e=[],i.scripts.add(e),St(e,t),eo(n))}}else _e.X(e,t)}function Sr(e,t){var n=ta||null;if(n){var r=n.resumableState,i=n.renderState;if(e){var a=r.moduleScriptResources.hasOwnProperty(e)?r.moduleScriptResources[e]:void 0;a!==null&&(r.moduleScriptResources[e]=null,t=ne({src:e,type:`module`,async:!0},t),a&&(a.length===2&&Cr(t,a),e=i.preloads.moduleScripts.get(e))&&(e.length=0),e=[],i.scripts.add(e),St(e,t),eo(n))}}else _e.M(e,t)}function Cr(e,t){e.crossOrigin??=t[0],e.integrity??=t[1]}function wr(e,t,n){for(var r in e=(``+e).replace(Tr,Er),t=(``+t).replace(Dr,Or),t=`<`+e+`>; rel=preload; as="`+t+`"`,n)U.call(n,r)&&(e=n[r],typeof e==`string`&&(t+=`; `+r.toLowerCase()+`="`+(``+e).replace(Dr,Or)+`"`));return t}var Tr=/[<>\r\n]/g;function Er(e){switch(e){case`<`:return`%3C`;case`>`:return`%3E`;case`
`:return`%0A`;case`\r`:return`%0D`;default:throw Error(`escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`)}}var Dr=/["';,\r\n]/g;function Or(e){switch(e){case`"`:return`%22`;case`'`:return`%27`;case`;`:return`%3B`;case`,`:return`%2C`;case`
`:return`%0A`;case`\r`:return`%0D`;default:throw Error(`escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`)}}function kr(e){this.styles.add(e)}function Ar(e){this.stylesheets.add(e)}function jr(e,t){t.styles.forEach(kr,e),t.stylesheets.forEach(Ar,e),t.suspenseyImages&&(e.suspenseyImages=!0)}function Mr(e,t){return t?e.suspenseyImages:0<e.stylesheets.size||e.suspenseyImages}var Nr=Function.prototype.bind,Pr=Symbol.for(`react.client.reference`);function Fr(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===Pr?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case c:return`Fragment`;case u:return`Profiler`;case l:return`StrictMode`;case m:return`Suspense`;case h:return`SuspenseList`;case y:return`Activity`;case S:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case s:return`Portal`;case f:return e.displayName||`Context`;case d:return(e._context.displayName||`Context`)+`.Consumer`;case p:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case g:return t=e.displayName||null,t===null?Fr(e.type)||`Memo`:t;case _:t=e._payload,e=e._init;try{return Fr(e(t))}catch{}}return null}var Ir={},Lr=null;function Rr(e,t){if(e!==t){e.context._currentValue=e.parentValue,e=e.parent;var n=t.parent;if(e===null){if(n!==null)throw Error(i(401))}else{if(n===null)throw Error(i(401));Rr(e,n)}t.context._currentValue=t.value}}function zr(e){e.context._currentValue=e.parentValue,e=e.parent,e!==null&&zr(e)}function Br(e){var t=e.parent;t!==null&&Br(t),e.context._currentValue=e.value}function Vr(e,t){if(e.context._currentValue=e.parentValue,e=e.parent,e===null)throw Error(i(402));e.depth===t.depth?Rr(e,t):Vr(e,t)}function Hr(e,t){var n=t.parent;if(n===null)throw Error(i(402));e.depth===n.depth?Rr(e,n):Hr(e,n),t.context._currentValue=t.value}function Ur(e){var t=Lr;t!==e&&(t===null?Br(e):e===null?zr(t):t.depth===e.depth?Rr(t,e):t.depth>e.depth?Vr(t,e):Hr(t,e),Lr=e)}var Wr={enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}},Gr={id:1,overflow:``};function Kr(e){var t=e.overflow;return e=e.id,(e&~(1<<32-Jr(e)-1)).toString(32)+t}function qr(e,t,n){var r=e.id;e=e.overflow;var i=32-Jr(r)-1;r&=~(1<<i),n+=1;var a=32-Jr(t)+i;if(30<a){var o=i-i%5;return a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,{id:1<<32-Jr(t)+i|n<<i|r,overflow:a+e}}return{id:1<<a|n<<i|r,overflow:e}}var Jr=Math.clz32?Math.clz32:Zr,Yr=Math.log,Xr=Math.LN2;function Zr(e){return e>>>=0,e===0?32:31-(Yr(e)/Xr|0)|0}function Qr(){}var $r=Error(i(460));function ei(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Qr,Qr),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,e===void 0&&!(`reason`in t)?Error(i(600)):e;default:switch(typeof t.status==`string`?t.then(Qr,Qr):(e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})),t.status){case`fulfilled`:return t.value;case`rejected`:throw t.reason}throw ti=t,$r}}var ti=null;function ni(){if(ti===null)throw Error(i(459));var e=ti;return ti=null,e}function ri(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var ii=typeof Object.is==`function`?Object.is:ri,ai=null,oi=null,si=null,ci=null,li=null,ui=null,di=!1,fi=!1,pi=0,mi=0,hi=-1,gi=0,_i=null;function vi(e){if(e=e._reason,typeof e==`function`)try{var t=e()}catch{t=`The reason for browser-only rendering could not be determined because its initializer threw.`}else t=e;return t=Error(i(603),e===void 0?void 0:{cause:t}),Object.defineProperty(t,C,{value:!0}),t}function yi(e){return typeof e!=`object`||!e?!1:!0===e[C]}function bi(e){var t=Error(i(604),U.call(e,`cause`)?{cause:e.cause}:void 0);if(e=e.stack,e!==void 0){var n=e.indexOf(`
`);t.stack=t.name+`: `+t.message+(n===-1?``:e.slice(n))}else t.stack=void 0;return t}var xi=null,Si=0;function Ci(){if(ai===null)throw Error(i(321));return ai}function wi(){if(0<Si)throw Error(i(312));return{memoizedState:null,queue:null,next:null}}function Ti(){return ui===null?li===null?(di=!1,li=ui=wi()):(di=!0,ui=li):ui.next===null?(di=!1,ui=ui.next=wi()):(di=!0,ui=ui.next),ui}function Ei(){var e=_i;return _i=null,e}function Di(){ci=si=oi=ai=null,fi=!1,li=null,Si=0,ui=xi=null}function Oi(e,t){return typeof t==`function`?t(e):t}function ki(e,t,n){if(ai=Ci(),ui=Ti(),di){var r=ui.queue;if(t=r.dispatch,xi!==null&&(n=xi.get(r),n!==void 0)){xi.delete(r),r=ui.memoizedState;do r=e(r,n.action),n=n.next;while(n!==null);return ui.memoizedState=r,[r,t]}return[ui.memoizedState,t]}return e=e===Oi?typeof t==`function`?t():t:n===void 0?t:n(t),ui.memoizedState=e,e=ui.queue={last:null,dispatch:null},e=e.dispatch=ji.bind(null,ai,e),[ui.memoizedState,e]}function Ai(e,t){if(ai=Ci(),ui=Ti(),t=t===void 0?null:t,ui!==null){var n=ui.memoizedState;if(n!==null&&t!==null){var r=n[1];a:if(r===null)r=!1;else{for(var i=0;i<r.length&&i<t.length;i++)if(!ii(t[i],r[i])){r=!1;break a}r=!0}if(r)return n[0]}}return e=e(),ui.memoizedState=[e,t],e}function ji(e,t,n){if(25<=Si)throw Error(i(301));if(e===ai){if(fi=!0,e={action:n,next:null},xi===null&&(xi=new Map),n=xi.get(t),n===void 0)xi.set(t,e);else{for(t=n;t.next!==null;)t=t.next;t.next=e}}}function Mi(){throw Error(i(440))}function Ni(){throw Error(i(394))}function Pi(){throw Error(i(479))}function Fi(e,t,n){Ci();var r=mi++,i=si;if(typeof e.$$FORM_ACTION==`function`){var a=null,o=ci;i=i.formState;var s=e.$$IS_SIGNATURE_EQUAL;if(i!==null&&typeof s==`function`){var c=i[1];s.call(e,i[2],i[3])&&(a=n===void 0?`k`+O(JSON.stringify([o,null,r]),0):`p`+n,c===a&&(hi=r,t=i[0]))}var l=e.bind(null,t);return e=function(e){l(e)},typeof l.$$FORM_ACTION==`function`&&(e.$$FORM_ACTION=function(e){e=l.$$FORM_ACTION(e),n!==void 0&&(n+=``,e.action=n);var t=e.data;return t&&(a===null&&(a=n===void 0?`k`+O(JSON.stringify([o,null,r]),0):`p`+n),t.append(`$ACTION_KEY`,a)),e}),[t,e,!1]}var u=e.bind(null,t);return[t,function(e){u(e)},!1]}function Ii(e){var t=gi;return gi+=1,_i===null&&(_i=[]),ei(_i,e,t)}function Li(){throw Error(i(393))}var Ri={readContext:function(e){return e._currentValue},use:function(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Ii(e);if(e.$$typeof===C)throw vi(e);if(e.$$typeof===f)return e._currentValue}throw Error(i(438,String(e)))},useContext:function(e){return Ci(),e._currentValue},useMemo:Ai,useReducer:ki,useRef:function(e){ai=Ci(),ui=Ti();var t=ui.memoizedState;return t===null?(e={current:e},ui.memoizedState=e):t},useState:function(e){return ki(Oi,e)},useInsertionEffect:Qr,useLayoutEffect:Qr,useCallback:function(e,t){return Ai(function(){return e},t)},useImperativeHandle:Qr,useEffect:Qr,useDebugValue:Qr,useDeferredValue:function(e,t){return Ci(),t===void 0?e:t},useTransition:function(){return Ci(),[!1,Ni]},useId:function(){var e=Kr(oi.treeContext),t=zi;if(t===null)throw Error(i(404));return ze(t,e,pi++)},useSyncExternalStore:function(e,t,n){if(n===void 0)throw Error(i(407));return n()},useOptimistic:function(e){return Ci(),[e,Pi]},useActionState:Fi,useFormState:Fi,useHostTransitionStatus:function(){return Ci(),ge},useMemoCache:function(e){for(var t=Array(e),n=0;n<e;n++)t[n]=x;return t},useCacheRefresh:function(){return Li},useEffectEvent:function(){return Mi}},zi=null,Bi={getCacheForType:function(){throw Error(i(248))},cacheSignal:function(){throw Error(i(248))}},Vi,Hi;function Ui(e){if(Vi===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Vi=t&&t[1]||``,Hi=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Vi+e+Hi}var Wi=!1;function Gi(e,t){if(!e||Wi)return``;Wi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Wi=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ui(n):``}function Ki(e){if(typeof e==`string`)return Ui(e);if(typeof e==`function`)return e.prototype&&e.prototype.isReactComponent?Gi(e,!0):Gi(e,!1);if(typeof e==`object`&&e){switch(e.$$typeof){case p:return Gi(e.render,!1);case g:return Gi(e.type,!1);case _:var t=e,n=t._payload;t=t._init;try{e=t(n)}catch{return Ui(`Lazy`)}return Ki(e)}if(typeof e.name==`string`){a:{n=e.name,t=e.env;var r=e.debugLocation;if(r!=null&&(e=Error.prepareStackTrace,Error.prepareStackTrace=void 0,r=r.stack,Error.prepareStackTrace=e,r.startsWith(`Error: react-stack-top-frame
`)&&(r=r.slice(29)),e=r.indexOf(`
`),e!==-1&&(r=r.slice(e+1)),e=r.indexOf(`react_stack_bottom_frame`),e!==-1&&(e=r.lastIndexOf(`
`,e)),e=e===-1?``:r=r.slice(0,e),r=e.lastIndexOf(`
`),e=r===-1?e:e.slice(r+1),e.indexOf(n)!==-1)){n=`
`+e;break a}n=Ui(n+(t?` [`+t+`]`:``))}return n}}switch(e){case h:return Ui(`SuspenseList`);case m:return Ui(`Suspense`);case S:return Ui(`ViewTransition`)}return``}function qi(e,t){return e=e==null||typeof e==`string`?e:e.default,t=t==null||typeof t==`string`?t:t.default,t==null?e===`auto`?null:e:t===`auto`?null:t}function Ji(e,t){return(500<t.byteSize||Mr(t.contentState,!1)||t.defer)&&t.preamble===null}function Yi(e){if(typeof e==`object`&&e&&typeof e.environmentName==`string`){var t=e.environmentName;e=[e].slice(0),typeof e[0]==`string`?e.splice(0,1,`%c%s%c `+e[0],`background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px`,` `+t+` `,``):e.splice(0,0,`%c%s%c`,`background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px`,` `+t+` `,``),e.unshift(console),t=Nr.apply(console.error,e),t()}else console.error(e);return null}function Xi(e,t,n,r,i,a,o,s,c,l,u){var d=new Set;this.destination=null,this.flushScheduled=!1,this.resumableState=e,this.renderState=t,this.rootFormatContext=n,this.progressiveChunkSize=r===void 0?12800:r,this.status=10,this.fatalError=null,this.aborted=!1,this.pendingRootTasks=this.allPendingTasks=this.nextSegmentId=0,this.completedPreambleSegments=this.completedRootSegment=null,this.byteSize=0,this.abortableTasks=d,this.pingedTasks=[],this.currentTask=null,this.clientRenderedBoundaries=[],this.completedBoundaries=[],this.partialBoundaries=[],this.postponedState=this.trackedPostpones=null,this.onError=i===void 0?Yi:i,this.onBrowserBailout=a===void 0?Qr:a,this.onAllReady=o===void 0?Qr:o,this.onShellReady=s===void 0?Qr:s,this.onShellError=c===void 0?Qr:c,this.onFatalError=l===void 0?Qr:l,this.renderLifetimeController=null,this.formState=u===void 0?null:u}function Zi(e,t,n,r,i,a,o,s,c,l,u,d){return t=new Xi(t,n,r,i,a,o,s,c,l,u,d),n=oa(t,0,null,r,!1,!1),n.parentFlushed=!0,e=ia(t,null,e,-1,null,n,null,null,t.abortableTasks,null,r,null,Gr,null,null),sa(e),t.pingedTasks.push(e),t}function Qi(e,t,n,r,i,a,o,s,c,l,u){return e=Zi(e,t,n,r,i,a,o,s,c,l,u,void 0),e.trackedPostpones={workingMap:new Map,rootNodes:[],rootSlots:null},e}function $i(e,t,n,r,i,a,o,s,c){return n=new Xi(t.resumableState,n,t.rootFormatContext,t.progressiveChunkSize,r,i,a,o,s,c,null),n.nextSegmentId=t.nextSegmentId,typeof t.replaySlots==`number`?(r=oa(n,0,null,t.rootFormatContext,!1,!1),r.parentFlushed=!0,e=ia(n,null,e,-1,null,r,null,null,n.abortableTasks,null,t.rootFormatContext,null,Gr,null,null),sa(e),n.pingedTasks.push(e),n):(e=aa(n,null,{nodes:t.replayNodes,slots:t.replaySlots,pendingTasks:0},e,-1,null,null,n.abortableTasks,null,t.rootFormatContext,null,Gr,null,null),sa(e),n.pingedTasks.push(e),n)}function ea(e,t,n,r,i,a,o,s,c){return e=$i(e,t,n,r,i,a,o,s,c),e.trackedPostpones={workingMap:new Map,rootNodes:[],rootSlots:null},e}var ta=null;function na(e,t){e.pingedTasks.push(t),e.pingedTasks.length===1&&(e.flushScheduled=e.destination!==null,e.trackedPostpones!==null||e.status===10?P(function(){return Ba(e)}):j(function(){return Ba(e)}))}function ra(e,t,n,r,i){return n={status:0,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,row:t,completedSegments:[],byteSize:0,defer:i,fallbackAbortableTasks:n,errorDigest:null,contentState:hr(),fallbackState:hr(),preamble:r,tracked:null},t!==null&&(t.pendingTasks++,r=t.boundaries,r!==null&&(e.allPendingTasks++,n.pendingTasks++,r.push(n)),e=t.inheritedHoistables,e!==null&&jr(n.contentState,e)),n}function ia(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){e.allPendingTasks++,i===null?e.pendingRootTasks++:i.pendingTasks++,p!==null&&p.pendingTasks++;var h={replay:null,node:n,childIndex:r,ping:{resolve:function(){return na(e,h)},reject:function(t){e.aborted?h.abortSet.delete(h)&&Na(h,e,t):na(e,h)}},blockedBoundary:i,blockedSegment:a,blockedPreamble:o,hoistableState:s,abortSet:c,keyPath:l,formatContext:u,context:d,treeContext:f,row:p,componentStack:m,thenableState:t};return c.add(h),h}function aa(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.allPendingTasks++,a===null?e.pendingRootTasks++:a.pendingTasks++,f!==null&&f.pendingTasks++,n.pendingTasks++;var m={replay:n,node:r,childIndex:i,ping:{resolve:function(){return na(e,m)},reject:function(t){e.aborted?m.abortSet.delete(m)&&Na(m,e,t):na(e,m)}},blockedBoundary:a,blockedSegment:null,blockedPreamble:null,hoistableState:o,abortSet:s,keyPath:c,formatContext:l,context:u,treeContext:d,row:f,componentStack:p,thenableState:t};return s.add(m),m}function oa(e,t,n,r,i,a){return{status:0,parentFlushed:!1,id:-1,index:t,chunks:[],children:[],preambleChildren:[],parentFormatContext:r,boundary:n,lastPushedText:i,textEmbedded:a}}function sa(e){var t=e.node;if(typeof t==`object`&&t)switch(t.$$typeof){case a:e.componentStack={parent:e.componentStack,type:t.type}}}function ca(e){return e===null?null:{parent:e.parent,type:`Suspense Fallback`}}function la(e){var t={};return e&&Object.defineProperty(t,"componentStack",{configurable:!0,enumerable:!0,get:function(){try{var n=``,r=e;do n+=Ki(r.type),r=r.parent;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return Object.defineProperty(t,"componentStack",{value:i}),i}}),t}function ua(e,t,n){if(yi(t))return e=e.onBrowserBailout,e(t,n),``;if(e=e.onError,t=e(t,n),t==null||typeof t==`string`)return t===``?void 0:t}function da(e,t){var n=e.onShellError,r=e.onFatalError;e.pendingRootTasks!==0&&n(t),r(t),ro(e),e.destination===null?(e.status=12,e.aborted||(e.fatalError=t)):(e.status=13,H(e.destination,t))}function fa(e,t){pa(e,t.next,t.hoistables)}function pa(e,t,n){for(;t!==null;){n!==null&&(jr(t.hoistables,n),t.inheritedHoistables=n);var r=t.boundaries;if(r!==null){t.boundaries=null;for(var i=0;i<r.length;i++){var a=r[i];n!==null&&jr(a.contentState,n),za(e,a,null,null)}}if(t.pendingTasks--,0<t.pendingTasks)break;n=t.hoistables,t=t.next}}function ma(e,t){var n=t.boundaries;if(n!==null&&t.pendingTasks===n.length){for(var r=!0,i=0;i<n.length;i++){var a=n[i];if(a.pendingTasks!==1||a.parentFlushed||Ji(e,a)){r=!1;break}}r&&pa(e,t,t.hoistables)}}function ha(e){var t={pendingTasks:1,boundaries:null,hoistables:hr(),inheritedHoistables:null,together:!1,next:null};return e!==null&&0<e.pendingTasks&&(t.pendingTasks++,t.boundaries=[],e.next=t),t}function ga(e,t,n,r,i){var a=t.keyPath,o=t.treeContext,s=t.row;t.keyPath=n,n=r.length;var c=null;if(t.replay!==null){var l=t.replay.slots;if(typeof l==`object`&&l)for(var u=0;u<n;u++){var d=i!==`backwards`&&i!==`unstable_legacy-backwards`?u:n-1-u,f=r[d];t.row=c=ha(c),t.treeContext=qr(o,n,d);var p=l[d];typeof p==`number`?(ba(e,t,p,f,d),delete l[d]):ka(e,t,f,d),--c.pendingTasks===0&&fa(e,c)}else for(l=0;l<n;l++)u=i!==`backwards`&&i!==`unstable_legacy-backwards`?l:n-1-l,d=r[u],t.row=c=ha(c),t.treeContext=qr(o,n,u),ka(e,t,d,u),--c.pendingTasks===0&&fa(e,c)}else if(i!==`backwards`&&i!==`unstable_legacy-backwards`)for(i=0;i<n;i++)l=r[i],t.row=c=ha(c),t.treeContext=qr(o,n,i),ka(e,t,l,i),--c.pendingTasks===0&&fa(e,c);else{for(l=t.blockedSegment,u=l.children.length,d=l.chunks.length,f=0;f<n;f++){p=i===`unstable_legacy-backwards`?n-1-f:f;var m=r[p];t.row=c=ha(c),t.treeContext=qr(o,n,p);var h=oa(e,d,null,t.formatContext,p!==0||l.lastPushedText,!0);l.children.splice(u,0,h),t.blockedSegment=h;try{ka(e,t,m,p),h.lastPushedText&&h.textEmbedded&&h.chunks.push(Be),h.status=1,Ra(e,t.blockedBoundary,h),--c.pendingTasks===0&&fa(e,c)}catch(t){throw h.status=e.aborted?3:4,t}}t.blockedSegment=l,l.lastPushedText=!1}s!==null&&c!==null&&0<c.pendingTasks&&(s.pendingTasks++,c.next=s),t.treeContext=o,t.row=s,t.keyPath=a}function _a(e,t,n,r,i,a){var o=t.thenableState;for(t.thenableState=null,ai={},oi=t,si=e,ci=n,mi=pi=0,hi=-1,gi=0,_i=o,e=r(i,a);fi;)fi=!1,mi=pi=0,hi=-1,gi=0,Si+=1,ui=null,e=r(i,a);return Di(),e}function va(e,t,n,r,i,a,o){var s=!1;if(a!==0&&e.formState!==null){var c=t.blockedSegment;if(c!==null){s=!0,c=c.chunks;for(var l=0;l<a;l++)l===o?c.push(ft):c.push(pt)}}a=t.keyPath,t.keyPath=n,i?(n=t.treeContext,t.treeContext=qr(n,1,0),ka(e,t,r,-1),t.treeContext=n):s?ka(e,t,r,-1):xa(e,t,r,-1),t.keyPath=a}function ya(e,t,n,r,a,o){if(typeof r==`function`){if(r.prototype&&r.prototype.isReactComponent){var s=a;if(`ref`in a)for(var x in s={},a)x!==`ref`&&(s[x]=a[x]);var C=r.defaultProps;if(C)for(var w in s===a&&(s=ne({},s,a)),C)s[w]===void 0&&(s[w]=C[w]);var E=s,O=Ir,k=r.contextType;typeof k==`object`&&k&&(O=k._currentValue);var A=new r(E,O),j=A.state===void 0?null:A.state;A.updater=Wr,A.props=E,A.state=j;var M={queue:[],replace:!1};A._reactInternals=M;var N=r.contextType;A.context=typeof N==`object`&&N?N._currentValue:Ir;var P=r.getDerivedStateFromProps;if(typeof P==`function`){var F=P(E,j);A.state=F==null?j:ne({},j,F)}if(typeof r.getDerivedStateFromProps!=`function`&&typeof A.getSnapshotBeforeUpdate!=`function`&&(typeof A.UNSAFE_componentWillMount==`function`||typeof A.componentWillMount==`function`)){var I=A.state;if(typeof A.componentWillMount==`function`&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount==`function`&&A.UNSAFE_componentWillMount(),I!==A.state&&Wr.enqueueReplaceState(A,A.state,null),M.queue!==null&&0<M.queue.length){var L=M.queue,R=M.replace;if(M.queue=null,M.replace=!1,R&&L.length===1)A.state=L[0];else{for(var ee=R?L[0]:A.state,te=!0,z=+!!R;z<L.length;z++){var B=L[z],V=typeof B==`function`?B.call(A,ee,E,void 0):B;V!=null&&(te?(te=!1,ee=ne({},ee,V)):ne(ee,V))}A.state=ee}}else M.queue=null}var H=A.render();if(e.aborted)throw null;var U=t.keyPath;t.keyPath=n,xa(e,t,H,-1),t.keyPath=U}else{var re=_a(e,t,n,r,a,void 0);if(e.aborted)throw null;va(e,t,n,re,pi!==0,mi,hi)}}else if(typeof r==`string`){var ie=t.blockedSegment;if(ie===null){var ae=a.children,oe=t.formatContext,se=t.keyPath;t.formatContext=Fe(oe,r,a),t.keyPath=n,ka(e,t,ae,-1),t.formatContext=oe,t.keyPath=se}else{var ce=At(ie.chunks,r,a,e.resumableState,e.renderState,t.blockedPreamble,t.hoistableState,t.formatContext,ie.lastPushedText);ie.lastPushedText=!1;var le=t.formatContext,W=t.keyPath;if(t.keyPath=n,(t.formatContext=Fe(le,r,a)).insertionMode===3){var ue=oa(e,0,null,t.formatContext,!1,!1);ie.preambleChildren.push(ue),t.blockedSegment=ue;try{ka(e,t,ce,-1),ue.lastPushedText&&ue.textEmbedded&&ue.chunks.push(Be),ue.status=1,Ra(e,t.blockedBoundary,ue)}finally{t.blockedSegment=ie}}else ka(e,t,ce,-1);t.formatContext=le,t.keyPath=W;a:{var de=ie.chunks,fe=e.resumableState;switch(r){case`title`:case`style`:case`script`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`img`:case`input`:case`keygen`:case`link`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:break a;case`body`:if(1>=le.insertionMode){fe.hasBody=!0;break a}break;case`html`:if(le.insertionMode===0){fe.hasHtml=!0;break a}break;case`head`:if(1>=le.insertionMode)break a}de.push(Mt(r))}ie.lastPushedText=!1}}else{switch(r){case b:case l:case u:case c:var pe=t.keyPath;t.keyPath=n,xa(e,t,a.children,-1),t.keyPath=pe;return;case y:var me=t.blockedSegment;if(me===null){if(a.mode!==`hidden`){var he=t.keyPath;t.keyPath=n,ka(e,t,a.children,-1),t.keyPath=he}}else if(a.mode!==`hidden`){me.chunks.push(Q),me.lastPushedText=!1;var ge=t.keyPath;t.keyPath=n,ka(e,t,a.children,-1),t.keyPath=ge,me.chunks.push(It),me.lastPushedText=!1}return;case h:a:{var _e=a.children,ve=a.revealOrder;if(ve!==`independent`&&ve!==`together`){if(D(_e)){ga(e,t,n,_e,ve);break a}var ye=T(_e);if(ye){var be=ye.call(_e);if(be){var xe=be.next();if(!xe.done){do xe=be.next();while(!xe.done);ga(e,t,n,_e,ve)}break a}}}if(ve===`together`){var Se=t.keyPath,Ce=t.row,G=t.row=ha(null);G.boundaries=[],G.together=!0,t.keyPath=n,xa(e,t,_e,-1),--G.pendingTasks===0&&fa(e,G),t.keyPath=Se,t.row=Ce,Ce!==null&&0<G.pendingTasks&&(Ce.pendingTasks++,G.next=Ce)}else{var we=t.keyPath;t.keyPath=n,xa(e,t,_e,-1),t.keyPath=we}}return;case S:var Te=t.formatContext,Ee=t.keyPath,K=e.resumableState;if(a.name!=null&&a.name!==`auto`)var De=a.name;else De=ze(K,Kr(t.treeContext),0);var q=De,Oe=e.resumableState,ke=qi(a.default,a.update),Ae=qi(a.default,a.enter),je=qi(a.default,a.exit),Pe=qi(a.default,a.share),Ie=a.name;if(ke??=`auto`,Ae??=`auto`,je??=`auto`,Ie==null){var Ve=Te.viewTransition;Ve===null?(Ie=`auto`,Pe=`none`):(Ie=Ve.name,Pe=Ve.share)}else Pe??=`auto`,Te.tagScope&4&&(Oe.instructions|=128);Te.tagScope&8?Oe.instructions|=128:je=`none`,Te.tagScope&16?Oe.instructions|=128:Ae=`none`;var He={update:ke,enter:Ae,exit:je,share:Pe,parentEnter:`none`,parentExit:`none`,name:Ie,autoName:q,nameIdx:0},Ue=Te.tagScope&-25;if(Ue=ke===`none`?Ue&-33:Ue|32,Ae!==`none`&&(Ue|=64),t.formatContext=Ne(Te.insertionMode,Te.selectedValue,Ue,He),t.keyPath=n,a.name!=null&&a.name!==`auto`)xa(e,t,a.children,-1);else{var We=t.treeContext;t.treeContext=qr(We,1,0),ka(e,t,a.children,-1),t.treeContext=We}t.formatContext=Te,t.keyPath=Ee;return;case v:throw Error(i(343));case m:a:if(t.replay!==null){var Ge=t.keyPath,Ke=t.formatContext,qe=t.row;t.keyPath=n,t.formatContext=Re(e.resumableState,Ke),t.row=null;var Je=a.children;try{ka(e,t,Je,-1)}finally{t.keyPath=Ge,t.formatContext=Ke,t.row=qe}}else{var Ye=t.keyPath,Xe=t.formatContext,Ze=t.row,Qe=t.blockedBoundary,$e=t.blockedPreamble,et=t.hoistableState,tt=t.blockedSegment,J=a.fallback,Y=a.children,nt=new Set,rt=ra(e,t.row,nt,2>t.formatContext.insertionMode?{content:Me(),fallback:Me()}:null,!1),it=oa(e,tt.chunks.length,rt,t.formatContext,!1,!1);tt.children.push(it),tt.lastPushedText=!1;var at=oa(e,0,null,t.formatContext,!1,!1);at.parentFlushed=!0;var ot=e.trackedPostpones;if(ot!==null){var st=t.componentStack,ct=[n[0],`Suspense Fallback`,n[2]];if(ot!==null){var lt=[ct[1],ct[2],[],null];ot.workingMap.set(ct,lt),rt.tracked={contentKeyPath:n,fallbackNode:lt}}t.blockedSegment=it,t.blockedPreamble=rt.preamble===null?null:rt.preamble.fallback,t.keyPath=ct,t.formatContext=Le(e.resumableState,Xe),t.componentStack=ca(st);try{ka(e,t,J,-1),it.lastPushedText&&it.textEmbedded&&it.chunks.push(Be),it.status=1,Ra(e,Qe,it)}catch(t){throw it.status=e.aborted?3:4,t}finally{t.blockedSegment=tt,t.blockedPreamble=$e,t.keyPath=Ye,t.formatContext=Xe}var ut=ia(e,null,Y,-1,rt,at,rt.preamble===null?null:rt.preamble.content,rt.contentState,t.abortSet,n,Re(e.resumableState,t.formatContext),t.context,t.treeContext,null,st);sa(ut),e.pingedTasks.push(ut)}else{t.blockedBoundary=rt,t.blockedPreamble=rt.preamble===null?null:rt.preamble.content,t.hoistableState=rt.contentState,t.blockedSegment=at,t.keyPath=n,t.formatContext=Re(e.resumableState,Xe),t.row=null;try{if(ka(e,t,Y,-1),at.lastPushedText&&at.textEmbedded&&at.chunks.push(Be),at.status=1,Ra(e,rt,at),La(rt,at),rt.pendingTasks===0&&rt.status===0){if(rt.status=1,!Ji(e,rt)){Ze!==null&&--Ze.pendingTasks===0&&fa(e,Ze),e.pendingRootTasks===0&&t.blockedPreamble&&Ua(e);break a}}else Ze!==null&&Ze.together&&ma(e,Ze)}catch(n){if(rt.status=4,e.aborted){at.status=3;var dt=e.fatalError}else at.status=4,dt=n;var ft=la(t.componentStack);rt.errorDigest=ua(e,dt,ft),Ea(e,rt)}finally{t.blockedBoundary=Qe,t.blockedPreamble=$e,t.hoistableState=et,t.blockedSegment=tt,t.keyPath=Ye,t.formatContext=Xe,t.row=Ze}var pt=ia(e,null,J,-1,Qe,it,rt.preamble===null?null:rt.preamble.fallback,rt.fallbackState,nt,[n[0],`Suspense Fallback`,n[2]],Le(e.resumableState,t.formatContext),t.context,t.treeContext,t.row,ca(t.componentStack));sa(pt),e.pingedTasks.push(pt)}}return}if(typeof r==`object`&&r)switch(r.$$typeof){case p:if(`ref`in a){var mt={};for(var ht in a)ht!==`ref`&&(mt[ht]=a[ht])}else mt=a;va(e,t,n,_a(e,t,n,r.render,mt,o),pi!==0,mi,hi);return;case g:ya(e,t,n,r.type,a,o);return;case f:var gt=a.children,_t=t.keyPath,vt=a.value,yt=r._currentValue;r._currentValue=vt;var bt=Lr,xt={parent:bt,depth:bt===null?0:bt.depth+1,context:r,parentValue:yt,value:vt};Lr=xt,t.context=xt,t.keyPath=n,xa(e,t,gt,-1);var St=Lr;if(St===null)throw Error(i(403));St.context._currentValue=St.parentValue,t.context=Lr=St.parent,t.keyPath=_t;return;case d:var Ct=a.children,wt=Ct(r._context._currentValue),Tt=t.keyPath;t.keyPath=n,xa(e,t,wt,-1),t.keyPath=Tt;return;case _:var Et=r._init,Dt=Et(r._payload);if(e.aborted)throw null;ya(e,t,n,Dt,a,o);return}throw Error(i(130,r==null?r:typeof r,``))}}function ba(e,t,n,r,i){var a=t.replay,o=t.blockedBoundary,s=oa(e,0,null,t.formatContext,!1,!1);s.id=n,s.parentFlushed=!0;try{t.replay=null,t.blockedSegment=s,ka(e,t,r,i),s.status=1,Ra(e,o,s),o===null?e.completedRootSegment=s:(La(o,s),o.parentFlushed&&e.partialBoundaries.push(o))}finally{t.replay=a,t.blockedSegment=null}}function xa(e,t,n,r){t.replay!==null&&typeof t.replay.slots==`number`?ba(e,t,t.replay.slots,n,r):(t.node=n,t.childIndex=r,n=t.componentStack,sa(t),Sa(e,t),t.componentStack=n)}function Sa(e,t){var n=t.node,r=t.childIndex;if(n!==null){if(typeof n==`object`){switch(n.$$typeof){case a:var o=n.type,c=n.key,l=n.props;n=l.ref;var u=n===void 0?null:n,d=Fr(o),p=c==null||c===E?r===-1?0:r:c;if(c=[t.keyPath,d,p],t.replay!==null)a:{var h=t.replay;for(r=h.nodes,n=0;n<r.length;n++){var g=r[n];if(p===g[1]){if(g.length===4){if(d!==null&&d!==g[0])throw Error(i(490,g[0],d));var v=g[2],y=g[3],b=t.node;t.replay={nodes:v,slots:y,pendingTasks:1};try{if(ya(e,t,c,o,l,u),t.replay.pendingTasks===1&&0<t.replay.nodes.length)throw Error(i(488));t.replay.pendingTasks--}catch(i){if(typeof i==`object`&&i&&(i===$r||typeof i.then==`function`||i.message===`Maximum call stack size exceeded`))throw t.node===b?t.replay=h:r.splice(n,1),i;t.replay.pendingTasks--,c=la(t.componentStack),b=e,l=t.blockedBoundary,e=e.aborted?e.fatalError:i,c=ua(b,e,c),ja(b,l,v,y,e,c)}t.replay=h}else{if(o!==m)throw Error(i(490,`Suspense`,Fr(o)||`Unknown`));b:{h=g[5],o=g[2],u=g[3],d=g[4]===null?[]:g[4][2],g=g[4]===null?null:g[4][3],p=t.keyPath;var x=t.formatContext,S=t.row,C=t.replay,w=t.blockedBoundary,O=t.hoistableState,k=l.children;l=l.fallback;var A=new Set,j=ra(e,t.row,A,2>t.formatContext.insertionMode?{content:Me(),fallback:Me()}:null,!1);j.parentFlushed=!0,j.rootSegmentID=h,t.blockedBoundary=j,t.hoistableState=j.contentState,t.keyPath=c,t.formatContext=Re(e.resumableState,x),t.row=null,t.replay={nodes:o,slots:u,pendingTasks:1};try{if(ka(e,t,k,-1),t.replay.pendingTasks===1&&0<t.replay.nodes.length)throw Error(i(488));if(t.replay.pendingTasks--,j.pendingTasks===0&&j.status===0){j.status=1,e.completedBoundaries.push(j);break b}}catch(n){j.status=4,v=e.aborted?e.fatalError:n,y=la(t.componentStack),b=ua(e,v,y),j.errorDigest=b,t.replay.pendingTasks--,e.clientRenderedBoundaries.push(j)}finally{t.blockedBoundary=w,t.hoistableState=O,t.replay=C,t.keyPath=p,t.formatContext=x,t.row=S}v=aa(e,null,{nodes:d,slots:g,pendingTasks:0},l,-1,w,j.fallbackState,A,[c[0],`Suspense Fallback`,c[2]],Le(e.resumableState,t.formatContext),t.context,t.treeContext,t.row,ca(t.componentStack)),sa(v),e.pingedTasks.push(v)}}r.splice(n,1);break a}}}else ya(e,t,c,o,l,u);return;case s:throw Error(i(257));case _:if(v=n._init,n=v(n._payload),e.aborted)throw null;xa(e,t,n,r);return}if(D(n)){Ca(e,t,n,r);return}if((v=T(n))&&(v=v.call(n))){if(n=v.next(),!n.done){y=[];do y.push(n.value),n=v.next();while(!n.done);Ca(e,t,y,r)}return}if(typeof n.then==`function`)return t.thenableState=null,xa(e,t,Ii(n),r);if(n.$$typeof===f)return xa(e,t,n._currentValue,r);throw r=Object.prototype.toString.call(n),Error(i(31,r===`[object Object]`?`object with keys {`+Object.keys(n).join(`, `)+`}`:r))}typeof n==`string`?(r=t.blockedSegment,r!==null&&(r.lastPushedText=Ve(r.chunks,n,e.renderState,r.lastPushedText))):(typeof n==`number`||typeof n==`bigint`)&&(r=t.blockedSegment,r!==null&&(r.lastPushedText=Ve(r.chunks,``+n,e.renderState,r.lastPushedText)))}}function Ca(e,t,n,r){var a=t.keyPath;if(r!==-1&&(t.keyPath=[t.keyPath,`Fragment`,r],t.replay!==null)){for(var o=t.replay,s=o.nodes,c=0;c<s.length;c++){var l=s[c];if(l[1]===r){r=l[2],l=l[3],t.replay={nodes:r,slots:l,pendingTasks:1};try{if(Ca(e,t,n,-1),t.replay.pendingTasks===1&&0<t.replay.nodes.length)throw Error(i(488));t.replay.pendingTasks--}catch(i){if(typeof i==`object`&&i&&(i===$r||typeof i.then==`function`))throw i;t.replay.pendingTasks--;var u=la(t.componentStack);n=e;var d=t.blockedBoundary;e=e.aborted?e.fatalError:i,u=ua(n,e,u),ja(n,d,r,l,e,u)}t.replay=o,s.splice(c,1);break}}t.keyPath=a;return}if(o=t.treeContext,s=n.length,t.replay!==null&&(c=t.replay.slots,typeof c==`object`&&c)){for(r=0;r<s;r++)l=n[r],t.treeContext=qr(o,s,r),d=c[r],typeof d==`number`?(ba(e,t,d,l,r),delete c[r]):ka(e,t,l,r);t.treeContext=o,t.keyPath=a;return}for(c=0;c<s;c++)r=n[c],t.treeContext=qr(o,s,c),ka(e,t,r,c);t.treeContext=o,t.keyPath=a}function wa(e,t,n){n.status=5,n.rootSegmentID=e.nextSegmentId++;var r=n.tracked;if(r===null||(e=r.contentKeyPath,e===null))throw Error(i(486));r=r.fallbackNode;var a=[],o=t.workingMap.get(e);return o===void 0?(n=[e[1],e[2],a,null,r,n.rootSegmentID],t.workingMap.set(e,n),oo(n,e[0],t),n):(o[4]=r,o[5]=n.rootSegmentID,o)}function Ta(e,t,n,r){r.status=5;var a=n.keyPath,o=n.blockedBoundary;if(o===null)r.id=e.nextSegmentId++,t.rootSlots=r.id,e.completedRootSegment!==null&&(e.completedRootSegment.status=5);else{if(o!==null&&o.status===0){var s=wa(e,t,o);if(o.tracked!==null&&o.tracked.contentKeyPath===a&&n.childIndex===-1){r.id===-1&&(r.id=r.parentFlushed?o.rootSegmentID:e.nextSegmentId++),s[3]=r.id;return}}if(r.id===-1&&(r.id=r.parentFlushed&&o!==null?o.rootSegmentID:e.nextSegmentId++),n.childIndex===-1)a===null?t.rootSlots=r.id:(n=t.workingMap.get(a),n===void 0?(n=[a[1],a[2],[],r.id],oo(n,a[0],t)):n[3]=r.id);else{if(a===null){if(e=t.rootSlots,e===null)e=t.rootSlots={};else if(typeof e==`number`)throw Error(i(491))}else if(o=t.workingMap,s=o.get(a),s===void 0)e={},s=[a[1],a[2],[],e],o.set(a,s),oo(s,a[0],t);else if(e=s[3],e===null)e=s[3]={};else if(typeof e==`number`)throw Error(i(491));e[n.childIndex]=r.id}}}function Ea(e,t){e=e.trackedPostpones,e!==null&&(t=t.tracked,t!==null&&(t=t.contentKeyPath,t!==null&&(e=e.workingMap.get(t),e!==void 0&&(e.length=4,e[2]=[],e[3]=null))))}function Da(e,t,n){return aa(e,n,t.replay,t.node,t.childIndex,t.blockedBoundary,t.hoistableState,t.abortSet,t.keyPath,t.formatContext,t.context,t.treeContext,t.row,t.componentStack)}function Oa(e,t,n){var r=t.blockedSegment,i=oa(e,r.chunks.length,null,t.formatContext,r.lastPushedText,!0);return r.children.push(i),r.lastPushedText=!1,ia(e,n,t.node,t.childIndex,t.blockedBoundary,i,t.blockedPreamble,t.hoistableState,t.abortSet,t.keyPath,t.formatContext,t.context,t.treeContext,t.row,t.componentStack)}function ka(e,t,n,r){var i=t.formatContext,a=t.context,o=t.keyPath,s=t.treeContext,c=t.componentStack,l=t.blockedSegment;if(l===null){l=t.replay;try{return xa(e,t,n,r)}catch(u){if(Di(),n=u===$r?ni():u,!e.aborted&&typeof n==`object`&&n){if(typeof n.then==`function`){r=u===$r?Ei():null,e=Da(e,t,r).ping,n.then(e.resolve,e.reject),t.formatContext=i,t.context=a,t.keyPath=o,t.treeContext=s,t.componentStack=c,t.replay=l,Ur(a);return}if(n.message===`Maximum call stack size exceeded`){n=u===$r?Ei():null,n=Da(e,t,n),e.pingedTasks.push(n),t.formatContext=i,t.context=a,t.keyPath=o,t.treeContext=s,t.componentStack=c,t.replay=l,Ur(a);return}}}}else{var u=l.children.length,d=l.chunks.length;try{return xa(e,t,n,r)}catch(r){if(Di(),l.children.length=u,l.chunks.length=d,n=r===$r?ni():r,!e.aborted&&typeof n==`object`&&n){if(typeof n.then==`function`){l=n,n=r===$r?Ei():null,e=Oa(e,t,n).ping,l.then(e.resolve,e.reject),t.formatContext=i,t.context=a,t.keyPath=o,t.treeContext=s,t.componentStack=c,Ur(a);return}if(n.message===`Maximum call stack size exceeded`){l=r===$r?Ei():null,l=Oa(e,t,l),e.pingedTasks.push(l),t.formatContext=i,t.context=a,t.keyPath=o,t.treeContext=s,t.componentStack=c,Ur(a);return}}}}throw t.formatContext=i,t.context=a,t.keyPath=o,t.treeContext=s,Ur(a),n}function Aa(e){var t=e.blockedBoundary,n=e.blockedSegment;n!==null&&(n.status=3,za(this,t,e.row,n))}function ja(e,t,n,r,a,o){for(var s=0;s<n.length;s++){var c=n[s];if(c.length===4)ja(e,t,c[2],c[3],a,o);else{c=c[5];var l=e,u=o,d=ra(l,null,new Set,null,!1);d.parentFlushed=!0,d.rootSegmentID=c,d.status=4,d.errorDigest=u,d.parentFlushed&&l.clientRenderedBoundaries.push(d)}}if(n.length=0,r!==null){if(t===null)throw Error(i(487));if(t.status!==4&&(t.status=4,t.errorDigest=o,t.parentFlushed&&e.clientRenderedBoundaries.push(t)),typeof r==`object`)for(var f in r)delete r[f]}}function Ma(e,t){if(e!==t.currentTask){var n=e.blockedBoundary;e=e.blockedSegment,e!==null&&(e.status=3),n!==null&&n.fallbackAbortableTasks.forEach(function(e){return Ma(e,t)})}}function Na(e,t,n){if(e!==t.currentTask){var r=e.blockedBoundary,i=e.blockedSegment;if(i===null||i.status===3){var a=la(e.componentStack),o=yi(n);if(r===null){if(r=e.replay,r===null){o||t.trackedPostpones===null||i===null?o?(e=bi(n),ua(t,e,a),t.status!==12&&t.status!==13&&da(t,e)):(ua(t,n,a),t.status!==12&&t.status!==13&&da(t,n)):(r=t.trackedPostpones,ua(t,n,a),Ta(t,r,e,i),za(t,null,e.row,i));return}t.status!==12&&t.status!==13&&(r.pendingTasks--,r.pendingTasks===0&&0<r.nodes.length&&(a=ua(t,n,a),ja(t,null,r.nodes,r.slots,n,a)),t.pendingRootTasks--,t.pendingRootTasks===0&&Fa(t))}else{var s=t.trackedPostpones;if(r.status!==4){if(!o&&s!==null&&i!==null)return ua(t,n,a),Ta(t,s,e,i),r.fallbackAbortableTasks.forEach(function(e){return Na(e,t,n)}),r.fallbackAbortableTasks.clear(),za(t,r,e.row,i);r.status=4,a=ua(t,n,a),r.errorDigest=a,Ea(t,r),r.parentFlushed&&t.clientRenderedBoundaries.push(r)}r.pendingTasks--,a=r.row,a!==null&&--a.pendingTasks===0&&fa(t,a),r.fallbackAbortableTasks.forEach(function(e){return Na(e,t,n)}),r.fallbackAbortableTasks.clear()}e=e.row,e!==null&&--e.pendingTasks===0&&fa(t,e),t.allPendingTasks--,t.allPendingTasks===0&&Ia(t)}}}function Pa(e,t){try{var n=e.renderState,r=n.onHeaders;if(r){var i=n.headers;if(i){n.headers=null;var a=i.preconnects;if(i.fontPreloads&&(a&&(a+=`, `),a+=i.fontPreloads),i.highImagePreloads&&(a&&(a+=`, `),a+=i.highImagePreloads),!t){var o=n.styles.values(),s=o.next();b:for(;0<i.remainingCapacity&&!s.done;s=o.next())for(var c=s.value.sheets.values(),l=c.next();0<i.remainingCapacity&&!l.done;l=c.next()){var u=l.value,d=u.props,f=d.href,p=u.props,m=wr(p.href,`style`,{crossOrigin:p.crossOrigin,integrity:p.integrity,nonce:p.nonce,type:p.type,fetchPriority:p.fetchPriority,referrerPolicy:p.referrerPolicy,media:p.media});if(0<=(i.remainingCapacity-=m.length+2))n.resets.style[f]=ve,a&&(a+=`, `),a+=m,n.resets.style[f]=typeof d.crossOrigin==`string`||typeof d.integrity==`string`?[d.crossOrigin,d.integrity]:ve;else break b}}r(a?{Link:a}:{})}}}catch(t){ua(e,t,{})}}function Fa(e){e.trackedPostpones===null&&Pa(e,!0),e.trackedPostpones===null&&Ua(e),e=e.onShellReady,e()}function Ia(e){Pa(e,e.trackedPostpones===null||e.completedRootSegment===null||e.completedRootSegment.status!==5),Ua(e),e=e.onAllReady,e()}function La(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null&&t.children[0].id===-1){var n=t.children[0];n.id=t.id,n.parentFlushed=!0,n.status!==1&&n.status!==3&&n.status!==4||La(e,n)}else e.completedSegments.push(t)}function Ra(e,t,n){if(V!==null){n=n.chunks;for(var r=0,i=0;i<n.length;i++)r+=n[i].byteLength;t===null?e.byteSize+=r:t.byteSize+=r}}function za(e,t,n,r){if(n!==null&&(--n.pendingTasks===0?fa(e,n):n.together&&ma(e,n)),e.allPendingTasks--,t===null){if(r!==null&&r.parentFlushed){if(e.completedRootSegment!==null)throw Error(i(389));e.completedRootSegment=r}e.pendingRootTasks--,e.pendingRootTasks===0&&Fa(e)}else if(t.pendingTasks--,t.status!==4){if(t.pendingTasks===0){if(t.status===0&&(t.status=1),r!==null&&r.parentFlushed&&(r.status===1||r.status===3)&&La(t,r),t.parentFlushed&&e.completedBoundaries.push(t),t.status===1)n=t.row,n!==null&&jr(n.hoistables,t.contentState),Ji(e,t)||(e.allPendingTasks++,t.fallbackAbortableTasks.forEach(Aa,e),t.fallbackAbortableTasks.clear(),n!==null&&--n.pendingTasks===0&&fa(e,n),e.allPendingTasks--),e.pendingRootTasks===0&&e.trackedPostpones===null&&t.preamble!==null&&Ua(e);else if(t.status===5&&(t=t.row,t!==null)){if(e.trackedPostpones!==null){n=e.trackedPostpones;var a=t.next;if(a!==null&&(r=a.boundaries,r!==null))for(a.boundaries=null,a=0;a<r.length;a++){var o=r[a];wa(e,n,o),za(e,o,null,null)}}e.allPendingTasks++,--t.pendingTasks===0&&fa(e,t),e.allPendingTasks--}}else r===null||!r.parentFlushed||r.status!==1&&r.status!==3||(La(t,r),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)),t=t.row,t!==null&&t.together&&ma(e,t)}e.allPendingTasks===0&&Ia(e)}function Ba(e){if(!(e.aborted||11<e.status)){var t=Lr,n=me.H;me.H=Ri;var r=me.A;me.A=Bi;var a=ta;ta=e;var o=zi;zi=e.resumableState;try{for(var s=e.pingedTasks,c=0;c<s.length;c++){var l=s[c],u=e,d=l.blockedSegment;if(d===null){a:if(l.replay.pendingTasks!==0){var f=u.currentTask;u.currentTask=l,Ur(l.context);var p=l.node;try{if(typeof l.replay.slots==`number`?ba(u,l,l.replay.slots,l.node,l.childIndex):Sa(u,l),l.replay.pendingTasks===1&&0<l.replay.nodes.length)throw Error(i(488));l.replay.pendingTasks--,l.abortSet.delete(l),za(u,l.blockedBoundary,l.row,null)}catch(e){Di();var m=e===$r?ni():e;if(u.aborted){e===$r&&(l.thenableState=Ei()),u.currentTask=f;var h=u;Ma(l,h),l.abortSet.delete(l),Na(l,h,h.fatalError)}else{if(typeof m==`object`&&m){if(typeof m.then==`function`){var g=l.ping;m.then(g.resolve,g.reject),l.thenableState=e===$r?Ei():null;break a}if(m.message===`Maximum call stack size exceeded`&&l.node!==p){l.thenableState=null,u.pingedTasks.push(l);break a}}l.replay.pendingTasks--,l.abortSet.delete(l);var _=la(l.componentStack);h=u;var v=l.blockedBoundary,y=u.aborted?u.fatalError:m,b=l.replay.nodes,x=l.replay.slots,S=ua(h,y,_);ja(h,v,b,x,y,S),u.pendingRootTasks--,u.pendingRootTasks===0&&Fa(u),u.allPendingTasks--,u.allPendingTasks===0&&Ia(u)}}finally{u.currentTask=f}}}else a:if(h=d,h.status===0){var C=u.currentTask;u.currentTask=l,Ur(l.context);var w=h.children.length,T=h.chunks.length,E=l.node;try{Sa(u,l),h.lastPushedText&&h.textEmbedded&&h.chunks.push(Be),l.abortSet.delete(l),h.status=1,Ra(u,l.blockedBoundary,h),za(u,l.blockedBoundary,l.row,h)}catch(e){Di(),h.children.length=w,h.chunks.length=T;var D=e===$r?ni():e;if(u.aborted)e===$r&&(l.thenableState=Ei()),u.currentTask=C,h=u,Ma(l,h),l.abortSet.delete(l),Na(l,h,h.fatalError);else{if(typeof D==`object`&&D){if(typeof D.then==`function`){h.status=0,l.thenableState=e===$r?Ei():null;var O=l.ping;D.then(O.resolve,O.reject);break a}if(D.message===`Maximum call stack size exceeded`&&l.node!==E){h.status=0,l.thenableState=null,u.pingedTasks.push(l);break a}}var k=la(l.componentStack);l.abortSet.delete(l),h.status=4;var A=l.blockedBoundary,j=l.row;if(j!==null&&--j.pendingTasks===0&&fa(u,j),u.allPendingTasks--,A===null){if(yi(D)){var M=bi(D);ua(u,M,k),da(u,M)}else ua(u,D,k),da(u,D)}else{var N=ua(u,D,k);if(A.pendingTasks--,A.status!==4){A.status=4,A.errorDigest=N,Ea(u,A);var P=A.row;P!==null&&(u.allPendingTasks++,--P.pendingTasks===0&&fa(u,P),u.allPendingTasks--),A.parentFlushed&&u.clientRenderedBoundaries.push(A),u.pendingRootTasks===0&&u.trackedPostpones===null&&A.preamble!==null&&Ua(u)}u.allPendingTasks===0&&Ia(u)}}}finally{u.currentTask=C}}}s.splice(0,c),e.destination!==null&&Qa(e,e.destination)}catch(t){ua(e,t,{}),da(e,t)}finally{zi=o,me.H=n,me.A=r,n===Ri&&Ur(t),ta=a}}}function Va(e,t,n){t.preambleChildren.length&&n.push(t.preambleChildren);for(var r=!1,i=0;i<t.children.length;i++)r=Ha(e,t.children[i],n)||r;return r}function Ha(e,t,n){var r=t.boundary;if(r===null)return Va(e,t,n);var a=r.preamble;if(a===null)return!1;switch(r.status){case 1:if(X(e.renderState,a.content),e.byteSize+=r.byteSize,t=r.completedSegments[0],!t)throw Error(i(391));return Va(e,t,n);case 5:if(e.trackedPostpones!==null)return!0;case 4:if(t.status===1)return X(e.renderState,a.fallback),Va(e,t,n);default:return!0}}function Ua(e){if(e.completedRootSegment&&e.completedPreambleSegments===null){var t=[],n=e.byteSize,r=Ha(e,e.completedRootSegment,t),i=e.renderState.preamble;!1===r||i.headChunks&&i.bodyChunks?e.completedPreambleSegments=t:e.byteSize=n}}function Wa(e,t,n,r){switch(n.parentFlushed=!0,n.status){case 0:n.id=e.nextSegmentId++;case 5:return r=n.id,n.lastPushedText=!1,n.textEmbedded=!1,e=e.renderState,L(t,Pt),L(t,e.placeholderPrefix),e=z(r.toString(16)),L(t,e),R(t,Ft);case 1:n.status=2;var a=!0,o=n.chunks,s=0;n=n.children;for(var c=0;c<n.length;c++){for(a=n[c];s<a.index;s++)L(t,o[s]);a=Ka(e,t,a,r)}for(;s<o.length-1;s++)L(t,o[s]);return s<o.length&&(a=R(t,o[s])),a;case 3:return!0;default:throw Error(i(390))}}var Ga=0;function Ka(e,t,n,r){var a=n.boundary;if(a===null)return Wa(e,t,n,r);if(n.boundary=null,a.parentFlushed=!0,a.status===4){var o=a.row;o!==null&&--o.pendingTasks===0&&fa(e,o),a=a.errorDigest,R(t,Bt),L(t,Ht),a!=null&&(L(t,Wt),L(t,z(W(a))),L(t,Ut)),R(t,Gt),Wa(e,t,n,r)}else if(a.status!==1)a.status===0&&(a.rootSegmentID=e.nextSegmentId++),0<a.completedSegments.length&&e.partialBoundaries.push(a),Kt(t,e.renderState,a.rootSegmentID),r&&jr(r,a.fallbackState),Wa(e,t,n,r);else if(!Xa&&Ji(e,a)&&(Ga+a.byteSize>e.progressiveChunkSize||Mr(a.contentState,Za)||a.defer))a.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(a),Kt(t,e.renderState,a.rootSegmentID),Wa(e,t,n,r);else{if(Ga+=a.byteSize,r&&jr(r,a.contentState),n=a.row,n!==null&&Ji(e,a)&&--n.pendingTasks===0&&fa(e,n),R(t,Lt),n=a.completedSegments,n.length!==1)throw Error(i(391));Ka(e,t,n[0],r)}return R(t,Vt)}function qa(e,t,n,r){return hn(t,e.renderState,n.parentFormatContext,n.id),Ka(e,t,n,r),gn(t,n.parentFormatContext)}function Ja(e,t,n){Ga=n.byteSize;for(var r=n.completedSegments,i=0;i<r.length;i++)Ya(e,t,n,r[i]);r.length=0,r=n.row,r!==null&&Ji(e,n)&&--r.pendingTasks===0&&fa(e,r),Yn(t,n.contentState,e.renderState),r=e.resumableState,e=e.renderState,i=n.rootSegmentID,n=n.contentState;var a=e.stylesToHoist,o=!!(r.instructions&128);return e.stylesToHoist=!1,L(t,e.startInlineScript),L(t,at),a?(!(r.instructions&4)&&(r.instructions|=4,L(t,An)),!(r.instructions&2)&&(r.instructions|=2,L(t,xn)),o&&!(r.instructions&256)&&(r.instructions|=256,L(t,Sn)),r.instructions&8?L(t,Tn):(r.instructions|=8,L(t,wn))):(!(r.instructions&2)&&(r.instructions|=2,L(t,xn)),o&&!(r.instructions&256)&&(r.instructions|=256,L(t,Sn)),L(t,Cn)),r=z(i.toString(16)),L(t,e.boundaryPrefix),L(t,r),L(t,En),L(t,e.segmentPrefix),L(t,r),a?(L(t,Dn),pr(t,n)):L(t,On),n=R(t,kn),Nt(t,e)&&n}function Ya(e,t,n,r){if(r.status===2)return!0;var a=n.contentState,o=r.id;if(o===-1){if((r.id=n.rootSegmentID)===-1)throw Error(i(392));return qa(e,t,r,a)}return o===n.rootSegmentID?qa(e,t,r,a):(qa(e,t,r,a),n=e.resumableState,e=e.renderState,L(t,e.startInlineScript),L(t,at),n.instructions&1?L(t,vn):(n.instructions|=1,L(t,_n)),L(t,e.segmentPrefix),o=z(o.toString(16)),L(t,o),L(t,yn),L(t,e.placeholderPrefix),L(t,o),t=R(t,bn),t)}var Xa=!1,Za=!1;function Qa(e,t){F=new Uint8Array(2048),I=0;try{if(!(0<e.pendingRootTasks)){var n,r=e.completedRootSegment;if(r!==null){if(r.status===5)return;var i=e.completedPreambleSegments;if(i===null)return;Ga=e.byteSize;var a=e.resumableState,o=e.renderState,s=o.preamble,c=s.htmlChunks,l=s.headChunks,u;if(c){for(u=0;u<c.length;u++)L(t,c[u]);if(l)for(u=0;u<l.length;u++)L(t,l[u]);else L(t,Ot(`head`)),L(t,at)}else if(l)for(u=0;u<l.length;u++)L(t,l[u]);var d=o.charsetChunks;for(u=0;u<d.length;u++)L(t,d[u]);d.length=0,o.preconnects.forEach(Xn,t),o.preconnects.clear();var f=o.viewportChunks;for(u=0;u<f.length;u++)L(t,f[u]);f.length=0,o.fontPreloads.forEach(Xn,t),o.fontPreloads.clear(),o.highImagePreloads.forEach(Xn,t),o.highImagePreloads.clear(),ye=o,o.styles.forEach(ir,t),ye=null;var p=o.importMapChunks;for(u=0;u<p.length;u++)L(t,p[u]);p.length=0,o.bootstrapScripts.forEach(Xn,t),o.scripts.forEach(Xn,t),o.scripts.clear(),o.bulkPreloads.forEach(Xn,t),o.bulkPreloads.clear(),c||l||(a.instructions|=32);var m=o.hoistableChunks;for(u=0;u<m.length;u++)L(t,m[u]);for(a=m.length=0;a<i.length;a++){var h=i[a];for(o=0;o<h.length;o++)Ka(e,t,h[o],null)}var g=e.renderState.preamble,_=g.headChunks;(g.htmlChunks||_)&&L(t,Mt(`head`));var v=g.bodyChunks;if(v)for(i=0;i<v.length;i++)L(t,v[i]);Za=!0,Ka(e,t,r,null),Za=!1,e.completedRootSegment=null;var y=e.renderState;if(e.allPendingTasks!==0||e.clientRenderedBoundaries.length!==0||e.completedBoundaries.length!==0||e.trackedPostpones!==null&&(e.trackedPostpones.rootNodes.length!==0||e.trackedPostpones.rootSlots!==null)){var b=e.resumableState;if(!(b.instructions&64)){if(b.instructions|=64,L(t,y.startInlineScript),!(b.instructions&32)){b.instructions|=32;var x=`_`+b.idPrefix+`R_`;L(t,sr),L(t,z(W(x))),L(t,Xe)}L(t,at),L(t,Z),R(t,xe)}}Nt(t,y)}var S=e.renderState;r=0;var C=S.viewportChunks;for(r=0;r<C.length;r++)L(t,C[r]);C.length=0,S.preconnects.forEach(Xn,t),S.preconnects.clear(),S.fontPreloads.forEach(Xn,t),S.fontPreloads.clear(),S.highImagePreloads.forEach(Xn,t),S.highImagePreloads.clear(),S.styles.forEach(or,t),S.scripts.forEach(Xn,t),S.scripts.clear(),S.bulkPreloads.forEach(Xn,t),S.bulkPreloads.clear();var w=S.hoistableChunks;for(r=0;r<w.length;r++)L(t,w[r]);w.length=0;var T=e.clientRenderedBoundaries;for(n=0;n<T.length;n++){var E=T[n];S=t;var D=e.resumableState,O=e.renderState,k=E.rootSegmentID,A=E.errorDigest;L(S,O.startInlineScript),L(S,at),D.instructions&4?L(S,Mn):(D.instructions|=4,L(S,jn)),L(S,O.boundaryPrefix),L(S,z(k.toString(16))),L(S,Nn),A!=null&&(L(S,Pn),A==null?L(S,Fn):L(S,z(Rn(A))));var j=R(S,In);if(!j){e.destination=null,n++,T.splice(0,n);return}}T.splice(0,n);var M=e.completedBoundaries;for(n=0;n<M.length;n++)if(!Ja(e,t,M[n])){e.destination=null,n++,M.splice(0,n);return}M.splice(0,n),ee(t),F=new Uint8Array(2048),I=0,Xa=!0;var N=e.partialBoundaries;for(n=0;n<N.length;n++){var P=N[n];a:{T=e,E=t,Ga=P.byteSize;var te=P.completedSegments;for(j=0;j<te.length;j++)if(!Ya(T,E,P,te[j])){j++,te.splice(0,j);var B=!1;break a}te.splice(0,j);var V=P.row;V!==null&&V.together&&P.pendingTasks===1&&(V.pendingTasks===1?pa(T,V,V.hoistables):V.pendingTasks--),B=Yn(E,P.contentState,T.renderState)}if(!B){e.destination=null,n++,N.splice(0,n);return}}N.splice(0,n),Xa=!1;var H=e.completedBoundaries;for(n=0;n<H.length;n++)if(!Ja(e,t,H[n])){e.destination=null,n++,H.splice(0,n);return}H.splice(0,n)}}finally{Xa=!1,n=e.postponedState,n!==null&&(n.nextSegmentId=e.nextSegmentId),e.allPendingTasks===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0?(e.flushScheduled=!1,n=e.resumableState,n.hasBody&&L(t,Mt(`body`)),n.hasHtml&&L(t,Mt(`html`)),ee(t),ro(e),e.status=13,t.close(),e.destination=null):ee(t)}}function $a(e){e.flushScheduled=e.destination!==null,P(function(){return Ba(e)}),j(function(){e.status===10&&(e.status=11),e.trackedPostpones===null&&Pa(e,e.pendingRootTasks===0)})}function eo(e){!1===e.flushScheduled&&e.pingedTasks.length===0&&e.destination!==null&&(e.flushScheduled=!0,j(function(){var t=e.destination;t?Qa(e,t):e.flushScheduled=!1}))}function to(e,t){if(e.status===12)e.status=13,e=e.fatalError,yi(e)&&(e=bi(e)),H(t,e);else if(e.status!==13&&e.destination===null){e.destination=t;try{Qa(e,t)}catch(t){ua(e,t,{}),da(e,t)}}}function no(e,t){try{if(0<t.size){var n=e.fatalError;t.forEach(function(t){return Na(t,e,n)}),t.clear()}e.destination!==null&&Qa(e,e.destination)}catch(t){ua(e,t,{}),da(e,t)}}function ro(e){e=e.renderLifetimeController,e!==null&&e.abort(`The render ended.`)}function io(e,t){if(t.aborted)ao(e,t.reason);else{var n=new AbortController;e.renderLifetimeController=n,t.addEventListener(`abort`,function(){ao(e,t.reason)},{signal:n.signal})}}function ao(e,t){if(!(e.aborted||e.status!==11&&e.status!==10)){ro(e);var n=typeof t==`object`&&!!t&&t.$$typeof===C;e.aborted=!0,t=n?vi(t):t===void 0?Error(i(432)):typeof t==`object`&&t&&typeof t.then==`function`?Error(i(530)):t,e.fatalError=t;var r=e.abortableTasks;r.forEach(function(t){return Ma(t,e)}),j(function(){return no(e,r)})}}function oo(e,t,n){if(t===null)n.rootNodes.push(e);else{var r=n.workingMap,i=r.get(t);i===void 0&&(i=[t[1],t[2],[],null],r.set(t,i),oo(i,t[0],n)),i[2].push(e)}}function so(e){var t=e.trackedPostpones;if(t===null||t.rootNodes.length===0&&t.rootSlots===null)return e.trackedPostpones=null;var n=e.completedRootSegment===null||e.completedRootSegment.status!==5&&e.completedPreambleSegments!==null;if(n){var r=e.nextSegmentId,i=t.rootSlots,a=e.resumableState;a.bootstrapScriptContent=void 0,a.bootstrapScripts=void 0,a.bootstrapModules=void 0}else{r=0,i=-1,a=e.resumableState;var o=e.renderState;a.nextFormID=0,a.hasBody=!1,a.hasHtml=!1,a.unknownResources={font:o.resets.font},a.dnsResources=o.resets.dns,a.connectResources=o.resets.connect,a.imageResources=o.resets.image,a.styleResources=o.resets.style,a.scriptResources={},a.moduleUnknownResources={},a.moduleScriptResources={},a.instructions=0}return t={nextSegmentId:r,rootFormatContext:e.rootFormatContext,progressiveChunkSize:e.progressiveChunkSize,resumableState:e.resumableState,replayNodes:t.rootNodes,replaySlots:i},n&&(e.postponedState=t),t}function co(){var e=n.version;if(e!==`19.3.0`)throw Error(i(527,e,`19.3.0`))}co(),co(),t.prerender=function(e,t){return new Promise(function(n,r){var i=t?t.onHeaders:void 0,a;i&&(a=function(e){i(new Headers(e))});var o=je(t?t.identifierPrefix:void 0,t?t.unstable_externalRuntimeSrc:void 0,t?t.bootstrapScriptContent:void 0,t?t.bootstrapScripts:void 0,t?t.bootstrapModules:void 0),s=Qi(e,o,Ae(o,void 0,t?t.unstable_externalRuntimeSrc:void 0,t?t.importMap:void 0,a,t?t.maxHeadersLength:void 0),Pe(t?t.namespaceURI:void 0),t?t.progressiveChunkSize:void 0,t?t.onError:void 0,t?t.onBrowserBailout:void 0,function(){var e=new ReadableStream({type:`bytes`,pull:function(e){to(s,e)},cancel:function(e){s.destination=null,ao(s,e)}},{highWaterMark:0});e={postponed:so(s),prelude:e},n(e)},void 0,void 0,r);t&&t.signal&&io(s,t.signal),$a(s)})},t.renderToReadableStream=function(e,t){return new Promise(function(n,r){var i,a,o=new Promise(function(e,t){a=e,i=t}),s=t?t.onHeaders:void 0,c;s&&(c=function(e){s(new Headers(e))});var l=je(t?t.identifierPrefix:void 0,t?t.unstable_externalRuntimeSrc:void 0,t?t.bootstrapScriptContent:void 0,t?t.bootstrapScripts:void 0,t?t.bootstrapModules:void 0),u=Zi(e,l,Ae(l,t?t.nonce:void 0,t?t.unstable_externalRuntimeSrc:void 0,t?t.importMap:void 0,c,t?t.maxHeadersLength:void 0),Pe(t?t.namespaceURI:void 0),t?t.progressiveChunkSize:void 0,t?t.onError:void 0,t?t.onBrowserBailout:void 0,a,function(){var e=new ReadableStream({type:`bytes`,pull:function(e){to(u,e)},cancel:function(e){u.destination=null,ao(u,e)}},{highWaterMark:0});e.allReady=o,n(e)},function(e){o.catch(function(){}),r(e)},i,t?t.formState:void 0);t&&t.signal&&io(u,t.signal),$a(u)})},t.resume=function(e,t,n){return new Promise(function(r,i){var a,o,s=new Promise(function(e,t){o=e,a=t}),c=$i(e,t,Ae(t.resumableState,n?n.nonce:void 0,void 0,void 0,void 0,void 0),n?n.onError:void 0,n?n.onBrowserBailout:void 0,o,function(){var e=new ReadableStream({type:`bytes`,pull:function(e){to(c,e)},cancel:function(e){c.destination=null,ao(c,e)}},{highWaterMark:0});e.allReady=s,r(e)},function(e){s.catch(function(){}),i(e)},a);n&&n.signal&&io(c,n.signal),$a(c)})},t.resumeAndPrerender=function(e,t,n){return new Promise(function(r,i){var a=ea(e,t,Ae(t.resumableState,void 0,void 0,void 0,void 0,void 0),n?n.onError:void 0,n?n.onBrowserBailout:void 0,function(){var e=new ReadableStream({type:`bytes`,pull:function(e){to(a,e)},cancel:function(e){a.destination=null,ao(a,e)}},{highWaterMark:0});e={postponed:so(a),prelude:e},r(e)},void 0,void 0,i);n&&n.signal&&io(a,n.signal),$a(a)})},t.version=`19.3.0`})),l=a((e=>{var t=s(),n=c();e.version=t.version,e.renderToString=t.renderToString,e.renderToStaticMarkup=t.renderToStaticMarkup,e.renderToReadableStream=n.renderToReadableStream,e.resume=n.resume})),u=e(),d=l(),f={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},p={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},m=1e3,h=1001,g=1002,_=1003,v=1004,y=1005,b=1006,x=1007,S=1008,C=1009,w=1010,T=1011,E=1012,D=1013,O=1014,k=1015,A=1016,j=1017,M=1018,N=1020,P=35902,F=35899,I=1021,L=1022,R=1023,ee=1026,te=1027,z=1028,B=1029,V=1030,H=1031,ne=1033,U=33776,re=33777,ie=33778,ae=33779,oe=35840,se=35841,ce=35842,le=35843,W=36196,ue=37492,de=37496,fe=37488,pe=37489,me=37490,he=37491,ge=37808,_e=37809,ve=37810,ye=37811,be=37812,xe=37813,Se=37814,Ce=37815,G=37816,we=37817,Te=37818,Ee=37819,K=37820,De=37821,q=36492,Oe=36494,ke=36495,Ae=36283,je=36284,Me=36285,Ne=36286,Pe=2300,Fe=2301,Ie=2302,Le=2303,Re=2400,ze=2401,Be=2402,Ve=3200,He=`srgb`,Ue=`srgb-linear`,We=`linear`,Ge=`srgb`,Ke=7680,qe=35044,Je=2e3;function Ye(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Xe(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ze(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Qe(){let e=Ze(`canvas`);return e.style.display=`block`,e}var $e={};function et(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function tt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function J(...e){e=tt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Y(...e){e=tt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function nt(...e){let t=e.join(` `);t in $e||($e[t]=!0,J(...e))}function rt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var it={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},at=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ot=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),st=1234567,ct=Math.PI/180,lt=180/Math.PI;function ut(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ot[e&255]+ot[e>>8&255]+ot[e>>16&255]+ot[e>>24&255]+`-`+ot[t&255]+ot[t>>8&255]+`-`+ot[t>>16&15|64]+ot[t>>24&255]+`-`+ot[n&63|128]+ot[n>>8&255]+`-`+ot[n>>16&255]+ot[n>>24&255]+ot[r&255]+ot[r>>8&255]+ot[r>>16&255]+ot[r>>24&255]).toLowerCase()}function dt(e,t,n){return Math.max(t,Math.min(n,e))}function ft(e,t){return(e%t+t)%t}function pt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function mt(e,t,n){return e===t?0:(n-e)/(t-e)}function ht(e,t,n){return(1-n)*e+n*t}function gt(e,t,n,r){return ht(e,t,1-Math.exp(-n*r))}function _t(e,t=1){return t-Math.abs(ft(e,t*2)-t)}function vt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function yt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function bt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function xt(e,t){return e+Math.random()*(t-e)}function St(e){return e*(.5-Math.random())}function Ct(e){e!==void 0&&(st=e);let t=st+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wt(e){return e*ct}function Tt(e){return e*lt}function Et(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Dt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Ot(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function kt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:J(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function At(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function jt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Mt={DEG2RAD:ct,RAD2DEG:lt,generateUUID:ut,clamp:dt,euclideanModulo:ft,mapLinear:pt,inverseLerp:mt,lerp:ht,damp:gt,pingpong:_t,smoothstep:vt,smootherstep:yt,randInt:bt,randFloat:xt,randFloatSpread:St,seededRandom:Ct,degToRad:wt,radToDeg:Tt,isPowerOfTwo:Et,ceilPowerOfTwo:Dt,floorPowerOfTwo:Ot,setQuaternionFromProperEuler:kt,normalize:jt,denormalize:At},X=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:J(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ft.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ft.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pt.copy(this).projectOnVector(e),this.sub(Pt)}reflect(e){return this.sub(Pt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pt=new Z,Ft=new Nt,Q=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return nt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(It.makeScale(e,t)),this}rotate(e){return nt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(It.makeRotation(-e)),this}translate(e,t){return nt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(It.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},It=new Q,Lt=new Q().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rt=new Q().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zt(){let e={enabled:!0,workingColorSpace:Ue,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Vt(e.r),e.g=Vt(e.g),e.b=Vt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ht(e.r),e.g=Ht(e.g),e.b=Ht(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?We:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return nt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return nt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ue]:{primaries:t,whitePoint:r,transfer:We,toXYZ:Lt,fromXYZ:Rt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:Lt,fromXYZ:Rt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),e}var Bt=zt();function Vt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ht(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ut,Wt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ut===void 0&&(Ut=Ze(`canvas`)),Ut.width=e.width,Ut.height=e.height;let t=Ut.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ut}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ze(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Vt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Vt(t[e]/255)*255):t[e]=Vt(t[e]);return{data:t,width:e.width,height:e.height}}return J(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Gt=0,Kt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gt++}),this.uuid=ut(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(qt(r[t].image)):e.push(qt(r[t]))}else e=qt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function qt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Wt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(J(`Texture: Unable to serialize Texture.`),{})}var Jt=0,Yt=new Z,Xt=class e extends at{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=h,i=h,a=b,o=S,s=R,c=C,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jt++}),this.uuid=ut(),this.name=``,this.source=new Kt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new X(0,0),this.repeat=new X(1,1),this.center=new X(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Q,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yt).x}get height(){return this.source.getSize(Yt).y}get depth(){return this.source.getSize(Yt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){J(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){J(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case m:e.x-=Math.floor(e.x);break;case h:e.x=e.x<0?0:1;break;case g:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case m:e.y-=Math.floor(e.y);break;case h:e.y=e.y<0?0:1;break;case g:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null,Xt.DEFAULT_MAPPING=300,Xt.DEFAULT_ANISOTROPY=1;var Zt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qt=class extends at{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:b,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t),this.textures=[];let r=new Xt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:b,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Kt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},$t=class extends Qt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},en=class extends Xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_,this.minFilter=_,this.wrapR=h,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},tn=class extends Xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_,this.minFilter=_,this.wrapR=h,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},nn=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/rn.setFromMatrixColumn(e,0).length(),i=1/rn.setFromMatrixColumn(e,1).length(),a=1/rn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(on,e,sn)}lookAt(e,t,n){let r=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),cn.crossVectors(n,un),cn.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),cn.crossVectors(n,un)),cn.normalize(),ln.crossVectors(un,cn),r[0]=cn.x,r[4]=ln.x,r[8]=un.x,r[1]=cn.y,r[5]=ln.y,r[9]=un.y,r[2]=cn.z,r[6]=ln.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=rn.set(r[0],r[1],r[2]).length(),o=rn.set(r[4],r[5],r[6]).length(),s=rn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),an.copy(this);let c=1/a,l=1/o,u=1/s;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=l,an.elements[5]*=l,an.elements[6]*=l,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,t.setFromRotationMatrix(an),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Je,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Je,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},rn=new Z,an=new nn,on=new Z(0,0,0),sn=new Z(1,1,1),cn=new Z,ln=new Z,un=new Z,dn=new nn,fn=new Nt,pn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-dt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(dt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:J(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fn.setFromEuler(this),this.setFromQuaternion(fn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER=`XYZ`;var mn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},hn=0,gn=new Z,_n=new Nt,vn=new nn,yn=new Z,bn=new Z,xn=new Z,Sn=new Nt,Cn=new Z(1,0,0),wn=new Z(0,1,0),Tn=new Z(0,0,1),En={type:`added`},Dn={type:`removed`},On={type:`childadded`,child:null},kn={type:`childremoved`,child:null},An=class e extends at{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hn++}),this.uuid=ut(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new Z,n=new pn,r=new Nt,i=new Z(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nn},normalMatrix:{value:new Q}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _n.setFromAxisAngle(e,t),this.quaternion.multiply(_n),this}rotateOnWorldAxis(e,t){return _n.setFromAxisAngle(e,t),this.quaternion.premultiply(_n),this}rotateX(e){return this.rotateOnAxis(Cn,e)}rotateY(e){return this.rotateOnAxis(wn,e)}rotateZ(e){return this.rotateOnAxis(Tn,e)}translateOnAxis(e,t){return gn.copy(e).applyQuaternion(this.quaternion),this.position.add(gn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cn,e)}translateY(e){return this.translateOnAxis(wn,e)}translateZ(e){return this.translateOnAxis(Tn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yn.copy(e):yn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),bn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(bn,yn,this.up):vn.lookAt(yn,bn,this.up),this.quaternion.setFromRotationMatrix(vn),r&&(vn.extractRotation(r.matrixWorld),_n.setFromRotationMatrix(vn),this.quaternion.premultiply(_n.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(Y(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(En),On.child=e,this.dispatchEvent(On),On.child=null):Y(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dn),kn.child=e,this.dispatchEvent(kn),kn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(En),On.child=e,this.dispatchEvent(On),On.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bn,e,xn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bn,Sn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};An.DEFAULT_UP=new Z(0,1,0),An.DEFAULT_MATRIX_AUTO_UPDATE=!0,An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jn=class extends An{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Mn={type:`move`},Nn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new jn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Pn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},In={h:0,s:0,l:0};function Ln(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Rn=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=He){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Bt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Bt.workingColorSpace){if(e=ft(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Ln(i,r,e+1/3),this.g=Ln(i,r,e),this.b=Ln(i,r,e-1/3)}return Bt.colorSpaceToWorking(this,r),this}setStyle(e,t=He){function n(t){t!==void 0&&parseFloat(t)<1&&J(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:J(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);J(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=He){let n=Pn[e.toLowerCase()];return n===void 0?J(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vt(e.r),this.g=Vt(e.g),this.b=Vt(e.b),this}copyLinearToSRGB(e){return this.r=Ht(e.r),this.g=Ht(e.g),this.b=Ht(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=He){return Bt.workingToColorSpace(zn.copy(this),e),Math.round(dt(zn.r*255,0,255))*65536+Math.round(dt(zn.g*255,0,255))*256+Math.round(dt(zn.b*255,0,255))}getHexString(e=He){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.workingToColorSpace(zn.copy(this),t);let n=zn.r,r=zn.g,i=zn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Bt.workingColorSpace){return Bt.workingToColorSpace(zn.copy(this),t),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=He){Bt.workingToColorSpace(zn.copy(this),e);let t=zn.r,n=zn.g,r=zn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(In);let n=ht(Fn.h,In.h,t),r=ht(Fn.s,In.s,t),i=ht(Fn.l,In.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zn=new Rn;Rn.NAMES=Pn;var Bn=class extends An{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vn=new Z,Hn=new Z,Un=new Z,Wn=new Z,Gn=new Z,Kn=new Z,qn=new Z,Jn=new Z,Yn=new Z,Xn=new Z,Zn=new Zt,Qn=new Zt,$n=new Zt,er=class e{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vn.subVectors(e,t),r.cross(Vn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Vn.subVectors(r,t),Hn.subVectors(n,t),Un.subVectors(e,t);let a=Vn.dot(Vn),o=Vn.dot(Hn),s=Vn.dot(Un),c=Hn.dot(Hn),l=Hn.dot(Un),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Wn)!==null&&Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Wn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Wn.x),s.addScaledVector(a,Wn.y),s.addScaledVector(o,Wn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Zn.setScalar(0),Qn.setScalar(0),$n.setScalar(0),Zn.fromBufferAttribute(e,t),Qn.fromBufferAttribute(e,n),$n.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Zn,i.x),a.addScaledVector(Qn,i.y),a.addScaledVector($n,i.z),a}static isFrontFacing(e,t,n,r){return Vn.subVectors(n,t),Hn.subVectors(e,t),Vn.cross(Hn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),Vn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Gn.subVectors(r,n),Kn.subVectors(i,n),Jn.subVectors(e,n);let s=Gn.dot(Jn),c=Kn.dot(Jn);if(s<=0&&c<=0)return t.copy(n);Yn.subVectors(e,r);let l=Gn.dot(Yn),u=Kn.dot(Yn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Gn,a);Xn.subVectors(e,i);let f=Gn.dot(Xn),p=Kn.dot(Xn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Kn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return qn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(qn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Gn,a).addScaledVector(Kn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},tr=class{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=rr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,rr):rr.fromBufferAttribute(r,t),rr.applyMatrix4(e.matrixWorld),this.expandByPoint(rr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),ir.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),ir.copy(e.boundingBox)),ir.applyMatrix4(e.matrixWorld),this.union(ir)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rr),rr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),fr.subVectors(this.max,dr),ar.subVectors(e.a,dr),or.subVectors(e.b,dr),sr.subVectors(e.c,dr),cr.subVectors(or,ar),lr.subVectors(sr,or),ur.subVectors(ar,sr);let t=[0,-cr.z,cr.y,0,-lr.z,lr.y,0,-ur.z,ur.y,cr.z,0,-cr.x,lr.z,0,-lr.x,ur.z,0,-ur.x,-cr.y,cr.x,0,-lr.y,lr.x,0,-ur.y,ur.x,0];return!hr(t,ar,or,sr,fr)||(t=[1,0,0,0,1,0,0,0,1],!hr(t,ar,or,sr,fr))?!1:(pr.crossVectors(cr,lr),t=[pr.x,pr.y,pr.z],hr(t,ar,or,sr,fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},nr=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],rr=new Z,ir=new tr,ar=new Z,or=new Z,sr=new Z,cr=new Z,lr=new Z,ur=new Z,dr=new Z,fr=new Z,pr=new Z,mr=new Z;function hr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){mr.fromArray(e,a);let o=i.x*Math.abs(mr.x)+i.y*Math.abs(mr.y)+i.z*Math.abs(mr.z),s=t.dot(mr),c=n.dot(mr),l=r.dot(mr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var gr=new Z,_r=new X,vr=0,yr=class extends at{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=qe,this.updateRanges=[],this.gpuType=k,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.applyMatrix3(e),this.setXY(t,_r.x,_r.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix4(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyNormalMatrix(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.transformDirection(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=At(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=At(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=At(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=At(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=At(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},br=class extends yr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},xr=class extends yr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Sr=class extends yr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Cr=new tr,wr=new Z,Tr=new Z,Er=class{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Cr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);let t=wr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(wr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(Tr)),this.expandByPoint(wr.copy(e.center).sub(Tr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Dr=0,Or=new nn,kr=new An,Ar=new Z,jr=new tr,Mr=new tr,Nr=new Z,Pr=class e extends at{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dr++}),this.uuid=ut(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ye(e)?xr:br)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Q().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Or.makeRotationFromQuaternion(e),this.applyMatrix4(Or),this}rotateX(e){return Or.makeRotationX(e),this.applyMatrix4(Or),this}rotateY(e){return Or.makeRotationY(e),this.applyMatrix4(Or),this}rotateZ(e){return Or.makeRotationZ(e),this.applyMatrix4(Or),this}translate(e,t,n){return Or.makeTranslation(e,t,n),this.applyMatrix4(Or),this}scale(e,t,n){return Or.makeScale(e,t,n),this.applyMatrix4(Or),this}lookAt(e){return kr.lookAt(e),kr.updateMatrix(),this.applyMatrix4(kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Sr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&J(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Y(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];jr.setFromBufferAttribute(n),this.morphTargetsRelative?(Nr.addVectors(this.boundingBox.min,jr.min),this.boundingBox.expandByPoint(Nr),Nr.addVectors(this.boundingBox.max,jr.max),this.boundingBox.expandByPoint(Nr)):(this.boundingBox.expandByPoint(jr.min),this.boundingBox.expandByPoint(jr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Y(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Y(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new Z,1/0);return}if(e){let n=this.boundingSphere.center;if(jr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Mr.setFromBufferAttribute(n),this.morphTargetsRelative?(Nr.addVectors(jr.min,Mr.min),jr.expandByPoint(Nr),Nr.addVectors(jr.max,Mr.max),jr.expandByPoint(Nr)):(jr.expandByPoint(Mr.min),jr.expandByPoint(Mr.max))}jr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Nr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Nr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Nr.fromBufferAttribute(a,t),o&&(Ar.fromBufferAttribute(e,t),Nr.add(Ar)),r=Math.max(r,n.distanceToSquared(Nr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Y(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Y(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new yr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new Z,s[e]=new Z;let c=new Z,l=new Z,u=new Z,d=new X,f=new X,p=new X,m=new Z,h=new Z;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new Z,y=new Z,b=new Z,x=new Z;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new yr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new Z,i=new Z,a=new Z,o=new Z,s=new Z,c=new Z,l=new Z,u=new Z;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nr.fromBufferAttribute(e,t),Nr.normalize(),e.setXYZ(t,Nr.x,Nr.y,Nr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new yr(a,r,i)}if(this.index===null)return J(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Fr=new Z,Ir=new Z,Lr=new Q,Rr=class{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Fr.subVectors(n,t).cross(Ir.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Fr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Lr.getNormalMatrix(e),r=this.coplanarPoint(Fr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},zr=0,Br=class extends at{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zr++}),this.uuid=ut(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rn(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ke,this.stencilZFail=Ke,this.stencilZPass=Ke,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){J(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){J(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Rn().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Rr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new X().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new X().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Vr=new Z,Hr=new Z,Ur=new Z,Wr=new Z,Gr=class{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vr.copy(this.origin).addScaledVector(this.direction,t),Vr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Hr.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),Wr.copy(this.origin).sub(Hr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Ur),o=Wr.dot(this.direction),s=-Wr.dot(Ur),c=Wr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Hr).addScaledVector(Ur,d),f}intersectSphere(e,t){if(e.radius<0)return null;Vr.subVectors(e.center,this.origin);let n=Vr.dot(this.direction),r=Vr.dot(Vr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Vr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,I=1/w,L=T-P*D,R=E-F*D,ee=O-P*A,te=k-F*A,z=j-P*N,B=M-F*N,V=z*te-B*ee,H=L*B-R*z,ne=ee*R-te*L;if(r){if(V<0||H<0||ne<0)return null}else if((V<0||H<0||ne<0)&&(V>0||H>0||ne>0))return null;let U=V+H+ne;if(U===0)return null;let re=I*(V*D+H*A+ne*N);return(U>0?re<0:re>0)?null:this.at(re/U,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kr=class extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Rn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},qr=new nn,Jr=new Gr,Yr=new Er,Xr=new Z,Zr=new Z,Qr=new Z,$r=new Z,ei=new Z,ti=new Z,ni=new Z,ri=new Z,ii=class extends An{constructor(e=new Pr,t=new Kr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ti.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ei.fromBufferAttribute(s,e),a?ti.addScaledVector(ei,r):ti.addScaledVector(ei.sub(t),r))}t.add(ti)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(i),Jr.copy(e.ray).recast(e.near),!(Yr.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Yr,Xr)===null||Jr.origin.distanceToSquared(Xr)>(e.far-e.near)**2))&&(qr.copy(i).invert(),Jr.copy(e.ray).applyMatrix4(qr),(n.boundingBox===null||Jr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=oi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=oi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=oi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=oi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ai(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ri.copy(s),ri.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ri);return l<n.near||l>n.far?null:{distance:l,point:ri.clone(),object:e}}function oi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Zr),e.getVertexPosition(c,Qr),e.getVertexPosition(l,$r);let u=ai(e,t,n,r,Zr,Qr,$r,ni);if(u){let e=new Z;er.getBarycoord(ni,Zr,Qr,$r,e),i&&(u.uv=er.getInterpolatedAttribute(i,s,c,l,e,new X)),a&&(u.uv1=er.getInterpolatedAttribute(a,s,c,l,e,new X)),o&&(u.normal=er.getInterpolatedAttribute(o,s,c,l,e,new Z),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new Z,materialIndex:0};er.getNormal(Zr,Qr,$r,t.normal),u.face=t,u.barycoord=e}return u}var si=class extends Xt{constructor(e=null,t=1,n=1,r,i,a,o,s,c=_,l=_,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ci=new Er,li=new X(.5,.5),ui=new Z,di=class{constructor(e=new Rr,t=new Rr,n=new Rr,r=new Rr,i=new Rr,a=new Rr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Je,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){return ci.center.set(0,0,0),ci.radius=.7071067811865476+li.distanceTo(e.center),ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ui.x=r.normal.x>0?e.max.x:e.min.x,ui.y=r.normal.y>0?e.max.y:e.min.y,ui.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ui)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},fi=class extends Xt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},pi=class extends Xt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},mi=class extends Xt{constructor(e,t,n=O,r,i,a,o=_,s=_,c,l=ee,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},hi=class extends mi{constructor(e,t=O,n=301,r,i,a=_,o=_,s,c=ee){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},gi=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},_i=class e extends Pr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Sr(c,3)),this.setAttribute(`normal`,new Sr(l,3)),this.setAttribute(`uv`,new Sr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new Z;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},vi=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){J(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new X:new Z);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new Z,r=[],i=[],a=[],o=new Z,s=new nn;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new Z)}i[0]=new Z,a[0]=new Z;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(dt(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(dt(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},yi=class extends vi{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new X){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},bi=class extends yi{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function xi(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Si=new Z,Ci=new Z,wi=new xi,Ti=new xi,Ei=new xi,Di=class extends vi{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new Z){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Ci.subVectors(r[0],r[1]).add(r[0]),c=Ci);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Si.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Si),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),wi.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Ti.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Ei.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(wi.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Ti.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Ei.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(wi.calc(s),Ti.calc(s),Ei.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new Z().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Oi(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function ki(e,t){let n=1-e;return n*n*t}function Ai(e,t){return 2*(1-e)*e*t}function ji(e,t){return e*e*t}function Mi(e,t,n,r){return ki(e,t)+Ai(e,n)+ji(e,r)}function Ni(e,t){let n=1-e;return n*n*n*t}function Pi(e,t){let n=1-e;return 3*n*n*e*t}function Fi(e,t){return 3*(1-e)*e*e*t}function Ii(e,t){return e*e*e*t}function Li(e,t,n,r,i){return Ni(e,t)+Pi(e,n)+Fi(e,r)+Ii(e,i)}var Ri=class extends vi{constructor(e=new X,t=new X,n=new X,r=new X){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new X){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Li(e,r.x,i.x,a.x,o.x),Li(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zi=class extends vi{constructor(e=new Z,t=new Z,n=new Z,r=new Z){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Z){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Li(e,r.x,i.x,a.x,o.x),Li(e,r.y,i.y,a.y,o.y),Li(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bi=class extends vi{constructor(e=new X,t=new X){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new X){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vi=class extends vi{constructor(e=new Z,t=new Z){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new Z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hi=class extends vi{constructor(e=new X,t=new X,n=new X){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new X){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Mi(e,r.x,i.x,a.x),Mi(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ui=class extends vi{constructor(e=new Z,t=new Z,n=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Z){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Mi(e,r.x,i.x,a.x),Mi(e,r.y,i.y,a.y),Mi(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wi=class extends vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new X){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Oi(o,s.x,c.x,l.x,u.x),Oi(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new X().fromArray(n))}return this}},Gi=Object.freeze({__proto__:null,ArcCurve:bi,CatmullRomCurve3:Di,CubicBezierCurve:Ri,CubicBezierCurve3:zi,EllipseCurve:yi,LineCurve:Bi,LineCurve3:Vi,QuadraticBezierCurve:Hi,QuadraticBezierCurve3:Ui,SplineCurve:Wi}),Ki=class extends vi{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Gi[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Gi[n.type]().fromJSON(n))}return this}},qi=class extends Ki{constructor(e){super(),this.type=`Path`,this.currentPoint=new X,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Bi(this.currentPoint.clone(),new X(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Hi(this.currentPoint.clone(),new X(e,t),new X(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Ri(this.currentPoint.clone(),new X(e,t),new X(n,r),new X(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Wi([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new yi(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ji=class extends qi{constructor(e){super(e),this.uuid=ut(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new qi().fromJSON(n))}return this}};function Yi(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Xi(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=ra(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Qi(a,o,n,s,c,l,0),o}function Xi(e,t,n,r,i){let a;if(i===Da(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=wa(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=wa(i/r|0,e[i],e[i+1],a);return a&&ga(a,a.next)&&(Ta(a),a=a.next),a}function Zi(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(ga(n,n.next)||ha(n.prev,n,n.next)===0)){if(Ta(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Qi(e,t,n,r,i,a,o){if(!e)return;!o&&a&&ca(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?ea(e,r,i,a):$i(e)){t.push(c.i,e.i,l.i),Ta(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=ta(Zi(e),t),Qi(e,t,n,r,i,a,2)):o===2&&na(e,t,n,r,i,a):Qi(Zi(e),t,n,r,i,a,1);break}}}function $i(e){let t=e.prev,n=e,r=e.next;if(ha(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&pa(i,s,a,c,o,l,m.x,m.y)&&ha(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ea(e,t,n,r){let i=e.prev,a=e,o=e.next;if(ha(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=ua(p,m,t,n,r),v=ua(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&pa(s,u,c,d,l,f,y.x,y.y)&&ha(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&pa(s,u,c,d,l,f,b.x,b.y)&&ha(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&pa(s,u,c,d,l,f,y.x,y.y)&&ha(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&pa(s,u,c,d,l,f,b.x,b.y)&&ha(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function ta(e,t){let n=e;do{let r=n.prev,i=n.next.next;!ga(r,i)&&_a(r,n,n.next,i)&&xa(r,i)&&xa(i,r)&&(t.push(r.i,n.i,i.i),Ta(n),Ta(n.next),n=e=i),n=n.next}while(n!==e);return Zi(n)}function na(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&ma(o,e)){let s=Ca(o,e);o=Zi(o,o.next),s=Zi(s,s.next),Qi(o,t,n,r,i,a,0),Qi(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function ra(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Xi(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(da(o))}i.sort(ia);for(let e=0;e<i.length;e++)n=aa(i[e],n);return n}function ia(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function aa(e,t){let n=oa(e,t);if(!n)return t;let r=Ca(n,e);return Zi(r,r.next),Zi(n,n.next)}function oa(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(ga(e,n))return n;do{if(ga(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&fa(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);xa(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&sa(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function sa(e,t){return ha(e.prev,e,t.prev)<0&&ha(t.next,e,e.next)<0}function ca(e,t,n,r){let i=e;do i.z===0&&(i.z=ua(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,la(i)}function la(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function ua(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function da(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function fa(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function pa(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&fa(e,t,n,r,i,a,o,s)}function ma(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!ba(e,t)&&(xa(e,t)&&xa(t,e)&&Sa(e,t)&&(ha(e.prev,e,t.prev)||ha(e,t.prev,t))||ga(e,t)&&ha(e.prev,e,e.next)>0&&ha(t.prev,t,t.next)>0)}function ha(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function ga(e,t){return e.x===t.x&&e.y===t.y}function _a(e,t,n,r){let i=ya(ha(e,t,n)),a=ya(ha(e,t,r)),o=ya(ha(n,r,e)),s=ya(ha(n,r,t));return!!(i!==a&&o!==s||i===0&&va(e,n,t)||a===0&&va(e,r,t)||o===0&&va(n,e,r)||s===0&&va(n,t,r))}function va(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function ya(e){return e>0?1:e<0?-1:0}function ba(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&_a(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function xa(e,t){return ha(e.prev,e,e.next)<0?ha(e,t,e.next)>=0&&ha(e,e.prev,t)>=0:ha(e,t,e.prev)<0||ha(e,e.next,t)<0}function Sa(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Ca(e,t){let n=Ea(e.i,e.x,e.y),r=Ea(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function wa(e,t,n,r){let i=Ea(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Ta(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Ea(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Da(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Oa=class{static triangulate(e,t,n=2){return Yi(e,t,n)}},ka=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Aa(e),ja(n,e);let a=e.length;t.forEach(Aa);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,ja(n,t[e]);let o=Oa.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Aa(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function ja(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Ma=class e extends Pr{constructor(e=new Ji([new X(.5,.5),new X(-.5,.5),new X(-.5,-.5),new X(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Sr(r,3)),this.setAttribute(`uv`,new Sr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Na:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new Z,b=new Z,x=new Z}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!ka.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];ka.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));if(s<=10000000000000001e-36*c*c){e.splice(r,1),n--;continue}t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||Y(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new X(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new X(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,P=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),P=P.concat(N)}let F;if(p===0)F=ka.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);z(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);z(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}F=ka.triangulateShape(e,t)}let I=F.length,L=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],P[e],L):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),z(x.x,x.y,x.z)):z(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],P[t],L):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),z(x.x,x.y,x.z)):z(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);z(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?z(i.x,i.y+g[s-1].y,g[s-1].x+n):z(i.x,i.y,c+n)}}}R(),ee();function R(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<I;e++){let n=F[e];B(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<I;e++){let n=F[e];B(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<I;e++){let t=F[e];B(t[2],t[1],t[0])}for(let e=0;e<I;e++){let t=F[e];B(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ee(){let e=r.length/3,t=0;te(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];te(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function te(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);V(t+r+n,t+i+n,t+i+a,t+r+a)}}}function z(e,t,n){a.push(e),a.push(t),a.push(n)}function B(e,t,i){H(e),H(t),H(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);ne(o[0]),ne(o[1]),ne(o[2])}function V(e,t,i,a){H(e),H(t),H(a),H(t),H(i),H(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);ne(s[0]),ne(s[1]),ne(s[3]),ne(s[1]),ne(s[2]),ne(s[3])}function H(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function ne(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Pa(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Gi[i.type]().fromJSON(i)),new e(r,t.options)}},Na={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new X(a,o),new X(s,c),new X(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new X(o,1-c),new X(l,1-d),new X(f,1-m),new X(h,1-_)]:[new X(s,1-c),new X(u,1-d),new X(p,1-m),new X(g,1-_)]}};function Pa(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Fa=class e extends Pr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Sr(p,3)),this.setAttribute(`normal`,new Sr(m,3)),this.setAttribute(`uv`,new Sr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function Ia(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ra(i))i.isRenderTargetTexture?(J(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Ra(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function La(e){let t={};for(let n=0;n<e.length;n++){let r=Ia(e[n]);for(let e in r)t[e]=r[e]}return t}function Ra(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function za(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ba(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Bt.workingColorSpace}var Va={clone:Ia,merge:La},Ha=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ua=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wa=class extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ha,this.fragmentShader=Ua,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ia(e.uniforms),this.uniformsGroups=za(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Rn().setHex(r.value);break;case`v2`:this.uniforms[n].value=new X().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new Z().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Zt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Q().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new nn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ga=class extends Wa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ka=class extends Br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Rn(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qa=class extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ve,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ja=class extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ya(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Xa(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Za=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Qa=class extends Za{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Re,endingEnd:Re}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case ze:i=e,o=2*t-n;break;case Be:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case ze:a=e,s=2*n-t;break;case Be:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},$a=class extends Za{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},eo=class extends Za{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},to=class extends Za{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=io(n,t,g,y,r);i[p]=no(x,o,_,b,m)}return i}};function no(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function ro(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function io(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=no(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=ro(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var ao=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ya(t,this.TimeBufferType),this.values=Ya(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ya(e.times,Array),values:Ya(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Xa(e.settings)&&(n.settings={inTangents:Ya(e.settings.inTangents,Array),outTangents:Ya(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new to(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Pe:t=this.InterpolantFactoryMethodDiscrete;break;case Fe:t=this.InterpolantFactoryMethodLinear;break;case Ie:t=this.InterpolantFactoryMethodSmooth;break;case Le:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return J(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pe;case this.InterpolantFactoryMethodLinear:return Fe;case this.InterpolantFactoryMethodSmooth:return Ie;case this.InterpolantFactoryMethodBezier:return Le}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Xa(this.settings)&&(oo(this.settings.inTangents,e),oo(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Y(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(Y(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){Y(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){Y(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Xe(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){Y(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ie,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Xa(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function oo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}ao.prototype.ValueTypeName=``,ao.prototype.TimeBufferType=Float32Array,ao.prototype.ValueBufferType=Float32Array,ao.prototype.DefaultInterpolation=Fe;var so=class extends ao{constructor(e,t,n){super(e,t,n)}};so.prototype.ValueTypeName=`bool`,so.prototype.ValueBufferType=Array,so.prototype.DefaultInterpolation=Pe,so.prototype.InterpolantFactoryMethodLinear=void 0,so.prototype.InterpolantFactoryMethodSmooth=void 0;var co=class extends ao{constructor(e,t,n,r){super(e,t,n,r)}};co.prototype.ValueTypeName=`color`;var lo=class extends ao{constructor(e,t,n,r){super(e,t,n,r)}};lo.prototype.ValueTypeName=`number`;var uo=class extends Za{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Nt.slerpFlat(i,0,a,c-o,a,c,s);return i}},fo=class extends ao{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new uo(this.times,this.values,this.getValueSize(),e)}};fo.prototype.ValueTypeName=`quaternion`,fo.prototype.InterpolantFactoryMethodSmooth=void 0;var po=class extends ao{constructor(e,t,n){super(e,t,n)}};po.prototype.ValueTypeName=`string`,po.prototype.ValueBufferType=Array,po.prototype.DefaultInterpolation=Pe,po.prototype.InterpolantFactoryMethodLinear=void 0,po.prototype.InterpolantFactoryMethodSmooth=void 0;var mo=class extends ao{constructor(e,t,n,r){super(e,t,n,r)}};mo.prototype.ValueTypeName=`vector`;var ho={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(go(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!go(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function go(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var _o=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},vo=class{constructor(e){this.manager=e===void 0?_o:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};vo.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var yo={},bo=class extends Error{constructor(e,t){super(e),this.response=t}},xo=class extends vo{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=ho.get(`file:${e}`);if(i!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0);return}if(yo[e]!==void 0){yo[e].push({onLoad:t,onProgress:n,onError:r});return}yo[e]=[],yo[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&J(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=yo[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new bo(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{ho.add(`file:${e}`,t);let n=yo[e];delete yo[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=yo[e];if(n===void 0)throw this.manager.itemError(e),t;delete yo[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},So=class extends An{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Rn(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Co=new nn,wo=new Z,To=new Z,Eo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new X(512,512),this.mapType=C,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new di,this._frameExtents=new X(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;wo.setFromMatrixPosition(e.matrixWorld),t.position.copy(wo),To.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(To),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Co.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Co,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Co)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Do=new Z,Oo=new Nt,ko=new Z,Ao=class extends An{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Je,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Do,Oo,ko),ko.x===1&&ko.y===1&&ko.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,Oo,ko.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Do,Oo,ko),ko.x===1&&ko.y===1&&ko.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,Oo,ko.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},jo=new Z,Mo=new X,No=new X,Po=class extends Ao{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=lt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ct*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lt*2*Math.atan(Math.tan(ct*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){jo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jo.x,jo.y).multiplyScalar(-e/jo.z),jo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jo.x,jo.y).multiplyScalar(-e/jo.z)}getViewSize(e,t){return this.getViewBounds(e,Mo,No),t.subVectors(No,Mo)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ct*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fo=class extends Ao{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Io=class extends Eo{constructor(){super(new Fo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lo=class extends So{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new Io}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ro=class extends So{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},zo=-90,Bo=1,Vo=class extends An{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Po(zo,Bo,e,t);r.layers=this.layers,this.add(r);let i=new Po(zo,Bo,e,t);i.layers=this.layers,this.add(i);let a=new Po(zo,Bo,e,t);a.layers=this.layers,this.add(a);let o=new Po(zo,Bo,e,t);o.layers=this.layers,this.add(o);let s=new Po(zo,Bo,e,t);s.layers=this.layers,this.add(s);let c=new Po(zo,Bo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ho=class extends Po{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Uo=`\\[\\]\\.:\\/`,Wo=RegExp(`[\\[\\]\\.:\\/]`,`g`),Go=`[^\\[\\]\\.:\\/]`,Ko=`[^`+Uo.replace(`\\.`,``)+`]`,qo=`((?:WC+[\\/:])*)`.replace(`WC`,Go),Jo=`(WCOD+)?`.replace(`WCOD`,Ko),Yo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Go),Xo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Go),Zo=RegExp(`^`+qo+Jo+Yo+Xo+`$`),Qo=[`material`,`materials`,`bones`,`map`],$o=class{constructor(e,t,n){let r=n||es.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},es=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Wo,``)}static parseTrackName(e){let t=Zo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Qo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){J(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){Y(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){Y(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){Y(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){Y(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){Y(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){Y(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){Y(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;Y(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){Y(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){Y(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};es.Composite=$o,es.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},es.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},es.prototype.GetterByBindingType=[es.prototype._getValue_direct,es.prototype._getValue_array,es.prototype._getValue_arrayElement,es.prototype._getValue_toArray],es.prototype.SetterByBindingTypeAndVersioning=[[es.prototype._setValue_direct,es.prototype._setValue_direct_setNeedsUpdate,es.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[es.prototype._setValue_array,es.prototype._setValue_array_setNeedsUpdate,es.prototype._setValue_array_setMatrixWorldNeedsUpdate],[es.prototype._setValue_arrayElement,es.prototype._setValue_arrayElement_setNeedsUpdate,es.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[es.prototype._setValue_fromArray,es.prototype._setValue_fromArray_setNeedsUpdate,es.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ts=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=dt(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var ns=new X,rs=class{constructor(e=new X(1/0,1/0),t=new X(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ns.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ns).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},is=class{constructor(){this.type=`ShapePath`,this.color=new Rn,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new qi,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,i,a){return this.currentPath.bezierCurveTo(e,t,n,r,i,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(e,t){let n=!1,r=t.length;for(let i=0,a=r-1;i<r;a=i++){let r=t[i],o=t[a];r.y>e.y!=o.y>e.y&&e.x<(o.x-r.x)*(e.y-r.y)/(o.y-r.y)+r.x&&(n=!n)}return n}function t(t,n){let r=n.getCenter(new X);if(e(r,t))return r;let i=r.y,a=[],o=t.length;for(let e=0;e<o;e++){let n=t[e],r=t[(e+1)%o];if(n.y>i!=r.y>i){let e=n.x+(i-n.y)*(r.x-n.x)/(r.y-n.y);a.push(e)}}return a.length>1&&(a.sort((e,t)=>e-t),r.x=(a[0]+a[1])/2),r}let n=this.userData.style&&this.userData.style.fillRule||`nonzero`;n!==`nonzero`&&n!==`evenodd`&&(J(`Fill-rule "`+n+`" is not supported, falling back to "nonzero".`),n=`nonzero`);let r=n===`nonzero`?(e=>e!==0):(e=>!!(e&1)),i=[];for(let e of this.subPaths){let n=e.getPoints();if(n.length<3)continue;let r=ka.area(n);if(r===0)continue;let a=new rs;for(let e=0;e<n.length;e++)a.expandByPoint(n[e]);i.push({subPath:e,points:n,boundingBox:a,interiorPoint:t(n,a),absArea:Math.abs(r),winding:r<0?-1:1,container:null,exclude:!1,role:null})}i.sort((e,t)=>t.absArea-e.absArea);for(let t=0;t<i.length;t++){let n=i[t],a=0;for(let r=t-1;r>=0;r--){let t=i[r];if(t.boundingBox.containsBox(n.boundingBox)&&e(n.interiorPoint,t.points)){n.container=t.exclude?t.container:t,a=t.winding,n.winding+=a;break}}r(n.winding)===r(a)&&(n.exclude=!0)}for(let e of i)e.exclude||(e.role=e.container===null||e.container.role===`hole`?`outer`:`hole`);let a=[],o=new Map;for(let e of i){if(e.exclude||e.role!==`outer`)continue;let t=new Ji;t.curves=e.subPath.curves,a.push(t),o.set(e,t)}for(let e of i){if(e.exclude||e.role!==`hole`)continue;let t=o.get(e.container);if(!t)continue;let n=new qi;n.curves=e.subPath.curves,t.holes.push(n)}return a}},as=class extends at{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function os(e,t,n,r){let i=ss(r);switch(n){case I:return e*t;case z:return e*t/i.components*i.byteLength;case B:return e*t/i.components*i.byteLength;case V:return e*t*2/i.components*i.byteLength;case H:return e*t*2/i.components*i.byteLength;case L:return e*t*3/i.components*i.byteLength;case R:return e*t*4/i.components*i.byteLength;case ne:return e*t*4/i.components*i.byteLength;case U:case re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ie:case ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case se:case le:return Math.max(e,16)*Math.max(t,8)/4;case oe:case ce:return Math.max(e,8)*Math.max(t,8)/2;case W:case ue:case fe:case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case de:case me:case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ve:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case G:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case K:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case De:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case q:case Oe:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Me:case Ne:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ss(e){switch(e){case C:case w:return{byteLength:1,components:1};case E:case T:case A:return{byteLength:2,components:1};case j:case M:return{byteLength:2,components:4};case O:case D:case k:return{byteLength:4,components:1};case P:case F:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?J(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function cs(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ls(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var us={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},$={common:{diffuse:{value:new Rn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Q},alphaMap:{value:null},alphaMapTransform:{value:new Q},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Q}},envmap:{envMap:{value:null},envMapRotation:{value:new Q},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Q}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Q}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Q},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Q},normalScale:{value:new X(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Q},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Q}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Q}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Q}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new Rn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Q},alphaTest:{value:0},uvTransform:{value:new Q}},sprite:{diffuse:{value:new Rn(16777215)},opacity:{value:1},center:{value:new X(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Q},alphaMap:{value:null},alphaMapTransform:{value:new Q},alphaTest:{value:0}}},ds={basic:{uniforms:La([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:us.meshbasic_vert,fragmentShader:us.meshbasic_frag},lambert:{uniforms:La([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Rn(0)},envMapIntensity:{value:1}}]),vertexShader:us.meshlambert_vert,fragmentShader:us.meshlambert_frag},phong:{uniforms:La([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Rn(0)},specular:{value:new Rn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:us.meshphong_vert,fragmentShader:us.meshphong_frag},standard:{uniforms:La([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new Rn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:us.meshphysical_vert,fragmentShader:us.meshphysical_frag},toon:{uniforms:La([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new Rn(0)}}]),vertexShader:us.meshtoon_vert,fragmentShader:us.meshtoon_frag},matcap:{uniforms:La([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:us.meshmatcap_vert,fragmentShader:us.meshmatcap_frag},points:{uniforms:La([$.points,$.fog]),vertexShader:us.points_vert,fragmentShader:us.points_frag},dashed:{uniforms:La([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:us.linedashed_vert,fragmentShader:us.linedashed_frag},depth:{uniforms:La([$.common,$.displacementmap]),vertexShader:us.depth_vert,fragmentShader:us.depth_frag},normal:{uniforms:La([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:us.meshnormal_vert,fragmentShader:us.meshnormal_frag},sprite:{uniforms:La([$.sprite,$.fog]),vertexShader:us.sprite_vert,fragmentShader:us.sprite_frag},background:{uniforms:{uvTransform:{value:new Q},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:us.background_vert,fragmentShader:us.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Q}},vertexShader:us.backgroundCube_vert,fragmentShader:us.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:us.cube_vert,fragmentShader:us.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:us.equirect_vert,fragmentShader:us.equirect_frag},distance:{uniforms:La([$.common,$.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:us.distance_vert,fragmentShader:us.distance_frag},shadow:{uniforms:La([$.lights,$.fog,{color:{value:new Rn(0)},opacity:{value:1}}]),vertexShader:us.shadow_vert,fragmentShader:us.shadow_frag}};ds.physical={uniforms:La([ds.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Q},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Q},clearcoatNormalScale:{value:new X(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Q},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Q},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Q},sheen:{value:0},sheenColor:{value:new Rn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Q},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Q},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Q},transmissionSamplerSize:{value:new X},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Q},attenuationDistance:{value:0},attenuationColor:{value:new Rn(0)},specularColor:{value:new Rn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Q},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Q},anisotropyVector:{value:new X},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Q}}]),vertexShader:us.meshphysical_vert,fragmentShader:us.meshphysical_frag};var fs={r:0,b:0,g:0},ps=new nn,ms=new Q;ms.set(-1,0,0,0,1,0,0,0,1);function hs(e,t,n,r,i,a){let o=new Rn(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new ii(new _i(1,1,1),new Wa({name:`BackgroundCubeMaterial`,uniforms:Ia(ds.backgroundCube.uniforms),vertexShader:ds.backgroundCube.vertexShader,fragmentShader:ds.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ps.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ms),l.material.toneMapped=Bt.getTransfer(i.colorSpace)!==Ge,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new ii(new Fa(2,2),new Wa({name:`BackgroundMaterial`,uniforms:Ia(ds.background.uniforms),vertexShader:ds.background.vertexShader,fragmentShader:ds.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Bt.getTransfer(i.colorSpace)!==Ge,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(fs,Ba(e)),n.buffers.color.setClear(fs.r,fs.g,fs.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function gs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function _s(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function vs(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(J(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&J(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function ys(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Rr,s=new Q,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var bs=4,xs=6,Ss=20,Cs=256,ws=new Fo,Ts=new Rn,Es=null,Ds=0,Os=0,ks=!1,As=new Z,js=new Z,Ms=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=As}=i;Es=this._renderer.getRenderTarget(),Ds=this._renderer.getActiveCubeFace(),Os=this._renderer.getActiveMipmapLevel(),ks=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Es,Ds,Os),this._renderer.xr.enabled=ks,e.scissorTest=!1,Fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Es=this._renderer.getRenderTarget(),Ds=this._renderer.getActiveCubeFace(),Os=this._renderer.getActiveMipmapLevel(),ks=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:b,minFilter:b,generateMipmaps:!1,type:A,format:R,colorSpace:Ue,depthBuffer:!1},r=Ps(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ps(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ns(r)),this._blurMaterial=Ls(r,e,t),this._ggxMaterial=Is(r,e,t)}return r}_compileMaterial(e){let t=new ii(new Pr,e);this._renderer.compile(t,ws)}_sceneToCubeUV(e,t,n,r,i){let a=new Po(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Ts),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ii(new _i,new Kr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Ts),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Fs(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rs());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Fs(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,ws)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-bs?n-d+bs:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Fs(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,ws),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Fs(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,ws)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Fs(t,3*l*(r>this._lodMax-bs?r-this._lodMax+bs:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,ws)}};function Ns(e){let t=[],n=[],r=e,i=e-bs+1+xs;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?js.set(1,r,n):e===1?js.set(-n,1,-r):e===2?js.set(-n,r,1):e===3?js.set(-1,r,-n):e===4?js.set(-n,-1,r):js.set(n,r,-1),js.toArray(l,(e*6+t)*3)}}let u=new Pr;u.setAttribute(`position`,new yr(c,3)),u.setAttribute(`outputDirection`,new yr(l,3)),n.push(new ii(u,null)),r>bs&&r--}return{lodMeshes:n,sizeLods:t}}function Ps(e,t,n){let r=new $t(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Fs(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Is(e,t,n){return new Wa({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ls(e,t,n){return new Wa({name:`SphericalGaussianBlur`,defines:{SAMPLES:Ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Bs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Rs(){return new Wa({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function zs(){return new Wa({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Bs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Vs=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new fi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _i(5,5,5),i=new Wa({name:`CubemapFromEquirect`,uniforms:Ia(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new ii(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=b),new Vo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Hs(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Vs(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Ms(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Ms(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Us(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&nt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ws(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?xr:br)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Gs(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ks(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:Y(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function qs(e,t,n){let r=new WeakMap,i=new Zt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new en(h,p,m,u);g.type=k,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new X(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Js(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ys={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Xs(e,t,n,r,i,a){let o=new $t(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Pr;l.setAttribute(`position`,new Sr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Sr([0,2,0,0,2,0],2));let u=new Ga({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ii(l,u),f=new Fo(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new $t(t,n,{type:A,depthBuffer:!1,stencilBuffer:!1}),c=new $t(t,n,{type:A,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Bt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Ys[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Zs=new Xt,Qs=new mi(1,1),$s=new en,ec=new tn,tc=new fi,nc=[],rc=[],ic=new Float32Array(16),ac=new Float32Array(9),oc=new Float32Array(4);function sc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=nc[i];if(a===void 0&&(a=new Float32Array(i),nc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function cc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function lc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function uc(e,t){let n=rc[t];n===void 0&&(n=new Int32Array(t),rc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function dc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function fc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(cc(n,t))return;e.uniform2fv(this.addr,t),lc(n,t)}}function pc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(cc(n,t))return;e.uniform3fv(this.addr,t),lc(n,t)}}function mc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(cc(n,t))return;e.uniform4fv(this.addr,t),lc(n,t)}}function hc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(cc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),lc(n,t)}else{if(cc(n,r))return;oc.set(r),e.uniformMatrix2fv(this.addr,!1,oc),lc(n,r)}}function gc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(cc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),lc(n,t)}else{if(cc(n,r))return;ac.set(r),e.uniformMatrix3fv(this.addr,!1,ac),lc(n,r)}}function _c(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(cc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),lc(n,t)}else{if(cc(n,r))return;ic.set(r),e.uniformMatrix4fv(this.addr,!1,ic),lc(n,r)}}function vc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function yc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(cc(n,t))return;e.uniform2iv(this.addr,t),lc(n,t)}}function bc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(cc(n,t))return;e.uniform3iv(this.addr,t),lc(n,t)}}function xc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(cc(n,t))return;e.uniform4iv(this.addr,t),lc(n,t)}}function Sc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Cc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(cc(n,t))return;e.uniform2uiv(this.addr,t),lc(n,t)}}function wc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(cc(n,t))return;e.uniform3uiv(this.addr,t),lc(n,t)}}function Tc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(cc(n,t))return;e.uniform4uiv(this.addr,t),lc(n,t)}}function Ec(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Qs.compareFunction=n.isReversedDepthBuffer()?518:515,a=Qs):a=Zs,n.setTexture2D(t||a,i)}function Dc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ec,i)}function Oc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||tc,i)}function kc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||$s,i)}function Ac(e){switch(e){case 5126:return dc;case 35664:return fc;case 35665:return pc;case 35666:return mc;case 35674:return hc;case 35675:return gc;case 35676:return _c;case 5124:case 35670:return vc;case 35667:case 35671:return yc;case 35668:case 35672:return bc;case 35669:case 35673:return xc;case 5125:return Sc;case 36294:return Cc;case 36295:return wc;case 36296:return Tc;case 35678:case 36198:case 36298:case 36306:case 35682:return Ec;case 35679:case 36299:case 36307:return Dc;case 35680:case 36300:case 36308:case 36293:return Oc;case 36289:case 36303:case 36311:case 36292:return kc}}function jc(e,t){e.uniform1fv(this.addr,t)}function Mc(e,t){let n=sc(t,this.size,2);e.uniform2fv(this.addr,n)}function Nc(e,t){let n=sc(t,this.size,3);e.uniform3fv(this.addr,n)}function Pc(e,t){let n=sc(t,this.size,4);e.uniform4fv(this.addr,n)}function Fc(e,t){let n=sc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ic(e,t){let n=sc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Lc(e,t){let n=sc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Rc(e,t){e.uniform1iv(this.addr,t)}function zc(e,t){e.uniform2iv(this.addr,t)}function Bc(e,t){e.uniform3iv(this.addr,t)}function Vc(e,t){e.uniform4iv(this.addr,t)}function Hc(e,t){e.uniform1uiv(this.addr,t)}function Uc(e,t){e.uniform2uiv(this.addr,t)}function Wc(e,t){e.uniform3uiv(this.addr,t)}function Gc(e,t){e.uniform4uiv(this.addr,t)}function Kc(e,t,n){let r=this.cache,i=t.length,a=uc(n,i);cc(r,a)||(e.uniform1iv(this.addr,a),lc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Qs:Zs;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function qc(e,t,n){let r=this.cache,i=t.length,a=uc(n,i);cc(r,a)||(e.uniform1iv(this.addr,a),lc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ec,a[e])}function Jc(e,t,n){let r=this.cache,i=t.length,a=uc(n,i);cc(r,a)||(e.uniform1iv(this.addr,a),lc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||tc,a[e])}function Yc(e,t,n){let r=this.cache,i=t.length,a=uc(n,i);cc(r,a)||(e.uniform1iv(this.addr,a),lc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||$s,a[e])}function Xc(e){switch(e){case 5126:return jc;case 35664:return Mc;case 35665:return Nc;case 35666:return Pc;case 35674:return Fc;case 35675:return Ic;case 35676:return Lc;case 5124:case 35670:return Rc;case 35667:case 35671:return zc;case 35668:case 35672:return Bc;case 35669:case 35673:return Vc;case 5125:return Hc;case 36294:return Uc;case 36295:return Wc;case 36296:return Gc;case 35678:case 36198:case 36298:case 36306:case 35682:return Kc;case 35679:case 36299:case 36307:return qc;case 35680:case 36300:case 36308:case 36293:return Jc;case 36289:case 36303:case 36311:case 36292:return Yc}}var Zc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ac(t.type)}},Qc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xc(t.type)}},$c=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},el=/(\w+)(\])?(\[|\.)?/g;function tl(e,t){e.seq.push(t),e.map[t.id]=t}function nl(e,t,n){let r=e.name,i=r.length;for(el.lastIndex=0;;){let a=el.exec(r),o=el.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){tl(n,l===void 0?new Zc(s,e,t):new Qc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new $c(s),tl(n,e)),n=e}}}var rl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);nl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function il(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var al=37297,ol=0;function sl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var cl=new Q;function ll(e){Bt._getMatrix(cl,Bt.workingColorSpace,e);let t=`mat3( ${cl.elements.map(e=>e.toFixed(4))} )`;switch(Bt.getTransfer(e)){case We:return[t,`LinearTransferOETF`];case Ge:return[t,`sRGBTransferOETF`];default:return J(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function ul(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+sl(e.getShaderSource(t),r)}return i}function dl(e,t){let n=ll(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var fl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function pl(e,t){let n=fl[t];return n===void 0?(J(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var ml=new Z;function hl(){return Bt.getLuminanceCoefficients(ml),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${ml.x.toFixed(4)}, ${ml.y.toFixed(4)}, ${ml.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function gl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(yl).join(`
`)}function _l(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function vl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function yl(e){return e!==``}function bl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Sl=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cl(e){return e.replace(Sl,Tl)}var wl=new Map;function Tl(e,t){let n=us[t];if(n===void 0){let e=wl.get(t);if(e!==void 0)n=us[e],J(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Cl(n)}var El=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dl(e){return e.replace(El,Ol)}function Ol(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function kl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Al={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function jl(e){return Al[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Ml={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Nl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Ml[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Pl={302:`ENVMAP_MODE_REFRACTION`};function Fl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Pl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Il={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Ll(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Il[e.combine]||`ENVMAP_BLENDING_NONE`}function Rl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function zl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=jl(n),l=Nl(n),u=Fl(n),d=Ll(n),f=Rl(n),p=gl(n),m=_l(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(yl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(yl).join(`
`),_.length>0&&(_+=`
`)):(g=[kl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(yl).join(`
`),_=[kl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:us.tonemapping_pars_fragment,n.toneMapping===0?``:pl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,us.colorspace_pars_fragment,dl(`linearToOutputTexel`,n.outputColorSpace),hl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(yl).join(`
`)),o=Cl(o),o=bl(o,n),o=xl(o,n),s=Cl(s),s=bl(s,n),s=xl(s,n),o=Dl(o),s=Dl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=il(i,i.VERTEX_SHADER,y),S=il(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=ul(i,x,`vertex`),n=ul(i,S,`fragment`);Y(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):J(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new rl(i,h),T=vl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,al)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ol++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Bl=0,Vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hl(e),t.set(e,n)),n}},Hl=class{constructor(e){this.id=Bl++,this.code=e,this.usedTimes=0}};function Ul(e){return e===1030||e===37490||e===36285}function Wl(e,t,n,r,i,a){let o=new mn,s=new Vl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&J(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=ds[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,F=!!i.map,I=!!i.matcap,L=!!x,R=!!i.aoMap,ee=!!i.lightMap,te=!!i.bumpMap&&i.wireframe===!1,z=!!i.normalMap,B=!!i.displacementMap,V=!!i.emissiveMap,H=!!i.metalnessMap,ne=!!i.roughnessMap,U=i.anisotropy>0,re=i.clearcoat>0,ie=i.dispersion>0,ae=i.retroreflectivity>0,oe=i.iridescence>0,se=i.sheen>0,ce=i.transmission>0,le=U&&!!i.anisotropyMap,W=re&&!!i.clearcoatMap,ue=re&&!!i.clearcoatNormalMap,de=re&&!!i.clearcoatRoughnessMap,fe=oe&&!!i.iridescenceMap,pe=oe&&!!i.iridescenceThicknessMap,me=se&&!!i.sheenColorMap,he=se&&!!i.sheenRoughnessMap,ge=!!i.specularMap,_e=!!i.specularColorMap,ve=!!i.specularIntensityMap,ye=ce&&!!i.transmissionMap,be=ce&&!!i.thicknessMap,xe=!!i.gradientMap,Se=!!i.alphaMap,Ce=i.alphaTest>0,G=!!i.alphaHash,we=!!i.extensions,Te=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Te=e.toneMapping);let Ee={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Bt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:F,matcap:I,envMap:L,envMapMode:L&&x.mapping,envMapCubeUVHeight:S,aoMap:R,lightMap:ee,bumpMap:te,normalMap:z,displacementMap:B,emissiveMap:V,normalMapObjectSpace:z&&i.normalMapType===1,normalMapTangentSpace:z&&i.normalMapType===0,packedNormalMap:z&&i.normalMapType===0&&Ul(i.normalMap.format),metalnessMap:H,roughnessMap:ne,anisotropy:U,anisotropyMap:le,clearcoat:re,clearcoatMap:W,clearcoatNormalMap:ue,clearcoatRoughnessMap:de,dispersion:ie,retroreflection:ae,iridescence:oe,iridescenceMap:fe,iridescenceThicknessMap:pe,sheen:se,sheenColorMap:me,sheenRoughnessMap:he,specularMap:ge,specularColorMap:_e,specularIntensityMap:ve,transmission:ce,transmissionMap:ye,thicknessMap:be,gradientMap:xe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Se,alphaTest:Ce,alphaHash:G,combine:i.combine,mapUv:F&&m(i.map.channel),aoMapUv:R&&m(i.aoMap.channel),lightMapUv:ee&&m(i.lightMap.channel),bumpMapUv:te&&m(i.bumpMap.channel),normalMapUv:z&&m(i.normalMap.channel),displacementMapUv:B&&m(i.displacementMap.channel),emissiveMapUv:V&&m(i.emissiveMap.channel),metalnessMapUv:H&&m(i.metalnessMap.channel),roughnessMapUv:ne&&m(i.roughnessMap.channel),anisotropyMapUv:le&&m(i.anisotropyMap.channel),clearcoatMapUv:W&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:me&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:he&&m(i.sheenRoughnessMap.channel),specularMapUv:ge&&m(i.specularMap.channel),specularColorMapUv:_e&&m(i.specularColorMap.channel),specularIntensityMapUv:ve&&m(i.specularIntensityMap.channel),transmissionMapUv:ye&&m(i.transmissionMap.channel),thicknessMapUv:be&&m(i.thicknessMap.channel),alphaMapUv:Se&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(z||U),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(F||Se),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&z===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Te,decodeVideoTexture:F&&i.map.isVideoTexture===!0&&Bt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:V&&i.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:we&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(we&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=ds[t];n=Va.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new zl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Gl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Kl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ql(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Jl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Kl),r.length>1&&r.sort(t||ql),i.length>1&&i.sort(t||ql)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Yl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Jl,e.set(t,[i])):n>=r.length?(i=new Jl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Xl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new Z,color:new Rn};break;case`SpotLight`:n={position:new Z,direction:new Z,color:new Rn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new Z,color:new Rn,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new Z,skyColor:new Rn,groundColor:new Rn};break;case`RectAreaLight`:n={color:new Rn,position:new Z,halfWidth:new Z,halfHeight:new Z}}return e[t.id]=n,n}}}function Zl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Ql=0;function $l(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function eu(e){let t=new Xl,n=Zl(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new Z);let i=new Z,a=new nn,o=new nn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort($l);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=$.LTC_FLOAT_1,r.rectAreaLTC2=$.LTC_FLOAT_2):(r.rectAreaLTC1=$.LTC_HALF_1,r.rectAreaLTC2=$.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Ql++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function tu(e){let t=new eu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function nu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new tu(e),t.set(n,[a])):r>=i.length?(a=new tu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var ru=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,au=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],ou=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],su=new nn,cu=new Z,lu=new Z;function uu(e,t,n){let r=new di,i=new X,a=new X,o=new Zt,s=new qa,c=new Ja,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Wa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new X},radius:{value:4}},vertexShader:ru,fragmentShader:iu}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Pr;m.setAttribute(`position`,new yr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new ii(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(J(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=v!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){J(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){J(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new $t(i.x,i.y,{format:V,type:A,minFilter:b,magFilter:b,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new mi(i.x,i.y,k),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ee,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=_,d.map.depthTexture.magFilter=_}else l.isPointLight?(d.map=new Vs(i.x),d.map.depthTexture=new hi(i.x,O)):(d.map=new $t(i.x,i.y),d.map.depthTexture=new mi(i.x,i.y,O)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ee,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=b,d.map.depthTexture.magFilter=b):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=_,d.map.depthTexture.magFilter=_);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),cu.setFromMatrixPosition(l.matrixWorld),e.position.copy(cu),lu.copy(e.position),lu.add(au[t]),e.up.copy(ou[t]),e.lookAt(lu),e.updateMatrixWorld(),n.makeTranslation(-cu.x,-cu.y,-cu.z),su.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(su,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&y(d,s),d.needsUpdate=!1}v=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function y(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new $t(i.x,i.y,{format:V,type:A}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,C)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)S(c[e],i,a,o,s)}function C(e){e.target.removeEventListener(`dispose`,C);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function du(e,t){function n(){let t=!1,n=new Zt,r=null,i=new Zt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?H(e.DEPTH_TEST):ne(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=it[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?H(e.STENCIL_TEST):ne(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Rn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,L={},R=e.getParameter(e.SCISSOR_BOX),ee=e.getParameter(e.VIEWPORT),te=new Zt().fromArray(R),z=new Zt().fromArray(ee);function B(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let V={};V[e.TEXTURE_2D]=B(e.TEXTURE_2D,e.TEXTURE_2D,1),V[e.TEXTURE_CUBE_MAP]=B(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[e.TEXTURE_2D_ARRAY]=B(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),V[e.TEXTURE_3D]=B(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),H(e.DEPTH_TEST),o.setFunc(3),le(!1),W(1),H(e.CULL_FACE),se(0);function H(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ne(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function U(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function re(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ie(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ae={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ae[103]=e.MIN,ae[104]=e.MAX;let oe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function se(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(ne(e.BLEND),g=!1);return}if(g===!1&&(H(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Y(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Y(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:Y(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Y(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ae[n],ae[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(oe[r],oe[i],oe[o],oe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ce(t,n){t.side===2?ne(e.CULL_FACE):H(e.CULL_FACE);let r=t.side===1;n&&(r=!r),le(r),t.blending===1&&t.transparent===!1?se(0):se(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),de(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?H(e.SAMPLE_ALPHA_TO_COVERAGE):ne(e.SAMPLE_ALPHA_TO_COVERAGE)}function le(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function W(t){t===0?ne(e.CULL_FACE):(H(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ue(t){t!==k&&(N&&e.lineWidth(t),k=t)}function de(t,n,r){t?(H(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ne(e.POLYGON_OFFSET_FILL)}function fe(t){t?H(e.SCISSOR_TEST):ne(e.SCISSOR_TEST)}function pe(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function me(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=L[r];i===void 0&&(i={type:void 0,texture:void 0},L[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||V[t]),i.type=t,i.texture=n)}function he(){let t=L[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ge(){try{e.compressedTexImage2D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function _e(){try{e.compressedTexImage3D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function ve(){try{e.texSubImage2D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function ye(){try{e.texSubImage3D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function be(){try{e.compressedTexSubImage2D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function xe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function Se(){try{e.texStorage2D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function Ce(){try{e.texStorage3D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function G(){try{e.texImage2D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function we(){try{e.texImage3D(...arguments)}catch(e){Y(`WebGLState:`,e)}}function Te(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ee(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function K(t){te.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),te.copy(t))}function De(t){z.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),z.copy(t))}function q(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Oe(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function ke(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,L={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Rn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,te.set(0,0,e.canvas.width,e.canvas.height),z.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:H,disable:ne,bindFramebuffer:U,drawBuffers:re,useProgram:ie,setBlending:se,setMaterial:ce,setFlipSided:le,setCullFace:W,setLineWidth:ue,setPolygonOffset:de,setScissorTest:fe,activeTexture:pe,bindTexture:me,unbindTexture:he,compressedTexImage2D:ge,compressedTexImage3D:_e,texImage2D:G,texImage3D:we,pixelStorei:Ee,getParameter:Te,updateUBOMapping:q,uniformBlockBinding:Oe,texStorage2D:Se,texStorage3D:Ce,texSubImage2D:ve,texSubImage3D:ye,compressedTexSubImage2D:be,compressedTexSubImage3D:xe,scissor:K,viewport:De,reset:ke}}function fu(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new X,u=new WeakMap,d=new Set,f,p=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Ze(`canvas`)}function T(e,t,n){let r=1,i=Te(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=w(n,a));let o=t?w(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),J(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&J(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];J(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||J(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?We:Bt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function A(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,J(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function j(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),P(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),I(t)}function P(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&F(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function F(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function I(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let L=0;function R(){L=0}function ee(){return L}function z(e){L=e}function B(){let e=L;return e>=i.maxTextures&&J(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),L+=1,e}function V(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function H(t,i){let a=r.get(t);if(t.isVideoTexture&&G(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)J(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)J(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ue(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ne(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ue(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function U(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ue(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function re(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){de(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ie={[m]:e.REPEAT,[h]:e.CLAMP_TO_EDGE,[g]:e.MIRRORED_REPEAT},ae={[_]:e.NEAREST,[v]:e.NEAREST_MIPMAP_NEAREST,[y]:e.NEAREST_MIPMAP_LINEAR,[b]:e.LINEAR,[x]:e.LINEAR_MIPMAP_NEAREST,[S]:e.LINEAR_MIPMAP_LINEAR},oe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function se(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&J(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ie[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ie[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ie[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ae[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ae[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,oe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ce(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,M));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=V(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&F(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function le(e,t,n){return Math.floor(Math.floor(e/n)/t)}function W(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=le(n.start,r.width,4),c=le(t.start,r.width,4);n.start<=i+1&&a===c&&le(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ue(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ce(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Bt.getPrimaries(Bt.workingColorSpace),r=o.colorSpace===``?null:Bt.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=T(o.image,!1,i.maxTextureSize);t=we(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=k(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);se(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,v=f.__version===void 0||l===!0,y=u.dataReady,b=j(o,t);if(o.isDepthTexture)m=A(o.format===te,o.type),v&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&v&&n.texStorage2D(e.TEXTURE_2D,b,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(v&&n.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height),y&&W(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&v&&n.texStorage3D(e.TEXTURE_2D_ARRAY,b,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(y){if(o.layerUpdates.size>0){let t=os(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else J(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?y&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&v&&n.texStorage2D(e.TEXTURE_2D,b,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?J(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?y&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(v&&n.texStorage3D(e.TEXTURE_2D_ARRAY,b,m,t.width,t.height,t.depth),y){if(o.layerUpdates.size>0){let i=os(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(v&&n.texStorage3D(e.TEXTURE_3D,b,m,t.width,t.height,t.depth),y&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(v){if(_)n.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<b;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&v){let t=Te(g[0]);n.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(v){let r=Te(t);n.texStorage2D(e.TEXTURE_2D,b,m,r.width,r.height)}y&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);E(o)&&D(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function de(t,o,s){if(o.image.length!==6)return;let c=ce(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Bt.getPrimaries(Bt.workingColorSpace),r=o.colorSpace===``?null:Bt.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=T(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=we(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=k(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=j(o,h);se(e.TEXTURE_CUBE_MAP,o);let C;if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?J(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=Te(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(o)&&D(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function fe(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=k(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Ce(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Se(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function pe(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=A(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ce(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Se(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Se(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=k(o.internalFormat,c,l,o.normalized,o.colorSpace);Ce(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Se(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Se(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function me(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,M)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),se(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else H(i.depthTexture,0);let u=l.__webglTexture,d=Se(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Ce(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Ce(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function he(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)me(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?me(i.__webglFramebuffer[0],t,0):me(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),pe(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),pe(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ge(t,n,i){let a=r.get(t);n!==void 0&&fe(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&he(t)}function _e(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,N);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Ce(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=k(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Se(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),pe(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),se(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)fe(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else fe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),se(c,a),fe(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),E(a)&&D(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),se(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)fe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else fe(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&he(t)}function ve(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=O(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let ye=[],be=[];function xe(t){if(t.samples>0){if(Ce(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(ye.length=0,be.length=0,ye.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(ye.push(l),be.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,be)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ye))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Se(e){return Math.min(i.maxSamples,e.samples)}function Ce(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function G(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function we(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Bt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&J(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Y(`WebGLTextures: Unsupported texture color space:`,n)),t}function Te(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=R,this.getTextureUnits=ee,this.setTextureUnits=z,this.setTexture2D=H,this.setTexture2DArray=ne,this.setTexture3D=U,this.setTextureCube=re,this.rebindTextures=ge,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function pu(e,t){function n(n,r=``){let i,a=Bt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var mu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,gu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new gi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Wa({vertexShader:mu,fragmentShader:hu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ii(new Fa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_u=class extends at{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new gu,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new X,w=null,T=null,E=new Po;E.viewport=new Zt;let D=new Po;D.viewport=new Zt;let k=[E,D],A=new Ho,j=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Nn,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Nn,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Nn,b[e]=t),t.getHandSpace()};function P(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function F(){r.removeEventListener(`select`,P),r.removeEventListener(`selectstart`,P),r.removeEventListener(`selectend`,P),r.removeEventListener(`squeeze`,P),r.removeEventListener(`squeezestart`,P),r.removeEventListener(`squeezeend`,P),r.removeEventListener(`end`,F),r.removeEventListener(`inputsourceschange`,I);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}j=null,M=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,re.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(S.width,S.height,!1),T!==null){let e=T.camera;e.fov=T.fov,e.zoom=T.zoom,e.updateProjectionMatrix(),T=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&J(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&J(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,P),r.addEventListener(`selectstart`,P),r.addEventListener(`selectend`,P),r.addEventListener(`squeeze`,P),r.addEventListener(`squeezestart`,P),r.addEventListener(`squeezeend`,P),r.addEventListener(`end`,F),r.addEventListener(`inputsourceschange`,I),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?te:ee,a=_.stencil?N:O);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new $t(d.textureWidth,d.textureHeight,{format:R,type:C,depthTexture:new mi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new $t(f.framebufferWidth,f.framebufferHeight,{format:R,type:C,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),re.setContext(r),re.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function I(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let L=new Z,z=new Z;function B(e,t,n){L.setFromMatrixPosition(t.matrixWorld),z.setFromMatrixPosition(n.matrixWorld);let r=L.distanceTo(z),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function V(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),A.near=D.near=E.near=t,A.far=D.far=E.far=n,(j!==A.near||M!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),j=A.near,M=A.far),A.layers.mask=e.layers.mask|6,E.layers.mask=A.layers.mask&-5,D.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;V(A,i);for(let e=0;e<a.length;e++)V(a[e],i);a.length===2?B(A,E,D):A.projectionMatrix.copy(E.projectionMatrix),T===null&&e.isPerspectiveCamera&&(T={camera:e,fov:e.fov,zoom:e.zoom}),H(e,A,i)};function H(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=lt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(A)},this.getCameraTexture=function(e){return g[e]};let ne=null;function U(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=k[n];o===void 0&&(o=new Po,o.layers.enable(n),o.viewport=new Zt,k[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new gi,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ne&&ne(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let re=new cs;re.setAnimationLoop(U),this.setAnimationLoop=function(e){ne=e},this.dispose=function(){}}},vu=new nn,yu=new Q;yu.set(-1,0,0,0,1,0,0,0,1);function bu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ba(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(vu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(yu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function xu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return Y(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?J(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):J(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Su=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Cu=null;function wu(){return Cu===null&&(Cu=new si(Su,16,16,V,A),Cu.name=`DFG_LUT`,Cu.minFilter=b,Cu.magFilter=b,Cu.wrapS=h,Cu.wrapT=h,Cu.generateMipmaps=!1,Cu.needsUpdate=!0),Cu}var Tu=class{constructor(e={}){let{canvas:t=Qe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=C}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([ne,H,B]),g=new Set([C,O,E,N,j,M]),_=new Uint32Array(4),v=new Int32Array(4),y=new Z,b=null,x=null,w=[],T=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,P=!1,F=null,I=null,L=null,R=null;this._outputColorSpace=He;let ee=0,te=0,z=null,V=-1,U=null,re=new Zt,ie=new Zt,ae=null,oe=new Rn(0),se=0,ce=t.width,le=t.height,W=1,ue=null,de=null,fe=new Zt(0,0,ce,le),pe=new Zt(0,0,ce,le),me=!1,he=new di,ge=!1,_e=!1,ve=new nn,ye=new Z,be=new Zt,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function Ce(){return z===null?W:1}let G=n;function we(e,n){return t.getContext(e,n)}let Te,Ee,K,De,q,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,Ue,We,Ge,Ke;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,Xe,!1),t.addEventListener(`webglcontextrestored`,Ze,!1),t.addEventListener(`webglcontextcreationerror`,$e,!1),G===null){let t=`webgl2`;if(G=we(t,e),G===null)throw we(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}qe()}catch(e){throw t.removeEventListener(`webglcontextlost`,Xe,!1),t.removeEventListener(`webglcontextrestored`,Ze,!1),t.removeEventListener(`webglcontextcreationerror`,$e,!1),Y(`WebGLRenderer: `+e.message),e}function qe(){Te=new Us(G),Te.init(),We=new pu(G,Te),Ee=new vs(G,Te,e,We),K=new du(G,Te),Ee.reversedDepthBuffer&&d&&K.buffers.depth.setReversed(!0),I=G.createFramebuffer(),L=G.createFramebuffer(),R=G.createFramebuffer(),De=new Ks(G),q=new Gl,Oe=new fu(G,Te,K,q,Ee,We,De),ke=new Hs(k),Ae=new ls(G),Ge=new gs(G,Ae),je=new Ws(G,Ae,De,Ge),Me=new Js(G,je,Ae,Ge,De),Be=new qs(G,Ee,Oe),Le=new ys(q),Ne=new Wl(k,ke,Te,Ee,Ge,Le),Pe=new bu(k,q),Fe=new Yl,Ie=new nu(Te),ze=new hs(k,ke,K,Me,p,s),Re=new uu(k,Me,Ee),Ke=new xu(G,De,Ee,K),Ve=new _s(G,Te,De),Ue=new Gs(G,Te,De),De.programs=Ne.programs,k.capabilities=Ee,k.extensions=Te,k.properties=q,k.renderLists=Fe,k.shadowMap=Re,k.state=K,k.info=De}m!==1009&&(D=new Xs(m,t.width,t.height,o,r,i));let Ye=new _u(k,G);this.xr=Ye,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let e=Te.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Te.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(e){e!==void 0&&(W=e,this.setSize(ce,le,!1))},this.getSize=function(e){return e.set(ce,le)},this.setSize=function(e,n,r=!0){if(Ye.isPresenting){J(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ce=e,le=n,t.width=Math.floor(e*W),t.height=Math.floor(n*W),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ce*W,le*W).floor()},this.setDrawingBufferSize=function(e,n,r){ce=e,le=n,W=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){Y(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){J(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}D.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(re)},this.getViewport=function(e){return e.copy(fe)},this.setViewport=function(e,t,n,r){e.isVector4?fe.set(e.x,e.y,e.z,e.w):fe.set(e,t,n,r),K.viewport(re.copy(fe).multiplyScalar(W).round())},this.getScissor=function(e){return e.copy(pe)},this.setScissor=function(e,t,n,r){e.isVector4?pe.set(e.x,e.y,e.z,e.w):pe.set(e,t,n,r),K.scissor(ie.copy(pe).multiplyScalar(W).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(e){K.setScissorTest(me=e)},this.setOpaqueSort=function(e){ue=e},this.setTransparentSort=function(e){de=e},this.getClearColor=function(e){return e.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(z!==null){let t=z.texture.format;e=h.has(t)}if(e){let e=z.texture.type,t=g.has(e),n=ze.getClearColor(),r=ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,G.clearBufferuiv(G.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,G.clearBufferiv(G.COLOR,0,v))}else r|=G.COLOR_BUFFER_BIT}t&&(r|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&G.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),F=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Xe,!1),t.removeEventListener(`webglcontextrestored`,Ze,!1),t.removeEventListener(`webglcontextcreationerror`,$e,!1),ze.dispose(),Fe.dispose(),Ie.dispose(),q.dispose(),ke.dispose(),Me.dispose(),Ge.dispose(),Ke.dispose(),Ne.dispose(),Ye.dispose(),Ye.removeEventListener(`sessionstart`,ct),Ye.removeEventListener(`sessionend`,lt),ut.stop()};function Xe(e){e.preventDefault(),et(`WebGLRenderer: Context Lost.`),P=!0}function Ze(){et(`WebGLRenderer: Context Restored.`),P=!1;let e=De.autoReset,t=Re.enabled,n=Re.autoUpdate,r=Re.needsUpdate,i=Re.type;qe(),De.autoReset=e,Re.enabled=t,Re.autoUpdate=n,Re.needsUpdate=r,Re.type=i}function $e(e){Y(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function tt(e){let t=e.target;t.removeEventListener(`dispose`,tt),nt(t)}function nt(e){it(e),q.remove(e)}function it(e){let t=q.get(e).programs;t!==void 0&&(t.forEach(function(e){Ne.releaseProgram(e)}),e.isShaderMaterial&&Ne.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=xe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=bt(e,t,n,r,i);K.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=je.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ge.setup(i,r,s,n,c);let h,g=Ve;if(c!==null&&(h=Ae.get(c),g=Ue,g.setIndex(h)),i.isMesh)r.wireframe===!0?(K.setLineWidth(r.wireframeLinewidth*Ce()),g.setMode(G.LINES)):g.setMode(G.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),K.setLineWidth(e*Ce()),i.isLineSegments?g.setMode(G.LINES):i.isLineLoop?g.setMode(G.LINE_LOOP):g.setMode(G.LINE_STRIP)}else i.isPoints?g.setMode(G.POINTS):i.isSprite&&g.setMode(G.TRIANGLES);if(i.isBatchedMesh){if(Te.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ae.get(c).bytesPerElement:1,o=q.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(G,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function at(e,t,n,r){F!==null&&e.isNodeMaterial&&F.setObject(r,e),ge===!0&&Le.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,gt(e,t,r),e.side=0,e.needsUpdate=!0,gt(e,t,r),e.side=2):gt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),F!==null&&F.renderStart(e,t,n),x=Ie.get(n),x.init(t),T.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),F!==null&&F.updateLights(x.state.lightsArray),_e=this.localClippingEnabled,ge=Le.init(this.clippingPlanes,_e),ge===!0&&Le.setGlobalState(this.clippingPlanes,t),F!==null&&Re.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];at(o,n,t,e),r.add(o)}else at(i,n,t,e),r.add(i)}}),x=T.pop(),F!==null&&F.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=q.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Te.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ot=null;function st(e){ot&&ot(e)}function ct(){ut.stop()}function lt(){ut.start()}let ut=new cs;ut.setAnimationLoop(st),typeof self<`u`&&ut.setContext(self),this.setAnimationLoop=function(e){ot=e,Ye.setAnimationLoop(e),e===null?ut.stop():ut.start()},Ye.addEventListener(`sessionstart`,ct),Ye.addEventListener(`sessionend`,lt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){Y(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(P===!0)return;F!==null&&F.renderStart(e,t);let n=Ye.enabled===!0&&Ye.isPresenting===!0,r=D!==null&&(z===null||n)&&D.begin(k,z);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(t),t=Ye.getCamera()),e.isScene===!0&&e.onBeforeRender(k,e,t,z),x=Ie.get(e,T.length),x.init(t),x.state.textureUnits=Oe.getTextureUnits(),T.push(x),ve.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),he.setFromProjectionMatrix(ve,Je,t.reversedDepth),_e=this.localClippingEnabled,ge=Le.init(this.clippingPlanes,_e),b=Fe.get(e,w.length),b.init(),w.push(b),Ye.enabled===!0&&Ye.isPresenting===!0){let e=k.xr.getDepthSensingMesh();e!==null&&dt(e,t,-1/0,k.sortObjects)}dt(e,t,0,k.sortObjects),b.finish(),F!==null&&F.updateLights(x.state.lightsArray),k.sortObjects===!0&&b.sort(ue,de),Se=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,Se&&ze.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ge===!0&&Le.beginShadows();let i=x.state.shadowsArray;if(Re.render(i,e,t),ge===!0&&Le.endShadows(),(r&&D.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];pt(n,r,e,a)}Se&&ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];ft(b,e,n,n.viewport)}}else r.length>0&&pt(n,r,e,t),Se&&ze.render(e),ft(b,e,t)}z!==null&&te===0&&(Oe.updateMultisampleRenderTarget(z),Oe.updateRenderTargetMipmap(z)),r&&D.end(k),e.isScene===!0&&e.onAfterRender(k,e,t),Ge.resetDefaultState(),V=-1,U=null,T.pop(),T.length>0?(x=T[T.length-1],Oe.setTextureUnits(x.state.textureUnits),ge===!0&&Le.setGlobalState(k.clippingPlanes,x.state.camera)):x=null,w.pop(),b=w.length>0?w[w.length-1]:null,F!==null&&F.renderEnd()};function dt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(he)){r&&be.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ve);let i=Me.update(e),a=e.material;a.visible&&b.push(e,i,a,n,be.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(he))){let i=Me.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),be.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),be.copy(e.boundingSphere.center)),be.applyMatrix4(e.matrixWorld).applyMatrix4(ve)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,be.z,s,t)}}else a.visible&&b.push(e,i,a,n,be.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)dt(i[e],t,n,r)}function ft(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),ge===!0&&Le.setGlobalState(k.clippingPlanes,n),r&&K.viewport(re.copy(r)),i.length>0&&mt(i,t,n),a.length>0&&mt(a,t,n),o.length>0&&mt(o,t,n),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function pt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Te.has(`EXT_color_buffer_half_float`)||Te.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new $t(1,1,{generateMipmaps:!0,type:e?A:C,minFilter:S,samples:Math.max(4,Ee.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Bt.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||re;a.setSize(o.z*k.transmissionResolutionScale,o.w*k.transmissionResolutionScale);let s=k.getRenderTarget(),c=k.getActiveCubeFace(),l=k.getActiveMipmapLevel();k.setRenderTarget(a),k.getClearColor(oe),se=k.getClearAlpha(),se<1&&k.setClearColor(16777215,.5),k.clear(),Se&&ze.render(n);let u=k.toneMapping;k.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),ge===!0&&Le.setGlobalState(k.clippingPlanes,r),mt(e,n,r),Oe.updateMultisampleRenderTarget(a),Oe.updateRenderTargetMipmap(a),Te.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,ht(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Oe.updateMultisampleRenderTarget(a),Oe.updateRenderTargetMipmap(a))}k.setRenderTarget(s,c,l),k.setClearColor(oe,se),d!==void 0&&(r.viewport=d),k.toneMapping=u}function mt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&ht(o,t,n,s,l,c)}}function ht(e,t,n,r,i,a){F!==null&&i.isNodeMaterial&&F.setObject(e,i),e.onBeforeRender(k,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(k,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,k.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,k.renderBufferDirect(n,t,r,i,e,a),i.side=2):k.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(k,t,n,r,i,a)}function gt(e,t,n){t.isScene!==!0&&(t=xe);let r=q.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Ne.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Ne.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ke.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,tt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return vt(e,s),d}else s.uniforms=Ne.getUniforms(e),F!==null&&e.isNodeMaterial&&F.build(e,n,s),e.onBeforeCompile(s,k),d=Ne.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Le.uniform),vt(e,s),r.needsLights=St(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function _t(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=rl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function vt(e,t){let n=q.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function yt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function bt(e,t,n,r,i){t.isScene!==!0&&(t=xe),Oe.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=z===null?k.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Bt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ke.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(h=k.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=q.get(r),y=x.state.lights;if(ge===!0&&(_e===!0||e!==U)){let t=e===U&&r.id===V;Le.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Le.numPlanes||v.numIntersection!==Le.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=gt(r,t,i),F&&r.isNodeMaterial&&F.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),D=v.uniforms;if(K.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==V&&(V=r.id,w=!0),v.needsLights){let e=yt(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||U!==e){K.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(G,`projectionMatrix`,e.projectionMatrix),E.setValue(G,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(G,ye.setFromMatrixPosition(e.matrixWorld)),Ee.logarithmicDepthBuffer&&E.setValue(G,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(G,`isOrthographic`,e.isOrthographicCamera===!0),U!==e&&(U=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(G,`sunShadowMap`,y.state.sunShadowMap,Oe),y.state.directionalShadowMap.length>0&&E.setValue(G,`directionalShadowMap`,y.state.directionalShadowMap,Oe),y.state.spotShadowMap.length>0&&E.setValue(G,`spotShadowMap`,y.state.spotShadowMap,Oe),y.state.pointShadowMap.length>0&&E.setValue(G,`pointShadowMap`,y.state.pointShadowMap,Oe)),i.isSkinnedMesh){E.setOptional(G,i,`bindMatrix`),E.setOptional(G,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(G,`boneTexture`,e.boneTexture,Oe))}i.isBatchedMesh&&(E.setOptional(G,i,`batchingTexture`),E.setValue(G,`batchingTexture`,i._matricesTexture,Oe),E.setOptional(G,i,`batchingIdTexture`),E.setValue(G,`batchingIdTexture`,i._indirectTexture,Oe),E.setOptional(G,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(G,`batchingColorTexture`,i._colorsTexture,Oe));let O=n.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&Be.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(G,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=wu()),w){if(E.setValue(G,`toneMappingExposure`,k.toneMappingExposure),v.needsLights&&xt(D,T),a&&r.fog===!0&&Pe.refreshFogUniforms(D,a),Pe.refreshMaterialUniforms(D,r,W,le,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;D.probesSH.value=e.texture,D.probesMin.value.copy(e.boundingBox.min),D.probesMax.value.copy(e.boundingBox.max),D.probesResolution.value.copy(e.resolution)}rl.upload(G,_t(v),D,Oe)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(rl.upload(G,_t(v),D,Oe),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(G,`center`,i.center),E.setValue(G,`modelViewMatrix`,i.modelViewMatrix),E.setValue(G,`normalMatrix`,i.normalMatrix),E.setValue(G,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ke.update(n,S),Ke.bind(n,S)}}return S}function xt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function St(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(e,t,n){let r=q.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),q.get(e.texture).__webglTexture=t,q.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=q.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){z=e,ee=t,te=n;let r=null,i=!1,a=!1;if(e){let o=q.get(e);if(o.__useDefaultFramebuffer!==void 0){K.bindFramebuffer(G.FRAMEBUFFER,o.__webglFramebuffer),re.copy(e.viewport),ie.copy(e.scissor),ae=e.scissorTest,K.viewport(re),K.scissor(ie),K.setScissorTest(ae),V=-1;return}if(o.__webglFramebuffer===void 0)Oe.setupRenderTarget(e);else if(o.__hasExternalTextures)Oe.rebindTextures(e,q.get(e.texture).__webglTexture,q.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&q.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Oe.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=q.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Oe.useMultisampledRTT(e)===!1?q.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,re.copy(e.viewport),ie.copy(e.scissor),ae=e.scissorTest}else re.copy(fe).multiplyScalar(W).floor(),ie.copy(pe).multiplyScalar(W).floor(),ae=me;if(n!==0&&(r=I),K.bindFramebuffer(G.FRAMEBUFFER,r)&&K.drawBuffers(e,r),K.viewport(re),K.scissor(ie),K.setScissorTest(ae),i){let r=q.get(e.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=q.get(e.textures[t]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=q.get(e.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,t.__webglTexture,n)}V=-1};function Ct(e){let t=q.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ee.textureFormatReadable(e.format),t.__typeReadable=Ee.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){Y(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=q.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){K.bindFramebuffer(G.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+s);let u=Ct(o);if(u.__formatReadable===!1){Y(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){Y(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&G.readPixels(t,n,r,i,We.convert(c),We.convert(l),a)}finally{let e=z===null?null:q.get(z).__webglFramebuffer;K.bindFramebuffer(G.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=q.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){K.bindFramebuffer(G.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+s);let d=Ct(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,f),G.bufferData(G.PIXEL_PACK_BUFFER,a.byteLength,G.STREAM_READ),G.readPixels(t,n,r,i,We.convert(l),We.convert(u),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let p=z===null?null:q.get(z).__webglFramebuffer;K.bindFramebuffer(G.FRAMEBUFFER,p);let m=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await rt(G,m,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,f),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,a),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(f),G.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Oe.setTexture2D(e,0),G.copyTexSubImage2D(G.TEXTURE_2D,n,0,0,o,s,i,a),K.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=We.convert(t.format),_=We.convert(t.type),v;t.isData3DTexture?(Oe.setTexture3D(t,0),v=G.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Oe.setTexture2DArray(t,0),v=G.TEXTURE_2D_ARRAY):(Oe.setTexture2D(t,0),v=G.TEXTURE_2D),K.activeTexture(G.TEXTURE0),K.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,t.flipY),K.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),K.pixelStorei(G.UNPACK_ALIGNMENT,t.unpackAlignment);let y=K.getParameter(G.UNPACK_ROW_LENGTH),b=K.getParameter(G.UNPACK_IMAGE_HEIGHT),x=K.getParameter(G.UNPACK_SKIP_PIXELS),S=K.getParameter(G.UNPACK_SKIP_ROWS),C=K.getParameter(G.UNPACK_SKIP_IMAGES);K.pixelStorei(G.UNPACK_ROW_LENGTH,h.width),K.pixelStorei(G.UNPACK_IMAGE_HEIGHT,h.height),K.pixelStorei(G.UNPACK_SKIP_PIXELS,l),K.pixelStorei(G.UNPACK_SKIP_ROWS,u),K.pixelStorei(G.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=q.get(e),r=q.get(t),h=q.get(n.__renderTarget),g=q.get(r.__renderTarget);K.bindFramebuffer(G.READ_FRAMEBUFFER,h.__webglFramebuffer),K.bindFramebuffer(G.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,q.get(e).__webglTexture,i,d+n),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,q.get(t).__webglTexture,a,m+n)),G.blitFramebuffer(l,u,o,s,f,p,o,s,G.DEPTH_BUFFER_BIT,G.NEAREST);K.bindFramebuffer(G.READ_FRAMEBUFFER,null),K.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||q.has(e)){let n=q.get(e),r=q.get(t);K.bindFramebuffer(G.READ_FRAMEBUFFER,L),K.bindFramebuffer(G.DRAW_FRAMEBUFFER,R);for(let e=0;e<c;e++)w?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,n.__webglTexture,i),T?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,r.__webglTexture,a),i===0?T?G.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):G.copyTexSubImage2D(v,a,f,p,l,u,o,s):G.blitFramebuffer(l,u,o,s,f,p,o,s,G.COLOR_BUFFER_BIT,G.NEAREST);K.bindFramebuffer(G.READ_FRAMEBUFFER,null),K.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?G.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?G.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):G.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):G.texSubImage2D(G.TEXTURE_2D,a,f,p,o,s,g,_,h);K.pixelStorei(G.UNPACK_ROW_LENGTH,y),K.pixelStorei(G.UNPACK_IMAGE_HEIGHT,b),K.pixelStorei(G.UNPACK_SKIP_PIXELS,x),K.pixelStorei(G.UNPACK_SKIP_ROWS,S),K.pixelStorei(G.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&G.generateMipmap(v),K.unbindTexture()},this.initRenderTarget=function(e){q.get(e).__webglFramebuffer===void 0&&Oe.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Oe.setTextureCube(e,0):e.isData3DTexture?Oe.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Oe.setTexture2DArray(e,0):Oe.setTexture2D(e,0),K.unbindTexture()},this.resetState=function(){ee=0,te=0,z=null,K.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Je}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Bt._getUnpackColorSpace()}},Eu=He,Du=class e extends vo{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit=`px`}load(e,t,n,r){let i=this,a=new xo(i.manager);a.setPath(i.path),a.setRequestHeader(i.requestHeader),a.setWithCredentials(i.withCredentials),a.load(e,function(n){try{t(i.parse(n))}catch(t){r?r(t):console.error(t),i.manager.itemError(e)}},n,r)}parse(e){let t=this;function n(e,t){if(e.nodeType!==1)return;e.hasAttribute(`filter`)&&console.warn(`THREE.SVGLoader: Filters are not supported.`);let a=b(e),o=!1,p=null;switch(e.nodeName){case`svg`:t=m(e,t);break;case`style`:i(e);break;case`g`:t=m(e,t);break;case`path`:t=m(e,t),e.hasAttribute(`d`)&&(p=r(e));break;case`rect`:t=m(e,t),p=s(e);break;case`polygon`:t=m(e,t),p=c(e);break;case`polyline`:t=m(e,t),p=l(e);break;case`circle`:t=m(e,t),p=u(e);break;case`ellipse`:t=m(e,t),p=d(e);break;case`line`:t=m(e,t),p=f(e);break;case`defs`:o=!0;break;case`use`:t=m(e,t);let a=(e.getAttributeNS(`http://www.w3.org/1999/xlink`,`href`)||``).substring(1),h=e.viewportElement.getElementById(a);h?n(h,t):console.warn(`SVGLoader: 'use node' references non-existent node id: `+a)}if(p){t.fill!==void 0&&t.fill!==`none`&&!t.fill.startsWith(`url`)&&p.color.setStyle(t.fill,Eu),C(p,te),A.push(p);let n=Object.assign({},t);n.strokeWidth=t.strokeWidth*O(te),p.userData={node:e,style:n,transform:te.clone(),gradients:M}}let h=e.childNodes;for(let e=0;e<h.length;e++){let r=h[e];o&&r.nodeName!==`style`&&r.nodeName!==`defs`||n(r,t)}a&&(N.pop(),N.length>0?te.copy(N[N.length-1]):te.identity())}function r(e){let t=new is,n=new X,r=new X,i=new X,o=!0,s=!1,c=e.getAttribute(`d`);if(c===``||c===`none`)return null;let l=c.match(/[a-df-z][^a-df-z]*/gi);for(let e=0,c=l.length;e<c;e++){let c=l[e],u=c.charAt(0),d=c.slice(1).trim();o===!0&&(s=!0,o=!1);let f;switch(u){case`M`:f=g(d);for(let e=0,a=f.length;e<a;e+=2)n.x=f[e+0],n.y=f[e+1],r.x=n.x,r.y=n.y,e===0?t.moveTo(n.x,n.y):t.lineTo(n.x,n.y),e===0&&i.copy(n);break;case`H`:f=g(d);for(let e=0,a=f.length;e<a;e++)n.x=f[e],r.x=n.x,r.y=n.y,t.lineTo(n.x,n.y),e===0&&s===!0&&i.copy(n);break;case`V`:f=g(d);for(let e=0,a=f.length;e<a;e++)n.y=f[e],r.x=n.x,r.y=n.y,t.lineTo(n.x,n.y),e===0&&s===!0&&i.copy(n);break;case`L`:f=g(d);for(let e=0,a=f.length;e<a;e+=2)n.x=f[e+0],n.y=f[e+1],r.x=n.x,r.y=n.y,t.lineTo(n.x,n.y),e===0&&s===!0&&i.copy(n);break;case`C`:f=g(d);for(let e=0,a=f.length;e<a;e+=6)t.bezierCurveTo(f[e+0],f[e+1],f[e+2],f[e+3],f[e+4],f[e+5]),r.x=f[e+2],r.y=f[e+3],n.x=f[e+4],n.y=f[e+5],e===0&&s===!0&&i.copy(n);break;case`S`:f=g(d);for(let e=0,a=f.length;e<a;e+=4)t.bezierCurveTo(h(n.x,r.x),h(n.y,r.y),f[e+0],f[e+1],f[e+2],f[e+3]),r.x=f[e+0],r.y=f[e+1],n.x=f[e+2],n.y=f[e+3],e===0&&s===!0&&i.copy(n);break;case`Q`:f=g(d);for(let e=0,a=f.length;e<a;e+=4)t.quadraticCurveTo(f[e+0],f[e+1],f[e+2],f[e+3]),r.x=f[e+0],r.y=f[e+1],n.x=f[e+2],n.y=f[e+3],e===0&&s===!0&&i.copy(n);break;case`T`:f=g(d);for(let e=0,a=f.length;e<a;e+=2){let a=h(n.x,r.x),o=h(n.y,r.y);t.quadraticCurveTo(a,o,f[e+0],f[e+1]),r.x=a,r.y=o,n.x=f[e+0],n.y=f[e+1],e===0&&s===!0&&i.copy(n)}break;case`A`:f=g(d,[3,4],7);for(let e=0,o=f.length;e<o;e+=7){if(f[e+5]==n.x&&f[e+6]==n.y)continue;let o=n.clone();n.x=f[e+5],n.y=f[e+6],r.x=n.x,r.y=n.y,a(t,f[e],f[e+1],f[e+2],f[e+3],f[e+4],o,n),e===0&&s===!0&&i.copy(n)}break;case`m`:f=g(d);for(let e=0,a=f.length;e<a;e+=2)n.x+=f[e+0],n.y+=f[e+1],r.x=n.x,r.y=n.y,e===0?t.moveTo(n.x,n.y):t.lineTo(n.x,n.y),e===0&&i.copy(n);break;case`h`:f=g(d);for(let e=0,a=f.length;e<a;e++)n.x+=f[e],r.x=n.x,r.y=n.y,t.lineTo(n.x,n.y),e===0&&s===!0&&i.copy(n);break;case`v`:f=g(d);for(let e=0,a=f.length;e<a;e++)n.y+=f[e],r.x=n.x,r.y=n.y,t.lineTo(n.x,n.y),e===0&&s===!0&&i.copy(n);break;case`l`:f=g(d);for(let e=0,a=f.length;e<a;e+=2)n.x+=f[e+0],n.y+=f[e+1],r.x=n.x,r.y=n.y,t.lineTo(n.x,n.y),e===0&&s===!0&&i.copy(n);break;case`c`:f=g(d);for(let e=0,a=f.length;e<a;e+=6)t.bezierCurveTo(n.x+f[e+0],n.y+f[e+1],n.x+f[e+2],n.y+f[e+3],n.x+f[e+4],n.y+f[e+5]),r.x=n.x+f[e+2],r.y=n.y+f[e+3],n.x+=f[e+4],n.y+=f[e+5],e===0&&s===!0&&i.copy(n);break;case`s`:f=g(d);for(let e=0,a=f.length;e<a;e+=4)t.bezierCurveTo(h(n.x,r.x),h(n.y,r.y),n.x+f[e+0],n.y+f[e+1],n.x+f[e+2],n.y+f[e+3]),r.x=n.x+f[e+0],r.y=n.y+f[e+1],n.x+=f[e+2],n.y+=f[e+3],e===0&&s===!0&&i.copy(n);break;case`q`:f=g(d);for(let e=0,a=f.length;e<a;e+=4)t.quadraticCurveTo(n.x+f[e+0],n.y+f[e+1],n.x+f[e+2],n.y+f[e+3]),r.x=n.x+f[e+0],r.y=n.y+f[e+1],n.x+=f[e+2],n.y+=f[e+3],e===0&&s===!0&&i.copy(n);break;case`t`:f=g(d);for(let e=0,a=f.length;e<a;e+=2){let a=h(n.x,r.x),o=h(n.y,r.y);t.quadraticCurveTo(a,o,n.x+f[e+0],n.y+f[e+1]),r.x=a,r.y=o,n.x+=f[e+0],n.y+=f[e+1],e===0&&s===!0&&i.copy(n)}break;case`a`:f=g(d,[3,4],7);for(let e=0,o=f.length;e<o;e+=7){if(f[e+5]==0&&f[e+6]==0)continue;let o=n.clone();n.x+=f[e+5],n.y+=f[e+6],r.x=n.x,r.y=n.y,a(t,f[e],f[e+1],f[e+2],f[e+3],f[e+4],o,n),e===0&&s===!0&&i.copy(n)}break;case`Z`:case`z`:t.currentPath.autoClose=!0,t.currentPath.curves.length>0&&(n.copy(i),t.currentPath.currentPoint.copy(n),o=!0);break;default:console.warn(c)}s=!1}return t}function i(e){if(e.sheet&&e.sheet.cssRules&&e.sheet.cssRules.length)for(let t=0;t<e.sheet.cssRules.length;t++){let n=e.sheet.cssRules[t];if(n.type!==1)continue;let r=n.selectorText.split(/,/gm).filter(Boolean).map(e=>e.trim());for(let e=0;e<r.length;e++){let t=Object.fromEntries(Object.entries(n.style).filter(([,e])=>e!==``));j[r[e]]=Object.assign(j[r[e]]||{},t)}}}function a(e,t,n,r,i,a,s,c){if(t==0||n==0){e.lineTo(c.x,c.y);return}r=r*Math.PI/180,t=Math.abs(t),n=Math.abs(n);let l=(s.x-c.x)/2,u=(s.y-c.y)/2,d=Math.cos(r)*l+Math.sin(r)*u,f=-Math.sin(r)*l+Math.cos(r)*u,p=t*t,m=n*n,h=d*d,g=f*f,_=h/p+g/m;if(_>1){let e=Math.sqrt(_);t=e*t,n=e*n,p=t*t,m=n*n}let v=p*g+m*h,y=(p*m-v)/v,b=Math.sqrt(Math.max(0,y));i===a&&(b=-b);let x=b*t*f/n,S=-b*n*d/t,C=Math.cos(r)*x-Math.sin(r)*S+(s.x+c.x)/2,w=Math.sin(r)*x+Math.cos(r)*S+(s.y+c.y)/2,T=o(1,0,(d-x)/t,(f-S)/n),E=o((d-x)/t,(f-S)/n,(-d-x)/t,(-f-S)/n)%(Math.PI*2);e.currentPath.absellipse(C,w,t,n,T,T+E,a===0,r)}function o(e,t,n,r){let i=e*n+t*r,a=Math.sqrt(e*e+t*t)*Math.sqrt(n*n+r*r),o=Math.acos(Math.max(-1,Math.min(1,i/a)));return e*r-t*n<0&&(o=-o),o}function s(e){let t=y(e.getAttribute(`x`)||0),n=y(e.getAttribute(`y`)||0),r=y(e.getAttribute(`rx`)||e.getAttribute(`ry`)||0),i=y(e.getAttribute(`ry`)||e.getAttribute(`rx`)||0),a=y(e.getAttribute(`width`)),o=y(e.getAttribute(`height`)),s=.448084975506,c=new is;return c.moveTo(t+r,n),c.lineTo(t+a-r,n),(r!==0||i!==0)&&c.bezierCurveTo(t+a-r*s,n,t+a,n+i*s,t+a,n+i),c.lineTo(t+a,n+o-i),(r!==0||i!==0)&&c.bezierCurveTo(t+a,n+o-i*s,t+a-r*s,n+o,t+a-r,n+o),c.lineTo(t+r,n+o),(r!==0||i!==0)&&c.bezierCurveTo(t+r*s,n+o,t,n+o-i*s,t,n+o-i),c.lineTo(t,n+i),(r!==0||i!==0)&&c.bezierCurveTo(t,n+i*s,t+r*s,n,t+r,n),c}function c(e){function t(e,t,n){let a=y(t),o=y(n);i===0?r.moveTo(a,o):r.lineTo(a,o),i++}let n=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,r=new is,i=0;return e.getAttribute(`points`).replace(n,t),r.currentPath.autoClose=!0,r}function l(e){function t(e,t,n){let a=y(t),o=y(n);i===0?r.moveTo(a,o):r.lineTo(a,o),i++}let n=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,r=new is,i=0;return e.getAttribute(`points`).replace(n,t),r.currentPath.autoClose=!1,r}function u(e){let t=y(e.getAttribute(`cx`)||0),n=y(e.getAttribute(`cy`)||0),r=y(e.getAttribute(`r`)||0),i=new qi;i.absarc(t,n,r,0,Math.PI*2);let a=new is;return a.subPaths.push(i),a}function d(e){let t=y(e.getAttribute(`cx`)||0),n=y(e.getAttribute(`cy`)||0),r=y(e.getAttribute(`rx`)||0),i=y(e.getAttribute(`ry`)||0),a=new qi;a.absellipse(t,n,r,i,0,Math.PI*2);let o=new is;return o.subPaths.push(a),o}function f(e){let t=y(e.getAttribute(`x1`)||0),n=y(e.getAttribute(`y1`)||0),r=y(e.getAttribute(`x2`)||0),i=y(e.getAttribute(`y2`)||0),a=new is;return a.moveTo(t,n),a.lineTo(r,i),a.currentPath.autoClose=!1,a}function p(e){let t=e.querySelectorAll(`linearGradient, radialGradient`),n=[`x1`,`y1`,`x2`,`y2`,`cx`,`cy`,`r`,`fx`,`fy`,`gradientUnits`,`gradientTransform`,`spreadMethod`],r={};for(let e of t){let t=e.getAttribute(`id`);if(!t)continue;let i={type:e.nodeName===`radialGradient`?`radialGradient`:`linearGradient`,attrs:{},stops:null,href:null},a=e.getAttributeNS(`http://www.w3.org/1999/xlink`,`href`)||e.getAttribute(`href`)||``;a.startsWith(`#`)&&(i.href=a.substring(1));for(let t of n)e.hasAttribute(t)&&(i.attrs[t]=e.getAttribute(t));let o=e.querySelectorAll(`stop`);if(o.length>0){i.stops=[];for(let e of o){let t=e.getAttribute(`stop-color`);!t&&e.style&&(t=e.style[`stop-color`]),t||=`#000`;let n=e.getAttribute(`stop-opacity`);(n===null||n===``)&&e.style&&(n=e.style[`stop-opacity`]),n=n===null||n===``||n===void 0?1:Math.max(0,Math.min(1,parseFloat(n)));let r=Math.max(0,Math.min(1,parseFloat(e.getAttribute(`offset`)||`0`)));i.stops.push({offset:r,color:t,opacity:n})}}r[t]=i}function i(e,t){let n=r[e];if(!n||t.has(e))return n;if(t.add(e),n.href&&r[n.href]){let e=i(n.href,t);if(e){n.stops||=e.stops;for(let t in e.attrs)t in n.attrs||(n.attrs[t]=e.attrs[t])}}return n}for(let e in r)i(e,new Set);for(let e in r){let t=r[e],n=t.attrs,i=n.gradientUnits===`userSpaceOnUse`?`userSpaceOnUse`:`objectBoundingBox`,a={type:t.type,gradientUnits:i,spreadMethod:n.spreadMethod===`reflect`||n.spreadMethod===`repeat`?n.spreadMethod:`pad`,gradientTransform:null,stops:(t.stops||[]).slice().sort((e,t)=>e.offset-t.offset)};n.gradientTransform&&(a.gradientTransform=new Q,S(n.gradientTransform,a.gradientTransform));function o(e){return typeof e==`string`?e.endsWith(`%`)?parseFloat(e)/100:y(e):0}if(t.type===`linearGradient`)a.x1=n.x1===void 0?0:o(n.x1),a.y1=n.y1===void 0?0:o(n.y1),a.x2=n.x2===void 0?+(i===`objectBoundingBox`):o(n.x2),a.y2=n.y2===void 0?0:o(n.y2);else{let e=i===`objectBoundingBox`?.5:0,t=i===`objectBoundingBox`?.5:0;a.cx=n.cx===void 0?e:o(n.cx),a.cy=n.cy===void 0?e:o(n.cy),a.r=n.r===void 0?t:o(n.r),a.fx=n.fx===void 0?a.cx:o(n.fx),a.fy=n.fy===void 0?a.cy:o(n.fy)}M[e]=a}}function m(e,t){t=Object.assign({},t);let n={};if(e.hasAttribute(`class`)){let t=e.getAttribute(`class`).split(/\s/).filter(Boolean).map(e=>e.trim());for(let e=0;e<t.length;e++)n=Object.assign(n,j[`.`+t[e]])}e.hasAttribute(`id`)&&(n=Object.assign(n,j[`#`+e.getAttribute(`id`)]));function r(r,i,a){a===void 0&&(a=function(e){return e}),e.hasAttribute(r)&&(t[i]=a(e.getAttribute(r))),n[i]&&(t[i]=a(n[i])),e.style&&e.style[r]!==``&&(t[i]=a(e.style[r]))}function i(e){return Math.max(0,Math.min(1,y(e)))}function a(e){return Math.max(0,y(e))}return r(`fill`,`fill`),r(`fill-opacity`,`fillOpacity`,i),r(`fill-rule`,`fillRule`),r(`opacity`,`opacity`,i),r(`stroke`,`stroke`),r(`stroke-opacity`,`strokeOpacity`,i),r(`stroke-width`,`strokeWidth`,a),r(`stroke-linejoin`,`strokeLineJoin`),r(`stroke-linecap`,`strokeLineCap`),r(`stroke-miterlimit`,`strokeMiterLimit`,a),r(`visibility`,`visibility`),t}function h(e,t){return e-(t-e)}function g(e,t,n){if(typeof e!=`string`)throw TypeError(`Invalid input: `+typeof e);let r={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},i=0,a=!0,o=``,s=``,c=[];function l(e,t,n){let r=SyntaxError(`Unexpected character "`+e+`" at index `+t+`.`);throw r.partial=n,r}function u(){o!==``&&(s===``?c.push(Number(o)):c.push(Number(o)*10**Number(s))),o=``,s=``}let d,f=e.length;for(let p=0;p<f;p++){if(d=e[p],Array.isArray(t)&&t.includes(c.length%n)&&r.FLAGS.test(d)){i=1,o=d,u();continue}if(i===0){if(r.WHITESPACE.test(d))continue;if(r.DIGIT.test(d)||r.SIGN.test(d)){i=1,o=d;continue}if(r.POINT.test(d)){i=2,o=d;continue}r.COMMA.test(d)&&(a&&l(d,p,c),a=!0)}if(i===1){if(r.DIGIT.test(d)){o+=d;continue}if(r.POINT.test(d)){o+=d,i=2;continue}if(r.EXP.test(d)){i=3;continue}r.SIGN.test(d)&&o.length===1&&r.SIGN.test(o[0])&&l(d,p,c)}if(i===2){if(r.DIGIT.test(d)){o+=d;continue}if(r.EXP.test(d)){i=3;continue}r.POINT.test(d)&&o[o.length-1]===`.`&&l(d,p,c)}if(i===3){if(r.DIGIT.test(d)){s+=d;continue}if(r.SIGN.test(d)){if(s===``){s+=d;continue}s.length===1&&r.SIGN.test(s)&&l(d,p,c)}}r.WHITESPACE.test(d)?(u(),i=0,a=!1):r.COMMA.test(d)?(u(),i=0,a=!0):r.SIGN.test(d)?(u(),i=1,o=d):r.POINT.test(d)?(u(),i=2,o=d):l(d,p,c)}return u(),c}let _=[`mm`,`cm`,`in`,`pt`,`pc`,`px`],v={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:12,pc:1,px:-1},px:{px:1}};function y(e){let n=`px`;if(typeof e==`string`||e instanceof String)for(let t=0,r=_.length;t<r;t++){let r=_[t];if(e.endsWith(r)){n=r,e=e.substring(0,e.length-r.length);break}}let r;return n===`px`&&t.defaultUnit!==`px`?r=v.in[t.defaultUnit]/t.defaultDPI:(r=v[n][t.defaultUnit],r<0&&(r=v[n].in*t.defaultDPI)),r*parseFloat(e)}function b(e){if(!(e.hasAttribute(`transform`)||e.nodeName===`use`&&(e.hasAttribute(`x`)||e.hasAttribute(`y`))))return null;let t=x(e);return N.length>0&&t.premultiply(N[N.length-1]),te.copy(t),N.push(t),t}function x(e){let t=new Q;if(e.nodeName===`use`&&(e.hasAttribute(`x`)||e.hasAttribute(`y`))){let n=y(e.getAttribute(`x`)||0),r=y(e.getAttribute(`y`)||0);t.makeTranslation(n,r)}return e.hasAttribute(`transform`)&&S(e.getAttribute(`transform`),t),t}function S(e,t){let n=P,r=e.split(`)`);for(let e=r.length-1;e>=0;e--){let i=r[e].trim();if(i===``)continue;let a=i.indexOf(`(`),o=i.length;if(a>0&&a<o){let e=i.slice(0,a),r=g(i.slice(a+1));switch(n.identity(),e){case`translate`:if(r.length>=1){let e=r[0],t=0;r.length>=2&&(t=r[1]),n.makeTranslation(e,t)}break;case`rotate`:if(r.length>=1){let e=0,t=0,i=0;e=r[0]*Math.PI/180,r.length>=3&&(t=r[1],i=r[2]),F.makeTranslation(-t,-i),I.makeRotation(e),L.multiplyMatrices(I,F),F.makeTranslation(t,i),n.multiplyMatrices(F,L)}break;case`scale`:if(r.length>=1){let e=r[0],t=e;r.length>=2&&(t=r[1]),n.makeScale(e,t)}break;case`skewX`:r.length===1&&n.set(1,Math.tan(r[0]*Math.PI/180),0,0,1,0,0,0,1);break;case`skewY`:r.length===1&&n.set(1,0,0,Math.tan(r[0]*Math.PI/180),1,0,0,0,1);break;case`matrix`:r.length===6&&n.set(r[0],r[2],r[4],r[1],r[3],r[5],0,0,1)}t.premultiply(n)}}return t}function C(e,t){function n(e){ee.set(e.x,e.y,1).applyMatrix3(t),e.set(ee.x,ee.y)}function r(e){let n=e.xRadius,r=e.yRadius,i=Math.cos(e.aRotation),a=Math.sin(e.aRotation),o=new Z(n*i,n*a,0),s=new Z(-r*a,r*i,0),c=o.applyMatrix3(t),l=s.applyMatrix3(t),u=P.set(c.x,l.x,0,c.y,l.y,0,0,0,1),d=F.copy(u).invert(),f=I.copy(d).transpose().multiply(d).elements,p=k(f[0],f[1],f[4]),m=Math.sqrt(p.rt1),h=Math.sqrt(p.rt2);if(e.xRadius=1/m,e.yRadius=1/h,e.aRotation=Math.atan2(p.sn,p.cs),!((e.aEndAngle-e.aStartAngle)%(2*Math.PI)<2**-52)){let n=F.set(m,0,0,0,h,0,0,0,1),r=I.set(p.cs,p.sn,0,-p.sn,p.cs,0,0,0,1),i=n.multiply(r).multiply(u),a=e=>{let{x:t,y:n}=new Z(Math.cos(e),Math.sin(e),0).applyMatrix3(i);return Math.atan2(n,t)};e.aStartAngle=a(e.aStartAngle),e.aEndAngle=a(e.aEndAngle),w(t)&&(e.aClockwise=!e.aClockwise)}}function i(e){let n=E(t),r=D(t);e.xRadius*=n,e.yRadius*=r;let i=n>2**-52?Math.atan2(t.elements[1],t.elements[0]):Math.atan2(-t.elements[3],t.elements[4]);e.aRotation+=i,w(t)&&(e.aStartAngle*=-1,e.aEndAngle*=-1,e.aClockwise=!e.aClockwise)}let a=e.subPaths;for(let e=0,o=a.length;e<o;e++){let o=a[e].curves;for(let e=0;e<o.length;e++){let a=o[e];a.isLineCurve?(n(a.v1),n(a.v2)):a.isCubicBezierCurve?(n(a.v0),n(a.v1),n(a.v2),n(a.v3)):a.isQuadraticBezierCurve?(n(a.v0),n(a.v1),n(a.v2)):a.isEllipseCurve&&(R.set(a.aX,a.aY),n(R),a.aX=R.x,a.aY=R.y,T(t)?r(a):i(a))}}}function w(e){let t=e.elements;return t[0]*t[4]-t[1]*t[3]<0}function T(e){let t=e.elements,n=t[0]*t[3]+t[1]*t[4];if(n===0)return!1;let r=E(e),i=D(e);return Math.abs(n/(r*i))>2**-52}function E(e){let t=e.elements;return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function D(e){let t=e.elements;return Math.sqrt(t[3]*t[3]+t[4]*t[4])}function O(e){let t=e.elements,n=t[0]*t[4]-t[1]*t[3];return Math.sqrt(Math.abs(n))}function k(e,t,n){let r,i,a,o,s,c=e+n,l=e-n,u=Math.sqrt(l*l+4*t*t);return c>0?(r=.5*(c+u),s=1/r,i=e*s*n-t*s*t):c<0?i=.5*(c-u):(r=.5*u,i=-.5*u),a=l>0?l+u:l-u,Math.abs(a)>2*Math.abs(t)?(s=-2*t/a,o=1/Math.sqrt(1+s*s),a=s*o):Math.abs(t)===0?(a=1,o=0):(s=-.5*a/t,a=1/Math.sqrt(1+s*s),o=s*a),l>0&&(s=a,a=-o,o=s),{rt1:r,rt2:i,cs:a,sn:o}}let A=[],j={},M={},N=[],P=new Q,F=new Q,I=new Q,L=new Q,R=new X,ee=new Z,te=new Q,z=new DOMParser().parseFromString(e,`image/svg+xml`);return p(z),n(z.documentElement,{fill:`#000`,fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:`miter`,strokeLineCap:`butt`,strokeMiterLimit:4}),{paths:A,gradients:M,xml:z.documentElement}}static createFillMaterial(e){let t=e.userData.style;if(t.fill===void 0||t.fill===`none`)return null;let n=e.color,r=null,i=Ou.exec(t.fill);i&&(r=ku(e.userData.gradients&&e.userData.gradients[i[1]],e));let a=new Kr({opacity:t.fillOpacity*(t.opacity||1),transparent:!0,side:2,depthWrite:!1});return r===null?a.color=n:a.map=r,a}static createStrokeMaterial(e){let t=e.userData.style;return t.stroke===void 0||t.stroke===`none`?null:(Ou.test(t.stroke)&&console.warn(`THREE.SVGLoader: Gradient strokes are not supported.`),new Kr({color:new Rn().setStyle(t.stroke,Eu),opacity:t.strokeOpacity*(t.opacity||1),transparent:!0,side:2,depthWrite:!1}))}static createShapes(e){return console.warn(`SVGLoader: createShapes() is deprecated. Use shapePath.toShapes() instead.`),e.toShapes()}static getStrokeStyle(e,t,n,r,i){return e=e===void 0?1:e,t=t===void 0?`#000`:t,n=n===void 0?`miter`:n,r=r===void 0?`butt`:r,i=i===void 0?4:i,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:r,strokeMiterLimit:i}}static pointsToStroke(t,n,r,i){let a=[],o=[],s=[];if(e.pointsToStrokeWithBuffers(t,n,r,i,a,o,s)===0)return null;let c=new Pr;return c.setAttribute(`position`,new Sr(a,3)),c.setAttribute(`normal`,new Sr(o,3)),c.setAttribute(`uv`,new Sr(s,2)),c}static pointsToStrokeWithBuffers(e,t,n,r,i,a,o,s){let c=new X,l=new X,u=new X,d=new X,f=new X,p=new X,m=new X,h=new X,g=new X,_=new X,v=new X,y=new X,b=new X,x=new X,S=new X,C=new X,w=new X;n=n===void 0?12:n,r=r===void 0?.001:r,s=s===void 0?0:s,e=ie(e);let T=e.length;if(T<2)return 0;let E=e[0].equals(e[T-1]),D,O=e[0],k,A=t.strokeWidth/2,j=1/(T-1),M=0,N,P,F,I,L=!1,R=0,ee=s*3,te=s*2;z(e[0],e[1],c).multiplyScalar(A),h.copy(e[0]).sub(c),g.copy(e[0]).add(c),_.copy(h),v.copy(g);for(let n=1;n<T;n++){D=e[n],k=n===T-1?E?e[1]:void 0:e[n+1];let r=c;if(z(O,D,r),u.copy(r).multiplyScalar(A),y.copy(D).sub(u),b.copy(D).add(u),N=M+j,P=!1,k!==void 0){z(D,k,l),u.copy(l).multiplyScalar(A),x.copy(D).sub(u),S.copy(D).add(u),F=!0,u.subVectors(k,O),r.dot(u)<0&&(F=!1),n===1&&(L=F),u.subVectors(k,D),u.normalize();let e=Math.abs(r.dot(u));if(e>2**-52){let n=A/e;u.multiplyScalar(-n),d.subVectors(D,O),f.copy(d).setLength(n).add(u),C.copy(f).negate();let r=f.length(),i=d.length();d.divideScalar(i),p.subVectors(k,D);let a=p.length();if(p.divideScalar(a),d.dot(C)<i&&p.dot(C)<a&&(P=!0),w.copy(f).add(D),C.add(D),P){let e=F?g:h,t=(w.x-e.x)*(C.y-e.y)-(w.y-e.y)*(C.x-e.x);(F&&t<0||!F&&t>0)&&C.copy(e)}switch(I=!1,P?F?(S.copy(C),b.copy(C)):(x.copy(C),y.copy(C)):H(),t.strokeLineJoin){case`bevel`:ne(F,P,N);break;case`round`:U(F,P),F?V(D,y,x,N,0):V(D,S,b,N,1);break;default:let e=A*t.strokeMiterLimit/r;if(e<1){if(t.strokeLineJoin!==`miter-clip`){ne(F,P,N);break}U(F,P),F?(p.subVectors(w,y).multiplyScalar(e).add(y),m.subVectors(w,x).multiplyScalar(e).add(x),B(y,N,0),B(p,N,0),B(D,N,.5),B(D,N,.5),B(p,N,0),B(m,N,0),B(D,N,.5),B(m,N,0),B(x,N,0)):(p.subVectors(w,b).multiplyScalar(e).add(b),m.subVectors(w,S).multiplyScalar(e).add(S),B(b,N,1),B(p,N,1),B(D,N,.5),B(D,N,.5),B(p,N,1),B(m,N,1),B(D,N,.5),B(m,N,1),B(S,N,1))}else P?(F?(B(g,M,1),B(h,M,0),B(w,N,0),B(g,M,1),B(w,N,0),B(C,N,1)):(B(g,M,1),B(h,M,0),B(w,N,1),B(h,M,0),B(C,N,0),B(w,N,1)),F?x.copy(w):S.copy(w)):F?(B(y,N,0),B(w,N,0),B(D,N,.5),B(D,N,.5),B(w,N,0),B(x,N,0)):(B(b,N,1),B(w,N,1),B(D,N,.5),B(D,N,.5),B(w,N,1),B(S,N,1)),I=!0}}else H()}else H();!E&&n===T-1&&re(e[0],_,v,F,!0,M),M=N,O=D,h.copy(x),g.copy(S)}if(!E)re(D,y,b,F,!1,N);else if(P&&i){let e=w,t=C;L!==F&&(e=C,t=w),F?(I||L)&&(t.toArray(i,0),t.toArray(i,9),I&&e.toArray(i,3)):(I||!L)&&(t.toArray(i,3),t.toArray(i,9),I&&e.toArray(i,0))}if(i){let e=[new X,new X,new X],t=s*3;for(let n=t;n<ee;n+=9)e[0].set(i[n],i[n+1]),e[1].set(i[n+3],i[n+4]),e[2].set(i[n+6],i[n+7]),ka.area(e)<0&&(i[n+3]=e[0].x,i[n+4]=e[0].y)}return R;function z(e,t,n){return n.subVectors(t,e),n.set(-n.y,n.x).normalize()}function B(e,t,n){i&&(i[ee]=e.x,i[ee+1]=e.y,i[ee+2]=0,a&&(a[ee]=0,a[ee+1]=0,a[ee+2]=1),ee+=3,o&&(o[te]=t,o[te+1]=n,te+=2)),R+=3}function V(e,t,r,i,a){c.copy(t).sub(e).normalize(),l.copy(r).sub(e).normalize();let o=Math.PI,s=c.dot(l);Math.abs(s)<1&&(o=Math.abs(Math.acos(s))),o/=n,u.copy(t);for(let t=0,r=n-1;t<r;t++)d.copy(u).rotateAround(e,o),B(u,i,a),B(d,i,a),B(e,i,.5),u.copy(d);B(u,i,a),B(r,i,a),B(e,i,.5)}function H(){B(g,M,1),B(h,M,0),B(y,N,0),B(g,M,1),B(y,N,0),B(b,N,1)}function ne(e,t,n){t?e?(B(g,M,1),B(h,M,0),B(y,N,0),B(g,M,1),B(y,N,0),B(C,N,1),B(y,n,0),B(x,n,0),B(C,n,.5)):(B(g,M,1),B(h,M,0),B(b,N,1),B(h,M,0),B(C,N,0),B(b,N,1),B(b,n,1),B(C,n,0),B(S,n,1)):e?(B(y,n,0),B(x,n,0),B(D,n,.5)):(B(b,n,1),B(S,n,0),B(D,n,.5))}function U(e,t){t&&(e?(B(g,M,1),B(h,M,0),B(y,N,0),B(g,M,1),B(y,N,0),B(C,N,1),B(y,M,0),B(D,N,.5),B(C,N,1),B(D,N,.5),B(x,M,0),B(C,N,1)):(B(g,M,1),B(h,M,0),B(b,N,1),B(h,M,0),B(C,N,0),B(b,N,1),B(b,M,1),B(C,N,0),B(D,N,.5),B(D,N,.5),B(C,N,0),B(S,M,1)))}function re(e,n,r,a,s,f){switch(t.strokeLineCap){case`round`:s?V(e,r,n,f,.5):V(e,n,r,f,.5);break;case`square`:if(s)c.subVectors(n,e),l.set(c.y,-c.x),u.addVectors(c,l).add(e),d.subVectors(l,c).add(e),a?(u.toArray(i,3),d.toArray(i,0),d.toArray(i,9)):(u.toArray(i,3),o[7]===1?d.toArray(i,9):u.toArray(i,9),d.toArray(i,0));else{c.subVectors(r,e),l.set(c.y,-c.x),u.addVectors(c,l).add(e),d.subVectors(l,c).add(e);let t=i.length;a?(u.toArray(i,t-3),d.toArray(i,t-6),d.toArray(i,t-12)):(d.toArray(i,t-6),u.toArray(i,t-3),d.toArray(i,t-12))}}}function ie(e){let t=!1;for(let n=1,i=e.length-1;n<i;n++)if(e[n].distanceTo(e[n+1])<r){t=!0;break}if(!t)return e;let n=[];n.push(e[0]);for(let t=1,i=e.length-1;t<i;t++)e[t].distanceTo(e[t+1])>=r&&n.push(e[t]);return n.push(e[e.length-1]),n}}},Ou=/^\s*url\(\s*(?:["']\s*)?#([^)'"\s]+)(?:\s*["'])?\s*\)\s*$/;function ku(e,t,n=256){if(!e||!Array.isArray(e.stops)||e.stops.length===0)return null;let r=t.userData.transform,i=e.gradientUnits===`objectBoundingBox`,a=null;if(i&&(a=Au(t,r),a===null))return null;function o(t,n,o){o.set(t,n,1),e.gradientTransform&&o.applyMatrix3(e.gradientTransform),i&&o.set(a.minX+o.x*a.width,a.minY+o.y*a.height,1),r&&o.applyMatrix3(r)}let s=document.createElement(`canvas`),c;if(e.type===`linearGradient`){s.width=n,s.height=1;let t=s.getContext(`2d`),r=t.createLinearGradient(0,0,n,0);ju(r,e.stops),t.fillStyle=r,t.fillRect(0,0,n,1);let i=new Z,a=new Z;o(e.x1,e.y1,i),o(e.x2,e.y2,a);let l=a.x-i.x,u=a.y-i.y,d=l*l+u*u||1e-20,f=l/d,p=u/d,m=-(f*i.x+p*i.y);c=new Q().set(f,p,m,0,0,.5,0,0,1)}else{let t=e.cx,o=e.cy,l=e.fx,u=e.fy,d=e.r;if(e.gradientTransform){let n=new Z;n.set(t,o,1).applyMatrix3(e.gradientTransform),t=n.x,o=n.y,n.set(l,u,1).applyMatrix3(e.gradientTransform),l=n.x,u=n.y}if(i&&(t=a.minX+t*a.width,o=a.minY+o*a.height,l=a.minX+l*a.width,u=a.minY+u*a.height,d*=Math.sqrt((a.width*a.width+a.height*a.height)/2)),d<=0)return null;s.width=n,s.height=n;let f=s.getContext(`2d`),p=t-d,m=o-d,h=2*d,g=n/h;f.setTransform(g,0,0,g,-p*g,-m*g);let _=f.createRadialGradient(l,u,0,t,o,d);ju(_,e.stops),f.fillStyle=_,f.fillRect(p,m,h,h);let v=r?r.clone().invert():new Q;c=new Q().set(1/h,0,-p/h,0,1/h,-m/h,0,0,1).multiply(v)}let l=new pi(s);l.colorSpace=Eu,l.flipY=!1,l.matrixAutoUpdate=!1,l.matrix=c;let u=e.spreadMethod===`reflect`?g:e.spreadMethod===`repeat`?m:h;return l.wrapS=u,l.wrapT=u,l}function Au(e,t){let n=t?t.clone().invert():null,r=new X,i=new rs;for(let t of e.subPaths)for(let e of t.getPoints())r.copy(e),n&&r.applyMatrix3(n),i.expandByPoint(r);return i.isEmpty()?null:{minX:i.min.x,minY:i.min.y,width:i.max.x-i.min.x,height:i.max.y-i.min.y}}function ju(e,t){let n=new Rn;for(let r of t){let t=r.color;if(r.opacity<1){n.setStyle(r.color,Eu);let e=/rgb\(([^)]+)\)/.exec(n.getStyle(Eu));e&&(t=`rgba(${e[1]},${r.opacity})`)}e.addColorStop(Math.max(0,Math.min(1,r.offset)),t)}}var Mu={type:`change`},Nu={type:`start`},Pu={type:`end`},Fu=new Gr,Iu=new Rr,Lu=Math.cos(70*Mt.DEG2RAD),Ru=new Z,zu=2*Math.PI,Bu={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vu=1e-6,Hu=class extends as{constructor(e,t=null){super(e,t),this.state=Bu.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:f.ROTATE,MIDDLE:f.DOLLY,RIGHT:f.PAN},this.touches={ONE:p.ROTATE,TWO:p.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new Nt,this._lastTargetPosition=new Z,this._quat=new Nt().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ts,this._sphericalDelta=new ts,this._scale=1,this._panOffset=new Z,this._rotateStart=new X,this._rotateEnd=new X,this._rotateDelta=new X,this._panStart=new X,this._panEnd=new X,this._panDelta=new X,this._dollyStart=new X,this._dollyEnd=new X,this._dollyDelta=new X,this._dollyDirection=new Z,this._mouse=new X,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Wu.bind(this),this._onPointerDown=Uu.bind(this),this._onPointerUp=Gu.bind(this),this._onContextMenu=Qu.bind(this),this._onMouseWheel=Ju.bind(this),this._onKeyDown=Yu.bind(this),this._onTouchStart=Xu.bind(this),this._onTouchMove=Zu.bind(this),this._onMouseDown=Ku.bind(this),this._onMouseMove=qu.bind(this),this._interceptControlDown=$u.bind(this),this._interceptControlUp=ed.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=Bu.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),e.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mu),this.update(),this.state=Bu.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Ru.copy(t).sub(this.target),Ru.applyQuaternion(this._quat),this._spherical.setFromVector3(Ru),this.autoRotate&&this.state===Bu.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=zu:n>Math.PI&&(n-=zu),r<-Math.PI?r+=zu:r>Math.PI&&(r-=zu),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(Ru.setFromSpherical(this._spherical),Ru.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ru),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=Ru.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new Z(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new Z(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=Ru.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(Fu.origin.copy(this.object.position),Fu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fu.direction))<Lu?this.object.lookAt(this.target):(Iu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fu.intersectPlane(Iu,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>Vu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vu||this._lastTargetPosition.distanceToSquared(this.target)>Vu?(this.dispatchEvent(Mu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?zu/60/60*this.autoRotateSpeed:zu/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ru.setFromMatrixColumn(t,0),Ru.multiplyScalar(-e),this._panOffset.add(Ru)}_panUp(e,t){this.screenSpacePanning===!0?Ru.setFromMatrixColumn(t,1):(Ru.setFromMatrixColumn(t,0),Ru.crossVectors(this.object.up,Ru)),Ru.multiplyScalar(e),this._panOffset.add(Ru)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Ru.copy(r).sub(this.target);let i=Ru.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(zu*this._rotateDelta.x/t.clientHeight),this._rotateUp(zu*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(zu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-zu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(zu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-zu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(zu*this._rotateDelta.x/t.clientHeight),this._rotateUp(zu*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new X,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Uu(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function Wu(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function Gu(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(Pu),this.state=Bu.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function Ku(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case f.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Bu.DOLLY;break;case f.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Bu.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Bu.ROTATE}break;case f.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Bu.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Bu.PAN}break;default:this.state=Bu.NONE}this.state!==Bu.NONE&&this.dispatchEvent(Nu)}function qu(e){switch(this.state){case Bu.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Bu.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Bu.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function Ju(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===Bu.NONE&&(e.preventDefault(),this.dispatchEvent(Nu),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Pu))}function Yu(e){this.enabled!==!1&&this._handleKeyDown(e)}function Xu(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case p.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Bu.TOUCH_ROTATE;break;case p.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Bu.TOUCH_PAN;break;default:this.state=Bu.NONE}break;case 2:switch(this.touches.TWO){case p.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Bu.TOUCH_DOLLY_PAN;break;case p.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Bu.TOUCH_DOLLY_ROTATE;break;default:this.state=Bu.NONE}break;default:this.state=Bu.NONE}this.state!==Bu.NONE&&this.dispatchEvent(Nu)}function Zu(e){switch(this._trackPointer(e),this.state){case Bu.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Bu.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Bu.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Bu.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Bu.NONE}}function Qu(e){this.enabled!==!1&&e.preventDefault()}function $u(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function ed(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var td=r(),nd=`-16 -16 288 288`;function rd(e){let t=(typeof e?.closest==`function`?e.closest(`[data-part]`):null)?.getAttribute(`data-part`);return t===`eye-white`||t===`pupil`||t===`eyes`?{category:`eyes`,raw:t}:t===`nose`?{category:`nose`,raw:t}:t===`mouth`?{category:`mouth`,raw:t}:t===`brows`?{category:`brows`,raw:t}:t===`head`||t===`head-front`?{category:`head`,raw:t}:t===`accessory`||t===`accessory-back`?{category:`accessory`,raw:t}:t===`shadow`?{category:`shadow`,raw:t}:{category:`body`,raw:t}}function id(e){let t=e.extractPoints(6).shape,n=1/0,r=-1/0,i=1/0,a=-1/0;return t.forEach(e=>{n=Math.min(n,e.x),r=Math.max(r,e.x),i=Math.min(i,e.y),a=Math.max(a,e.y)}),Math.min(r-n,a-i)}function ad(e,n,r){let a=i(n),o={...e,depth:`flat`},s=(0,d.renderToStaticMarkup)((0,u.createElement)(`svg`,{viewBox:nd,xmlns:`http://www.w3.org/2000/svg`},t(u.createElement,o,a))),{paths:c}=new Du().parse(s),l=new jn,f=[],p=(e,t)=>new Ka({color:new Rn(e),opacity:t,transparent:t<1,side:2,roughness:.55,metalness:.04}),m=Math.max(4,r.base*(r.body??1));c.forEach((e,t)=>{let n=e.userData.style,{category:i,raw:a}=rd(e.userData.node),o=i===`shadow`?Math.max(4,r.base*.08):Math.max(4,r.base*(r[i]??1)),s=(i===`body`||i===`shadow`?0:a===`head`?m*.4:m)+t*2.2;if(n.fill!==void 0&&n.fill!==`none`){let t=n.fillOpacity??1;t>.01&&Du.createShapes(e).forEach(e=>{let r=id(e),i=Math.min(o,r*1.1),a=Math.max(.6,Math.min(i*.48,r*.48)),c=new Ma(e,{depth:i,bevelEnabled:!0,bevelThickness:a,bevelSize:a,bevelSegments:r>6?16:4,curveSegments:24}),u=p(n.fill,t);f.push(c,u);let d=new ii(c,u);d.position.z=s,l.add(d)})}if(n.stroke!==void 0&&n.stroke!==`none`){let t=n.strokeOpacity??1;t>.01&&e.subPaths.forEach(e=>{let r=Du.pointsToStroke(e.getPoints(),n);if(!r)return;let i=p(n.stroke,t);f.push(r,i);let a=new ii(r,i);a.position.z=s+o,l.add(a)})}}),l.scale.y=-1;let h=new tr().setFromObject(l),g=h.getCenter(new Z);l.position.sub(g);let _=h.getSize(new Z);return{group:l,disposables:f,radius:Math.max(_.x,_.y,_.z,1)/2}}function od({config:e,state:t=e.defaultState,size:r=380,relief:i=n}){let a=(0,u.useRef)(null);return(0,u.useEffect)(()=>{let n=a.current;if(!n)return;let o;try{o=new Tu({antialias:!0,alpha:!0})}catch{return}let s=new Bn,c=new Po(40,1,.1,5e3),{group:l,disposables:u,radius:d}=ad(e,t,i);s.add(l),s.add(new Ro(16777215,.65));let f=new Lo(16777215,1.1);f.position.set(d*1.6,d*2.2,d*2.4),s.add(f);let p=new Lo(16777215,.4);p.position.set(-d*2,d*.4,d*1.4),s.add(p);let m=d/Math.sin(c.fov*Math.PI/360)+d;c.position.set(0,0,m),c.lookAt(0,0,0),o.outputColorSpace!==void 0&&(o.outputColorSpace=He),o.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.appendChild(o.domElement);let h=window.matchMedia(`(prefers-reduced-motion: reduce)`),g=e.accessibility.respectReducedMotion&&h.matches,_=new Hu(c,o.domElement);_.enableDamping=!0,_.enablePan=!1,_.minDistance=m*.5,_.maxDistance=m*2,_.autoRotate=!g,_.autoRotateSpeed=2.4;let v=()=>{let e=n.clientWidth||r,t=n.clientHeight||r;o.setSize(e,t),c.aspect=e/t,c.updateProjectionMatrix()};v();let y=new ResizeObserver(v);y.observe(n);let b=0,x=!1,S=()=>{x||(_.update(),o.render(s,c),b=requestAnimationFrame(S))};return S(),()=>{x=!0,cancelAnimationFrame(b),y.disconnect(),_.dispose(),u.forEach(e=>e.dispose()),o.dispose(),o.domElement.parentNode===n&&n.removeChild(o.domElement)}},[e,t,r,i]),(0,td.jsx)(`div`,{ref:a,className:`wobbi-mascot-3d`,role:`img`,"aria-label":e.accessibility.label,style:{width:r,height:r}})}export{od as Mascot3D};