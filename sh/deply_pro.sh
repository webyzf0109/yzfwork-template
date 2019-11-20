npm run build
ssh root@140.143.136.124 "rm -rf /usr/share/nginx/html/yzfworkPlatform/"
scp -r ./dist  root@140.143.136.124:/usr/share/nginx/html/yzfworkPlatform