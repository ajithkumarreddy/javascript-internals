/**
 * Global Scope
 *
 * Definition:
 * Variables declared outside any function or block belong to the global scope.
 *
 * Key Points:
 * - Global variables can be accessed from anywhere in the program.
 * - Functions can access global variables.
 * - Avoid excessive use of global variables because they can lead to naming conflicts.
 * - Global variables remain in memory for the lifetime of the application.
 */

const appName = "React";

function showApp() {
  console.log(appName); // React
}

showApp();
console.log(appName); // React
