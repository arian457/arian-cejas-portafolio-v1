'use client';
import { availableCommands, ExecutionCommand } from '@/constants/commands';
import { useState, useEffect } from 'react';

// Hook personalizado para animación de tipeado
const useTypewriter = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, text, speed]);

  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsTyping(false);
  }, [text]);

  return { displayText, isTyping };
};

// Componente para mostrar resultado con animación de tipeado
const TypewriterResult = ({
  text,
  onTypingStart,
  onTypingComplete,
}: {
  text: string;
  onTypingStart?: () => void;
  onTypingComplete?: () => void;
}) => {
  const { displayText, isTyping } = useTypewriter(text, 2);

  // Notificar cuando comience el tipeado
  useEffect(() => {
    if (isTyping && displayText.length === 1 && onTypingStart) {
      onTypingStart();
    }
  }, [isTyping, displayText.length, onTypingStart]);

  // Notificar cuando termine de tipear
  useEffect(() => {
    if (!isTyping && displayText === text && onTypingComplete) {
      onTypingComplete();
    }
  }, [isTyping, displayText, text, onTypingComplete]);

  // Función para detectar y convertir enlaces
  const processLinks = (text: string) => {
    const urlRegex = /(HTTPS?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={index}
            href={part.toLowerCase()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline decoration-blue-500 hover:decoration-blue-400 transition-colors duration-200 break-all"
          >
            {part.toUpperCase()}
          </a>
        );
      }
      return part;
    });
  };

  // Procesar saltos de línea y enlaces
  const processText = (text: string) => {
    return text.split('\n').map((line, index) => (
      <p
        key={index}
        className="mb-0.5 text-[10px] xs:text-xs sm:text-sm leading-tight"
      >
        {processLinks(line.toUpperCase())}
      </p>
    ));
  };

  return (
    <div className="text-green-300 font-mono t">
      {processText(displayText)}
      {isTyping && <TerminalCursor />}
    </div>
  );
};

const TerminalCursor = () => (
  <span className="animate-blink text-green-400 text-lg sm:text-xl">█</span>
);

