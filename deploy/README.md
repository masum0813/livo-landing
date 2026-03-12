# Deploy README — Docker on personal VM

Required on the VM:
- Docker Engine (latest recommended)
- Docker Compose v2 (available as `docker compose`)
- An SSH user with permission to run Docker (or use sudo)

Required GitHub Secrets (set in repo Settings → Secrets):
- `VM_HOST` — IP or hostname of your VM
- `VM_USER` — SSH username
- `VM_SSH_KEY` — Private SSH key (PEM format) for `VM_USER`
- `VM_SSH_PORT` — Optional (default 22)

How the GitHub Actions workflow works
1. Builds the Docusaurus site inside `docusaurus/`.
2. Builds a Docker image from the repo root Dockerfile and saves it as `livo-image.tar`.
3. Copies `livo-image.tar` and `deploy/docker-compose.yml` to `~/deploy` on the VM.
4. SSH into the VM, loads the image, tags it as `livo-landing:latest`, and runs `docker compose up -d`.

Manual VM setup (one-time)
1. Create deploy directory and ensure permissions:

```bash
ssh -p 22 user@vm-host
sudo mkdir -p /home/user/deploy
sudo chown user:user /home/user/deploy
exit
```

2. Install Docker & Compose (Ubuntu example):

```bash
ssh user@vm-host
sudo apt update && sudo apt install -y ca-certificates curl gnupg lsb-release
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \
  | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
sudo usermod -aG docker $USER
exit
```

Notes & troubleshooting
- Ensure `docker compose` works without sudo for the deploy user, or modify the workflow script to use `sudo docker compose`.
- If you prefer pushing images to a registry, update the workflow to `docker build` + `docker push`, and change the compose to pull from the registry.
- The `ports` mapping in `deploy/docker-compose.yml` uses `3000:80` by default; change as needed.
