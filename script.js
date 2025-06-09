function tryTranslate() {
  const text = document.getElementById("trialInput").value;
  const source = document.getElementById("trialSource").value;
  const target = document.getElementById("trialTarget").value;

  fetch("https://libretranslate.de/translate", {
    method: "POST",
    body: JSON.stringify({
      q: text,
      source: source,
      target: target,
      format: "text"
    }),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("trialResult").innerText = data.translatedText;
  })
  .catch(() => {
    document.getElementById("trialResult").innerText = "Erreur lors de la traduction.";
  });
}
