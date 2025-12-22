document.addEventListener("DOMContentLoaded", () => {

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const wrapper = document.querySelector('.content-wrapper');
    const baseWidth = 1920; 
    const baseHeight = 2180;

    let resizeFrame;



function resizeSite() {
    const wrapper = document.querySelector('.content-wrapper');
    if (!wrapper) return;


    const masaustuOrani = 0.75; 

   
    const mobilOrani = 1.0; 

    
    const gamesPageOffset = 0; 
    
  

    const screenWidth = document.documentElement.clientWidth || window.innerWidth;
    const baseWidth = 1920; 
    const baseHeight = 2180;
    
    const isGamesPage = document.body.classList.contains('page-games');

    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => {
        let scale;



        if (screenWidth < 1024) {
            
            scale = (screenWidth / baseWidth) * mobilOrani;
        } else {
            
            scale = (screenWidth / baseWidth) * masaustuOrani; 
     
            if (scale > 1.0) scale = 1.0;
        }


        
        wrapper.style.transformOrigin = 'top center'; 
        wrapper.style.left = '50%';


        if (isGamesPage) {
            wrapper.style.top = `${gamesPageOffset}px`;
        } else {
            wrapper.style.top = '50px';
        }

        wrapper.style.transform = `translateX(-50%) scale(${scale})`;


        const contentHeight = baseHeight * scale;
        const heightAdjustment = isGamesPage ? gamesPageOffset : 0;
        

        const finalHeight = contentHeight + heightAdjustment + 50; 

        if (finalHeight < window.innerHeight) {
             document.body.style.height = '100vh';
        } else {
             document.body.style.height = `${finalHeight}px`;
        }
    });
}
    resizeSite();
    
    window.addEventListener('resize', resizeSite);
    
    window.addEventListener('load', () => {
        window.scrollTo(0, 0);
        resizeSite();
    });
 
    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            window.scrollTo(0, 0);
            resizeSite();
        }
    });


    const bunnyImg = document.getElementById('main-bunny');
    if (bunnyImg) {
        bunnyImg.addEventListener('click', function() {
            
            this.src = 'assets/main/BunExclamation.gif';
            this.style.position = 'relative'; 
            this.style.top = '-15px';
            this.style.left = '-45px'; 
            this.style.transform = 'scale(1.1)'; 

            setTimeout(() => {
                this.src = 'assets/main/Bun.gif';
                this.style.top = '0px';
                this.style.left = '0px';
                this.style.transform = ''; 
                
            }, 1500); 
        });
    }
});