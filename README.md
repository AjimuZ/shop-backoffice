
**Project Title:**
**Shop Backoffice Application**


**Objective**
This is a backoffice application for managing an online shop's product catalog. Employees can:

- **Add products**
- **Delete products**
- **View product reviews**

**Additional features include:**
- **Changing the product layout between grid view and panel view.**
- **Viewing a chart (Polar Area) displaying product distribution by category.**


**Project Setup Instructions**


**1. Clone the Project**
To clone this project from GitHub, run the following commands in your terminal:

```
git clone https://github.com/AjimuZ/shop-backoffice.git
cd shop-backoffice
```

**2. Install Dependencies**
Ensure Node.js is installed on your machine, then install the necessary packages:

```
npm install
```

**3. Run the Application**
To start the development server:

```
ng serve
```

The application will be available at:
http://localhost:4200


**How to Use the Application**


**Dashboard**
- **View the list of products in either grid view or panel view.**
- **Click the red delete button (🗑️) to remove a product.**
- **Click "Show Reviews" to display reviews for a product.**

**Add Product**
- **Click the "Add Product" button.**
- **Fill in the product form (Title, Category, Price, Employee, Description).**
- **Submit to add the product to the list.**

**Chart View**
- **Navigate to the "Chart" page to see a PolarArea chart displaying the distribution of products by category.**


**Running Automated Tests**

To run the unit tests:

```
ng test
```

This will execute all unit tests using Karma and Jasmine, displaying results in the terminal.


**API Information**

The project uses an external API to manage products.


**Technologies Used**

- **Angular 19**
- **Bootstrap 5.3**
- **Chart.js**




**Titolo del Progetto:**
**Applicazione Backoffice del Negozio**


**Obiettivo**
Questa applicazione di backoffice consente la gestione dei prodotti di un negozio online. I dipendenti possono:

- **Aggiungere prodotti**
- **Eliminare prodotti**
- **Visualizzare le recensioni dei prodotti**

**Funzionalità aggiuntive:**
- **Cambiare la visualizzazione dei prodotti tra griglia e pannello.**
- **Visualizzare un grafico (Polar Area) per la distribuzione dei prodotti per categoria.**


**Istruzioni per Configurare il Progetto**


**1. Clonare il Progetto**
Clona il progetto dal repository GitHub con i seguenti comandi:

```
git clone https://github.com/AjimuZ/shop-backoffice.git
cd shop-backoffice
```

**2. Installare le Dipendenze**
Assicurati di aver installato Node.js, quindi esegui:

```
npm install
```

**3. Avviare l'Applicazione**
Per avviare il server di sviluppo:

```
ng serve
```

L'app sarà disponibile su:
http://localhost:4200


**Come Usare l'Applicazione**


**Dashboard**
- **Visualizza l'elenco dei prodotti in griglia o pannello.**
- **Clicca sul pulsante rosso (🗑️) per eliminare un prodotto.**
- **Clicca su "Show Reviews" per visualizzare le recensioni.**

**Aggiungere un Prodotto**
- **Clicca su "Add Product".**
- **Compila i campi richiesti (Titolo, Categoria, Prezzo, Impiegato, Descrizione).**
- **Invia il modulo per aggiungere il prodotto.**

**Vista Grafico**
- **Naviga alla sezione "Chart" per visualizzare il grafico PolarArea della distribuzione dei prodotti.**


**Eseguire i Test Automatici**

Per eseguire i test unitari:

```
ng test
```

I risultati saranno mostrati nella console usando Karma e Jasmine.


**Informazioni API**

L'app utilizza un'API esterna per la gestione dei prodotti.


**Tecnologie Utilizzate**

- **Angular 19**
- **Bootstrap 5.3**
- **Chart.js**



---

## CI/CD Pipeline (GitHub Actions)

The repository now includes an automated pipeline in `.github/workflows/ci-cd.yml` with two jobs:

1. **Build SSR app**
   - installs dependencies with `npm ci`
   - builds the application with `npm run build`
   - publishes the `dist/shop-backoffice` folder as a workflow artifact

2. **Build and publish container** (only on push to `main` and manual trigger)
   - builds a Docker image from the `Dockerfile`
   - pushes the image to GitHub Container Registry (`ghcr.io/<owner>/<repo>`)
   - publishes tags based on commit SHA and `latest` for the default branch

### Run in a deployed environment

You can run the same container locally or on any container platform:

```bash
docker pull ghcr.io/<owner>/<repo>:latest
docker run -p 4000:4000 -e PORT=4000 ghcr.io/<owner>/<repo>:latest
```

Then open `http://localhost:4000`.
