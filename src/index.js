window.onload = () => {
    colorAnswerItems();
}

function colorAnswerItems() {
    let colors = ["#73EC8B", "#15B392", "#D2FF72", "#54C392"]
    let bgColors = [...colors].reverse();
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`answer-${i}`).style.backgroundColor = colors[i - 1];
        document.getElementById(`answer-${i}`).style.borderColor = bgColors[i - 1];
    }
    console.log(colors);
    console.log(bgColors);
}