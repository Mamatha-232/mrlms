import { useState } from 'react';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="glass-card max-w-md mx-auto p-8 rounded-3xl mt-8">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Forgot Password</h2>
      <p className="text-slate-600 dark:text-slate-300 mt-2">Enter your email and we will send reset instructions.</p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="w-full rounded-xl border border-slate-300 dark:border-white/10 p-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100" required />
        <button className="btn-primary w-full">Send Reset Link</button>
      </form>
      {sent && <p className="text-sm text-green-600 dark:text-green-300 mt-3">Reset link sent to your email (mock).</p>}
    </div>
  );
};

export default ForgotPasswordPage;
