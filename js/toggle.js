        const toggleButton = document.querySelector('#toggle-button')
        let darkMode = localStorage.getItem("theme")
        if (darkMode === "dark") enableDarkMode()
        toggleButton.addEventListener('click', (e) => {
            darkMode = localStorage.getItem('theme');
            if (darkMode === 'dark') {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        });
        
        function enableDarkMode() {
            document.getElementById("toggle-button").innerHTML = "☾&nbsp"
            document.body.classList.add("dark")
            localStorage.setItem('theme', 'dark');
        }
        
        function disableDarkMode() {
            document.getElementById("toggle-button").innerHTML = "☀"
            document.body.classList.remove("dark")
            localStorage.setItem('theme', 'light');
        }