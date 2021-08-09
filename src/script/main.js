

$(function(){
    const $gallery__list = document.querySelector('.gallery__listContainer');
    const $gallery__card = document.querySelector('.gallery__card');
    const $gallery__close = document.querySelector('.gallery__close');
    
    $gallery__card.addEventListener('click', cardClick_On, false);
    $gallery__close.addEventListener('click', cardClick_Off, false);
    // 카드 클릭
    function cardClick_On()
    {
        const label = "cardClick_On";

        // 처리 속도 계산
        console.time(label);

        const $this = this;
        console.dir($this);

        // 토글
        $gallery__list.classList.toggle('exit');
        setTimeout(()=>{
            $gallery__close.classList.toggle('exit');
        },100)

        setTimeout(() => {
            $gallery__list.classList.toggle('gallery__listContainer--hidden');
            $gallery__close.classList.toggle('gallery__listContainer--hidden');
        },300);
        // 처리 속도 계산 끝
        console.timeEnd(label);
    }
    
    function cardClick_Off()
    {
        const label = "cardClick_Off";

        // 처리 속도 계산
        console.time(label);

        const $this = this;
        console.dir($this);

        // 토글
        $gallery__list.classList.toggle('gallery__listContainer--hidden');
        setTimeout(()=>{
            $gallery__close.classList.toggle('gallery__listContainer--hidden');
        },100)
        

        setTimeout(() => {
            $gallery__list.classList.toggle('exit');
            $gallery__close.classList.toggle('exit');
        },500);
        // 처리 속도 계산 끝
        console.timeEnd(label);
    }
})

