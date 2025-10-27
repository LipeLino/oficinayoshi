import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner@2.0.3';

export function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  });

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.nome || !formData.email || !formData.mensagem) {
      toast.error('Por favor, preencha os campos obrigatórios.');
      return;
    }

    // Here you would send the form data to your backend
    console.log('Form submitted:', formData);
    toast.success('Mensagem enviada com sucesso! Retornaremos em breve.');
    
    // Reset form
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: '',
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-[#151A1E] py-16 border-b border-[#2A2F35]">
        <div className="container-custom">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#F2F2F2] mb-4"
          >
            Contato
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#C8CDD2] text-lg max-w-2xl"
          >
            Entre em contato conosco. Estamos prontos para transformar sua moto.
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-[#0B0D0E]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <motion.div {...fadeInUp}>
                <h2 className="text-[#F2F2F2] mb-8">Informações de Contato</h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#D72638]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-[#D72638]" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-[#F2F2F2] mb-2">Endereço</h3>
                      <p className="text-[#C8CDD2] text-sm">
                        Rua das Oficinas, 1234<br />
                        Pinheiros, São Paulo - SP<br />
                        CEP 05422-000
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#D72638]/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-[#D72638]" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-[#F2F2F2] mb-2">Telefone</h3>
                      <a
                        href="tel:+5511999999999"
                        className="text-[#C8CDD2] text-sm hover:text-[#D72638] transition-colors"
                      >
                        (11) 99999-9999
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#D72638]/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-[#D72638]" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-[#F2F2F2] mb-2">E-mail</h3>
                      <a
                        href="mailto:contato@oficinayoshi.com.br"
                        className="text-[#C8CDD2] text-sm hover:text-[#D72638] transition-colors"
                      >
                        contato@oficinayoshi.com.br
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#D72638]/10 flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-[#D72638]" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-[#F2F2F2] mb-2">Horário de Atendimento</h3>
                      <p className="text-[#C8CDD2] text-sm">
                        Segunda a Sexta: 9h às 18h<br />
                        Sábado: 9h às 13h<br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="bg-[#151A1E] p-6 rounded-lg border border-[#2A2F35]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle size={24} className="text-[#22C55E]" aria-hidden="true" />
                  <h3 className="text-[#F2F2F2]">WhatsApp</h3>
                </div>
                <p className="text-[#C8CDD2] text-sm mb-4">
                  Prefere conversar pelo WhatsApp? Clique abaixo e fale direto com nossa equipe.
                </p>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 bg-[#22C55E] text-white rounded hover:bg-[#16A34A] transition-colors text-center"
                >
                  Abrir WhatsApp
                </a>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="bg-[#151A1E] p-8 rounded-lg border border-[#2A2F35]">
                <h2 className="text-[#F2F2F2] mb-2">Envie uma Mensagem</h2>
                <p className="text-[#C8CDD2] mb-8">
                  Preencha o formulário abaixo e retornaremos em até 24 horas.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="nome" className="text-[#F2F2F2] mb-2 block">
                        Nome *
                      </Label>
                      <Input
                        id="nome"
                        value={formData.nome}
                        onChange={(e) => updateFormData('nome', e.target.value)}
                        placeholder="Seu nome completo"
                        className="bg-[#0B0D0E] border-[#2A2F35] text-[#F2F2F2]"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-[#F2F2F2] mb-2 block">
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        placeholder="seu@email.com"
                        className="bg-[#0B0D0E] border-[#2A2F35] text-[#F2F2F2]"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="telefone" className="text-[#F2F2F2] mb-2 block">
                        Telefone
                      </Label>
                      <Input
                        id="telefone"
                        type="tel"
                        value={formData.telefone}
                        onChange={(e) => updateFormData('telefone', e.target.value)}
                        placeholder="(11) 99999-9999"
                        className="bg-[#0B0D0E] border-[#2A2F35] text-[#F2F2F2]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="assunto" className="text-[#F2F2F2] mb-2 block">
                        Assunto
                      </Label>
                      <Input
                        id="assunto"
                        value={formData.assunto}
                        onChange={(e) => updateFormData('assunto', e.target.value)}
                        placeholder="Assunto da mensagem"
                        className="bg-[#0B0D0E] border-[#2A2F35] text-[#F2F2F2]"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="mensagem" className="text-[#F2F2F2] mb-2 block">
                      Mensagem *
                    </Label>
                    <Textarea
                      id="mensagem"
                      value={formData.mensagem}
                      onChange={(e) => updateFormData('mensagem', e.target.value)}
                      placeholder="Digite sua mensagem..."
                      rows={6}
                      className="bg-[#0B0D0E] border-[#2A2F35] text-[#F2F2F2]"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[#D72638] text-white rounded hover:bg-[#C11F2E] transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Send size={18} aria-hidden="true" />
                    Enviar mensagem
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-[#151A1E]">
        <div className="container-custom">
          <motion.h2
            {...fadeInUp}
            className="text-[#F2F2F2] mb-8 text-center"
          >
            Como Chegar
          </motion.h2>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="aspect-[21/9] bg-[#2A2F35] rounded-lg overflow-hidden"
          >
            {/* Placeholder for map - in a real application, integrate Google Maps or similar */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-[#D72638] mx-auto mb-4" aria-hidden="true" />
                <p className="text-[#C8CDD2] mb-2">Rua das Oficinas, 1234 - Pinheiros</p>
                <p className="text-[#C8CDD2] text-sm">São Paulo, SP - CEP 05422-000</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-[#C8CDD2] mb-4">
              Estacionamento gratuito disponível no local
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border-2 border-[#D72638] text-[#D72638] rounded hover:bg-[#D72638] hover:text-white transition-all duration-200"
            >
              Ver no Google Maps
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
