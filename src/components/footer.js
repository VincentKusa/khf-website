export function footer() {
  return `
  <footer class="bg-khf-black text-slate-300 mt-0">
    <div class="container-x py-12 grid gap-8 md:grid-cols-4">
      <div>
        <div class="flex items-center gap-2.5 mb-3">
          <div class="w-11 h-11 rounded-full bg-gradient-to-br from-khf-red to-khf-green text-white font-head font-extrabold text-lg grid place-items-center border-2 border-white">KHF</div>
          <div class="leading-tight">
            <strong class="block text-white font-head text-lg tracking-wide">Kenya Handball</strong>
            <span class="block text-khf-red text-[10px] font-semibold tracking-[2px] uppercase">Federation</span>
          </div>
        </div>
        <p class="text-sm text-slate-400">The official digital home of handball in Kenya. Passion. Performance. Pride.</p>
      </div>
      <div>
        <h4 class="text-white font-head uppercase tracking-wide mb-3">Competitions</h4>
        <ul class="space-y-1.5 text-sm">
          <li><a href="#/competition?league=premier-men" class="hover:text-khf-red">Premier League Men</a></li>
          <li><a href="#/competition?league=premier-women" class="hover:text-khf-red">Premier League Women</a></li>
          <li><a href="#/competition?league=national-men" class="hover:text-khf-red">National League Men</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-head uppercase tracking-wide mb-3">Federation</h4>
        <ul class="space-y-1.5 text-sm">
          <li><a href="#/about" class="hover:text-khf-red">About KHF</a></li>
          <li><a href="#/resources" class="hover:text-khf-red">Governance & Documents</a></li>
          <li><a href="#/development" class="hover:text-khf-red">Development</a></li>
          <li><a href="#/contact" class="hover:text-khf-red">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-head uppercase tracking-wide mb-3">Follow</h4>
        <ul class="space-y-1.5 text-sm">
          <li><a href="#" class="hover:text-khf-red">Facebook</a></li>
          <li><a href="#" class="hover:text-khf-red">Instagram</a></li>
          <li><a href="#" class="hover:text-khf-red">YouTube</a></li>
          <li><a href="#" class="hover:text-khf-red">TikTok</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10 py-4">
      <div class="container-x flex flex-col md:flex-row justify-between gap-2 text-xs text-slate-400">
        <span>© 2026 Kenya Handball Federation. All rights reserved.</span>
        <span class="flex gap-3">
          <a href="#" class="hover:text-white">Privacy Policy</a>
          <a href="#" class="hover:text-white">Terms</a>
          <a href="#/admin-login" class="hover:text-white">Admin Login</a>
        </span>
      </div>
    </div>
  </footer>`;
}