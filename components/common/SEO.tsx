import Head from "next/head";

const SEO = ({
  title = "Receitas da Vânia - Blog",
  description = "Blog do canal do YouTube Receitas da Vânia.",
  image = "https://yt3.ggpht.com/CBD8CezA4UO5trpOMoztu8TZEN5sGpS9Melsj1uTWCUPL_xizi5rpxfsUZK61E-EAaJcbUtMng=s176-c-k-c0x00ffffff-no-rj",
  url = "https://www.youtube.com/channel/UCGr0EyuvQ5HHFy56oN1kc9A",
  type = "blog",
  author = "Francisco Castro",
  keywords = ["blog", "cozinha", "comida", "gastronomia", "receita", "fácil", "comer", "youtube"]
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta
        name="description"
        content={description}
      />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords.join(",")} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:image"
        content={image}
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta
        property="twitter:title"
        content={title}
      />
      <meta
        property="twitter:description"
        content={description}
      />
      <meta
        property="twitter:image"
        content={image}
      />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;