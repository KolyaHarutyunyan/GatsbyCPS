/* This exists to provide easier configuration for various bits of the site*/
module.exports = {
  peopleDir: "people", // The name of directory that contains your 'people' folder.
  defaultAuthorName: "Custom Programming Solutions", // The default and fallback author ID used for blog posts without a defined author.
  siteUrl: "https://www.customprogrammingsolutions.com",
  contentDir: process.env.CONTENT_DIR || "content/",
  contactFormEndpoint: process.env.GATSBY_CONTACT_FORM_ENDPOINT || "http://localhost/contact-form-api"
};
