import fs from 'fs/promises'
import path from 'path'
import { nanoid } from 'nanoid'

const contactPath = path.resolve('models', 'contacts', 'contacts.json');
const updateContacts = async (data) => {
  await fs.writeFile(contactPath, JSON.stringify(data, null, 2));

}

const listContacts = async () => {
  const buffer = fs.readFile(contactPath,)
  return JSON.parse(buffer);
}

const getContactById = async (contactId) => {
  const allContact = listContacts();
  const result = allContact.find(contact => contact.id === contactId);
  return result || null;
}

const removeContact = async (contactId) => {
  const allContact = listContacts();

  const deleteIndex = allContact.findIndex(contact => contact.id === contactId);
  if (deleteIndex === -1) {
    return null;
  }
  const [deleteElement] = allContact.splice(deleteIndex, 1);
  await updateContacts(allContact);

  return deleteElement;
}

const addContact = async ({ name, email, phone }) => {
  const allContact = listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  }
  allContact.push(newContact);
  await updateContacts(allContact);
  return newContact;
}

const updateContact = async (contactId, { name, email, phone }) => {
  const allContact = listContacts();
  const updateElementIndex = allContact.findIndex(contact => contact.id === contactId);
  if (updateElementIndex === -1) {
    return null;
  }
  allContact[updateElementIndex] = { name, email, phone };
  await updateContacts(allContact);
  return allContact[updateElementIndex];

}

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
