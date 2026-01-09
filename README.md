# DevOps Engineer Portfolio 🚀

Profesjonalna strona portfolio dla DevOps Engineer, zbudowana z React, TypeScript i Tailwind CSS, skonteneryzowana z Docker i gotowa do wdrożenia na Azure.

## 📋 Funkcje

- ⚛️ React + TypeScript + Vite
- 🎨 Tailwind CSS z animacjami
- 🐳 Multi-stage Docker build
- 📱 W pełni responsywna
- 🚀 Gotowa do wdrożenia na Azure
- 💼 Sekcje: Skills, Projekty, Kontakt
- 🔒 Security headers w Nginx
- ⚡ Optymalizacja i caching

## 🛠️ Technologie

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Docker (multi-stage build)
- Nginx
- React Icons

## � Docker - Lokalne uruchomienie

### Opcja 1: Docker Compose (Zalecane)

```bash
# Zbuduj i uruchom kontener
docker-compose up -d

# Strona dostępna na: http://localhost:8080
```

### Opcja 2: Docker CLI

```bash
# Zbuduj obraz
docker build -t devops-portfolio .

# Uruchom kontener
docker run -d -p 8080:80 --name portfolio devops-portfolio

# Strona dostępna na: http://localhost:8080
```

### Tryb developerski z Docker

```bash
# Najpierw zainstaluj zależności lokalnie
npm install

# Uruchom dev container
docker-compose --profile dev up

# Strona z hot-reload na: http://localhost:5173
```

## 💻 Lokalne uruchomienie (bez Dockera)

```bash
# Zainstaluj zależności
npm install

# Uruchom dev server
npm run dev

# Strona dostępna na: http://localhost:5173

# Build do produkcji
npm run build

# Podgląd buildu
npm run preview
```

## 🚀 Wdrożenie na Azure

### Metoda 1: Azure Container Registry + Azure Web App for Containers

1. **Zaloguj się do Azure CLI**
```bash
az login
```

2. **Utwórz Container Registry**
```bash
# Utwórz resource group
az group create --name devops-portfolio-rg --location westeurope

# Utwórz Azure Container Registry
az acr create --resource-group devops-portfolio-rg \
  --name twojnazwaacr --sku Basic

# Zaloguj się do ACR
az acr login --name twojnazwaacr
```

3. **Zbuduj i wypchnij obraz do ACR**
```bash
# Zbuduj obraz
docker build -t devops-portfolio .

# Tag obrazu
docker tag devops-portfolio twojnazwaacr.azurecr.io/devops-portfolio:latest

# Wypchnij do ACR
docker push twojnazwaacr.azurecr.io/devops-portfolio:latest
```

4. **Wdróż Web App**
```bash
# Włącz admin w ACR
az acr update -n twojnazwaacr --admin-enabled true

# Pobierz credentials
az acr credential show --name twojnazwaacr

# Utwórz Web App
az webapp create --resource-group devops-portfolio-rg \
  --plan myAppServicePlan --name moja-devops-portfolio \
  --deployment-container-image-name twojnazwaacr.azurecr.io/devops-portfolio:latest
```

### Metoda 2: Portal Azure (Najłatwiejsza)

1. **Zaloguj się do Azure Portal**
   - Wejdź na: https://portal.azure.com
   - Zaloguj się kontem AGH (@student.agh.edu.pl)

2. **Utwórz Container Registry (ACR)**
   - Create a resource → Container Registry
   - Resource Group: devops-portfolio-rg
   - Registry name: twojnazwaacr
   - SKU: Basic (wystarczający dla studentów)

3. **Zbuduj i wypchnij obraz**
   - Lokalnie: `docker build -t devops-portfolio .`
   - Tag: `docker tag devops-portfolio twojnazwaacr.azurecr.io/devops-portfolio:latest`
   - Wypchnij (po zalogowaniu przez Azure CLI)

4. **Utwórz Web App for Containers**
   - Create a resource → Web App
   - Publish: Docker Container
   - Operating System: Linux
   - Region: West Europe
   - SKU: Free F1 (dla studentów) lub B1 Basic
   - Image Source: Azure Container Registry
   - Wybierz swój obraz

### Metoda 3: GitHub Actions CI/CD (Najbardziej profesjonalna)

1. **Stwórz GitHub Repository**
```bash
cd C:\Users\Laptop\Desktop\Git\devops-portfolio
git add .
git commit -m "Add React + Docker portfolio"
git branch -M main
git remote add origin https://github.com/TWOJ_USERNAME/devops-portfolio.git
git push -u origin main
```

2. **Skonfiguruj GitHub Secrets**
   - Settings → Secrets and variables → Actions
   - Dodaj:
     - `AZURE_CREDENTIALS` (service principal)
     - `ACR_USERNAME`
     - `ACR_PASSWORD`

