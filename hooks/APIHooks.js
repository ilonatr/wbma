import {useState, useEffect} from 'react';

const apiurl = 'http://media.mw.metropolia.fi/wbma/';

const useLoadMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const loadMedia = async (limit = 10) => {
    try {
      const response = await fetch(apiurl + 'media?limit=' + limit);
      const json = await response.json();
      const media = await Promise.all(json.map(async (item) => {
        const response = await fetch(apiurl + 'media/' + item.file_id);
        const json = await response.json();
        return json;
      }));
      setMediaArray(media);
    } catch (error) {
      console.error('loadMedia error', error);
    }
  };
  useEffect(() => {
    loadMedia();
  }, []);

  return mediaArray;
};

export {useLoadMedia};
