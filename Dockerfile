FROM node:17-alpine
WORKDIR /ashesi-hackers-league
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]