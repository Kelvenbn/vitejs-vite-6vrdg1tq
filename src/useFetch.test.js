import { describe, it, expect, vi } from 'vitest';

describe('useFetch', () => {
  it('deve realizar uma requisição com fetch', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            current: {
              temperature_2m: 25
            }
          })
      })
    );

    const resposta = await fetch('https://api-teste.com');

    const dados = await resposta.json();

    expect(fetch).toHaveBeenCalled();
    expect(dados.current.temperature_2m).toBe(25);
  });
});