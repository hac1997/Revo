'use client';

import { useState } from 'react';
import { User, Mail, Lock, Calendar, MapPin, FileText, Check, ArrowRight, Eye, EyeOff, Sparkles, Heart } from 'lucide-react';
import Link from 'next/link';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    birthDate: '',
    bio: '',
    address: '',
    interests: [] as string[],
    rememberMe: false,
    acceptPrivacy: false
  });

  const interestTags = [
    'Causa Animal',
    'Causa Ambiental',
    'Assistência Social',
    'Educação',
    'Saúde',
    'Esportes',
    'Cultura',
    'Tecnologia',
    'Direitos Humanos',
    'Terceira Idade',
    'Crianças',
    'Pessoas com Deficiência'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de autenticação
    console.log('Form submitted:', formData);
  };

  const handleGoogleLogin = () => {
    // Implementar OAuth com Google
    console.log('Google login');
  };

  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl floating-element"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl floating-element" style={{animationDelay: '2s'}}></div>
      
      {/* Back to Home */}
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 z-10">
        <ArrowRight className="w-4 h-4 rotate-180" />
        <span className="font-medium">Voltar ao início</span>
      </Link>

      <div className="w-full max-w-lg relative z-10">
        <div className="glass-effect rounded-3xl p-8 shadow-2xl fade-in">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="relative inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl flex items-center justify-center shadow-xl">
                <User className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              {isLogin ? 'Bem-vindo de volta!' : 'Junte-se a nós!'}
            </h1>
            <p className="text-gray-600 leading-relaxed">
              {isLogin 
                ? 'Entre na sua conta e continue fazendo a diferença' 
                : 'Crie sua conta e comece a transformar vidas hoje mesmo'
              }
            </p>
          </div>

          {/* Google OAuth Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg text-gray-700 font-semibold py-4 px-6 rounded-2xl transition-all duration-300 mb-8 group"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continuar com Google
          </button>

          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500 font-medium">ou continue com email</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Nome completo
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="input-field pl-12"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Data de nascimento
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleInputChange}
                      className="input-field pl-12"
                      required
                    />
                  </div>
                </div>
              </>
            )}

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-field pl-12"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="input-field pl-12 pr-12"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Bio
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      className="input-field pl-12 resize-none"
                      rows={3}
                      placeholder="Conte um pouco sobre você e suas motivações..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Endereço
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="input-field pl-12"
                      placeholder="Cidade, Estado"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700">
                    Seus interesses
                  </label>
                  <p className="text-xs text-gray-500 mb-3">
                    Selecione as causas que mais te motivam (isso nos ajuda a recomendar eventos perfeitos para você)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {interestTags.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleInterest(tag)}
                        className={`tag-button ${
                          formData.interests.includes(tag) ? 'tag-selected' : 'tag-unselected'
                        }`}
                      >
                        {tag}
                        {formData.interests.includes(tag) && (
                          <Check className="w-3 h-3 ml-1" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <label className="flex items-center group cursor-pointer">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-purple-600 border-2 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
                    />
                    <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                      Lembrar de mim neste dispositivo
                    </span>
                  </label>

                  <label className="flex items-start group cursor-pointer">
                    <input
                      type="checkbox"
                      name="acceptPrivacy"
                      checked={formData.acceptPrivacy}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-purple-600 border-2 border-gray-300 rounded focus:ring-purple-500 focus:ring-2 mt-0.5"
                      required
                    />
                    <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                      Aceito os{' '}
                      <a href="#" className="text-purple-600 hover:text-purple-700 font-semibold underline">
                        termos de uso
                      </a>
                      {' '}e a{' '}
                      <a href="#" className="text-purple-600 hover:text-purple-700 font-semibold underline">
                        política de privacidade
                      </a>
                    </span>
                  </label>
                </div>
              </>
            )}

            <button type="submit" className="w-full btn-primary text-lg py-4 shadow-xl">
              {isLogin ? 'Entrar na minha conta' : 'Criar minha conta'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </form>

          {/* Toggle Login/Register */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              {isLogin ? 'Ainda não tem uma conta?' : 'Já tem uma conta?'}
            </p>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="mt-2 text-purple-600 hover:text-purple-700 font-semibold text-lg transition-colors duration-300"
            >
              {isLogin ? 'Cadastre-se gratuitamente' : 'Faça login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}