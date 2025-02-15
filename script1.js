document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ script1.js is loaded and running!");

    const languageSwitcher = document.getElementById("language-switcher");

    // Check if dropdown exists
    if (!languageSwitcher) {
        console.error("❌ Language switcher dropdown not found!");
        return;
    }

    console.log("✅ Language switcher dropdown found!");

    // Test Event Listener
    languageSwitcher.addEventListener("change", function () {
        console.log("🔄 Language changed to:", this.value);
    });
});
