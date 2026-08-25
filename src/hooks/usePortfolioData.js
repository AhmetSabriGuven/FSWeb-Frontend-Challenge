import { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import portfolio from '../data/portfolio.json';
import { usePreferences } from './usePreferences';
import { syncPortfolio } from '../services/portfolioApi';

export function usePortfolioData() {
  const { language } = usePreferences();
  const [syncStatus, setSyncStatus] = useState('loading');
  const content = useMemo(() => portfolio[language], [language]);

  useEffect(() => {
    const controller = new AbortController();
    syncPortfolio(content, controller.signal)
      .then(() => setSyncStatus('success'))
      .catch((error) => {
        if (error.name === 'CanceledError') return;
        setSyncStatus('fallback');
        toast.info(content.feedback.offline, { toastId: `portfolio-fallback-${language}` });
      });

    return () => controller.abort();
  }, [content, language]);

  return { content, syncStatus };
}
