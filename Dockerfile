FROM oven/bun AS assets-builder

WORKDIR /build
COPY package.json ./
RUN bun install

COPY . .
RUN bun build assets/app.ts --outdir=static
RUN bunx tailwindcss -c tailwind.config.js -i assets/styles.css -o static/styles.css

FROM golang:1.23-alpine AS builder
RUN apk update && apk upgrade && apk add --no-cache ca-certificates
RUN update-ca-certificates

# Move to working directory (/build).
WORKDIR /build

# Copy and download dependency using go mod.
COPY go.mod go.sum ./
RUN go mod download
RUN go install github.com/a-h/templ/cmd/templ@latest

# Copy your code into the container.
COPY . .

# Set necessary environment variables and build your project.
ENV CGO_ENABLED=0
RUN templ generate .
RUN go build -ldflags="-s -w" -o hvt

FROM scratch

# Copy project's binary and templates from /build to the scratch container.
COPY --from=builder /build/hvt /
COPY --from=assets-builder /build/static /static
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/

# Set entry point.
ENTRYPOINT ["/hvt", "serve", "--http=0.0.0.0:7000"]
