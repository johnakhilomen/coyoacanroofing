## Deployment

```
npm run build 2>&1 | tail -6 && rsync -az -e "ssh -i ~/.ssh/coyocan_deploy -o IdentitiesOnly=yes" /Users/john/Desktop/coyoacanroofing/dist/ jeailnmy@129.121.65.56:~/public_html/ 2>&1
```

```
ssh -i ~/.ssh/coyocan_deploy -o IdentitiesOnly=yes jeailnmy@129.121.65.56 \
  "rm -rf ~/public_html/* ~/public_html/.htaccess && ls ~/public_html/" 2>&1
```

```
rsync -avz -e "ssh -i ~/.ssh/coyocan_deploy -o IdentitiesOnly=yes" \
  /Users/john/Desktop/coyoacanroofing/dist/ \
  jeailnmy@129.121.65.56:~/public_html/ 2>&1
```

```
curl -sH "Cache-Control: no-cache" https://coyocalaroofing.com/ | grep -o 'index-[^"]*\.js'
```
