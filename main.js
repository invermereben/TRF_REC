let xphorizon = 0;
let dlehdrkr = 0;
let xpvertical = 0;
let dlehdtlrks = 0;
let xpwlffid = 0;
let rkrkathr = 0;
let dnjwlrrud = 0;
let gbwltlrks = 0;
let dnjwlffid = 0;

let ahapsxm = 0;
let rkthrqngk = 0;
let rkrkathr1 = 0;
let akckfqngk = 0;
let rkrthreh = 0;
let rkvlfdyxhzm = 0;
let emdthrtlrks = 0;
let emdvlfdyxhzm = 0;
let rkrrkthreh = 0;
let rkavlfdyxhzm = 0;
let dhlqngla = 0;
let vudrbsxhzm = 0;
let akckfrPtn = 0.02;
let vudrbsrkrthreh = 0;
let wndfurrkthreh = 9.8;
let rkdyrnxhzm = 0;
let dkswjsrPtn = 2.0;
let dyrnvudrbsxhzm = 0;
let ehdrlrnehd = 1;

let gjdydxhzm = 0;
let tnaudrPtks = 0;
let rlqhsxhzm = 0;
let zoaahapsxm = 0;
let rkathrql = 0;
let rpm = 2000;
let zoafldwlrrud = 0;
let dyrnrkathr = 0;
let vlsldjswlrrud = 0;
let cncjsrkathr = 0;
let vlsldjsrpm = 0;
let result = 0;
let i = 0;
let j = 0;
let of = 0;
let rkathrqlresult = 0;
let motordlsjtu = 0;
let rkathrrlxhzm = 0;
let motorwjdrurxhzm = 0;
let motorchleoxhzm = 0;

let motorwjdrurxhzmpro = 0;
let motorwjdrurqngk = 0;
let motorchleoxhzmpro = 0;
let motorchleoqngk = 0;
let motorahapsxm = 0;
let rnjswkdahapsxmql = 0;
let motorahapsxmqngk = 0;



const names = new Array(Array('TRF1010A-C30','16','11','3','93','31','0.000367'),
                        Array('TRF1010A-C50','28','19','5','155','31','0.00243'),
                        Array('TRF1010A-C70','40','27','7','217','31','0.00782'),
                        Array('TRF1010A-C80','46','31','8','248.89','31.11','0.0126'),
                        Array('TRF1010A-C100','57','38','10','310.91','31.09','0.0320'),
                        Array('TRF1210A-C30','40','27','3','111','37','0.000707'),
                        Array('TRF1210A-C50','69','46','5','186.67','37.33','0.00507'),
                        Array('TRF1210A-C70','97','65','7','260.75','37.25','0.0164'),
                        Array('TRF1210A-C80','111','74','8','298.67','37.33','0.0255'),
                        Array('TRF1210A-C100','139','93','10','372.73','37.27','0.0639'),
                        Array('TRF1610A-C30','146','73','3','147','49','0.00417'),
                        Array('TRF1610A-C40','194','97','4','195.20','48.80','0.0115'),
                        Array('TRF1610A-C50','240','120','5','243.33','48.67','0.0261'),
                        Array('TRF1610A-C60','290','145','6','291.43','48.57','0.0538'),
                        Array('TRF1610A-C70','330','165','7','338.63','48.38','0.0780'),
                        Array('TRF1610A-C80','390','195','8','391.11','48.89','0.1564'),
                        Array('TRF1610A-C100','480','240','10','487.27','48.73','0.3568'),
                        Array('TRF2510A-C30','500','250','3','231','77','0.0407'),
                        Array('TRF2510A-C40','670','355','4','308.80','77.20','0.1182'),
                        Array('TRF2510A-C50','840','420','5','383.33','76.67','0.2543'),
                        Array('TRF2510A-C60','1010','505','6','459.43','76.57','0.4852'),
                        Array('TRF2510A-C70','1080','590','7','539','77','0.8709'),
                        Array('TRF3212A-C36','1260','630','3','352.50','117.50','0.2628'),
                        Array('TRF3212A-C48','1680','840','4','467.20','116.80','0.7054'),
                        Array('TRF3212A-C60','2100','1050','5','585','117','1.7821'),
                        Array('TRF4012A-C36','2660','1330','3','445.50','148.50','0.7267'),
                        Array('TRF4012A-C48','3540','1770','4','590.40','147.60','2.4220'),
                        Array('TRF4014A-C28','3630','2420','2','346.67','173.33','0.4120'),
                        Array('TRF4014A-C42','5430','3620','3','519','173','1.6550'),
                        Array('사용불가','0','0','0','0','0','0','0'));



