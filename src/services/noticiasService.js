

import Parser from 'rss-parser/dist/rss-parser.min.js';

export const feedNoticias = async () => {
  const parser = new Parser();
  const URL_FEED = 'https://www.trt7.jus.br/index.php?option=com_content&view=category&id=152&Itemid=887&format=feed&type=rss';

  // Como o acesso direto pode causar erro de CORS no navegador, usamos um proxy público.
  const PROXY_URL = 'https://api.allorigins.win/get?url=';

  try {
    const response = await fetch(`${PROXY_URL}${encodeURIComponent(URL_FEED)}`);
    const data = await response.json();
    console.log("🚀 ~ feedNoticias ~ data: ", data);
    let contents = data.contents;
    // Se o AllOrigins retornou um URI data:base64 (ocorre quando o feed é detectado como binário ou compactado)
    if (contents?.startsWith('data:')) {
      const base64Index = contents.indexOf('base64,');
      if (base64Index !== -1) {
        const base64Content = contents.substring(base64Index + 7);
        // Decodificar base64 preservando caracteres especiais (UTF-8)
        const binaryString = atob(base64Content);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.codePointAt(i);
        }
        contents = new TextDecoder('utf-8').decode(bytes);
      }
    }

    const feed = await parser.parseString(contents);
    console.log("🚀 ~ feedNoticias ~ feed: ", feed);

    return feed.items.slice(3, 6).map(item => {
      // Tentar extrair uma imagem da descrição se houver tags <img>
      // O feed do TRT7 costuma colocar a imagem no 'content' ou 'description'
      const content = item.content || item.description || '';
      const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
      let imageUrl = imgMatch ? imgMatch[1] : null;
      console.log("🚀 ~ feedNoticias ~ imageUrl: ", imageUrl);

      // Caso a imagem seja um caminho relativo, adicione a base da URL
      if (imageUrl?.startsWith('/')) {
        imageUrl = 'https://www.trt7.jus.br' + imageUrl;
      }

      return {
        title: item.title,
        link: item.link,
        date: item.pubDate ? new Date(item.pubDate).toLocaleDateString('pt-BR') : '',
        description: (item.contentSnippet || item.description || '').replaceAll(/<[^>]*>?/gm, '').substring(0, 150) + '...',
        image: imageUrl || 'https://via.placeholder.com/350x200?text=Noticia+TRT7'
      };
    });
  } catch (error) {
    console.error('Erro ao buscar notícias:', error);
    return [];
  }
};
