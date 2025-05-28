// CSSスタイルを管理するクラス
class CustomStyleManager {
    constructor() {
      this.styleElement = null
      this.init()
    }
  
    init() {
      // 設定を読み込んでスタイルを適用
      window.chrome.storage.sync.get(null, (settings) => {
        this.applyStyles(settings)
      })
  
      // メッセージリスナーを設定
      window.chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.action === "updateStyles") {
          this.applyStyles(message.settings)
        }
      })
    }
  
    applyStyles(settings) {
      // 既存のスタイル要素を削除
      if (this.styleElement) {
        this.styleElement.remove()
      }
  
      // 新しいスタイル要素を作成
      this.styleElement = document.createElement("style")
      this.styleElement.id = "custom-css-styler"
  
      let css = ""
      const hostname = window.location.hostname
  
      // Twitter/X用のCSS
      if ((hostname.includes("twitter.com") || hostname.includes("x.com")) && settings.twitterEnabled) {
        const shadowOpacity = settings.twitterShadow / 100
        const accentColor = settings.twitterAccent
  
        css += `
          /* Twitter カスタムスタイル */
          [data-testid="tweet"] {
            box-shadow: 0 2px 8px rgba(0, 0, 0, ${shadowOpacity}) !important;
            border-radius: 12px !important;
            margin-bottom: 12px !important;
          }
          
          [data-testid="like"], [data-testid="retweet"], [data-testid="reply"] {
            color: ${accentColor} !important;
          }
          
          [role="button"][data-testid="Tweet"] {
            background-color: ${accentColor} !important;
          }
          
          /* ホバーエフェクト */
          [data-testid="tweet"]:hover {
            transform: translateY(-2px) !important;
            transition: all 0.2s ease !important;
          }
        `
      }
  
      // GitHub用のCSS
      if (hostname.includes("github.com") && settings.githubEnabled) {
        const darknessOpacity = settings.githubDarkness / 100
        const highlightColor = settings.githubHighlight
  
        css += `
          /* GitHub カスタムスタイル */
          body {
            background-color: rgba(0, 0, 0, ${darknessOpacity}) !important;
          }
          
          .highlight {
            background-color: ${highlightColor} !important;
          }
          
          .repository-content {
            border-radius: 8px !important;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
          }
          
          .btn-primary {
            background: linear-gradient(135deg, #28a745, #20c997) !important;
            border: none !important;
          }
        `
      }
  
      // YouTube用のCSS
      if (hostname.includes("youtube.com") && settings.youtubeEnabled) {
        const borderRadius = settings.youtubeRadius
  
        css += `
          /* YouTube カスタムスタイル */
          .html5-video-player {
            border-radius: ${borderRadius}px !important;
            overflow: hidden !important;
          }
          
          ytd-thumbnail {
            border-radius: ${borderRadius}px !important;
            overflow: hidden !important;
          }
          
          #player-container {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
          }
          
          /* サムネイルのホバーエフェクト */
          ytd-thumbnail:hover {
            transform: scale(1.02) !important;
            transition: transform 0.2s ease !important;
          }
        `
      }
  
      this.styleElement.textContent = css
      document.head.appendChild(this.styleElement)
    }
  }
  
  // ページが読み込まれたら初期化
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      new CustomStyleManager()
    })
  } else {
    new CustomStyleManager()
  }
  