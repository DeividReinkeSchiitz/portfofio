import React from "react";

 const Gtag = () => (
    // <!-- Google tag (gtag.js) -->
    <div>
        {/*// <!-- Google tag (gtag.js) -->*/}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NKTQ32HPT2"></script>
        <script
            dangerouslySetInnerHTML={{__html: `
                <!-- Google tag (gtag.js) -->
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
            
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname
                });
            `}}
        />
    </div>
)

export default Gtag;