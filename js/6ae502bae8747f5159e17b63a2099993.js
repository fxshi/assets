(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('湛河区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"410411","properties":{"name":"湛河区","cp":[113.320873,33.725681],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@B@@AB@B@BAB@@@@AA@@@E@@@@D@@A@@B@@"],["@@AA@ACA@@AAAAA@A@A@E@C@CBCDA@AB@BA@@B@B@@@B@@@BA@@@A@A@A@A@A@@BCB@@CAC@ABA@AB@@@AA@@@@@@@ABA@@@ABA@@@@@@B@@G@@A@@E@@@C@E@@@@@DAA@@@@A@@E@@@@CB@@A@@@@@A@@C@E@@@A@@@@@@A@A@CCA@@C@@@CAE@@@A@@DA@@@@@A@A@@B@@@B@@@@A@E@@BA@@@@DB@@@B@B@DD@CD@@FB@@BB@@D@@ABAAABA@AB@@A@@@A@@@EB@A@@C@@B@B@@C@A@AB@BC@@B@@E@@D@B@@@@IA@BA@@@A@@@BD@BC@A@@EC@AAG@@@@B@@C@@CE@@@@BC@@C@A@@@A@@K@GB@@@B@DD@@@@B@@C@@@@@@BC@AA@@@@C@AC@B@@AAB@@@E@@@@@@@@BA@@B@@A@A@@@AA@@K@@@E@@@A@A@@B@@A@A@@@@BI@@BAB@@C@AJ@@A@@@@B@@@BA@@@@BD@@@@DD@BBAB@B@D@@A@A@A@@@@@A@@@@@A@@H@@C@@@@A@@C@@@@B@B@BE@@DAA@BC@@@@BA@C@@FB@BF@DA@@@@F@@F@TFH@FAND@@XAHAjIVCDAB@H@J@HA@AFEF@@@NDB@LDBFLVGF@DABDBCB@AB@AAABAAAB@C@G@@EDC@@HBHD@@@@BCDBH@BKJGFHFHCDF@B@@REBAJCFI@@CANEHC@A@A@@LCBD@@HABBDADAF@F@F@@@HAL@F@F@@@JAP@B@@@J@H@B@H@B@H@@@B@D@JALA@@B@@@@ODEB@RA@A@@@AA@G@@BA@@AA@@A@@@EB@@A@@@A@@@AA@@@@@@A@@@@D@AI@@C@@AC@A@@AC@A@@B@@@AAA@@@CC@@C@@@C@EA@@@B@@A@@@A@@A@@AG@@AEAAEA@ACA@EB@@@BA@@@ABE@ABGBAACE@I@A@@@A@@A@@@@@@C@@BAA@@CAA@@@ABA@@A@A@@@@@@@AB@@@@A@@@ABC@G@@@A@AAA@@A@@@AAA@C@AACAA"]],"encodeOffsets":[[[115946,34475]],[[116025,34465]]]}}],"UTF8Encoding":true});}));