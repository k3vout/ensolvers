#! /bin/bash
cd ensolvers-backend
bundle install
# rails webpacker:install
rails s -p 3001
cd ..
cd ensolvers-frontend
npm i
npm start