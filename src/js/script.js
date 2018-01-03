(function() {
    'strict mode';
    
    /*
        @Prologue
    */
    
    var icon = document.getElementsByTagName('header')[0];
    var image = document.getElementsByClassName('hbmenu1')[0];
    
    var hamburgerMenuIcon = function() {
        icon.classList.toggle('is-active');
        image.classList.toggle('is-active');
    }
    
    icon.addEventListener('click', function(){
        hamburgerMenuIcon();
    });
    
})();