import React, { useEffect, useRef, useState } from "react";
import aes from "crypto-js/aes";
import { enc, AES } from "crypto-js/core";

export const Test = () => {
  var encrypted = AES.encrypt("Message", " Passphrase");
  //U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=
  let en  = encrypted.toString();
  var decrypted = AES.decrypt(en, " Passphrase");
  //4d657373616765
  console.log(decrypted.toString(enc.Utf8))
  
  return (
    <div>
      <h1> Test Page </h1>
      <div className="container pt-4">
        <h2>{encrypted.toString()}</h2>
        <h2>{decrypted.toString()}</h2>
        <h2>{decrypted.toString(enc.Utf8)}</h2>
      </div>
    </div>
  );
};
