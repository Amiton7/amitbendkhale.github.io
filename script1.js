document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ script.js is loaded and running!"); // Debugging

    const languageSwitcher = document.getElementById("language-switcher");

    // Ensure dropdown exists before proceeding
    if (!languageSwitcher) {
        console.error("❌ Language switcher dropdown not found!");
        return;
    }

    console.log("✅ Language switcher dropdown found!"); // Debugging

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
            first-name: "अमितः",
            last-name: "बेंडखळेः",
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
        console.log("🌍 Changing language to:", lang); // Debugging
    
        // Test if elements exist
        const elements = document.querySelectorAll("[data-key]");
        console.log("🔍 Found elements with data-key:", elements.length);
    
        elements.forEach(element => {
            const key = element.getAttribute("data-key");
            console.log(`🔑 Updating key: ${key} with ${translations[lang][key]}`);
    
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            } else {
                console.warn(`⚠️ Missing translation for key: ${key} in language: ${lang}`);
            }
        });
    
        // Save Language Preference in Local Storage
        localStorage.setItem("selectedLanguage", lang);
    }


    // Event Listener for Language Selection
    languageSwitcher.addEventListener("change", function () {
        console.log("🔄 Language changed to:", this.value);
        changeLanguage(this.value);
    });

    // Load Saved Language on Page Load
    const savedLanguage = localStorage.getItem("selectedLanguage") || "mr"; // Default Marathi
    languageSwitcher.value = savedLanguage;
    changeLanguage(savedLanguage);
});
