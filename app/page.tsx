export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:py-16">
        <section className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Vibe coding yapıyorsun ama takıldın mı?
          </h1>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Yalnız değilsin. Türk indie developer topluluğuna katıl.
          </p>
        </section>

        <section className="mt-10 sm:mt-12">
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="text-2xl" aria-hidden="true">
                  🧪
                </div>
                <div>
                  <h2 className="text-lg font-semibold">12 test kullanıcısı mı lazım?</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Google Play seni üretim öncesi 12 tester'la 14 gün test etmeye zorluyor. Kanalımızda
                    birbirimize yardım ediyoruz.
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <a
                  href="https://t.me/vibe_coder_tr"
                  className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-100/40"
                >
                  Teste katıl →
                </a>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="text-2xl" aria-hidden="true">
                  🤖
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Vibe coding sorun mu var?</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Cursor, Claude, Expo, Supabase... takıldığın yerde kanal var, cevap var.
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <a
                  href="https://t.me/vibe_coder_tr"
                  className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-100/40"
                >
                  Soruyu sor →
                </a>
              </div>
            </article>
          </div>

          <div className="mt-6">
            <h3 className="text-center text-base font-semibold text-slate-200 sm:text-left">
              Rehberler
            </h3>

            <article className="mt-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6">
              <h2 className="text-lg font-semibold">Google Play 12 Test Kullanıcısı Sorunu</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Adım adım çözüm rehberi</p>

              <div className="mt-5">
                <a
                  href="/google-play-12-tester"
                  className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-100/40"
                >
                  Rehberi aç →
                </a>
              </div>
            </article>
          </div>
        </section>

        <footer className="mt-10 text-center text-sm text-slate-400 sm:mt-14">
          <p>Topluluk büyüyor. Erken katıl.</p>
          <a href="https://t.me/vibe_coder_tr" className="mt-3 inline-block text-slate-200 underline underline-offset-4">
            https://t.me/vibe_coder_tr
          </a>
        </footer>
      </div>
    </main>
  );
}

