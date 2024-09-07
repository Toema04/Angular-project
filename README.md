# Angular Dashboard Evaluation Task

## 1. Project Overview
The Angular Dashboard is a responsive, dynamic interface designed for business or organizational data representation. It includes features like charts, data tables, filtering, and a calendar for date range selection, providing a comprehensive view of user statistics and operational metrics.

### Purpose
The dashboard allows users to monitor various data insights and perform actions such as data filtering, searching, and downloading reports.

---

## 2. Technology Stack

- **Angular**: Framework used to build the application.
- **PrimeNG**: UI components library for creating tables, charts, and dropdowns.
- **ECharts**: Data visualization library for generating interactive charts.
- **TypeScript**: The language used to build the application.
- **GitHub Pages**: For deployment of the application.

---

## 3. Installation & Setup

### Prerequisites

- **Node.js** (v14 or higher)
- **Angular CLI** (v13 or higher)
- **Git** installed on your system

### Steps to Set Up Locally

1. Clone the repository from GitHub:

```bash
git clone https://github.com/your-repo/angular-dashboard.git
```

2. Navigate to the project directory:
    
```bash
cd angular-dashboard
```
3. Install the dependencies:

```bash
npm install
```
4. Run the project locally:

```bash
ng serve
```
The dashboard will be accessible at `http://localhost:4200/`.

## 4. Features & Components

* **Dashboard Cards**: Displaying quick metrics like total users, active sessions, etc.
* **Data Tables**: Interactive tables with pagination, sorting, and filtering options.
* **Charts**: Visual representation of data using ECharts (e.g., line charts, pie charts).
* **Calendar**: Used for selecting a date range for viewing specific data.
* **User Management**: Ability to filter and search users, with download options for user reports.

## 5. GitHub Pages Deployment

The application is deployed to GitHub Pages for easy access and review. Here’s how it was deployed:

### Steps

1. Ensure the `angular.json` file has the following configuration in the `projects` section:

```json
"architect": {
    "build": {
        "options": {
            "outputPath": "docs",
            "baseHref": "/angular-dashboard/"
        }
    }
}
```

2. Build the project for production:

```bash
ng build --prod --output-path docs --base-href /angular-dashboard/
```

3. Push the `docs` folder to the `gh-pages` branch of the repository.

4. Enable GitHub Pages for the repository by setting the source to the `gh-pages`.


Access the deployed version here: ## (Angular Dashboard)[]

## 6. Evaluation Instructions

### Key Features to Evaluate:

* Responsiveness: Test on both desktop and mobile.
* Data Interactivity: Filter, sort, and paginate tables.
* Charts: Ensure data representation is accurate and dynamic.
* Calendar: Verify the date selection and filtering functionality.
* Deployment: Confirm the application loads correctly from GitHub Pages.

Feel free to review the code and design choices, and provide feedback on potential improvements.
