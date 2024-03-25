import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { googleAnalyticsId } from '../data/data';

const Analytics = () => {
  useEffect(() => {
    ReactGA.initialize(googleAnalyticsId);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return null;
};

export default Analytics;
