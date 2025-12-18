document.addEventListener("DOMContentLoaded", () => {

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const wrapper = document.querySelector('.content-wrapper');
    const baseWidth = 1920; 
    const baseHeight = 2180;


    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    function resizeSite() {
        if (!wrapper) return;

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        let scale;


        if (screenWidth < 1024) {
            

            document.body.style.height = '100vh';
            document.body.style.overflow = 'hidden';
            

            const mobileFocusWidth = 1100; 
            scale = screenWidth / mobileFocusWidth;
            
            if (scale > 0.85) scale = 0.85;


            wrapper.style.transformOrigin = 'center center';
            wrapper.style.top = '50%';
            wrapper.style.left = '50%';

            wrapper.style.transform = `translate(-50%, -50%) scale(${scale})`;

        } 

        else {
            
            document.body.style.height = 'auto';
            document.body.style.overflowY = 'auto';
            document.body.style.overflowX = 'hidden';

            scale = (screenWidth / baseWidth) * 0.80; 

            if (scale > 1.0) scale = 1.0;

            wrapper.style.transformOrigin = 'top center';
            wrapper.style.top = '0px';
            wrapper.style.left = '50%';

            wrapper.style.transform = `translateX(-50%) scale(${scale})`;

            document.body.style.height = `${(baseHeight * scale) + 50}px`;
        }
    }


    resizeSite();
    

    window.addEventListener('resize', debounce(resizeSite, 50));
    

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
            this.style.top = '0px';
            this.style.left = '-40px'; 
            this.style.transform = 'scale(1.02)'; 
            setTimeout(() => {
                this.src = 'assets/main/Bun.gif';
                this.style.top = '0px';
                this.style.left = '0px';
                this.style.transform = 'scale(1)'; 
            }, 1500); 
        });
    }
});