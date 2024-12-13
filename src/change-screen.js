function changeScreen(screenName){
    const contentShow = document.querySelector('.content-show');
    const headerShow = document.querySelector('.header-show');

    const headerTarget = document.querySelector(`.header-${screenName}`);
    const contentTarget = document.querySelector(`.content-${screenName}`);

    headerShow.classList.remove('header-show');
    contentShow.classList.remove('content-show');

    headerTarget.classList.add('header-show');
    contentTarget.classList.add('content-show');
}