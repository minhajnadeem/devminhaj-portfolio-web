export const contactDetails = {
  email: 'minhaj.lib@gmail.com',
  whatsapp: '923346241289',
  whatsappDisplay: '+92 334 6241289',
  response: 'Reply within one hour during business hours.',
};

export function enquiryLinks(context?: string) {
  const subject = context ? `Project enquiry — ${context}` : 'Project enquiry';
  const introduction = context
    ? `Hi Minhaj, I’d like to discuss a project related to ${context}.`
    : 'Hi Minhaj, I’d like to discuss a project.';
  const body = `${introduction}\n\nMy business:\nWhat I want to launch or improve:\nPreferred timeline:\nBudget range (or need guidance):`;
  return {
    email: `mailto:${contactDetails.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    whatsapp: `https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent(body)}`,
  };
}
