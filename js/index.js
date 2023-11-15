// #Tourism swiper
var swiper = new Swiper("#Tourism .mySwiper", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter : true,
      },
  });


// #Tourism text

const tourismText=[
    {
        title: "사려니숲길",
        txt: "제주 숨은 비경 31 섬나무 향기에 취하며 걷는 아름답고 청정한 숲길",
        Location: "제주시 - 조천",
        img: "./img/Tourism/forestRoad.png",
        hashTag:["#숲길" , "#걷기/등산" , "#단풍"]
    },
    {
        title: "섭지코지",
        txt: "아름다운 해안이 일품인 섭지",
        Location: "서귀포시 - 성산",
        img: "./img/Tourism/Seopjikoji.jpeg",
        hashTag:["#커플" , "#자연경관" , "#포토스팟"]
    },
    {
        title: "제주현대미술관",
        txt: "저지문화에 술이마을에 자리한 현대미술관",
        Location: "제주시 - 한경",
        img: "./img/Tourism/artMuseum.jpeg",
        hashTag:["#실내" , "#박물관" , "#예술"]
    },
    {
        title: "스누피가든",
        txt: "피넛츠 캐릭터들을 만나 그들과 상호관계를 통해 공감과 힐링의 메세지",
        Location: "서귀포 - 구좌",
        img: "./img/Tourism/Snoopy.jpeg",
        hashTag:["#커플" , "#아이" , "#휴식"]
    },
    {
        title: "애월해안도로",
        txt: "도보,자전거,자동차 뭐든 좋은 서부해안도로",
        Location: "제주시 - 애월",
        img: "./img/Tourism/AwolCoastalRoad.jpeg",
        hashTag:["#커플" , "#맑음" , "#자연경관"]
    },
    {
        title: "천지연폭포",
        txt: "하늘과 땅이 만나서 이룬 연못",
        Location: "서귀포 - 서귀포시내",
        img: "./img/Tourism/CheonjiyeonFalls.jpeg",
        hashTag:["#유네스코" , "#힐링" , "#포토스팟"]
    },
    {
        title: "한라산국립공원",
        txt: "한반도 3대 영산 중 하나",
        Location: "제주시 - 제주시내",
        img: "./img/Tourism/nationalPark.jpeg",
        hashTag:["#산" , "#걷기" , "#경관"]
    },
    {
        title: "카멜리아힐",
        txt: "동양에서 가장 큰 동백 수목원",
        Location: "서귀포 - 언덕",
        img: "./img/Tourism/CamelliaHill.jpeg",
        hashTag:["#자연경관" , "#힐링" , "#포토스팟"]
    },
    {
        title: "에코랜드 테마파크",
        txt: "기차를 타고 감상하는 곶자왈, 원시림 테마공원",
        Location: "제주시 - 조천",
        img: "./img/Tourism/Ecoland.jpeg",
        hashTag:["#테마공원" , "#어린이" , "#어트랙션"]
    },
    {
        title: "우도",
        txt: "소가 누워있는 형상을 하고 있는 제주의 가장 큰 부속섬",
        Location: "섬속의섬 - 우도",
        img: "./img/Tourism/UdoIsland.png",
        hashTag:["#섬속의 섬" , "자연경관" , "우도땅콩"]
    },
    {
        title: "성산일출봉",
        txt: "바다위에 우뚝 솟아난 수성화산,유네스코 세계자연유산",
        Location: "서귀포시 - 성선",
        img: "./img/Tourism/Seongsan.png",
        hashTag:["#자연경관" , "#유네스코" , "#공영관광지"]
    },
    {
        title: "오셜록티뮤지엄",
        txt: "제주녹차문화의 중심, 차박물관과 카페테리아",
        Location: "서귀포시 - 언덕",
        img: "./img/Tourism/greenTea.png",
        hashTag:["#네마공원" , "오셜록" , "#녹차"]
    },
    {
        title: "함덕해수욕장",
        txt: "에메랄드처럼 빛나는 '한국의 몰디브'",
        Location: "제주시 - 조천",
        img: "./img/Tourism/Hamdeok.png",
        hashTag:["#체험/레저" , "#바다" , "#자연경관"]
    },
];


for(x in tourismText){
    var imgs = "url(" + tourismText[x].img + ")";

    $("#Tourism .swiper-slide .T_innerDiv").eq(x).css("backgroundImage",imgs);
    $("#Tourism .swiper-slide .T_innerDiv").eq(x).append(`<h6 class="tourismTitle">${tourismText[x].title}</h6>`).append(`<p class="tourismText">${tourismText[x].txt}</p>`).append(`<p class="tourismLocation">${tourismText[x].Location}</p>`)
    $("#Tourism .swiper-slide .hashTag").eq(x).append(`<p>${tourismText[x].hashTag[0]}</p>`).append(`<p>${tourismText[x].hashTag[1]}</p>`).append(`<p>${tourismText[x].hashTag[2]}</p>`)
};
