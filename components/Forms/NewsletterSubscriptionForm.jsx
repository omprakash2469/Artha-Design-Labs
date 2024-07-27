export default function NewsletterSubscriptionForm() {
  return (
    <section className="container py-10 xl:py-20">
      <div className="bg-theme-one p-5 xl:py-20 rounded-3xl text-center xl:px-44 ">
        <span className="h-1 bg-theme-six w-14 mb-4 block mx-auto"></span>
        <h2 className="primary-heading">Subscribe to Our Newsletter</h2>
        <p className="-mt-2 mb-8">
          Stay ahead of architectural trends and receive exclusive insights by
          subscribing to our newsletter. Don't miss out on the opportunity to
          elevate your inbox with inspiration from Iconic Structures.
        </p>

        <form
          action=""
          className="grid grid-cols-[4fr_1fr] xl:w-[450px] gap-x-4 mx-auto"
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="border border-slate-400 outline-none py-2 px-4"
          />
          <button type="submit" className="btn-primary rounded-lg">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
