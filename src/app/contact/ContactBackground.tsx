"use client";

const ContactBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-2000" />
    </div>
  );
};

export default ContactBackground;