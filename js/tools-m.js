eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'([6-8cfhj-moqrv-zDEGIJLNOQS-UX-Z]|[12]\\w)'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('6 1L=(()=>{6 f={E:{S:[\'Ω\',\'KΩ\',\'MΩ\'],T:[\'pF\',\'nF\',\'μF\',\'mF\',\'F\'],U:[\'nH\',\'μH\',\'mH\',\'H\'],1O:[\'μA\',\'mA\',\'A\'],j:[\'μV\',\'mV\',\'V\']},1h:{S:{\'Ω\':1,\'KΩ\':y,\'MΩ\':z},T:{\'pF\':1,\'nF\':y,\'μF\':z,\'mF\':1R,\'F\':1e12},U:{\'nH\':1,\'μH\':y,\'mH\':z,\'H\':1R},1O:{\'μA\':1,\'mA\':y,\'A\':z},j:{\'μV\':1,\'mV\':y,\'V\':z}}};X 1i(a){1j 16=Number(a).toPrecision(13).J(/(\\.\\d*[1-9])0+([eE]|$)/g,\'$1$2\').J(/\\.0+([eE]|$)/g,\'$1\').J(/\\.([eE]|$)/g,\'$1\').toLowerCase();q(16.1S(\'e\')){l 16.J(/e\\+?(-?\\d+)/,\'×10^$1\').J(/(\\d)\\.?×/,\'$1×\')}6 17=16.1T(\'.\');17[0]=17[0].J(/\\B(?=(\\d{3})+(?!\\d))/g,\',\');l 17.1U(\'.\')}X 1l(){6 k=8.h(\'1m\').c;6 E=f.E[k];[Y,Z].1V(1W=>{1W.r=E.map(o=>`<1X c="${o}">${o}</1X>`).1U(\'\')})}X 18(){1n{6 N=1o(8.h(\'N\').c);q(1p(N)){8.h(\'1q\').r="A programmer’s favorite movie genre: documentaries about debugging.";l}6 k=8.h(\'1m\').c;6 1r=Y.c;6 to=Z.c;6 v=(N*f.1h[k][1r])/f.1h[k][to];8.h(\'1q\').r=`<D>计算结果:&7;${1i(N)}${1r}=${1i(v)}${to}</D>`}1u(L){8.h(\'1q\').r="1Y don’t 1Z fish? They’re afraid of getting a ‘1v’ v."}}6 Y=8.h(\'Y\');6 Z=8.h(\'Z\');l{O:()=>{8.h(\'1m\').G(\'1w\',()=>{1l();18()});[\'N\',\'Y\',\'Z\'].1V(id=>{8.h(id).G(\'Q\',18)});1l();18()}}})();6 22=(()=>{6 f={E:{S:\'Ω\',T:\'pF\',U:\'μH\'},23:{S:/^[\\1x]{3,4}$/i,T:/^[\\1x]{3,4}$/i,U:/^[\\1x]{3,4}$/i},24:{S:[{x:z,o:\'MΩ\'},{x:y,o:\'KΩ\'}],T:[{x:z,o:\'μF\'},{x:y,o:\'nF\'}],U:[{x:z,o:\'H\'},{x:y,o:\'mH\'}]}};X 26(a,b){6 1y=f.24[b];q(!1y)l 1v;for(6 19 of 1y){q(a>=19.x){l{c:a/19.x,o:19.o}}}l 1v}X 1z(){6 k=8.h(\'27\').c;6 Q=8.h(\'28\');6 11=8.h(\'29\');6 1A=Q.c.trim();6 c=1A.toUpperCase();q(!1A){11.r="Life is like programming: 1B worst part isn’t 1B 2a, it’s 1B feature creep.";l}q(!f.23[k].test(c)){11.r="请输入&7;<D>3&7;-&7;4&7;</D>位有效字符！";l}1n{6 2b=c.indexOf(\'R\');1j v=0;q(2b!==-1){6[2c,2d]=c.1T(/R/i);v=1o(`${2c}.${2d}`)}else{6 2e=1C(c.2f(0,-1),10);6 2g=1C(c.2f(-1),10);v=2e*(10**2g)}6 1a=26(v,k);1j 1D=\'\';q(1a){6 2h=1a.c.2i(undefined,{maximumFractionDigits:1});1D=`=${2h}${1a.o}`}11.r=`<D>计算结果:&7;${v.2i()}&7;${f.E[k]}${1D}</D>`}1u(L){11.r="计算错误:&7;${L.message}"}}l{O:()=>{8.h(\'28\').G(\'Q\',1z);8.h(\'27\').G(\'1w\',1z);8.h(\'29\').r="Programmers fall into two categories: who 0s and 1s, survive on Ctrl+C/V."}}})();6 2j=(()=>{6 f={Vf:2,If:0.02,2k:[0.125,0.25,0.5,1,2,5],1E:{15:(n)=>n*f.Vf,1F:()=>f.Vf}};6 2l=(1G)=>{6 E=[{x:z,1b:\'MΩ\',1c:z},{x:y,1b:\'KΩ\',1c:y},{x:0,1b:\'Ω\',1c:1}];6 o=E.2m(u=>1G>=u.x);6 c=(1G/o.1c).toFixed(1).J(/\\.0$/,\'\');l`${c}${o.1b}`};6 2n=(k,m,j)=>{q(k===\'15\'){6 I=f.1E.15(m);q(j<=I)1H`电源电压必须大于&7;${I}&7;V`;l(j-I)/f.If}6 I=f.1E.1F();q(j<I)1H`电源电压必须大于&7;${I}&7;V`;l(j-I)/(m*f.If)};6 2o=(k,m,j)=>{l k===\'15\'?(j-m*f.Vf)*f.If:(j-f.Vf)*m*f.If};6 2p=(1I)=>{l f.2k.2m(p=>p>=1I)||2q.ceil(1I)};l{O:()=>{6 w={k:8.h(\'circuitTypeCalculator\'),m:8.h(\'m\'),j:8.h(\'j\'),v:8.h(\'circuitResult\')};w.v.r="1Y do 1Z prefer dark mode? Because light attracts 2a.";6 1d=()=>{1n{6 m=1C(w.m.c);6 j=1o(w.j.c);q(1p(m)||1p(j)){w.v.r="请输入合理的&7;1J&7;数量和电压！";l}q(m<1)1H"1J&7;数量不能小于「<D>1</D>」";6 1K=w.k.c===\'concatenation\'?\'15\':\'1F\';6 R=2n(1K,m,j);6 P=2o(1K,m,j);w.v.r=`<D>${w.k.options[w.k.selectedIndex].text}&7;${m}&7;个&7;1J&7;`+`限流电阻&7;≈&7;${2p(P)}&7;W&7;/&7;${2l(2q.round(R))}<D>`}1u(L){w.v.r=L.1S(\'V\')?L:`✘:&7;${L}`}};w.k.G(\'1w\',1d);w.m.G(\'Q\',1d);w.j.G(\'Q\',1d)}}})();8.G(\'DOMContentLoaded\',()=>{1L.O();22.O();2j.O()});',[],151,'||||||const|nbsp|document||||value|||config||getElementById||voltage|type|return|ledCount||unit||if|innerHTML||||result|elements|threshold|1e3|1e6||||mark|units||addEventListener||minV|replace||error||inputValue|init||input||resistor|capacitor|inductor|||function|fromUnit|toUnit||output||||series|formatted|parts|convert|rule|converted|symbol|divisor|updateHandler||||factors|formatNumber|let||updateUnits|componentTypeConverter|try|parseFloat|isNaN|conversionResult|from|||catch|null|change|dRr|formatRules|updateResult|rawValue|the|parseInt|convertedText|minVoltage|parallel|ohm|throw|power|LED|circuitType|UnitConverter|||current|||1e9|includes|split|join|forEach|select|option|Why|programmers|||ComponentCalculator|patterns|formats||getConvertedValue|componentTypeCalculator|componentCode|componentResult|bugs|decimalIndex|integer|decimal|base|slice|exponent|formattedValue|toLocaleString|LEDCalculator|powerLevels|formatResistance|find|calculateResistance|calculatePower|getStandardPower|Math'.split('|'),0,{}))