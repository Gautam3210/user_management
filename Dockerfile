FROM node:24

WORKDIR /user_mgt

COPY . .

RUN npm install 

EXPOSE 3000

CMD ["npm", "run", "dev"]