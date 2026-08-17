import { useState, useEffect } from 'react';

function useFetch(url) {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    let ativo = true;

    async function buscarDados() {
      try {
        setErro(null);

        const resposta = await fetch(url);

        if (!resposta.ok) {
          throw new Error('HTTP ' + resposta.status);
        }

        const json = await resposta.json();

        if (ativo) {
          setDados(json);
          setCarregando(false);
        }
      } catch (err) {
        if (ativo) {
          setErro(err.message);
          setCarregando(false);
        }
      }
    }

    buscarDados();

    const intervalo = setInterval(buscarDados, 60000);

    return () => {
      ativo = false;
      clearInterval(intervalo);
    };
  }, [url]);

  return { dados, carregando, erro };
}

export default useFetch;