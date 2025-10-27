document.getElementById("redeemBtn").addEventListener("click", async () => {
  const code = document.getElementById("codeInput").value.trim();
  const resultMessage = document.getElementById("resultMessage");

  if (!code) {
    resultMessage.textContent = "Please enter a code.";
    resultMessage.style.color = "orange";
    return;
  }

  resultMessage.textContent = "Checking...";
  resultMessage.style.color = "gray";

  const res = await fetch("/api/redeem", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code })
  });
  const data = await res.json();

  resultMessage.textContent = data.message;
  resultMessage.style.color = data.success ? "limegreen" : "red";
});
