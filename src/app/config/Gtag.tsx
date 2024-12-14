import  {useEffect} from "react";
import ReactGA from 'react-ga4';

const TRACKING_ID = "G-NKTQ32HPT2";
const Gtag = () => {
    useEffect(() => {
        ReactGA.initialize(TRACKING_ID);
        // Send pageview with a custom path
        ReactGA.send({ hitType: "pageview", page: "/", title: "Home Page" });
    }, [])

    // <!-- Google tag (gtag.js) -->
    // return <div>
    //     {/*// <!-- Google tag (gtag.js) -->*/}
    //     <Script strategy="lazyOnload" async={true} src="https://www.googletagmanager.com/gtag/js?id=G-NKTQ32HPT2"/>
    //     <Script strategy="lazyOnload" id={"gtag"}
    //     >
    //         {
    //             `window.dataLayer = window.dataLayer || [];
    //             function gtag(){dataLayer.push(arguments);}
    //             gtag('js', new Date());
    //
    //             gtag('config', 'G-NKTQ32HPT2');`
    //         }
    //     </Script>
    // </div>
    return <></>
}
export default Gtag;