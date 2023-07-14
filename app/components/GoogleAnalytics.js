"use client";
import Script from "next/script";

const GoogleAnalytics = ({ GA_TRACKING_ID }) => {
    return (
        <script
            type="text/javascript"
            async
            dangerouslySetInnerHTML={{
                __html: `
              (function(w, d, s, l, i) {
                    w[l] = w[l] || []
                    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
                    const f = d.getElementsByTagName(s)[0],
                      j = d.createElement(s),
                      dl = l != "dataLayer" ? "&l=" + l : ""
                    j.async = true
                    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl
                    f.parentNode.insertBefore(j, f)
                  })(window,document,'script','dataLayer',"${GA_TRACKING_ID}")`,
            }}
        />
    );
};

export default GoogleAnalytics;