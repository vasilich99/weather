(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],[,,,,,function(e,t,n){},,,,function(e,t,n){},function(e,t,n){},,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,c=n(1),r=n(11),i=n.n(r),o=(n(18),n(2)),s=n(12),l=n(3),_=n.n(l),E=(n(19),n(0)),u=function(e){return Object(E.jsx)("span",{className:_()("icon","icon--".concat(e.name))})},d=(n(21),function(e){var t=Object(c.useCallback)((function(){e.onAddFavourite(e.city)}),[e]),n=Object(c.useMemo)((function(){var t,n=null===(t=e.weather)||void 0===t?void 0:t.temp;return n&&n>0?"+".concat(n):n}),[e.weather]);return Object(E.jsxs)("div",{className:"small-card",onClick:t,children:[Object(E.jsx)("span",{className:"small-card__city",children:e.city.name}),Object(E.jsxs)("span",{className:"small-card__temperature",children:[n,"\xb0"]}),Object(E.jsx)(u,{name:"strips-small"})]})}),O={current:function(e,t){var n=this,a=Date.now(),c=localStorage.getItem("date")?Number(localStorage.getItem("date")):0,r=a-c;if((null===t||void 0===t?void 0:t.cacheMs)&&r<(null===t||void 0===t?void 0:t.cacheMs)){var i=localStorage.getItem("weather");if(!i)throw new Error("\u0427\u0442\u043e-\u0442\u043e \u043d\u0435 \u0442\u043e");return Promise.resolve(JSON.parse(i))}return(null===t||void 0===t?void 0:t.cacheMs)?Promise.all(e.map((function(e){return n.cityWeather(e)}))).then((function(e){return localStorage.setItem("date",a.toString()),localStorage.setItem("weather",JSON.stringify(e)),e})):Promise.all(e.map((function(e){return n.cityWeather(e).then((function(e){return e}))})))},cityWeather:function(e){var t=this;return fetch("https://api.weatherapi.com/v1/current.json?key=".concat("224a9ddf50ca4605895185357212312","&q=").concat(e.lat,",").concat(e.lon)).then((function(e){return e.json()})).then((function(n){var a=1e3*n.current.wind_kph/3600,c=t.translateWindDir(n.current.wind_dir);return{name:e.name,id:e.id,temp:n.current.temp_c,condition:n.current.condition.code,wind:a,windDir:c}}))},translateWindDir:function(e){switch(e){case"N":return"\u0421";case"NNE":return"\u0421-\u0421\u0412";case"NE":return"\u0421\u0412";case"ENE":return"\u0412-\u0421\u0412";case"E":return"\u0412";case"ESE":return"\u0412-\u042e\u0412";case"SE":return"\u042e\u0412";case"SSE":return"\u042e-\u042e\u0412";case"S":return"\u042e";case"SSW":return"\u042e-\u042e\u0417";case"SW":return"\u042e\u0417";case"WSW":return"\u0417-\u042e\u0417";case"W":return"\u0417";case"WNW":return"\u0417-\u0421\u0417";case"NW":return"\u0421\u0417";case"NNW":return"\u0421-\u0421\u0417";default:return""}}};n(22),n(9),n(23);!function(e){e[e.SUNNY=1e3]="SUNNY",e[e.PARTLY_CLOUDY=1003]="PARTLY_CLOUDY",e[e.CLOUDY=1006]="CLOUDY",e[e.OVERCAST=1009]="OVERCAST",e[e.MIST=1030]="MIST",e[e.PATCHY_RAIN_POSSIBLE=1063]="PATCHY_RAIN_POSSIBLE",e[e.PATCHY_SNOW_POSSIBLE=1066]="PATCHY_SNOW_POSSIBLE",e[e.PATCHY_SLEET_POSSIBLE=1069]="PATCHY_SLEET_POSSIBLE",e[e.PATCHY_FREEZING_DRIZZLE_POSSIBLE=1072]="PATCHY_FREEZING_DRIZZLE_POSSIBLE",e[e.THUNDERY_OUTBREAKS_POSSIBLE=1087]="THUNDERY_OUTBREAKS_POSSIBLE",e[e.BLOWING_SNOW=1114]="BLOWING_SNOW",e[e.BLIZZARD=1117]="BLIZZARD",e[e.FOG=1135]="FOG",e[e.FREEZING_FOG=1147]="FREEZING_FOG",e[e.PATCHY_LIGHT_DRIZZLE=1150]="PATCHY_LIGHT_DRIZZLE",e[e.LIGHT_DRIZZLE=1153]="LIGHT_DRIZZLE",e[e.FREEZING_DRIZZLE=1168]="FREEZING_DRIZZLE",e[e.HEAVY_FREEZING_DRIZZLE=1171]="HEAVY_FREEZING_DRIZZLE",e[e.PATCHY_LIGHT_RAIN=1180]="PATCHY_LIGHT_RAIN",e[e.LIGHT_RAIN=1183]="LIGHT_RAIN",e[e.MODERATE_RAIN_AT_TIMES=1186]="MODERATE_RAIN_AT_TIMES",e[e.MODERATE_RAIN=1189]="MODERATE_RAIN",e[e.HEAVY_RAIN_AT_TIMES=1192]="HEAVY_RAIN_AT_TIMES",e[e.HEAVY_RAIN=1195]="HEAVY_RAIN",e[e.LIGHT_FREEZING_RAIN=1198]="LIGHT_FREEZING_RAIN",e[e.MODERATE_OR_HEAVY_FREEZING_RAIN=1201]="MODERATE_OR_HEAVY_FREEZING_RAIN",e[e.LIGHT_SLEET=1204]="LIGHT_SLEET",e[e.MODERATE_OR_HEAVY_SLEET=1207]="MODERATE_OR_HEAVY_SLEET",e[e.PATCHY_LIGHT_SNOW=1210]="PATCHY_LIGHT_SNOW",e[e.LIGHT_SNOW=1213]="LIGHT_SNOW",e[e.PATCHY_MODERATE_SNOW=1216]="PATCHY_MODERATE_SNOW",e[e.MODERATE_SNOW=1219]="MODERATE_SNOW",e[e.PATCHY_HEAVY_SNOW=1222]="PATCHY_HEAVY_SNOW",e[e.HEAVY_SNOW=1225]="HEAVY_SNOW",e[e.ICE_PELLETS=1237]="ICE_PELLETS",e[e.LIGHT_RAIN_SHOWER=1240]="LIGHT_RAIN_SHOWER",e[e.MODERATE_OR_HEAVY_RAIN_SHOWER=1243]="MODERATE_OR_HEAVY_RAIN_SHOWER",e[e.TORRENTIAL_RAIN_SHOWER=1246]="TORRENTIAL_RAIN_SHOWER",e[e.LIGHT_SLEET_SHOWERS=1249]="LIGHT_SLEET_SHOWERS",e[e.MODERATE_OR_HEAVY_SLEET_SHOWERS=1252]="MODERATE_OR_HEAVY_SLEET_SHOWERS",e[e.LIGHT_SNOW_SHOWERS=1255]="LIGHT_SNOW_SHOWERS",e[e.MODERATE_OR_HEAVY_SNOW_SHOWERS=1258]="MODERATE_OR_HEAVY_SNOW_SHOWERS",e[e.LIGHT_SHOWERS_OF_ICE_PELLETS=1261]="LIGHT_SHOWERS_OF_ICE_PELLETS",e[e.MODERATE_OR_HEAVY_SHOWERS_OF_ICE_PELLETS=1264]="MODERATE_OR_HEAVY_SHOWERS_OF_ICE_PELLETS",e[e.PATCHY_LIGHT_RAIN_WITH_THUNDER=1273]="PATCHY_LIGHT_RAIN_WITH_THUNDER",e[e.MODERATE_OR_HEAVY_RAIN_WITH_THUNDER=1276]="MODERATE_OR_HEAVY_RAIN_WITH_THUNDER",e[e.PATCHY_LIGHT_SNOW_WITH_THUNDER=1279]="PATCHY_LIGHT_SNOW_WITH_THUNDER",e[e.MODERATE_OR_HEAVY_SNOW_WITH_THUNDER=1282]="MODERATE_OR_HEAVY_SNOW_WITH_THUNDER"}(a||(a={}));var A=function(e){var t=[a.PATCHY_RAIN_POSSIBLE,a.PATCHY_LIGHT_DRIZZLE,a.LIGHT_DRIZZLE,a.PATCHY_LIGHT_RAIN,a.LIGHT_RAIN,a.MODERATE_RAIN_AT_TIMES,a.MODERATE_RAIN,a.HEAVY_RAIN_AT_TIMES,a.HEAVY_RAIN,a.LIGHT_FREEZING_RAIN,a.MODERATE_OR_HEAVY_FREEZING_RAIN,a.LIGHT_RAIN_SHOWER,a.MODERATE_OR_HEAVY_RAIN_SHOWER,a.TORRENTIAL_RAIN_SHOWER,a.LIGHT_SLEET_SHOWERS,a.MODERATE_OR_HEAVY_SLEET_SHOWERS,a.PATCHY_LIGHT_RAIN_WITH_THUNDER,a.MODERATE_OR_HEAVY_RAIN_WITH_THUNDER],n=[a.SUNNY],c=[a.PARTLY_CLOUDY,a.CLOUDY,a.OVERCAST],r=[a.PATCHY_SLEET_POSSIBLE,a.BLOWING_SNOW,a.LIGHT_SLEET,a.MODERATE_OR_HEAVY_SLEET,a.PATCHY_LIGHT_SNOW,a.LIGHT_SNOW,a.PATCHY_MODERATE_SNOW,a.MODERATE_SNOW,a.PATCHY_HEAVY_SNOW,a.HEAVY_SNOW,a.ICE_PELLETS,a.LIGHT_SNOW_SHOWERS,a.MODERATE_OR_HEAVY_SNOW_SHOWERS,a.PATCHY_LIGHT_SNOW_WITH_THUNDER,a.MODERATE_OR_HEAVY_SNOW_WITH_THUNDER],i=[a.BLIZZARD];return t.includes(e)?"rainy":n.includes(e)?"sunny":c.includes(e)?"cloudy":r.includes(e)?"snowy":i.includes(e)?"blizzard":"none"},T=function(e){var t,n,a,r,i,o=Object(c.useCallback)((function(){e.onWantSelectCity(null)}),[e]),s=Object(c.useCallback)((function(){e.onWantSelectCity(e.city)}),[e]),l=Object(c.useCallback)((function(){e.onChangeSelectedCity(e.city)}),[e]),d=Object(c.useMemo)((function(){var t,n=null===(t=e.weather)||void 0===t?void 0:t.temp;return n&&n>0?"+".concat(n):n}),[null===(t=e.weather)||void 0===t?void 0:t.temp]);return Object(E.jsxs)("div",{className:_()("big-card",{"big-card_selected":(null===(n=e.selectedCity)||void 0===n?void 0:n.id)===e.city.id,"big-card_desired":(null===(a=e.desiredCity)||void 0===a?void 0:a.id)===e.city.id}),onMouseEnter:s,onMouseLeave:o,onClick:l,children:[Object(E.jsxs)("div",{className:"big-card__header",children:[Object(E.jsx)("span",{className:"icon icon--strips-big"}),Object(E.jsx)("span",{className:"big-card__city",children:e.city.name})]}),Object(E.jsxs)("div",{className:"big-card__content",children:[Object(E.jsxs)("div",{className:"big-card__content-wrapper",children:[Object(E.jsx)("div",{className:"big-card__weather-conditions",children:e.weather&&Object(E.jsx)(u,{name:A(null===(r=e.weather)||void 0===r?void 0:r.condition)})}),(null===(i=e.weather)||void 0===i?void 0:i.windDir)&&Object(E.jsxs)("div",{className:"big-card__wind",children:[Object(E.jsx)("span",{className:"icon icon--wind"}),Object(E.jsxs)("span",{className:"big-card__info",children:["\u0412\u0435\u0442\u0435\u0440 ",e.weather.windDir,","," ",e.weather.wind%1===0?e.weather.wind:Number(e.weather.wind.toFixed(1))," ","\u043c/\u0441"]})]})]}),Object(E.jsxs)("span",{className:"big-card__temperature",children:[d,"\xb0"]})]})]})},R=function(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),a=n[0],r=n[1],i=Object(c.useCallback)((function(t){e.onChangeFavourites([].concat(Object(s.a)(e.favourites),[t]))}),[e]),l=Object(c.useCallback)((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}),[]),_=Object(c.useCallback)((function(e,t){return e.name>t.name?-1:e.name<t.name?1:0}),[]),u=Object(c.useMemo)((function(){var t="asc"===e.sortType?l:_;return e.cities.sort(t)}),[l,_,e.cities,e.sortType]);return Object(c.useEffect)((function(){O.current(u,{cacheMs:36e5}).then((function(e){r((function(t){return t.concat(e)}))})),O.current(e.favourites).then((function(e){r((function(t){return t.concat(e)}))}))}),[u,e.favourites]),Object(E.jsxs)("section",{className:"cards",children:[Object(E.jsx)("h2",{className:"visually-hidden",children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438"}),Object(E.jsx)("div",{className:"cards__small-cards",children:u.map((function(e){return Object(E.jsx)(d,{city:e,weather:a.find((function(t){return e.id===t.id})),onAddFavourite:i},e.id)}))}),Object(E.jsxs)("div",{className:"cards__big-cards",children:[e.favourites.length>0&&e.favourites.map((function(t){return Object(E.jsx)(T,{city:t,weather:a.find((function(e){return t.id===e.id})),onChangeSelectedCity:e.onChangeSelectedCity,onWantSelectCity:e.onWantSelectCity,selectedCity:e.selectedCity,desiredCity:e.desiredCity},t.id)})),Object(E.jsx)("div",{className:"cards__help",children:"\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0441\u044e\u0434\u0430 \u0433\u043e\u0440\u043e\u0434\u0430, \u043f\u043e\u0433\u043e\u0434\u0430 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0432\u0430\u043c \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u0430"})]})]})},m=(n(24),function(e){return Object(E.jsxs)("div",{className:_()(e.className,"input-wrapper",{"input-wrapper--radio":"radio"===e.type,"input-wrapper--checkbox":"checkbox"===e.type,"input-wrapper--search":"search"===e.type}),children:[Object(E.jsx)("input",{id:e.id,type:e.type,name:e.name,value:e.value,defaultChecked:e.checked,onChange:e.onChange,placeholder:e.placeholder}),Object(E.jsx)("label",{htmlFor:e.id,"aria-label":e.label,children:e.iconName&&Object(E.jsx)(u,{name:e.iconName})})]})}),N=(n(5),function(e){var t=Object(c.useCallback)((function(){var t="asc"===e.sortType?"desc":"asc";e.onChangeSortType(t)}),[e]);return Object(E.jsxs)("div",{className:"sort-form__group",children:[Object(E.jsx)(m,{className:"sort-form__input-wrapper",type:"radio",id:"alphabet-sort",name:"alphabet-sort",value:"alphabet-sort",label:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443",iconName:"arrow-down",onChange:t,checked:!0}),Object(E.jsx)(m,{className:"sort-form__input-wrapper",type:"radio",id:"alphabet-sort-reverse",name:"alphabet-sort",value:"alphabet-sort-reverse",label:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443 \u0432 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u043c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0438",iconName:"arrow-up",onChange:t})]})}),S=function(e){var t=Object(c.useCallback)((function(t){e.onChangeQuery(t.target.value)}),[e]);return Object(E.jsx)("div",{className:"sort-form__group",children:Object(E.jsx)(m,{className:"sort-form__input-wrapper",type:"search",name:"search-city",value:e.query,id:"search",label:"\u041f\u043e\u0438\u0441\u043a \u0433\u043e\u0440\u043e\u0434\u043e\u0432",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430",onChange:t})})},I=function(){return Object(E.jsxs)("div",{className:"sort-form__group",children:[Object(E.jsx)(m,{className:"sort-form__input-wrapper",type:"checkbox",id:"rainy",name:"weather-conditions",value:"rainy",label:"\u0414\u043e\u0436\u0434\u043b\u0438\u0432\u043e",iconName:"rainy"}),Object(E.jsx)(m,{className:"sort-form__input-wrapper",type:"checkbox",id:"sunny",name:"weather-conditions",value:"sunny",label:"\u0421\u043e\u043b\u043d\u0435\u0447\u043d\u043e",iconName:"sunny"}),Object(E.jsx)(m,{className:"sort-form__input-wrapper",type:"checkbox",id:"cloudy",name:"weather-conditions",value:"cloudy",label:"\u041e\u0431\u043b\u0430\u0447\u043d\u043e",iconName:"cloudy"}),Object(E.jsx)(m,{className:"sort-form__input-wrapper",type:"checkbox",id:"snowy",name:"weather-conditions",value:"snowy",label:"\u0421\u043d\u0435\u0436\u043d\u043e",iconName:"snowy"}),Object(E.jsx)(m,{className:"sort-form__input-wrapper",type:"checkbox",id:"stormy",name:"weather-conditions",value:"stormy",label:"\u0422\u043e\u0440\u043d\u0430\u0434\u043e",iconName:"stormy"}),Object(E.jsx)(m,{className:"sort-form__input-wrapper",type:"checkbox",id:"blizzard",name:"weather-conditions",value:"blizzard",label:"\u0413\u0440\u043e\u0437\u0430",iconName:"blizzard"}),Object(E.jsx)(m,{className:"sort-form__input-wrapper",type:"checkbox",id:"metorite",name:"weather-conditions",value:"metorite",label:"\u041c\u0435\u0442\u0435\u043e\u0440\u0438\u0442\u043d\u044b\u0439 \u0434\u043e\u0436\u0434\u044c",iconName:"metorite"})]})},b=function(e){return Object(E.jsxs)("section",{className:_()("sort-form",e.className),children:[Object(E.jsx)("h2",{className:"visually-hidden",children:"\u0424\u043e\u0440\u043c\u0430 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438"}),Object(E.jsxs)("form",{action:"#",method:"GET",children:[Object(E.jsx)(N,{sortType:e.sortType,onChangeSortType:e.onChangeSortType}),Object(E.jsx)(S,{query:e.searchQuery,onChangeQuery:e.onChangeSearchQuery}),Object(E.jsx)(I,{})]})]})},H=[{name:"\u041c\u043e\u0441\u043a\u0432\u0430",id:"1",lat:55.76319879044565,lon:37.589805265771865},{name:"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",id:"2",lat:59.97665957310762,lon:30.42978408718145},{name:"\u041a\u0438\u0435\u0432",id:"3",lat:50.472765961596984,lon:30.54041837637176},{name:"\u041c\u0438\u043d\u0441\u043a",id:"4",lat:54.000574708273724,lon:27.843248508740455},{name:"\u0412\u0438\u043b\u044c\u043d\u044e\u0441",id:"5",lat:54.881373316788945,lon:25.23097465358437},{name:"\u0412\u0430\u0440\u0448\u0430\u0432\u0430",id:"6",lat:52.22478752780553,lon:20.97054950114021},{name:"\u0412\u0435\u043d\u0430",id:"7",lat:48.39325606587112,lon:16.43859266424972},{name:"\u0420\u0438\u043c",id:"8",lat:41.884810112266834,lon:12.63653521239818},{name:"\u0421\u043e\u0444\u0438\u044f",id:"9",lat:42.616071327067154,lon:23.277818771680113},{name:"\u041f\u0430\u0440\u0438\u0436",id:"10",lat:48.89302302108258,lon:2.2298207473739624},{name:"\u0410\u043d\u043a\u0430\u0440\u0430",id:"11",lat:39.844293562280036,lon:32.64463427492055},{name:"\u041c\u0430\u0434\u0440\u0438\u0434",id:"12",lat:40.81859690239377,lon:-3.7360928242716325},{name:"\u041e\u0441\u043b\u043e",id:"13",lat:60.242004455108415,lon:11.014613802728068},{name:"\u0411\u0435\u0440\u043b\u0438\u043d",id:"14",lat:52.85420357145985,lon:13.391938319194505},{name:"\u041f\u0440\u0430\u0433\u0430",id:"15",lat:50.22744331088483,lon:14.420600333352798},{name:"\u0422\u0430\u043b\u043b\u0438\u043d",id:"16",lat:59.60307084121461,lon:24.908323337417723},{name:"\u0425\u0435\u043b\u044c\u0441\u0438\u043d\u043a\u0438",id:"17",lat:60.507105953000675,lon:25.15710408929567}],h=function(e){var t=Object(c.useState)("asc"),n=Object(o.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(""),s=Object(o.a)(i,2),l=s[0],_=s[1],u=Object(c.useMemo)((function(){return H.filter((function(t){return!e.favourites.find((function(e){return e.id===t.id}))&&t.name.toLowerCase().includes(l.toLowerCase())}))}),[e.favourites,l]);return Object(E.jsxs)("div",{className:"weather-content",children:[Object(E.jsx)(b,{className:"weather-content__sort",sortType:a,searchQuery:l,onChangeSortType:r,onChangeSearchQuery:_}),Object(E.jsx)(R,{cities:u,favourites:e.favourites,onChangeFavourites:e.onChangeFavourites,onChangeSelectedCity:e.onChangeSelectedCity,onWantSelectCity:e.onWantSelectCity,sortType:a,selectedCity:e.selectedCity,desiredCity:e.desiredCity})]})},j=n(8),C=n(13),p=(n(10),function(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2)[1];return Object(c.useEffect)((function(){var t=e.cities.map((function(t){var n,a,c=new google.maps.Marker({position:{lat:t.lat,lng:t.lon},map:e.map});return c.addListener("mouseover",(function(){return e.onWantSelectCity(t)})),c.addListener("mouseout",(function(){return e.onWantSelectCity(null)})),t.id===(null===(n=e.selectedCity)||void 0===n?void 0:n.id)&&c.setIcon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAoCAYAAAD6xArmAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAEWklEQVR4nK2XX2hbVRzHv9u9TXPt3Zb+cSZL3NDFWWecg8XQwdA9CFaf5tMG68tA9MEqioyKRdbabdL5sCEIZTgYA0XxocwHmbDRKpV1ozBnO6lrmtE2te2aZGlz07Rdburvd9KmTXNvmqZ+4cLN+Z3zOef+fr/zOyeyFgvBSOqZQTtiD49Bn3+DftZw06JJo6cbkuVXbNn+g9a4e9xovJwD/Hp6K0b/OoOU/g5sLisqdgLb7FCktD2hw4ap8VpEhmsRDX6pNox9C+e+Ru3DrdOmYLXlvhvTY+0E9EjP+jKwrD48otIunoTus+qB2/UYuXNYbXG8rX2+x58DVpv6XIiHO2h2l7rDbeie1RITP+eD9m+Fh76yQ22aP6g1eYIZsHrh0RNIRNvheNGlONzQFwriLk9AYxLJeRcmB9qJ9Zr2UflMesXj/e9CsXkV5/PrI66EP70Xiekxr2Dh4AWZZrBR5FvgPlQ0NKM9h4G7V1uIeVnG2L0jlDaqJEmYT22MywydWMyUKa2OonynaeeFx7NY+PMqMPgHoCcBxwvY9MoxbNrypPEAmxOU/0fZxzWcp6YB6/2FPu/n5d+BbixIFuDV98zBI3dqGKxis0HCsoJ3gfu/G7fz43o515ZmiXTP2X1Z0udz21J63iHMZOgsdbQamlMUzRIFmIlmt7Mr2GY0QbptlsF+2vselDtzO7n2AdOvA7e/z4bsOpC2GWlK1CS/TD7pxEzEGMyqJnByDujvIDhlhdMD7D9i3Jc1E2E/d8ooVb9DZKgejr3mnT1vpZ+VMvNzZAjMlLUv9nerJ3/rQeiBF1XPmMMLUegBT9jDzHRGlCgnMUHfyrXXLPXWEn/BRH+ahcVU0876OmnV1zDxTy2eKrIQjf3N8Gtaq68zAxYqVT9AKNBLq7aKFFuPHifYt7OCsagMWDt9wK9+erMVo72nRDqtR0M9nNutzMgBC9mrz9FJcBzhYTcqzQtTlsLDwJzmp5Pn3MrmLDBXfvUz5QSdBB1UmGTIlvzQJG33yYEkue4EjzUFC/hZX5fa0NVGwaiH86X8YA4Y0MZjVpuMC5Bia6aaWod4xIayCmNobJLrbhRllc1GZkMwnbQhCmQzHg6cxy6vMTgU4IA1c9+CwUL26osUyE+QmHJRGmXbElMcsCAF7KLZcFOwCGSDdIluPKdy6kh0lHfopdUBK2zFrFL1Cl1iGnP6xcNJKNuu5BuaF0zFJCAKVGyyBkuHJ68W4EITKBosJFl+hEbgpexg/3LbGlobvFm6Ttev5frL75Ll+obBlPx95I4gZYFLwFN6kCpY38ZXzOLjKx6py7wXoMLAwA3MxeoW3XHj/wOXKF3kivR7qZpTF4oCx/2D6MFPfi/eFJcLfo/7qYS4dxcPZmjfx+9jh8vOF7FubisbDYo2z/lv8sLzgkcutwloVZWd70vidLAhiaRVFrbq018VB3506yacNYeQDNLfiu1SeKndZlXRT7Z8+g+B1qknuwWABwAAAABJRU5ErkJggg=="),t.id===(null===(a=e.desiredCity)||void 0===a?void 0:a.id)&&c.setIcon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAoCAYAAAD6xArmAAAACXBIWXMAAA7DAAAOwwHHb6hkAAADlElEQVR4nK2WbUhTURjH/9d7nS6vubSX2ZZhrBKzviRiEBQEpd/qk0F+CSIQrS8VUgYi9oIRJUIgUhBBUF+UoA8GigZCIoL0YhiOiTqb5jbm69S83p5zNpe6u7m3P9xxt3PO7zx7nuf+z5VUVYWWhLt9Rsz9uQxl5QJ9LaZL9g/N09ULUfcJ6XvfqY+LJrXWS0HARyM7MfHtIdaUazCYU5GZA2QYoRd9414FBsxMlsA9VgKP/bFQ6XgJ04ka9V7ubEiwUP3FgllHGwELxENFAdhGyWxFlpFfXqUoVbH1VWF84KxQPXlJbThlDQILtz+bseDqot3N8n6LZnq2im98uAjzvzML6F92EeOU+vSMPQAWHlh3wOtpQ/Yxsz7bAkU77aE3oDXe1RUzpofbiHVGvW9Z9EU8OXQdekOh3nQ0OuJG+IF8eGcdhZwFS6NEOxio8vWwnI4ZGtCRs8DXD/XEfC3BMXiR2kYWRREra/FxGUMhFmNK1FZl2JUTf7TrMphA/V/GclzM+jTagoUFjw8UM7CMJI2GjVU+Fm/3oKcvAZIYdInynJow5JrCPpcY2ErPfgF2mRIDnuGeZJUoJ91YdCcOvOhmee6WkCK/hXu0Ctn5iQG7R8GYkvrsXK9Q0doP50ghdufGB3WOsBz3M6avI5L1dzA11MW9N9bWY0WbGvKx4G81tam0m6Jux9SvEuyL0YgcPxm8XX1R2h0Ac6XIN+C0faeoU2nX6KB/vSy3S5zhVwCsNp63ClUfGzDxvRYHT0YHHu0nB9I1MEYQmMuY94ROgitwjVmQFaExucaA5XkrnTxPNv68CcycX7g5fJVOgi4yJgmSLjx0dQU0d5VSd5WtDQnm8KbSHqHyQzMVowqm4+HBrGBAM1uzdUjbgPSGOvLUciy4DUjL1IbOTTPf9SAtq05rWBNMJ62TClmHP8PPcbBQG+y0sYLVsbkRg7mMeS1UyFvwzpipjTaPeWdYwexUsJZQy0OCeSErB1/RG09tkI94JtgT+mprwSKLmClFfkMvMTVB8xZcq9BnvAm3NCyYzMTGDWpuuhjpe/5HCzCjscUM5hJ17zFP4PXuYPllv22j7cFJYge9fq0fOeD3oq4jbjA1/w9Kh526wMzha4qdHOxH/BEzseNrwV0euI9AkR79nVieK/enozNx4GR9D6XCd58iB/lCzGDu1RWtnvX7hIH96o1iblTgiCKNHpwkuqIB/wPnmlsEaY1c0wAAAABJRU5ErkJggg=="),c}));n((function(e){return e.forEach((function(e){return e.setMap(null)})),t}))}),[e]),Object(c.useEffect)((function(){var t,n,a,c=(null===(t=e.selectedCity)||void 0===t?void 0:t.lat)||59.97665957310762,r=(null===(n=e.selectedCity)||void 0===n?void 0:n.lon)||30.42978408718145;null===(a=e.map)||void 0===a||a.setCenter({lat:c,lng:r}),e.map.panBy(c,r)}),[e.map,e.selectedCity]),null}),L=function(e){var t=Object(c.useState)(null),n=Object(o.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){new C.a({apiKey:"".concat("AIzaSyClBiMqRBD5c8F24E3pHI4BK6RDxgF-hpQ"),version:"weekly"}).load().then((function(){r(new google.maps.Map(document.getElementById("map"),{center:{lat:59.97665957310762,lng:30.42978408718145},zoom:8}))}))}),[]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{id:"map"}),a&&Object(E.jsx)(p,Object(j.a)(Object(j.a)({},e),{},{map:a}))]})},v=function(){var e=Object(c.useState)((function(){var e=localStorage.getItem("favourites");return e?JSON.parse(e):[]})),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),i=Object(o.a)(r,2),s=i[0],l=i[1],_=Object(c.useState)(null),u=Object(o.a)(_,2),d=u[0],O=u[1],A=Object(c.useCallback)((function(e){a(e),localStorage.setItem("favourites",JSON.stringify(e))}),[]);return Object(E.jsxs)("div",{className:"weather-app",children:[Object(E.jsx)(h,{favourites:n,selectedCity:s,desiredCity:d,onChangeFavourites:A,onChangeSelectedCity:l,onWantSelectCity:O}),Object(E.jsx)(L,{cities:n,selectedCity:s,desiredCity:d,onChangeSelectedCity:l,onWantSelectCity:O})]})};i.a.render(Object(E.jsx)(c.StrictMode,{children:Object(E.jsx)(v,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.366c5148.chunk.js.map