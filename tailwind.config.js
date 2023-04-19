/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      lg1: "1240px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      fontFamily: {
        FiraGo: ["FiraGo", "sans-serif"],
      },
      gridTemplateColumns: {
        "4/64": "repeat(4, 64px)",
        "8/88": "repeat(8, 88px)",
        "12/72": "repeat(12, 72px)",
        "12/80": "repeat(12, 80px)",
      },
      colors: {
        brand: {
          gray: {
            100: "#FFFFFF",
            200: "#F9FAFC",
            300: "#EDF0F7",
            400: "#E2E7F0",
            500: "#4A5468",
          },
          red: {
            200: "#ffc8c5",
            300: "#ffa29d",
            400: "#ff6c64",
            500: "#ff3b30", //Primary Color
            600: "#ed2015",
            700: "#c8170d",
            800: "#a5170f",
            900: "#881a14",
            950: "#4b0804",
          },
        },
      },
      fontSize: {
        "brand-headline-1": [
          "1.5rem", //24px
          {
            lineHeight: "2.5rem", //40px
            letterSpacing: "0.021875rem", //0.35px
            fontWeight: "600", //SemiBold
          },
        ],

        "brand-headline-2": [
          "1rem", //16px
          {
            lineHeight: "1.5rem", //24px
            letterSpacing: "0.0219rem", //0.35px
            fontWeight: "600", //SemiBold
          },
        ],

        "brand-headline-3": [
          "0.813rem", //13px
          {
            lineHeight: "1.125rem", //18px
            letterSpacing: "0.0125rem", //0.20px
            fontWeight: "500", //Medium
          },
        ],

        "brand-logo-text": [
          "1rem", //16px
          {
            lineHeight: "2.125rem", //34px
            letterSpacing: "0.0225rem", //0.36px
            fontWeight: "600", //SemiBold
          },
        ],

        "brand-header-text": [
          "1rem", //16px
          {
            lineHeight: "1.25rem", //20px
            letterSpacing: "-0.015rem", //-0.24px
            fontWeight: "400", //Regular
          },
        ],

        "brand-body-text": [
          "1rem", //16px
          {
            lineHeight: "1.5rem", //24px
            letterSpacing: "0.03125rem", //0.5px
            fontWeight: "400", //Regular
          },
        ],

        "brand-sm": [
          "0.75rem", //12px
          {
            lineHeight: "1rem", //16px
            letterSpacing: "0.0125rem", //0.20px
            fontWeight: "400", //Regular
          },
        ],

        "brand-14/20": [
          "0.875rem", //14px
          {
            lineHeight: "1.25rem", //20px
            letterSpacing: "-0.015rem", //-0.24px
            fontWeight: "400", //Regular
          },
        ],

        "brand-footnote": [
          "0.8125rem", //13px
          {
            lineHeight: "1.125rem", //18px
            letterSpacing: "-0.005rem", //-0.08px
            fontWeight: "400", //Regular
          },
        ],

        "brand-footnote-semiBold": [
          "0.8125rem", //13px
          {
            lineHeight: "1.125rem", //18px
            letterSpacing: "-0.005rem", //-0.08px
            fontWeight: "600", //SemiBold
          },
        ],
      },
      boxShadow: {
        big: "0px 0px 40px rgba(0, 0, 0, 0.12)",
        small: "0px 0px 20px rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        big: "0px 0px 40px rgba(0, 0, 0, 0.12)",
        small: "0px 0px 20px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        lg1: "0.625rem", //10px
      },
    },
  },
  plugins: [],
};
