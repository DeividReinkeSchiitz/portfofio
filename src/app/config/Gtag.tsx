import React from "react";
import Script from "next/script";

const Gtag = () => {
    // <!-- Google tag (gtag.js) -->
    return <div>
        {/*// <!-- Google tag (gtag.js) -->*/}
        <Script strategy="lazyOnload" async={true} src="https://www.googletagmanager.com/gtag/js?id=G-NKTQ32HPT2"/>
        <Script strategy="lazyOnload" id={"gtag"}
        >
            {
                `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-NKTQ32HPT2');`
            }
        </Script>
    </div>
}
export default Gtag;