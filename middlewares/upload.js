import multer from "multer";
import path from 'path'


const destination = path.resolve('temp');

const storage = multer.diskStorage({
    destination,
    filename: (reg, file, cd) => {

        const uniquePrefix = `${new Date()}_${Math.round(Math.random() * 1E9)}`
        const filename = `${uniquePrefix}_${file.originalname}`;
        cb(null, filename);
    }
})

const limits = {
    fileSize: 1024 * 1024 * 5,
}

const filterFile = (req, file, cd) => {
    if (file.originalname.split('.').pop() === 'exe') {
        cb(new Error('File extension not allow'))
    }
    cb(null, true);
}
const upload = multer({
    storage,
    limits,
    filterFile,
})


export default upload;