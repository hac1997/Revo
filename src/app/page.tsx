'use client';

import { ArrowRight, Heart, Users, Calendar, Award, Star, CircleCheck as CheckCircle, Sparkles, Globe, Shield } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="navbar-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full pulse-ring"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient">Revo</h1>
                <p className="text-xs text-gray-500 font-medium">Transformando vidas</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Link href="/auth" className="text-gray-600 hover:text-purple-600 font-medium transition-colors duration-300">
                Entrar
              </Link>
              <Link href="/auth" className="btn-primary">
                Cadastrar
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl floating-element" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="fade-in">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-medium">Mais de 10.000 voluntários ativos</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              Transforme o mundo com
              <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                pequenas ações
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Conecte-se com organizações e eventos de voluntariado que fazem a diferença na sua comunidade. 
              Seja parte da mudança que você quer ver no mundo.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/auth" className="btn-primary text-lg py-4 px-10 shadow-2xl">
                Comece agora gratuitamente
                <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
              <button className="btn-glass text-lg py-4 px-10">
                Ver como funciona
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-8 mt-16 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>100% Gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-300" />
                <span>Dados Seguros</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-purple-300" />
                <span>Todo o Brasil</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center slide-in-left">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">10K+</div>
              <div className="text-gray-600 font-medium">Voluntários Ativos</div>
            </div>
            <div className="text-center slide-in-left" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">500+</div>
              <div className="text-gray-600 font-medium">Organizações</div>
            </div>
            <div className="text-center slide-in-right" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">2K+</div>
              <div className="text-gray-600 font-medium">Eventos Realizados</div>
            </div>
            <div className="text-center slide-in-right" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">50K+</div>
              <div className="text-gray-600 font-medium">Horas Voluntariadas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-6 py-3 mb-6">
              <Star className="w-5 h-5" />
              <span className="font-semibold">Por que escolher o Revo?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Uma plataforma completa para
              <span className="block text-gradient">conectar corações</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Desenvolvemos a melhor experiência para voluntários e organizações se encontrarem e criarem impacto real na sociedade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl card-shadow p-8 text-center fade-in">
              <div className="feature-icon">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Comunidade Ativa
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Conecte-se com milhares de voluntários apaixonados e organizações comprometidas com a mudança social.
              </p>
            </div>

            <div className="bg-white rounded-3xl card-shadow p-8 text-center fade-in" style={{animationDelay: '0.1s'}}>
              <div className="feature-icon">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Eventos Personalizados
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Algoritmo inteligente que recomenda eventos baseados nos seus interesses e localização.
              </p>
            </div>

            <div className="bg-white rounded-3xl card-shadow p-8 text-center fade-in" style={{animationDelay: '0.2s'}}>
              <div className="feature-icon">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Certificados Digitais
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Receba certificados verificados pelas suas contribuições e construa um portfólio de impacto social.
              </p>
            </div>

            <div className="bg-white rounded-3xl card-shadow p-8 text-center fade-in" style={{animationDelay: '0.3s'}}>
              <div className="feature-icon">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Impacto Mensurável
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Acompanhe estatísticas detalhadas do seu impacto e veja como suas ações transformam vidas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Histórias que <span className="text-gradient">inspiram</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Veja como o Revo está transformando vidas e comunidades em todo o Brasil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 fade-in">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "O Revo mudou minha vida! Encontrei minha paixão ajudando crianças em situação de vulnerabilidade. Já participei de 15 eventos e fiz amizades incríveis."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Maria Silva</div>
                  <div className="text-sm text-gray-600">Voluntária há 2 anos</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 fade-in" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Como organização, o Revo nos conectou com voluntários qualificados e comprometidos. Nossa capacidade de impacto triplicou!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">J</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">João Santos</div>
                  <div className="text-sm text-gray-600">ONG Esperança Verde</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 fade-in" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "A plataforma é intuitiva e me ajuda a encontrar eventos que realmente fazem sentido para mim. Recomendo para todos!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Ana Costa</div>
                  <div className="text-sm text-gray-600">Estudante de Medicina</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl floating-element" style={{animationDelay: '3s'}}></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Pronto para fazer a
              <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                diferença?
              </span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
              Junte-se à nossa comunidade de mais de 10.000 voluntários e comece a transformar vidas hoje mesmo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/auth" className="btn-primary text-lg py-4 px-12 shadow-2xl">
                Criar conta gratuita
                <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Sem compromisso • Cancele quando quiser</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gradient">Revo</h3>
                <p className="text-sm text-gray-400">Transformando vidas</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-sm">
              <div>
                <h4 className="font-semibold mb-4 text-purple-300">Plataforma</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Como funciona</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Para voluntários</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Para organizações</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-purple-300">Suporte</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Central de ajuda</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-purple-300">Legal</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Termos de uso</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-purple-300">Empresa</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Imprensa</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8 w-full text-center">
              <p className="text-gray-400">
                © 2024 Revo. Todos os direitos reservados. Feito com ❤️ para transformar o mundo.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}