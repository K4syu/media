# media

このリポジトリは簡易的なブラウザ上での動画選択・再生UIを含みます。

主なファイル構成
- `index.html` — 動画プレーヤーと選択UI（`video/videos.json` をfetchして一覧表示）
- `video/` — 動画ファイルを置くフォルダ（例: `video/movie.mp4`）
- `scripts/generate_videolist.py` — `video/` をスキャンして `video/videos.json` を生成するスクリプト

セットアップと使い方
1. `video/` フォルダに再生したい動画ファイル（.mp4/.webm/.ogg/.mov/.m4v）を置く。
2. 動画一覧を生成する:

```bash
python3 scripts/generate_videolist.py
```

	実行すると `video/videos.json` が作成されます。

3. ローカルでHTTPサーバを立ててページを開く（fetchは file:// では動作しないため）:

```bash
# macOS / Python 3.x
python3 -m http.server

# ブラウザで http://localhost:8000/index.html を開く
```

4. ページが読み込まれると `video/videos.json` が取得され、セレクトボックスにファイル名が表示されます。左右でファイルを選んで「同時再生 / 一時停止」を押してください。

注意
- `video/videos.json` はスクリプトで生成するか、手動で作成してください。ブラウザから直接ディレクトリ一覧を取得することはできません。
- 大量の動画を置く場合、ブラウザのメモリやネットワークに注意してください。

問題や要望があれば Issue を残してください。