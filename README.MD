#  Sistema de Ordem de Serviço (SOS)

![Status do Projeto](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=for-the-badge&logo=github)
![Licença](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

> **Solução completa para assistências técnicas e prestadores de serviço gerenciarem consertos, orçamentos e estoque com eficiência.**

---

##  Sobre o Projeto

O **SOS** é um sistema focado na agilidade do fluxo de trabalho de assistências técnicas (celulares, informática, oficinas, etc). Ele cobre desde a entrada do equipamento com fotos até o faturamento final e controle de peças.

###  Público Alvo
*  Prestadores de serviços
---

##  Funcionalidades Principais

| Módulo | Descrição | Status |
| :--- | :--- | :---: |
| **Abertura de OS** | Cadastro de cliente, equipamento, fotos e geração de recibo. | ... |
| **Orçamentos** | Listagem de serviços/peças e envio direto via WhatsApp. | ... |
| **Execução** | Workflow de status (Aguardando peça, Em execução, Pronto). | ... |
| **Estoque** | Controle de entrada/saída de peças com alertas de baixo estoque. | ... |
| **Financeiro** | Gestão de faturamento por dia/mês e formas de pagamento. | ... |
| **Relatórios** | Dashboards de produtividade e lucratividade. | ... |

---

##  Workflow da Ordem de Serviço

O sistema segue um fluxo inteligente para garantir que nenhum serviço seja esquecido:

1. **Aguardando Orçamento** -> 2. **Orçamento Enviado** -> 3. **Aprovado** -> 4. **Em Execução** -> 5. **Pronto** -> 6. **Entregue**

---

##  Estrutura do Banco de Dados

O projeto utiliza uma estrutura relacional sólida para garantir a integridade dos dados:

* **Clientes:** Dados cadastrais e histórico.
* **Ordens de Serviço:** O coração do sistema, ligando clientes e técnicos.
* **Itens/Peças:** Controle granular do que foi usado em cada serviço.
* **Financeiro:** Registro de entradas e métodos de pagamento.

---

##  Desenvolvedor

**Thiago**
* GitHub: [@tthiagof](https://github.com/tthiagof)
* LinkedIn: [Thiago Ferreira](https://www.linkedin.com/in/thiago-ferreira-1926a4301/)

---
*Este projeto é parte do meu portfólio de soluções full-stack.*
