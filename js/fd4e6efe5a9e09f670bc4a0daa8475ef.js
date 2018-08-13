(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('留坝县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"610729","properties":{"name":"留坝县","cp":[106.920808,33.617571],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@ACAE@AA@AA@@AAA@GCC@@@AAA@ECECAAAAA@ABA@EDA@@@ABADCBC@EDA@@B@@@DAB@B@@ABA@A@@BA@A@CBC@A@AB@@AD@BA@@@A@E@A@A@CBAB@@@D@@@BBB@@B@@BA@AD@@@DABADA@AB@DAD@B@FBD@@@B@@@@ABAD@@ABEB@BAB@D@@@DAD@B@@@D@BAB@B@@@B@DBD@BBDB@BB@B@B@B@BBB@B@@B@B@@BBBDBDBDDDBB@@BA@@BEBA@@BCD@@@D@@ABBBAD@@C@@@@B@@A@A@A@@@@@@B@B@BCB@BABBBABCBABC@A@CAA@@B@@@@CBA@@B@BAB@@ABAB@BA@@@CBA@@BCBABAB@@AB@@@B@@BBBD@B@@@B@BA@A@CA@@@B@B@BBBABAB@@@D@@@@CB@@@B@B@@@B@@ABBBBB@B@B@BA@A@A@C@@@AAA@EAC@A@ABA@@@@BABCD@@AB@B@BCBADAB@@@B@@B@@@@@BA@@B@DBDBHFB@B@@@B@@B@DB@BBB@@@@BD@BBD@@@D@HB@@B@BBB@BB@@@B@@AB@@ABAD@@GFABABA@ABA@@BA@@@CBAB@@AB@BA@@@A@ABA@A@C@C@A@@B@@ABA@CDCB@@@BAB@@@@@BA@@BAB@@BDBB@B@B@@ABCBABCBCBABABEHAD@BADADAD@@@@BBABAD@@@BB@@BB@B@@BBB@@BB@@BB@@AB@@C@A@C@@@@@@B@@A@@@AB@@@BA@AB@@@@@BA@@@AB@@@D@D@@@@@BBB@@@B@B@D@@BB@@B@@B@@A@@B@@@@BB@@A@AB@@AB@BAB@B@@@@AB@B@@AB@@@@A@CCA@CAC@A@@AAAAAAA@@A@@ACBA@AACA@@AA@C@@A@CAE@EAA@@@A@AAA@AA@AAA@AACAAA@@A@@ACCAEAC@C@A@AAA@@@A@A@@@@A@@@@CAA@A@CCC@A@CCAAA@CACA@@A@A@A@@@@@AACA@@AAEAA@@AA@@AA@A@A@A@@@AA@AG@CACA@@A@@A@@A@A@@@CAAAA@A@CA@AC@C@A@AAAA@@A@@@AAA@@@@C@@A@CD@@A@C@AB@@A@@DA@A@AD@@@BABCD@BABAB@@ABAF@B@B@BBDAD@BAB@B@B@@BDB@@@D@BBB@FF@BB@@DBB@DBB@@@B@@@B@BBB@@@DA@@BBDBB@@@B@B@@@B@D@@BB@@@D@B@BBBAD@B@D@@@DBB@B@BBB@@BB@@@B@BB@@D@BBB@BBFBD@BB@@B@B@DA@@BAB@B@BBBBDBB@DBDDFBFBD@BDF@BBB@BAD@B@@ABA@AD@BCB@@@DAB@@@BAB@BB@@B@@@B@@A@AB@B@@@BEDA@@@A@@AC@@@@BA@@B@B@@A@AB@@@BABABAB@B@BABAB@@CD@B@@A@@@C@@@ABABABAB@BBDA@BBBD@@BBAD@BA@@BA@@BEF@BAB@DA@@@A@@@A@@@A@@B@@AB@B@@@B@@@BA@A@@B@BB@BBB@@@B@B@B@B@DD@@B@@@BABBB@B@B@@@D@@@B@BABB@@B@@@@@B@B@DB@A@@BA@@BA@@B@D@@BJDB@B@BBB@BBD@B@D@B@@@@@BB@BBBDBB@DD@@D@@@B@@BDAB@DBBBBB@BD@BB@@CDAB@@ADABCBCBADAB@@@B@D@DAB@@@@CBA@AAC@A@@@A@@B@@AB@B@@CBCBC@A@A@A@@@@@AD@@ADA@BB@@D@BB@@HCB@F@B@B@B@BABA@AB@BA@@B@B@BB@@B@@@DAB@HABAJAD@@@HCDAB@DBB@B@BAD@J@D@B@@@D@DCD@DAF@FAB@DB@@D@@@DAB@B@DAFAFA@AB@BA@@DAB@BA@@BA@@BAB@B@BBB@BAB@@@BADA@@FA@@B@FAB@D@B@D@D@B@BBF@B@BBBD@@@BA@AB@@@B@BB@D@@@@BBB@DBB@B@BBBBB@DABABC@AD@BABBB@BBF@FAB@BBBBB@@@DBD@BC@A@A@AB@@@B@BAH@B@BBB@BBDBD@@BB@@@@B@BDDD@@BD@@@B@B@B@@@B@@@BB@BB@@@B@B@@@BABA@@B@BBB@@@BDF@@@D@@@BD@@@@BAD@B@B@B@B@B@@@DAD@@CB@@@B@B@B@BABA@@@A@A@@@AA@@@B@BABBBABB@@BB@BBB@@D@@A@@B@@BB@@DA@@@@B@AB@B@DA@AB@@@BAB@DAB@BA@@@DD@DBB@B@B@BADBB@@BD@DAB@B@DBB@BBB@BBBB@@BBBBF@BBBBBBDBB@@@DB@@B@@AB@B@@@B@@@@B@@ABAB@BA@@@@B@DABAF@D@B@B@B@B@@@BADAD@BA@B@@@FBBBD@@@B@BBD@@@@B@@DB@BBBBBBDBBBBBBBBD@@B@@B@@BBAD@@@BBD@@@B@D@B@@B@@BBB@@BB@@@@@@CB@@AB@@BD@BBB@BAD@B@@@BABB@BDDB@BB@B@@@@A@@DBB@@@@@BA@@BA@@@A@@BA@@@@@C@@BA@@DB@@@A@@@@@A@ABADEB@B@@@DAB@@AB@BA@@BA@@B@FABBD@@@D@@@@A@@@A@@@AB@@ABAB@BABCAAA@@@ACA@ACB@@@DA@@BA@@BABAB@BA@@DDBBB@B@@@BA@A@@B@BB@@@@@BD@@BD@B@B@@A@@B@BB@@B@@@BA@@BA@@@A@C@ABA@@B@BA@AFAB@BA@@BA@@@AA@@A@@BA@@@@B@BB@@B@BAB@BA@A@A@A@@@ABA@AB@BABAB@DBD@B@DABAB@BA@@@@D@@@B@DABA@A@A@A@A@A@ABA@AD@BADBF@HC@@BA@AB@B@@@BAB@BA@AB@DABADAHCBABAB@D@@@B@@@BA@@D@DBDEBABC@ADAB@@ABBB@B@BBB@D@B@BA@A@@D@B@FAB@B@B@B@B@@@B@D@B@D@F@@@FC@@B@@DBDB@ABBB@B@BBB@BDBDD@@@@B@@@D@BA@AB@@A@@@@BBD@BB@D@@@@BB@B@@@BAF@BADA@@B@@BBB@@BABADAB@@B@@BBDBD@B@@@@ABED@BB@@DAB@BA@AB@BABBD@@@BAB@@ABADAB@@@@@B@@@@BBBBFB@BB@@@@BBD@@BB@D@D@B@BA@BB@B@B@BBB@B@B@BA@@BED@@@@@B@@@@@BBB@@BBBDB@BBD@B@@BB@@@BDBB@@BBB@B@B@BA@@DBB@B@DAD@@@@@@A@AB@@A@@ACCE@@AAAA@@@@BC@A@ABABA@@@@AA@AA@AA@@@AB@@C@A@@@@@A@@@ABCFCBA@@@AA@@AAA@A@A@AB@@AB@BADA@ABC@A@A@@@A@@@A@@@@@A@@BCB@B@BADABA@@BADCDCBABA@@F@BBD@B@BBB@B@D@B@B@B@D@BBB@@@D@@@D@@@@@B@@A@C@A@@BA@@DEBA@A@@D@BAJADA@@B@@@B@BD@@@BBDB@D@BBB@BB@@BBB@B@D@B@@CBA@ABAAA@AA@@@@AAAAA@@@CCC@A@@@A@@BA@@@A@ABA@A@A@@@@@A@A@@@@AAAAAAA@@AA@@A@CAA@A@A@A@@@A@A@C@A@@B@@@DDBD@@@BDBFFDB@@BB@@B@BBBBB@BB@B@BBB@@BABAB@BCB@BA@A@A@A@AB@@@BABB@@BBD@BB@@B@@@BF@@B@@A@@BA@ADA@@BA@@@@BC@@DA@@BA@ABA@@BA@ABABCBABAB@DA@BBAD@@@@ABABCBCAC@ABC@A@@@@BAB@BC@@AA@C@A@@@AB@B@B@FBDAF@BAB@BAB@B@D@B@D@BB@@B@@A@@BA@@DB@@DA@@@AB@@@@BB@@BB@BBBBBBBBBBD@B@B@D@B@DD@@B@@@@B@@BBA@@B@B@B@@DD@@AD@B@@BBB@@BB@DDB@@@B@B@B@B@@BB@D@BB@@@@BBBBBDBB@BB@B@D@FBB@@@BBFHBB@@BB@@BBB@B@B@BBDBB@@BB@B@BB@@BB@@AB@B@BBB@B@@BB@@BD@@B@@BB@@AD@@AD@@AB@BA@@B@@@B@B@BAB@@BB@@@BBB@@@@A@AB@@@BAB@FABA@@@@BA@@B@B@@BDDB@BBB@BB@@@@@BBB@BBB@@DDBDBB@B@@DBB@@@FBB@@@@@@DB@@B@B@@@BB@@B@BBDDFB@B@@@B@BABA@@DA@@@ABA@AB@@AD@@@D@F@BBB@@@@A@@AA@@@AAA@C@C@@AA@@BA@@A@AEAA@@A@AAC@CAA@A@@AAA@AA@ACA@@A@ABE@AAC@@AAA@@A@A@A@A@A@@@AAA@@AA@@@AB@@A@AA@@A@@@AA@@AA@AAC@@@@@ABC@A@@@@@AAA@A@@@CCAAAAAA@@@AAC@@A@AA@@@A@@@AB@@A@A@@A@AA@A@AA@@@@CBA@A@@@A@A@ABE@A@C@@@EBA@A@A@@@@@AB@BAB@BAAA@@BA@@B@@@@A@@B@@@@@BA@@D@BAD@BC@@@@@@@AA@EAA@@@CCAA@@@C@A@E@AAA@CAAAC@@@A@ABA@A@AB@C@ABA@EB@B@@@@A@CACAA@@AC@A@CBA@A@AB@A@@@AAA@@C@A@@@A@@@A@A@@@A@@AA@A@@@AAAA@@AA@AA@@AAA@@BABC@@@AAA@CAAAA@@@CACAAAAA@AAA@@@AAA@C@@@C@C@A@@@A@@B@@G@C@@@A@@AAAAAAAAAA@AAC@AAA@A@@AA@AA@@AAA@A@@@@A@A@@AAA@C@A@A@A@@@AAA@A@@@A@@@A@@AA@@@A@A@@@A@C@@@CA@@AAC@A@@AA@A@A@C@C@C@E@A@@BCBCB@@ABAAC@@@@BA@E@A@@@I@@@AAA@A@A@C@CAA@@@AA@@ACEEAA@A@AAC@@@AAC@@A@AA@@@C@CAAAAAA@@ACA@CACA@BC@A@@@AAAAAA@@@ABA@A@AAA@CBC@@@@@A@EAAAAACA@@@E@AAC@AAC@AAAA@@@A@A@A@@@A@@@A@@@A@AAAA@@A@AA@AA@A@@@A@AB@@@AA@@@A@AAA@C@CAA@A@ABA@@@AAA@EA@@A@AA@@AA@CB@@@A@AA@@AAA@AA@@@@A@A@@@A@AAAAAAA@@AC@AAAAAAA@A@@AAB@@AA@@A@A@A@@@@@AA@AACAACA@@@A@A@A@A@A@@@A@@ABAAA@@@C@@AAA@@@@A@@AA@@@C@AAA@@B@@A@@AAA@@A@@A@AAA@A@AA@@A@A@A@@@A@@BA@@@@C@A@@AAAA@AA@@@AA@A@C@C@@@@@@A@ABE@C@@@AAA@A@A@EBC@@@A@EC@@@@A@A@A@AB@@@@A@@@@@AC@AA@CAAA@AAAAAAC@@AC@@BA@ADC@AB@@A@AB@B@D@@AB@@@BA@A@A@AB@@ABA@CBCBC@@@@@ABA@ABA@@AA@A@@@ABA@A@@@C@A@@@CBA@@BAB@@@BE@ABA@A@@@AB@@@DAD@B@B@@@BA@ABABAB@BC@@@AAA@ABCBC@A@AB@@A@@BB@@B@@@@@AAAA@@BA@@@@B@B@@@D@B@BCD@@A@@@@@AC@A@@@AAAA@@A@AA@AAA@@CC@CAA@@@A@A@@BAB@@@@A@A@A@A@@@A@@DAB@@@BA@A@@A@CAACAA@@@C@@@A@@@@BA@CB@AA@AA@@@CA@@AA@AEA@@@@BA@ABC@@BC@AB@BAD@DABAF@BAB@@A@A@A@@AA@A@ABCBE@A@AAC@A@E@@@AB@BABA@@@A@@CC@A@AAG@@ECA@A@AAC@EAA@AA@@AA@@AA@AAAA@AAA@AAAAC@E@G@I@C@A@A@A@@@AA@AAAA@C@A@AAA@AAEB@@C@C@C@@@AAAAA@A@A@@@A@A@CAC@AA@@A@@A@@@AAAAA@AA@CAAACAAA@AAA@A@A@A@@BC@A@@A@CCAC@AA@EA@@CC@@@AA@A@@A@@AA@@@AAC@@ACAEAAAC@@@A@@BA@C@A@C@A@AAAA@A@@@A@@@@@@AB@DA@@BCBA@@@C@@AA@AB@@A@@@ADC@A@@@@@A@@AA@@A@@@A@ABABA@C@A@@@A@A@C@@@C@CAA@ABA@@BA@AAA@A@E@ABC@A@A@C@AACAE@@@A@AD@@C@ABA@@@CAA@EBA@ABA@A@E@E@A@@AA@@@BA@A"],"encodeOffsets":[[109503,34095]]}}],"UTF8Encoding":true});}));