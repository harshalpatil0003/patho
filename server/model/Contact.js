import { Schema, model } from "mongoose";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false, // Make this optional if needed
    },
    subject: {
      type: String,
      enum: [
        "Booking Assistance",
        "Test Information",
        "Billing Inquiry",
        "Feedback",
        "Other",
      ],
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    attachment: {
      type: String, // Store file paths, URLs, or base64 strings
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Contact = model("Contact", contactSchema);
export default Contact;
