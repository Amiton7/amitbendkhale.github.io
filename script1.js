console.log("✅ script1.js is running!");

document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ DOM is fully loaded!");

    const languageSwitcher = document.getElementById("language-switcher");

    if (!languageSwitcher) {
        console.error("❌ Language switcher dropdown not found!");
        return;
    }

    console.log("✅ Language switcher dropdown found!");

    try {
        console.log("✅ Creating translations object...");

        // ✅ Fix: Enclose object keys in quotes ("first-name" instead of first-name)
        const translations = {
            mr: {
                "first-name": "अमित",
                "last-name": "बेंडखळे",
                "blogs": "ब्लॉग्स",
                "hobbies": "छंद",
                "play": "खेळ",
                "contact": "संपर्क",
                "welcome": "माझ्या पोर्टफोलिओमध्ये स्वागत आहे",
                "description": "माझे ब्लॉग्स, छंद आणि परस्परसंवादी खेळ एक्सप्लोर करा."
            },
            sa: {
                "first-name": "अमितः",
                "last-name": "बेंडखळेः",
                "blogs": "ब्लॉगाः",
                "hobbies": "विनोदाः",
                "play": "क्रीडाः",
                "contact": "संपर्कः",
                "welcome": "मम पोर्टफोलियो मध्ये स्वागतं अस्ति",
                "description": "मम ब्लॉगाः, विनोदाः, क्रीडाः च अन्वेषणं कुर्वन्तु।"
            },
            en: {
                "first-name": "Amit",
                "last-name": "Bendkhale",
                "blogs": "Blogs",
                "hobbies": "Hobbies",
                "play": "Play",
                "contact": "Contact",
                "welcome": "Welcome to My Portfolio",
                "description": "Explore my blogs, hobbies, and interactive games."
            }
        };

        console.log("✅ Translations object created successfully!");

        // Function to Change Language
        function changeLanguage(lang) {
            console.log("🌍 Changing language to:", lang);

            // Test if elements exist
            const elements = document.querySelectorAll("[data-key]");
            console.log("🔍 Found elements with data-key:", elements.length);

            if (elements.length === 0) {
                console.error("❌ No elements found with data-key attribute! Check index.html.");
                return;
            }

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

        console.log("✅ Adding event listener to language switcher...");

        // Event Listener for Language Selection
        languageSwitcher.addEventListener("change", function () {
            console.log("🔄 Language changed to:", this.value);
            changeLanguage(this.value);
        });

        console.log("✅ Loading saved language preference...");

        // Load Saved Language on Page Load
        const savedLanguage = localStorage.getItem("selectedLanguage") || "mr";
        languageSwitcher.value = savedLanguage;
        changeLanguage(savedLanguage);

        console.log("✅ Script execution completed successfully!");

    } catch (error) {
        console.error("❌ SCRIPT CRASHED: ", error);
    }
});
