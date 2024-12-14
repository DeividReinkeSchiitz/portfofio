import React from "react";
import Script from "next/script";

const Gtag = () => {
    // <!-- Google tag (gtag.js) -->
    return <div>
        {/*// <!-- Google tag (gtag.js) -->*/}
        <Script strategy="lazyOnload" async src="https://www.googletagmanager.com/gtag/js?id=G-NKTQ32HPT2"/>
        <Script strategy="lazyOnload" id={"gtag"}
            dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                
                  gtag('config', 'G-NKTQ32HPT2');
            `
            }}
        />
    </div>
}
export default Gtag;