document.addEventListener('DOMContentLoaded', () => {
            // Get references to navigation buttons and the content slider
            const navExp = document.getElementById('navExp');
            const navProjects = document.getElementById('navProj');
            const navArt = document.getElementById('navArt');
            const contentSlider = document.getElementById('contentSlider');

            // Get references to content sections
            const sectionExp = document.getElementById('sectionExp');
            const sectionProjects = document.getElementById('sectionProj');
            const sectionArt = document.getElementById('sectionArt');

            // Array of all navigation buttons for easier iteration
            const navButtons = [navExp, navProj, navArt];

            /**
             * Scrolls the content slider to the specified section element.
             * Uses 'scrollIntoView' with 'behavior: "smooth"' for a smooth animation.
             * 'inline: "start"' ensures the section aligns to the left edge of the scrollable area.
             * @param {HTMLElement} sectionElement - The HTML element of the target section.
             */
            function scrollToSection(sectionElement) {
                sectionElement.scrollIntoView({ behavior: 'smooth', inline: 'start' });
            }

            /**
             * Updates the active state of navigation buttons.
             * It removes the 'active' class from all buttons and then adds it
             * to the button that was clicked.
             * @param {HTMLElement} clickedButton - The navigation button that was clicked.
             */
            function updateActiveNavButton(clickedButton) {
                navButtons.forEach(button => {
                    button.classList.remove('active'); // Remove 'active' from all buttons
                });
                clickedButton.classList.add('active'); // Add 'active' to the clicked button
            }

            // Add click event listeners to each navigation button
            navExp.addEventListener('click', () => {
                scrollToSection(sectionExp);
                updateActiveNavButton(navExp);
            });

            navProjects.addEventListener('click', () => {
                scrollToSection(sectionProj);
                updateActiveNavButton(navProj);
            });

            navArt.addEventListener('click', () => {
                scrollToSection(sectionArt);
                updateActiveNavButton(navArt);
            });

            // Set the initial active state for the "Experience" button when the page loads
            updateActiveNavButton(navExp);
        });