import { type ContactFormData } from "@shared/schema";

export interface IStorage {
  saveContactForm(data: ContactFormData): Promise<void>;
}

export class MemStorage implements IStorage {
  private contactForms: ContactFormData[];

  constructor() {
    this.contactForms = [];
  }

  async saveContactForm(data: ContactFormData): Promise<void> {
    this.contactForms.push({
      ...data,
    });
    console.log(`[Contact Form] New submission from ${data.name} (${data.email})`);
    console.log(`Product Interest: ${data.productInterest || 'None specified'}`);
    console.log(`Message: ${data.message}`);
  }
}

export const storage = new MemStorage();
