FROM node:latest as builder
LABEL maintainer="IITII <ccmejx@gmail.com>"
COPY . /reviewPic
WORKDIR /reviewPic
RUN npm i && \
apt clean && \
rm -rf .git Dockerfile .idea
EXPOSE 3000
CMD ["npm","start"]