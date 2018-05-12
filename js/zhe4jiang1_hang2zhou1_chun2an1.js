(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('淳安县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"330127","properties":{"name":"淳安县","cp":[119.042037,29.608886],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@@ABAA@@@@A@A@A@@@AAA@A@AA@A@A@A@@@A@@@A@A@A@A@A@@@A@@A@@@A@A@@@A@AAA@@A@@A@@A@BAA@A@AA@@@@@@AA@AA@AA@@@A@@@@A@@@ABABABABA@ABA@A@A@CDA@ABABA@@@A@ABA@@@ABA@AB@BA@@@@@AB@@@BA@@@@B@@A@@AA@@BA@@@AB@@C@@@@@AA@@A@A@AAA@A@A@@ACB@@A@A@A@A@@@A@AAA@AAA@A@@@AAA@C@A@@AA@@BA@AAA@AAC@@@C@@@A@@@A@AA@@E@@AA@@@@@A@A@CAA@A@@@A@@@@@AAA@CBA@A@A@A@@@ABBB@@@@@BA@@@AB@@@@@BABB@@A@@BB@@@BB@@@BB@@@@BBB@@BB@@B@@@B@@@@@B@B@B@@BB@@@B@BA@@B@@@BA@@B@@@B@B@@@B@@@B@@BB@@AB@@A@@BA@@@A@C@A@@AA@@@@@A@A@@AA@@@A@@@ABAD@B@@ABAB@@@B@@@BABA@@@@B@@@B@@@@AB@@ABAB@B@@@BAB@@A@AD@BA@@@AB@@@@@B@@B@@B@@BBB@BBB@@B@@@B@@B@@BB@@BBB@B@@@@@B@B@@@B@@ABAD@@AB@@@B@BAB@@@BAB@B@@@@@BAB@@@B@@AB@BA@@BAB@BB@@BB@BBB@@B@@@D@@@B@@BB@BAB@B@@BB@@B@BB@@@A@@B@BAB@BA@@@@BA@A@A@A@@BA@A@@@A@@BA@@B@BCB@BA@A@@B@BA@@DBB@B@@@DA@@B@BCBABA@@B@BD@@AB@B@@@B@BABA@@@@D@@@BAB@@@BAB@B@BA@@B@@@BABAB@@@@@BA@@BA@@@ABAB@B@@B@@B@A@@B@@@@BA@@@@@C@AB@@@BA@@B@@@B@B@@@@@@CBCBABAFABA@A@@@@@BBBB@DBB@B@@@B@@@@@B@@@B@@@@@BA@@@@@A@A@AB@BA@ABA@@DABAB@@@@@@A@@@@B@@AA@@AB@BC@A@@BBB@B@B@@@@@BBB@@AB@@@@@B@@@B@@@B@@A@@@A@@BCD@@AB@@C@@@A@A@@BA@@@AA@@@BAA@@AAA@AA@@A@@@@@@BAB@@@@@@B@@@@B@@@@@@@B@@@@@BA@@@@@A@ABCB@@@A@@AA@@@@AA@@ABA@@@@BA@@BA@@BA@@@A@@B@@AB@BA@@@A@ABA@@@@@A@A@@AA@AB@@@@@B@@A@@@@@A@@@@@A@@@@A@@@@A@@@@@@A@@@@A@@@A@@@@@@@A@@@AB@BAB@@A@@@A@@@A@A@@@AAAA@@@A@@@@A@@@@@@@@@@@A@@A@@A@@@E@@@A@@@@@A@@AA@@@ABBBA@B@@BAB@B@@@@BBA@@BA@A@@@AACA@@@BA@A@@A@@ABA@@B@@@B@@AB@@A@@@@@@@A@@@ABA@@@@B@@@B@@@@AB@BABA@A@@@@@A@@@AB@B@@B@@BB@@@@BAB@B@@BBB@@B@@@B@@BDA@@@A@@@A@A@@@A@@@@@@@@B@@B@AB@B@@AB@@AB@@A@@@@AA@AA@@A@@@A@AA@@@@@A@@AB@@AB@@AAC@@@@@BA@@A@@@@@@A@AA@@@@AA@@@@@@BAB@@A@A@A@@BA@@B@@AA@@AA@A@@A@@@C@@@A@@@A@A@@@@@AB@@@@@DABAB@@AD@@@@A@A@@@@@@BA@@@A@A@@@AAAB@@A@@A@AA@@A@@A@@@A@A@@@AA@@AAA@@A@@A@@AA@AA@@@@@@CA@BA@@@A@@@A@AA@@A@@@@@A@AA@@@@AB@B@@@B@A@@ABABA@AB@BAB@B@@ABA@@@@BB@@B@@@@@B@@@@@B@@A@@@ADC@A@@@EBA@@BA@A@A@BB@@@@ABA@AA@@A@AA@@ABA@CB@@ABA@@B@@A@@BA@@@A@@@A@AB@BA@@BA@@@AB@B@@A@@@@@ABA@@BAB@@AB@B@@A@AAA@A@@BABA@@@B@@BBABB@@@@@@B@@@@@A@@@@@@@@@@@@@@@AB@@@@@B@@@@@@@@@@A@@A@@@A@@@@A@@@@@@BAB@@@BB@@B@@@@BB@@A@@@@@A@@A@A@@@@@CB@A@@@A@@B@@@@@B@@@BB@@B@B@@BB@@@@@BB@@@@B@@@@AB@@@DA@@@A@@@A@@@AA@@@@C@A@A@ABAB@@@B@@B@A@@BA@@@@@@BB@@@@B@@B@@B@@@BB@@@@B@BD@@@@B@@@@@@@@@@BD@BB@@@B@@B@@@@@@B@@@@B@@@@@B@@ABAA@BA@ABA@ABABA@A@AB@@A@A@A@A@A@@BA@@AA@@@B@A@@@@@A@@AA@@AAB@AABA@@@@@A@A@A@@BA@@B@@AB@@AB@B@@@@AB@B@@AB@@@BA@@B@@@@@@A@A@A@@@@AABA@C@AB@@@@AD@@AB@@@@@BA@@@ABA@@D@@ABB@AB@B@DA@A@@@A@@@AB@B@BA@@@@BA@@B@@@@C@@@A@@@ABA@@@A@C@@@A@@@A@A@AB@@@@@B@@@B@@@BA@@B@@@B@@AB@@AB@@A@ABA@ABA@@@@B@@@B@@BB@@BB@B@@AB@@AD@B@@@BBB@B@B@@AB@@@@@B@@BABAD@DBF@FBDBBBBBBDBFBBDBDFDDDB@DBBBDDDDBBDB@@BDFBD@BBDB@BAFAFAD@B@B@B@F@H@D@FBD@FBD@F@FAFCDCD@BAB@B@DBD@FBBD@DB@BBBA@AB@BBDBFDBBD@BCDAFCDC@@BAD@FBF@FBDBFBDBDBBBDBFBFDDBB@FBD@@D@@@B@B@B@F@HADBD@BBDBH@D@B@BADADAD@D@DBB@BBDBDBB@F@HBD@HBDBBD@DBFBDBFDDDDBFBDBD@HBHDHB@BBDDDBDBDDJBBDDFHDFDAB@DBDDFJDBDFFDBB@@@B@F@DBDDDFBDBH@JBHDF@DBDBF@F@B@VLBBFBDDB@B@@@HCFAFAFADCDCDCDAB@B@D@DBDDDB@BFDDHBDFDNNHDDDBBBB@D@FBBDDHFBB@B@D@DBDBBBDFBDBDB@BBF@BDDDDDDDDD@D@\\FDBFHBD@D@B@BBD@DDDDBDDFBHJDDFBB@BBBDBH@DBDBD@DBH@D@D@BADCFAB@DBBBDAD@BADAFEDEFCD@D@BBR@F@@@FBHBJBDDBDDB@D@H@HAD@D@DBBB@@@B@@BBBBBBB@@B@@@BABCBAB@@A@@BA@GBA@@@C@A@AB@@ABBB@BDD@BBB@D@B@F@@@DB@DBDBF@BBBBB@B@B@BA@@DAHCBADABAB@B@D@DBB@DDBBBF@DBBDBFFDBDDDBDBDDBDB@@DDBJFDDDBDBJHBBFD@@FBDDDDHFFDBDBBBB@FBB@D@D@F@F@B@F@FADAF@FAJCD@@CH@D@BBBDDFBD@D@D@B@@AFAHAFAB@D@B@BBDDBD@DDD@@BBB@@@B@@@B@DADADCFGB@B@D@@@D@B@B@@A@@D@B@B@@BAD@DAFAD@B@B@DBD@@@HCDBHBLBDBBBHDBBFBDABCHGHAD@DBBBD@BB@@B@B@B@DAD@BCDADA@@@@B@BDBBBDBDDBCB@B@@@BAB@@@DAB@@@B@B@BB@AB@@@@@@BB@BA@@@@B@@AB@B@@BBABBB@B@BAB@B@@AB@@@@AB@B@@@B@B@B@BB@@B@@@@@B@@A@@BA@@@@B@BA@@@BB@@B@@B@DB@@DAB@@@B@@@B@@BB@@BB@B@@BB@@@@@BB@@BB@@BB@@@BB@D@@@B@BB@@@@B@BB@@@@@B@@@BD@@BB@@@@@B@B@@@@BB@@@B@@@@@BBB@BA@@@@B@BA@@B@@BB@B@@B@BB@@@@B@BB@DB@@B@B@B@BBBB@BB@@BBBB@@B@@BB@@B@B@BA@@@AB@@AB@@A@A@A@A@A@A@A@@@@@A@A@@BC@A@A@@AA@@@A@@B@@AB@@@@@BBB@@@@@BBB@@@@@B@@@@BB@@@@@@@B@@@@BBAB@@@B@DDBBB@F@@@BDBB@@@@@B@@DABBBBB@@B@@BBBB@@BD@B@@B@@BB@@AB@B@B@@A@@BAB@B@@@BB@@@@B@@@BB@@@BB@B@@@B@@BDAB@@@@@B@@@@A@@@@@A@@@@@A@@AA@@@@@@AA@@@@@@AA@B@@AA@@@@BA@@@@@AAA@@@A@@A@@A@@AAA@@@@A@@AA@@BA@@@@@A@@AAB@AA@A@CB@@@B@BBBAD@B@@@B@F@@A@@@@B@@AB@@@B@@@B@B@@A@@@@B@@A@@@A@@@A@@@ABAB@BB@AB@@A@@@AB@@CB@@A@@@A@@@A@AB@@A@@B@@A@@BD@@@@@B@@@BB@BB@B@@BB@@@B@@B@@BB@B@@B@@@B@@@@@B@@@@BB@@@@@@@B@@@@BB@@@@B@@A@@B@@A@@B@@@@@B@@AB@@@@@B@@@@@@@B@@@@@@@B@@@@@B@@BB@BA@@B@@@@@@@B@B@@@B@@@B@BB@@B@B@@@B@B@@@@@D@@@@@B@@BB@B@@BB@@@@BBB@@@@@BBA@@@@BBB@@@BB@ABB@@B@BB@@@B@B@@B@@@BBB@@BB@@B@AB@BA@AB@@A@@B@@@@@BA@@@@@@@@BA@@BBBB@@B@B@@@D@@@BAB@@@@A@@A@@A@@BA@A@@BA@BB@B@BA@B@@B@B@@@BBB@@B@C@@@@@A@A@@BA@@@@BAA@@@AA@AC@AAB@AA@AAAAA@@@A@@@A@@AA@@@@@@@@BC@@@@BA@A@@@A@AB@@A@@@A@AB@@A@@B@@@@AB@@@AA@@BADA@A@@AA@@BABA@@B@@@@A@@@A@@@@@@BBB@@@B@DD@@B@B@B@B@@BB@@B@@BAB@BAB@@@B@@@BBB@@@@@BA@A@@B@@A@AB@@A@AB@B@@@@BA@@@@BAB@@@@B@@B@@@@B@@@B@BAB@@A@@@@@@@@@@@@BA@@A@BA@@@@@@@AA@@@BA@@B@@@B@B@@@@@@@@A@A@A@@B@@AB@@@B@B@BA@@BB@@@@BBB@DA@B@@@@B@@@@A@@@CBB@BBAB@@AA@@AB@BABB@AB@D@@@BAD@@AB@@AB@@@B@B@BBB@@BB@B@D@B@B@@@B@@@B@B@B@@@B@B@@@DAB@B@@@B@@@BA@@B@B@BA@@B@B@@@BA@@B@BB@@B@@@B@@AB@@@@@B@@@@@BA@@@A@@BA@@B@BA@@BA@AA@@@AA@A@@@@@AA@@AAA@A@@ABC@C@@@A@A@@B@@A@@B@@A@@BA@A@@@A@@@A@A@@AA@@BAAA@A@AA@@A@A@AAA@@@@AA@@AA@A@@@@A@A@@@@@A@A@@@AA@@A@@@@@@B@@A@@@@BA@@DABAB@@@@@@A@@@A@@B@@@B@@@BB@@@@B@B@B@@@DABA@@DA@BB@BB@BBA@@B@@@@@B@BB@BB@@@B@@@BABAB@B@@@D@@@B@@@B@@@B@B@@@B@@@B@B@B@B@@@B@BC@@AA@AAA@@@@@C@@@@A@@A@@@A@A@@@@A@A@@A@@@A@@@@@@@AB@B@@@@AB@B@@A@@BA@@BAB@BABA@@BA@@B@B@@@AA@@@A@@AA@@AA@@@@@A@@@A@@BA@A@@@@@@@A@@BA@@BA@AB@@@@AC@@A@@AA@@@@AA@@@@A@@A@@@@CA@@@AA@@AA@@@A@@@@A@@A@@@A@A@@BA@@@AA@@A@AA@@@@@@A@ABA@A@A@@BA@@@@@@@AA@@@@A@@@@AE@@@@A@@@A@AA@@@@@@A@@@AA@A@@@@@AA@@@A@@@A@AA@@@A@@@@AA@AA@@@@@A@@AA@@@@@C@@A@@@@A@@A@@A@@@A@@@A@A@@@@@A@A@@@@@A@@@AA@@A@@@A@@@A@AA@@@A@@AA@C@@A@AA@AA@A@AA@@AAA@@AABAA@@A@AA@@A@@B@@A@@BA@@B@BA@@AA@@@ADA@@BA@@B@@A@@B@BABABABA@@@C@AB@BC@@@A@@BAD@BA@@D@B@@AB@BA@@B@@@DA@@BB@@@B@@B@BBB@F@@@B@@@DBBB@@@@@@BB@@B@@@B@BB@@@@@ABA@A@@BABA@@@BB@@B@@B@@@@B@@B@B@@@@@@@@A@@BA@@@AB@@A@@FCBAB@@@B@BD@AB@D@@@BA@A@@BAB@@AB@@@BAAA@@BA@A@@@@@AB@B@@A@@@@@@B@@@@@B@@@@A@@@@BB@@@@BAB@@@B@B@@@@@B@D@BA@@@@@BBB@@@BB@@B@@BBBB@@BB@@@BB@@BBBB@@B@@BB@@@BB@BB@@@B@@BB@@BCD@DCB@@@@@BC@A@@@@A@@@@A@A@A@@BA@A@ABA@@A@@@@@@@@A@ABA@@AABA@CB@@ADA@@@@BA@@AA@A@@@A@@@@@AB@@@@AAE@@AA@@AAAA@@@@CCAC@@@@A@@AAA@A@@@A@@@AB@@@@A@@@@BA@@B@@@@A@@@AB@AAB@@@B@BAB@B@B@@@@@B@@@B@@@@@@AB@@A@@@@B@@AB@BA@ABA@A@@@AB@B@@AB@@@B@@@@@BAB@@@@@BA@AB@@@@@@A@A@A@A@C@@@@@AA@@@@CBA@A@A@@AA@@@A@A@@@A@@A@AABA@@@@BCAA@@@A@@@@AA@@@@@@@A@@@A@@@A@@@A@@@A@@BAAA@@AA@@BA@A@@@A@@@AAA@@@A@@AA@@A@@AA@@A@C@@@@@@@C@@@A@@AA@@B@@A@@@A@A@@B@@AB@@@@@@A@@B@B@@@B@@@B@@@D@B@@@@@@AB@@@BBB@@@D@B@@@D@@@BBB@@A@@BA@@B@BBB@@@@@BAB@@@@@DBB@@A@@BAB@@@@A@ABAA@@A@@@A@@B@BA@@B@BAB@B@FA@AB@B@B@B@@@B@@@B@B@@@BBD@@@@@B@B@B@@@@BB@@@B@@BB@@@B@@A@@B@@@B@@@DB@@BA@@BA@@B@@@@@AAA@@A@A@AA@AA@AA@@CAAA@A@A@@A@@AA@AC@@AB@AA@@A@A@A@@@A@A@A@A@@A@@@AA@@AA@@A@AA@@AA@@A@@C@AA@A@@@AAAAA@@A@@A@@A@BC@A@ABA@@A@@E@A@AAAAA@@@A@@CA@C@@AA@@AC@@AA@AA@@BAAA@A@CC@@@A@@B@@A@@AA@@AA@A@@@@AA@A@@BA@@AA@A@ABA@AAAAC@@C@@A@@A@@@@@AA@BA@C@A@CBA@A@@@@@@@A@A@ACA@@AA@@A@@A@C@@@AAAA@@CA@@A@A@AA@@AA@@@@@A@A@C@A@@@@AA@@@@@@A@@@A@AAA@@@AA@@@@A@A@AA@@CA@@@AA@CAAA@@@@@@A@A@A@A@@@A@AAA@@@AA@@@A@@AA@@@AAA@AAA@@@AAA@@BC@@@A@@@@AA@@A@@@A@@AA@@@@A@AB@B@@@@A@@@A@@BA@A@@AA@AA@@AA@AA@@BCAAAA@@BAA@@A@@BAA@@ABA@@AA@@@A@AA@@AA@@@@A@A@@A@@A@AA@A@@@A@@A@AAA@AC@@AA@@@AA@@A@@@@A@@@@BABBBA@@B@BA@@@AD@@CB@@AB@@AB@@@AA@@@A@@@A@@@A@@@AA@BA@@BAB@@AB@B@B@B@@@B@BA@@@ABA@@@@@BDB@@BBB@@@@@@@B@B@B@BA@@@@B@@@B@B@BAB@B@@@B@@BB@@@@BB@BBB@@@D@@@B@@BB@BB@@BB@@BBBB@@@@BAB@@@A@@AB@B@@@B@@@@@@BB@@@@@BA@C@AB@@A@@A@@@@A@@A@@@A@A@@@A@@@@@A@A@@@AAA@@@AA@A@@@@A@@A@@A@@@A@@AA@@A@@A@C@A@A@AA@A@@@AB@@A@@@CA@@A@@BA@A@@@@BA@ABA@@@AAA@@@A@@@A@@@@AA@@@@@@AB@AC@@@@@AB@@@AC@@@AA@@@B@@@@AA@@AAAA@A@@A@@AA@@@A@AAAA@@AB@@A@AACBA@@@ACACA@AAAA@@AA@@AAA@@AA@@@AA@@AA@@@@@@AACA@A@@A@@A@A@@@@AA@@A@@@B@BA@@@@@A@@AA@@A@@AA@@@A@@AA@@@ABABA@@B@@ABABABC@ABA@@@AB@@BD@@@BA@@B@@AB@BAD@@@B@@AA@@@@A@AA@@A@@A@@A@@A@@A@A@@@AAC@@@AAAAA@@@CC@@BABA@@BA@@BA@@A@@@@A@@@A@AB@@@@ABAA@B@@A@A@A@A@A@@HGAAC@@AA@@AA@AAAAAA@AAA@A@AAA@@AA@@AA@@A@AAA@@A@@AA@@@@BC@@@@AA@@A@@A@@@A@@@A@@@A@A@AAAB@BA@@@A@A@@@@@A@A@C@A@@@A@A@@@A@@AA@@@A@@@A@A@@BA@@@@@@@@AA@@@AA@@A@@@A@@@@A@A@@@AAA@AA@@@@@AA@AA@@AAA@@@AA@@A@@AA@@A@@A@A@C@ABA@@BA@@AA@A@@AE@CA@@C@@BAAA@C@AAAA@@A@@AA@A@@@A@A@A@AAA@@@E@A@@A@@AA@BC@AAA@@@AB@B@@A@AB@@AAA@C@@@AAA@@B@@A@@@A@@@@@ABA@A@A@@AA@AA@@@@AAA@@A@@AA@@A@@@@@A@A@A@CB@@C@A@@A@BA@@@@@A@@A@@@A@@AA@@A@AA@@@A@@@A@@A@A@AA@@@A@@A@@AA@@@@AA@@A@@@@AAAA@@AA@A@@@A@A@ABAB@BA@@@C@@@A@@@A@@@AA@@@AA@A@AAAA@CAA@@AC@@@A@C@A@AA@@ABAA@@A@@@AA@@@@C@A@@@A@@@AB@@AAA@A@A@A@A@A@C@@@CA@@A@AAA@AAAA@@AAA@@@@A@@AA@@A@@AA@@A@@AA@A@@@@AA@@@A@@AABA@A@@@@@A@@@AAA@@@@A@AAA@A@@@@A@@@@@@@A@A@@@@A@CCA@A@@AABA@AB@@@@@B@@A@@@@@CA@@AC@AACCAAAAAA@@@@AA@@@AA@AAA@@@A@@@AA@AAC@@@@AA@A@AAA@A@EAA@@@AA@@A@@@A@@@@@A@@@A@@AAAAAA@A@@@AA@@AAA@CB@A@@ABA@A@A@A@G@@@A@AAA@@@A@@@AC@AA@@AA@@@@AA@A@@AA@AC@@@@@AA@@@A@AA@@@@AB@@@BA@@BA@@@AB@BA@@BAA@@@B@@@B@@A@A@@@@@A@@@A@@@CA@@@A@@A@@@A@C@A@A@@@C@@@A@ABA@@@A@@@A@@@@A@@@A@@@A@@@@@@@A@@@A@@AA@@@AAA@@@CAAA@@@A@C@@@AAA@A@@@AA@@@@@@A@AA@@A@C@@@A@@A@A@@A@@@A@@A@@A@AA@@AA@@ABA@@@AA@@CA@@@A@@A@A@@AA@C@C@A@A@@@A@A@A@@@A@@@AC@@CA@@AA@@AAA@@AC@@@A@@@A@@@A@@@A@A@@@A@@@@A@@A@AA@@@@AA@@A@@A@@A@@@A@@@AAA@@@AAA@A@@@A@@@A@@@@@@A@@@@AA@CA@@A@A@@@@@A@@A@A@A@@@@A@BAAAB@A@@A@ABABA@@@@@@BA@@@A@@@A@@@@@A@@B@@A@@@@@@@@@A@AA@@A@A@A@@AA@@@AA@@AA@@A@@@@@@A@AC@@@A@@@@A@@@@@AA@@@@AA@@@@@AA@@@@@A@@A@@@@@AA@@A@@A@@AA@@@AA@@@@A@@AA@A@@@AA@@@@@@A@@@A@@@@@AAA@A@@@@A@@@@@AA@@@@@@A@@@@A@@@A@A@@A@@@A@AAA@A@@@@@A@@@@@A@A@@@A@A@@AA@@AA@@A@@A@@@AC@@@A@@AA@@@@@@A@@@A@@@CC@@A@AAA@A@@@A@@@@@@A@@@AAA@@@A@A@@@A@AAA@@A@@AA@@@A@@AA@@@ABC@ABABA@@@@@A@@AA@A@A@@@A@@A@@@@AA@AA@@@AA@@A@A@@@A@@@AAA@@@AA@@CAACA@@@A@@A@@A@A@@AAA@@AA@@A@AA@@E@@@A@@@@@A@A@AA@@@AA@@@BC@@@A@AACA@@A@@@@A@@@A@@@A@@@@A@A@@@AAA@@C@@A@@B@@AA@AA@@A@A@A@@@A@@AA@@@C@ABA@A@@@@@AAAA@@AA@@A@@@@A@@@C@A@@@AAAAA@A@@@A@@B@BA@A@@B@@AB@BAB@@@@AAABAA@@@@A@A@A@@@@@A@A@@@A@@BABA@@@@A@@@@A@@@A@@@AA@@AAA@@@@@AA@C@@@AAC@@AA@@A@AA@CA@AA@@@A@@@AB@A@BAAA@@@A@@@A@@@A@A@@BCAA@@@A@A@AA@ACACA@A@@A@@@AAC@@@@@"],"encodeOffsets":[[121583,29909]]}}],"UTF8Encoding":true});}));