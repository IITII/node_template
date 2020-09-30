FROM node:slim as builder
LABEL maintainer="IITII <ccmejx@gmail.com>"
COPY . /node_template
WORKDIR /node_template
RUN npm i && \
apt clean && \
EXPOSE 3000
CMD ["npm","start"]