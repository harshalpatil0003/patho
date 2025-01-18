// Import the Contact model
import Contact from "../model/Contact.js";

// Create a new contact form entry
const createContact = async (req, res) => {
  try {
    // Extract the contact information from the request body
    const { name, email, phone, subject, message } = req.body;
    const attachment = req.file ? req.file.path : null; // Handle file upload

    // Create a new contact document
    const newContact = new Contact({ name, email, phone, subject, message, attachment });

    // Save the new contact document to the database
    await newContact.save();

    // Return a success response with the new contact document
    res.status(201).json({ message: "Contact form submitted successfully", contact: newContact });
  } catch (error) {
    // Return an error response with the error message
    res.status(500).json({ message: "Error submitting form", error: error.message });
  }
};

// Get all contact form entries
const getAllContacts = async (req, res) => {
  try {
    // Retrieve all contact documents from the database
    const contacts = await Contact.find();

    // Return a success response with the contact documents
    res.status(200).json(contacts);
  } catch (error) {
    // Return an error response with the error message
    res.status(500).json({ message: "Error fetching contacts", error: error.message });
  }
};

// Get a single contact form entry by ID
const getContactById = async (req, res) => {
  try {
    // Extract the contact ID from the request parameters
    const { id } = req.params;

    // Retrieve the contact document from the database by ID
    const contact = await Contact.findById(id);

    // Check if the contact document exists
    if (!contact) {
      // Return a not found response
      return res.status(404).json({ message: "Contact not found" });
    }

    // Return a success response with the contact document
    res.status(200).json(contact);
  } catch (error) {
    // Return an error response with the error message
    res.status(500).json({ message: "Error fetching contact", error: error.message });
  }
};

// Delete a contact form entry by ID
const deleteContact = async (req, res) => {
  try {
    // Extract the contact ID from the request parameters
    const { id } = req.params;

    // Delete the contact document from the database by ID
    const contact = await Contact.findByIdAndDelete(id);

    // Check if the contact document exists
    if (!contact) {
      // Return a not found response
      return res.status(404).json({ message: "Contact not found" });
    }

    // Return a success response with a success message
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    // Return an error response with the error message
    res.status(500).json({ message: "Error deleting contact", error: error.message });
  }
};

// Export the contact controllers
export { createContact, getAllContacts, getContactById, deleteContact };