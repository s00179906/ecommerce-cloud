#!/bin/bash
cd /var/www/html
unzip dist.zip
mv dist/* .
service httpd start
