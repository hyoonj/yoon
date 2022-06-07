const   body = document.querySelector('body'),
        nav = document.querySelector('nav'),
        modeToggle = document.querySelector('.dark-light'),
        searchToggle = document.querySelector('.searchToggle'),
        sidebarOpen = document.querySelector('.sidebarOpen'),
        sidebarClose = document.querySelector('.sidebarClose')
        

        let getMode = localStorage.getItem("mode");{
            if (getMode && getMode === "dark-mode") {
                body.classList.toggle('dark');
                modeToggle.classList.toggle('active');
            }
        }
        

        modeToggle.addEventListener('click', () => {
            modeToggle.classList.toggle('active');
            body.classList.toggle('dark');

            if (!body.classList.contains("dark")) {
                localStorage.setItem("mode","light-mode");
            } else {
                localStorage.setItem("mode","dark-mode");
            }
        });

        searchToggle.addEventListener('click', () => {
            searchToggle.classList.toggle('active');
        })

        sidebarOpen.addEventListener('click', () => {
            nav.classList.toggle('active');
        })

        body.addEventListener('click', e => {
            let clickedElm = e.target;

            if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
                nav.classList.remove("active");
            }
        })