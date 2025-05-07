function sendMelding() {
    alert("Melding sendt!");
}

function darkmode() {
    document.body.classList.toggle("dark-mode");
}

document.getElementById('comment-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.getElementById('comment').value;
    const commentSection = document.getElementById('comment-section');
    const p = document.createElement('p');
    p.textContent = input;
    commentSection.appendChild(p);
    document.getElementById('comment').value = '';
});