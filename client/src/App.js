import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import useFacebookSDK from './useFacebookSDK'; // Import the custom hook

const QuillEditorComponent = () => {
  const [content, setContent] = useState('');
  const appId = '1487730068509954'; // Replace with your Facebook App ID

  useFacebookSDK(appId); // Use the custom hook

  const handleShare = () => {
    window.FB.login(function(response) {
      if (response.authResponse) {
        window.FB.api(
          '/me/feed',
          'POST',
          { message: content },
          function(response) {
            if (response && !response.error) {
              alert('Post shared successfully!');
            } else {
              alert('Error while sharing the post');
            }
          }
        );
      } else {
        alert('User cancelled login or did not fully authorize.');
      }
    }, { scope: 'publish_to_groups' }); // Adjust permissions as needed
  };

  return (
    <div>
      <ReactQuill value={content} onChange={setContent} />
      <button onClick={handleShare}>Share on Facebook</button>
    </div>
  );
};

export default QuillEditorComponent;
