// Ensure script runs only after the page loads completely
document.addEventListener("DOMContentLoaded", () => {
    const languageSwitcher = document.getElementById("language-switcher");

    // Language Translations
    const translations = {
        mr: {
            first-name: "अमित",
            last-name: "बेंडखळे",
            blogs: "ब्लॉग्स",
            hobbies: "छंद",
            play: "खेळ",
            contact: "संपर्क",
            welcome: "माझ्या पोर्टफोलिओमध्ये स्वागत आहे",
            description: "माझे ब्लॉग्स, छंद आणि परस्परसंवादी खेळ एक्सप्लोर करा."
        },
        sa: {
            first-name: "अमित",
            last-name: "बेंडखळे",
            blogs: "ब्लॉगाः",
            hobbies: "विनोदाः",
            play: "क्रीडाः",
            contact: "संपर्कः",
            welcome: "मम पोर्टफोलियो मध्ये स्वागतं अस्ति",
            description: "मम ब्लॉगाः, विनोदाः, क्रीडाः च अन्वेषणं कुर्वन्तु।"
        },
        en: {
            first-name: "Amit",
            last-name: "Bendkhale",
            blogs: "Blogs",
            hobbies: "Hobbies",
            play: "Play",
            contact: "Contact",
            welcome: "Welcome to My Portfolio",
            description: "Explore my blogs, hobbies, and interactive games."
        }
    };

    // Function to Change Language
    function changeLanguage(lang) {
        document.querySelectorAll("[data-key]").forEach(element => {
            const key = element.getAttribute("data-key");
            element.textContent = translations[lang][key];
        });

        // Save Language Preference in Local Storage
        localStorage.setItem("selectedLanguage", lang);
    }

    // Event Listener for Language Selection
    languageSwitcher.addEventListener("change", function() {
        changeLanguage(this.value);
    });

    // Load Saved Language on Page Load
    const savedLanguage = localStorage.getItem("selectedLanguage") || "mr"; // Default Marathi
    languageSwitcher.value = savedLanguage;
    changeLanguage(savedLanguage);
});
