// LIST_CHANGE
const videoSelect = document.querySelectorAll('.sectionVideo .titleWrapper .sectionTitle');
const videoContainer = document.querySelector('.sectionVideo .vidContainer');
const liveContainer = document.querySelector('.sectionVideo .liveContainer');

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


// INFINITE_SCROLL
const page = 10;
const scrName = '스트리머';
const scrTime = '00:00';
const scrLook = '조회 000만 회';
const scrDate = '0일 전';
const scrTitle = '영상제목';
const list = `
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

$(window).scroll( () => {
    if ($(window).scrollTop() === $(document).height() - $(window).height()) {
        for ( let i = 0; i < 10; i ++ ) {
            $(".sectionVideo .listContainer.active").append(list);
        }
    }
})