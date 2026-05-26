export type Locale = 'en' | 'es'

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    // TopAppBar
    'nav.home': 'Home',
    'nav.team': 'Team',
    'nav.about': 'Competition',
    'nav.shop': 'Merch',
    'nav.sponsors': 'Sponsors',
    'nav.join': 'JOIN TEAM',
    'nav.tickets': 'TICKETS',
    'nav.tickets-aria': 'Buy event tickets on TIX',
    'nav.instagram': 'Follow @sablee.st on Instagram',
    'nav.menu-open': 'Open menu',
    'nav.menu-close': 'Close menu',

    // HeroSection
    'hero.badge': '00 // COMMAND',
    'hero.pilots': '06 PILOTS',
    'hero.headline-1': 'ENGINEERED',
    'hero.headline-2': 'FOR VELOCITY',
    'hero.tagline': 'Six drivers. One unit. Built for the limit where simulation meets the track.',
    'hero.system': 'SYSTEM ONLINE',
    'hero.system-value': '100%',
    'hero.aero': 'AERO ENGAGED',
    'hero.aero-value': 'MAX',
    'hero.event-badge': 'NATIONAL EVENT',
    'hero.cta-tickets': 'GET TICKETS',
    'hero.cta-tickets-date': 'Jun 13, 2026 · 8:00 AM',
    'hero.cta-tickets-aria': 'Buy tickets for the National STEM Racing event on TIX — June 13, 2026 at 8:00 AM',
    'hero.cta': 'MEET THE CREW',
    'hero.cta-instagram': 'FOLLOW ON IG',
    'hero.cta-secondary': 'VIEW MERCH',
    'hero.image-alt': 'Six members of Team SABLE in maroon and black racing suits standing in formation.',

    // TeamSection
    'team.subtitle': '01 // PERSONNEL',
    'team.heading': 'CREW DOSSIER',
    'team.intro':
      'Each card is a throwback portrait and role on the team — design, manufacturing, marketing, and finance. Tap a card to read the full profile.',
    'team.roster-label': 'Active roster',
    'team.roster-unit': 'crew members',
    'team.scroll-hint': 'Swipe the dossier wall →',
    'team.tap-hint': 'Tap a card to open the full dossier',
    'team.expand': 'Open',
    'team.view-member': 'View crew member',
    'team.view-close': 'Close dossier',
    'team.members.camila.name': 'CAMILA',
    'team.members.camila.role': 'DESIGN & SIMULATION',
    'team.members.camila.desc':
      'She leads car design and simulation — shaping every concept before it hits the rig or the track.',
    'team.members.camila.image-alt':
      'Camila crew card: childhood portrait with design and simulation role.',
    'team.members.adelin.name': 'ADELIN',
    'team.members.adelin.role': 'DESIGN & MANUFACTURING',
    'team.members.adelin.desc':
      'Part of the design and manufacturing crew — from sketches to parts that actually get built.',
    'team.members.adelin.image-alt':
      'Adelin crew card: childhood portrait with design and manufacturing role.',
    'team.members.eidan.name': 'EIDAN',
    'team.members.eidan.role': 'DESIGN & MARKETING',
    'team.members.eidan.desc':
      'On the car design team and marketing — connecting engineering choices with how the crew shows up publicly.',
    'team.members.eidan.image-alt':
      'Eidan crew card: childhood portrait with design and marketing role.',
    'team.members.gabriel.name': 'GABRIEL',
    'team.members.gabriel.role': 'DESIGN & FINANCE',
    'team.members.gabriel.desc':
      'Handles car design and team finances — keeping the project feasible while pushing performance.',
    'team.members.gabriel.image-alt':
      'Gabriel crew card: childhood portrait with design and finance role.',
    'team.members.jared.name': 'JARED',
    'team.members.jared.role': 'MARKETING & CONTENT',
    'team.members.jared.desc':
      'Designs our posts and runs marketing — the voice and visuals the public sees from pit lane to feed.',
    'team.members.jared.image-alt':
      'Jared crew card: childhood portrait with marketing and content role.',
    'team.members.yule.name': 'YULE',
    'team.members.yule.role': 'DESIGN & MANUFACTURING',
    'team.members.yule.desc':
      'Part of the design and manufacturing team — turning concepts into parts the car can run with.',
    'team.members.yule.image-alt':
      'Yule crew card: childhood portrait with design and manufacturing role.',

    // AboutSection
    'about.subtitle': '01.5 // COMPETITION',
    'about.heading': 'THE COMPETITION',
    'about.title': 'STEM RACING',
    'about.title-accent': 'DOMINICAN REPUBLIC',
    'about.desc1': 'In STEM Racing Dominican Republic, students design, build, and race scale cars inspired by Formula 1 while learning real-world engineering. A national competition with international standards, open to young people ages 11–19.',
    'about.desc2': 'The winning teams go on to represent the country internationally, competing against schools from 60+ nations in the STEM Racing world finals.',
    'about.feat1-title': 'Applied Engineering',
    'about.feat1-desc': 'Students design, analyze, and manufacture a race car using real engineering principles in a competitive, collaborative environment.',
    'about.feat2-title': 'Aerodynamics',
    'about.feat2-desc': 'Less drag means more speed. Simulate with precision before you build — every shape and every millimeter counts on track.',
    'about.watermark': 'STEM RACING RD',
    'about.image-badge': 'STEM / RD',
    'about.image-tag': 'AGES 11–19',
    'about.footer-status': 'STEM RACING / 2026',
    'about.video-cta': 'STEM RACING CURIOSITIES',
    'about.video-cta-hint': 'Short video · facts & how the competition works',
    'about.video-modal-badge': 'VIDEO BRIEFING',
    'about.video-modal-title': 'STEM Racing curiosities',
    'about.video-modal-desc':
      'Discover how the competition works, what teams face on track, and why STEM Racing matters in the Dominican Republic.',
    'about.video-close': 'Close video',
    'about.video-play': 'Play video',
    'about.tickets-cta': 'GET EVENT TICKETS',
    'about.tickets-cta-hint': 'National STEM Racing · Jun 13, 2026 · 8:00 AM',
    'about.tickets-aria': 'Buy tickets on TIX for the National STEM Racing event',

    // ShopSection (team merchandising — not a store)
    'shop.subtitle': '02 // MERCHANDISING',
    'shop.heading': 'TEAM MERCH',
    'shop.intro': 'Physical pieces we share with the public at events and competitions. Identity for the SABLE crew — not a store, not for sale.',
    'shop.status-badge': 'FOR THE PUBLIC',
    'shop.item-note': 'Shared at national events · while supplies last',
    'shop.pins.badge': 'TEAM PIN',
    'shop.pins.title': 'SABLE PIN',
    'shop.pins.desc': 'Metal pin with the SABLE emblem. A compact piece of team identity to wear at school, events, and race weekends.',
    'shop.keychain.badge': 'TEAM KEYCHAIN',
    'shop.keychain.title': 'SABLE KEYCHAIN',
    'shop.keychain.desc': 'Precision keychain with the saber-toothed cat and SABLE shield. Built to represent the team wherever you go.',
    'shop.footer-left': 'SABLE CREW MERCHANDISING',
    'shop.footer-right': 'NOT FOR SALE',

    // PartnersSection
    'partners.subtitle': '03 // ALLIES',
    'partners.heading': 'In alliance with',
    'partners.intro':
      'Brands and institutions that fuel SABLE on and off the track — from software and mobility to engineering and community.',
    'partners.slot-code': 'ALLY',
    'partners.tap-hint': 'Tap a card for the full ally profile',
    'partners.read-more': 'View profile',
    'partners.view-partner': 'View ally',
    'partners.view-close': 'Close profile',
    'partners.thanks-heading': 'Message to the crew',
    'partners.category.technical': 'Technical partner',
    'partners.category.automotive': 'Automotive ally',
    'partners.category.institutional': 'Institutional ally',
    'partners.category.engineering': 'Engineering ally',
    'partners.solvex.name': 'SOLVEX DOMINICANA',
    'partners.solvex.role': 'Digital solutions & cloud services',
    'partners.solvex.desc':
      'Solvex Dominicana is a technology and innovation company focused on digital solutions, software development, and cloud services — driving technological transformation across multiple sectors.',
    'partners.solvex.thanks':
      'As SABLE’s official technical partner, Solvex backs the tools, systems, and digital backbone that keep the crew competitive.',
    'partners.motoruedas.name': 'MOTORUEDAS',
    'partners.motoruedas.role': 'Motorcycle & mobility sponsor',
    'partners.motoruedas.desc':
      'Motoruedas joined as a SABLE sponsor, backing a movement built when different visions come together to create something bigger.',
    'partners.motoruedas.thanks':
      'Thank you for betting on us and being part of a story that still has a lot to show on track.',
    'partners.rbw.name': 'RBW AUTO IMPORT',
    'partners.rbw.role': 'Vehicle import & sales',
    'partners.rbw.desc':
      'RBW Auto Import imports and sells vehicles with quality, trust, and an experience designed for people who love the automotive world.',
    'partners.rbw.thanks':
      'At SABLE we are proud of their support and that they are part of this creative movement underway.',
    'partners.apolo27.name': 'APOLO 27 GT',
    'partners.apolo27.role': 'INTEC · Formula Student Spain 2026',
    'partners.apolo27.desc':
      'University engineering project from INTEC building a formula-style single-seater to represent the Dominican Republic at Formula Student Spain 2026 (Barcelona, Aug 1–7) — the same spirit of applied engineering as STEM Racing.',
    'partners.apolo27.thanks':
      'A fellow crew pushing Dominican talent onto the global motorsport and engineering stage.',
    'partners.junta-sanluis.name': 'JUNTA MUNICIPAL SAN LUIS',
    'partners.junta-sanluis.role': 'Distrito Municipal · Santo Domingo Este',
    'partners.junta-sanluis.desc':
      'Local government of the San Luis district in Santo Domingo Este, supporting community development, youth initiatives, and public works for its residents.',
    'partners.junta-sanluis.thanks':
      'Institutional ally backing SABLE as a project that inspires young people in the district and beyond.',

    // CtaModal
    'cta-modal.badge': 'GET INVOLVED',
    'cta-modal.title': 'HOW DO YOU WANT TO SUPPORT SABLE?',
    'cta-modal.desc':
      'Get tickets for the national event, partner as a sponsor, or follow us on Instagram from the pit lane.',
    'cta-modal.tickets': 'GET TICKETS',
    'cta-modal.tickets-desc': 'National STEM Racing event — Jun 13, 2026 at 8:00 AM on TIX.',
    'cta-modal.tickets-aria': 'Buy tickets on TIX — National STEM Racing event June 13, 2026',
    'cta-modal.sponsor': 'BECOME A SPONSOR',
    'cta-modal.sponsor-desc': 'Alliance, branding, and track presence.',
    'cta-modal.support': 'SUPPORT ON INSTAGRAM',
    'cta-modal.support-desc': 'Follow @sablee.st for race updates.',
    'cta-modal.dismiss': 'Maybe later',
    'cta-modal.close': 'Close popup',
    'cta-modal.image-alt': 'Team SABLE in full racing gear.',

    // Footer
    'footer.badge': '04 // PIT LANE',
    'footer.tagline': 'SteelRacingRD apex division. Engineered for velocity.',
    'footer.status': 'SYSTEM STANDBY',
    'footer.status-value': 'READY',
    'footer.tickets': 'EVENT TICKETS',
    'footer.tickets-aria': 'Buy tickets for the National STEM Racing event on TIX',
    'footer.back-to-top': 'RETURN TO GRID',
    'footer.copyright': '© 2026 SABLE STEAMRACING. ENGINEERED FOR VELOCITY.',
  },
  es: {
    // TopAppBar
    'nav.home': 'Inicio',
    'nav.team': 'Equipo',
    'nav.about': 'Competencia',
    'nav.shop': 'Merchandising',
    'nav.sponsors': 'Sponsors',
    'nav.join': 'UNIRSE',
    'nav.tickets': 'BOLETAS',
    'nav.tickets-aria': 'Comprar boletas del evento en TIX',
    'nav.instagram': 'Seguir a @sablee.st en Instagram',
    'nav.menu-open': 'Abrir menú',
    'nav.menu-close': 'Cerrar menú',

    // HeroSection
    'hero.badge': '00 // COMANDO',
    'hero.pilots': '06 PILOTOS',
    'hero.headline-1': 'INGENIERÍA',
    'hero.headline-2': 'PARA LA VELOCIDAD',
    'hero.tagline': 'Seis pilotos. Una unidad. Diseñados para el límite donde la simulación encuentra la pista.',
    'hero.system': 'SISTEMA ACTIVO',
    'hero.system-value': '100%',
    'hero.aero': 'AERO ACTIVO',
    'hero.aero-value': 'MÁX',
    'hero.event-badge': 'EVENTO NACIONAL',
    'hero.cta-tickets': 'COMPRAR BOLETAS',
    'hero.cta-tickets-date': '13 jun 2026 · 8:00 a. m.',
    'hero.cta-tickets-aria': 'Comprar boletas del Evento Nacional STEM Racing en TIX — 13 de junio de 2026 a las 8:00 a. m.',
    'hero.cta': 'CONOCER AL EQUIPO',
    'hero.cta-instagram': 'SEGUIR EN IG',
    'hero.cta-secondary': 'VER MERCHANDISING',
    'hero.image-alt': 'Seis miembros del equipo SABLE con trajes de carreras granate y negro en formación.',

    // TeamSection
    'team.subtitle': '01 // INTEGRANTES',
    'team.heading': 'FICHAS DEL EQUIPO',
    'team.intro':
      'Cada ficha es un retrato throwback y el rol en el crew — diseño, manufactura, marketing y finanzas. Toca una tarjeta para ver el perfil completo.',
    'team.roster-label': 'Plantilla activa',
    'team.roster-unit': 'integrantes',
    'team.scroll-hint': 'Desliza el muro de fichas →',
    'team.tap-hint': 'Toca una ficha para abrir el dossier completo',
    'team.expand': 'Abrir',
    'team.view-member': 'Ver integrante',
    'team.view-close': 'Cerrar ficha',
    'team.members.camila.name': 'CAMILA',
    'team.members.camila.role': 'DISEÑO Y SIMULACIÓN',
    'team.members.camila.desc':
      'Se encarga del diseño y la simulación de los autos — define cada concepto antes del rig o la pista.',
    'team.members.camila.image-alt':
      'Ficha de Camila: retrato throwback con rol de diseño y simulación.',
    'team.members.adelin.name': 'ADELIN',
    'team.members.adelin.role': 'DISEÑO Y MANUFACTURA',
    'team.members.adelin.desc':
      'Forma parte del equipo de diseño y manufactura — del boceto a las piezas que se fabrican.',
    'team.members.adelin.image-alt':
      'Ficha de Adelin: retrato throwback con rol de diseño y manufactura.',
    'team.members.eidan.name': 'EIDAN',
    'team.members.eidan.role': 'DISEÑO Y MARKETING',
    'team.members.eidan.desc':
      'Integra el diseño de autos y el marketing — une la ingeniería con cómo el equipo se muestra al público.',
    'team.members.eidan.image-alt':
      'Ficha de Eidan: retrato throwback con rol de diseño y marketing.',
    'team.members.gabriel.name': 'GABRIEL',
    'team.members.gabriel.role': 'DISEÑO Y FINANZAS',
    'team.members.gabriel.desc':
      'Se encarga del diseño de autos y las finanzas — sostiene el proyecto sin frenar el rendimiento.',
    'team.members.gabriel.image-alt':
      'Ficha de Gabriel: retrato throwback con rol de diseño y finanzas.',
    'team.members.jared.name': 'JARED',
    'team.members.jared.role': 'MARKETING Y CONTENIDO',
    'team.members.jared.desc':
      'Diseña nuestros posts y lidera el marketing — la voz y la imagen que el público ve del crew.',
    'team.members.jared.image-alt':
      'Ficha de Jared: retrato throwback con rol de marketing y contenido.',
    'team.members.yule.name': 'YULE',
    'team.members.yule.role': 'DISEÑO Y MANUFACTURA',
    'team.members.yule.desc':
      'Forma parte del equipo de diseño y manufactura — convierte ideas en piezas listas para correr.',
    'team.members.yule.image-alt':
      'Ficha de Yule: retrato throwback con rol de diseño y manufactura.',

    // AboutSection
    'about.subtitle': '01.5 // COMPETENCIA',
    'about.heading': 'LA COMPETENCIA',
    'about.title': 'STEM RACING',
    'about.title-accent': 'REPÚBLICA DOMINICANA',
    'about.desc1': 'En STEM Racing República Dominicana, los estudiantes diseñan, fabrican y compiten con autos a escala inspirados en la Fórmula 1 mientras aprenden ingeniería real. Una competencia nacional con estándares de excelencia, abierta a jóvenes de 11 a 19 años.',
    'about.desc2': 'Los equipos ganadores representan al país en la competencia internacional, donde compiten contra escuelas de más de 60 naciones en las finales mundiales de STEM Racing.',
    'about.feat1-title': 'Ingeniería aplicada',
    'about.feat1-desc': 'Diseñan, analizan y fabrican un auto de carreras aplicando principios reales de ingeniería en un entorno competitivo y colaborativo.',
    'about.feat2-title': 'Aerodinámica',
    'about.feat2-desc': 'Menos resistencia equivale a más velocidad. Simula con precisión antes de fabricar; cada forma y cada milímetro cuentan en pista.',
    'about.watermark': 'STEM RACING RD',
    'about.image-badge': 'STEM / RD',
    'about.image-tag': '11–19 AÑOS',
    'about.footer-status': 'STEM RACING / 2026',
    'about.video-cta': 'CURIOSIDADES DE STEM RACING',
    'about.video-cta-hint': 'Video corto · datos y cómo funciona la competencia',
    'about.video-modal-badge': 'VIDEO INFORMATIVO',
    'about.video-modal-title': 'Curiosidades de STEM Racing',
    'about.video-modal-desc':
      'Conoce cómo funciona la competencia, qué enfrentan los equipos en pista y por qué STEM Racing importa en República Dominicana.',
    'about.video-close': 'Cerrar video',
    'about.video-play': 'Reproducir video',
    'about.tickets-cta': 'COMPRAR BOLETAS DEL EVENTO',
    'about.tickets-cta-hint': 'STEM Racing nacional · 13 jun 2026 · 8:00 a. m.',
    'about.tickets-aria': 'Comprar boletas en TIX para el Evento Nacional STEM Racing',

    // ShopSection (merchandising del equipo — no es tienda)
    'shop.subtitle': '02 // MERCHANDISING',
    'shop.heading': 'MERCHANDISING DEL EQUIPO',
    'shop.intro': 'Piezas físicas que compartimos con el público en eventos y competencias. Identidad del equipo SABLE — no es una tienda ni está a la venta.',
    'shop.status-badge': 'PARA EL PÚBLICO',
    'shop.item-note': 'Se entrega en eventos nacionales · según disponibilidad',
    'shop.pins.badge': 'PIN DEL EQUIPO',
    'shop.pins.title': 'PIN SABLE',
    'shop.pins.desc': 'Pin metálico con el emblema SABLE. Un detalle compacto de identidad para llevar en el colegio, eventos y fines de semana de carrera.',
    'shop.keychain.badge': 'LLAVERO DEL EQUIPO',
    'shop.keychain.title': 'LLAVERO SABLE',
    'shop.keychain.desc': 'Llavero con el felino y el escudo SABLE. Diseñado para representar al equipo dondequiera que vayas.',
    'shop.footer-left': 'MERCHANDISING CREW SABLE',
    'shop.footer-right': 'NO ESTÁ A LA VENTA',

    // PartnersSection
    'partners.subtitle': '03 // ALIADOS',
    'partners.heading': 'En alianza con',
    'partners.intro':
      'Marcas e instituciones que impulsan a SABLE dentro y fuera de pista — de software y movilidad a ingeniería y comunidad.',
    'partners.slot-code': 'ALIADO',
    'partners.tap-hint': 'Toca una tarjeta para ver el perfil completo del aliado',
    'partners.read-more': 'Ver perfil',
    'partners.view-partner': 'Ver aliado',
    'partners.view-close': 'Cerrar perfil',
    'partners.thanks-heading': 'Mensaje al equipo',
    'partners.category.technical': 'Socio técnico',
    'partners.category.automotive': 'Aliado automotriz',
    'partners.category.institutional': 'Aliado institucional',
    'partners.category.engineering': 'Aliado en ingeniería',
    'partners.solvex.name': 'SOLVEX DOMINICANA',
    'partners.solvex.role': 'Soluciones digitales y nube',
    'partners.solvex.desc':
      'Solvex Dominicana es una empresa de tecnología e innovación especializada en soluciones digitales, desarrollo de software y servicios en la nube, destacándose por impulsar la transformación tecnológica en diferentes sectores.',
    'partners.solvex.thanks':
      'Como socio técnico oficial de SABLE, Solvex respalda las herramientas, sistemas y base digital que mantienen al equipo competitivo.',
    'partners.motoruedas.name': 'MOTORUEDAS',
    'partners.motoruedas.role': 'Patrocinador de movilidad',
    'partners.motoruedas.desc':
      'Motoruedas se convirtió en patrocinador de SABLE: su respaldo impulsa este movimiento y demuestra que, cuando visiones distintas se unen, se pueden crear cosas grandes.',
    'partners.motoruedas.thanks':
      'Gracias por apostar por nosotros y ser parte de esto que todavía tiene mucho por mostrar en pista.',
    'partners.rbw.name': 'RBW AUTO IMPORT',
    'partners.rbw.role': 'Importación y venta de vehículos',
    'partners.rbw.desc':
      'RBW Auto Import es una empresa dedicada a la importación y venta de vehículos, ofreciendo calidad, confianza y una experiencia pensada para quienes aman el mundo automotriz.',
    'partners.rbw.thanks':
      'En SABLE estamos orgullosos de contar con su apoyo y de que formen parte de este movimiento creativo que va en marcha.',
    'partners.apolo27.name': 'APOLO 27 GT',
    'partners.apolo27.role': 'INTEC · Formula Student Spain 2026',
    'partners.apolo27.desc':
      'Proyecto universitario del INTEC que diseña y construye un monoplaza tipo fórmula para representar a República Dominicana en Formula Student Spain 2026 (Barcelona, 1–7 ago) — el mismo ADN de ingeniería aplicada que STEM Racing.',
    'partners.apolo27.thanks':
      'Un aliado que lleva el talento dominicano al escenario global del automovilismo y la ingeniería universitaria.',
    'partners.junta-sanluis.name': 'JUNTA MUNICIPAL SAN LUIS',
    'partners.junta-sanluis.role': 'Distrito Municipal · Santo Domingo Este',
    'partners.junta-sanluis.desc':
      'Gobierno local del distrito municipal San Luis en Santo Domingo Este, impulsando desarrollo comunitario, obras públicas e iniciativas para la juventud de la demarcación.',
    'partners.junta-sanluis.thanks':
      'Aliado institucional que respalda a SABLE como proyecto que inspira a jóvenes del distrito y del país.',

    // CtaModal
    'cta-modal.badge': 'SUMATE',
    'cta-modal.title': '¿CÓMO QUIERES APOYAR A SABLE?',
    'cta-modal.desc':
      'Compra boletas para el evento nacional, alíate como sponsor o síguenos en Instagram desde la primera fila.',
    'cta-modal.tickets': 'COMPRAR BOLETAS',
    'cta-modal.tickets-desc': 'Evento Nacional STEM Racing — 13 jun 2026, 8:00 a. m. en TIX.',
    'cta-modal.tickets-aria': 'Comprar boletas en TIX — Evento Nacional STEM Racing 13 de junio de 2026',
    'cta-modal.sponsor': 'SER SPONSOR',
    'cta-modal.sponsor-desc': 'Alianza, branding y presencia en pista.',
    'cta-modal.support': 'APOYAR EN INSTAGRAM',
    'cta-modal.support-desc': 'Sigue a @sablee.st para ver actualizaciones.',
    'cta-modal.dismiss': 'Ahora no',
    'cta-modal.close': 'Cerrar popup',
    'cta-modal.image-alt': 'Equipo SABLE con trajes de carreras completos.',

    // Footer
    'footer.badge': '04 // PIT LANE',
    'footer.tagline': 'División apex de SteelRacingRD. Ingeniería para la velocidad.',
    'footer.status': 'SISTEMA EN ESPERA',
    'footer.status-value': 'LISTO',
    'footer.tickets': 'BOLETAS DEL EVENTO',
    'footer.tickets-aria': 'Comprar boletas del Evento Nacional STEM Racing en TIX',
    'footer.back-to-top': 'VOLVER A LA GRILLA',
    'footer.copyright': '© 2026 SABLE STEAMRACING. INGENIERÍA PARA LA VELOCIDAD.',
  },
}
