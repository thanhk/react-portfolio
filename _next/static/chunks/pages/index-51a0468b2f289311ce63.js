(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6071:function(n,e,t){"use strict";var r=t(3038),i=t(862);e.default=void 0;var o=i(t(7294)),a=t(1689),u=t(2441),s=t(5749),d={};function c(n,e,t,r){if(n&&(0,a.isLocalURL)(e)){n.prefetch(e,t,r).catch((function(n){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:n&&n.locale;d[e+"%"+t+(i?"%"+i:"")]=!0}}var l=function(n){var e=!1!==n.prefetch,t=(0,u.useRouter)(),i=t&&t.asPath||"/",l=o.default.useMemo((function(){var e=(0,a.resolveHref)(i,n.href,!0),t=r(e,2),o=t[0],u=t[1];return{href:o,as:n.as?(0,a.resolveHref)(i,n.as):u||o}}),[i,n.href,n.as]),f=l.href,p=l.as,m=n.children,x=n.replace,h=n.shallow,g=n.scroll,b=n.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var v=o.Children.only(m),w=v&&"object"===typeof v&&v.ref,j=(0,s.useIntersection)({rootMargin:"200px"}),k=r(j,2),y=k[0],z=k[1],Z=o.default.useCallback((function(n){y(n),w&&("function"===typeof w?w(n):"object"===typeof w&&(w.current=n))}),[w,y]);(0,o.useEffect)((function(){var n=z&&e&&(0,a.isLocalURL)(f),r="undefined"!==typeof b?b:t&&t.locale,i=d[f+"%"+p+(r?"%"+r:"")];n&&!i&&c(t,f,p,{locale:r})}),[p,f,z,b,e,t]);var S={ref:Z,onClick:function(n){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(n),n.defaultPrevented||function(n,e,t,r,i,o,u,s){("A"!==n.currentTarget.nodeName||!function(n){var e=n.currentTarget.target;return e&&"_self"!==e||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.nativeEvent&&2===n.nativeEvent.which}(n)&&(0,a.isLocalURL)(t))&&(n.preventDefault(),null==u&&(u=r.indexOf("#")<0),e[i?"replace":"push"](t,r,{shallow:o,locale:s,scroll:u}))}(n,t,f,p,x,h,g,b)},onMouseEnter:function(n){(0,a.isLocalURL)(f)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(n),c(t,f,p,{priority:!0}))}};if(n.passHref||"a"===v.type&&!("href"in v.props)){var E="undefined"!==typeof b?b:t&&t.locale,F=t&&t.isLocaleDomain&&(0,a.getDomainLocale)(p,E,t&&t.locales,t&&t.domainLocales);S.href=F||(0,a.addBasePath)((0,a.addLocale)(p,E,t&&t.defaultLocale))}return o.default.cloneElement(v,S)};e.default=l},5749:function(n,e,t){"use strict";var r=t(3038);e.__esModule=!0,e.useIntersection=function(n){var e=n.rootMargin,t=n.disabled||!a,s=(0,i.useRef)(),d=(0,i.useState)(!1),c=r(d,2),l=c[0],f=c[1],p=(0,i.useCallback)((function(n){s.current&&(s.current(),s.current=void 0),t||l||n&&n.tagName&&(s.current=function(n,e,t){var r=function(n){var e=n.rootMargin||"",t=u.get(e);if(t)return t;var r=new Map,i=new IntersectionObserver((function(n){n.forEach((function(n){var e=r.get(n.target),t=n.isIntersecting||n.intersectionRatio>0;e&&t&&e(t)}))}),n);return u.set(e,t={id:e,observer:i,elements:r}),t}(t),i=r.id,o=r.observer,a=r.elements;return a.set(n,e),o.observe(n),function(){a.delete(n),o.unobserve(n),0===a.size&&(o.disconnect(),u.delete(i))}}(n,(function(n){return n&&f(n)}),{rootMargin:e}))}),[t,e,l]);return(0,i.useEffect)((function(){if(!a&&!l){var n=(0,o.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,o.cancelIdleCallback)(n)}}}),[l]),[p,l]};var i=t(7294),o=t(8391),a="undefined"!==typeof IntersectionObserver;var u=new Map},2668:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Kn}});var r=t(5893),i=(t(7294),t(2465)),o=t(9163);function a(){var n=(0,i.Z)(["\n  display: flex;  \n  height: ",";\n\n  @media "," {\n    height: ",";\n  }\n\n  @media "," {\n    height: ",";\n  }\n"]);return a=function(){return n},n}function u(){var n=(0,i.Z)(["\n  margin-left: ",";\n  transition: 0.3s ease;\n  justify-content: center;\n  border-radius: 50px;\n  padding: 8px;\n\n  &:hover {\n    background-color: #212d45;\n    transform: scale(1.2);\n    cursor: pointer;\n  }\n\n  @media "," {\n    margin-left: ",";\n\n  }\n  @media "," {\n    margin-left: ",";\n  }\n"]);return u=function(){return n},n}function s(){var n=(0,i.Z)(["\n  border: none;\n  border-radius: 50px;\n  color: #fff;\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: ",";\n  opacity: ",";\n  transition: .4s ease;\n  font-size: ",";\n  font-weight: 600;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: ",";\n\n  &:hover {\n    opacity: 0;\n  }\n  &:focus {\n    outline: none;\n  }\n  &:active {\n    opacity: 1;\n    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);\n  }\n\n  &:disabled{\n    background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);\n    opacity: 0.5;\n    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);\n  }\n\n  @media "," {\n    font-size: ",";\n  }\n\n  @media "," {\n    font-size: 14px;\n  }\n"]);return s=function(){return n},n}function d(){var n=(0,i.Z)(["\n  width: ",";\n  height: ",";\n  border-radius: 50px;\n  font-size: ",";\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: ",";\n  color: #fff;\n  background: ",";\n  cursor: pointer;\n  transition: 0.5s ease;\n  position: relative;\n  overflow: hidden;\n  opacity: ",";\n\n  @media "," {\n    width: ",";\n    height: ",";\n    font-size: ",";\n    margin-bottom: ",";\n  }\n\n  @media "," {\n    width: 100%;\n    height: 32px;\n    font-size: 14px;\n    margin-bottom: ",";\n  }\n"]);return d=function(){return n},n}function c(){var n=(0,i.Z)(["\n  color: #FFF;\n  background: none;\n  border: 1px solid rgba(255, 255, 255, 0.33);\n  box-sizing: border-box;\n  border-radius: 999px;\n  padding: 16px 24px;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 16px;\n  width: fit-content;\n  margin-top: 32px;\n  margin-bottom: 80px;\n  cursor: pointer;\n  transition: 0.4s ease;\n  &:focus {\n    outline: none;\n  }\n\n  &:hover {\n    color: #0f1624;\n    background: #fff;\n    border: 1px solid #fff;\n  }\n\n  &:active {\n    background: #e0e4eb;\n    border: 1px solid #304169;\n    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);\n  }\n\n  @media ","{\n    margin-top: 24px; \n    margin-bottom: 64px;\n    padding: 16px 24px;\n    width: fit-content;\n    font-size: 20px;\n    line-height: 20px;\n  }\n\n  @media "," {\n    margin-top: 16px;\n    margin-bottom: 40px;\n    padding: 8px 16px;\n    width: 100%;\n    font-size: 14px;\n    line-height: 16px;\n  }\n"]);return c=function(){return n},n}function l(){var n=(0,i.Z)(["\n  max-width: 800px;\n  font-weight: 300;\n  font-size: 18px;\n  line-height: 32px;\n  color: rgba(255, 255, 255, 0.75);\n\n@media "," {\n    max-width: 672px;\n    font-size: 16px;\n    line-height: 25px;\n  }\n\n  @media "," {\n    font-size: 14px;\n    line-height: 22px;\n  }\n"]);return l=function(){return n},n}function f(){var n=(0,i.Z)(["\n\n  width: 64px;\n  height: 6px;\n  border-radius: 10px;\n  background-color: #fff;\n  background: ",";\n\n    margin: ",";\n\n  @media "," {\n    width: 48px;\n    height: 4px;\n  }\n\n  @media "," {\n    width: 32px;\n    height: 2px;\n  }\n"]);return f=function(){return n},n}function p(){var n=(0,i.Z)(["\n  max-width: 800px;\n  font-size: 24px;\n  line-height: 40px;\n  font-weight: 300;\n  padding-bottom: 3.6rem;\n  color: rgba(255, 255, 255, 0.5);\n\n  @media "," {\n    max-width: 670px;\n    font-size: 20px;\n    line-height: 32px;\n    padding-bottom: 24px;\n  }\n\n  @media "," {\n    font-size: 16px;\n    line-height: 24px;\n    padding-bottom: 16px;\n  }\n"]);return p=function(){return n},n}function m(){var n=(0,i.Z)(["\n  font-weight: 800;\n  font-size: ",";\n  line-height: ",";\n  width: max-content;\n  max-width: 100%;\n  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin-bottom: 16px;\n  padding: ",";\n\n  @media ","{\n    font-size: ",";\n    line-height: ",";\n    margin-bottom: 12px;\n    padding: ",";\n  }\n\n  @media ","{\n    font-size: 32px;\n    line-height: 40px;\n    font-size: ",";\n    line-height: ",";\n    margin-bottom: 8px;\n    padding: ",";\n    max-width: 100%;\n  }\n"]);return m=function(){return n},n}function x(){var n=(0,i.Z)(["\n  display: ",";\n  flex-direction: ",";\n  padding: "," ;\n  margin: 0 auto;\n  max-width: 1040px;\n  box-sizing: content-box;\n  position: relative;\n  overflow: hidden;\n  grid-template-columns: 1fr 1fr;\n\n  @media "," {\n    padding: 24px 48px 0;\n    flex-direction: column;\n  }\n\n  @media "," {\n    padding: "," ;\n\n    width: calc(100vw - 32px);\n    flex-direction: column;\n  }\n"]);return x=function(){return n},n}var h=o.default.section(x(),(function(n){return n.grid?"grid":"flex"}),(function(n){return n.row?"row":"column"}),(function(n){return n.nopadding?"0":"32px 48px 0"}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.nopadding?"0":"16px 16px 0"})),g=o.default.h2(m(),(function(n){return n.main?"65px":"56px"}),(function(n){return n.main?"72px":"56px"}),(function(n){return n.main?"58px 0 16px":"0"}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.main?"56px":"48px"}),(function(n){return n.main?"56px":"48px"}),(function(n){return n.main?"40px 0 12px":"0"}),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.main?"28px":"32px"}),(function(n){return n.main?"32px":"40px"}),(function(n){return n.main?"16px 0 8px":"0"})),b=o.default.p(p(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),v=o.default.div(f(),(function(n){return n.colorAlt?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"}),(function(n){return n.divider?"4rem 0":""}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm}));o.default.p(l(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),o.default.button(c(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),o.default.div(d(),(function(n){return n.alt?"150px":"262px"}),(function(n){return n.alt?"52px":"64px"}),(function(n){return n.alt?"20px":"24px"}),(function(n){var e=n.alt,t=n.form;return e||t?"0":"0 0 80px"}),(function(n){return n.alt?"linear-gradient(270deg, #ff622e 0%, #B133FF 100%)":"linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)"}),(function(n){return n.disabled?".5":"1"}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.alt?"150px":"184px"}),(function(n){return n.alt?"52px":"48px"}),(function(n){return n.alt?"20px":"16px"}),(function(n){return n.alt?"0":"64px"}),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.alt?"0":"32px"})),o.default.button(s(),(function(n){return n.alt?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"}),(function(n){return n.disabled?".5":"1"}),(function(n){return n.alt?"20px":"24px"}),(function(n){return n.disabled?"inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)":"none"}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.alt?"20px":"16px"}),(function(n){return n.theme.breakpoints.sm})),o.default.div(u(),(function(n){return n.large?"24px":"16px"}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.large?"16px":"8px"}),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.large?"0":"8px"})),o.default.div(a(),(function(n){return n.large?"32px":"24px"}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.nav?"16px":"24px"}),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.large?"32px":"16px"}));function w(){var n=(0,i.Z)(["\n  width: 100%;\n  @media "," {\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n\n    margin: 0 auto;\n  }\n  @media "," {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n\n    margin: 0 auto;\n  }\n"]);return w=function(){return n},n}var j=o.default.div(w(),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.theme.breakpoints.md})),k=function(n){return(0,r.jsx)(h,{row:!0,nopadding:!0,children:(0,r.jsxs)(j,{children:[(0,r.jsxs)(g,{main:!0,center:!0,children:["Hello, ",(0,r.jsx)("br",{}),"I'm Steven Khuu"]}),(0,r.jsx)(b,{children:"I'm a computer science student at the University of Texas at Dallas with an interest in frontend development and software engineering."})]})})};function y(){var n=(0,i.Z)(["\ncolor: #d8bfbf;\nfont-size: 1.5rem;\n"]);return y=function(){return n},n}function z(){var n=(0,i.Z)(["\ndisplay: flex;\njustify-content: space-around;\npadding: 2rem;\n"]);return z=function(){return n},n}function Z(){var n=(0,i.Z)(["\ncolor:#d4c0c0;\nfont-size: 1.6rem;\npadding:1rem 1.5rem;\nbackground: #6b3030;\nborder-radius: 15px;\ntransition: 0.5s;\n&:hover{\n  background: #801414;\n\n}\n"]);return Z=function(){return n},n}function S(){var n=(0,i.Z)(["\n  list-style-type: none;\n  padding: 0;\n  display: flex;\n  justify-content: space-around;\n  margin: 2.5rem 0;\n"]);return S=function(){return n},n}function E(){var n=(0,i.Z)(["\n  width: 100%;\n  padding: 0 50px;\n  color: #e4e6e7;\n  font-style: 2rem;\n  line-height: 24px;\n  text-align: justify;\n  @media "," {\n    padding:.3rem\n  \n}\n"]);return E=function(){return n},n}function F(){var n=(0,i.Z)(["\n  width: 170px;\n  margin: 0 auto;\n  color: #dce3e7;\n  font-family: 'Droid Serif', serif;\n  font-size: 13px;\n  font-style: italic;\n  line-height: 18px;\n"]);return F=function(){return n},n}function D(){var n=(0,i.Z)(["\n  width: 50px;\n  height: 3px;\n  margin: 20px auto;\n  border: 0;\n  background: #d0bb57;\n"]);return D=function(){return n},n}function _(){var n=(0,i.Z)(["\n  font-weight: 500;\n  letter-spacing: 2px;\n  color: #9cc9e3;\n  padding: .5rem 0;\n  font-size: ",";\n"]);return _=function(){return n},n}function C(){var n=(0,i.Z)(["\n  text-align: center;\n  z-index: 20;\n  width: 100%;\n\n"]);return C=function(){return n},n}function A(){var n=(0,i.Z)(["\n  border-radius: 10px;\n  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);\n  text-align: center;\n  width: 400px;\n  @media "," {\n    width: 100%;\n  }\n"]);return A=function(){return n},n}function I(){var n=(0,i.Z)(["\ndisplay: grid;\ngrid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\npadding: 3rem;\nplace-items: center;\ncolumn-gap: 2rem;\nrow-gap: 3rem;\n@media "," {\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n  padding-bottom: 0;\n}\n\n"]);return I=function(){return n},n}function O(){var n=(0,i.Z)(["\n  width:100%;\n  height:100%;\n  object-fit: cover;\n  overflow: hidden;\n"]);return O=function(){return n},n}var L=o.default.img(O()),N=o.default.section(I(),(function(n){return n.theme.breakpoints.sm})),P=o.default.div(A(),(function(n){return n.theme.breakpoints.sm})),R=o.default.div(C()),U=o.default.h3(_(),(function(n){return n.title?"3rem":"2rem"})),M=o.default.hr(D()),T=(o.default.div(F()),o.default.p(E(),(function(n){return n.theme.breakpoints.sm}))),B=(o.default.ul(S()),o.default.a(Z()),o.default.ul(z())),W=o.default.li(y()),G=[{title:"Rise of the Elements",description:"An RPG game in Unity Teams using Photon Unity Networking (PUN) for multiplayer functionality. Using C#, we created player health, mana, experience, inventory, movement and attack systems. Additionally, we implemented mob spawning and loot systems. We also designed and animated all of our own assets.",image:"/react-portfolio/images/rote1.gif",tags:["Unity","C#","Networking"],source:"/",visit:"/",id:0},{title:"IoT Anomaly Detection App",description:"An iOS mobile app that displays data from devices and sensors using SwiftUI. Data is collected from a M5 Stack and stored in a S3 Bucket, where we programmed Six Sigma formulas in an AWS Lambda function (Python) to detect anomalies. The processed data is then stored and retrieved in a GraphQL API managed by AWS AppSync. Data between the frontend and backend is bridged using plugins from AWS Amplify.",tags:["AWS","SwiftUI","GraphQL","Six Sigma","Python"],source:"/",visit:"/",id:1}],H=t(1664),K=t(2821),Q=t(1649);function X(){var n=(0,i.Z)(["\ntransition: 0.3s ease;\ncolor: white;\nborder-radius: 50px;\n  padding: 8px;\n&:hover {\n    background-color: #212d45;\n    transform: scale(1.2);\n    cursor: pointer;\n    \n  }\n"]);return X=function(){return n},n}function Y(){var n=(0,i.Z)(["\n  margin-left: 8px;\n  display: flex;\n  align-self: center;\n  transition: 0.3s ease;\n  opacity: ",";\n  transform: ",";\n\n  &:hover {\n    opacity: 1;\n  }\n\n  @media "," {\n    margin: 2px 0 0 2px;\n    width: 15px;\n  }\n"]);return Y=function(){return n},n}function $(){var n=(0,i.Z)(["\n  border: none;\n  display: flex;\n  position: relative;\n  background: none;\n  font-size: 1.7rem;\n\n  line-height: 32px;\n  color: rgba(255, 255, 255, 0.75);\n  cursor: pointer;\n  transition: 0.3s ease;\n\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    color: #fff;\n  }\n\n  @media "," {\n    padding: 0.4rem 0;\n  }\n  @media "," {\n    padding: 0;\n  }\n"]);return $=function(){return n},n}function q(){var n=(0,i.Z)(["\n  font-size: 2rem;\n  line-height: 32px;\n  color: rgba(255, 255, 255, 0.75);\n  transition: 0.4s ease;\n  &:hover {\n    color: #fff;\n    opacity: 1;\n    cursor: pointer;\n  }\n  @media "," {\n    padding: 0.5rem;\n  }\n"]);return q=function(){return n},n}function J(){var n=(0,i.Z)(["\n  grid-area: 1 / 5 / 2 / 6;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  @media "," {\n    align-items: center;\n    grid-area: 1 / 4 / 2 / 6;\n  }\n"]);return J=function(){return n},n}function V(){var n=(0,i.Z)(["\n  grid-area: 1 / 2 / 2 / 4;\n  display: flex;\n  justify-content: space-around;\n  @media "," {\n    grid-area: 2 / 2 / 3 / 5;\n  }\n"]);return V=function(){return n},n}function nn(){var n=(0,i.Z)(["\n  grid-area: 1 / 1 / 2 / 2;\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  @media "," {\n    grid-area: 1 / 1 / 2 / 3;\n  }\n"]);return nn=function(){return n},n}function en(){var n=(0,i.Z)(["\n  font-size: 2rem;\n"]);return en=function(){return n},n}function tn(){var n=(0,i.Z)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 2rem;\n  padding: 1rem;\n  padding-top: 2rem;\n\n  @media "," {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(2, 60px);\n    grid-column-gap: 0.5rem;\n    grid-row-gap: 0.5rem;\n  }\n"]);return tn=function(){return n},n}var rn=o.default.div(tn(),(function(n){return n.theme.breakpoints.sm})),on=o.default.span(en()),an=o.default.div(nn(),(function(n){return n.theme.breakpoints.sm})),un=o.default.div(V(),(function(n){return n.theme.breakpoints.sm})),sn=o.default.div(J(),(function(n){return n.theme.breakpoints.sm})),dn=o.default.a(q(),(function(n){return n.theme.breakpoints.sm})),cn=(o.default.button($(),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.theme.breakpoints.md})),(0,o.default)(Q.U0j)(Y(),(function(n){return n.isOpen?"1":".75"}),(function(n){return n.isOpen?"scaleY(-1)":"scaleY(1)"}),(function(n){return n.theme.breakpoints.sm})),o.default.a(X())),ln=function(){return(0,r.jsxs)(rn,{children:[(0,r.jsx)(an,{children:(0,r.jsx)(H.default,{href:"https://thanhk.github.io/react-portfolio/",children:(0,r.jsxs)("a",{style:{display:"flex",alignItems:"center",color:"white"},children:[(0,r.jsx)(K.RrF,{size:"3rem"})," ",(0,r.jsx)(on,{children:"GitHub"})]})})}),(0,r.jsxs)(un,{children:[(0,r.jsx)("li",{children:(0,r.jsx)(H.default,{href:"#projects",children:(0,r.jsx)(dn,{children:"Projects"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(H.default,{href:"#tech",children:(0,r.jsx)(dn,{children:"Technologies"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(H.default,{href:"#about",children:(0,r.jsx)(dn,{children:"About"})})})]}),(0,r.jsxs)(sn,{children:[(0,r.jsx)(cn,{href:"https://github.com/thanhk",target:"_blank",children:(0,r.jsx)(K.RrF,{size:"3rem"})}),(0,r.jsx)(cn,{href:"https://www.linkedin.com/in/steven-khuu/",target:"_blank",children:(0,r.jsx)(K._iD,{size:"3rem"})}),(0,r.jsx)(cn,{href:"https://www.instagram.com/steambun.k/",target:"_blank",children:(0,r.jsx)(K.t0C,{size:"3rem"})}),(0,r.jsx)(cn,{href:"https://twitter.com/steammbun",target:"_blank",children:(0,r.jsx)(K.wod,{size:"3rem"})})]})]})},fn=function(){return(0,r.jsxs)(h,{nopadding:!0,id:"projects",children:[(0,r.jsx)(v,{}),(0,r.jsx)(g,{main:!0,children:"Projects"}),(0,r.jsx)(N,{children:G.map((function(n){var e=n.id,t=n.image,i=n.title,o=n.description,a=n.tags;n.source,n.visit;return(0,r.jsxs)(P,{children:[(0,r.jsx)(L,{src:t}),(0,r.jsxs)(R,{children:[(0,r.jsx)(U,{title:!0,children:i}),(0,r.jsx)(M,{})]}),(0,r.jsx)(T,{children:o}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{children:[(0,r.jsx)(R,{children:"Skills"}),(0,r.jsx)(B,{children:a.map((function(n,e){return(0,r.jsx)(W,{children:n},e)}))})]})]},e)}))})]})},pn=t(859),mn=t(9583);function xn(){var n=(0,i.Z)(["\n  display: block;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 10px;\n  \n  @media ","{\n    width: 40px;\n    height: 40px;\n    margin-bottom: 8px;\n  }\n\n  @media ","{\n    width: 32px;\n    height: 32px;\n    margin-bottom: 0px;\n  }\n"]);return xn=function(){return n},n}function hn(){var n=(0,i.Z)(["\n  max-width: 320px;\n  display: flex;\n  flex-direction: column;\n\n@media ","{\n  max-width: 203px;\n}\n\n@media ","{\n  margin-bottom: 14px;\n  max-width: 320px;\n  flex-direction: row;\n}\n"]);return hn=function(){return n},n}function gn(){var n=(0,i.Z)(["\n  font-size: 18px;\n  line-height: 30px;\n  color: rgba(255, 255, 255, 0.75);\n\n  @media ","{\n    font-size: 16px;\n    line-height: 28px;\n  }\n\n  @media ","{\n    font-size: 14px;\n    line-height: 22px;\n  }\n"]);return gn=function(){return n},n}function bn(){var n=(0,i.Z)(["\n  font-weight: 700;\n  font-size: 28px;\n  line-height: 32px;\n  letter-spacing: 0.02em;\n  color: #FFFFFF;\n  margin-bottom: 8px;\n\n@media ","{\n  font-size: 24px;\n  line-height: 28px;\n}\n\n@media ","{\n  font-size: 20px;\n  line-height: 28px;\n  letter-spacing: 0.02em;\n  margin-bottom: 4px;\n}\n"]);return bn=function(){return n},n}function vn(){var n=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  @media ","{\n    display: flex;\n    margin-left: 18px;\n  }\n"]);return vn=function(){return n},n}function wn(){var n=(0,i.Z)(["\n  list-style-type: none;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 40px;\n  margin: 3rem 0;\n  \n  @media ","{\n    margin: 64px 0;\n  }\n\n  @media ","{\n    margin: 64px 0;\n    gap: 24px\n  }\n  \n  @media ","{\n    display: flex;\n    flex-direction: column;\n    margin: 32px 0;\n  }\n"]);return wn=function(){return n},n}function jn(){var n=(0,i.Z)(["\n  width: 100%;\n"]);return jn=function(){return n},n}function kn(){var n=(0,i.Z)(["\n  text-align: center;\n  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);\n  width: 100%;\n  padding: 60px;\n  margin-top: 48px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  @media "," {\n    background-image: none;\n    padding: 0;\n    margin-top: 40px;\n  }\n  @media "," {\n    background-image: none;\n    padding: 0;\n    margin-top: 16px;\n  }\n"]);return kn=function(){return n},n}o.default.div(kn(),(function(n){return n.theme.breakpoints.lg}),(function(n){return n.theme.breakpoints.md})),o.default.img(jn());var yn=o.default.ul(wn(),(function(n){return n.theme.breakpoints.lg}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),zn=o.default.div(vn(),(function(n){return n.theme.breakpoints.sm})),Zn=o.default.h4(bn(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),Sn=o.default.p(gn(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),En=o.default.li(hn(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),Fn=(o.default.img(xn(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),function(){return(0,r.jsxs)(h,{id:"tech",children:[(0,r.jsx)(v,{}),(0,r.jsx)("br",{}),(0,r.jsx)(g,{children:"Technologies"}),(0,r.jsx)(b,{children:"I have built a few personal websites using React, JavaScript, SCSS, and Next.js. Throughout my coursework, I learned operating systems, network and computer security, software engineering principals, and algorithms and data structures."}),(0,r.jsxs)(yn,{children:[(0,r.jsxs)(En,{children:[(0,r.jsx)(pn.GR$,{size:"3rem"}),(0,r.jsxs)(zn,{children:[(0,r.jsx)(Zn,{children:"Front-End"}),(0,r.jsxs)(Sn,{children:["Experience with ",(0,r.jsx)("br",{}),"React.js, SwiftUI"]})]})]}),(0,r.jsxs)(En,{children:[(0,r.jsx)(pn.BwW,{size:"3rem"}),(0,r.jsxs)(zn,{children:[(0,r.jsx)(Zn,{children:"Back-End"}),(0,r.jsxs)(Sn,{children:["Experience with ",(0,r.jsx)("br",{}),"Node.js, Azure SQL, GraphQL"]})]})]}),(0,r.jsxs)(En,{children:[(0,r.jsx)(mn.UC$,{size:"3rem"}),(0,r.jsxs)(zn,{children:[(0,r.jsx)(Zn,{children:"AWS"}),(0,r.jsxs)(Sn,{children:["Experience with ",(0,r.jsx)("br",{}),"DynamoDB, S3, AppSync, Amplify, Lambda, SNS, Cognito"]})]})]})]})]})}),Dn=function(){return(0,r.jsxs)(h,{id:"about",children:[(0,r.jsx)(v,{}),(0,r.jsx)("br",{}),(0,r.jsx)(g,{children:"About Me"}),(0,r.jsx)(b,{children:"I am a hard-working, detailed-oriented student and programmer. I love working on products that are visual and interacting with customers. I work great in team environments and am passionate about learning."}),(0,r.jsx)(v,{})]})};function _n(){var n=(0,i.Z)(["\n\tfont-style: normal;\n\tfont-weight: 600;\n\tfont-size: 12px;\n\tline-height: 24px;\n\ttext-transform: uppercase;\n\tcolor: rgba(255, 255, 255, 0.4);\n\tmargin-bottom: 16px;\n\n\t@media "," {\n\t\tfont-size: 10px;\n\t\tline-height: 12px;\n\t\tmargin-bottom: 8px;\n\t}\n"]);return _n=function(){return n},n}function Cn(){var n=(0,i.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-width: 220px;\n\twidth: 100%;\n"]);return Cn=function(){return n},n}function An(){var n=(0,i.Z)(["\n\tborder-top: 1px solid rgba(255, 255, 255, 0.1);\n  display: grid;\n\tgrid-template-columns: repeat(3, minmax(85px, 220px));\n\tgap: 40px;\n  padding: 40px 0 28px;\n\n\t@media "," {\n\t\tpadding: 32px 0 16px;\n\t}\n\n\t@media "," {\n\t\twidth: 100%;\n\t\tpadding: 32px 0 16px;\n\t\tgap: 16px;\n\t}\n\t@media "," {\n\t\twidth: 100%;\n\t\tpadding: 32px 4px 16px;\n\t\tgap: 5px;\n\t}\n"]);return An=function(){return n},n}function In(){var n=(0,i.Z)(["\nmax-width: 1040px;\ndisplay: flex;\njustify-content: space-between;\n\n@media ","{\n  display: flex;\n  justify-content: space-between;\n}\n\n@media ","{\n  display: flex;\n\twidth: 100%;\n  flex-direction: column;\n}\n"]);return In=function(){return n},n}function On(){var n=(0,i.Z)(["\n\tfont-size: 18px;\n\tline-height: 30px;\n\tcolor: rgba(255, 255, 255, 0.75);\n\tmargin-bottom: 16px;\n\ttransition: .3s ease;\n\tposition: relative;\n\tleft: 0;\n\n\t&:hover {\n\t\tcolor: #fff;\n\t\tleft: 6px;\n\t}\n\n\t@media "," {\n\t\tfont-size: 16px;\n\t\tline-height: 28px;\n\t\tdisplay: flex;\n\t}\n\n\t@media "," {\n\t\tfont-size: 8px;\n\t\tline-height: 14px;\n\t\tmargin-bottom: 8px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n"]);return On=function(){return n},n}function Ln(){var n=(0,i.Z)(["\n\twidth: calc(100vw - 96px);\n  max-width: 1040px;\n  padding: 2rem 48px 40px;\n  margin: 1rem auto;\n  box-sizing: content-box;\n\n\n  @media "," {\n    padding: 0 16px 48px;\n    width: calc(100vw - 32px);\n  }\n"]);return Ln=function(){return n},n}var Nn=o.default.section(Ln(),(function(n){return n.theme.breakpoints.sm})),Pn=o.default.a(On(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),Rn=o.default.div(In(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),Un=o.default.ul(An(),(function(n){return n.theme.breakpoints.lg}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),Mn=o.default.div(Cn()),Tn=o.default.h4(_n(),(function(n){return n.theme.breakpoints.sm})),Bn=function(){return(0,r.jsxs)(Nn,{children:[(0,r.jsxs)(Un,{children:[(0,r.jsxs)(Mn,{children:[(0,r.jsx)(Tn,{children:"Phone"}),(0,r.jsx)(Pn,{href:"tel:972-998-5506",children:"972-998-5506"})]}),(0,r.jsxs)(Mn,{children:[(0,r.jsx)(Tn,{children:"Email"}),(0,r.jsx)(Pn,{href:"mailto:snk180000@utdallas.edu",children:"snk180000@utdallas.edu"})]})]}),(0,r.jsxs)(Rn,{children:[(0,r.jsx)(cn,{href:"https://github.com/thanhk",target:"_blank",children:(0,r.jsx)(K.RrF,{size:"3rem"})}),(0,r.jsx)(cn,{href:"https://www.linkedin.com/in/steven-khuu/",target:"_blank",children:(0,r.jsx)(K._iD,{size:"3rem"})}),(0,r.jsx)(cn,{href:"https://www.instagram.com/steambun.k/",target:"_blank",children:(0,r.jsx)(K.t0C,{size:"3rem"})}),(0,r.jsx)(cn,{href:"https://twitter.com/steammbun",target:"_blank",children:(0,r.jsx)(K.wod,{size:"3rem"})})]})]})};function Wn(){var n=(0,i.Z)(["\nmax-width: 1280px;\nwidth: 100%;\nmargin: auto;\n"]);return Wn=function(){return n},n}var Gn=o.default.div(Wn()),Hn=function(n){var e=n.children;return(0,r.jsxs)(Gn,{children:[(0,r.jsx)(ln,{}),(0,r.jsx)("main",{children:e}),(0,r.jsx)(Bn,{})]})},Kn=function(){return(0,r.jsxs)(Hn,{children:[(0,r.jsx)(h,{grid:!0,children:(0,r.jsx)(k,{})}),(0,r.jsx)(fn,{}),(0,r.jsx)(Fn,{}),(0,r.jsx)(Dn,{})]})}},8581:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2668)}])},1664:function(n,e,t){n.exports=t(6071)},4405:function(n,e,t){"use strict";t.d(e,{w_:function(){return d}});var r=t(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),a=function(){return(a=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}).apply(this,arguments)},u=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]])}return t};function s(n){return n&&n.map((function(n,e){return r.createElement(n.tag,a({key:e},n.attr),s(n.child))}))}function d(n){return function(e){return r.createElement(c,a({attr:a({},n.attr)},e),s(n.child))}}function c(n){var e=function(e){var t,i=n.attr,o=n.size,s=n.title,d=u(n,["attr","size","title"]),c=o||e.size||"1em";return e.className&&(t=e.className),n.className&&(t=(t?t+" ":"")+n.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,d,{className:t,style:a(a({color:n.color||e.color},e.style),n.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),n.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(n){return e(n)})):e(i)}}},function(n){n.O(0,[866,445,921,617,774,888,179],(function(){return e=8581,n(n.s=e);var e}));var e=n.O();_N_E=e}]);