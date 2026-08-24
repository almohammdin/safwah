(() => {
  'use strict';

  const translations = {
    en: {
      eyebrow: 'Live investor desk', title: 'Saudi signals, budget clarity and the next room to be in.', lead: 'A compact planning desk for international investors: official economic snapshots, a live currency lens and selected business events.', riyadhTime: 'Riyadh time', calculatorKicker: 'Planning calculator', calculatorTitle: 'See your Saudi runway in SAR.', loading: 'Loading live rate…', live: 'Live rate', cached: 'Recent cached rate', fallback: 'Reference rate', capitalLabel: 'Available capital', currencyLabel: 'Home currency', monthlyLabel: 'Estimated monthly operating spend in SAR', capitalSar: 'Capital in Saudi riyals', runway: 'Indicative operating runway', months: 'months', calculatorNote: 'Planning estimate only. It excludes government fees, taxes and activity specific licensing costs.', samaSource: 'Exchange rate reference: SAMA', eventsKicker: 'Business calendar', eventsTitle: 'Selected Saudi investor events.', officialCalendar: 'Official calendar', eventsNote: 'Dates are curated from organizer and official sources. Confirm details with the organizer before travel.', all: 'All', investment: 'Investment', realestate: 'Real estate', industry: 'Industry', health: 'Health', source: 'Source', addCalendar: 'Add to calendar', noEvents: 'No events in this filter.', consultKicker: 'Make the data useful', consultTitle: 'Turn a sector, event or budget into a Saudi entry conversation.', consultCta: 'Book an investor consultation', emailCta: 'Request by email', updated: 'Official snapshot updated', rateDate: 'Rate date'
    },
    ar: {
      eyebrow: 'مكتب المستثمر المباشر', title: 'مؤشرات سعودية، وضوح للميزانية، والفعالية التالية التي تستحق حضورك.', lead: 'لوحة تخطيط مختصرة للمستثمر الدولي تجمع مؤشرات رسمية، تحويل عملات مباشر، وأهم فعاليات الأعمال.', riyadhTime: 'توقيت الرياض', calculatorKicker: 'حاسبة التخطيط', calculatorTitle: 'اعرف ميزانيتك التشغيلية بالريال.', loading: 'جاري تحميل السعر المباشر…', live: 'سعر مباشر', cached: 'سعر حديث محفوظ', fallback: 'سعر مرجعي', capitalLabel: 'رأس المال المتاح', currencyLabel: 'عملة المستثمر', monthlyLabel: 'المصروف التشغيلي الشهري المتوقع بالريال', capitalSar: 'رأس المال بالريال السعودي', runway: 'المدة التشغيلية التقديرية', months: 'شهر', calculatorNote: 'تقدير تخطيطي فقط، ولا يشمل الرسوم الحكومية أو الضرائب أو تكاليف التراخيص المرتبطة بالنشاط.', samaSource: 'مرجع أسعار الصرف: البنك المركزي السعودي', eventsKicker: 'تقويم الأعمال', eventsTitle: 'فعاليات سعودية مختارة للمستثمر.', officialCalendar: 'التقويم الرسمي', eventsNote: 'التواريخ منتقاة من الجهات المنظمة والمصادر الرسمية. تحقق من التفاصيل مع المنظم قبل السفر.', all: 'الكل', investment: 'استثمار', realestate: 'عقار', industry: 'صناعة', health: 'صحة', source: 'المصدر', addCalendar: 'أضف للتقويم', noEvents: 'لا توجد فعاليات ضمن هذا التصنيف.', consultKicker: 'حوّل البيانات إلى خطوة', consultTitle: 'حوّل القطاع أو الفعالية أو الميزانية إلى محادثة لدخول السوق السعودي.', consultCta: 'احجز استشارة مستثمر', emailCta: 'اطلب عبر البريد', updated: 'آخر تحديث للمؤشرات الرسمية', rateDate: 'تاريخ السعر'
    },
    ru: {
      eyebrow: 'Инвестиционный центр', title: 'Саудовские показатели, ясный бюджет и важные деловые события.', lead: 'Краткая панель для инвестора: официальные показатели, конвертер валют и выбранные деловые события.', riyadhTime: 'Время в Эр Рияде', calculatorKicker: 'Калькулятор', calculatorTitle: 'Оцените бюджет в саудовских риялах.', loading: 'Загрузка курса…', live: 'Текущий курс', cached: 'Сохраненный курс', fallback: 'Справочный курс', capitalLabel: 'Доступный капитал', currencyLabel: 'Ваша валюта', monthlyLabel: 'Ожидаемые ежемесячные расходы в SAR', capitalSar: 'Капитал в SAR', runway: 'Примерный срок работы', months: 'месяцев', calculatorNote: 'Только предварительная оценка. Государственные сборы, налоги и лицензии не включены.', samaSource: 'Источник курса: SAMA', eventsKicker: 'Деловой календарь', eventsTitle: 'Выбранные события для инвесторов.', officialCalendar: 'Официальный календарь', eventsNote: 'Перед поездкой подтвердите даты у организатора.', all: 'Все', investment: 'Инвестиции', realestate: 'Недвижимость', industry: 'Промышленность', health: 'Здравоохранение', source: 'Источник', addCalendar: 'Добавить в календарь', noEvents: 'Нет событий.', consultKicker: 'Следующий шаг', consultTitle: 'Превратите сектор, событие или бюджет в разговор о выходе на рынок.', consultCta: 'Записаться на консультацию', emailCta: 'Запрос по почте', updated: 'Обновление официальных данных', rateDate: 'Дата курса'
    },
    zh: {
      eyebrow: '投资者实时工作台', title: '沙特市场信号、清晰预算与值得参加的商务活动。', lead: '为国际投资者提供官方经济快照、实时汇率换算和精选商务活动。', riyadhTime: '利雅得时间', calculatorKicker: '规划计算器', calculatorTitle: '以沙特里亚尔查看运营预算。', loading: '正在加载实时汇率…', live: '实时汇率', cached: '近期缓存汇率', fallback: '参考汇率', capitalLabel: '可用资本', currencyLabel: '本国货币', monthlyLabel: '预计每月运营支出，SAR', capitalSar: '折合沙特里亚尔', runway: '预计运营周期', months: '个月', calculatorNote: '仅供规划参考，不含政府费用、税费及特定行业许可成本。', samaSource: '汇率参考：沙特中央银行', eventsKicker: '商务日历', eventsTitle: '精选沙特投资者活动。', officialCalendar: '官方日历', eventsNote: '日期来自主办方和官方来源。出行前请向主办方确认。', all: '全部', investment: '投资', realestate: '房地产', industry: '工业', health: '医疗', source: '来源', addCalendar: '添加到日历', noEvents: '此筛选下暂无活动。', consultKicker: '让数据发挥价值', consultTitle: '把行业、活动或预算转化为进入沙特市场的对话。', consultCta: '预约投资咨询', emailCta: '邮件咨询', updated: '官方数据更新时间', rateDate: '汇率日期'
    },
    tr: {
      eyebrow: 'Canlı yatırımcı masası', title: 'Suudi göstergeleri, net bütçe ve doğru iş etkinlikleri.', lead: 'Resmi ekonomik veriler, canlı döviz hesabı ve seçilmiş iş etkinlikleri tek panelde.', riyadhTime: 'Riyad saati', calculatorKicker: 'Planlama hesaplayıcısı', calculatorTitle: 'Suudi riyali ile operasyon sürenizi görün.', loading: 'Canlı kur yükleniyor…', live: 'Canlı kur', cached: 'Yakın tarihli kur', fallback: 'Referans kur', capitalLabel: 'Mevcut sermaye', currencyLabel: 'Ana para birimi', monthlyLabel: 'SAR cinsinden tahmini aylık gider', capitalSar: 'Suudi riyali karşılığı', runway: 'Tahmini operasyon süresi', months: 'ay', calculatorNote: 'Yalnızca planlama amaçlıdır. Kamu ücretleri, vergiler ve lisans maliyetleri dahil değildir.', samaSource: 'Kur referansı: SAMA', eventsKicker: 'İş takvimi', eventsTitle: 'Seçilmiş Suudi yatırım etkinlikleri.', officialCalendar: 'Resmi takvim', eventsNote: 'Seyahatten önce tarihleri organizatörle doğrulayın.', all: 'Tümü', investment: 'Yatırım', realestate: 'Gayrimenkul', industry: 'Sanayi', health: 'Sağlık', source: 'Kaynak', addCalendar: 'Takvime ekle', noEvents: 'Etkinlik bulunamadı.', consultKicker: 'Veriyi işe dönüştürün', consultTitle: 'Sektörü, etkinliği veya bütçeyi Suudi pazar görüşmesine dönüştürün.', consultCta: 'Yatırım danışmanlığı al', emailCta: 'E posta ile iste', updated: 'Resmi veri güncellemesi', rateDate: 'Kur tarihi'
    },
    bn: {
      eyebrow: 'লাইভ বিনিয়োগ ডেস্ক', title: 'সৌদি সূচক, পরিষ্কার বাজেট এবং গুরুত্বপূর্ণ ব্যবসায়িক ইভেন্ট।', lead: 'সরকারি অর্থনৈতিক তথ্য, লাইভ মুদ্রা হিসাব ও নির্বাচিত ব্যবসায়িক ইভেন্ট এক জায়গায়।', riyadhTime: 'রিয়াদ সময়', calculatorKicker: 'পরিকল্পনা ক্যালকুলেটর', calculatorTitle: 'সৌদি রিয়ালে আপনার বাজেট দেখুন।', loading: 'লাইভ রেট লোড হচ্ছে…', live: 'লাইভ রেট', cached: 'সাম্প্রতিক রেট', fallback: 'রেফারেন্স রেট', capitalLabel: 'উপলব্ধ মূলধন', currencyLabel: 'নিজস্ব মুদ্রা', monthlyLabel: 'SAR এ আনুমানিক মাসিক ব্যয়', capitalSar: 'সৌদি রিয়ালে মূলধন', runway: 'আনুমানিক পরিচালন সময়', months: 'মাস', calculatorNote: 'শুধু পরিকল্পনার জন্য। সরকারি ফি, কর ও লাইসেন্স ব্যয় অন্তর্ভুক্ত নয়।', samaSource: 'বিনিময় রেট সূত্র: SAMA', eventsKicker: 'ব্যবসায়িক ক্যালেন্ডার', eventsTitle: 'নির্বাচিত সৌদি বিনিয়োগ ইভেন্ট।', officialCalendar: 'সরকারি ক্যালেন্ডার', eventsNote: 'ভ্রমণের আগে আয়োজকের কাছে তারিখ নিশ্চিত করুন।', all: 'সব', investment: 'বিনিয়োগ', realestate: 'রিয়েল এস্টেট', industry: 'শিল্প', health: 'স্বাস্থ্য', source: 'সূত্র', addCalendar: 'ক্যালেন্ডারে যোগ করুন', noEvents: 'কোনো ইভেন্ট নেই।', consultKicker: 'পরবর্তী পদক্ষেপ', consultTitle: 'খাত, ইভেন্ট বা বাজেটকে সৌদি বাজার আলোচনায় রূপ দিন।', consultCta: 'বিনিয়োগ পরামর্শ বুক করুন', emailCta: 'ইমেইলে অনুরোধ', updated: 'সরকারি তথ্য হালনাগাদ', rateDate: 'রেটের তারিখ'
    },
    hi: {
      eyebrow: 'लाइव निवेशक डेस्क', title: 'सऊदी संकेत, स्पष्ट बजट और महत्वपूर्ण व्यावसायिक आयोजन।', lead: 'आधिकारिक आर्थिक जानकारी, लाइव मुद्रा गणना और चुने हुए व्यावसायिक आयोजन एक जगह।', riyadhTime: 'रियाद समय', calculatorKicker: 'योजना कैलकुलेटर', calculatorTitle: 'सऊदी रियाल में अपना बजट देखें।', loading: 'लाइव दर लोड हो रही है…', live: 'लाइव दर', cached: 'हाल की दर', fallback: 'संदर्भ दर', capitalLabel: 'उपलब्ध पूंजी', currencyLabel: 'घरेलू मुद्रा', monthlyLabel: 'SAR में अनुमानित मासिक खर्च', capitalSar: 'सऊदी रियाल में पूंजी', runway: 'अनुमानित संचालन अवधि', months: 'महीने', calculatorNote: 'केवल योजना के लिए। सरकारी शुल्क, कर और लाइसेंस लागत शामिल नहीं हैं।', samaSource: 'विनिमय दर संदर्भ: SAMA', eventsKicker: 'व्यावसायिक कैलेंडर', eventsTitle: 'चुने हुए सऊदी निवेश आयोजन।', officialCalendar: 'आधिकारिक कैलेंडर', eventsNote: 'यात्रा से पहले आयोजक से तारीख की पुष्टि करें।', all: 'सभी', investment: 'निवेश', realestate: 'रियल एस्टेट', industry: 'उद्योग', health: 'स्वास्थ्य', source: 'स्रोत', addCalendar: 'कैलेंडर में जोड़ें', noEvents: 'कोई आयोजन नहीं।', consultKicker: 'अगला कदम', consultTitle: 'क्षेत्र, आयोजन या बजट को सऊदी बाजार वार्ता में बदलें।', consultCta: 'निवेशक परामर्श बुक करें', emailCta: 'ईमेल से अनुरोध', updated: 'आधिकारिक डेटा अपडेट', rateDate: 'दर की तारीख'
    },
    ur: {
      eyebrow: 'براہ راست سرمایہ کار ڈیسک', title: 'سعودی اشاریے، واضح بجٹ اور اہم کاروباری تقریبات۔', lead: 'سرکاری معاشی معلومات، براہ راست کرنسی حساب اور منتخب کاروباری تقریبات ایک جگہ۔', riyadhTime: 'ریاض کا وقت', calculatorKicker: 'منصوبہ بندی کیلکولیٹر', calculatorTitle: 'سعودی ریال میں اپنا بجٹ دیکھیں۔', loading: 'براہ راست شرح لوڈ ہو رہی ہے…', live: 'براہ راست شرح', cached: 'حالیہ محفوظ شرح', fallback: 'حوالہ شرح', capitalLabel: 'دستیاب سرمایہ', currencyLabel: 'مقامی کرنسی', monthlyLabel: 'SAR میں متوقع ماہانہ خرچ', capitalSar: 'سعودی ریال میں سرمایہ', runway: 'متوقع آپریشن مدت', months: 'ماہ', calculatorNote: 'صرف منصوبہ بندی کے لیے۔ سرکاری فیس، ٹیکس اور لائسنس لاگت شامل نہیں۔', samaSource: 'شرح مبادلہ کا حوالہ: SAMA', eventsKicker: 'کاروباری کیلنڈر', eventsTitle: 'منتخب سعودی سرمایہ کاری تقریبات۔', officialCalendar: 'سرکاری کیلنڈر', eventsNote: 'سفر سے پہلے منتظم سے تاریخ کی تصدیق کریں۔', all: 'سب', investment: 'سرمایہ کاری', realestate: 'ریئل اسٹیٹ', industry: 'صنعت', health: 'صحت', source: 'ذریعہ', addCalendar: 'کیلنڈر میں شامل کریں', noEvents: 'کوئی تقریب نہیں۔', consultKicker: 'اگلا قدم', consultTitle: 'شعبے، تقریب یا بجٹ کو سعودی مارکیٹ گفتگو میں بدلیں۔', consultCta: 'سرمایہ کاری مشاورت بک کریں', emailCta: 'ای میل سے درخواست', updated: 'سرکاری معلومات کی تازہ کاری', rateDate: 'شرح کی تاریخ'
    },
    pt: {
      eyebrow: 'Painel do investidor', title: 'Sinais sauditas, orçamento claro e eventos de negócios relevantes.', lead: 'Indicadores oficiais, conversão de moeda ao vivo e eventos selecionados em um só painel.', riyadhTime: 'Hora de Riade', calculatorKicker: 'Calculadora de planejamento', calculatorTitle: 'Veja seu orçamento em riais sauditas.', loading: 'Carregando cotação…', live: 'Cotação ao vivo', cached: 'Cotação recente', fallback: 'Cotação de referência', capitalLabel: 'Capital disponível', currencyLabel: 'Moeda de origem', monthlyLabel: 'Gasto operacional mensal estimado em SAR', capitalSar: 'Capital em riais sauditas', runway: 'Período operacional estimado', months: 'meses', calculatorNote: 'Estimativa de planejamento. Não inclui taxas públicas, impostos ou licenças específicas.', samaSource: 'Referência cambial: SAMA', eventsKicker: 'Calendário de negócios', eventsTitle: 'Eventos sauditas selecionados para investidores.', officialCalendar: 'Calendário oficial', eventsNote: 'Confirme as datas com o organizador antes da viagem.', all: 'Todos', investment: 'Investimento', realestate: 'Imóveis', industry: 'Indústria', health: 'Saúde', source: 'Fonte', addCalendar: 'Adicionar ao calendário', noEvents: 'Nenhum evento.', consultKicker: 'Próximo passo', consultTitle: 'Transforme setor, evento ou orçamento em uma conversa de entrada no mercado.', consultCta: 'Agendar consultoria', emailCta: 'Solicitar por email', updated: 'Atualização dos dados oficiais', rateDate: 'Data da cotação'
    },
    ko: {
      eyebrow: '실시간 투자자 데스크', title: '사우디 시장 지표, 명확한 예산, 주목할 비즈니스 행사.', lead: '공식 경제 지표, 실시간 환율 계산, 주요 비즈니스 행사를 한곳에서 확인하세요.', riyadhTime: '리야드 시간', calculatorKicker: '계획 계산기', calculatorTitle: '사우디 리얄로 운영 예산을 확인하세요.', loading: '실시간 환율 불러오는 중…', live: '실시간 환율', cached: '최근 저장 환율', fallback: '참고 환율', capitalLabel: '가용 자본', currencyLabel: '기준 통화', monthlyLabel: 'SAR 기준 예상 월 운영비', capitalSar: '사우디 리얄 환산 자본', runway: '예상 운영 기간', months: '개월', calculatorNote: '계획용 추정치입니다. 정부 수수료, 세금, 업종별 인허가 비용은 제외됩니다.', samaSource: '환율 참고: SAMA', eventsKicker: '비즈니스 캘린더', eventsTitle: '선별된 사우디 투자 행사.', officialCalendar: '공식 캘린더', eventsNote: '출장 전 주최 측에 일정을 확인하세요.', all: '전체', investment: '투자', realestate: '부동산', industry: '산업', health: '헬스케어', source: '출처', addCalendar: '캘린더에 추가', noEvents: '행사가 없습니다.', consultKicker: '다음 단계', consultTitle: '산업, 행사 또는 예산을 사우디 시장 진출 상담으로 연결하세요.', consultCta: '투자 상담 예약', emailCta: '이메일 요청', updated: '공식 데이터 업데이트', rateDate: '환율 기준일'
    }
  };

  const fallbackData = {
    updated: '2026-08-24',
    metrics: [],
    events: []
  };
  const fallbackRates = {usd: 0.2666667, eur: 0.228, gbp: 0.197, aed: 0.9793, cny: 1.91, inr: 24.8, try: 11.6, rub: 21.4, krw: 372, bdt: 32.4, pkr: 75.2, brl: 1.44};
  let hubData = fallbackData;
  let rates = fallbackRates;
  let rateDate = '2026-08-24';
  let activeFilter = 'all';

  const currentLanguage = () => translations[document.documentElement.lang] ? document.documentElement.lang : 'en';
  const numericLocale = () => `${currentLanguage()}-u-nu-latn`;
  const tr = key => (translations[currentLanguage()] || translations.en)[key] || translations.en[key] || key;
  const localized = value => typeof value === 'object' ? (value[currentLanguage()] || value.en || Object.values(value)[0]) : value;
  const escapeText = value => String(value ?? '').replace(/[&<>'"]/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[character]));
  const riyalTextPattern = /(بالريال السعودي|بالريال|ريال سعودي|Saudi riyals?|SAR|саудовских риялах|沙特里亚尔|Suudi riyali|সৌদি রিয়ালে|सऊदी रियाल|سعودی ریال|riais sauditas|사우디 리얄)/gi;
  const riyalIcon = className => `<img class="${className}" src="assets/img/saudi-riyal-symbol.svg" alt="" aria-hidden="true">`;
  const currencyMarkup = value => {
    const text = escapeText(value);
    riyalTextPattern.lastIndex = 0;
    return riyalTextPattern.test(text) ? text.replace(riyalTextPattern, riyalIcon('riyal-symbol-inline')) : text;
  };

  function applyLanguage() {
    document.querySelectorAll('[data-hub-i18n]').forEach(element => {
      const key = element.dataset.hubI18n;
      if (tr(key)) element.innerHTML = currencyMarkup(tr(key));
    });
    renderMetrics();
    renderFilters();
    renderEvents();
    calculate();
    updateRateStatus(document.getElementById('rateStatus')?.dataset.state || 'loading');
    document.getElementById('capitalCurrency')?.setAttribute('aria-label', tr('currencyLabel'));
    document.getElementById('eventFilters')?.setAttribute('aria-label', tr('eventsTitle'));
  }

  function renderMetrics() {
    const container = document.getElementById('hubMetrics');
    if (!container || !hubData.metrics?.length) return;
    container.innerHTML = hubData.metrics.map(metric => `
      <a class="hub-metric" href="${escapeText(metric.url)}" target="_blank" rel="noopener">
        <span class="metric-label">${escapeText(localized(metric.label))}</span>
        <strong>${escapeText(metric.value)} <small>${currencyMarkup(metric.unit)}</small></strong>
        <span class="metric-period">${currencyMarkup(localized(metric.period))}</span>
        <span class="metric-source">${escapeText(metric.source)} <b aria-hidden="true">↗</b></span>
      </a>`).join('');
    container.setAttribute('aria-label', `${tr('updated')} ${hubData.updated}`);
  }

  function renderFilters() {
    const container = document.getElementById('eventFilters');
    if (!container) return;
    const filters = ['all', 'investment', 'realestate', 'industry', 'health'];
    container.innerHTML = filters.map(filter => `<button type="button" class="event-filter${activeFilter === filter ? ' active' : ''}" data-event-filter="${filter}" aria-pressed="${activeFilter === filter}">${escapeText(tr(filter))}</button>`).join('');
    container.querySelectorAll('[data-event-filter]').forEach(button => button.addEventListener('click', () => {
      activeFilter = button.dataset.eventFilter;
      renderFilters();
      renderEvents();
    }));
  }

  function formatEventDate(event) {
    const language = currentLanguage();
    const start = new Date(`${event.start}T12:00:00`);
    const end = new Date(`${event.end}T12:00:00`);
    const month = new Intl.DateTimeFormat(numericLocale(), {month: 'short'}).format(start);
    const year = new Intl.NumberFormat(numericLocale(), {useGrouping: false}).format(start.getFullYear());
    const startDay = new Intl.NumberFormat(numericLocale()).format(start.getDate());
    const endDay = new Intl.NumberFormat(numericLocale()).format(end.getDate());
    const connector = language === 'ar' || language === 'ur' ? 'إلى' : language === 'zh' ? '至' : language === 'ko' ? '부터' : 'to';
    return `${startDay} ${connector} ${endDay} ${month} ${year}`;
  }

  function renderEvents() {
    const container = document.getElementById('eventList');
    if (!container) return;
    const today = new Date().toISOString().slice(0, 10);
    const events = (hubData.events || []).filter(event => event.end >= today && (activeFilter === 'all' || event.sector === activeFilter));
    if (!events.length) {
      container.innerHTML = `<p class="event-empty">${escapeText(tr('noEvents'))}</p>`;
      return;
    }
    container.innerHTML = events.map((event, index) => `
      <article class="event-item">
        <time datetime="${escapeText(event.start)}">${escapeText(formatEventDate(event))}</time>
        <div class="event-copy"><h4>${escapeText(localized(event.title))}</h4><p>${escapeText(localized(event.city))} · ${escapeText(localized(event.venue))}</p></div>
        <div class="event-actions"><a href="${escapeText(event.url)}" target="_blank" rel="noopener" aria-label="${escapeText(tr('source'))}">↗</a><button type="button" data-event-index="${index}" aria-label="${escapeText(tr('addCalendar'))}">＋</button></div>
      </article>`).join('');
    container.querySelectorAll('[data-event-index]').forEach(button => button.addEventListener('click', () => downloadCalendar(events[Number(button.dataset.eventIndex)])));
  }

  function downloadCalendar(event) {
    const nextDay = iso => {
      const date = new Date(`${iso}T12:00:00Z`);
      date.setUTCDate(date.getUTCDate() + 1);
      return date.toISOString().slice(0, 10).replaceAll('-', '');
    };
    const start = event.start.replaceAll('-', '');
    const end = nextDay(event.end);
    const title = localized(event.title).replace(/[\n\r,;]/g, ' ');
    const location = `${localized(event.venue)}, ${localized(event.city)}`.replace(/[\n\r;]/g, ' ');
    const body = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:Safwah Investment', 'BEGIN:VEVENT', `DTSTART;VALUE=DATE:${start}`, `DTEND;VALUE=DATE:${end}`, `SUMMARY:${title}`, `LOCATION:${location}`, `URL:${event.url}`, 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
    const url = URL.createObjectURL(new Blob([body], {type: 'text/calendar;charset=utf-8'}));
    const link = document.createElement('a');
    link.href = url;
    link.download = `Safwah_${title.replace(/\W+/g, '_')}.ics`;
    link.click();
    URL.revokeObjectURL(url);
  }

  function calculate() {
    const amount = Number(document.getElementById('capitalAmount')?.value || 0);
    const currency = document.getElementById('capitalCurrency')?.value || 'usd';
    const monthly = Number(document.getElementById('monthlySpend')?.value || 0);
    const perSar = Number(rates[currency] || fallbackRates[currency] || 1);
    const sar = perSar > 0 ? amount / perSar : 0;
    const capitalElement = document.getElementById('capitalSar');
    const runwayElement = document.getElementById('runwayMonths');
    const formattedCapital = new Intl.NumberFormat(numericLocale(), {maximumFractionDigits: 0}).format(sar);
    if (capitalElement) {
      capitalElement.innerHTML = `${riyalIcon('riyal-symbol')}<span dir="ltr">${formattedCapital}</span>`;
      capitalElement.setAttribute('aria-label', `${tr('capitalSar')} ${formattedCapital}`);
    }
    if (runwayElement) runwayElement.textContent = monthly > 0 ? `${new Intl.NumberFormat(numericLocale(), {maximumFractionDigits: 1}).format(sar / monthly)} ${tr('months')}` : '—';
    const message = currentLanguage() === 'ar'
      ? `السلام عليكم صفوة الاستثمارية. أرغب في حجز استشارة لدخول السوق السعودي. الميزانية التقديرية: ⃁ ${Math.round(sar).toLocaleString('en-US')} القطاع: ___`
      : `Hello Safwah Investment. I would like to book a Saudi market entry consultation. Indicative budget: ⃁ ${Math.round(sar).toLocaleString('en-US')}. Sector: ___`;
    const whatsApp = document.getElementById('hubWhatsApp');
    if (whatsApp) whatsApp.href = `https://wa.me/966583000800?text=${encodeURIComponent(message)}`;
  }

  function updateRateStatus(state) {
    const status = document.getElementById('rateStatus');
    if (!status) return;
    status.dataset.state = state;
    status.textContent = tr(state);
    const dateElement = document.getElementById('rateDate');
    if (dateElement) dateElement.textContent = `${tr('rateDate')}: ${rateDate}`;
  }

  async function loadRates() {
    const cacheKey = 'safwah_currency_rates_v1';
    try {
      const saved = JSON.parse(localStorage.getItem(cacheKey) || 'null');
      if (saved && Date.now() - saved.savedAt < 86400000 && saved.rates) {
        rates = saved.rates;
        rateDate = saved.date;
        updateRateStatus('cached');
        calculate();
      }
    } catch (_) {}
    try {
      const response = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/sar.json', {cache: 'no-store'});
      if (!response.ok) throw new Error('Rate request failed');
      const payload = await response.json();
      if (!payload.sar) throw new Error('Rate payload unavailable');
      rates = payload.sar;
      rateDate = payload.date || new Date().toISOString().slice(0, 10);
      try { localStorage.setItem(cacheKey, JSON.stringify({savedAt: Date.now(), date: rateDate, rates})); } catch (_) {}
      updateRateStatus('live');
    } catch (_) {
      if (rates === fallbackRates) updateRateStatus('fallback');
    }
    calculate();
  }

  function updateClock() {
    const clock = document.getElementById('riyadhClock');
    if (clock) clock.textContent = new Intl.DateTimeFormat(numericLocale(), {timeZone: 'Asia/Riyadh', hour: '2-digit', minute: '2-digit'}).format(new Date());
  }

  async function init() {
    try {
      const response = await fetch('assets/data/investor-hub.json', {cache: 'no-cache'});
      if (response.ok) hubData = await response.json();
    } catch (_) {}
    document.getElementById('currencyForm')?.addEventListener('input', calculate);
    document.getElementById('languageSelect')?.addEventListener('change', () => setTimeout(applyLanguage, 0));
    new MutationObserver(applyLanguage).observe(document.documentElement, {attributes: true, attributeFilter: ['lang']});
    applyLanguage();
    updateClock();
    setInterval(updateClock, 30000);
    loadRates();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once: true});
  else init();
})();