3. **Dodaj GitHub Actions workflow** (`.github/workflows/deploy.yml`)
```yaml
name: Build and Deploy to Azure

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

env:
  ACR_NAME: twojnazwaacr
  IMAGE_NAME: devops-portfolio
  WEBAPP_NAME: moja-devops-portfolio

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Login to Azure Container Registry
      uses: docker/login-action@v2
      with:
        registry: ${{ env.ACR_NAME }}.azurecr.io
        username: ${{ secrets.ACR_USERNAME }}
        password: ${{ secrets.ACR_PASSWORD }}
    
    - name: Build and push Docker image
      run: |
        docker build -t ${{ env.ACR_NAME }}.azurecr.io/${{ env.IMAGE_NAME }}:${{ github.sha }} \
                     -t ${{ env.ACR_NAME }}.azurecr.io/${{ env.IMAGE_NAME }}:latest .
        docker push ${{ env.ACR_NAME }}.azurecr.io/${{ env.IMAGE_NAME }}:${{ github.sha }}
        docker push ${{ env.ACR_NAME }}.azurecr.io/${{ env.IMAGE_NAME }}:latest
    
    - name: Deploy to Azure Web App
      uses: azure/webapps-deploy@v2
      with:
        app-name: ${{ env.WEBAPP_NAME }}
        images: ${{ env.ACR_NAME }}.azurecr.io/${{ env.IMAGE_NAME }}:${{ github.sha }}
```

## 📊 Architektura Projektu

```
Multi-stage Docker Build:
┌─────────────────────────────┐
│  Stage 1: Builder           │
│  - Node 20 Alpine           │
│  - npm ci (dependencies)    │
│  - npm run build            │
│  - Generuje /dist           │
└─────────────────────────────┘
              ↓
┌─────────────────────────────┐
│  Stage 2: Production        │
│  - Nginx Alpine             │
│  - Kopiuje /dist z Stage 1  │
│  - Custom nginx.conf        │
│  - Security headers         │
│  - Healthcheck              │
└─────────────────────────────┘
```


## 📝 Personalizacja

Przed wdrożeniem, zaktualizuj:

1. **src/components/Contact.tsx:**
   - Linki do GitHub, LinkedIn
   - Adres email

2. **src/components/Projects.tsx:**
   - Opisy swoich projektów
   - Linki do repozytoriów

3. **tailwind.config.js:**
   - Kolory (jeśli chcesz zmienić theme)

## 🐳 Przydatne komendy Docker

```bash
# Sprawdź działający kontener
docker ps

# Logi kontenera
docker logs devops-portfolio

# Zatrzymaj kontener
docker-compose down

# Przebuduj po zmianach
docker-compose up -d --build

# Wejdź do kontenera
docker exec -it devops-portfolio sh

# Usuń wszystkie nieużywane obrazy
docker system prune -a
```


## 💰 Koszty Azure

**Azure for Students:**
- ✅ $100 kredytów rocznie
- ✅ Bez karty kredytowej
- ✅ Free tier dla wielu usług

**Web App for Containers (Free F1):**
- ✅ 1 GB RAM
- ✅ 1 GB storage
- ✅ 60 minut CPU dziennie
- ✅ Wystarczające dla portfolio!

**Azure Container Registry (Basic):**
- ~$5/miesiąc (pokryte kredytami)
- 10 GB storage
- Nieograniczone pulls

**Alternatywa: Azure Static Web Apps**
- ✅ Całkowicie darmowe
- ✅ 100 GB bandwidth/miesiąc
- ✅ Global CDN
- (Ale wymaga innej konfiguracji buildu)

## 🎓 Azure dla Studentów AGH

Aktywuj dostęp: https://azure.microsoft.com/free/students/

**Korzyści:**
- $100 kredytów rocznie (odnawiane)
- Darmowe usługi (App Service, Functions, SQL Database)
- Dostęp do Azure DevOps
- Narzędzia do nauki

## 📚 Dodatkowe zasoby

- [Azure Container Registry](https://docs.microsoft.com/azure/container-registry/)
- [Web App for Containers](https://docs.microsoft.com/azure/app-service/quickstart-custom-container)
- [Docker Documentation](https://docs.docker.com/)
- [GitHub Actions](https://docs.github.com/actions)
- [React + Vite](https://vitejs.dev/guide/)

## 🔒 Best Practices

✅ **Multi-stage Docker build** - Mały obraz produkcyjny (~25MB)  
✅ **Security headers** - Ochrona przed XSS, clickjacking  
✅ **Healthcheck** - Automatyczne restartowanie przy awariach  
✅ **Gzip compression** - Szybsze ładowanie  
✅ **Asset caching** - Optymalizacja wydajności  
✅ **.dockerignore** - Mniejszy build context  

## 🤝 Wsparcie

Jeśli napotkasz problemy:
1. Sprawdź logi Docker: `docker logs devops-portfolio`
2. Sprawdź logi Azure: Portal → Web App → Log stream
3. Sprawdź GitHub Actions: Repository → Actions tab
4. Sprawdź czy wszystkie secrets są ustawione w GitHub

---

**Powodzenia z wdrożeniem! 🚀**

## 📸 Screenshot

Po uruchomieniu zobaczysz:
- Modern hero section z animacjami
- 8 kart technologii (Docker, K8s, Git, CI/CD, Cloud, IaC, Python, Monitoring)
- 3 projekty portfolio z tagami
- Sekcja kontaktowa z social links
- Responsive design dla mobile i desktop
