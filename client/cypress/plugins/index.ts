import { plugin as cypressFirebasePlugin } from 'cypress-firebase';
import * as admin from 'firebase-admin';

module.exports = (on, config) => {
  return cypressFirebasePlugin(on, config, admin);
};
