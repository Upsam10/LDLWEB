document.addEventListener('DOMContentLoaded', () => {
    // Welcome screen flowers
    const welcomeFlowers = document.createElement('div');
    welcomeFlowers.className = 'welcome-flowers';
    document.getElementById('welcomeScreen').appendChild(welcomeFlowers);

    function createWelcomeFlower() {
        const flower = document.createElement('div');
        flower.innerHTML = '🌸';
        flower.className = 'welcome-flower';
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.top = Math.random() * 100 + 'vh';
        flower.style.animationDelay = Math.random() * 2 + 's';
        welcomeFlowers.appendChild(flower);

        flower.addEventListener('animationend', () => {
            flower.remove();
        });
    }

    // Create initial welcome flowers
    for (let i = 0; i < 15; i++) {
        createWelcomeFlower();
    }

    // Create welcome flowers periodically
    const welcomeFlowerInterval = setInterval(() => {
        createWelcomeFlower();
    }, 300);

    // Remove welcome screen and stop welcome flowers after 3 seconds
    setTimeout(() => {
        const welcomeScreen = document.getElementById('welcomeScreen');
        welcomeScreen.style.display = 'none';
        clearInterval(welcomeFlowerInterval);
    }, 3500);

    // Background falling flowers
    function createFallingFlower() {
        const flower = document.createElement('div');
        flower.innerHTML = '🌸';
        flower.className = 'falling-flower';
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.getElementById('backgroundFlowers').appendChild(flower);

        flower.addEventListener('animationend', () => {
            flower.remove();
        });
    }

    // Create falling flowers periodically
    setInterval(createFallingFlower, 300);

    // Click flower effect with improved petal system
    document.addEventListener('click', (e) => {
        const colors = ['#ff69b4', '#ff1493', '#db7093'];
        
        // Create center of the flower
        const flowerCenter = document.createElement('div');
        flowerCenter.style.position = 'absolute';
        flowerCenter.style.left = (e.pageX - 10) + 'px';
        flowerCenter.style.top = (e.pageY - 10) + 'px';
        flowerCenter.style.width = '20px';
        flowerCenter.style.height = '20px';
        flowerCenter.style.backgroundColor = '#ffd700';
        flowerCenter.style.borderRadius = '50%';
        flowerCenter.style.zIndex = '11';
        flowerCenter.style.animation = 'flowerPop 2s ease-out forwards';
        document.body.appendChild(flowerCenter);

        // Create petals
        for (let i = 0; i < 8; i++) {
            const petal = document.createElement('div');
            petal.className = 'flower';
            petal.style.left = (e.pageX - 20) + 'px';
            petal.style.top = (e.pageY - 20) + 'px';
            petal.style.animation = 'flowerPop 2s ease-out forwards';
            petal.style.transform = `rotate(${i * 45}deg)`;
            
            // Randomize petal colors
            const petalBefore = document.createElement('style');
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            petalBefore.textContent = `
                .flower:nth-child(${i + 1})::before,
                .flower:nth-child(${i + 1})::after {
                    background: ${randomColor};
                }
            `;
            document.head.appendChild(petalBefore);
            
            document.body.appendChild(petal);

            // Remove petal after animation
            setTimeout(() => {
                petal.remove();
                petalBefore.remove();
            }, 2000);
        }

        // Remove flower center after animation
        setTimeout(() => {
            flowerCenter.remove();
        }, 2000);
    });

    // Add hover effect to locations
    document.querySelectorAll('.location').forEach(location => {
        location.addEventListener('mouseenter', () => {
            const flower = document.createElement('div');
            flower.innerHTML = '🌸';
            flower.style.position = 'absolute';
            flower.style.fontSize = '1.5rem';
            flower.style.animation = 'flowerPop 1s ease-out forwards';
            flower.style.left = location.offsetLeft + 'px';
            flower.style.top = location.offsetTop + 'px';
            document.body.appendChild(flower);

            setTimeout(() => {
                flower.remove();
            }, 1000);
        });
    });
});