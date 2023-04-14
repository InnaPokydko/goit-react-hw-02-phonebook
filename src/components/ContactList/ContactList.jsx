import React from "react";
import { ContactItem } from "components/ContactItem/ContactItem";

export const ContactList = ContactItem.map((ContactItemId) =>
  <li key={ContactItemId.id}>
    {ContactItemId.text}
  </li>
)

