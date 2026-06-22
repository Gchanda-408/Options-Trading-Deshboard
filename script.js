document.addEventListener("DOMContentLoaded", function () {

    const nifty = document.getElementById("nifty");
    const banknifty = document.getElementById("banknifty");
    const signal = document.getElementById("signal");

    function updateDashboard() {

        const niftyValue = (24800 + Math.random() * 100).toFixed(2);
        const bankValue = (56000 + Math.random() * 150).toFixed(2);

        nifty.innerText = niftyValue;
        banknifty.innerText = bankValue;

        if (Math.random() > 0.5) {
            signal.innerText = "BUY CALL 🟢";
            signal.style.color = "#00ff66";
        } else {
            signal.innerText = "BUY PUT 🔴";
            signal.style.color = "#ff4444";
        }
    }

    updateDashboard();

    setInterval(updateDashboard, 5000);

});
