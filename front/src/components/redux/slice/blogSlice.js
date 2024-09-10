import { createSlice } from "@reduxjs/toolkit";
import CryptoJS from "crypto-js";

// Replace with your key and IV
const key = CryptoJS.enc.Hex.parse(
  "cff9e8db821473d8503e103a916a9a450dd0a8e2772b3cf9154f072fbeac1975"
);
const iv = CryptoJS.enc.Hex.parse("e2f8f0513154e6c31ec6d32082c2c8b1");

function decrypt(encryptedText) {
  const [ivHex, encryptedHex] = encryptedText.split(":");
  const iv = CryptoJS.enc.Hex.parse(ivHex);
  const encrypted = CryptoJS.enc.Hex.parse(encryptedHex);
  const encryptedBase64 = CryptoJS.enc.Base64.stringify(encrypted);

  const decrypted = CryptoJS.AES.decrypt(encryptedBase64, key, { iv: iv });
  return decrypted.toString(CryptoJS.enc.Utf8);
}

const initialState = {
  data: [],
  selectedBlog: JSON.parse(localStorage.getItem("selectedBlog")) || {},
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setBlogData: (state, action) => {
      state.data = action.payload;
    },
    decryptBlogData: (state, action) => {
      try {
        const encryptedDataList = action.payload;
        if (Array.isArray(encryptedDataList)) {
          const decryptedBlogList = encryptedDataList.map((encryptedBlog) => {
            const decryptedJson = decrypt(encryptedBlog.encryptedData);
            const blogData = JSON.parse(decryptedJson);
            return {
              id: encryptedBlog.id,
              ...blogData,
            };
          });
          state.data = decryptedBlogList;
        } else {
          console.error("Expected an array, but received:", encryptedDataList);
        }
      } catch (error) {
        console.error("Failed to decrypt blog data:", error);
      }
    },
    setSelectedBlog: (state, action) => {
      state.selectedBlog = action.payload;
      localStorage.setItem("selectedBlog", JSON.stringify(action.payload));
    },
  },
});

export const { decryptBlogData, setBlogData, setSelectedBlog } = blogSlice.actions;
export default blogSlice.reducer;
