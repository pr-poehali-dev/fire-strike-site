import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/a63db8e5-d539-4d8d-908a-9171b68cbab7/files/d4946abb-8539-46eb-89f9-8d652b965bf2.jpg";
const ABOUT_IMG = "https://cdn.poehali.dev/projects/a63db8e5-d539-4d8d-908a-9171b68cbab7/files/2c8333db-668d-4cf6-89ab-34a562a41490.jpg";

const NAV_LINKS = [
  { id: "hero", label: "Главная" },
  { id: "about", label: "Об игре" },
  { id: "modes", label: "Режимы" },
  { id: "maps", label: "Карты" },
  { id: "news", label: "Новости" },
  { id: "download", label: "Скачать" },
];

const MODES = [
  {
    icon: "Swords",
    tag: "PVP",
    title: "Deathmatch",
    players: "8 игроков",
    duration: "10 мин",
    desc: "Классический режим «все против всех». Побеждает тот, кто первым наберёт 30 фрагов или окажется на вершине таблицы к концу матча.",
  },
  {
    icon: "Flame",
    tag: "PVE",
    title: "Выживание",
    players: "1–4 игрока",
    duration: "Без лимита",
    desc: "Одиночный или кооперативный режим. Отбивайся от волн противников, собирай ресурсы и держись как можно дольше в горящей зоне.",
  },
];

const MAPS = [
  {
    name: "Руины",
    type: "Deathmatch",
    size: "Средняя",
    desc: "Разрушенный город с узкими улицами и укрытиями. Идеально для ближнего боя.",
  },
  {
    name: "Склад",
    type: "Deathmatch",
    size: "Малая",
    desc: "Промзона с контейнерами и балконами. Быстрые матчи и вертикальный геймплей.",
  },
  {
    name: "Полигон",
    type: "Выживание",
    size: "Большая",
    desc: "Открытая местность с бункерами. Волны врагов усиливаются каждые 3 минуты.",
  },
  {
    name: "Лаборатория",
    type: "Выживание",
    size: "Средняя",
    desc: "Заброшенный комплекс с лабиринтами коридоров. Мало света, много сюрпризов.",
  },
];

const NEWS = [
  {
    date: "11 апр 2026",
    tag: "Запуск",
    title: "Fire Strike вышла в ранний доступ",
    desc: "Сегодня мы открываем двери первым игрокам. Версия 0.1.0 доступна для скачивания — спасибо, что с нами с самого начала.",
  },
  {
    date: "05 апр 2026",
    tag: "Дорожная карта",
    title: "Что будет в ближайших обновлениях",
    desc: "Рассказываем о планах: новые карты, балансировка оружия, система прогресса и первый PVE-рейд уже летом.",
  },
  {
    date: "28 мар 2026",
    tag: "Девблог",
    title: "Как мы делали огненную физику",
    desc: "Разработчики делятся деталями: как распространяется пламя, горят укрытия и меняется тактика боя в реальном времени.",
  },
];

const SYS_REQS = {
  min: [
    { label: "ОС", value: "Windows 10 64-bit" },
    { label: "CPU", value: "Intel Core i3 / Ryzen 3" },
    { label: "RAM", value: "6 ГБ" },
    { label: "GPU", value: "GTX 750 Ti (2 ГБ VRAM)" },
    { label: "Место", value: "12 ГБ" },
    { label: "DirectX", value: "Версия 11" },
  ],
  rec: [
    { label: "ОС", value: "Windows 11 64-bit" },
    { label: "CPU", value: "Intel Core i5 / Ryzen 5" },
    { label: "RAM", value: "12 ГБ" },
    { label: "GPU", value: "GTX 1060 / RX 580 (4 ГБ VRAM)" },
    { label: "Место", value: "12 ГБ SSD" },
    { label: "DirectX", value: "Версия 12" },
  ],
};

const INSTALL_STEPS = [
  {
    num: "01",
    title: "Скачайте установщик",
    desc: "Нажмите кнопку «Скачать для Windows» и дождитесь загрузки файла FireStrikeSetup.exe",
  },
  {
    num: "02",
    title: "Запустите установщик",
    desc: "Откройте скачанный файл. Если Windows предупреждает о безопасности — нажмите «Подробнее» → «Выполнить в любом случае»",
  },
  {
    num: "03",
    title: "Выберите папку",
    desc: "Укажите путь для установки. Рекомендуем SSD-диск для максимальной производительности",
  },
  {
    num: "04",
    title: "Дождитесь установки",
    desc: "Установщик автоматически загрузит все необходимые компоненты (Visual C++, DirectX)",
  },
  {
    num: "05",
    title: "Запустите игру",
    desc: "После установки нажмите «Играть» или запустите ярлык Fire Strike на рабочем столе",
  },
];

