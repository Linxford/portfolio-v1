import ReactGA from 'react-ga4';
import { GOOGLE_ANALYTICS_ID } from './helpers';


// Initialize GA
export const initGA = () => {
    ReactGA.initialize(GOOGLE_ANALYTICS_ID);
};

// Log page views
export const logPageView = (path: string) => {
    ReactGA.send({ hitType: 'pageview', page: path });
};

// Log custom events
export const logEvent = (category: string, action: string, label?: string) => {
    ReactGA.event({
        category,
        action,
        label,
    });
};
