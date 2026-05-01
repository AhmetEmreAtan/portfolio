export type Lang = "tr" | "en";

export const translations = {
  tr: {
    nav: {
      about: "Hakkımda",
      projects: "Projeler",
      skills: "Beceriler",
      experience: "Deneyim",
      contact: "İletişim",
      hire: "İş Teklifi",
      langSwitch: "EN",
    },
    hero: {
      badge: "İş Teklifine Açık",
      greeting: "Merhaba, ben",
      name: "Ahmet Emre",
      typingTexts: [
        "Android Geliştirici",
        "NOC Mühendisi",
        "Kotlin Geliştirici",
        "Mobil Uygulama Geliştirici",
      ],
      description:
        "Kotlin ve Android ile mobil uygulamalar, web tabanlı sistemler ve ekip liderliği üzerine 2+ yıllık deneyimim var. Temiz kod, iyi tasarım ve kullanıcı odaklı çözümler üretmeyi seviyorum.",
      cta1: "Projelerimi Gör",
      cta2: "İletişime Geç",
      stats: [
        { value: "2+", label: "Yıl Deneyim" },
        { value: "9+", label: "Proje" },
        { value: "5+", label: "Teknoloji" },
      ],
      scroll: "Kaydır",
    },
    about: {
      sectionNum: "01.",
      title: "Hakkımda",
      subtitle:
        "Kim olduğuma, beni neyin motive ettiğine ve fikirlerimi hayata geçirmek için kullandığım araçlara kısa bir bakış.",
      bio1: "Merhaba! Ben Ahmet Emre, İstanbul'da yaşayan tutkulu bir yazılım geliştiriciyim. Kotlin ve Android ile mobil uygulama geliştirmenin yanı sıra, KoçSistem'de NOC ekibinde ağ operasyonları alanında çalışıyorum.",
      bio2: "2+ yıllık profesyonel deneyimim boyunca Google Play'de yayınlanan uygulamalar geliştirdim, ekip liderliği yaptım ve e-ticaret platformlarında danışmanlık verdim. Kodun sadece çalışması değil, sürdürülebilir ve anlaşılır olması gerektiğine inanıyorum.",
      bio3: "Kod yazmadığımda teknoloji trendlerini takip eder, spor yapar ya da yeni bir proje fikri üzerine kafa yorarım.",
      highlights: [
        {
          title: "Mobil Öncelikli",
          description:
            "Kotlin ve Jetpack Compose ile native Android deneyimleri tasarlıyor, Google Play'e hazır uygulamalar geliştiriyorum.",
        },
        {
          title: "Ekip Liderliği",
          description:
            "WayFindr ve Medipol projelerinde 15 kişiye kadar ekip yönettim, proje ve görev koordinasyonunu üstlendim.",
        },
        {
          title: "Çok Yönlü Geliştirici",
          description:
            "Mobil'den web'e, oyundan ağ operasyonlarına kadar geniş bir yelpazede çözümler üretiyorum.",
        },
      ],
      techTitle: "Kullandığım Teknolojiler",
    },
    projects: {
      sectionNum: "02.",
      title: "Projelerim",
      subtitle:
        "Geliştirdiğim projelerin bir özeti — mobil uygulamalardan web panellerine, oyunlardan kurumsal sistemlere.",
      featured: "Öne Çıkan",
      filters: ["Hepsi", "Web", "Mobil", "Oyun", "PC"],
      liveLabel: "Canlı",
      codeLabel: "Kod",
      liveDemo: "Canlı Demo",
      source: "Kaynak Kod",
      noProjects: "Bu kategoride henüz proje yok.",
    },
    skills: {
      sectionNum: "03.",
      title: "Beceriler",
      subtitle:
        "Uzmanlaştığım teknolojiler ve en fazla değer kattığım alanların dökümü.",
      categories: [
        {
          id: "mobile",
          title: "Mobil Geliştirme",
          description: "Android native uygulama geliştirme ve oyun",
        },
        {
          id: "backend",
          title: "Backend & Veritabanı",
          description: "Sunucu tarafı ve veri yönetimi",
        },
        {
          id: "tools",
          title: "Araçlar & Diğer",
          description: "Geliştirme araçları ve ek yetkinlikler",
        },
      ],
      alsoTitle: "Ayrıca Biliyor",
    },
    experience: {
      sectionNum: "04.",
      title: "Deneyim",
      subtitle:
        "Çalıştığım şirketler, üstlendiğim roller ve beni şekillendiren deneyimlerin hikayesi.",
      workLabel: "İş",
      eduLabel: "Eğitim",
    },
    contact: {
      sectionNum: "05.",
      title: "İletişime Geçelim",
      subtitle:
        "Aklında bir proje mi var ya da sadece merhaba mı demek istiyorsun? Her zaman ilginç fırsatlara açığım.",
      sayHello: "Merhaba De",
      basedIn: "Lokasyon",
      location: "Üsküdar, İstanbul (UTC+3)",
      availability: "Müsaitlik",
      availableText: "İş Teklifine Açık",
      findOnline: "Çevrimiçi Bul",
      formTitle: "Mesaj Gönder",
      namePlaceholder: "Adın",
      emailPlaceholder: "e-posta@adresin.com",
      messagePlaceholder: "Proje veya fikrin hakkında anlat...",
      sendBtn: "Mesaj Gönder",
      sendingBtn: "Gönderiliyor...",
      successTitle: "Mesaj Gönderildi!",
      successMsg:
        "Ulaştığın için teşekkürler. 24 saat içinde geri döneceğim.",
      sendAnother: "Başka Mesaj Gönder",
      errorMsg: "Bir şeyler ters gitti. Lütfen tekrar dene.",
    },
    footer: {
      copyright: "Ahmet Emre Atan",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
      hire: "Hire Me",
      langSwitch: "TR",
    },
    hero: {
      badge: "Open to Work",
      greeting: "Hi, I'm",
      name: "Ahmet Emre",
      typingTexts: [
        "Android Developer",
        "NOC Engineer",
        "Kotlin Developer",
        "Mobile App Developer",
      ],
      description:
        "I build mobile applications with Kotlin & Android and manage network operations at KoçSistem's NOC team. 2+ years of experience delivering clean, user-focused solutions.",
      cta1: "View My Work",
      cta2: "Get in Touch",
      stats: [
        { value: "2+", label: "Years Experience" },
        { value: "9+", label: "Projects Built" },
        { value: "5+", label: "Technologies" },
      ],
      scroll: "Scroll",
    },
    about: {
      sectionNum: "01.",
      title: "About Me",
      subtitle:
        "A glimpse into who I am, what drives me, and the tools I use to bring ideas to life.",
      bio1: "Hey! I'm Ahmet Emre, a passionate software developer based in Istanbul. I specialize in mobile app development with Kotlin & Android, and currently work at KoçSistem's NOC team in network operations.",
      bio2: "Over 2+ years I've shipped apps to Google Play, led teams of up to 15 people, and consulted on e-commerce platforms. I believe code should not just work — it should be maintainable and readable.",
      bio3: "When I'm not coding, I follow tech trends, stay active, or brainstorm ideas for the next project.",
      highlights: [
        {
          title: "Mobile First",
          description:
            "I design native Android experiences with Kotlin and Jetpack Compose, building apps ready for Google Play.",
        },
        {
          title: "Team Leadership",
          description:
            "Led teams of up to 15 people across WayFindr and Medipol projects, handling coordination and delivery.",
        },
        {
          title: "Versatile Developer",
          description:
            "From mobile to web, games to network operations — I build solutions across a wide spectrum.",
        },
      ],
      techTitle: "Technologies I Work With",
    },
    projects: {
      sectionNum: "02.",
      title: "My Projects",
      subtitle:
        "A curated collection of projects I've built — from mobile apps to web dashboards, games to enterprise tools.",
      featured: "Featured",
      filters: ["All", "Web", "Mobile", "Game", "PC"],
      liveLabel: "Live",
      codeLabel: "Code",
      liveDemo: "Live Demo",
      source: "Source Code",
      noProjects: "No projects in this category yet.",
    },
    skills: {
      sectionNum: "03.",
      title: "Skills & Expertise",
      subtitle:
        "A breakdown of the technologies I've mastered and the areas I bring the most value to.",
      categories: [
        {
          id: "mobile",
          title: "Mobile Development",
          description: "Native Android app development and games",
        },
        {
          id: "backend",
          title: "Backend & Database",
          description: "Server-side development and data management",
        },
        {
          id: "tools",
          title: "Tools & Other",
          description: "Development tools and additional skills",
        },
      ],
      alsoTitle: "Also Familiar With",
    },
    experience: {
      sectionNum: "04.",
      title: "Experience",
      subtitle:
        "My journey through companies, roles, and education that shaped how I think and build.",
      workLabel: "Work",
      eduLabel: "Education",
    },
    contact: {
      sectionNum: "05.",
      title: "Let's Work Together",
      subtitle:
        "Have a project in mind, or just want to say hello? I'm always open to interesting opportunities.",
      sayHello: "Say Hello",
      basedIn: "Based in",
      location: "Üsküdar, Istanbul (UTC+3)",
      availability: "Availability",
      availableText: "Open to Opportunities",
      findOnline: "Find Me Online",
      formTitle: "Send a Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Tell me about your project or idea...",
      sendBtn: "Send Message",
      sendingBtn: "Sending...",
      successTitle: "Message Sent!",
      successMsg: "Thanks for reaching out. I'll get back to you within 24 hours.",
      sendAnother: "Send another",
      errorMsg: "Something went wrong. Please try again.",
    },
    footer: {
      copyright: "Ahmet Emre Atan",
    },
  },
} as const;

export type Translations = typeof translations.tr;
