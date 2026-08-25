import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';
import { PreferencesProvider } from './context/PreferencesContext';

vi.mock('./services/portfolioApi', () => ({ syncPortfolio: vi.fn(() => Promise.resolve({})) }));

function renderApp() {
  return render(<PreferencesProvider><App /></PreferencesProvider>);
}

describe('portfolio preferences', () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('portfolio-preferences', JSON.stringify({ theme: 'light', language: 'tr' }));
    document.documentElement.dataset.theme = 'light';
  });

  afterEach(cleanup);

  it('renders portfolio content from the static data source', () => {
    renderApp();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText('Ahmet Sabri Güven')).toBeInTheDocument();
    expect(screen.getByText('Unity Game Engine')).toBeInTheDocument();
    expect(screen.getByText('Twitter Clone REST API')).toBeInTheDocument();
    expect(screen.getByText('Kütüphane Sistemi')).toBeInTheDocument();
    expect(screen.queryByText('Kişisel Blog')).not.toBeInTheDocument();
  });

  it('switches and persists the theme', async () => {
    renderApp();
    fireEvent.click(screen.getByRole('button', { name: /dark mode/i }));
    await waitFor(() => expect(document.documentElement).toHaveAttribute('data-theme', 'dark'));
    expect(JSON.parse(localStorage.getItem('portfolio-preferences')).theme).toBe('dark');
  });

  it('switches language without an i18n package', async () => {
    renderApp();
    fireEvent.click(screen.getByRole('button', { name: /english/i }));
    expect(await screen.findByText('A solution-oriented')).toBeInTheDocument();
    expect(document.documentElement).toHaveAttribute('lang', 'en');
  });
});
