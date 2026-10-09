# GitHub Pages setup

1. Create a **public** GitHub repository named `portfolio` (or another name).
2. Upload the contents of this folder to the repository root on the `main` branch. Do not upload the zip as a single file.
3. Open repository **Settings > Pages > Build and deployment** and select **GitHub Actions** as Source.
4. Open **Actions** and wait for **Deploy portfolio to GitHub Pages** to finish. If needed, run it manually.
5. Visit `https://YOUR_USERNAME.github.io/REPOSITORY_NAME/`.

If you use a repository named `YOUR_USERNAME.github.io`, update the NEXT_PUBLIC_BASE_PATH environment value in `.github/workflows/deploy.yml` to an empty string (and the website will be at the domain root).
