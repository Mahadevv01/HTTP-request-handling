
# HTTP Request Handling

## Task

Build an Angular service to fetch data from a REST API and display it in a component.

## Requirements

1. **Angular Service for HTTP Requests:**
   - Create an Angular service dedicated to handling HTTP requests using `HttpClient`. This service will act as a bridge between your Angular application and the REST API, managing all the necessary HTTP operations.

2. **Fetch Data from a Mock REST API:**
   - The service will fetch data from a mock REST API endpoint. This could be a service like `jsonplaceholder.typicode.com` or a custom mock server set up for testing purposes.

3. **Display Data in a Component:**
   - The fetched data should be displayed in an Angular component. This involves binding the data received from the service to the component's template.

4. **Error Handling:**
   - Implement error handling in the service to manage scenarios where the HTTP request fails. This could be due to network issues, server errors, or invalid endpoints. The application should handle such errors gracefully and inform the user appropriately.

## Project Setup Instructions

Follow these steps to set up and run the application:

### 1. Clone the Repository
   ```bash
   git clone https://github.com/Mahadevv01/HTTP-request-handling.git
   ```
   Navigate to the project directory:
   ```bash
   cd HTTP-request-handling
   ```

### 2. Install Dependencies
   Use npm to install the necessary dependencies:
   ```bash
   npm install
   ```

### 3. Set Up the Angular Service
   - Create a service using the Angular CLI:
     ```bash
     ng generate service data-fetch
     ```
   - In the generated service (`src/app/data-fetch.service.ts`), inject the `HttpClient` module to handle HTTP requests.
   - Implement methods in this service to fetch data from the API, including error handling logic.

### 4. Create a Component to Display Data
   - Create a new component using the Angular CLI:
     ```bash
     ng generate component data-display
     ```
   - In the component's TypeScript file (`src/app/data-display/data-display.component.ts`), inject the service created earlier and subscribe to the data retrieval method. Bind the received data to the component's template.

### 5. Update the Application Module
   - Import the `HttpClientModule` in `src/app/app.module.ts` to ensure that `HttpClient` can be used across the application.
   - Include the `DataDisplayComponent` in the module declarations.

### 6. Run the Application
   Use the Angular CLI to run the application:
   ```bash
   ng serve
   ```
   Open your browser and navigate to `http://localhost:4200/`. The data fetched from the mock REST API should be displayed in the component.

### 7. Implement Error Handling
   - Enhance the service to include error handling using RxJS operators like `catchError`.
   - In the component, add logic to display an error message if the data fetching fails.

## File Explanations

### 1. `src/app/app.module.ts`
   - The root module of the application where other modules and components are registered. It imports `HttpClientModule` to enable HTTP communication.

### 2. `src/app/data-fetch.service.ts`
   - This service is responsible for making HTTP requests to the REST API. It handles both the data fetching logic and error handling.

### 3. `src/app/data-display/data-display.component.ts`
   - A component that displays the data fetched by the service. It subscribes to the data retrieval method of the service and handles both successful data display and error scenarios.

### 4. `src/styles.css`
   - Global styles for the application. You can modify this file to style your application as needed.

### 5. `angular.json`
   - The workspace configuration file for Angular CLI projects. It contains settings and configurations that dictate how the project is built and served.

## Resources

### 1. Official Angular Documentation
   - [Angular - Getting Started](https://angular.io/start)
   - [Angular HttpClient Guide](https://angular.io/guide/http)

### 2. Video Tutorials
   - [Angular Crash Course](https://www.youtube.com/watch?v=3qBXWUpoPHo)
   - [HTTP Requests in Angular](https://www.youtube.com/watch?v=OEv1nI1cGyc)

### 3. Other Useful Links
   - [RxJS Documentation](https://rxjs.dev/guide/overview)

## Conclusion

This project demonstrates the process of building an Angular service to handle HTTP requests, fetch data from a REST API, and display it in a component. Proper error handling ensures the application can manage failures gracefully. Follow the setup instructions carefully, and refer to the resources provided for further guidance.
