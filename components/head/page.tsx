import Head from "next/head";

const HeadComponent = ({title, nameMeta, descMeta}) => {
    return (
        <Head>
          <title>{title}</title>
          <meta
            name={nameMeta}
            description={descMeta}
          />
        </Head>
    );
}

export default HeadComponent;
