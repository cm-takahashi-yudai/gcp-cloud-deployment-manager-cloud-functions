# gcp-cloud-deployment-manager-cloud-functions

## アップロード用のバケットを作成

任意のバケット名でソースコードをアップロードするバケットを作成します。また、 `templates/cloud-functions.yaml` の `codeBucket` を作成したバケットのバケット名に変更します。

## デプロイ

デプロイ先のプロジェクトを `gcloud` コマンドで指定します。

```bash
gcloud config set project [PROJECT_ID]
```

作成した構成ファイルを使用して `gcloud` コマンドでデプロイします。

```bash
gcloud deployment-manager deployments create cloud-functions --config templates/cloud-functions.yaml
```
