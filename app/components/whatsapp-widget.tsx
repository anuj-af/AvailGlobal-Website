import { useEffect } from "react";

const WhatsAppWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js";
    script.async = true;
    document.body.appendChild(script);

    const wa_btnSetting = {
      btnColor: "#5d4e37",
      ctaText: "Contact Us",
      cornerRadius: 40,
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
      btnPosition: "right",
      whatsAppNumber: "918989548626",
      welcomeMessage:
        "Hi, I'm interested in learning more about your products and services at AvailGlobal.",
      zIndex: 999999,
      btnColorScheme: "light",
    };

    script.onload = () => {
      if (window._waEmbed) {
        window._waEmbed(wa_btnSetting);
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default WhatsAppWidget;
