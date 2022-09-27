export {};

declare global {
    interface Window {
        fnames: string[]; // Needed for Mailchimp
        ftypes: string[]; // Needed for Mailchimp
    }
}
