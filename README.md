# 2026 NTPU USR REsolution 2.0

這是一個可直接部署到 GitHub Pages 的純靜態網站，不需要安裝套件或執行建置指令。

## 檔案說明

- `index.html`：中文版首頁
- `en.html`：英文版首頁
- `styles.css`：網站樣式與響應式版面
- `script.js`：手機選單與導覽區塊互動
- `.nojekyll`：讓 GitHub Pages 直接提供靜態檔案

## 部署到 GitHub Pages

1. 在 GitHub 建立新的 repository。
2. 將這個資料夾內的所有檔案上傳到 repository 根目錄。
3. 到 repository 的 **Settings → Pages**。
4. 在 **Build and deployment** 選擇 **Deploy from a branch**。
5. Branch 選擇 `main`，資料夾選擇 `/ (root)`，然後按下 **Save**。
6. 等待 GitHub 完成部署，頁面會顯示網站網址。

若 repository 名稱為 `你的帳號.github.io`，網站網址通常是：

`https://你的帳號.github.io/`

若使用一般 repository 名稱，網站網址通常是：

`https://你的帳號.github.io/repository名稱/`

網站內部連結均使用相對路徑，因此兩種部署方式都能使用。右上角的 **EN／中文** 按鈕可切換中英文頁面。

## 本機預覽

可直接雙擊 `index.html` 開啟。若瀏覽器限制本機檔案功能，也可以使用任一靜態網站伺服器開啟此資料夾。

## 更新內容

- 中文內容：編輯 `index.html`
- 英文內容：編輯 `en.html`
- 顏色與版面：編輯 `styles.css`
- 選單互動：編輯 `script.js`
