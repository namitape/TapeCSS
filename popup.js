// 設定を読み込み
async function loadSettings() {
    const settings = await window.chrome.storage.sync.get([
      "twitterEnabled",
      "twitterShadow",
      "twitterAccent",
      "githubEnabled",
      "githubDarkness",
      "githubHighlight",
      "youtubeEnabled",
      "youtubeRadius",
    ])
  
    // Twitter設定
    document.getElementById("twitter-toggle").checked = settings.twitterEnabled || false
    document.getElementById("twitter-shadow").value = settings.twitterShadow || 50
    document.getElementById("twitter-shadow-value").textContent = `${settings.twitterShadow || 50}%`
    document.getElementById("twitter-accent").value = settings.twitterAccent || "#1da1f2"
  
    // GitHub設定
    document.getElementById("github-toggle").checked = settings.githubEnabled || false
    document.getElementById("github-darkness").value = settings.githubDarkness || 20
    document.getElementById("github-darkness-value").textContent = `${settings.githubDarkness || 20}%`
    document.getElementById("github-highlight").value = settings.githubHighlight || "#f6f8fa"
  
    // YouTube設定
    document.getElementById("youtube-toggle").checked = settings.youtubeEnabled || false
    document.getElementById("youtube-radius").value = settings.youtubeRadius || 8
    document.getElementById("youtube-radius-value").textContent = `${settings.youtubeRadius || 8}px`
  }
  
  // 設定を保存
  async function saveSettings() {
    const settings = {
      twitterEnabled: document.getElementById("twitter-toggle").checked,
      twitterShadow: document.getElementById("twitter-shadow").value,
      twitterAccent: document.getElementById("twitter-accent").value,
      githubEnabled: document.getElementById("github-toggle").checked,
      githubDarkness: document.getElementById("github-darkness").value,
      githubHighlight: document.getElementById("github-highlight").value,
      youtubeEnabled: document.getElementById("youtube-toggle").checked,
      youtubeRadius: document.getElementById("youtube-radius").value,
    }
  
    await window.chrome.storage.sync.set(settings)
  
    // アクティブなタブにメッセージを送信
    const [tab] = await window.chrome.tabs.query({ active: true, currentWindow: true })
    window.chrome.tabs.sendMessage(tab.id, { action: "updateStyles", settings })
  }
  
  // イベントリスナーを設定
  document.addEventListener("DOMContentLoaded", () => {
    loadSettings()
  
    // すべての入力要素にイベントリスナーを追加
    const inputs = document.querySelectorAll("input")
    inputs.forEach((input) => {
      input.addEventListener("change", saveSettings)
  
      // レンジスライダーの値表示を更新
      if (input.type === "range") {
        input.addEventListener("input", (e) => {
          const valueDisplay = document.getElementById(e.target.id + "-value")
          if (valueDisplay) {
            let suffix = "%"
            if (e.target.id.includes("radius")) suffix = "px"
            valueDisplay.textContent = e.target.value + suffix
          }
        })
      }
    })
  })
  