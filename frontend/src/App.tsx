import { CalendarDays, Hotel, Users, BedDouble, Sparkles, Clock3 } from 'lucide-react';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <div className="space-y-8">
        <section className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
          <div className="rounded-[2rem] bg-white/95 p-8 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-200/80 backdrop-blur">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
                  Nowoczesny panel hotelu
                </span>
                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950">Zarządzaj rezerwacjami i pokojami szybciej</h1>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                  Przejrzysty dashboard dla recepcji i hotel managera. Sprawdź dostępność, status pokoi oraz nadchodzące przyjazdy na jednym ekranie.
                </p>
              </div>
              <div className="grid gap-3 sm:flex">
                <button className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/15 transition hover:bg-indigo-700">
                  <Sparkles className="mr-2 h-4 w-4" /> Nowa rezerwacja
                </button>
                <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                  Przegląd pokoi
                </button>
              </div>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center justify-between text-slate-500">
                  <span className="text-sm font-medium">Zajęte pokoje</span>
                  <BedDouble className="h-5 w-5 text-indigo-600" />
                </div>
                <p className="mt-6 text-4xl font-semibold text-slate-950">18 / 25</p>
                <p className="mt-2 text-sm text-slate-500">72% obłożenia</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center justify-between text-slate-500">
                  <span className="text-sm font-medium">Aktywni goście</span>
                  <Users className="h-5 w-5 text-emerald-600" />
                </div>
                <p className="mt-6 text-4xl font-semibold text-slate-950">34</p>
                <p className="mt-2 text-sm text-slate-500">Dzisiaj w hotelu</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center justify-between text-slate-500">
                  <span className="text-sm font-medium">Nadchodzące zameldowania</span>
                  <CalendarDays className="h-5 w-5 text-orange-500" />
                </div>
                <p className="mt-6 text-4xl font-semibold text-slate-950">7</p>
                <p className="mt-2 text-sm text-slate-500">W ciągu 24 godzin</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center justify-between text-slate-500">
                  <span className="text-sm font-medium">Średni czas pobytu</span>
                  <Clock3 className="h-5 w-5 text-sky-600" />
                </div>
                <p className="mt-6 text-4xl font-semibold text-slate-950">2.9 dni</p>
                <p className="mt-2 text-sm text-slate-500">Optymalizacja obłożenia</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-indigo-700 to-slate-900 p-6 text-white shadow-xl shadow-slate-950/20">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Szybki podgląd</p>
                  <h2 className="mt-3 text-3xl font-semibold">Stan obłożenia</h2>
                </div>
                <div className="rounded-3xl bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100">
                  Trend +12%
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div>
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Wolne pokoje</span>
                    <span>7 / 25</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-2 w-28 rounded-full bg-emerald-400" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Oczekujące zameldowania</span>
                    <span>5</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-2 w-44 rounded-full bg-amber-300" />
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] bg-white/95 p-6 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-200/80 backdrop-blur">
              <div className="flex items-center justify-between text-slate-700">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Szybkie akcje</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-950">Zarządzaj szybko</h3>
                </div>
              </div>
              <div className="mt-6 grid gap-3">
                <button className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-left text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                  Przeglądaj dostępność pokoi
                </button>
                <button className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-left text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                  Zaktualizuj dane gościa
                </button>
                <button className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-left text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                  Wyślij potwierdzenie rezerwacji
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
          <div className="rounded-[2rem] bg-white/95 p-6 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-200/80 backdrop-blur">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Rezerwacje</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950">Ostatnie przyjazdy</h2>
              </div>
              <button className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700">
                Przeglądaj wszystkie
              </button>
            </div>
            <div className="mt-8 space-y-4">
              {['Pokój 204', 'Pokój 310', 'Suite 101'].map((item, index) => (
                <div key={index} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-slate-700">{item}</p>
                      <p className="mt-1 text-sm text-slate-500">Przyjazd: dziś, 14:00 · 2 noce</p>
                    </div>
                    <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                      Potwierdzona
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-white/95 p-6 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-200/80 backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Status pokoi</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950">Dostępność</h2>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {[
                { label: 'Wolne pokoje', value: 7, percent: 28, color: 'bg-emerald-500' },
                { label: 'Sprzątane', value: 4, percent: 16, color: 'bg-amber-400' },
                { label: 'Zarezerwowane', value: 14, percent: 56, color: 'bg-indigo-600' },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>{item.label}</span>
                    <span className="font-semibold text-slate-900">{item.value}</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
                    <div className={`h-2 rounded-full ${item.color}`} style={{ width: `${item.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default App;
