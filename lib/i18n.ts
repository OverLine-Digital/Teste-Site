export type Lang = 'fr' | 'en' | 'es' | 'pt'

export const langMeta: Record<Lang, { flag: string; label: string }> = {
  fr: { flag: '🇫🇷', label: 'Français' },
  en: { flag: '🇬🇧', label: 'English' },
  es: { flag: '🇪🇸', label: 'Español' },
  pt: { flag: '🇵🇹', label: 'Português' },
}

export const dict: Record<Lang, any> = {
  fr: {
    nav: { about: 'À propos', dashboard: 'Tableau de bord', services: 'Solutions', partnership: 'Partenariat', contact: 'Contact', cta: 'Démarrer un projet' },
    hero: {
      badge: 'Technologie africaine premium',
      title1: 'Connecter les entreprises.',
      title2: 'Construire le futur digital.',
      desc: "OverLine Digital conçoit et développe des sites web, applications mobiles, logiciels et solutions digitales intelligentes qui aident entreprises, entrepreneurs et organisations à grandir avec confiance dans l'économie numérique.",
      cta1: 'Démarrer un projet', cta2: 'Assistant virtuel IA', cta3: 'WhatsApp',
      trust: 'Expertise de confiance. Processus transparent. Conçu en Afrique, pensé pour le monde.',
    },
    services: {
      eyebrow: 'Ce que nous faisons',
      title: 'Des solutions digitales pensées pour la croissance',
      desc: 'Du développement à la cybersécurité, chaque solution est livrée avec une qualité premium, un accompagnement transparent et une équipe dédiée.',
      request: 'Demander cette solution',
    },
    benefits: {
      eyebrow: 'Nos avantages',
      title: "Un accompagnement qui s'adapte à votre calendrier",
      desc: 'Choisissez votre rythme de livraison. Chaque formule inclut design, développement, assurance qualité et support après lancement.',
      recommended: 'Recommandé', delivery: 'Livraison estimée le',
      feat1: 'Chef de projet dédié', feat2: 'Design & développement premium',
      feat3: 'Assurance qualité incluse', feat4: 'Canal de support prioritaire', feat4b: 'Support standard',
      cta: 'Commencer',
    },
    dashboard: {
      eyebrow: 'Plateforme client',
      title: 'Tout votre projet, dans un seul tableau de bord',
      desc: 'Suivez avancement, messages, paiements et livrables en temps réel. La plateforme OverLine vous garde aux commandes à chaque étape.',
    },
    ceo: {
      eyebrow: 'Direction', title: "Portés par une vision, bâtis sur l'excellence",
      quote: "Notre mission est d'aider entreprises, entrepreneurs et organisations à construire leur futur digital grâce à une technologie innovante — avec les standards d'une entreprise mondiale et le cœur de l'Afrique.",
      role: 'Directeur Général, OverLine Digital',
    },
    partnership: {
      eyebrow: 'Partenariat', title: 'Devenez notre partenaire',
      desc: "OverLine Digital accueille développeurs, designers, marketeurs, agences et entreprises technologiques qui veulent construire l'avenir ensemble.",
      cta: 'Devenir partenaire', pickTitle: 'Quelle solution vous intéresse ?', pickDesc: 'Choisissez une solution — on ouvre WhatsApp avec un message déjà prêt.',
    },
    contact: {
      eyebrow: 'Contactez-nous', title: 'Construisons votre futur digital',
      desc: 'Contactez-nous par le canal qui vous convient. Nous répondons sous 24 heures.',
      whatsappCta: 'Ouvrir WhatsApp', call: 'Appeler', emailCta: 'Envoyer un email', mapCta: 'Ouvrir Google Maps',
    },
    footer: {
      tagline: "Connecter les entreprises. Construire le futur digital. Une entreprise technologique africaine premium qui construit l'économie numérique de demain.",
      quickLinks: 'Liens rapides', solutions: 'Solutions', languages: 'Langues', contact: 'Contact',
      rights: 'Tous droits réservés.', builtIn: 'Conçu en Afrique · Pensé pour le monde',
      privacy: 'Politique de confidentialité', terms: "Conditions d'utilisation",
    },
    theme: { light: 'Mode clair', dark: 'Mode sombre' },
    about: {
      eyebrow: 'Nous concernant', title: 'Qui est OverLine Digital',
      p1: "OverLine Digital est une entreprise technologique africaine qui conçoit des solutions numériques pour les entreprises, entrepreneurs et organisations : sites web, applications, logiciels, intelligence artificielle et cybersécurité.",
      p2: "Notre approche : un processus transparent en huit étapes, une équipe dédiée à chaque projet, et des standards de qualité comparables aux meilleures entreprises technologiques internationales — pensés pour les réalités du marché africain.",
      stat1: 'Solutions proposées', stat2: 'Support disponible', stat3: 'Langues supportées', stat4: 'Réponse sous 24h',
    },
    faq: {
      eyebrow: 'Questions fréquentes', title: 'Tout ce que vous devez savoir',
      q1: 'Comment le prix de mon projet est-il déterminé ?',
      a1: "Le prix dépend du type de solution, du délai choisi et de la complexité de votre demande. Après avoir décrit votre projet, notre équipe vous envoie une proposition chiffrée personnalisée sous 24 heures.",
      q2: 'Combien de temps prend un projet ?',
      a2: 'Cela dépend de la solution et du délai que vous choisissez — de 5 jours pour une livraison rapide à plusieurs semaines pour un projet complet. Vous suivez chaque étape en temps réel.',
      q3: 'Puis-je suivre l\'avancement de mon projet ?',
      a3: "Oui — l'espace client OverLine centralise avancement, messages, documents et livrables à chaque étape.",
      q4: 'Le support continue-t-il après la livraison ?',
      a4: 'Oui, le support fait partie intégrante de notre processus, pas une option séparée découverte après coup.',
      q5: 'Travaillez-vous avec des clients hors d\'Afrique ?',
      a5: 'Oui, nous accompagnons des clients à distance partout dans le monde, dans les quatre langues du site.',
    },
  },
  en: {
    nav: { about: 'About', dashboard: 'Dashboard', services: 'Solutions', partnership: 'Partnership', contact: 'Contact', cta: 'Start Your Project' },
    hero: {
      badge: 'Premium African Technology', title1: 'Connecting Businesses.', title2: 'Building Digital Futures.',
      desc: 'OverLine Digital designs and engineers websites, mobile applications, software and intelligent digital solutions that help businesses, entrepreneurs and organizations grow with confidence in the digital economy.',
      cta1: 'Start Your Project', cta2: 'AI Virtual Assistant', cta3: 'WhatsApp',
      trust: 'Trusted expertise. Transparent process. Built in Africa, engineered for the world.',
    },
    services: {
      eyebrow: 'What we do', title: 'Digital solutions engineered for growth',
      desc: 'From development to cybersecurity, every solution is delivered with premium quality, transparent guidance and a dedicated team.',
      request: 'Request This Solution',
    },
    benefits: {
      eyebrow: 'Our Advantages', title: 'Support that adapts to your timeline',
      desc: 'Choose your delivery pace. Every plan includes design, engineering, quality assurance and post-launch support.',
      recommended: 'Recommended', delivery: 'Estimated delivery by',
      feat1: 'Dedicated project manager', feat2: 'Premium design & engineering',
      feat3: 'Quality assurance included', feat4: 'Priority support channel', feat4b: 'Standard support',
      cta: 'Get Started',
    },
    dashboard: {
      eyebrow: 'Client platform', title: 'Your entire project, in one dashboard',
      desc: 'Track progress, messages, payments and deliverables in real time. The OverLine platform keeps you in control at every phase.',
    },
    ceo: {
      eyebrow: 'Leadership', title: 'Driven by vision, built on excellence',
      quote: 'Our mission is to help businesses, entrepreneurs and organizations build their digital future through innovative technology — with the standards of a global company and the heart of Africa.',
      role: 'Chief Executive Officer, OverLine Digital',
    },
    partnership: {
      eyebrow: 'Partnership', title: 'Become Our Partner',
      desc: 'OverLine Digital welcomes developers, designers, marketers, agencies and technology companies interested in building the future together.',
      cta: 'Become a Partner', pickTitle: 'Which solution interests you?', pickDesc: "Pick a solution — we'll open WhatsApp with a message ready to send.",
    },
    contact: {
      eyebrow: 'Get in touch', title: "Let's build your digital future",
      desc: 'Reach out through the channel that works best for you. We respond within 24 hours.',
      whatsappCta: 'Open WhatsApp', call: 'Call', emailCta: 'Send Email', mapCta: 'Open Google Maps',
    },
    footer: {
      tagline: 'Connecting Businesses. Building Digital Futures. A premium African technology company engineering the digital economy of tomorrow.',
      quickLinks: 'Quick Links', solutions: 'Solutions', languages: 'Languages', contact: 'Contact',
      rights: 'All rights reserved.', builtIn: 'Built in Africa · Engineered for the world',
      privacy: 'Privacy Policy', terms: 'Terms of Service',
    },
    theme: { light: 'Light mode', dark: 'Dark mode' },
    about: {
      eyebrow: 'About Us', title: 'Who is OverLine Digital',
      p1: 'OverLine Digital is an African technology company designing digital solutions for businesses, entrepreneurs and organizations: websites, applications, software, artificial intelligence and cybersecurity.',
      p2: 'Our approach: a transparent eight-step process, a dedicated team for every project, and quality standards on par with leading global technology companies — built for the realities of the African market.',
      stat1: 'Solutions offered', stat2: 'Support available', stat3: 'Languages supported', stat4: 'Response within 24h',
    },
    faq: {
      eyebrow: 'FAQ', title: 'Everything you need to know',
      q1: 'How is my project price determined?',
      a1: 'Price depends on the type of solution, the timeline you choose and the complexity of your request. After describing your project, our team sends a tailored quote within 24 hours.',
      q2: 'How long does a project take?',
      a2: 'It depends on the solution and timeline you choose — from 5 days for a rush delivery to several weeks for a full project. You can follow every step in real time.',
      q3: 'Can I track my project progress?',
      a3: 'Yes — the OverLine client space centralizes progress, messages, documents and deliverables at every stage.',
      q4: 'Does support continue after delivery?',
      a4: "Yes, support is part of our process, not a separate option discovered afterwards.",
      q5: 'Do you work with clients outside Africa?',
      a5: "Yes, we support clients remotely worldwide, in the site's four languages.",
    },
  },
  es: {
    nav: { about: 'Nosotros', dashboard: 'Panel', services: 'Soluciones', partnership: 'Alianzas', contact: 'Contacto', cta: 'Iniciar proyecto' },
    hero: {
      badge: 'Tecnología africana premium', title1: 'Conectando empresas.', title2: 'Construyendo futuros digitales.',
      desc: 'OverLine Digital diseña y desarrolla sitios web, aplicaciones móviles, software y soluciones digitales inteligentes que ayudan a empresas, emprendedores y organizaciones a crecer con confianza en la economía digital.',
      cta1: 'Iniciar proyecto', cta2: 'Asistente virtual IA', cta3: 'WhatsApp',
      trust: 'Experiencia confiable. Proceso transparente. Creado en África, diseñado para el mundo.',
    },
    services: {
      eyebrow: 'Lo que hacemos', title: 'Soluciones digitales diseñadas para crecer',
      desc: 'Desde desarrollo hasta ciberseguridad, cada solución se entrega con calidad premium, acompañamiento transparente y un equipo dedicado.',
      request: 'Solicitar esta solución',
    },
    benefits: {
      eyebrow: 'Nuestras ventajas', title: 'Un acompañamiento que se adapta a tu calendario',
      desc: 'Elige tu ritmo de entrega. Cada plan incluye diseño, desarrollo, control de calidad y soporte tras el lanzamiento.',
      recommended: 'Recomendado', delivery: 'Entrega estimada el',
      feat1: 'Gerente de proyecto dedicado', feat2: 'Diseño y desarrollo premium',
      feat3: 'Control de calidad incluido', feat4: 'Canal de soporte prioritario', feat4b: 'Soporte estándar',
      cta: 'Comenzar',
    },
    dashboard: {
      eyebrow: 'Plataforma de clientes', title: 'Todo tu proyecto, en un solo panel',
      desc: 'Sigue el avance, mensajes, pagos y entregables en tiempo real. La plataforma OverLine te mantiene al control en cada etapa.',
    },
    ceo: {
      eyebrow: 'Dirección', title: 'Impulsados por una visión, construidos con excelencia',
      quote: 'Nuestra misión es ayudar a empresas, emprendedores y organizaciones a construir su futuro digital mediante tecnología innovadora — con los estándares de una empresa global y el corazón de África.',
      role: 'Director Ejecutivo, OverLine Digital',
    },
    partnership: {
      eyebrow: 'Alianzas', title: 'Sé nuestro socio',
      desc: 'OverLine Digital da la bienvenida a desarrolladores, diseñadores, marketeros, agencias y empresas tecnológicas que quieren construir el futuro juntos.',
      cta: 'Ser socio', pickTitle: '¿Qué solución te interesa?', pickDesc: 'Elige una solución — abriremos WhatsApp con un mensaje ya listo.',
    },
    contact: {
      eyebrow: 'Contáctanos', title: 'Construyamos tu futuro digital',
      desc: 'Contáctanos por el canal que prefieras. Respondemos en 24 horas.',
      whatsappCta: 'Abrir WhatsApp', call: 'Llamar', emailCta: 'Enviar correo', mapCta: 'Abrir Google Maps',
    },
    footer: {
      tagline: 'Conectando empresas. Construyendo futuros digitales. Una empresa tecnológica africana premium que construye la economía digital del mañana.',
      quickLinks: 'Enlaces rápidos', solutions: 'Soluciones', languages: 'Idiomas', contact: 'Contacto',
      rights: 'Todos los derechos reservados.', builtIn: 'Creado en África · Diseñado para el mundo',
      privacy: 'Política de privacidad', terms: 'Términos de servicio',
    },
    theme: { light: 'Modo claro', dark: 'Modo oscuro' },
    about: {
      eyebrow: 'Sobre nosotros', title: 'Quién es OverLine Digital',
      p1: 'OverLine Digital es una empresa tecnológica africana que diseña soluciones digitales para empresas, emprendedores y organizaciones: sitios web, aplicaciones, software, inteligencia artificial y ciberseguridad.',
      p2: 'Nuestro enfoque: un proceso transparente de ocho pasos, un equipo dedicado a cada proyecto y estándares de calidad a la altura de las mejores empresas tecnológicas globales — pensados para el mercado africano.',
      stat1: 'Soluciones ofrecidas', stat2: 'Soporte disponible', stat3: 'Idiomas soportados', stat4: 'Respuesta en 24h',
    },
    faq: {
      eyebrow: 'Preguntas frecuentes', title: 'Todo lo que necesitas saber',
      q1: '¿Cómo se determina el precio de mi proyecto?',
      a1: 'El precio depende del tipo de solución, el plazo elegido y la complejidad de tu solicitud. Tras describir tu proyecto, nuestro equipo te envía una propuesta personalizada en 24 horas.',
      q2: '¿Cuánto tiempo toma un proyecto?',
      a2: 'Depende de la solución y el plazo elegido — desde 5 días para una entrega rápida hasta varias semanas para un proyecto completo. Puedes seguir cada etapa en tiempo real.',
      q3: '¿Puedo seguir el avance de mi proyecto?',
      a3: 'Sí — el espacio de cliente de OverLine centraliza avance, mensajes, documentos y entregables en cada etapa.',
      q4: '¿El soporte continúa después de la entrega?',
      a4: 'Sí, el soporte es parte de nuestro proceso, no una opción separada descubierta después.',
      q5: '¿Trabajan con clientes fuera de África?',
      a5: 'Sí, apoyamos a clientes de forma remota en todo el mundo, en los cuatro idiomas del sitio.',
    },
  },
  pt: {
    nav: { about: 'Sobre', dashboard: 'Painel', services: 'Soluções', partnership: 'Parcerias', contact: 'Contato', cta: 'Iniciar projeto' },
    hero: {
      badge: 'Tecnologia africana premium', title1: 'Conectando empresas.', title2: 'Construindo futuros digitais.',
      desc: 'A OverLine Digital cria e desenvolve sites, aplicativos móveis, software e soluções digitais inteligentes que ajudam empresas, empreendedores e organizações a crescer com confiança na economia digital.',
      cta1: 'Iniciar projeto', cta2: 'Assistente virtual IA', cta3: 'WhatsApp',
      trust: 'Experiência confiável. Processo transparente. Criado na África, pensado para o mundo.',
    },
    services: {
      eyebrow: 'O que fazemos', title: 'Soluções digitais projetadas para crescer',
      desc: 'Do desenvolvimento à cibersegurança, cada solução é entregue com qualidade premium, acompanhamento transparente e uma equipe dedicada.',
      request: 'Solicitar esta solução',
    },
    benefits: {
      eyebrow: 'Nossas vantagens', title: 'Um acompanhamento que se adapta ao seu calendário',
      desc: 'Escolha seu ritmo de entrega. Cada plano inclui design, desenvolvimento, controle de qualidade e suporte pós-lançamento.',
      recommended: 'Recomendado', delivery: 'Entrega estimada em',
      feat1: 'Gerente de projeto dedicado', feat2: 'Design e desenvolvimento premium',
      feat3: 'Controle de qualidade incluído', feat4: 'Canal de suporte prioritário', feat4b: 'Suporte padrão',
      cta: 'Começar',
    },
    dashboard: {
      eyebrow: 'Plataforma do cliente', title: 'Todo o seu projeto, em um só painel',
      desc: 'Acompanhe progresso, mensagens, pagamentos e entregas em tempo real. A plataforma OverLine mantém você no controle em cada etapa.',
    },
    ceo: {
      eyebrow: 'Liderança', title: 'Movidos por uma visão, construídos com excelência',
      quote: 'Nossa missão é ajudar empresas, empreendedores e organizações a construir seu futuro digital através de tecnologia inovadora — com os padrões de uma empresa global e o coração da África.',
      role: 'Diretor Executivo, OverLine Digital',
    },
    partnership: {
      eyebrow: 'Parcerias', title: 'Seja nosso parceiro',
      desc: 'A OverLine Digital recebe desenvolvedores, designers, profissionais de marketing, agências e empresas de tecnologia que querem construir o futuro juntos.',
      cta: 'Ser parceiro', pickTitle: 'Qual solução te interessa?', pickDesc: 'Escolha uma solução — abriremos o WhatsApp com uma mensagem pronta.',
    },
    contact: {
      eyebrow: 'Fale conosco', title: 'Vamos construir seu futuro digital',
      desc: 'Entre em contato pelo canal que preferir. Respondemos em até 24 horas.',
      whatsappCta: 'Abrir WhatsApp', call: 'Ligar', emailCta: 'Enviar email', mapCta: 'Abrir Google Maps',
    },
    footer: {
      tagline: 'Conectando empresas. Construindo futuros digitais. Uma empresa de tecnologia africana premium que constrói a economia digital de amanhã.',
      quickLinks: 'Links rápidos', solutions: 'Soluções', languages: 'Idiomas', contact: 'Contato',
      rights: 'Todos os direitos reservados.', builtIn: 'Criado na África · Pensado para o mundo',
      privacy: 'Política de privacidade', terms: 'Termos de serviço',
    },
    theme: { light: 'Modo claro', dark: 'Modo escuro' },
    about: {
      eyebrow: 'Sobre nós', title: 'Quem é a OverLine Digital',
      p1: 'A OverLine Digital é uma empresa de tecnologia africana que cria soluções digitais para empresas, empreendedores e organizações: sites, aplicativos, software, inteligência artificial e cibersegurança.',
      p2: 'Nossa abordagem: um processo transparente de oito etapas, uma equipe dedicada a cada projeto e padrões de qualidade à altura das melhores empresas de tecnologia globais — pensados para o mercado africano.',
      stat1: 'Soluções oferecidas', stat2: 'Suporte disponível', stat3: 'Idiomas suportados', stat4: 'Resposta em 24h',
    },
    faq: {
      eyebrow: 'Perguntas frequentes', title: 'Tudo o que você precisa saber',
      q1: 'Como é determinado o preço do meu projeto?',
      a1: 'O preço depende do tipo de solução, do prazo escolhido e da complexidade do seu pedido. Após descrever seu projeto, nossa equipe envia uma proposta personalizada em 24 horas.',
      q2: 'Quanto tempo leva um projeto?',
      a2: 'Depende da solução e do prazo escolhido — de 5 dias para uma entrega rápida a várias semanas para um projeto completo. Você acompanha cada etapa em tempo real.',
      q3: 'Posso acompanhar o andamento do meu projeto?',
      a3: 'Sim — o espaço do cliente OverLine centraliza andamento, mensagens, documentos e entregas em cada etapa.',
      q4: 'O suporte continua após a entrega?',
      a4: 'Sim, o suporte faz parte do nosso processo, não é uma opção separada descoberta depois.',
      q5: 'Vocês trabalham com clientes fora da África?',
      a5: 'Sim, apoiamos clientes remotamente em todo o mundo, nos quatro idiomas do site.',
    },
  },
}

