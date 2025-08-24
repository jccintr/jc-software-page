import { FaMobileAlt, FaGlobe, FaFileAlt, FaDesktop,FaRobot,FaNetworkWired   } from 'react-icons/fa';

export const services = [
  {
    title: 'Aplicativos Móveis',
    icon: <FaMobileAlt className="w-12 h-12 text-blue-600" />,
    description: 'Desenvolvemos aplicativos móveis personalizados para iOS e Android, com interfaces intuitivas e funcionalidades robustas para atender às suas necessidades.',
  },
  {
    title: 'Aplicativos Web',
    icon: <FaGlobe className="w-12 h-12 text-blue-600" />,
    description: 'Criamos aplicativos web escaláveis e responsivos, otimizados para desempenho e compatibilidade com todos os navegadores modernos.',
  },
    {
    title: 'Apis e Backends',
    icon: <FaNetworkWired  className="w-12 h-12 text-blue-600" />,
    description: 'Desenvolvemos estruturas seguras e escaláveis para suportar seu app com eficiência.',
  },
  {
    title: 'Bots Personalizados',
    icon: <FaRobot className="w-12 h-12 text-blue-600" />,
    description: 'Automatizamos o atendimento a seus clientes com bots de WhatsApp e Telegram.',
  },
  {
    title: 'Landing Pages',
    icon: <FaFileAlt className="w-12 h-12 text-blue-600" />,
    description: 'Projetamos landing pages atraentes e otimizadas para conversão, perfeitas para campanhas de marketing e geração de leads.',
  },
  {
    title: 'Aplicativos Desktop',
    icon: <FaDesktop className="w-12 h-12 text-blue-600" />,
    description: 'Construímos aplicativos desktop robustos e eficientes, compatíveis com Windows, macOS e Linux, para soluções personalizadas.',
  },
  
];