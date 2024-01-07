/**
 * An array of routes that are accessible to the public
 * these route do not required authentication
 * @type {string[]}
 */
export const publicRoutes = [
  "/"
];

/**
 * An array of routes that are for authentication
 * these route will redirect the logged user to protected resources routes like user profile and settings
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
];

/**
 * The prefix for API Authentication
 * Routes start with this prefix are used for API authentication purpose;
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in 
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";