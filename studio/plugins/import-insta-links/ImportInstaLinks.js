import React, { useState } from "react";
import fetch from "node-fetch";
// https://github.com/css-modules/css-modules
import styles from "./ImportInstaLinks.css";

const ImportInstaLinks = () => {
  const [importing, setImporting] = useState(false);

  const importInsta = async () => {
    setImporting(true);
    try {
      // Promise.all() lets us coalesce multiple promises into a single super-promise
      const data = await Promise.all([
        /* Alternatively store each in an array */
        // var [x, y, z] = await Promise.all([
        // parse results as json; fetch data response has several reader methods available:
        //.arrayBuffer()
        //.blob()
        //.formData()
        //.json()
        //.text()
        fetch(
          "https://insta.thclabelsolutions.com/.netlify/functions/import-ig-post-images"
        ).then((response) => response.json()), // parse each response as json
        fetch(
          "https://insta.thclabelsolutions.com/.netlify/functions/grams-to-sanity"
        ).then((response) => response.json()),
      ]);

      console.log(data)
      
    } catch (error) {
      console.log(error);
    }
    setImporting(false);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>Import InstaLinks and Images</h2>
      </header>
      <button
        className={styles.button}
        type="button"
        onClick={importInsta}
        disabled={importing}
      >
        {importing ? "Importing..." : "Import"}
      </button>
    </div>
  );
};
export default ImportInstaLinks;
