import { API_URL } from '../config.js';

export default function adminLogin() {
  return `
  <div class="min-h-screen bg-khf-black text-white flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <div class="w-16 h-16 rounded-full bg-gradient-to-br from-khf-red to-khf-green text-white font-head font-extrabold text-xl grid place-items-center mx-auto mb-4 border-2 border-white">KHF</div>
        <h1 class="font-head text-3xl uppercase">Admin Login</h1>
        <p class="text-slate-400 text-sm mt-1">Kenya Handball Federation Dashboard</p>
        <p class="text-slate-500 text-xs mt-1">API: ${API_URL}</p>
      </div>
      <form id="adminLoginForm" class="bg-khf-dark rounded-xl p-6 space-y-4">
        <div>
          <label class="block text-xs uppercase text-slate-400 mb-1">Email</label>
          <input name="email" type="email" required class="w-full bg-khf-black border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white outline-none focus:border-khf-red"/>
        </div>
        <div>
          <label class="block text-xs uppercase text-slate-400 mb-1">Password</label>
          <input name="password" type="password" required class="w-full bg-khf-black border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white outline-none focus:border-khf-red"/>
        </div>
        <button type="submit" class="bg-khf-red hover:bg-red-700 w-full py-2.5 rounded-lg font-bold text-sm">Sign In</button>
        <p id="loginError" class="hidden text-red-400 text-xs text-center"></p>
        <a href="#/" class="block text-center text-xs text-slate-400 hover:text-white mt-2">← Back to website</a>
      </form>
    </div>
  </div>

  <script>
    document.getElementById('adminLoginForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const form = e.target;
      const errEl = document.getElementById('loginError');
      errEl.classList.add('hidden');

      try {
        const res = await fetch('${API_URL}/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: form.email.value,
            password: form.password.value,
          }),
        });

        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.message || 'Invalid credentials');
        }

        const { token, user } = await res.json();
        localStorage.setItem('khf_token', token);
        localStorage.setItem('khf_user', JSON.stringify(user));
        window.location.hash = '#/admin';
      } catch (err) {
        errEl.textContent = err.message;
        errEl.classList.remove('hidden');
      }
    });
  </script>`;
}