document.getElementById("akckfrPtn").value = akckfrPtn;
document.getElementById("wndfurrkthreh").value = wndfurrkthreh;
document.getElementById("dkswjsrPtn").value = dkswjsrPtn;
document.getElementById("ehdrlrnehd").value = ehdrlrnehd;
document.getElementById("dhlqngla").value = dhlqngla;
document.getElementById("rpm").value = rpm;

function convert1() {
 
  xphorizon = document.getElementById("xphorizon").value;
  xpvertical = document.getElementById("xpvertical").value;
  dlehdrkr = document.getElementById("dlehdrkr").value;
  xpwlffid = document.getElementById("xpwlffid").value;  
  if(document.getElementById("dlehdtlrks").value==0){dlehdtlrks=0.01;}
  else{dlehdtlrks = document.getElementById("dlehdtlrks").value;}
  dnjwlrrud = document.getElementById("dnjwlrrud").value;
  if(document.getElementById("rkrkathr").value==0){rkrkathr=0.01;}
  else{rkrkathr = document.getElementById("rkrkathr").value;}
  dnjwlffid = document.getElementById("dnjwlffid").value;
  gbwltlrks = document.getElementById("gbwltlrks").value;


  ahapsxm =
    ((xphorizon / 1000) * (xphorizon / 1000) + (xpvertical / 1000) * (xpvertical / 1000))*xpwlffid / 12 +
    dnjwlffid * (dnjwlrrud / 2000) * (dnjwlrrud / 2000);
  document.getElementById("ahapsxm").value = Math.ceil(ahapsxm * 1000) / 1000;  
  rkthrqngk = ahapsxm * rkrrkthreh;
  document.getElementById("rkthrqngk").value = Math.ceil(rkthrqngk * 1000) / 1000;
  rkrkathr1 = rkrkathr;
  document.getElementById("rkrkathr1").value = Math.ceil(rkrkathr * 1000) / 1000;
  akckfqngk =
    (xpwlffid*1+dnjwlffid*1) * wndfurrkthreh * akckfrPtn * xpvertical / 2000;
  document.getElementById("akckfqngk").value = Math.ceil(akckfqngk * 1000) / 1000;
  rkrthreh = rkrrkthreh * rkrkathr1;
  document.getElementById("rkrthreh").value = Math.ceil(rkrthreh * 1000) / 1000;
  rkvlfdyxhzm = (rkthrqngk*1 + akckfqngk*1+dhlqngla*1)/ehdrlrnehd;
  document.getElementById("rkvlfdyxhzm").value = Math.ceil(rkvlfdyxhzm * 1000) / 1000;
  if(dlehdtlrks<=rkrkathr){emdthrtlrks=1;}
  else{emdthrtlrks = dlehdtlrks - 2 * rkrkathr;}
  document.getElementById("emdthrtlrks").value = Math.ceil(emdthrtlrks * 1000) / 1000;
  emdvlfdyxhzm = (akckfqngk*1+dhlqngla*1)/ehdrlrnehd;
  document.getElementById("emdvlfdyxhzm").value = Math.ceil(emdvlfdyxhzm * 1000) / 1000;
  rkrrkthreh =
    (dlehdrkr * Math.PI) / 180 / (dlehdtlrks * rkrkathr - rkrkathr * rkrkathr);
  document.getElementById("rkrrkthreh").value = Math.ceil(rkrrkthreh * 1000) / 1000;
  rkavlfdyxhzm = (rkthrqngk*1 + akckfqngk*1+dhlqngla*1)/ehdrlrnehd;
  document.getElementById("rkavlfdyxhzm").value = Math.ceil(rkavlfdyxhzm * 1000) / 1000;
  dhlqngla = document.getElementById("dhlqngla").value;
  vudrbsxhzm = (rkvlfdyxhzm * 2 + emdvlfdyxhzm * 3) / 3;
  document.getElementById("vudrbsxhzm").value = Math.ceil(vudrbsxhzm * 1000) / 1000;
  if(document.getElementById("akckfrPtn").value==0){akckfrPtn=0.02;}
  else{akckfrPtn = document.getElementById("akckfrPtn").value;}
  vudrbsrkrthreh = ((dlehdrkr / 180) * Math.PI) / dlehdtlrks;
  document.getElementById("vudrbsrkrthreh").value = Math.ceil(vudrbsrkrthreh * 1000) / 1000;
  wndfurrkthreh = document.getElementById("wndfurrkthreh").value;
  rkdyrnxhzm = rkvlfdyxhzm * dkswjsrPtn;
  document.getElementById("rkdyrnxhzm").value = Math.ceil(rkdyrnxhzm * 1000) / 1000;
  if(document.getElementById("dkswjsrPtn").value==0){dkswjsrPtn=0.01;}
  else{dkswjsrPtn = document.getElementById("dkswjsrPtn").value;}
  dyrnvudrbsxhzm = vudrbsxhzm * dkswjsrPtn;
  document.getElementById("dyrnvudrbsxhzm").value =  Math.ceil(dyrnvudrbsxhzm * 1000) / 1000;
  ehdrlrnehd = document.getElementById("ehdrlrnehd").value;
  dyrngkwnd = document.getElementById("dyrngkwnd").value;

  for(i=0; i<29; i++){
    gjdydxhzm = names[i][j+1];
    rlqhsxhzm = names[i][j+2];
    rkathrql = names[i][j+3];
    zoafldwlrrud = names[i][j+4];
    vlsldjswlrrud = names[i][j+5];
    zoaahapsxm = names[i][j+6];
    vlsldjsrpm = Math.floor(60 / 2 / Math.PI * rkathrql * rkrthreh*100000000000000)/100000000000000;    
    rkathrrlxhzm = rkdyrnxhzm/rkathrql;
    tnaudrPtks = Math.cbrt(Math.pow(rlqhsxhzm/rkdyrnxhzm,10))*60000000/vlsldjsrpm/60*(dlehdtlrks*1+gbwltlrks*1)/dlehdtlrks;
    if(tnaudrPtks>=10000){
      break;
    }   
  }

  dyrnrkathr = rpm/vlsldjsrpm;

  document.getElementById("gjdydxhzm").value = gjdydxhzm;
  document.getElementById("rlqhsxhzm").value = rlqhsxhzm;
  document.getElementById("rkathrql").value = rkathrql;
  document.getElementById("zoafldwlrrud").value = zoafldwlrrud;
  document.getElementById("vlsldjswlrrud").value = vlsldjswlrrud;
  document.getElementById("vlsldjsrpm").value = Math.ceil(vlsldjsrpm * 100) / 100;
  document.getElementById("tnaudrPtks").value = Math.floor(tnaudrPtks*1000)/1000;
  document.getElementById("dyrnrkathr").value = Math.floor(dyrnrkathr);
  rpm = document.getElementById("rpm").value;
  document.getElementById("zoaahapsxm").value = zoaahapsxm;
  document.getElementById("result").value = names[i][j];
  
}

