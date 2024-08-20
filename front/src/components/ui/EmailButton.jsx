import React from "react";
import gmail from "../../assets/footerIcon/gmail.svg";

export const EmailButton = ({ email }) => {
  const handleEmailClick = () => {
    const subject = "Your Subject Here";
    const body = `Hi Onelogica,

I hope this message finds you well.I am want to enquire about

[Your Message Goes Here]

Best regards,
[Your Name]`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <button
      onClick={handleEmailClick}
      className="px-1 underline "
    >
     sales@onelogica.com
    </button>
  );
};
