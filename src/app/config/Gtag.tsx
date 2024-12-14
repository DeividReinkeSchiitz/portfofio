import React from "react";
import Script from "next/script";

const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`;

const Gtag = () => {
    // <!-- Google tag (gtag.js) -->
    return <div>
        {/*// <!-- Google tag (gtag.js) -->*/}
        <Script strategy="lazyOnload" async src={gtag}/>
        <Script strategy="lazyOnload" id={"gtag"}
            dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                console.log('GA_ID', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
                    page_path: window.location.pathname
                });
            `
            }}
        />
    </div>
}
export default Gtag;