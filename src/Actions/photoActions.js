import { Platform } from "react-native";

// import RNFetchBlob from "react-native-fetch-blob";
// window.Blob = RNFetchBlob.polyfill.Blob;

// export const uploadPost = post => {
//   console.log("uploadPost");

//   let form = new FormData();
//   form.append("text", post.text);

//   // create first file from BASE64, file IO is asynchronous therefore
//   // we need wait for the promise.
//   // The `;BASE64` in `type` is important when creating Blob/File from
//   // BASE64 encoded data.
//   File.build("image.png", base64ImageStr, { type: "image/png;BASE64" })
//     .then(file => {
//       // add the file to form data
//       form.append("avatar", file);
//       // create File object from existing file path, the content type is optional
//       return File.build("image2.png", RNFetchBlob.wrap(pathToAFile), {
//         type: "image/png"
//       });
//     })
//     .then(file => {
//       // add the file to form data, now we have 2 files in form data
//       form.append("avatar", file);
//       return fetch("http://192.168.0.115:3005/news/image", {
//         method: "POST",
//         body: form
//       });
//     })
//     .then(res => {});
// };
export const uploadPost = post => {
  console.log(createFormData(post.image, { text: post.text }));

  var options = {
    method: "POST",
    body: createFormData(post.image, { text: post.text })
  };

  fetch("https://kashams-lldonia.herokuapp.com/news/image", options)
    .then(response => response.json())
    .then(response => {
      console.log("upload succes", response);
      alert("Upload success!");
    })
    .catch(error => {
      console.log("upload error", error);
      alert("Upload failed!");
    });
};

const createFormData = (photo, body) => {
  const data = new FormData();

  data.append("photo", {
    name: photo.fileName,
    type: "image/jpeg",
    uri:
      Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
  });

  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });

  return data;
};
