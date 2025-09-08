// script.js

document.addEventListener('DOMContentLoaded', function() {
    console.log("House On The Clouds page loaded.");

    const getInTouchButton = document.querySelector('.get-in-touch-button');
    if (getInTouchButton) {
        getInTouchButton.addEventListener('click', function() {
            alert('Get In Touch button clicked! Implement your contact logic here.');
        });
    }

    const moreNavItem = document.querySelector('.nav-item.dropdown');
    if (moreNavItem) {
        moreNavItem.addEventListener('click', function() {
            alert('"More" menu clicked! Implement dropdown logic here.');
        });
    }

    const watchFilmsButton = document.querySelector('.watch-films-button');
     if (watchFilmsButton) {
        watchFilmsButton.addEventListener('click', function() {
            alert('Watch Films button clicked! Implement film viewing logic here.');
        });
    }

    const ibtidaButton = document.querySelector('.ibtida-button');
     if (ibtidaButton) {
        ibtidaButton.addEventListener('click', function() {
            alert('Visit Ibtida.Co button clicked! Implement redirect logic here.');
        });
    }

     const blogButton = document.querySelector('.photography-blog-button');
     if (blogButton) {
        blogButton.addEventListener('click', function() {
            alert('Photography Blog button clicked! Implement blog viewing logic here.');
        });
    }

});

  document.addEventListener("DOMContentLoaded", () => {
            const hamburger = document.querySelector(".hamburger");
            const nav = document.querySelector(".navigation");

            hamburger.addEventListener("click", () => {
                nav.classList.toggle("active");
            });
            });