function convert2() {
 
  cncjsrkathr = document.getElementById("cncjsrkathr").value;
  document.getElementById("cncjsrkathr").value = cncjsrkathr;
  if(cncjsrkathr<=dyrnrkathr){
    document.getElementById("of").value = "OK";
  }
  else{
    document.getElementById("of").value = "FAIL";
  }

  document.getElementById("rkathrqlresult").value = "1/"+cncjsrkathr;
  motordlsjtu = (ahapsxm*1+zoaahapsxm*1)/Math.pow(rkathrql,2)/Math.pow(cncjsrkathr,2)*10000;
  document.getElementById("motordlsjtu").value = Math.ceil(motordlsjtu*1000)/1000;
  motorwjdrurxhzm = emdvlfdyxhzm*dkswjsrPtn/rkathrql/cncjsrkathr;
  document.getElementById("motorwjdrurxhzm").value = Math.ceil(motorwjdrurxhzm * 100) / 100;
  document.getElementById("rkathrrlxhzm").value = Math.ceil(rkathrrlxhzm * 10) / 10;
  motorchleoxhzm = rkathrrlxhzm/cncjsrkathr;
  document.getElementById("motorchleoxhzm").value = Math.ceil(motorchleoxhzm * 100) / 100;

}


function convert3() {

  motorwjdrurxhzmpro = document.getElementById("motorwjdrurxhzmpro").value;
  motorwjdrurqngk=motorwjdrurxhzm/motorwjdrurxhzmpro;
  document.getElementById("motorwjdrurqngk").value = Math.ceil(motorwjdrurqngk*100);
  motorchleoxhzmpro = document.getElementById("motorchleoxhzmpro").value;
  motorchleoqngk=motorchleoxhzm/motorchleoxhzmpro;
  document.getElementById("motorchleoqngk").value = Math.ceil(motorchleoqngk*100);
  motorahapsxm = document.getElementById("motorahapsxm").value;

  rnjswkdahapsxmql = document.getElementById("rnjswkdahapsxmql").value;
  motorahapsxmqngk = motordlsjtu / rnjswkdahapsxmql / motorahapsxm*100;
  if(motorahapsxmqngk>100){document.getElementById("motorahapsxmqngk").value = "FAIL";}
  else{document.getElementById("motorahapsxmqngk").value = Math.ceil(motorahapsxmqngk*10)/10;}


}


/*
    <section>
      <img class="imgposition"
        src="http://www.joneinc.com/sh_img/hd/top_menu/logo.png"
        width="400px"
      />
    </section>

  
*/

