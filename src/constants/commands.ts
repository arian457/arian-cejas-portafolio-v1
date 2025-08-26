export type Command = {
  path: string;
  commands: ExecutionCommand[];
  back?: string;
};

export type ExecutionCommand = {
  command: string;
  commandResult: string;
  navigateTo?: string;
};

export const availableCommands: Command[] = [
  {
    path: 'C:/PORTAFOLIO',
    commands: [
      {
        command: 'PROYECTOS',
        commandResult: '',
        navigateTo: 'C:/PORTAFOLIO/PROYECTOS',
      },
      {
        command: 'TECNOLOGIAS',
        commandResult:
          '- REACT \n' +
          '- VUE \n' +
          '- EXPRESS.JS \n' +
          '- TYPESCRIPT \n' +
          '- NODE.JS \n' +
          '- MYSQL \n',
      },
      {
        command: 'REDES',
        commandResult:
          '- LINKEDIN: https://www.linkedin.com/in/arian-cejas/ \n' +
          '- GITHUB: https://github.com/arian457 \n',
      },
    ],
  },
  {
    path: 'C:/PORTAFOLIO/PROYECTOS',
    back: 'C:/PORTAFOLIO',
    commands: [
      {
        command: 'CHIPAX',
        commandResult:
          '▒▒▒▒▒▒▒▒▒▒▒▒▓██▒▒▒▒▒▒▒▒▓██▒▒▒▒▒▒▒▒▒▒▒▒\n' +
          '▒▒▒▒▒▒▒▒▒▒██▒▒▒██▒▒▒▒▓█▓▒▒██▒▒▒▒▒▒▒▒▒▒\n' +
          '▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒████▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒\n' +
          '▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒████▒▒▒▒▒▒▒▒▒██▓▒▒▒▒▒\n' +
          '▒▒▒▓██▒▒▒▒▒▒▒▒▒██▒▒▒▒▓█▓▒▒▒▒▒▒▒▒▓██▒▒▒\n' +
          '▒▓█▓▒▒▒▒▒▒▒▒▓██▒▒▒▒▒▒▒▒▓██▒▒▒▒▒▒▒▒▒██▒\n' +
          '█████████████▒▒▒▒▒▒▒▒▒▒▒▒▓████████████\n' +
          '▒▓█▒▒▒▒▒▒▒▒▒▓█▓▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒██▒\n' +
          '▒▒▒▓█▓▒▒▒▒▒▒▒▒▓██▒▒▒▒▓█▓▒▒▒▒▒▒▒▒▒██▒▒▒\n' +
          '▒▒▒▒▒▓██▒▒▒▒▒▒▒▒▒████▓▒▒▒▒▒▒▒▒▓█▓▒▒▒▒▒\n' +
          '▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒████▒▒▒▒▒▒▒▓█▒▒▒▒▒▒▒▒\n' +
          '▒▒▒▒▒▒▒▒▒▒██▒▒▒██▒▒▒▒██▒▒▒██▒▒▒▒▒▒▒▒▒▒\n' +
          '▒▒▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒▒▒▒▓██▒▒▒▒▒▒▒▒▒▒▒▒\n' +
          '▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n' +
          '░█████╗░██╗░░██╗██╗██████╗░░█████╗░██╗░░██╗\n' +
          '██╔══██╗██║░░██║██║██╔══██╗██╔══██╗╚██╗██╔╝\n' +
          '██║░░╚═╝███████║██║██████╔╝███████║░╚███╔╝░\n' +
          '██║░░██╗██╔══██║██║██╔═══╝░██╔══██║░██╔██╗░\n' +
          '╚█████╔╝██║░░██║██║██║░░░░░██║░░██║██╔╝╚██╗\n' +
          '░╚════╝░╚═╝░░╚═╝╚═╝╚═╝░░░░░╚═╝░░╚═╝╚═╝░░╚═╝\n' +
          '-----------------------------------------------------------------------------\n' +
          'ROL: INGENIERO DE SOFTWARE SSR\n' +
          'DESDE: ENERO 2021 - HASTA: PRESENTE (+3 AÑOS)\n' +
          '-----------------------------------------------------------------------------\n' +
          'Chipax es una plataforma financiera 100 % online diseñada para ordenar y automatizar la gestión financiera de pequeñas y medianas empresas (pymes), especialmente en Chile\n' +
          '1. Sincronización automática de datos financieros\n' +
          '   - Se conecta con bancos, SII y plataformas de pago\n' +
          '   - Carga automática de facturas, impuestos y movimientos\n\n' +
          '2. Conciliación bancaria automatizada\n' +
          '   - Reglas inteligentes para conciliar movimientos\n' +
          '   - Integración con Transbank, GetNet y Mercado Pago\n\n' +
          '3. Gestión de cobranza\n' +
          '   - Recordatorios automáticos por correo\n' +
          '   - Gestión centralizada de pagos y facturas\n\n' +
          '4. Dashboard financiero y reportes clave\n' +
          '   - Flujo de caja, resultados y KPIs en tiempo real\n' +
          '   - Exportación a Excel o CSV\n\n' +
          '5. Automatización del día a día\n' +
          '   - Clasificación de documentos y conciliaciones\n' +
          '   - Generación de libros contables para el contador\n\n' +
          '6. Planes adaptados a pymes\n' +
          '   - Desde plan gratuito hasta planes avanzados\n' +
          '   - Funciones extra como proyección de flujo y reportes\n' +
          '-----------------------------------------------------------------------------\n' +
          'PAGINA WEB: https://chipax.com\n',
      },
      {
        command: 'KEYROS',
        commandResult:
          '██╗░░██╗███████╗██╗░░░██╗██████╗░░█████╗░░██████╗\n' +
          '██║░██╔╝██╔════╝╚██╗░██╔╝██╔══██╗██╔══██╗██╔════╝\n' +
          '█████═╝░█████╗░░░╚████╔╝░██████╔╝██║░░██║╚█████╗░\n' +
          '██╔═██╗░██╔══╝░░░░╚██╔╝░░██╔══██╗██║░░██║░╚═══██╗\n' +
          '██║░╚██╗███████╗░░░██║░░░██║░░██║╚█████╔╝██████╔╝\n' +
          '╚═╝░░╚═╝╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░╚════╝░╚═════╝░\n' +
          '-----------------------------------------------------------------------------\n' +
          'ROL: FULLSTACK DEV SSR\n' +
          'DESDE: ABRIL 2025 - HASTA: AGOSTO 2025 (5 MESES)\n' +
          '-----------------------------------------------------------------------------\n' +
          'Keyros es una aplicación financiera que ayuda a los usuarios a entender y organizar sus estados de cuenta de tarjetas de crédito. Transforma datos complejos en información clara, clasifica gastos automáticamente y entrega recomendaciones personalizadas para evitar intereses y mejorar la salud financiera, todo con altos estándares de seguridad.\n' +
          '1. Mejorar la relación con tus tarjetas de crédito y recuperar control de tus finanzas\n' +
          '2. Simplificar y visualizar claramente los estados de cuenta\n' +
          '3. Clasificar automáticamente compras y gastos en categorías recomendadas\n' +
          '4. Proveer simulaciones y recomendaciones personalizadas para controlar intereses y moras\n' +
          '5. Analizar y transformar estados de cuenta en información clara y útil\n' +
          '6. Garantizar privacidad y seguridad: cifrado, acceso con código de un solo uso e ISO 27001\n' +
          '-----------------------------------------------------------------------------\n' +
          'PAGINA WEB: https://keyros.app/\n',
      },
      {
        command: 'DEVNAVIGATE',
        commandResult:
          '██████╗░███████╗██╗░░░██╗███╗░░██╗░█████╗░██╗░░░██╗██╗░██████╗░░█████╗░████████╗███████╗\n' +
          '██╔══██╗██╔════╝██║░░░██║████╗░██║██╔══██╗██║░░░██║██║██╔════╝░██╔══██╗╚══██╔══╝██╔════╝\n' +
          '██║░░██║█████╗░░╚██╗░██╔╝██╔██╗██║███████║╚██╗░██╔╝██║██║░░██╗░███████║░░░██║░░░█████╗░░\n' +
          '██║░░██║██╔══╝░░░╚████╔╝░██║╚████║██╔══██║░╚████╔╝░██║██║░░╚██╗██╔══██║░░░██║░░░██╔══╝░░\n' +
          '██████╔╝███████╗░░╚██╔╝░░██║░╚███║██║░░██║░░╚██╔╝░░██║╚██████╔╝██║░░██║░░░██║░░░███████╗\n' +
          '╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚══╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝░╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░╚══════╝\n' +
          '----------------------------------------------------------------------------------------------------------------------------------------------\n' +
          'ROL: FULLSTACK DEV JR\n' +
          'DESDE: NOVIEMBRE 2020 - HASTA: ENERO 2021 (3 MESES)\n' +
          '-----------------------------------------------------------------------------\n' +
          'Dev Navigate es una agencia digital con sede en Madrid (España) que transforma ideas en soluciones web.\n' +
          'Ofrece desarrollo de sitios y aplicaciones web, tiendas online, blogs corporativos y plataformas de comercio electrónico.\n' +
          'Además, brinda servicios integrales como diseño gráfico, gestión de redes sociales, campañas SEM/SEO y soporte técnico informático.\n' +
          '-----------------------------------------------------------------------------\n' +
          '1. Desarrollo de páginas web informativas y landing pages\n' +
          '2. Creación de aplicaciones web a medida (gestión de citas, inventarios, paneles administrativos)\n' +
          '3. Diseño y desarrollo de tiendas online (e-commerce) con gestión de pedidos y envíos\n' +
          '4. Diseño gráfico y branding personalizado\n' +
          '5. Posicionamiento SEO para alcanzar los primeros lugares en buscadores\n' +
          '6. Campañas SEM para publicidad online dirigida\n' +
          '7. Administración de redes sociales para reforzar presencia digital\n' +
          '8. Soporte técnico informático continuo según tus necesidades\n' +
          '-----------------------------------------------------------------------------\n' +
          'PAGINA WEB: https://www.devnavigate.com/\n',
      },
    ],
  },
];
