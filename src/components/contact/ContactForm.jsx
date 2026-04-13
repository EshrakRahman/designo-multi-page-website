import { Container } from "../shared";

export default function ContactForm() {
  return (
    <Container fullWidth={true}>
      <section className="bg-peach py-30 lg:py-15 md:rounded-2xl px-10 lg:px-20 two-circles-pattern lg:flex lg:gap-15 lg:items-center">
        <div className="top flex flex-col gap-4 pb-10 lg:w-[75%]">
          <p className="text-3xl leading-9 font-medium text-white text-center md:text-left md:text-5xl md:leading-12">
            Contact Us
          </p>
          <p className="text-base leading-6 text-white text-center md:text-left">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <form
          action="#"
          method="POST"
          className="space-y-4 flex flex-col gap-6 w-full"
        >
          <div>
            <label className="block text-sm font-medium text-white/50 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 border-b-2 border-white   focus:border-b-2 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/50 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-2 border-b-2 border-white   focus:border-b-2 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/50 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-2 border-b-2 border-white  focus:border-b-2 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/50 mb-1">
              Your Message
            </label>
            <textarea
              rows="4"
              placeholder="How can we help you?"
              className="w-full px-4 py-2 border-b-2 border-white   focus:border-b-2 focus:outline-none transition"
            ></textarea>
          </div>

          <button type="submit" className="btn-regular">
            Submit
          </button>
        </form>
      </section>
    </Container>
  );
}
