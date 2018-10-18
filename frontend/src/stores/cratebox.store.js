import { cratebox } from 'cratebox';
// Import Auth Store
import { AuthStore } from './auth.store';
// Instantiate Cratebox
const crate = cratebox();

/**
 * Describe all of the Cratebox Stores
 */
crate.describeStore(AuthStore); // Authentication Store

export { crate as cratebox };
