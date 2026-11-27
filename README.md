# hidemaxmsp

Electronic Music / DIY Instruments / Max 8

hidemaxmsp の個人アーカイブサイト。HTML と CSS だけで作られた静的サイトです。ビルドツールや外部ライブラリは使っていません。

```
/
├── index.html     … 英語版（全コンテンツ・1ページ構成）
├── ja/
│   └── index.html … 日本語版（同じ内容の日本語訳）
├── style.css      … デザイン
├── script.js      … フッターの年号を自動更新するだけ（無くても動きます）
├── README.md
└── assets/
    ├── images/    … 写真・アートワーク
    ├── videos/    … 動画ファイル
    └── audio/     … 音声ファイル
```

---

## 1. ローカルで確認する

`index.html` をブラウザにドラッグ＆ドロップするだけで表示できます。

ただし、この方法（`file://` で開く）だと YouTube の埋め込み動画が「エラー 153」になり再生できません。
動画も確認したいときは、ターミナルで簡易サーバーを起動してください。

```sh
cd "Portfolio Website"
python3 -m http.server 8000
```

ブラウザで http://localhost:8000/ （日本語版は http://localhost:8000/ja/ ）を開きます。終了は `Ctrl + C`。
GitHub Pages で公開したサイトでは、この問題は起きません。

---

## 2. GitHub Pages で公開する

1. GitHub で新しいリポジトリを作成する
   - サイトの URL を `https://<ユーザー名>.github.io/` にしたい場合は、リポジトリ名を `<ユーザー名>.github.io` にする
   - それ以外の名前（例: `portfolio`）の場合、URL は `https://<ユーザー名>.github.io/portfolio/` になる
2. このフォルダの中身をアップロードする

   ```sh
   cd "Portfolio Website"
   git init
   git add .
   git commit -m "First commit"
   git branch -M main
   git remote add origin https://github.com/<ユーザー名>/<リポジトリ名>.git
   git push -u origin main
   ```

   （コマンドを使わない場合は、GitHub のリポジトリ画面で「Add file → Upload files」からファイルをドラッグ＆ドロップしても OK）
3. リポジトリの **Settings → Pages** を開く
4. **Source** を「Deploy from a branch」、**Branch** を `main` / `/ (root)` にして **Save**
5. 1〜2分待つと、画面上部に公開 URL が表示される

以降は、ファイルを編集して push（またはアップロード）するたびに自動で更新されます。

---

## 3. プレースホルダーを自分の素材に置き換える

現在、画像・動画の場所には点線の枠（`<div class="placeholder">`）が入っています。
未設定のリンクはグレーで `[ADD URL]` と表示されています。

### 画像

1. 画像を `assets/images/` に入れる（例: `acid-machine.jpg`）
   - 横幅 1600px 程度、JPEG なら 300KB 前後が目安（表示が速くなります）
2. `index.html` の該当する行を

   ```html
   <div class="placeholder">IMAGE / VIDEO — assets/images/acid-machine.jpg</div>
   ```

   次のように書き換える

   ```html
   <figure class="media">
     <img src="assets/images/acid-machine.jpg" alt="ACID MACHINE の Max パッチ画面" loading="lazy">
   </figure>
   ```

   `alt` には画像の内容を短く書いてください（目の見えない人の読み上げ用）。
   キャプションを付けたい場合は `</figure>` の前に `<figcaption>テキスト</figcaption>` を追加します。

### 動画ファイル

`assets/videos/` に入れて:

```html
<video src="assets/videos/live-acid-jam.mp4" controls preload="none"></video>
```

※ GitHub は 1ファイル 100MB まで。長い動画は YouTube に上げて埋め込む方がおすすめです。

### YouTube 埋め込み

YouTube の URL `https://www.youtube.com/watch?v=XXXXXXXX` の `XXXXXXXX` 部分を使って:

```html
<div class="video">
  <iframe src="https://www.youtube-nocookie.com/embed/XXXXXXXX"
          title="Live Acid Jam" loading="lazy" allowfullscreen></iframe>
</div>
```

### 音声ファイル

`assets/audio/` に入れて:

```html
<audio src="assets/audio/track.mp3" controls preload="none"></audio>
```

### リンク

```html
<a href="#" class="todo">GitHub [ADD URL]</a>
```

を

```html
<a href="https://github.com/あなたのユーザー名/acid-machine">GitHub</a>
```

に変更します（`class="todo"` と `[ADD URL]` を消す）。
メールの場合は `href="mailto:アドレス"` にします。

不要なリンクや画像枠は、その行ごと削除して構いません。

### 年号

各プロジェクトの `<span class="year">[YEAR]</span>` を実際の年（例: `2025`）に書き換えてください。

---

### 日本語版について

日本語版は `ja/index.html` にあり、公開後は `https://<ユーザー名>.github.io/ja/` で表示されます。
ヘッダー右端の「EN / JA」で切り替えられます。CSS・JS・素材は英語版と共通です。

- 内容を変更したら、**`index.html` と `ja/index.html` の両方**を更新してください
- `ja/index.html` の中では、素材のパスを `../assets/images/...` のように **`../` から始めます**

## 4. プロジェクトを追加する

`index.html` の `PROJECTS` セクションのコメント内にテンプレートがあります。
既存の `<article class="entry"> … </article>` を1つコピーして、リストの一番上（新しい順）か好きな位置に貼り付け、中身を書き換えるだけです。

```html
<article class="entry">
  <header class="entry-head">
    <h3>NEW PROJECT</h3>
    <span class="year">2026</span>
  </header>
  <p>短い説明文。</p>
  <p class="tech">Max 8 / ESP32</p>
  <figure class="media">
    <img src="assets/images/new-project.jpg" alt="説明" loading="lazy">
  </figure>
  <ul class="links">
    <li><a href="https://github.com/...">GitHub</a></li>
    <li><a href="https://www.youtube.com/...">YouTube</a></li>
  </ul>
</article>
```

- 画像やリンクが無いプロジェクトは、その部分を省略するだけで OK
- CSS を触る必要はありません

## 5. 音楽（リリース・動画）を追加する

`MUSIC` セクションも同じ仕組みです。`<article class="entry">` をコピーして追加します。
動画・音声の書き方は同セクション冒頭のコメントにもあります。

---

## デザインを調整したい場合

`style.css` の先頭 `:root { … }` で色・フォント・横幅を一括で変えられます。

```css
--fg: #fff;        /* 文字色（白） */
--bg: #000;        /* 背景色（黒） */
--muted: #aaa;     /* 年号・技術名などの薄い文字 */
--line: #fff;      /* 区切り線 */
--max: 52rem;      /* コンテンツの最大幅 */
```

サイトは常に黒背景・白文字です（OS のライト／ダーク設定には関係なく同じ表示）。
