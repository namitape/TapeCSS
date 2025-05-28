// 拡張機能がインストールされた時の処理
window.chrome.runtime.onInstalled.addListener(() => {
    console.log("Custom CSS Styler がインストールされました")
  
    // デフォルト設定を保存
    window.chrome.storage.sync.set({
      twitterEnabled: false,
      twitterShadow: 50,
      twitterAccent: "#1da1f2",
      githubEnabled: false,
      githubDarkness: 20,
      githubHighlight: "#f6f8fa",
      youtubeEnabled: false,
      youtubeRadius: 8,
    })
  })
  
  // タブが更新された時の処理
  window.chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url) {
      // 対象サイトかチェック
      const targetSites = ["twitter.com", "x.com", "github.com", "youtube.com"]
      const isTargetSite = targetSites.some((site) => tab.url.includes(site))
  
      if (isTargetSite) {
        // 設定を読み込んでコンテンツスクリプトに送信
        window.chrome.storage.sync.get(null, (settings) => {
          window.chrome.tabs.sendMessage(tabId, {
            action: "updateStyles",
            settings: settings,
          })
        })
      }
    }
  })
  