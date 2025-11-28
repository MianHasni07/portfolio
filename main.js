// var typed = newtyped(".text",{
//     Strings: ["Frontend Developer" , "Web Designer" , "Customize Web Designer"],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:1000,
//     loop:true

// })

// hero section animation
const texts = ["Web Developer", "Frontend Developer", "Website Designer", "MS Office Expert", "Database Expert"];
let index = 0;

function changeText() {
  const textElement = document.getElementById("animated-text");
  index = (index + 1) % texts.length;
  textElement.style.opacity = 0;

  setTimeout(() => {
    textElement.textContent = texts[index];
    textElement.style.opacity = 1;
  }, 500);
}

setInterval(changeText, 2500);
// next
document.addEventListener('DOMContentLoaded', () => {

    // Animate Linear Progress Bars
    const linearBars = document.querySelectorAll('.progress-fill');
    linearBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = `${progress}%`;
    });

    // Animate Circular Progress Bars (SVG)
    const circularBars = document.querySelectorAll('.progress-ring-circle-fill');
    circularBars.forEach(circle => {
        const progress = circle.getAttribute('data-progress');
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (progress / 100) * circumference;

        circle.style.strokeDashoffset = circumference; // Set initial state
        setTimeout(() => {
            circle.style.strokeDashoffset = offset; // Animate to final state
        }, 100); // Small delay to ensure initial state is rendered
    });
});
