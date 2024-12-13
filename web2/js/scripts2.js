// Theme Toggle
document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("vibrant-theme");
});

// Animated Graphs (AI/ML Section)
Plotly.newPlot('ai-graph', [{
    x: ['Model A', 'Model B', 'Model C'],
    y: [90, 80, 95],
    type: 'bar'
}], {
    title: 'Model Accuracy',
    xaxis: { title: 'Models' },
    yaxis: { title: 'Accuracy (%)' }
});

// Robot Movement
const robot = document.getElementById("robot");
window.addEventListener("scroll", () => {
    const yOffset = window.pageYOffset / 10;
    robot.style.transform = `translateY(${yOffset}px)`;
});
