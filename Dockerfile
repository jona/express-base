FROM node:0.12.2-onbuild

RUN npm install -g gulp bower

EXPOSE 3000

CMD ["npm", "start"]
