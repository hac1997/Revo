'use client';

import { ArrowRight, Heart, Users, Calendar, Award } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Revo</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <Link href="/auth" className="text-gray-600 hover:text-purple-600">
                Entrar
              </Link>
              <Link href="/auth" className="btn-primary">
                Cadastrar
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Transforme o mundo com
            <span className="block text-purple-200">pequenas ações</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Conecte-se com organizações e eventos de voluntariado que fazem a diferença na sua comunidade.
          </p>
          <Link href="/auth" className="inline-flex items-center bg-white text-purple-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105">
            Comece agora
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por que escolher o Revo?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Uma plataforma completa para conectar voluntários e organizações
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg card-shadow p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Comunidade Ativa
              </h3>
              <p className="text-gray-600">
                Conecte-se com milhares de voluntários e organizações
              </p>
            </div>

            <div className="bg-white rounded-lg card-shadow p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Eventos Personalizados
              </h3>
              <p className="text-gray-600">
                Encontre eventos que combinam com seus interesses
              </p>
            </div>

            <div className="bg-white rounded-lg card-shadow p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Certificados
              </h3>
              <p className="text-gray-600">
                Receba certificados pelas suas contribuições
              </p>
            </div>

            <div className="bg-white rounded-lg card-shadow p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Impacto Real
              </h3>
              <p className="text-gray-600">
                Acompanhe o impacto das suas ações voluntárias
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pronto para fazer a diferença?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Junte-se à nossa comunidade e comece a transformar vidas hoje mesmo.
          </p>
          <Link href="/auth" className="btn-primary text-lg py-4 px-8">
            Criar conta gratuita
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold">Revo</h3>
          </div>
          <p className="text-center text-gray-400">
            © 2024 Revo. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}