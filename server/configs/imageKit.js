import ImageKit from "@imagekit/nodejs"



var imagekit = new ImageKit({
  publicKey:  process.env.IMAGE_PUBLIC_KEY,
  privateKey: process.env.IMAGE_PRIVATE_KEY,
  urlEndPoint: process.env.IMAGE_URL_ENDPOINT,
});





export default imagekit