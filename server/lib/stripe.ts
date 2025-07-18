import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export const STRIPE_PRICE_IDS = {
  FREE: process.env.VITE_STRIPE_FREE_PRICE_ID!,
  UNLIMITED: process.env.VITE_STRIPE_UNLIMITED_PRICE_ID!,
  PRO: process.env.VITE_STRIPE_PRO_PRICE_ID!,
  WHITE_LABEL: process.env.VITE_STRIPE_WHITE_LABEL_PRICE_ID!,
  CUSTOM: process.env.VITE_STRIPE_CUSTOM_PRICE_ID!,
};
