'use client';

import { useState } from 'react';
import { 
  User, 
  Settings, 
  Calendar, 
  Award, 
  BarChart3, 
  Bell, 
  MapPin, 
  Mail, 
  Phone,
  Edit,
  Trash2,
  Filter,
  Heart,
  Users,
  Clock,
  Star,
  Eye,
  ChevronRight
} from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('feed');
  const [filterOpen, setFilterOpen] = useState(false);

  const sidebarItems = [
    { id: 'feed', label: 'Feed', icon: Bell },
    { id: 'profile', label: 'Alterar Dados', icon: Settings },
    { id: 'events', label: 'Meus Eventos', icon: Calendar },
    { id: 'certificates', label: 'Certificados', icon: Award },
    { id: 'stats', label: 'Estatísticas', icon: BarChart3 },
  ];

  const profileSubItems = [
    { id: 'bio', label: 'Alterar Bio', icon: Edit },
    { id: 'delete', label: 'Excluir Conta', icon: Trash2 },
    { id: 'address', label: 'Endereços', icon: MapPin },
    { id: 'email', label: 'Email', icon: Mail },
    { id: 'phone', label: 'Telefone', icon: Phone },
  ];

  const mockEvents = [
    {
      id: 1,
      title: 'Limpeza da Praia de Copacabana',
      organization: 'EcoRio',
      organizationRating: 4.8,
      description: 'Junte-se a nós para uma manhã de limpeza da praia e conscientização ambiental.',
      image: '/bg1.jpeg',
      tags: ['Causa Ambiental', 'Limpeza'],
      views: 234,
      participants: 45,
      date: '2024-02-15',
      isNew: true
    },
    {
      id: 2,
      title: 'Doação de Sangue - Hospital Municipal',
      organization: 'Cruz Vermelha',
      organizationRating: 4.9,
      description: 'Campanha de doação de sangue para ajudar pacientes em tratamento.',
      image: '/bg1.jpeg',
      tags: ['Saúde', 'Doação'],
      views: 189,
      participants: 67,
      date: '2024-02-18',
      isNew: false
    },
    {
      id: 3,
      title: 'Aula de Reforço para Crianças',
      organization: 'Instituto Educação',
      organizationRating: 4.7,
      description: 'Voluntários para dar aulas de reforço em matemática e português.',
      image: '/bg1.jpeg',
      tags: ['Educação', 'Crianças'],
      views: 156,
      participants: 23,
      date: '2024-02-20',
      isNew: true
    }
  ];

  const userStats = {
    eventsParticipated: 12,
    hoursVolunteered: 48,
    certificatesEarned: 5,
    organizationsHelped: 8
  };

  const renderFeed = () => (
    <div className="space-y-6">
      {/* Filter Bar */}
      <div className="bg-white rounded-lg card-shadow p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Eventos Recomendados</h2>
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700"
          >
            <Filter className="w-4 h-4" />
            Filtros
          </button>
        </div>
        
        {filterOpen && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {['Causa Animal', 'Causa Ambiental', 'Educação', 'Saúde', 'Assistência Social'].map((tag) => (
                <button
                  key={tag}
                  className="tag-button tag-unselected"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Events Feed */}
      <div className="space-y-4">
        {mockEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-lg card-shadow overflow-hidden hover:shadow-lg transition-shadow duration-200">
            <div className="flex">
              <div className="w-48 h-32 bg-gray-200 relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                {event.isNew && (
                  <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                    Novo
                  </span>
                )}
              </div>
              
              <div className="flex-1 p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-purple-600 cursor-pointer">
                    {event.title}
                  </h3>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-gray-600">{event.organization}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{event.organizationRating}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm mb-3 line-clamp-2">
                  {event.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {event.tags.map((tag) => (
                    <span key={tag} className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {event.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {event.participants}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(event.date).toLocaleDateString('pt-BR')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg card-shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Configurações do Perfil</h2>
        <div className="space-y-4">
          {profileSubItems.map((item) => (
            <button
              key={item.id}
              className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              <item.icon className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700">{item.label}</span>
              <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStats = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg card-shadow p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{userStats.eventsParticipated}</p>
              <p className="text-sm text-gray-600">Eventos Participados</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg card-shadow p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{userStats.hoursVolunteered}</p>
              <p className="text-sm text-gray-600">Horas Voluntariadas</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg card-shadow p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{userStats.certificatesEarned}</p>
              <p className="text-sm text-gray-600">Certificados</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg card-shadow p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{userStats.organizationsHelped}</p>
              <p className="text-sm text-gray-600">Organizações Ajudadas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'feed':
        return renderFeed();
      case 'profile':
        return renderProfile();
      case 'stats':
        return renderStats();
      case 'events':
        return <div className="bg-white rounded-lg card-shadow p-6"><p>Histórico de eventos em desenvolvimento...</p></div>;
      case 'certificates':
        return <div className="bg-white rounded-lg card-shadow p-6"><p>Certificados em desenvolvimento...</p></div>;
      default:
        return renderFeed();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Revo</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg card-shadow p-4">
              <nav className="space-y-2">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg transition-colors duration-200 ${
                      activeTab === item.id
                        ? 'bg-purple-100 text-purple-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}