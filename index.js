const navBar = document.querySelector('.nav-bar');
window.onscroll = function(){
    const scrollBar = scrollY;
    if(scrollBar>=200){
        navBar.classList.add('change-nav-bar-bg-color');
    }
    else{
        navBar.classList.remove('change-nav-bar-bg-color')
    }
}