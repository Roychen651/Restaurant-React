import { CONTACT } from "../constants";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = "Hey Zenith & Sons, I want to talk with you about a reservation.";
    const phoneNumber = "+972508815855";
    const url = `https://wa.me/${phoneNumber.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="container mx-auto py-16">
      <h2 className="mb-8 text-center text-3xl lg:text-4xl">Contact Us</h2>
      <div className="text-neutral-400">
        {CONTACT.map((detail) => (
          <p
            key={detail.key}
            className="my-20 border-b-2 border-dotted border-neutral-700 pb-12 text-center text-2xl tracking-tighter lg:text-3xl"
          >
            {detail.value}
          </p>
        ))}
        <div className="flex justify-center">
          <button
            onClick={handleWhatsAppClick}
            className="mt-8 px-6 py-3 bg-neutral-700 text-white rounded-full hover:bg-neutral-500 transition duration-300"
          >
            Talk With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
