const ContactPage = () => (
  <div className="glass-card p-8 rounded-3xl max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Contact Us</h2>
    <p className="text-slate-600 dark:text-slate-300 mt-2">Need support? Send us a message and we'll respond soon.</p>
    <form className="mt-6 space-y-4">
      <input placeholder="Name" className="w-full rounded-xl border border-slate-300 dark:border-white/10 p-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100" />
      <input placeholder="Email" type="email" className="w-full rounded-xl border border-slate-300 dark:border-white/10 p-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100" />
      <textarea placeholder="Message" rows="5" className="w-full rounded-xl border border-slate-300 dark:border-white/10 p-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"></textarea>
      <button type="submit" className="btn-primary">Send Message</button>
    </form>
  </div>
);

export default ContactPage;
