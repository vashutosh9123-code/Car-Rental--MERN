import multer from "multer";

const storage = multer.memoryStorage(); // ✅ this gives req.file.buffer

const upload = multer({ storage });

export default upload;