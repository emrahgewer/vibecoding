export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:py-14">
        <section className="text-center sm:text-left">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Google Play 12 Test Kullanıcısı Sorunu Nasıl Çözülür?
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            Uygulamanı Google Play'e göndermek istiyorsun ama önünde bir engel var: en az 12 test
            kullanıcısıyla 14 gün boyunca kapalı test zorunluluğu. Bu yazıda bu sorunu nasıl
            aşacağını adım adım anlatıyoruz.
          </p>
        </section>

        <section className="mt-8 sm:mt-10">
          <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6">
            <h2 className="text-lg font-semibold">BÖLÜM 1 - Sorun Nedir?</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              Google Play, uygulamanı üretime almadan önce kapalı test (closed testing) yapmanı
              zorunlu kılıyor. Bunun için en az 12 kullanıcının test grubuna katılıp uygulamayı
              indirmesi ve bu durumun 14 gün boyunca aktif kalması gerekiyor.
            </p>

            <div className="mt-7">
              <h2 className="text-lg font-semibold">BÖLÜM 2 - Adım Adım Çözüm</h2>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-300 sm:text-base">
                <li>Play Console'da uygulamanı aç, &quot;Test&quot; bölümüne git</li>
                <li>&quot;Kapalı test&quot; oluştur ve bir sürüm yayınla</li>
                <li>Test grubuna en az 12 e-posta adresi ekle</li>
                <li>Davet linkini bu kişilere gönder</li>
                <li>Kişiler linki açıp Play Store'dan uygulamayı indirmeli</li>
                <li>14 gün boyunca 12 kullanıcı kayıtlı kalmalı</li>
                <li>
                  Süre dolunca &quot;Üretime erişim için başvur&quot; aktif hale gelir
                </li>
              </ol>
            </div>

            <div className="mt-7">
              <h2 className="text-lg font-semibold">BÖLÜM 3 - 12 Kişiyi Nereden Bulursun?</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                En pratik yol: VibeCoder TR Telegram kanalı. Kanalda birbirimizin uygulamalarını
                test ediyoruz. Uygulamanı test ettirmek istiyorsan kanala katıl, yaz.
              </p>

              <div className="mt-5">
                <a
                  href="https://t.me/vibe_coder_tr"
                  className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-100/40"
                >
                  Kanala Katıl → https://t.me/vibe_coder_tr
                </a>
              </div>
            </div>
          </article>
        </section>

        <footer className="mt-10 text-center text-sm text-slate-400 sm:mt-14">
          <a href="/" className="text-slate-200 underline underline-offset-4">
            Ana sayfaya dön
          </a>
        </footer>
      </div>
    </main>
  );
}

