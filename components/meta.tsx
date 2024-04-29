import Head from 'next/head';

export function Meta({description,content}){
    return(
        <Head className='font-mulish'>
            <title>Kimbundu Tekh</title>
            <meta name={description} content={content} />
            <script 
                async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5514991570328030"
                crossOrigin="anonymous">
            </script>
        </Head>
    );
}
