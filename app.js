// Get The URL
const site = window.location.hostname

//alert("Injector - The Javascript has been injected to: " + site + "!")

// Add Custom CSS - Function
const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css

//Create Custom Element - Function
function Create_Custom_Element(tag, attr_tag, value) {
    const custom_element = document.createElement(tag)
    custom_element.setAttribute(attr_tag, attr_name)
    custom_element.innerHTML = value
    document.body.append(custom_element)
}

// JS Codes For X.com
if (site.includes("x.com")) { 
    alert("確認")
    Add_Custom_Style(`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Noto+Sans+JP:wght@100..900&display=swap');


/* カスタマイズできるぜ */
:root {
  --sub-color: #0000001f;
  --max-width: 700px
}

/* デフォルト */
* {
  font-family: "Inter", "Noto Sans JP", sans-serif !important;
  line-height: 1.6 !important;
  border-width: 0px !important;
  transition: .3s !important;
}

/* いらん */
div[data-testid="DMDrawer"]{ display:none; }
div[class="css-175oi2r r-105ug2t r-1867qdf r-1upvrn0 r-13awgt0 r-1ce3o0f r-1udh08x r-u8s1d r-13qz1uu r-173mn98 r-1e5uvyk r-6026j r-1xsrhxi r-rs99b7 r-12jitg0"]{ display:none; }
div[class="css-175oi2r r-1awozwy r-6koalj r-18u37iz r-bnwqim"]{
    display:none;
}

/* -------------------------------------------薄いカラー付け------------------------------------------- */

/* -------------------------------------------コラム------------------------------------------- */

/* 右側のコラム */
div[data-testid="sidebarColumn"]{
    display:none;
}

/* 真ん中のコラムを中央に */
div[class="css-175oi2r r-1oszu61 r-1niwhzg r-18u37iz r-16y2uox r-2llsf r-13qz1uu r-1wtj0ep"]{
    justify-content: center;
}

/* 真ん中のコラムをの大きさ */
div[data-testid="primaryColumn"]{
    max-width: var(--max-width) !important;
}
div[class="css-175oi2r r-f8sm7e r-13qz1uu r-1ye8kvj"]{
    max-width: var(--max-width) !important;
}

/* ヘッダーリスト */
div[class = "css-175oi2r r-aqfbo4 r-gtdqiz r-1gn8etr r-1g40b8q"]{
    padding: 10px;
    
}
div[class = "css-175oi2r r-1e5uvyk r-6026j"]{
    border-radius: 20px !important;
    overflow: hidden;
    box-shadow: 0 10px 30px #0003 !important;
    padding:5px;
}
div[data-testid=ScrollSnap-List]{
    gap:5px;
}

/* ヘッダーのなかみ */
div[class="css-175oi2r r-14tvyh0 r-cpa5s6 r-16y2uox"]{
    border-radius: 15px !important;
    overflow: hidden;
    height:50px !important;
    background-color: #00000008;
}


/* -------------------------------------------サイドバー------------------------------------------- */
/* 色々消す */
a[ aria-label = "Grok" ] { display:none !important; }
a[ aria-label = "Communities" ] { display:none !important; }
a[ aria-label = "Premium" ] { display:none !important; }
a[ aria-label = "Verified Orgs" ] { display:none !important; }

a[ aria-label = "コミュニティ" ] { display:none !important; }
a[ aria-label = "プレミアム" ] { display:none !important; }
a[ aria-label = "認証済み組織" ] { display:none !important; }
a[ aria-label = "求人" ] { display:none !important; }

/* -------------------------------------------アイコン------------------------------------------- */

/* アイコン */
div[class^="css-175oi2r r-sdzlij r-1udh08x"]{
    border-bottom-left-radius: 9999px !important;
    border-bottom-right-radius: 9999px  !important;
    border-top-left-radius: 9999px  !important;
    border-top-right-radius: 9999px  !important;
    box-shadow: 0 10px 15px #0000000f !important;
    overflow: hidden !important;
}

/* アイコンの影の謎の重なりを削除 */
div[class="css-175oi2r r-sdzlij r-1udh08x r-5f1w11 r-u8s1d r-8jfcpp"]{
    overflow: visible !important;
    box-shadow: 0 0 0 #0000 !important;
}

/* アイコンの影が切れる問題を解決 */
ul[class="css-175oi2r r-18u37iz r-1w6e6rj r-mabqd8 r-1udh08x"]{
    overflow: visible !important;
}



/* -------------------------------------------引用------------------------------------------- */

/* 引用 */
div[class^="css-175oi2r r-adacv"]{
    box-shadow: inset 0 10px 15px #00000030 !important;
    background-color: #fbfbfb
}
/* 引用の中のアイコンの影が切れる問題を解決 */
div[class^="css-175oi2r r-1wbh5a2 r-1udh08x"]{
    overflow: visible !important;
}
/* 引用の中の画像 */
div[class="css-175oi2r r-14gqq1x"]{
    padding: 12px !important;
}

/* -------------------------------------------投稿------------------------------------------- */

/* ホームの一番上の投稿画面 */
div[class="css-175oi2r r-14lw9ot r-184en5c"]{
    display:none
}

/* ツイートを分ける線 */
div[role="separator"] {
    opacity: 0%;
    height: 5px !important;
}

/* ツイートと投稿画面を分ける線 */
div[class="css-175oi2r r-109y4c4 r-1sw30gj"]{
    opacity:0;
}

/* 画像 */
div[class="css-175oi2r r-1niwhzg r-vvn4in r-u6sd8q r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw r-4gszlv"]{
    border-radius: 10px !important;
}

/* ツイートそのもの */
article[data-testid="tweet"]{
    border-radius: 30px
}
/* リンク欄 */
div[class="css-175oi2r r-1ets6dv r-1867qdf r-1phboty r-rs99b7 r-18u37iz r-1udh08x r-o7ynqc r-6416eg r-1ny4l3l"]{
    background-color: #00000008;
}

/* アイコン周りの空間 */
div[class="css-175oi2r r-18kxxzh r-1wron08 r-onrtq4 r-1awozwy"]{
    flex-basis: 60px !important;
}

/* アナリティクス非表示 */
div:nth-of-type(4).r-13awgt0 {
  display:none !important;
}
button[aria-label="Grok actions"]{
    display:none !important;
}

/* リプまでの線（上部） */
div[class="css-175oi2r r-1bimlpy r-f8sm7e r-m5arl1 r-16y2uox r-14gqq1x"]{
    border-top-left-radius: 9999px  !important;
    border-top-right-radius: 9999px  !important;
    background-color: var(--sub-color);
    
}
/* リプまでの線（下部） */
div[class="css-175oi2r r-1bimlpy r-f8sm7e r-m5arl1 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af"]{
    border-bottom-left-radius: 9999px !important;
    border-bottom-right-radius: 9999px  !important;
    background-color: var(--sub-color);
    top: 1px !important;  /* 上と下で被る問題を修正 */
}

/* もっと表示 */
div[class="css-175oi2r r-1adg3ll r-1ny4l3l"]{
    border-radius: 15px;
    overflow: hidden;
}

/* -------------------------------------------画像を開いた時------------------------------------------- */

/* 画像を開いた時の右側の奥にあるdivの色を透明にする（元々は白） */
div[class="css-175oi2r r-14lw9ot r-jxzhtn r-th6na r-1phboty r-1dqxon3 r-1hycxz"]{
    background-color: #0000
}

/* 逆に、画像を開いた時の右側の手前にあるdivの色を白にして角丸をつける */
section[role="region"]{
    border-radius: 30px !important;
    background-color: #FFFFFF
}

/* 画像を開いた時の左側の画像が表示されるスペースの黒いbackgroundを透明に */
div[class="css-175oi2r r-1pi2tsx r-11yh6sk r-buy8e9 r-13qz1uu"]{
    background-color: #0000 !important;
}

/* 画像を開いた時に背景にbg blurを追加 */
div[class="css-175oi2r r-1p0dtai r-1d2f490 r-1xcajam r-zchlnj r-ipm5af r-1ffj0ar"]{
    backdrop-filter: blur(30px);
}

/* 画像を開いた時の画像 */
div[class="css-175oi2r r-1mlwlqe r-1udh08x r-417010 r-aqfbo4 r-agouwx r-1p0dtai r-16l9doz r-1d2f490 r-ywje51 r-pm9dpa r-dnmrzs r-u8s1d r-zchlnj r-ipm5af r-iyfy8q"]{
    border-radius:36px !important;
    overflow:hidden !important;
    box-shadow: 0 10px 50px #00000069 !important;
}

/* -------------------------------------------プロフィール------------------------------------------- */

/* アカウントのツイート件数 */
div[class="css-146c3p1 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-n6v787 r-1cwl3u0 r-16dba41"]{
    display:none;
}
div[class="css-146c3p1 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc r-n6v787 r-1cwl3u0 r-16dba41"]{
    display:none;
}


    `)
}

if (site.includes("youtube.com")) { 
    alert("Youtube")
}