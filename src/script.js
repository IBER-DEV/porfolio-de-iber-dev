   // Theme Toggle
   const themeToggle = document.getElementById('theme-toggle');
   const themeIcon = document.getElementById('theme-icon');

   if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
       document.documentElement.classList.add('dark');
       themeIcon.classList.replace('fa-moon', 'fa-sun');
   } else {
       document.documentElement.classList.remove('dark');
       themeIcon.classList.replace('fa-sun', 'fa-moon');
   }

   themeToggle.addEventListener('click', () => {
       if (document.documentElement.classList.contains('dark')) {
           document.documentElement.classList.remove('dark');
           localStorage.setItem('color-theme', 'light');
           themeIcon.classList.replace('fa-sun', 'fa-moon');
       } else {
           document.documentElement.classList.add('dark');
           localStorage.setItem('color-theme', 'dark');
           themeIcon.classList.replace('fa-moon', 'fa-sun');
       }
   });

   // Mobile Menu Toggle
   const mobileMenuButton = document.getElementById('mobile-menu-button');
   const mobileMenu = document.getElementById('mobile-menu');

   mobileMenuButton.addEventListener('click', () => {
       mobileMenu.classList.toggle('hidden');
   });

   // Smooth Scrolling for Navigation
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', function (e) {
           e.preventDefault();

           // Close mobile menu if open
           mobileMenu.classList.add('hidden');

           // Update active nav link
           document.querySelectorAll('.nav-link').forEach(link => {
               link.classList.remove('active');
           });
           this.classList.add('active');

           // Scroll to section
           const targetId = this.getAttribute('href');
           const targetElement = document.querySelector(targetId);
           if (targetElement) {
               window.scrollTo({
                   top: targetElement.offsetTop - 80,
                   behavior: 'smooth'
               });
           }
       });
   });
   // ScrollReveal animations
ScrollReveal().reveal('#home', {
    delay: 200,
    distance: '40px',
    origin: 'bottom',
    duration: 1000,
    easing: 'ease-in-out',
    reset: false
});

ScrollReveal().reveal('#about', {
    delay: 200,
    distance: '40px',
    origin: 'bottom',
    duration: 1000,
    easing: 'ease-in-out',
    reset: false
});

ScrollReveal().reveal('#projects .project-card', {
    interval: 100,
    distance: '20px',
    origin: 'bottom',
    duration: 800,
    easing: 'ease-in-out',
    reset: false
});

ScrollReveal().reveal('#skills > div', {
    interval: 100,
    distance: '20px',
    origin: 'bottom',
    duration: 800,
    easing: 'ease-in-out',
    reset: false
});

ScrollReveal().reveal('#contact', {
    delay: 200,
    distance: '40px',
    origin: 'bottom',
    duration: 1000,
    easing: 'ease-in-out',
    reset: false
});


   // Update active nav link on scroll
   window.addEventListener('scroll', () => {
       const scrollPosition = window.scrollY + 100;

       document.querySelectorAll('section').forEach(section => {
           const sectionTop = section.offsetTop;
           const sectionHeight = section.offsetHeight;
           const sectionId = section.getAttribute('id');

           if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
               document.querySelectorAll('.nav-link').forEach(link => {
                   link.classList.remove('active');
                   if (link.getAttribute('href') === `#${sectionId}`) {
                       link.classList.add('active');
                   }
               });
           }
       });
   });

   // Project Filtering
   const filterButtons = document.querySelectorAll('.project-filter');
   const projectCards = document.querySelectorAll('.project-card');

   filterButtons.forEach(button => {
       button.addEventListener('click', () => {
           // Update active filter button
           filterButtons.forEach(btn => {
               btn.classList.remove('bg-blue-500', 'text-white');
               btn.classList.add('bg-gray-200', 'dark:bg-slate-700', 'hover:bg-gray-300', 'dark:hover:bg-slate-600');
           });
           button.classList.add('bg-blue-500', 'text-white');
           button.classList.remove('bg-gray-200', 'dark:bg-slate-700', 'hover:bg-gray-300', 'dark:hover:bg-slate-600');

           // Filter projects
           const filter = button.getAttribute('data-filter');

           projectCards.forEach(card => {
               if (filter === 'all' || card.getAttribute('data-category') === filter) {
                   card.style.display = 'block';
               } else {
                   card.style.display = 'none';
               }
           });
       });
   });