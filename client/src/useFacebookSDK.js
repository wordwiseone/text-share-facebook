import { useEffect } from 'react';

const useFacebookSDK = (appId) => {
  useEffect(() => {
    // Load the Facebook SDK script
    const loadFacebookSDK = () => {
      if (document.getElementById('facebook-jssdk')) {
        return;
      }
      
      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src = 'https://connect.facebook.net/en_US/sdk.js';
      script.onload = () => {
        window.FB.init({
          appId: appId,
          cookie: true,
          xfbml: true,
          version: 'v13.0' // Make sure this is a valid version
        });
      };
      document.body.appendChild(script);
    };

    loadFacebookSDK();
  }, [appId]);
};

export default useFacebookSDK;
