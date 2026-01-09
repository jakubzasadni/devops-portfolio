# DevOps Engineer Portfolio 🚀

Profesjonalna strona portfolio dla DevOps Engineer, zoptymalizowana pod wdrożenie na Azure Static Web Apps.

## 📋 Funkcje

- ✨ Nowoczesny, responsywny design
- 🎨 Animacje i efekty wizualne
- 📱 W pełni responsywna dla urządzeń mobilnych
- 🚀 Gotowa do wdrożenia na Azure
- 💼 Sekcje: Skills, Projekty, Kontakt

## 🛠️ Technologie

- HTML5
- CSS3 (z animacjami)
- Vanilla JavaScript
- Font Awesome Icons

## 🚀 Wdrożenie na Azure Static Web Apps

### Metoda 1: Portal Azure (Najłatwiejsza)

1. **Zaloguj się do Azure Portal**
   - Wejdź na: https://portal.azure.com
   - Zaloguj się kontem AGH (@student.agh.edu.pl)

2. **Utwórz Static Web App**
   - Kliknij "Create a resource"
   - Wyszukaj "Static Web App"
   - Kliknij "Create"

3. **Konfiguracja:**
   - **Subscription**: Azure for Students
   - **Resource Group**: Utwórz nowy np. "devops-portfolio-rg"
   - **Name**: Twoja unikalna nazwa (np. "moje-devops-portfolio")
   - **Plan type**: Free
   - **Region**: West Europe (najbliżej Polski)
   - **Source**: GitHub (połącz konto GitHub)
   - **Organization**: Twoje konto GitHub
   - **Repository**: Wybierz/utwórz repozytorium
   - **Branch**: main/master
   - **Build Presets**: Custom
   - **App location**: `/`
   - **Output location**: pozostaw puste

4. **Kliknij "Review + Create"** → **"Create"**

5. **Gotowe!** 
   - Azure automatycznie zbuduje i wdroży stronę
   - URL będzie dostępny po ~2-3 minutach
   - Format: `https://[nazwa].azurestaticapps.net`

### Metoda 2: Azure CLI

```bash
# Zainstaluj Azure CLI (jeśli nie masz)
# https://docs.microsoft.com/cli/azure/install-azure-cli

# Zaloguj się
az login

# Utwórz Static Web App
az staticwebapp create \
  --name moje-devops-portfolio \
  --resource-group devops-portfolio-rg \
  --source https://github.com/TWOJ_USERNAME/devops-portfolio \
  --location "westeurope" \
  --branch main \
  --app-location "/" \
  --login-with-github
```

### Metoda 3: GitHub Actions (Automatyczne CI/CD)

1. **Utwórz repozytorium na GitHub:**
```bash
cd C:\Users\Laptop\Desktop\Git\devops-portfolio
git init
git add .
git commit -m "Initial commit: DevOps portfolio"
git branch -M main
git remote add origin https://github.com/TWOJ_USERNAME/devops-portfolio.git
git push -u origin main
```

2. **Połącz z Azure:**
   - Portal Azure → Static Web Apps → Połącz z GitHub
   - Azure automatycznie utworzy GitHub Action workflow

3. **Automatyczne wdrożenia:**
   - Każdy push do repozytorium automatycznie aktualizuje stronę!

## 📝 Personalizacja

Przed wdrożeniem, zaktualizuj:

1. **index.html:**
   - Linki do GitHub, LinkedIn
   - Adres email
   - Opisy projektów

2. **style.css:**
   - Kolory (zmienne w `:root`)
   - Rozmiary czcionek

3. **Dodaj własne projekty** w sekcji Projects

## 🔍 Testowanie lokalne

Otwórz plik `index.html` w przeglądarce lub użyj prostego serwera:

```bash
# Python
python -m http.server 8000

# Node.js (jeśli masz)
npx serve

# VS Code Live Server extension
# Kliknij prawym przyciskiem na index.html → "Open with Live Server"
```

## 💰 Koszty

**Azure Static Web Apps (Free tier):**
- ✅ 100 GB bandwidth/miesiąc
- ✅ Własna domena (opcjonalnie)
- ✅ SSL automatycznie
- ✅ Global CDN
- ✅ **Całkowicie DARMOWE dla studentów AGH!**

## 📚 Dodatkowe zasoby

- [Azure Static Web Apps Documentation](https://docs.microsoft.com/azure/static-web-apps/)
- [Azure for Students](https://azure.microsoft.com/free/students/)
- [Custom Domain Setup](https://docs.microsoft.com/azure/static-web-apps/custom-domain)

## 🎓 Azure AGH Access

Jako student AGH masz dostęp do:
- $100 kredytów Azure rocznie
- Bez karty kredytowej
- Dostęp do większości usług Azure

Aby aktywować: https://azure.microsoft.com/free/students/

## 🤝 Wsparcie

Jeśli napotkasz problemy:
1. Sprawdź logi w Azure Portal → Static Web App → "Actions" (GitHub Actions logs)
2. Upewnij się, że repozytorium GitHub jest publiczne lub Azure ma dostęp
3. Sprawdź czy wszystkie pliki są w głównym katalogu repozytorium

---

**Powodzenia z wdrożeniem! 🚀**
