# 研究室ホームページ

京都教育大学 鈴木英太研究室のホームページ（HTMLとCSSだけで作ったサイト。PHP・WordPressは使っていません）。
公開先の予定: e-edu.jp のサブドメイン（Vercel）。

## ページ構成

| ページ | ファイル |
|---|---|
| HOME（ごあいさつ・研究室紹介・おしらせ） | `index.html` |
| プロフィール | `profile/index.html` |
| 実践活動 | `practice/index.html` |
| 研究活動 | `research/index.html` |
| 教育活動 | `education/index.html` |
| お問い合わせ | `contact/index.html` |

- 見た目（色・文字の大きさなど）は `assets/style.css` にまとめています。メインカラーはファイル先頭の `--accent` で変えられます。
- 「（ここに〜が入ります）」となっている部分が仮の文章です。`class="placeholder"`（グレーの文字）を外すと通常の色になります。
- 研究室名「鈴木英太研究室」は、全ページのヘッダー・タイトル・フッターに入っています。

## 公開（lab.e-edu.jp）

1. GitHub に `E-edu-byte/lab-site`（Private）を作り、このフォルダを push する
2. Vercel で「Add New → Project」から `lab-site` を Import（Framework Preset は Other、Build Command は空のまま）
3. Vercel のプロジェクト設定 → Domains で `lab.e-edu.jp` を追加
4. ムームードメインの DNS 設定で、Vercel に表示された CNAME（`lab` → `〜.vercel-dns-017.com` など）を追加
5. 検索結果に出す設定は済んでいます（学生専用ページ `student/` だけは `noindex`）。`sitemap.xml` と `robots.txt` のドメインは `lab.e-edu.jp` です

GitHub の main に push すると、Vercel が自動で更新します。

## 手元での確認

```
node scripts/serve.js . 5176
```

ブラウザで http://localhost:5176 を開きます。
