(function(_0x2adcc9,_0x2d26f5){const _0x53576c=a33_0x531d,_0x40e6a3=_0x2adcc9();while(!![]){try{const _0x26f6e4=-parseInt(_0x53576c(0x114))/0x1+-parseInt(_0x53576c(0x116))/0x2*(-parseInt(_0x53576c(0x11e))/0x3)+-parseInt(_0x53576c(0x112))/0x4*(-parseInt(_0x53576c(0x119))/0x5)+-parseInt(_0x53576c(0x118))/0x6*(-parseInt(_0x53576c(0x115))/0x7)+-parseInt(_0x53576c(0x111))/0x8+parseInt(_0x53576c(0x11d))/0x9*(parseInt(_0x53576c(0x11f))/0xa)+parseInt(_0x53576c(0x110))/0xb*(-parseInt(_0x53576c(0x11a))/0xc);if(_0x26f6e4===_0x2d26f5)break;else _0x40e6a3['push'](_0x40e6a3['shift']());}catch(_0x436fc2){_0x40e6a3['push'](_0x40e6a3['shift']());}}}(a33_0x413c,0x7b9aa));function tokenize(_0x1f1e5f){const _0x42b045=a33_0x531d;return _0x1f1e5f[_0x42b045(0x11c)]()['split']('\x20');}function uniqueTokens(_0x2c997d){return new Set(tokenize(_0x2c997d));}function a33_0x413c(){const _0x42ff99=['filter','1926aqOHxu','35czPbgA','36rBucQx','size','toLowerCase','449991ZiDwyS','3DVZKbD','160vcBFJC','2755555aPdcII','7594304pTJUGE','148208qxoKJn','has','497370KtqvEd','16240sztcjb','1800774gOZJni'];a33_0x413c=function(){return _0x42ff99;};return a33_0x413c();}function a33_0x531d(_0x5adabb,_0x4a84a5){const _0x413ca6=a33_0x413c();return a33_0x531d=function(_0x531d52,_0x16d751){_0x531d52=_0x531d52-0x110;let _0x19cfb6=_0x413ca6[_0x531d52];return _0x19cfb6;},a33_0x531d(_0x5adabb,_0x4a84a5);}function jaccardSimilarity(_0x559bbe,_0x25d996){const _0x179157=a33_0x531d;let _0x564bca=new Set([..._0x559bbe][_0x179157(0x117)](_0x4e595d=>_0x25d996[_0x179157(0x113)](_0x4e595d))),_0x2de9b8=new Set([..._0x559bbe,..._0x25d996]);return _0x564bca[_0x179157(0x11b)]/_0x2de9b8['size'];}function compareSentences(_0xaeb8b0,_0x3dc3d6){let _0x13f96a=uniqueTokens(_0xaeb8b0);return _0x3dc3d6['map'](_0x1784dc=>({'sentence':_0x1784dc,'score':jaccardSimilarity(_0x13f96a,uniqueTokens(_0x1784dc))}));}