/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

// gatsby-ssr.js
const React = require("react");

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="mailerlite"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){
          (w[f].q=w[f].q||[]).push(arguments);};
          l=d.createElement(e);l.async=1;l.src=u;
          n=d.getElementsByTagName(e)[0];
          n.parentNode.insertBefore(l,n);
        })(window,document,'script',
        'https://assets.mailerlite.com/js/universal.js','ml');
        ml('account','771019');`, // <-- your account ID
      }}
    />,
  ]);
};
