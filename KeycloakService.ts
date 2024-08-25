// src/services/KeycloakService.ts
import Keycloak from 'keycloak-js';

const keycloak = Keycloak({
  url: 'http://localhost:8080/auth',
  realm: 'your-realm',
  clientId: 'your-client-id',
});

export const initKeycloak = (onAuthenticatedCallback: () => void) => {
  keycloak
    .init({ onLoad: 'login-required' })
    .then((authenticated) => {
      if (authenticated) {
        onAuthenticatedCallback();
      } else {
        keycloak.login();
      }
    })
    .catch(console.error);
};

export const doLogout = () => keycloak.logout();

export const getToken = () => keycloak.token;

export const isLoggedIn = () => !!keycloak.token;

export const updateToken = (successCallback: () => void) =>
  keycloak.updateToken(5).then(successCallback).catch(doLogout);

export const getUsername = () => keycloak.tokenParsed?.preferred_username;
