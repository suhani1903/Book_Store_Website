import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({  // ✅ Use `new mongoose.Schema`
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String },
    title: { type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema); // ✅ Capitalize model name for consistency
export default Book;
