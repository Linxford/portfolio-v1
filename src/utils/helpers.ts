// Constants
export const APP_NAME = "fIRST ITERATION OF MY pORT";
export const APP_VERSION = "1.0.0";
export const Club_WhatsApp_Number = "233 548 522 077";
export const Club_Email = "royalsoccerclub15@gmail.com";
export const Developer = "Linxford Kwabena";
export const Developer_Contact = "0249771777 or 0542979998";
export const PayStack_Key = "pk_test_5b0a5416773b64583fa0540876c36c7dcaac69b7";
// Social Hnadles
export const Facebook = "https://m.me/linxford";
export const LinkedIn = "https://linkedin.com/n/linxford";
export const Twitter = "https://x.com/linxford";
export const Telegram = "https://t.me/linxford";
export const Github = "https://github.com/linxford";
export const WhatsApp = "https://wa.me/233542979998";
export const StackOverflow = "https://stackoverflow.com/users/12762432/linxford";
export const Instagram = "https://instagram.com/linxford";
export const YouTube = "https://youtube.com/@linxford";
export const TikTok = "https://www.tiktok.com/@linxford";
export const Discord = "https://discord.com/invite/linxford";

//My Profile Pic
export const MyPic = "src/assets/linxford_prof.png";

// Google Analytics
export const GOOGLE_ANALYTICS_ID = "G-2VJRC57JVY";


// Format a date to 'YYYY-MM-DD'
export function formatDate(date: Date): string {
    return date.toISOString().split("T")[0];
}

// Capitalize the first letter of a string
export function capitalizeFirstLetter(str: string): string {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Calculate the age of a person or player based on their birthdate
export function calculateAge(birthdate: Date): number {
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        return age - 1;
    }
    return age;
}

// Validate an email address
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Generate a random ID
export function generateRandomId(prefix: string = "id"): string {
    return `${prefix}_${Math.random().toString(36).substr(2, 9)}`;
}

// Convert a string to a URL-friendly slug
export function generateSlug(text: string): string {
    return text
        .toLowerCase()
        .trim()
        .replace(/[\s\W-]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

// Calculate match time in minutes
export function calculateMatchDuration(startTime: string, endTime: string): number {
    const start = new Date(`1970-01-01T${startTime}Z`).getTime();
    const end = new Date(`1970-01-01T${endTime}Z`).getTime();
    return Math.round((end - start) / (1000 * 60)); // minutes
}

// Convert a number to a formatted currency string
export function formatCurrency(amount: number, currency: string = "USD"): string {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
    }).format(amount);
}

// Delay function for async/await
export function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Custom sort for objects by key
export function sortByKey<T>(arr: T[], key: keyof T): T[] {
    return arr.sort((a, b) => (a[key] > b[key] ? 1 : -1));
}

// Deep clone an object
export function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

// Example of reusable TypeScript type
export type Player = {
    id: string;
    name: string;
    position: string;
    age: number;
    goals: number;
    assists: number;
};
