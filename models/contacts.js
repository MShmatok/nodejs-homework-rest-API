import { Schema, model } from 'mongoose';

const contactSchema = new Schema({
    name: String,
    email: String,
    phone: Number
})

const ModelMovies = model('contact', contactSchema);

export default ModelMovies