export const Terminal = () => {
  const [currentPath, setCurrentPath] = useState<string>('C:/PORTAFOLIO');
  const currentCommand = availableCommands.find(
    (command) => command.path === currentPath
  );
  const [log, setLog] = useState<
    { timestamp: string; command: string; result: string }[]
  >([]);
  const [isAnyTyping, setIsAnyTyping] = useState(false);

  // Función para hacer scroll hacia abajo con efecto smooth
  const scrollToBottom = () => {
    const terminalElement = document.querySelector('[data-terminal]');
    if (terminalElement) {
      terminalElement.scrollTo({
        top: terminalElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  // Observar cambios en la altura del contenedor para hacer scroll
  useEffect(() => {
    const terminalElement = document.querySelector('[data-terminal]');
    if (!terminalElement) return;

    const resizeObserver = new ResizeObserver(() => {
      scrollToBottom();
    });

    resizeObserver.observe(terminalElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Observar cambios en el contenido del terminal
  useEffect(() => {
    const terminalElement = document.querySelector('[data-terminal]');
    if (!terminalElement) return;

    const mutationObserver = new MutationObserver(() => {
      scrollToBottom();
    });

    mutationObserver.observe(terminalElement, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      mutationObserver.disconnect();
    };
  }, []);

  // Scroll cuando cambie el log
  useEffect(() => {
    scrollToBottom();
  }, [log]);

  // Scroll cuando cambie el estado de tipeado
  useEffect(() => {
    scrollToBottom();
  }, [isAnyTyping]);

  useEffect(() => {
    setLog([
      {
        timestamp: getConsoleTimestamp(),
        command: 'PRESENTACIÓN',
        result:
          'SOY DESARROLLADOR WEB SSR CON PERFIL FULL STACK.\n' +
          'TRABAJO CON JAVASCRIPT, REACT, NODE.JS Y SERVICIOS DE AWS (EC2, S3, LAMBDA, RDS), SIEMPRE CON FOCO EN BUENAS PRÁCTICAS PARA CREAR SOLUCIONES EFICIENTES, ESCALABLES Y FÁCILES DE USAR.\n' +
          'ME FORMÉ DE MANERA AUTODIDACTA Y SIGO CAPACITÁNDOME DE FORMA CONTINUA EN UN RUBRO QUE CAMBIA TODO EL TIEMPO. VALORO LA ADOPCIÓN DE NUEVAS HERRAMIENTAS, COMO LA IA, PERO SIEMPRE DESDE UNA MIRADA PROFESIONAL: USARLAS CUANDO REALMENTE APORTAN, SIN PERDER DE VISTA LA CALIDAD DEL PRODUCTO NI LA EXPERIENCIA DEL USUARIO.\n' +
          'BUSCO PROYECTOS DONDE PUEDA APORTAR ESE EQUILIBRIO ENTRE INNOVACIÓN Y SOLIDEZ TÉCNICA, TRABAJANDO EN EQUIPO PARA CONSTRUIR PRODUCTOS QUE TENGAN IMPACTO REAL EN LAS PERSONAS Y GENEREN VALOR PARA EL NEGOCIO.',
      },
    ]);
  }, []);
  const getConsoleTimestamp = () => {
    const now = new Date();
    const day = now.toLocaleDateString('es-ES', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
    const time = now.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    const timestamp = `${day} ${time}`;
    return timestamp.toUpperCase();
  };

  const handleBackClick = () => {
    const back = currentCommand?.back;
    if (!back) return;
    setLog((prevLog) => [
      ...prevLog,
      {
        timestamp: getConsoleTimestamp(),
        command: 'ATRÁS',
        result: '',
      },
    ]);

    setCurrentPath(back);
  };

  const handleCommandClick = (command: ExecutionCommand) => {
    if (command.navigateTo) {
      setCurrentPath(command.navigateTo);
    }

    setLog((prevLog) => [
      ...prevLog,
      {
        timestamp: getConsoleTimestamp(),
        command: command.command,
        result: command.commandResult,
      },
    ]);
  };

  const handleTypingStart = () => {
    setIsAnyTyping(true);
  };

  const handleTypingComplete = () => {
    setIsAnyTyping(false);
  };

  return (
    <div
      data-terminal
      className="font-mono relative bg-black rounded-lg p-2 sm:p-4 md:p-6 border border-green-800 shadow-2xl h-full flex flex-col z-10 gap-1 sm:gap-2 md:gap-4 overflow-y-scroll custom-scrollbar"
      style={{
        backgroundImage:
          'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0, 255, 0, 0.02) 1px, rgba(0, 255, 0, 0.02) 2px)',
        textShadow:
          '0 0 5px rgba(0, 255, 0, 0.5), 0 0 10px rgba(0, 255, 0, 0.3)',
        scrollbarWidth: 'thin',
        scrollbarColor: '#22c55e #000000',
      }}
    >
      {log.map(({ timestamp, command, result }, index) => (
        <div key={index} className="mb-1 sm:mb-2 md:mb-3">
          <div className="flex flex-col sm:flex-row gap-0.5 sm:gap-1 md:gap-2">
            <div className="flex items-center gap-0.5 sm:gap-1 md:gap-2">
              <span className="text-green-400 font-semibold text-xs sm:text-sm">
                {timestamp}
              </span>
              <span className="text-green-500">{'>'}</span>
              <span className="text-green-300 font-semibold text-xs sm:text-sm">
                {command}
              </span>
            </div>
          </div>
          <TypewriterResult
            text={result}
            onTypingStart={handleTypingStart}
            onTypingComplete={handleTypingComplete}
          />
        </div>
      ))}
      {!isAnyTyping && (
        <>
          <div
            id="current-cursor"
            className="flex flex-col sm:flex-row items-start sm:items-center gap-0.5 sm:gap-1 md:gap-2"
          >
            <div className="flex items-center gap-0.5 sm:gap-1 md:gap-2">
              <span className="text-green-400 font-semibold text-xs sm:text-sm">
                {getConsoleTimestamp()}
              </span>
              <span className="text-green-500">{'>'}</span>
            </div>
            <span className="text-green-300 font-semibold text-xs sm:text-sm">
              {currentPath}
            </span>
            <TerminalCursor />
          </div>

          <div
            id="console-commands"
            className="flex flex-col sm:flex-row gap-1 sm:gap-2 md:gap-3"
          >
            {currentCommand?.back && (
              <span
                className="text-green-300 hover:text-green-200 underline decoration-green-500 hover:decoration-green-300 transition-all duration-200 cursor-pointer font-mono px-2 py-1 rounded hover:bg-green-900/20 text-center sm:text-left text-xs"
                onClick={handleBackClick}
              >
                {'<'} ATRÁS
              </span>
            )}
            {currentCommand?.commands?.map((command) => (
              <span
                key={command.command}
                className="text-green-300 hover:text-green-200 underline decoration-green-500 hover:decoration-green-300 transition-all duration-200 cursor-pointer font-mono px-2 py-1 rounded hover:bg-green-900/20 text-center sm:text-left text-xs"
                onClick={() => handleCommandClick(command)}
              >
                {command.command}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
