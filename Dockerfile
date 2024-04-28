FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG NEXT_PUBLIC_REVIEW_MANAGEMENT_BASE_URL
ENV NEXT_PUBLIC_REVIEW_MANAGEMENT_BASE_URL=$NEXT_PUBLIC_REVIEW_MANAGEMENT_BASE_URL

RUN npm run build

RUN addgroup -g 10018 choreo && \
    adduser  --disabled-password  --no-create-home --uid 10018 --ingroup choreo choreouser

USER 10018

EXPOSE 3000

CMD ["npm", "start"]
