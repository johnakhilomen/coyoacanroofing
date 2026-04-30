## Deployment

```
npm run build 2>&1 | tail -6 && rsync -az -e "ssh -i ~/.ssh/coyocan_deploy -o IdentitiesOnly=yes" /Users/john/Desktop/coyoacanroofing/dist/ jeailnmy@129.121.65.56:~/public_html/ 2>&1
```