export default function Index() {
  const [activeNav, setActiveNav] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [reqTab, setReqTab] = useState<"min" | "rec">("min");

  const scrollTo = (id: string) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F0F0F0] font-body overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: "linear-gradient(180deg, rgba(10,10,11,0.98) 0%, rgba(10,10,11,0.0) 100%)" }}>
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded flex items-center justify-center animate-glow-pulse"
            style={{ background: "linear-gradient(135deg, #FF4500, #FF6A00)" }}>
            <Icon name="Flame" size={18} className="text-[#0A0A0B]" />
          </div>
          <span className="font-display font-bold text-lg tracking-widest uppercase text-white">
            Fire<span className="text-[#FF4500]">Strike</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button key={link.id} onClick={() => scrollTo(link.id)}
              className={`nav-link ${activeNav === link.id ? "active" : ""}`}>
              {link.label}
            </button>
          ))}
        </div>

        <button onClick={() => scrollTo("download")}
          className="hidden md:block fire-btn px-6 py-2 text-sm rounded">
          Скачать
        </button>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
          <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0B] flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <button key={link.id} onClick={() => scrollTo(link.id)}
              className="font-display text-2xl tracking-widest uppercase text-white hover:text-[#FF4500] transition-colors">
              {link.label}
            </button>
          ))}
          <button onClick={() => scrollTo("download")} className="fire-btn px-10 py-3 text-base rounded mt-4">
            Скачать
          </button>
        </div>
      )}

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Fire Strike Hero" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(10,10,11,0.3) 0%, rgba(10,10,11,0.6) 50%, rgba(10,10,11,1) 100%)" }} />
          <div className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at center, rgba(255,69,0,0.08) 0%, transparent 70%)" }} />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#FF4500]/30 bg-[#FF4500]/10 animate-fade-in"
            style={{ animationDelay: "0.1s", opacity: 0 }}>
            <span className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse" />
            <span className="font-display text-xs tracking-widest uppercase text-[#FF6A00]">Ранний доступ · v0.1.0</span>
          </div>

          <h1 className="font-display font-bold uppercase leading-none mb-6 animate-fade-in"
            style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", animationDelay: "0.2s", opacity: 0 }}>
            <span className="block text-white">Fire</span>
            <span className="block fire-glow animate-flicker">Strike</span>
          </h1>

          <p className="text-[#999] text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.4s", opacity: 0 }}>
            Свежий шутер с огненными аренами. Два режима, четыре карты, одно пламя. Мы только начали — играй с нами с первого дня.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.6s", opacity: 0 }}>
            <button onClick={() => scrollTo("download")}
              className="fire-btn px-10 py-4 text-base rounded flex items-center gap-3 w-full sm:w-auto justify-center">
              <Icon name="Download" size={20} />
              Играть бесплатно
            </button>
            <button onClick={() => scrollTo("about")}
              className="px-10 py-4 text-base rounded border border-[#1E1E24] text-[#ccc] hover:border-[#FF4500]/40 hover:text-white transition-all w-full sm:w-auto flex items-center gap-3 justify-center">
              <Icon name="Play" size={20} />
              Об игре
            </button>
          </div>

          <div className="flex items-center justify-center gap-10 mt-16 animate-fade-in"
            style={{ animationDelay: "0.8s", opacity: 0 }}>
            {[
              { val: "2", label: "Режима" },
              { val: "4", label: "Карты" },
              { val: "0.1.0", label: "Версия" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-2xl md:text-3xl font-bold text-[#FF4500]">{s.val}</div>
                <div className="text-[#666] text-xs tracking-widest uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float z-10">
          <Icon name="ChevronDown" size={24} className="text-[#FF4500]/50" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="gradient-line mb-16" />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-display text-xs tracking-widest uppercase text-[#FF4500] mb-4 block">
              — Об игре
            </span>
            <h2 className="section-title text-4xl md:text-5xl mb-6 leading-tight">
              Пламя только<br />разгорается
            </h2>
            <p className="text-[#888] leading-relaxed mb-6">
              Fire Strike — инди-шутер от небольшой команды энтузиастов. Мы только что выпустили первую версию и приглашаем тебя стать частью истории с самого начала.
            </p>
            <p className="text-[#888] leading-relaxed mb-10">
              В игре пока 2 режима и 4 карты — но каждая деталь вылизана вручную. Мы слушаем сообщество и добавляем новый контент каждую неделю.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Swords", label: "2 режима игры" },
                { icon: "Map", label: "4 тщательных карты" },
                { icon: "Flame", label: "Огненная физика" },
                { icon: "MessageCircle", label: "Живое комьюнити" },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-3 text-[#ccc]">
                  <div className="w-8 h-8 rounded flex items-center justify-center bg-[#FF4500]/10 border border-[#FF4500]/20 shrink-0">
                    <Icon name={f.icon} fallback="Star" size={16} className="text-[#FF4500]" />
                  </div>
                  <span className="text-sm">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-sm" style={{ boxShadow: "0 0 60px rgba(255,69,0,0.2)" }}>
              <img src={ABOUT_IMG} alt="Геймплей Fire Strike" className="w-full object-cover aspect-video" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/60 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 stat-card rounded-sm">
              <div className="font-display text-2xl font-bold text-[#FF4500]">v0.1.0</div>
              <div className="text-xs text-[#666] tracking-wider uppercase mt-1">Ранний доступ</div>
            </div>
            <div className="absolute -top-4 -right-4 stat-card rounded-sm">
              <div className="font-display text-2xl font-bold text-[#FF4500]">День 1</div>
              <div className="text-xs text-[#666] tracking-wider uppercase mt-1">Только старт</div>
            </div>
          </div>
        </div>

        <div className="gradient-line mt-16" />
      </section>

      {/* MODES */}
      <section id="modes" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="font-display text-xs tracking-widest uppercase text-[#FF4500] mb-4 block">— Режимы</span>
          <h2 className="section-title text-4xl md:text-5xl">Два способа гореть</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {MODES.map((mode, i) => (
            <div key={mode.title} className="card-dark rounded-sm p-8 relative overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${i * 0.15}s`, opacity: 0 }}>
              <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full opacity-[0.04] group-hover:opacity-10 transition-opacity"
                style={{ background: "radial-gradient(circle, #FF4500, transparent 70%)" }} />

              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded flex items-center justify-center border border-[#FF4500]/30 bg-[#FF4500]/10">
                    <Icon name={mode.icon} fallback="Swords" size={26} className="text-[#FF4500]" />
                  </div>
                  <span className="text-[10px] font-display tracking-widest uppercase px-3 py-1 rounded-full bg-[#FF4500]/10 text-[#FF4500] border border-[#FF4500]/20">
                    {mode.tag}
                  </span>
                </div>

                <h3 className="font-display text-3xl font-bold uppercase tracking-wide text-white mb-2">{mode.title}</h3>
                <div className="flex items-center gap-4 text-xs text-[#666] mb-5 font-display tracking-wider uppercase">
                  <div className="flex items-center gap-1.5">
                    <Icon name="Users" size={12} />
                    <span>{mode.players}</span>
                  </div>
                  <span className="text-[#333]">•</span>
                  <div className="flex items-center gap-1.5">
                    <Icon name="Clock" size={12} />
                    <span>{mode.duration}</span>
                  </div>
                </div>
                <p className="text-[#888] text-sm leading-relaxed">{mode.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAPS */}
      <section id="maps" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="gradient-line mb-16" />

        <div className="mb-12 flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="font-display text-xs tracking-widest uppercase text-[#FF4500] mb-4 block">— Карты</span>
            <h2 className="section-title text-4xl md:text-5xl">Четыре арены</h2>
          </div>
          <div className="text-xs text-[#555] font-display tracking-widest uppercase">
            Новые карты каждую неделю →
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MAPS.map((map, i) => (
            <div key={map.name} className="card-dark rounded-sm p-6 group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}>
              <div className="relative aspect-[4/3] mb-5 overflow-hidden rounded-sm bg-[#0A0A0B] border border-[#1E1E24]">
                <div className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, rgba(255,69,0,0.15) 0%, transparent 60%),
                                 repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(255,69,0,0.06) 12px, rgba(255,69,0,0.06) 13px)`,
                  }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-display text-6xl font-bold text-[#FF4500]/15 group-hover:text-[#FF4500]/40 transition-colors">
                    0{i + 1}
                  </div>
                </div>
                <div className="absolute top-3 left-3 text-[10px] font-display tracking-widest uppercase px-2 py-1 rounded bg-[#0A0A0B]/80 border border-[#1E1E24] text-[#999]">
                  {map.type}
                </div>
                <div className="absolute bottom-3 right-3 text-[10px] font-display tracking-widest uppercase text-[#666]">
                  {map.size}
                </div>
              </div>

              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white mb-2 group-hover:text-[#FF4500] transition-colors">
                {map.name}
              </h3>
              <p className="text-[#777] text-xs leading-relaxed">{map.desc}</p>
            </div>
          ))}
        </div>

        <div className="gradient-line mt-16" />
      </section>

      {/* NEWS */}
      <section id="news" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="font-display text-xs tracking-widest uppercase text-[#FF4500] mb-4 block">— Новости</span>
          <h2 className="section-title text-4xl md:text-5xl">Последние события</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {NEWS.map((item, i) => (
            <article key={i} className="card-dark rounded-sm p-6 flex flex-col cursor-pointer group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-display tracking-widest uppercase px-3 py-1 rounded-full bg-[#FF4500]/10 text-[#FF4500] border border-[#FF4500]/20">
                  {item.tag}
                </span>
                <span className="text-xs text-[#555]">{item.date}</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-3 group-hover:text-[#FF4500] transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="text-[#777] text-sm leading-relaxed flex-1">{item.desc}</p>
              <div className="mt-4 flex items-center gap-2 text-[#FF4500] text-xs font-display tracking-wider uppercase">
                <span>Читать</span>
                <Icon name="ArrowRight" size={14} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* DOWNLOAD */}
      <section id="download" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="gradient-line mb-16" />

        <div className="mb-12">
          <span className="font-display text-xs tracking-widest uppercase text-[#FF4500] mb-4 block">— Скачать</span>
          <h2 className="section-title text-4xl md:text-5xl">Начни играть сегодня</h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="fire-btn px-10 py-5 text-base rounded flex items-center gap-3 justify-center">
            <Icon name="Monitor" size={22} />
            <span>Скачать для Windows</span>
            <span className="text-xs opacity-70 font-body normal-case font-normal ml-1">12 ГБ · v0.1.0</span>
          </button>
          <button className="px-10 py-5 text-base rounded border border-[#1E1E24] text-[#ccc] hover:border-[#FF4500]/40 hover:text-white transition-all flex items-center gap-3 justify-center">
            <Icon name="Apple" size={22} />
            <span className="font-display tracking-wider uppercase">macOS</span>
            <span className="text-xs text-[#555] font-body normal-case font-normal ml-1">Скоро</span>
          </button>
        </div>

        {/* System Requirements */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-semibold uppercase tracking-wider text-white mb-6 flex items-center gap-3">
            <Icon name="Cpu" size={20} className="text-[#FF4500]" />
            Системные требования
          </h3>

          <div className="flex gap-2 mb-6">
            <button onClick={() => setReqTab("min")}
              className={`font-display tracking-widest uppercase text-xs px-6 py-2 rounded transition-all ${
                reqTab === "min"
                  ? "bg-[#FF4500] text-[#0A0A0B]"
                  : "border border-[#1E1E24] text-[#666] hover:border-[#FF4500]/40 hover:text-[#FF4500]"
              }`}>
              Минимальные
            </button>
            <button onClick={() => setReqTab("rec")}
              className={`font-display tracking-widest uppercase text-xs px-6 py-2 rounded transition-all ${
                reqTab === "rec"
                  ? "bg-[#FF4500] text-[#0A0A0B]"
                  : "border border-[#1E1E24] text-[#666] hover:border-[#FF4500]/40 hover:text-[#FF4500]"
              }`}>
              Рекомендуемые
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SYS_REQS[reqTab].map((r) => (
              <div key={r.label} className="card-dark rounded-sm p-4 flex gap-4 items-start">
                <div className="font-display text-xs tracking-widest uppercase text-[#555] w-16 shrink-0 pt-0.5">{r.label}</div>
                <div className="text-sm text-[#ccc]">{r.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Installation steps */}
        <div>
          <h3 className="font-display text-2xl font-semibold uppercase tracking-wider text-white mb-6 flex items-center gap-3">
            <Icon name="ListChecks" size={20} className="text-[#FF4500]" />
            Инструкция по установке
          </h3>

          <div className="space-y-3">
            {INSTALL_STEPS.map((step, i) => (
              <div key={i} className="card-dark rounded-sm p-5 flex gap-6 items-start group hover:border-[#FF4500]/40 transition-all">
                <div className="font-display text-3xl font-bold text-[#FF4500]/20 group-hover:text-[#FF4500]/50 transition-colors shrink-0 leading-none pt-1">
                  {step.num}
                </div>
                <div>
                  <div className="font-display font-semibold text-white mb-1 tracking-wide">{step.title}</div>
                  <div className="text-[#777] text-sm leading-relaxed">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="gradient-line mt-16" />
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 md:px-12 border-t border-[#1E1E24]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #FF4500, #FF6A00)" }}>
              <Icon name="Flame" size={14} className="text-[#0A0A0B]" />
            </div>
            <span className="font-display font-bold tracking-widest uppercase text-sm text-white">
              Fire<span className="text-[#FF4500]">Strike</span>
            </span>
          </div>
          <p className="text-[#444] text-xs tracking-wider">© 2026 Fire Strike. Все права защищены.</p>
          <div className="flex gap-6">
            {["Политика", "Условия", "Поддержка"].map((l) => (
              <a key={l} href="#" className="text-[#555] text-xs hover:text-[#FF4500] transition-colors font-display tracking-wider uppercase">
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}