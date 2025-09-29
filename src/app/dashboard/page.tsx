'use client';

import { useState } from 'react';
import { User, Settings, Calendar, Award, ChartBar as BarChart3, Bell, MapPin, Mail, Phone, CreditCard as Edit, Trash2, ListFilter as Filter, Heart, Users, Clock, Star, Eye, ChevronRight, Search, Bookmark, TrendingUp, Target, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('feed');
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const sidebarItems = [
    { id: 'feed', label: 'Feed de Eventos', icon: Bell, badge: '3' },
    { id: 'profile', label: 'Meu Perfil', icon: Settings },
    { id: 'events', label: 'Meus Eventos', icon: Calendar, badge: '12' },
    { id: 'certificates', label: 'Certificados', icon: Award, badge: '5' },
    { id: 'stats', label: 'Estatísticas', icon: BarChart3 },
  ];

  const profileSubItems = [
    { id: 'bio', label: 'Alterar Bio', icon: Edit, description: 'Atualize sua biografia' },
    { id: 'address', label: 'Endereços', icon: MapPin, description: 'Gerencie seus endereços' },
    { id: 'email', label: 'Email', icon: Mail, description: 'Alterar email principal' },
    { id: 'phone', label: 'Telefone', icon: Phone, description: 'Adicionar telefone' },
    { id: 'delete', label: 'Excluir Conta', icon: Trash2, description: 'Remover conta permanentemente', danger: true },
  ];

  const mockEvents = [
    {
      id: 1,
      title: 'Limpeza da Praia de Copacabana',
      organization: 'EcoRio',
      organizationRating: 4.8,
      description: 'Junte-se a nós para uma manhã de limpeza da praia e conscientização ambiental. Vamos trabalhar juntos para manter nossas praias limpas e proteger a vida marinha.',
      image: 'https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Causa Ambiental', 'Limpeza'],
      views: 234,
      participants: 45,
      maxParticipants: 60,
      date: '2024-02-15',
      time: '08:00',
      location: 'Copacabana, Rio de Janeiro',
      isNew: true,
      isTrending: false,
      difficulty: 'Fácil'
    },
    {
      id: 2,
      title: 'Doação de Sangue - Hospital Municipal',
      organization: 'Cruz Vermelha',
      organizationRating: 4.9,
      description: 'Campanha de doação de sangue para ajudar pacientes em tratamento. Sua doação pode salvar até 4 vidas!',
      image: 'https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Saúde', 'Doação'],
      views: 189,
      participants: 67,
      maxParticipants: 100,
      date: '2024-02-18',
      time: '09:00',
      location: 'Hospital Municipal, São Paulo',
      isNew: false,
      isTrending: true,
      difficulty: 'Fácil'
    },
    {
      id: 3,
      title: 'Aula de Reforço para Crianças',
      organization: 'Instituto Educação',
      organizationRating: 4.7,
      description: 'Voluntários para dar aulas de reforço em matemática e português para crianças de 8 a 12 anos.',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Educação', 'Crianças'],
      views: 156,
      participants: 23,
      maxParticipants: 30,
      date: '2024-02-20',
      time: '14:00',
      location: 'Centro Comunitário, Belo Horizonte',
      isNew: true,
      isTrending: false,
      difficulty: 'Médio'
    }
  ];

  const userStats = {
    eventsParticipated: 12,
    hoursVolunteered: 48,
    certificatesEarned: 5,
    organizationsHelped: 8,
    impactScore: 850,
    ranking: 'Top 15%'
  };

  const recentCertificates = [
    { name: 'Proteção Ambiental', date: '2024-01-15', hours: 8 },
    { name: 'Assistência Social', date: '2024-01-10', hours: 12 },
    { name: 'Educação Infantil', date: '2024-01-05', hours: 6 }
  ];

  const renderFeed = () => (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-2">Olá, Maria! 👋</h2>
          <p className="text-purple-100 mb-4">Você tem 3 novos eventos recomendados baseados nos seus interesses.</p>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              <span>Meta mensal: 8/10 horas</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>Impacto: {userStats.impactScore} pontos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-2xl card-shadow p-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar eventos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300"
            />
          </div>
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 bg-purple-50 text-purple-700 hover:bg-purple-100 px-6 py-3 rounded-xl font-medium transition-all duration-300"
          >
            <Filter className="w-4 h-4" />
            Filtros
            {filterOpen && <span className="text-xs bg-purple-200 px-2 py-1 rounded-full">Ativo</span>}
          </button>
        </div>
        
        {filterOpen && (
          <div className="pt-4 border-t border-gray-200 fade-in">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <select className="input-field">
                <option>Todas as causas</option>
                <option>Causa Animal</option>
                <option>Causa Ambiental</option>
                <option>Educação</option>
                <option>Saúde</option>
              </select>
              <select className="input-field">
                <option>Qualquer data</option>
                <option>Esta semana</option>
                <option>Este mês</option>
                <option>Próximos 3 meses</option>
              </select>
              <select className="input-field">
                <option>Qualquer distância</option>
                <option>Até 5km</option>
                <option>Até 10km</option>
                <option>Até 25km</option>
              </select>
              <select className="input-field">
                <option>Qualquer dificuldade</option>
                <option>Fácil</option>
                <option>Médio</option>
                <option>Difícil</option>
              </select>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Causa Animal', 'Causa Ambiental', 'Educação', 'Saúde', 'Assistência Social', 'Esportes'].map((tag) => (
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
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">Eventos Recomendados</h3>
          <span className="text-sm text-gray-500">{mockEvents.length} eventos encontrados</span>
        </div>

        {mockEvents.map((event, index) => (
          <div key={event.id} className="event-card fade-in" style={{animationDelay: `${index * 0.1}s`}}>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-80 h-48 md:h-auto bg-gray-200 relative overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {event.isNew && (
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Novo
                    </span>
                  )}
                  {event.isTrending && (
                    <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Trending
                    </span>
                  )}
                </div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300">
                  <Bookmark className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 hover:text-purple-600 cursor-pointer mb-2 line-clamp-2">
                      {event.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{event.organization[0]}</span>
                        </div>
                        <span className="text-sm font-medium text-gray-700">{event.organization}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 font-medium">{event.organizationRating}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        event.difficulty === 'Fácil' ? 'bg-green-100 text-green-700' :
                        event.difficulty === 'Médio' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {event.difficulty}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-400 hover:text-purple-600 cursor-pointer transition-colors duration-300" />
                </div>
                
                <p className="text-gray-700 mb-4 line-clamp-2 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag) => (
                    <span key={tag} className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span>{new Date(event.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-500" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>{event.participants}/{event.maxParticipants}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {event.views}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 max-w-24">
                      <div 
                        className="bg-gradient-to-r from-purple-600 to-purple-700 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <button className="btn-primary py-2 px-6 text-sm">
                    Participar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="bg-white rounded-2xl card-shadow p-8">
        <div className="flex items-center gap-6 mb-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Maria Silva</h2>
            <p className="text-gray-600 mb-3">Voluntária apaixonada por causas ambientais e educação infantil</p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-purple-600">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP</span>
              </div>
              <div className="flex items-center gap-2 text-purple-600">
                <Calendar className="w-4 h-4" />
                <span>Membro desde Jan 2023</span>
              </div>
            </div>
          </div>
          <button className="btn-secondary">
            Editar Perfil
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-purple-50 rounded-xl">
            <div className="text-2xl font-bold text-purple-600 mb-1">{userStats.eventsParticipated}</div>
            <div className="text-sm text-gray-600">Eventos</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-xl">
            <div className="text-2xl font-bold text-purple-600 mb-1">{userStats.hoursVolunteered}</div>
            <div className="text-sm text-gray-600">Horas</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-xl">
            <div className="text-2xl font-bold text-purple-600 mb-1">{userStats.certificatesEarned}</div>
            <div className="text-sm text-gray-600">Certificados</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-xl">
            <div className="text-2xl font-bold text-purple-600 mb-1">{userStats.ranking}</div>
            <div className="text-sm text-gray-600">Ranking</div>
          </div>
        </div>
      </div>

      {/* Profile Settings */}
      <div className="bg-white rounded-2xl card-shadow p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Configurações do Perfil</h3>
        <div className="space-y-4">
          {profileSubItems.map((item, index) => (
            <button
              key={item.id}
              className={`w-full flex items-center gap-4 p-4 text-left hover:bg-gray-50 rounded-xl transition-all duration-300 group ${
                item.danger ? 'hover:bg-red-50' : ''
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                item.danger 
                  ? 'bg-red-100 text-red-600 group-hover:bg-red-200' 
                  : 'bg-purple-100 text-purple-600 group-hover:bg-purple-200'
              }`}>
                <item.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className={`font-semibold ${item.danger ? 'text-red-600' : 'text-gray-900'}`}>
                  {item.label}
                </div>
                <div className="text-sm text-gray-500">{item.description}</div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStats = () => (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="stat-card">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">{userStats.eventsParticipated}</p>
              <p className="text-sm text-gray-600">Eventos Participados</p>
              <p className="text-xs text-green-600 font-medium">+3 este mês</p>
            </div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">{userStats.hoursVolunteered}</p>
              <p className="text-sm text-gray-600">Horas Voluntariadas</p>
              <p className="text-xs text-green-600 font-medium">+8 este mês</p>
            </div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">{userStats.certificatesEarned}</p>
              <p className="text-sm text-gray-600">Certificados</p>
              <p className="text-xs text-green-600 font-medium">+1 este mês</p>
            </div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">{userStats.organizationsHelped}</p>
              <p className="text-sm text-gray-600">Organizações Ajudadas</p>
              <p className="text-xs text-green-600 font-medium">+2 este mês</p>
            </div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-pink-700 rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">{userStats.impactScore}</p>
              <p className="text-sm text-gray-600">Pontos de Impacto</p>
              <p className="text-xs text-green-600 font-medium">+120 este mês</p>
            </div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-2xl flex items-center justify-center">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">{userStats.ranking}</p>
              <p className="text-sm text-gray-600">Ranking Nacional</p>
              <p className="text-xs text-green-600 font-medium">Subiu 5%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Certificates */}
      <div className="bg-white rounded-2xl card-shadow p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Certificados Recentes</h3>
        <div className="space-y-4">
          {recentCertificates.map((cert, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">{cert.name}</div>
                <div className="text-sm text-gray-600">{cert.hours} horas • {new Date(cert.date).toLocaleDateString('pt-BR')}</div>
              </div>
              <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                Ver Certificado
              </button>
            </div>
          ))}
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
        return <div className="bg-white rounded-2xl card-shadow p-8"><p className="text-gray-600">Histórico de eventos em desenvolvimento...</p></div>;
      case 'certificates':
        return <div className="bg-white rounded-2xl card-shadow p-8"><p className="text-gray-600">Certificados em desenvolvimento...</p></div>;
      default:
        return renderFeed();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="navbar-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient">Revo</h1>
                <p className="text-xs text-gray-500">Dashboard</p>
              </div>
            </Link>
            
            <div className="flex items-center gap-4">
              <button className="relative p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all duration-300">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
              </button>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300">
                <User className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl card-shadow p-6 sticky top-28">
              <nav className="space-y-2">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`sidebar-item w-full ${
                      activeTab === item.id ? 'sidebar-item-active' : 'sidebar-item-inactive'
                    }`}
                  >
                    <item.icon className="w-6 h-6" />
                    <span className="flex-1 text-left">{item.label}</span>
                    {item.badge && (
                      <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                        activeTab === item.id 
                          ? 'bg-white/20 text-white' 
                          : 'bg-purple-100 text-purple-600'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}