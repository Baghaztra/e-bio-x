# Tahap 1: build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Tahap 2: image production
FROM node:20-alpine

WORKDIR /app

# Install hanya dependencies (tanpa devDependencies)
COPY package*.json ./
RUN npm install --omit=dev

# Copy hasil build dari builder stage
COPY --from=builder /app/.output ./.output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
