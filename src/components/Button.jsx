import React from "react";

const Button = ({ styles }) => {
  const handleClick = () => {
    window.location.href = "https://t.me/WENWIFHATCHAT";
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    >
      Join community
    </button>
  );
};

export default Button;

