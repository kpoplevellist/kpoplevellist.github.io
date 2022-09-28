var moreinfo_html = `<center><strong style="font-size: 30px">< 안내 페이지 ></strong></center><br><br>` +


`<center><strong style="font-size: 23px">< QnA ></strong></center>`+

` - <strong>Q. 기록 등재는 어디서 신청하나요? (유저 랭킹 등재/업데이트는 어디서 신청하나요?)</strong><br>` +
` - A. 오른쪽 메뉴의 기록 등재 신청창에서 가능합니다.<br>` +
`</div><br>`+
`<div>`+


`<center><strong style="font-size: 23px">< 유저포인트 트로피 ></strong></center><br>` +
` 유저 포인트는 순위에 따라서 인게임처럼 트로피(일종의 티어)가 붙습니다.<br><br>` +
` <strong>각각의 트로피 조건 : </strong><br>` +
` <img src="./img/top1_trophy.png" width="18px"> Top 1 트로피 : UP 1위 <br>` +
` <img src="./img/gold_trophy.png" width="18px"> Gold 트로피 : UP 200 이상 <br>` +
` <img src="./img/silver_trophy.png" width="18px"> Silver 트로피 : UP 150 이상 <br>` +
` <img src="./img/cooper_trophy.png" width="18px"> Bronze 트로피 : UP 100 이상 <br>` +
` <img src="./img/green_trophy.png" width="18px"> Green 트로피 : UP 60 이상 <br>` +
` <img src="./img/aqua_trophy.png" width="18px"> Aqua 트로피 : UP 30 이상 <br>` +
` <img src="./img/pink_trophy.png" width="18px"> Pink 트로피 : UP 10 이상 <br>` +
` <img src="./img/red_trophy.png" width="18px"> Red 트로피 : UP 리스트 등재 <br>`


var record_length = 0;
for (var i = 0 ; i < list.length ; i ++) {
    record_length = record_length + list[i].vids.length;
}


var home_html = 
`<br><br><br>` +
`<strong><center style="font-size: 26px;">K-POP Level List에 오신 것을 환영합니다!</strong></center>` +
`<br><br><br>` +
`현재 리스트에는 <strong>${list.length}개</strong>의 맵에 총 <strong>${record_length}개</strong>의 기록이 등재되어 있으며, <strong>${userData.length}명</strong>이 현재 등재되어 있습니다.<br><br>` +
`<strong>상단의 사이드바(<img src="img/sidebar.png" width="17px">)를 통해서 순위와 데몬들을 확인할 수 있습니다.</strong><br><br>` +
`<strong>오른쪽 메뉴에는 유저포인트 랭킹가 존재합니다.</strong>` +
`<br><br><br>`