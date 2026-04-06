import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  TrendingUp, 
  Users, 
  Zap, 
  ShoppingBag, 
  Calendar, 
  Star, 
  ArrowRight, 
  CheckCircle2, 
  Play, 
  BarChart3, 
  Layers, 
  Globe, 
  ChevronRight,
  MousePointer2,
  Database,
  Smartphone,
  Mail,
  PieChart,
  Clock,
  Gift,
  Plane,
  Home,
  Baby,
  Trophy,
  Heart,
  X,
  Send,
  Menu
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={cn("py-12 px-6 md:px-12 lg:px-24 overflow-hidden", className)}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

interface CardProps {
  children: React.ReactNode;
  className?: string;
  key?: React.Key;
}

const Card = ({ children, className }: CardProps) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={cn("bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all", className)}
  >
    {children}
  </motion.div>
);

const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={cn("px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/30", className)}>
    {children}
  </span>
);

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
      />
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="bg-[#151926] border border-white/10 p-6 md:p-10 rounded-[32px] md:rounded-[40px] max-w-lg w-full relative z-10 shadow-2xl"
      >
        <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-500 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>
        
        <div className="mb-6 md:mb-8">
          <Badge className="mb-4">Контактное лицо</Badge>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Эльвира Ямшанова</h3>
          <p className="text-blue-400 font-bold uppercase tracking-wider text-[10px] md:text-xs">руководитель развития AdTech Data Nova</p>
        </div>
        
        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          <a 
            href="tel:+79685726156" 
            className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Smartphone className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div>
              <div className="text-[8px] md:text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-0.5 md:mb-1">Телефон</div>
              <div className="text-base md:text-lg font-bold">+7 (968) 572-61-56</div>
            </div>
          </a>
          
          <a 
            href="mailto:eiiamshanova@gid.ru" 
            className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div>
              <div className="text-[8px] md:text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-0.5 md:mb-1">E-mail</div>
              <div className="text-base md:text-lg font-bold">eiiamshanova@gid.ru</div>
            </div>
          </a>

          <a 
            href="https://t.me/el_yamshanova" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Send className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div>
              <div className="text-[8px] md:text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-0.5 md:mb-1">Telegram</div>
              <div className="text-base md:text-lg font-bold">@el_yamshanova</div>
            </div>
          </a>
        </div>
        
        <button 
          onClick={onClose}
          className="w-full py-3 md:py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold transition-all text-sm md:text-base"
        >
          Закрыть
        </button>
      </motion.div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#process", label: "Процесс" },
    { href: "#signals", label: "Сигналы" },
    { href: "#scenarios", label: "Сценарии" },
    { href: "#segmentation", label: "Сегментация" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0c14] text-white font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0c14]/80 backdrop-blur-lg border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="font-bold text-lg md:text-xl tracking-tight uppercase">DATANOVA <span className="text-blue-500">×</span> RUTUBE</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-white transition-colors">{link.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:block bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-600/20"
            >
              Подать заявку
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#0a0c14] border-b border-white/5 p-6 flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold mt-2"
            >
              Подать заявку
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section (Page 1) */}
      <Section className="pt-24 pb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent -z-10" />
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6">DataNova × Rutube</Badge>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-[1.2]">
              Превращаем интент в выручку с помощью <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">контекстного таргетинга</span> и омниканальной активации.
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#mvp" className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition-all">
                Запуск MVP — Май 2026 <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Process Overview (Page 2) */}
      <Section id="process" className="bg-[#0e111d]">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">От контентного сигнала к омниканальной активации</h2>
          <p className="text-gray-400">Не просто медийный охват, а активация аудитории с уже сформированным интересом</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center relative">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-500">
              <Play className="w-8 h-8" />
            </div>
            <div className="text-sm font-bold">Смотрит ролики про Xiaomi (пример)</div>
          </div>
          <div className="hidden md:flex justify-center text-blue-500/30"><ChevronRight /></div>
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-500">
              <Zap className="w-8 h-8" />
            </div>
            <div className="text-sm font-bold">ДатаНова анализирует качество сигнала</div>
          </div>
          <div className="hidden md:flex flex-col justify-center gap-8 text-blue-500/30">
            <div className="flex justify-center"><ChevronRight className="rotate-[-30deg]" /></div>
            <div className="flex justify-center"><ChevronRight className="rotate-[30deg]" /></div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-3">
              <Smartphone className="text-blue-500 w-5 h-5" />
              <span className="text-xs font-bold">Баннер в Rutube</span>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-3">
              <ShoppingBag className="text-blue-500 w-5 h-5" />
              <span className="text-xs font-bold">Сигнал в маркетплейс (ретаргетинг/триггер)</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Logic (Page 3) */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Логика показа товара в контенте</h2>
            <div className="space-y-6">
              {[
                { num: "1", title: "Выбор товарной категории или бренда", desc: "Определяем фокус кампании. Пример: уход за лицом." },
                { num: "2", title: "Подбираем ключевые фразы", desc: "Формируется список запросов. Пример: базовый уход, топ средств для лица." },
                { num: "3", title: "Показ баннера", desc: "При совпадении контента с фразой показывается релевантный контент. 1 запрос = 1 креатив." }
              ].map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold shrink-0">{step.num}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-video bg-gray-900 group">
            <img 
              src="/image.jpg" 
              alt="Skincare Vlog Background" 
              className="w-full h-full object-cover opacity-70"
            />
            {/* Video Title Bar */}
            <div className="absolute top-0 left-0 w-full p-4 bg-gradient-to-b from-black/90 to-transparent z-10">
              <div className="text-xs font-bold text-white">Уход за кожей / Уход за телом /</div>
            </div>
            
            {/* Ad Banner (Wildberries) */}
            <div className="absolute top-12 right-4 bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-white/20 max-w-[220px] z-20 shadow-2xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 bg-purple-600 rounded-lg flex items-center justify-center text-[10px] font-bold text-white">WB</div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-white">Wildberries</span>
                  <span className="text-[8px] text-gray-400">Реклама 18+</span>
                </div>
              </div>
              <div className="text-[11px] font-bold text-white mb-3 leading-tight">Хиты в уходе за лицом со скидкой -40%</div>
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold py-2 rounded-lg transition-colors">
                Перейти
              </button>
            </div>

            {/* Playback Controls */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent z-10">
              <div className="flex items-center gap-4 mb-3">
                <div className="text-[10px] font-medium text-white">04:02</div>
                <div className="flex-grow h-1.5 bg-white/20 rounded-full overflow-hidden relative">
                  <div className="absolute inset-y-0 left-0 w-[25%] bg-blue-500" />
                  <div className="absolute left-[25%] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg -translate-x-1/2" />
                </div>
                <div className="text-[10px] font-medium text-white">19:15</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <Play className="w-5 h-5 text-white fill-white cursor-pointer" />
                  <div className="flex items-center gap-4">
                    <div className="w-5 h-5 border-2 border-white/80 rounded-sm cursor-pointer" />
                    <div className="w-5 h-5 flex items-center justify-center cursor-pointer">
                      <div className="w-1 h-4 bg-white/80 rounded-full mx-0.5" />
                      <div className="w-1 h-4 bg-white/80 rounded-full mx-0.5" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 bg-white/20 rounded-sm cursor-pointer hover:bg-white/40 transition-colors" />
                  <div className="w-5 h-5 bg-white/20 rounded-sm cursor-pointer hover:bg-white/40 transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Signal Types (Page 4) */}
      <Section id="signals" className="bg-[#0e111d]">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Типы сигналов для товарной подборки</h2>
          <p className="text-blue-400 font-bold">Интерес + сезон + событие = широкий коммерчески сильный фид с высоким CTR</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Интересы", 
              icon: Users, 
              items: ["Готовка → кухня, посуда", "Beauty → уход, парфюм", "Авто → шины, масла", "DIY / ремонт → инструменты", "Спорт → outdoor, питание", "Дети / семья → игрушки"] 
            },
            { 
              title: "Сезонность", 
              icon: Calendar, 
              items: ["Лето → outdoor, SPF", "Осень → back to school", "Зима → подарки, НГ", "Весна → дача, ремонт", "Black Friday → фиды", "Отпускной сезон → travel"] 
            },
            { 
              title: "Событийные поводы", 
              icon: Star, 
              items: ["День рождения → наборы", "Свадьба / выпускной → beauty", "Переезд → мебель, техника", "Рождение ребёнка → товары", "Спортивные события → атрибутика", "Гендерные праздники → подарки"] 
            }
          ].map((cat, i) => (
            <Card key={i}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-500">
                  <cat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">{cat.title}</h3>
              </div>
              <ul className="space-y-3">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Keyword Pyramid (Page 5) */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Пирамида построения ключевых запросов</h2>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              <div className="bg-blue-600 p-4 md:p-6 rounded-xl font-bold text-center w-full sm:w-1/2">Широкие</div>
              <div className="text-sm text-gray-400 w-full sm:w-1/2 text-center sm:text-left">«косметика», «товары для дома», «путешествия»</div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 sm:px-[5%] md:px-[10%]">
              <div className="bg-blue-800 p-4 md:p-6 rounded-xl font-bold text-center w-full sm:w-1/2">Средние</div>
              <div className="text-sm text-gray-400 w-full sm:w-1/2 text-center sm:text-left">«лучшие кремы», «что взять в поездку», «дача весной»</div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 sm:px-[10%] md:px-[20%]">
              <div className="bg-[#151926] border border-white/10 p-4 md:p-6 rounded-xl font-bold text-center w-full sm:w-1/2">Узкие</div>
              <div className="text-sm text-gray-400 w-full sm:w-1/2 text-center sm:text-left">«Samsung Watch 8», «Mixit», «SPF для лица»</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Placement Scenarios (Page 6) */}
      <Section id="scenarios" className="bg-[#0e111d]">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Сценарии размещения</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              id: "01", 
              badge: "Охват + ассортимент", 
              title: "Тематическая подборка", 
              desc: "Баннер с тематической подборкой товаров.", 
              example: "«Хиты в уходе за лицом со скидкой –40%»",
              color: "border-blue-500"
            },
            { 
              id: "02", 
              badge: "Конверсия в категорию", 
              title: "Продвижение категории", 
              desc: "Продвижение конкретной товарной категории с промокодом.", 
              example: "«Промокод АПРЕЛЬ — 20% на уход за лицом»",
              color: "border-green-500"
            },
            { 
              id: "03", 
              badge: "Точечная конверсия", 
              title: "Конкретный товар", 
              desc: "Продвижение одного SKU с ценой. Максимальная точность.", 
              example: "«Праймер Mixit за 399 руб.»",
              color: "border-orange-500"
            }
          ].map((scenario, i) => (
            <div key={i} className={cn("bg-white/5 border-t-4 rounded-b-2xl p-8 flex flex-col h-full", scenario.color)}>
              <div className="text-4xl font-black mb-4 opacity-20">{scenario.id}</div>
              <div className="bg-white/10 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-6">{scenario.badge}</div>
              <h3 className="text-xl font-bold mb-4">{scenario.title}</h3>
              <p className="text-gray-400 text-sm mb-8 flex-grow">{scenario.desc}</p>
              <div className="bg-blue-600/10 p-4 rounded-xl border border-blue-500/20 italic text-sm text-blue-400">
                {scenario.example}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Segmentation (Page 7) */}
      <Section id="segmentation">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">СЕГМЕНТАЦИЯ ДАТАНОВА</h2>
          <h3 className="text-2xl font-bold text-blue-400">Один интерес — разные товары.</h3>
          <p className="text-gray-400 mt-4">Золотая Запись ДатаНова определяет, какой именно товар показать конкретному пользователю</p>
        </div>
        
        <div className="bg-blue-900/20 border border-blue-500/30 rounded-3xl p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-[100px]" />
          <div className="text-center mb-8">
            <div className="bg-blue-600 px-8 py-3 rounded-full inline-block font-bold">Путешествия</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                <ArrowRight className="text-blue-500" />
                <span className="font-bold">Высокий доход, без детей</span>
              </div>
              <p className="text-sm text-gray-400">→ Премиальный чемодан, бизнес-страховка, travel-set люксовой косметики</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                <ArrowRight className="text-blue-500" />
                <span className="font-bold">Средний доход, дети</span>
              </div>
              <p className="text-sm text-gray-400">→ Бюджетный чемодан, family-страховка, детские travel-наборы, power bank</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Средний чек", "Интересы", "Наличие детей", "Семейный статус",
            "Доходный профиль", "Поведение в экосистеме", "Паттерны потребления", "Стадия жизненного цикла"
          ].map((attr, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center text-xs font-bold text-gray-400">
              {attr}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center p-6 bg-blue-600 rounded-2xl font-bold">
          В целевой модели (To Be) возможности продукта расширятся: к таргетингу по ключевым словам добавится глубокая сегментация аудитории на базе «Золотой записи» клиента от ДатаНова.
        </div>
      </Section>

      {/* Cascade Scenarios (Page 8) */}
      <Section className="bg-[#0e111d]">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">КАСКАДНЫЕ СЦЕНАРИИ</h2>
            <Badge className="bg-blue-600 text-white border-blue-400">To Be</Badge>
          </div>
          <h3 className="text-2xl font-bold">Целевая модель: не одно касание, а система конверсий.</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { id: 1, title: "In-stream видео", desc: "Пользователь смотрит контент по тематике" },
            { id: 2, title: "Баннер с фидом", desc: "Товарная подборка по категории интента" },
            { id: 3, title: "Ретаргетинг", desc: "Догоняющая коммуникация в Rutube push/email" },
            { id: 4, title: "Внешняя активация", desc: "Скор в маркетплейс → персонализация полки" }
          ].map((step, i) => (
            <div key={i} className="bg-blue-600 p-8 rounded-2xl flex flex-col items-center text-center gap-4 relative">
              <div className="text-4xl font-black opacity-30">{step.id}</div>
              <h4 className="font-bold">{step.title}</h4>
              <p className="text-xs opacity-80">{step.desc}</p>
              {i < 3 && <ChevronRight className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:block text-white/30" />}
            </div>
          ))}
        </div>
        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            "Видео формирует интерес → баннер с фидом конвертирует в клик → ретаргетинг закрывает продажу",
            "Один просмотр контента запускает цепочку: триггер → сегментация → показ товара → скор в МП",
            "ДатаНова управляет всей логикой каскада: от определения интента до активации во внешнем канале",
            "Вы получаете полную прозрачную воронку с измеримыми показателями"
          ].map((benefit, i) => (
            <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
              <CheckCircle2 className="text-blue-500 w-5 h-5 shrink-0" />
              <span className="text-sm">{benefit}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center p-6 bg-blue-600 rounded-2xl font-bold max-w-3xl mx-auto">
          В целевой модели (To Be) каскадные запуски объединяют охватные и перформанс-инструменты в единую автоматизированную воронку.
        </div>
      </Section>

      {/* Campaign Example (Page 9) */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Пример кампании: от ролика до покупки.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <Card>
            <h4 className="text-blue-500 font-bold mb-4">Триггер</h4>
            <p className="text-sm text-gray-400">Пользователь за неделю посмотрел 3+ ролика: <br/>• влоги из Турции <br/>• «что взять в отпуск» <br/>• обзор отелей</p>
          </Card>
          <Card>
            <h4 className="text-blue-500 font-bold mb-4">Фид товаров</h4>
            <p className="text-sm text-gray-400">Категорийная подборка: <br/>• чемоданы и сумки <br/>• travel-size косметика <br/>• power bank / адаптеры <br/>• страховка для выезда</p>
          </Card>
          <Card>
            <h4 className="text-blue-500 font-bold mb-4">Сегментация</h4>
            <p className="text-sm text-gray-400">Золотая Запись: <br/>• Высокий доход → премиум SKU <br/>• Дети → семейные наборы и страховки</p>
          </Card>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "In-stream", desc: "Видеореклама travel-бренда перед следующим роликом" },
            { title: "Баннер с фидом", desc: "Карточки товаров из подборки на страницах Rutube" },
            { title: "Ретаргетинг", desc: "Push / email через экосистему ГПБ с предложением страховки" },
            { title: "Скор в Ozon", desc: "SMPC-обогащение → Ozon показывает чемоданы на главной" }
          ].map((act, i) => (
            <div key={i} className="bg-[#151926] border border-white/10 p-6 rounded-xl">
              <h5 className="font-bold text-blue-500 mb-2">{act.title}</h5>
              <p className="text-xs text-gray-400">{act.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Next Step (Page 10) */}
      <Section id="mvp" className="bg-blue-600">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <Badge className="bg-white/20 text-white border-white/30 mb-6">Следующий шаг</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-8">Запуск MVP – май 2026</h2>
            <div className="space-y-6">
              {[
                { id: "01", title: "Выбираем категорию или бренд", desc: "Определяем фокус кампании и товарную категорию" },
                { id: "02", title: "Формируем фид и ключи", desc: "Подбираем ключевые фразы и товарную подборку под интент" },
                { id: "03", title: "Запускаем и измеряем", desc: "Первые данные по CTR и конверсии — через 48 часов после старта" }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="text-2xl font-black opacity-30">{step.id}</div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">{step.title}</h4>
                    <p className="opacity-80 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white text-black p-8 rounded-[40px] shadow-2xl">
            <h3 className="text-3xl font-black mb-4">Подать заявку на размещение</h3>
            <p className="text-gray-600 mb-6">Обсудим вашу категорию, подберём механику и рассчитаем прогноз KPI бесплатно.</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all"
            >
              Подать заявку <ArrowRight />
            </button>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <span className="font-bold text-white uppercase tracking-tighter">DATANOVA <span className="text-blue-500">×</span> RUTUBE</span>
          </div>
          <p>ДатаНова × Rutube | Контекстный таргетинг | Омниканальная активация | 2026</p>
        </div>
      </footer>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