export const serviceI18n: Record<string, Record<Lang, { name: string; description: string }>> = {
  'website-development': {
    fr: { name: 'Développement de sites web', description: 'Des sites performants et optimisés SEO, conçus pour convertir vos visiteurs en clients.' },
    en: { name: 'Website Development', description: 'High-performance, SEO-optimized websites engineered to convert visitors into customers.' },
    es: { name: 'Desarrollo de sitios web', description: 'Sitios de alto rendimiento y optimizados para SEO, diseñados para convertir visitantes en clientes.' },
    pt: { name: 'Desenvolvimento de sites', description: 'Sites de alta performance e otimizados para SEO, projetados para converter visitantes em clientes.' },
  },
  'mobile-applications': {
    fr: { name: 'Applications mobiles', description: 'Des applications iOS et Android de qualité native, pensées pour la performance et une belle expérience.' },
    en: { name: 'Mobile Applications', description: 'Native-quality iOS and Android applications built for scale, speed and beautiful UX.' },
    es: { name: 'Aplicaciones móviles', description: 'Aplicaciones iOS y Android de calidad nativa, creadas para escalar con velocidad y buen diseño.' },
    pt: { name: 'Aplicativos móveis', description: 'Aplicativos iOS e Android de qualidade nativa, criados para escala, velocidade e ótima experiência.' },
  },
  'desktop-software': {
    fr: { name: 'Logiciels de bureau', description: 'Des logiciels multiplateformes robustes, adaptés à vos opérations métier.' },
    en: { name: 'Desktop Software', description: 'Robust cross-platform desktop software tailored to your business operations.' },
    es: { name: 'Software de escritorio', description: 'Software multiplataforma robusto, adaptado a las operaciones de tu negocio.' },
    pt: { name: 'Software desktop', description: 'Software multiplataforma robusto, adaptado às operações do seu negócio.' },
  },
  'source-code-marketplace': {
    fr: { name: "Codes sources prêts à l'emploi", description: 'Codes sources, templates et kits de démarrage prêts pour la production.' },
    en: { name: 'Source Code Marketplace', description: 'Production-ready source code, templates and starter kits to launch faster.' },
    es: { name: 'Códigos fuente listos', description: 'Código fuente, plantillas y kits de inicio listos para producción.' },
    pt: { name: 'Códigos-fonte prontos', description: 'Código-fonte, templates e kits iniciais prontos para produção.' },
  },
  'domain-registration': {
    fr: { name: 'Enregistrement de domaine', description: 'Réservez le nom de domaine idéal pour votre marque, gestion DNS incluse.' },
    en: { name: 'Domain Registration', description: 'Secure the perfect domain for your brand with full DNS management included.' },
    es: { name: 'Registro de dominio', description: 'Asegura el dominio perfecto para tu marca, con gestión DNS incluida.' },
    pt: { name: 'Registro de domínio', description: 'Garanta o domínio perfeito para sua marca, com gestão de DNS incluída.' },
  },
  subdomains: {
    fr: { name: 'Sous-domaines', description: 'Une architecture de sous-domaines structurée pour vos produits et outils internes.' },
    en: { name: 'Subdomains', description: 'Structured subdomain architecture for products, regions and internal tools.' },
    es: { name: 'Subdominios', description: 'Arquitectura de subdominios estructurada para productos y herramientas internas.' },
    pt: { name: 'Subdomínios', description: 'Arquitetura de subdomínios estruturada para produtos e ferramentas internas.' },
  },
  'professional-email': {
    fr: { name: 'E-mail professionnel', description: 'Des adresses e-mail à votre image, avec sécurité et fiabilité de niveau entreprise.' },
    en: { name: 'Professional Email', description: 'Branded email addresses with enterprise-grade deliverability and security.' },
    es: { name: 'Correo profesional', description: 'Correos con tu marca, con seguridad y fiabilidad de nivel empresarial.' },
    pt: { name: 'E-mail profissional', description: 'E-mails com a sua marca, com segurança e confiabilidade de nível empresarial.' },
  },
  'graphic-design': {
    fr: { name: 'Design graphique', description: 'Logos, identités de marque et visuels marketing conçus avec précision.' },
    en: { name: 'Graphic Design', description: 'Logos, brand identities and marketing visuals crafted with precision and taste.' },
    es: { name: 'Diseño gráfico', description: 'Logotipos, identidades de marca y visuales de marketing creados con precisión.' },
    pt: { name: 'Design gráfico', description: 'Logotipos, identidades de marca e visuais de marketing criados com precisão.' },
  },
  'social-media-management': {
    fr: { name: 'Gestion des réseaux sociaux', description: 'Stratégie, contenu et gestion de communauté qui font grandir votre audience.' },
    en: { name: 'Social Media Management', description: 'Strategy, content and community management that grows your audience every month.' },
    es: { name: 'Gestión de redes sociales', description: 'Estrategia, contenido y gestión de comunidad que hace crecer tu audiencia.' },
    pt: { name: 'Gestão de redes sociais', description: 'Estratégia, conteúdo e gestão de comunidade que fazem sua audiência crescer.' },
  },
  'virtual-ai-assistant': {
    fr: { name: 'Assistant virtuel IA', description: 'Des assistants IA sur mesure qui répondent à vos clients et qualifient vos prospects 24/7.' },
    en: { name: 'Virtual AI Assistant', description: 'Custom AI assistants that answer customers, qualify leads and work 24/7 for you.' },
    es: { name: 'Asistente virtual IA', description: 'Asistentes de IA a medida que atienden clientes y califican leads 24/7.' },
    pt: { name: 'Assistente virtual IA', description: 'Assistentes de IA sob medida que atendem clientes e qualificam leads 24/7.' },
  },
  'digital-marketing-service': {
    fr: { name: 'Marketing digital', description: 'Des campagnes data-driven sur les moteurs de recherche et réseaux sociaux, avec des résultats mesurables.' },
    en: { name: 'Digital Marketing', description: 'Data-driven campaigns across search and social that deliver measurable growth.' },
    es: { name: 'Marketing digital', description: 'Campañas basadas en datos en buscadores y redes sociales, con resultados medibles.' },
    pt: { name: 'Marketing digital', description: 'Campanhas orientadas por dados em busca e redes sociais, com crescimento mensurável.' },
  },
  'cybersecurity-agent': {
    fr: { name: 'Agent de cybersécurité', description: 'Surveillance continue et détection de menaces pour protéger votre infrastructure numérique.' },
    en: { name: 'Cybersecurity Agent', description: 'Continuous monitoring and threat detection protecting your digital infrastructure.' },
    es: { name: 'Agente de ciberseguridad', description: 'Monitoreo continuo y detección de amenazas que protege tu infraestructura digital.' },
    pt: { name: 'Agente de cibersegurança', description: 'Monitoramento contínuo e detecção de ameaças que protegem sua infraestrutura digital.' },
  },
  'cybersecurity-consulting': {
    fr: { name: 'Conseil en cybersécurité', description: 'Audits experts, plans de renforcement et accompagnement de conformité par des spécialistes.' },
    en: { name: 'Cybersecurity Consulting', description: 'Expert audits, hardening plans and compliance guidance from senior specialists.' },
    es: { name: 'Consultoría de ciberseguridad', description: 'Auditorías expertas, planes de refuerzo y guía de cumplimiento de especialistas senior.' },
    pt: { name: 'Consultoria em cibersegurança', description: 'Auditorias especializadas, planos de reforço e orientação de conformidade por especialistas sênior.' },
  },
}

