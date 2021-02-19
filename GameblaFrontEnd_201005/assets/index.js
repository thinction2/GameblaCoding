// LIST_CHANGE
const videoSelect = document.querySelectorAll('.sectionVideo .titleWrapper .sectionTitle');
const videoContainer = document.querySelector('.sectionVideo .vidContainer');
const liveContainer = document.querySelector('.sectionVideo .liveContainer');
if ( window.location.pathname.includes('index') ) {
videoSelect[0].addEventListener('click', () => {
    videoSelect[1].classList.remove('active');
    liveContainer.classList.remove('active');
    videoSelect[0].classList.add('active');
    videoContainer.classList.add('active');
})

videoSelect[1].addEventListener('click', () => {
    videoSelect[0].classList.remove('active');
    videoContainer.classList.remove('active');
    videoSelect[1].classList.add('active');
    liveContainer.classList.add('active');
})
}


// INFINITE_SCROLL
if ( window.location.pathname.includes('index') ) {
    const page = 10;
const scrName = '스트리머';
const scrTime = '00:00';
const scrLook = '조회 000만 회';
const scrDate = '0일 전';
const scrTitle = '영상제목';
const list1 = `
<div class="list">
    <div class="thumbnail">
        <img src="./assets/Img/sampleImg.jpg" alt="">
        <div class="overlay"></div>
        <div class="thumbInfo">
            <div class="img">
                <img src="" alt="">
            </div>
            <div class="name">
                ${scrName}
            </div>
            <div class="time">
                ${scrTime}
            </div>
        </div>
    </div>
    <div class="info">
        <span class="look">${scrLook}</span>
        <span>·</span>
        <span class="date">${scrDate}</span>
    </div>
    <div class="vidTitle">
        <p>${scrTitle}</p>
    </div>
</div>
`;
function randomChannel(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const streamChannelArray = ['twitch', 'afreeca'];
const srcViewCount = '00';
const srcStreamDate = '00';
const streamTitle = '스트리밍 제목';
const srcHash = '게임 명';


$(window).scroll( () => {
    if ($(window).scrollTop() === $(document).height() - $(window).height()) {
        if ( liveContainer.classList.contains('active') ) {
            for ( let i = 0; i < 10; i ++ ) {
                const streamChannel = streamChannelArray[randomChannel(0, 1)];
                const list2 = `
                <div class="list">
                    <div class="thumbnail">
                        <img src="./assets/Img/sampleImg.jpg" alt="">
                        <div class="overlay"></div>
                        <div class="thumbInfo">
                            <div class="img ${streamChannel}">
                                <img src="" alt="">
                            </div>
                            <div class="name">
                                ${scrName}
                            </div>
                            <div class="division ${streamChannel}">
                                LIVE
                            </div>
                        </div>
                    </div>
                    <div class="info">
                        <span class="look">시청자 ${srcViewCount} 명</span>
                        <span>·</span>
                        <span class="date">${srcStreamDate}시간 전</span>
                    </div>
                    <div class="vidTitle">
                        <p>${streamTitle}</p>
                    </div>
                    <div class="hashTag">
                        <button>
                            # ${srcHash}
                        </button>
                    </div>
                </div>
                `;
                $(".sectionVideo .liveContainer.active").append(list2);
            }
        } else {
            for ( let i = 0; i < 10; i ++ ) {
                $(".sectionVideo .vidContainer.active").append(list1);
            }
        }
    }
})
}

if ( window.location.pathname.includes('Video') ) {
    // SCROLL_UP_SHOW
    const header = document.querySelector('#header');
    let lastScrollTop = 0;
    const headerHeight = header.offsetHeight;
    const delta = 5;
    let didScroll;
    window.onscroll = () => {
        didScroll = true;
    }
    setInterval(() => {
       if ( didScroll ) {
           hasScrolled();
           didScroll = false;
       } 
    }, 250);

    function hasScrolled() {
        const nowScrollTop = window.scrollY;
        if( Math.abs( lastScrollTop - nowScrollTop ) <= delta ) {
            return;
        }
        if ( nowScrollTop > lastScrollTop && nowScrollTop > headerHeight ) {
            header.style.top = "-8.15vh";
        } else {
            if ( nowScrollTop + window.innerHeight < document.body.offsetHeight ) {
                header.style.top = "0";
            }
        }
        lastScrollTop = nowScrollTop;
    }


    // INFINITE_SCROLL
    let nextNumber = 0;
    $(window).scroll( () => {
        const item = 5;
        const vidName = '스트리머';
        const vidTime = '00:00';
        const vidLook = '조회 000만 회';
        const vidDate = '0일 전';
        const vidSub = '영상설명';
        const likeCount = '00';
        const commentCount = '00';
        let itemNumber = 3;
        if ($(window).scrollTop() >= $(document).height() - $(window).height()) {
            try {
                for ( let i = 0; i < item; i ++ ) {
                    const block = `
                        <div class="block">
                            <div class="title">
                                <div class="profile">
                                    <img src="" alt="">
                                </div>
                                <div class="nameWrap">
                                    <div class="name">
                                        ${vidName}
                                    </div>
                                    <div class="wrap">
                                        <span class="view">${vidLook}</span>
                                        <span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
                                        <span class="date">${vidDate}</span>
                                    </div>
                                </div>
                                <div class="followBtn">
                                    <button>
                                        +FOLLOW
                                    </button>
                                </div>
                                <div class="threeDot">
                                    <img src="./assets/Img/icons/threeDot.svg" alt="">
                                </div>
                            </div>
                            <div class="sub">${vidSub}</div>
                            <div class="video">
                                <img src="./assets/Img/videoSample.png" alt="" class="videoThumb">
                                    <p class="time">
                                        ${vidTime}
                                    </p>
                            </div>
                            <div class="bottom">
                                <div class="left">
                                    <label for="statusComment${itemNumber + nextNumber + i}" onclick="document.querySelector('#statusComment${itemNumber + nextNumber + i}').classList.toggle('active')">이 동영상을...</label>

                                    <div class="statusComment" id="statusComment${itemNumber + nextNumber + i}">
                                        <div value="already">
                                            <img src="./assets/Img/icons/videoCommentIcon/already.svg" alt="">
                                            이미봤어요
                                        </div>
                                        <div value="noInterest">
                                            <img src="./assets/Img/icons/videoCommentIcon/noInterest.svg" alt="">
                                            관심없어요
                                        </div>
                                        <div value="save">
                                            <img src="./assets/Img/icons/videoCommentIcon/save.svg" alt="">
                                            저장할래요
                                        </div>
                                    </div>
                                </div>
                                <div class="right">
                    <span class="like">
                        <span class="text">좋아요&nbsp;</span>
                        <span class="likeCount">${likeCount}개</span>
                    </span>
                    <span>·</span>
                    <span class="comment">
                        <span class="text">댓글&nbsp;</span>
                        <span class="commentCount">${commentCount}개</span>
                    </span>
                </div>
                            </div>
                            <div class="icons">
                <div class="like">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                        <g id="icons_like" data-name="icons/like" transform="translate(-1)">
                          <rect id="bg" width="40" height="40" transform="translate(1 0)" fill="none"/>
                          <path id="path" d="M23.573,7.864A9.121,9.121,0,0,1,30.364,5C36.336,5,41,9.827,41,16.7c0,4.091-2.045,7.527-5.727,11.209-.818.818-3.273,3.027-3.355,3.109-.327.327-.736.655-1.145,1.064-.491.409-1.064.9-1.555,1.309-1.145.982-2.373,1.882-3.6,2.782a13.987,13.987,0,0,0-1.145.9,4.847,4.847,0,0,0-.491.327,1.6,1.6,0,0,1-1.882,0,4.847,4.847,0,0,0-.491-.327c-.327-.245-.736-.573-1.145-.9-1.227-.9-2.455-1.882-3.6-2.782-.573-.491-1.064-.9-1.555-1.309-.409-.327-.736-.736-1.145-1.064-.164-.082-2.618-2.291-3.436-3.109C6.964,24.227,5,20.791,5,16.7,5,9.827,9.664,5,15.636,5a9.121,9.121,0,0,1,6.791,2.864A3.78,3.78,0,0,1,23,8.436a3.78,3.78,0,0,1,.573-.573Zm.082,25.773c1.145-.9,2.373-1.8,3.436-2.7a11.9,11.9,0,0,0,1.473-1.309,12.584,12.584,0,0,0,1.064-.982c.164-.164,2.618-2.373,3.355-3.109,3.109-3.109,4.745-5.809,4.745-8.836,0-5.073-3.273-8.427-7.364-8.427a6.445,6.445,0,0,0-4.5,1.882A7.476,7.476,0,0,0,24.8,11.464c-.164.245-.245.491-.327.573a1.657,1.657,0,0,1-3.027,0,6.35,6.35,0,0,0-.327-.573,8.261,8.261,0,0,0-1.064-1.309,6.109,6.109,0,0,0-4.418-1.882c-4.091,0-7.364,3.355-7.364,8.427,0,3.027,1.636,5.727,4.745,8.918.736.736,3.191,2.945,3.355,3.109a12.584,12.584,0,0,0,1.064.982c.491.409.982.818,1.473,1.309,1.064.9,2.291,1.8,3.436,2.7.245.164.409.327.655.491a2.206,2.206,0,0,1,.655-.573Z" transform="translate(-2 -1)" fill="#78849e"/>
                        </g>
                      </svg>
                    <span class="text">좋아요</span>
                </div>
                <div class="comment">
                    <img src="./assets/Img/icons/feedComment.svg" alt="">
                    <span class="text">댓글 달기</span>
                </div>
                <div class="share">
                    <img src="./assets/Img/icons/share.svg" alt="">
                    <span class="text">공유하기</span>
                </div>
            </div>
                        </div>`;
                    $(".sectionVideoLists").append(block);
                    }
            } catch (e) {
                alert(e);
            } finally {
                nextNumber = nextNumber + item;
            }}
        });
    
    const blocks = document.querySelectorAll('.sectionVideoLists .block');
    const popupBtn = document.querySelectorAll('.sectionVideoLists .block .bottom .left label')
    const popupBtnClicked = document.querySelector('.sectionVideoLists .block .bottom .left label.active');
    $(document).on('click', popupBtn, () => {
        const _popupBtn = document.querySelectorAll('.sectionVideoLists .block .bottom .left label');
        const popup = document.querySelectorAll('.sectionVideoLists .block .bottom .statusComment');
        for ( let i = 0; i < _popupBtn.length; i ++ ) {
            _popupBtn[i].addEventListener('click', () => {
                for ( let k = 0; k < _popupBtn.length; k ++ ) {
                    popup[k].classList.remove('active');
                    _popupBtn[k].classList.remove('active');
                }
                popup[i].classList.add('active');
                _popupBtn[i].classList.add('active');
            })
        }
    })
    $(document).on('click', popupBtnClicked, () => {
        const _popupBtnClicked = document.querySelector('.sectionVideoLists .block .bottom .left label.active');
        const popup = document.querySelectorAll('.sectionVideoLists .block .bottom .statusComment');
        _popupBtnClicked.addEventListener('click', () => {
            _popupBtnClicked.classList.remove('active');
            for ( let i = 0; i < popup.length; i ++ ) {
                popup[i].classList.remove('active');
            }
        })
    })
}