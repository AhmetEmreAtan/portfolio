export interface ProjectFeature {
  tr: string;
  en: string;
}

export interface ProjectScreenshot {
  label: { tr: string; en: string };
  color: string;
  icon: string;
}

export interface ProjectData {
  slug: string;
  initials: string;
  gradient: string;
  accentColor: string;
  title: string;
  categoryTr: string;
  categoryEn: string;
  tech: string[];
  github: string;
  playStore?: string;
  featured: boolean;

  tagline: { tr: string; en: string };
  description: { tr: string; en: string };
  longDescription: { tr: string; en: string };
  features: ProjectFeature[];
  screenshots: ProjectScreenshot[];
}

export const projectsData: ProjectData[] = [
  {
    slug: "nocdashboard",
    initials: "NOC",
    gradient: "from-indigo-600 via-blue-600 to-indigo-800",
    accentColor: "#6366f1",
    title: "NOCDashboard",
    categoryTr: "Web",
    categoryEn: "Web",
    tech: ["React", "TypeScript", "Node.js", "MySQL", "Docker"],
    github: "https://github.com/AhmetEmreAtan/noc_dashboard",
    featured: true,
    tagline: {
      tr: "Ağ operasyonlarını tek ekrandan yönet",
      en: "Manage network operations from a single screen",
    },
    description: {
      tr: "KoçSistem NOC ekibi için geliştirilen web tabanlı ağ operasyon izleme ve yönetim paneli.",
      en: "Web-based network operation monitoring and management dashboard developed for KoçSistem's NOC team.",
    },
    longDescription: {
      tr: "NOCDashboard, KoçSistem'deki Ağ Operasyon Merkezi (NOC) ekibinin günlük operasyonel süreçlerini dijitalleştirmek ve kolaylaştırmak amacıyla geliştirilmiş kapsamlı bir web uygulamasıdır. Ağ cihazlarının anlık durumunu izleme, alarm yönetimi ve ekip içi koordinasyonu merkezi bir arayüzden sağlar. React ve TypeScript ile geliştirilen frontend, Node.js tabanlı bir API ve MySQL veritabanıyla entegre çalışmaktadır.",
      en: "NOCDashboard is a comprehensive web application developed to digitize and streamline the daily operational processes of KoçSistem's Network Operations Center (NOC) team. It provides real-time network device monitoring, alarm management, and team coordination from a centralized interface. The frontend, built with React and TypeScript, integrates with a Node.js-based API and MySQL database.",
    },
    features: [
      { tr: "Ağ cihazlarının anlık durum izlemesi", en: "Real-time network device status monitoring" },
      { tr: "Alarm yönetimi ve bildirim sistemi", en: "Alarm management and notification system" },
      { tr: "Ekip içi görev koordinasyonu", en: "Team task coordination" },
      { tr: "Detaylı raporlama ve loglama", en: "Detailed reporting and logging" },
      { tr: "Rol tabanlı erişim yönetimi", en: "Role-based access management" },
      { tr: "Docker ile konteynerize dağıtım", en: "Containerized deployment with Docker" },
    ],
    screenshots: [
      { label: { tr: "Ana Panel", en: "Main Dashboard" }, color: "#1e1e2e", icon: "📊" },
      { label: { tr: "Cihaz İzleme", en: "Device Monitoring" }, color: "#1a1a2e", icon: "🖧" },
      { label: { tr: "Alarm Yönetimi", en: "Alarm Management" }, color: "#1e1e28", icon: "🔔" },
    ],
  },
  {
    slug: "locavia",
    initials: "LOC",
    gradient: "from-purple-600 via-violet-600 to-purple-800",
    accentColor: "#a855f7",
    title: "Locavia",
    categoryTr: "Mobil",
    categoryEn: "Mobile",
    tech: ["Kotlin", "Jetpack Compose", "Android", "Firebase"],
    github: "https://github.com/AhmetEmreAtan/Locavia",
    featured: true,
    tagline: {
      tr: "Çevreni keşfet, deneyimlerini paylaş",
      en: "Discover your surroundings, share your experiences",
    },
    description: {
      tr: "Kotlin ile geliştirilen, kullanıcıların çevrelerindeki mekanları keşfetmesini ve deneyimlerini paylaşmasını sağlayan Android uygulaması.",
      en: "Android app built with Kotlin that lets users discover nearby places and share their experiences.",
    },
    longDescription: {
      tr: "Locavia, kullanıcıların çevrelerindeki yerleri keşfetmelerine ve deneyimlerini toplulukla paylaşmalarına olanak tanıyan modern bir Android uygulamasıdır. Jetpack Compose ile oluşturulan akıcı ve sezgisel bir kullanıcı arayüzüne sahip olan Locavia, Firebase altyapısını kullanarak gerçek zamanlı veri senkronizasyonu sağlar. MVVM mimarisi ve Clean Architecture prensipleriyle geliştirilen uygulama, sürdürülebilir ve ölçeklenebilir bir kod tabanına sahiptir.",
      en: "Locavia is a modern Android application that allows users to discover nearby places and share their experiences with the community. With a fluid and intuitive UI built using Jetpack Compose, Locavia provides real-time data synchronization using Firebase infrastructure. Developed with MVVM architecture and Clean Architecture principles, the app has a sustainable and scalable codebase.",
    },
    features: [
      { tr: "Yakındaki mekanları keşfetme", en: "Discover nearby places" },
      { tr: "Konum paylaşımı ve yorumlar", en: "Location sharing and reviews" },
      { tr: "Jetpack Compose ile modern arayüz", en: "Modern UI with Jetpack Compose" },
      { tr: "Firebase gerçek zamanlı senkronizasyon", en: "Firebase real-time synchronization" },
      { tr: "MVVM + Clean Architecture", en: "MVVM + Clean Architecture" },
      { tr: "Kullanıcı profili ve sosyal özellikler", en: "User profiles and social features" },
    ],
    screenshots: [
      { label: { tr: "Ana Ekran", en: "Home Screen" }, color: "#1a1025", icon: "🗺️" },
      { label: { tr: "Mekan Detayı", en: "Place Detail" }, color: "#1c1028", icon: "📍" },
      { label: { tr: "Profil", en: "Profile" }, color: "#18102a", icon: "👤" },
    ],
  },
  {
    slug: "wayfindr",
    initials: "WF",
    gradient: "from-blue-600 via-cyan-600 to-blue-800",
    accentColor: "#3b82f6",
    title: "WayFindr",
    categoryTr: "Mobil",
    categoryEn: "Mobile",
    tech: ["Kotlin", "Android", "Google Maps API", "Firebase"],
    github: "https://github.com/AhmetEmreAtan/WayFindr",
    playStore: "https://play.google.com/store/apps/details?id=com.saatech.wayfindr&gl=TR",
    featured: false,
    tagline: {
      tr: "Yeni yerler keşfet, anılarını paylaş",
      en: "Discover new places, share your memories",
    },
    description: {
      tr: "Kullanıcıların yeni yerler keşfetmesini ve lokasyon bilgilerini paylaşmasını sağlayan seyahat rehberi. Google Play'de yayında.",
      en: "Travel guide app that helps users discover new places and share location insights. Live on Google Play.",
    },
    longDescription: {
      tr: "WayFindr, kullanıcıların yeni yerler keşfetmesini, lokasyon bilgilerini paylaşmasını ve seyahat deneyimlerini kayıt altına almasını sağlayan kapsamlı bir seyahat rehberi uygulamasıdır. 15 kişilik bir ekiple geliştirilen ve Google Play Store'da aktif olarak yayınlanan bu uygulama, Google Maps API entegrasyonu sayesinde detaylı lokasyon bilgileri sunar. Proje yönetimi ve ekip liderliğini bizzat üstlendiğim bu proje, hem teknik hem de yönetimsel açıdan büyük bir deneyim oldu.",
      en: "WayFindr is a comprehensive travel guide application that enables users to discover new places, share location information, and record travel experiences. Developed with a 15-person team and actively published on the Google Play Store, the app provides detailed location information through Google Maps API integration. This project, where I personally handled project management and team leadership, was a significant experience both technically and managerially.",
    },
    features: [
      { tr: "Google Maps API ile detaylı harita desteği", en: "Detailed map support with Google Maps API" },
      { tr: "Yer keşfetme ve öneri sistemi", en: "Place discovery and recommendation system" },
      { tr: "Fotoğraf ve yorum paylaşımı", en: "Photo and review sharing" },
      { tr: "Google Play Store'da yayında", en: "Live on Google Play Store" },
      { tr: "Firebase gerçek zamanlı veritabanı", en: "Firebase real-time database" },
      { tr: "15 kişilik ekip tarafından geliştirildi", en: "Developed by a 15-person team" },
    ],
    screenshots: [
      { label: { tr: "Harita", en: "Map" }, color: "#0f1825", icon: "🌍" },
      { label: { tr: "Keşfet", en: "Discover" }, color: "#0d1a28", icon: "🧭" },
      { label: { tr: "Yer Detayı", en: "Place Detail" }, color: "#101c2a", icon: "📸" },
    ],
  },
  {
    slug: "finno",
    initials: "FIN",
    gradient: "from-green-600 via-emerald-600 to-green-800",
    accentColor: "#22c55e",
    title: "Finno",
    categoryTr: "Mobil",
    categoryEn: "Mobile",
    tech: ["Kotlin", "Jetpack Compose", "Android", "Room DB"],
    github: "https://github.com/AhmetEmreAtan/Finno",
    featured: false,
    tagline: {
      tr: "Finansını akıllıca yönet",
      en: "Manage your finances smartly",
    },
    description: {
      tr: "Kotlin ile geliştirilen kişisel finans takip uygulaması. Gelir-gider yönetimi ve görsel raporlama.",
      en: "Personal finance tracking app built with Kotlin. Manage income/expenses and view visual reports.",
    },
    longDescription: {
      tr: "Finno, kullanıcıların gelir ve giderlerini kolayca takip etmelerine, finansal hedefler belirlemelerine ve harcama alışkanlıklarını analiz etmelerine yardımcı olan modern bir kişisel finans uygulamasıdır. Jetpack Compose ile geliştirilen şık arayüzü, Room veritabanı ile yerel depolama ve görsel grafikler aracılığıyla finansal sağlığınızı tek bakışta görmenizi sağlar.",
      en: "Finno is a modern personal finance application that helps users easily track their income and expenses, set financial goals, and analyze spending habits. Its elegant interface developed with Jetpack Compose, combined with local storage via Room database and visual charts, allows you to see your financial health at a glance.",
    },
    features: [
      { tr: "Gelir ve gider takibi", en: "Income and expense tracking" },
      { tr: "Kategori bazlı harcama analizi", en: "Category-based spending analysis" },
      { tr: "Görsel grafikler ve raporlar", en: "Visual charts and reports" },
      { tr: "Room DB ile offline çalışma", en: "Offline operation with Room DB" },
      { tr: "Bütçe hedefleri belirleme", en: "Budget goal setting" },
      { tr: "Jetpack Compose modern arayüz", en: "Jetpack Compose modern UI" },
    ],
    screenshots: [
      { label: { tr: "Ana Ekran", en: "Home" }, color: "#0d1f12", icon: "💰" },
      { label: { tr: "Harcamalar", en: "Expenses" }, color: "#0f2015", icon: "📊" },
      { label: { tr: "Raporlar", en: "Reports" }, color: "#0b1e10", icon: "📈" },
    ],
  },
  {
    slug: "dailywater",
    initials: "DW",
    gradient: "from-cyan-600 via-sky-600 to-cyan-800",
    accentColor: "#06b6d4",
    title: "DailyWater",
    categoryTr: "Mobil",
    categoryEn: "Mobile",
    tech: ["Kotlin", "Android", "Room DB", "WorkManager"],
    github: "https://github.com/AhmetEmreAtan",
    featured: false,
    tagline: {
      tr: "Günlük su ihtiyacını takip et",
      en: "Track your daily water intake",
    },
    description: {
      tr: "Günlük su içme alışkanlığını takip etmek için geliştirilmiş Android uygulaması. Bildirim ve hatırlatma özellikleri.",
      en: "Android app to track daily water intake habits with notification and reminder features.",
    },
    longDescription: {
      tr: "DailyWater, kullanıcıların günlük su içme hedeflerini belirlemelerine, tükettikleri su miktarını takip etmelerine ve sağlıklı bir hidrasyon alışkanlığı oluşturmalarına yardımcı olan bir sağlık uygulamasıdır. WorkManager ile zamanlanmış akıllı hatırlatma bildirimleri sayesinde gün içinde su içmeyi unutmazsınız.",
      en: "DailyWater is a health application that helps users set daily water intake goals, track the amount of water they consume, and build a healthy hydration habit. Thanks to smart scheduled reminder notifications via WorkManager, you won't forget to drink water throughout the day.",
    },
    features: [
      { tr: "Günlük su hedefi belirleme", en: "Set daily water goals" },
      { tr: "WorkManager ile akıllı hatırlatmalar", en: "Smart reminders with WorkManager" },
      { tr: "İlerleme takibi ve animasyonlar", en: "Progress tracking with animations" },
      { tr: "Özelleştirilebilir bildirim saatleri", en: "Customizable notification times" },
      { tr: "Room DB ile geçmiş kayıtları", en: "Historical records with Room DB" },
      { tr: "Kişiselleştirilmiş hedef hesaplama", en: "Personalized goal calculation" },
    ],
    screenshots: [
      { label: { tr: "Ana Ekran", en: "Home" }, color: "#0a1f2a", icon: "💧" },
      { label: { tr: "Takip", en: "Tracking" }, color: "#0c2030", icon: "📅" },
      { label: { tr: "Ayarlar", en: "Settings" }, color: "#0a1e28", icon: "⚙️" },
    ],
  },
  {
    slug: "taskly",
    initials: "TSK",
    gradient: "from-orange-600 via-amber-600 to-orange-800",
    accentColor: "#f97316",
    title: "Taskly",
    categoryTr: "Mobil",
    categoryEn: "Mobile",
    tech: ["Kotlin", "Android", "Room DB", "Jetpack Compose"],
    github: "https://github.com/AhmetEmreAtan",
    featured: false,
    tagline: {
      tr: "Görevlerini organize et, hedeflerine ulaş",
      en: "Organize your tasks, reach your goals",
    },
    description: {
      tr: "Yapılacak işleri düzenli şekilde takip etmeye yarayan görev yönetimi Android uygulaması.",
      en: "Task management Android app for organized to-do tracking with local storage.",
    },
    longDescription: {
      tr: "Taskly, kullanıcıların günlük görevlerini ve yapılacaklar listesini kolayca yönetebilecekleri sade ve kullanıcı dostu bir görev yönetimi uygulamasıdır. Öncelik sıralama, kategori filtreleme ve tamamlama animasyonları ile görev yönetimini hem verimli hem de keyifli hale getirir. Room veritabanı sayesinde tüm veriler yerel olarak güvenle saklanır.",
      en: "Taskly is a simple and user-friendly task management application where users can easily manage their daily tasks and to-do lists. Priority sorting, category filtering, and completion animations make task management both efficient and enjoyable. All data is safely stored locally thanks to the Room database.",
    },
    features: [
      { tr: "Görev oluşturma ve düzenleme", en: "Task creation and editing" },
      { tr: "Öncelik ve kategori sınıflandırması", en: "Priority and category classification" },
      { tr: "Tamamlama animasyonları", en: "Completion animations" },
      { tr: "Room DB ile offline çalışma", en: "Offline operation with Room DB" },
      { tr: "Jetpack Compose modern arayüz", en: "Jetpack Compose modern UI" },
      { tr: "Görev hatırlatma bildirimleri", en: "Task reminder notifications" },
    ],
    screenshots: [
      { label: { tr: "Görevler", en: "Tasks" }, color: "#1f1200", icon: "✅" },
      { label: { tr: "Yeni Görev", en: "New Task" }, color: "#201300", icon: "➕" },
      { label: { tr: "Kategoriler", en: "Categories" }, color: "#1e1100", icon: "🗂️" },
    ],
  },
  {
    slug: "noteflow",
    initials: "NF",
    gradient: "from-violet-600 via-purple-600 to-violet-800",
    accentColor: "#8b5cf6",
    title: "NoteFlow",
    categoryTr: "Mobil",
    categoryEn: "Mobile",
    tech: ["Kotlin", "Android", "Room DB", "Material Design"],
    github: "https://github.com/AhmetEmreAtan",
    featured: false,
    tagline: {
      tr: "Notlarını akışkan tut",
      en: "Keep your notes flowing",
    },
    description: {
      tr: "Not alma ve düzenleme işlemlerini kolaylaştıran, notları güvenle saklayan Android uygulaması.",
      en: "Android note-taking app for creating and organizing notes with secure local storage.",
    },
    longDescription: {
      tr: "NoteFlow, kullanıcıların düşüncelerini, fikirlerini ve notlarını hızlıca kaydetmelerine olanak tanıyan minimalist bir not defteri uygulamasıdır. Material Design 3 rehberlerine uygun tasarımı ile şık ve modern bir deneyim sunarken, Room veritabanı sayesinde tüm notlar güvenle yerel olarak saklanır. Zengin metin formatlaması ve hızlı arama özellikleri ile notlarınıza istediğiniz zaman kolayca ulaşabilirsiniz.",
      en: "NoteFlow is a minimalist note-taking application that allows users to quickly record their thoughts, ideas, and notes. While offering a stylish and modern experience with a design adhering to Material Design 3 guidelines, all notes are safely stored locally thanks to the Room database. With rich text formatting and quick search features, you can easily access your notes at any time.",
    },
    features: [
      { tr: "Hızlı not oluşturma ve düzenleme", en: "Quick note creation and editing" },
      { tr: "Zengin metin formatlaması", en: "Rich text formatting" },
      { tr: "Hızlı arama ve filtreleme", en: "Quick search and filtering" },
      { tr: "Room DB ile yerel depolama", en: "Local storage with Room DB" },
      { tr: "Material Design 3 arayüzü", en: "Material Design 3 interface" },
      { tr: "Renk etiketleri ile organizasyon", en: "Organization with color tags" },
    ],
    screenshots: [
      { label: { tr: "Not Listesi", en: "Note List" }, color: "#150f2a", icon: "📝" },
      { label: { tr: "Not Düzenle", en: "Edit Note" }, color: "#160f2c", icon: "✏️" },
      { label: { tr: "Arama", en: "Search" }, color: "#130e28", icon: "🔍" },
    ],
  },
  {
    slug: "metaverse-school",
    initials: "MS",
    gradient: "from-rose-600 via-pink-600 to-rose-800",
    accentColor: "#f43f5e",
    title: "Metaverse School",
    categoryTr: "PC",
    categoryEn: "PC",
    tech: ["Unity", "C#", "Blender", "3D Modelling"],
    github: "https://github.com/AhmetEmreAtan",
    featured: false,
    tagline: {
      tr: "Eğitimi sanal dünyaya taşı",
      en: "Bring education to the virtual world",
    },
    description: {
      tr: "İstanbul Medipol Üniversitesi öğrencileri için sanal okul ortamı sunan PC uygulaması.",
      en: "PC application providing a virtual school environment for Istanbul Medipol University students.",
    },
    longDescription: {
      tr: "Metaverse School, İstanbul Medipol Üniversitesi öğrencileri için dijital bir kampüs deneyimi sunan yenilikçi bir PC uygulamasıdır. Unity oyun motoru ve C# ile geliştirilen, 3D modellerin Blender ile oluşturulduğu bu projede öğrenciler sanal bir okul ortamında birbirleriyle etkileşime geçebilmektedir. 15 kişilik bir ekiple geliştirdiğim bu projede proje yönetimi ve liderlik görevlerini üstlendim. Proje, mezuniyetim sonrası ekibe devredildi.",
      en: "Metaverse School is an innovative PC application that offers a digital campus experience for Istanbul Medipol University students. Developed with the Unity game engine and C#, with 3D models created in Blender, students can interact with each other in a virtual school environment. In this project, which I developed with a 15-person team, I took on project management and leadership responsibilities. The project was handed over to the team after my graduation.",
    },
    features: [
      { tr: "Unity ile 3D sanal kampüs ortamı", en: "3D virtual campus environment with Unity" },
      { tr: "Çok kullanıcılı gerçek zamanlı etkileşim", en: "Multi-user real-time interaction" },
      { tr: "Blender ile özel 3D modeller", en: "Custom 3D models with Blender" },
      { tr: "Sanal derslik ve sosyal alanlar", en: "Virtual classrooms and social spaces" },
      { tr: "Karakter özelleştirme sistemi", en: "Character customization system" },
      { tr: "15 kişilik ekip tarafından geliştirildi", en: "Developed by a 15-person team" },
    ],
    screenshots: [
      { label: { tr: "Kampüs", en: "Campus" }, color: "#2a0f12", icon: "🏛️" },
      { label: { tr: "Derslik", en: "Classroom" }, color: "#280e10", icon: "📚" },
      { label: { tr: "Karakter", en: "Character" }, color: "#2c1014", icon: "🎭" },
    ],
  },
  {
    slug: "savenna-adventure",
    initials: "SA",
    gradient: "from-yellow-600 via-orange-500 to-yellow-800",
    accentColor: "#eab308",
    title: "Savenna's Adventure",
    categoryTr: "Oyun",
    categoryEn: "Game",
    tech: ["Kotlin", "Android", "2D Game", "Canvas API"],
    github: "https://github.com/AhmetEmreAtan",
    featured: false,
    tagline: {
      tr: "Macera başlıyor!",
      en: "The adventure begins!",
    },
    description: {
      tr: "Kullanıcının ana karakter Savenna'yı yönlendirdiği, aksiyon ve macera dolu 2D Android mobil oyunu.",
      en: "2D Android mobile game where players guide the main character Savenna through action-adventure missions.",
    },
    longDescription: {
      tr: "Savenna's Adventure, kullanıcıların ana karakter Savenna'yı yönlendirerek çeşitli görevleri tamamladığı, aksiyon ve macara dolu bir 2D Android mobil oyunudur. Kotlin ve Android Canvas API kullanılarak sıfırdan geliştirilen bu oyun, özel sprite animasyonları, çarpışma sistemi ve çoklu bölüm tasarımıyla zengin bir oyun deneyimi sunar. Oyun mekaniği ve level tasarımı bizzat tarafımdan oluşturulmuştur.",
      en: "Savenna's Adventure is an action-adventure 2D Android mobile game where players control the main character Savenna to complete various missions. Developed from scratch using Kotlin and the Android Canvas API, this game offers a rich gaming experience with custom sprite animations, a collision system, and multi-level design. The game mechanics and level design were created by me personally.",
    },
    features: [
      { tr: "Canvas API ile özel 2D render motoru", en: "Custom 2D render engine with Canvas API" },
      { tr: "Sprite animasyonları ve karakter hareketi", en: "Sprite animations and character movement" },
      { tr: "Çarpışma ve fizik sistemi", en: "Collision and physics system" },
      { tr: "Çoklu bölüm ve düşman tasarımı", en: "Multi-level and enemy design" },
      { tr: "Ses efektleri ve müzik", en: "Sound effects and music" },
      { tr: "Skor ve ilerleme kayıt sistemi", en: "Score and progress save system" },
    ],
    screenshots: [
      { label: { tr: "Ana Ekran", en: "Main Screen" }, color: "#1f1800", icon: "⚔️" },
      { label: { tr: "Oyun İçi", en: "In-Game" }, color: "#201900", icon: "🎮" },
      { label: { tr: "Bölüm Seçimi", en: "Level Select" }, color: "#1e1700", icon: "🗺️" },
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData.find((p) => p.slug === slug);
}