export const categoryI18n: Record<string, Record<Lang, string>> = {
  development: { fr: 'Développement', en: 'Development', es: 'Desarrollo', pt: 'Desenvolvimento' },
  'digital-identity': { fr: 'Identité numérique', en: 'Digital Identity', es: 'Identidad digital', pt: 'Identidade digital' },
  'creative-studio': { fr: 'Studio créatif', en: 'Creative Studio', es: 'Estudio creativo', pt: 'Estúdio criativo' },
  'social-media': { fr: 'Réseaux sociaux', en: 'Social Media', es: 'Redes sociales', pt: 'Redes sociais' },
  'artificial-intelligence': { fr: 'Intelligence artificielle', en: 'Artificial Intelligence', es: 'Inteligencia artificial', pt: 'Inteligência artificial' },
  'digital-marketing': { fr: 'Marketing digital', en: 'Digital Marketing', es: 'Marketing digital', pt: 'Marketing digital' },
  cybersecurity: { fr: 'Cybersécurité', en: 'Cybersecurity', es: 'Ciberseguridad', pt: 'Cibersegurança' },
}

export function t(lang: Lang, path: string): string {
  const parts = path.split('.')
  let node: any = dict[lang]
  for (const p of parts) node = node?.[p]
  return typeof node === 'string' ? node : path
}
