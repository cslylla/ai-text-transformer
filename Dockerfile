FROM caddy:2-alpine

# Serve the repo root as a static site
COPY . /usr/share/caddy

# Listen on a fixed internal port (we’ll use 3000)
EXPOSE 3000

CMD ["caddy", "file-server", "--root", "/usr/share/caddy", "--listen", ":3000"]
