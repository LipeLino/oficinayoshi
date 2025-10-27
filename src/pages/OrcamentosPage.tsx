import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Check, Upload, X } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

export function OrcamentosPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1 - Dados da moto
    marca: '',
    modelo: '',
    ano: '',
    cilindrada: '',
    // Step 2 - Estilo desejado
    estilo: '',
    referencia: '',
    // Step 3 - Escopo
    servicos: [] as string[],
    detalhes: '',
    // Step 4 - Orçamento e contato
    orcamentoAlvo: '',
    nome: '',
    email: '',
    telefone: '',
    fotos: [] as string[],
  });

  const totalSteps = 4;

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      servicos: prev.servicos.includes(service)
        ? prev.servicos.filter(s => s !== service)
        : [...prev.servicos, service],
    }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.marca && formData.modelo && formData.ano;
      case 2:
        return formData.estilo;
      case 3:
        return formData.servicos.length > 0;
      case 4:
        return formData.nome && formData.email && formData.telefone;
      default:
        return true;
    }
  };

  const handleSubmit = () => {
    if (canProceed()) {
      setIsSubmitted(true);
      // Here you would send the form data to your backend
      console.log('Form submitted:', formData);
    }
  };

  const nextStep = () => {
    if (canProceed() && currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-[#0B0D0E]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="container-custom max-w-2xl text-center py-16"
        >
          <div className="w-20 h-20 rounded-full bg-[#22C55E]/10 flex items-center justify-center mx-auto mb-8">
            <Check size={40} className="text-[#22C55E]" aria-hidden="true" />
          </div>
          <h1 className="text-[#F2F2F2] mb-6">Orçamento Enviado com Sucesso!</h1>
          <p className="text-[#C8CDD2] text-lg mb-8">
            Obrigado pelo interesse, {formData.nome}! Recebemos sua solicitação de orçamento para {formData.marca} {formData.modelo} no estilo {formData.estilo}.
          </p>
          <p className="text-[#C8CDD2] mb-12">
            Nossa equipe irá analisar as informações e entrar em contato em até 48 horas com uma proposta detalhada.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setCurrentStep(1);
              setFormData({
                marca: '',
                modelo: '',
                ano: '',
                cilindrada: '',
                estilo: '',
                referencia: '',
                servicos: [],
                detalhes: '',
                orcamentoAlvo: '',
                nome: '',
                email: '',
                telefone: '',
                fotos: [],
              });
            }}
            className="px-8 py-3 bg-[#D72638] text-white rounded hover:bg-[#C11F2E] transition-all duration-200"
          >
            Enviar outro orçamento
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-[#0B0D0E]">
      {/* Header */}
      <section className="bg-[#151A1E] py-16 border-b border-[#2A2F35]">
        <div className="container-custom max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#F2F2F2] mb-4"
          >
            Solicitar Orçamento
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#C8CDD2] text-lg"
          >
            Preencha as informações abaixo para receber uma proposta personalizada.
          </motion.p>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="bg-[#151A1E] border-b border-[#2A2F35]">
        <div className="container-custom max-w-4xl py-6">
          <div className="flex items-center justify-between mb-3">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                      currentStep >= step
                        ? 'bg-[#D72638] border-[#D72638] text-white'
                        : 'border-[#2A2F35] text-[#C8CDD2]'
                    }`}
                  >
                    {currentStep > step ? (
                      <Check size={20} aria-label={`Etapa ${step} concluída`} />
                    ) : (
                      <span aria-label={`Etapa ${step}`}>{step}</span>
                    )}
                  </div>
                </div>
                {step < 4 && (
                  <div
                    className={`h-0.5 flex-1 transition-colors ${
                      currentStep > step ? 'bg-[#D72638]' : 'bg-[#2A2F35]'
                    }`}
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-[#C8CDD2]">
            <span>Dados da Moto</span>
            <span className="hidden sm:inline">Estilo</span>
            <span className="hidden sm:inline">Escopo</span>
            <span>Contato</span>
          </div>
        </div>
      </div>

      {/* Form Steps */}
      <section className="py-12">
        <div className="container-custom max-w-2xl">
          <AnimatePresence mode="wait">
            {/* Step 1 - Dados da Moto */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-[#F2F2F2] mb-8">Dados da Moto</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="marca" className="text-[#F2F2F2] mb-2 block">
                      Marca *
                    </Label>
                    <Input
                      id="marca"
                      value={formData.marca}
                      onChange={(e) => updateFormData('marca', e.target.value)}
                      placeholder="Ex: Honda, Yamaha, Harley..."
                      className="bg-[#151A1E] border-[#2A2F35] text-[#F2F2F2]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="modelo" className="text-[#F2F2F2] mb-2 block">
                      Modelo *
                    </Label>
                    <Input
                      id="modelo"
                      value={formData.modelo}
                      onChange={(e) => updateFormData('modelo', e.target.value)}
                      placeholder="Ex: CB 750, Bonneville..."
                      className="bg-[#151A1E] border-[#2A2F35] text-[#F2F2F2]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="ano" className="text-[#F2F2F2] mb-2 block">
                      Ano *
                    </Label>
                    <Input
                      id="ano"
                      type="number"
                      value={formData.ano}
                      onChange={(e) => updateFormData('ano', e.target.value)}
                      placeholder="Ex: 2018"
                      className="bg-[#151A1E] border-[#2A2F35] text-[#F2F2F2]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="cilindrada" className="text-[#F2F2F2] mb-2 block">
                      Cilindrada
                    </Label>
                    <Input
                      id="cilindrada"
                      value={formData.cilindrada}
                      onChange={(e) => updateFormData('cilindrada', e.target.value)}
                      placeholder="Ex: 750cc, 1200cc..."
                      className="bg-[#151A1E] border-[#2A2F35] text-[#F2F2F2]"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2 - Estilo Desejado */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-[#F2F2F2] mb-8">Estilo Desejado</h2>

                <div>
                  <Label htmlFor="estilo" className="text-[#F2F2F2] mb-2 block">
                    Qual estilo você deseja? *
                  </Label>
                  <Select value={formData.estilo} onValueChange={(value) => updateFormData('estilo', value)}>
                    <SelectTrigger id="estilo" className="bg-[#151A1E] border-[#2A2F35] text-[#F2F2F2]">
                      <SelectValue placeholder="Selecione um estilo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Café Racer">Café Racer</SelectItem>
                      <SelectItem value="Bobber">Bobber</SelectItem>
                      <SelectItem value="Scrambler">Scrambler</SelectItem>
                      <SelectItem value="Chopper">Chopper</SelectItem>
                      <SelectItem value="Outro">Outro / Não tenho certeza</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="referencia" className="text-[#F2F2F2] mb-2 block">
                    Referências ou inspirações
                  </Label>
                  <Textarea
                    id="referencia"
                    value={formData.referencia}
                    onChange={(e) => updateFormData('referencia', e.target.value)}
                    placeholder="Descreva motos que você gosta, cores preferidas, estética que busca..."
                    rows={4}
                    className="bg-[#151A1E] border-[#2A2F35] text-[#F2F2F2]"
                  />
                  <p className="text-[#C8CDD2] text-sm mt-2">
                    Compartilhe links de Pinterest, Instagram ou descreva suas referências.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Step 3 - Escopo */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-[#F2F2F2] mb-8">Escopo do Projeto</h2>

                <div>
                  <Label className="text-[#F2F2F2] mb-4 block">
                    Quais serviços você precisa? *
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Pintura customizada',
                      'Suspensão',
                      'Sistema elétrico',
                      'Escape personalizado',
                      'Guidão e controles',
                      'Banco customizado',
                      'Rodas e pneus',
                      'Chassi e estrutura',
                      'Motor (preparação)',
                      'Iluminação',
                    ].map((service) => (
                      <button
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`px-4 py-3 rounded text-sm text-left transition-all border ${
                          formData.servicos.includes(service)
                            ? 'bg-[#D72638] border-[#D72638] text-white'
                            : 'bg-[#151A1E] border-[#2A2F35] text-[#C8CDD2] hover:border-[#D72638]'
                        }`}
                        aria-pressed={formData.servicos.includes(service)}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="detalhes" className="text-[#F2F2F2] mb-2 block">
                    Detalhes adicionais
                  </Label>
                  <Textarea
                    id="detalhes"
                    value={formData.detalhes}
                    onChange={(e) => updateFormData('detalhes', e.target.value)}
                    placeholder="Descreva com mais detalhes o que você imagina para sua moto..."
                    rows={4}
                    className="bg-[#151A1E] border-[#2A2F35] text-[#F2F2F2]"
                  />
                </div>
              </motion.div>
            )}

            {/* Step 4 - Orçamento e Contato */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-[#F2F2F2] mb-8">Orçamento e Contato</h2>

                <div>
                  <Label htmlFor="orcamentoAlvo" className="text-[#F2F2F2] mb-2 block">
                    Orçamento alvo (opcional)
                  </Label>
                  <Input
                    id="orcamentoAlvo"
                    value={formData.orcamentoAlvo}
                    onChange={(e) => updateFormData('orcamentoAlvo', e.target.value)}
                    placeholder="Ex: R$ 15.000 a R$ 25.000"
                    className="bg-[#151A1E] border-[#2A2F35] text-[#F2F2F2]"
                  />
                  <p className="text-[#C8CDD2] text-sm mt-2">
                    Nos ajuda a desenvolver uma proposta adequada ao seu orçamento.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <Label htmlFor="nome" className="text-[#F2F2F2] mb-2 block">
                      Nome completo *
                    </Label>
                    <Input
                      id="nome"
                      value={formData.nome}
                      onChange={(e) => updateFormData('nome', e.target.value)}
                      placeholder="Seu nome"
                      className="bg-[#151A1E] border-[#2A2F35] text-[#F2F2F2]"
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
                      className="bg-[#151A1E] border-[#2A2F35] text-[#F2F2F2]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="telefone" className="text-[#F2F2F2] mb-2 block">
                      Telefone / WhatsApp *
                    </Label>
                    <Input
                      id="telefone"
                      type="tel"
                      value={formData.telefone}
                      onChange={(e) => updateFormData('telefone', e.target.value)}
                      placeholder="(11) 99999-9999"
                      className="bg-[#151A1E] border-[#2A2F35] text-[#F2F2F2]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-[#F2F2F2] mb-2 block">
                    Fotos da moto (opcional)
                  </Label>
                  <div className="border-2 border-dashed border-[#2A2F35] rounded-lg p-8 text-center hover:border-[#D72638] transition-colors cursor-pointer">
                    <Upload size={40} className="mx-auto mb-4 text-[#C8CDD2]" aria-hidden="true" />
                    <p className="text-[#C8CDD2] mb-2">
                      Arraste fotos aqui ou clique para selecionar
                    </p>
                    <p className="text-[#C8CDD2] text-sm">
                      Fotos da sua moto nos ajudam a fazer uma avaliação mais precisa
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12 pt-6 border-t border-[#2A2F35]">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-6 py-3 flex items-center gap-2 text-[#C8CDD2] hover:text-[#F2F2F2] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={20} aria-hidden="true" />
              Voltar
            </button>

            {currentStep < totalSteps ? (
              <button
                onClick={nextStep}
                disabled={!canProceed()}
                className="px-6 py-3 bg-[#D72638] text-white rounded hover:bg-[#C11F2E] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
              >
                Próximo
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed()}
                className="px-6 py-3 bg-[#D72638] text-white rounded hover:bg-[#C11F2E] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
              >
                Enviar orçamento
                <Check size={20} aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
