import React, { useState } from 'react';
import { User, FileText, AlertCircle, Home, LogOut } from 'lucide-react';

export default function PortalSIGA() {
  const [currentPage, setCurrentPage] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e8f5e9 0%, #ffffff 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    header: {
      background: '#4CAF50',
      color: 'white',
      padding: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    },
    headerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '28px',
      fontWeight: 'bold'
    },
    nav: {
      display: 'flex',
      gap: '20px',
      alignItems: 'center'
    },
    navButton: {
      background: 'transparent',
      color: 'white',
      border: '2px solid white',
      padding: '8px 16px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      transition: 'all 0.3s'
    },
    content: {
      maxWidth: '600px',
      margin: '60px auto',
      padding: '20px'
    },
    card: {
      background: 'white',
      borderRadius: '12px',
      padding: '40px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    },
    title: {
      color: '#2E7D32',
      fontSize: '32px',
      marginBottom: '10px',
      textAlign: 'center'
    },
    subtitle: {
      color: '#666',
      textAlign: 'center',
      marginBottom: '30px'
    },
    inputGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      color: '#2E7D32',
      fontWeight: 'bold',
      marginBottom: '8px',
      fontSize: '16px'
    },
    input: {
      width: '100%',
      padding: '12px',
      border: '2px solid #ddd',
      borderRadius: '8px',
      fontSize: '16px',
      boxSizing: 'border-box',
      transition: 'border 0.3s'
    },
    button: {
      width: '100%',
      padding: '15px',
      background: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '18px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background 0.3s',
      marginTop: '10px'
    },
    menuGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px',
      marginTop: '30px'
    },
    menuCard: {
      background: '#f5f5f5',
      padding: '30px',
      borderRadius: '10px',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s',
      border: '2px solid transparent'
    },
    gradeCard: {
      background: '#f5f5f5',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '15px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    grade: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#4CAF50'
    },
    errorBadge: {
      background: '#f44336',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: 'bold'
    },
    alert: {
      background: '#fff3cd',
      border: '2px solid #ffc107',
      borderRadius: '8px',
      padding: '20px',
      marginBottom: '20px'
    }
  };

  const LoginPage = () => (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.card}>
          <h1 style={styles.title}>Portal SIGA</h1>
          <p style={styles.subtitle}>Sistema Integrado de Gestão Acadêmica</p>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>Usuário</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu usuário"
              style={styles.input}
              onFocus={(e) => e.target.style.borderColor = '#4CAF50'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              style={styles.input}
              onFocus={(e) => e.target.style.borderColor = '#4CAF50'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>

          <button
            style={styles.button}
            onClick={() => {
              if (username && password) {
                setCurrentPage('menu');
              }
            }}
            onMouseOver={(e) => e.target.style.background = '#45a049'}
            onMouseOut={(e) => e.target.style.background = '#4CAF50'}
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );

  const MenuPage = () => (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>Portal SIGA</div>
          <div style={styles.nav}>
            <span>Bem-vindo, Francisco Nobre</span>
            <button
              style={styles.navButton}
              onClick={() => {
                setCurrentPage('login');
                setUsername('');
                setPassword('');
              }}
              onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
              onMouseOut={(e) => e.target.style.background = 'transparent'}
            >
              <LogOut size={18} />
              Sair
            </button>
          </div>
        </div>
      </div>

      <div style={styles.content}>
        <h1 style={styles.title}>Menu Principal</h1>
        <p style={styles.subtitle}>Selecione uma opção</p>

        <div style={styles.menuGrid}>
          <div
            style={styles.menuCard}
            onClick={() => setCurrentPage('notas')}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#4CAF50';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#f5f5f5';
              e.currentTarget.style.color = 'inherit';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <FileText size={48} style={{ margin: '0 auto 15px' }} />
            <h3>Rendimento Acadêmico</h3>
            <p style={{ fontSize: '14px', marginTop: '10px' }}>Consultar notas e histórico</p>
          </div>

          <div
            style={styles.menuCard}
            onClick={() => setCurrentPage('taxas')}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#4CAF50';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#f5f5f5';
              e.currentTarget.style.color = 'inherit';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <FileText size={48} style={{ margin: '0 auto 15px' }} />
            <h3>Taxas de Serviços</h3>
            <p style={{ fontSize: '14px', marginTop: '10px' }}>Requerimentos e solicitações</p>
          </div>
        </div>
      </div>
    </div>
  );

  const NotasPage = () => (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>Portal SIGA</div>
          <div style={styles.nav}>
            <button
              style={styles.navButton}
              onClick={() => setCurrentPage('menu')}
              onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
              onMouseOut={(e) => e.target.style.background = 'transparent'}
            >
              <Home size={18} />
              Menu
            </button>
          </div>
        </div>
      </div>

      <div style={styles.content}>
        <h1 style={styles.title}>Rendimento Acadêmico</h1>
        <p style={styles.subtitle}>Semestre 2024/2</p>

        <div style={styles.gradeCard}>
          <div>
            <h3 style={{ margin: '0 0 5px 0', color: '#2E7D32' }}>Programação I</h3>
            <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>60 horas</p>
          </div>
          <span style={styles.grade}>16.5</span>
        </div>

        <div style={styles.gradeCard}>
          <div>
            <h3 style={{ margin: '0 0 5px 0', color: '#2E7D32' }}>Matemática Discreta</h3>
            <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>60 horas</p>
          </div>
          <span style={styles.grade}>15.0</span>
        </div>

        <div style={styles.gradeCard}>
          <div>
            <h3 style={{ margin: '0 0 5px 0', color: '#f44336' }}>Métodos de Estudo</h3>
            <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>30 horas</p>
          </div>
          <span style={styles.errorBadge}>Nota não encontrada</span>
        </div>

        <div style={styles.gradeCard}>
          <div>
            <h3 style={{ margin: '0 0 5px 0', color: '#2E7D32' }}>Inglês Técnico</h3>
            <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>30 horas</p>
          </div>
          <span style={styles.grade}>17.0</span>
        </div>

        <button
          style={styles.button}
          onClick={() => setCurrentPage('taxas')}
          onMouseOver={(e) => e.target.style.background = '#45a049'}
          onMouseOut={(e) => e.target.style.background = '#4CAF50'}
        >
          Solicitar Correção de Nota
        </button>
      </div>
    </div>
  );

  const TaxasPage = () => (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>Portal SIGA</div>
          <div style={styles.nav}>
            <button
              style={styles.navButton}
              onClick={() => setCurrentPage('menu')}
              onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
              onMouseOut={(e) => e.target.style.background = 'transparent'}
            >
              <Home size={18} />
              Menu
            </button>
          </div>
        </div>
      </div>

      <div style={styles.content}>
        <h1 style={styles.title}>Taxas de Serviços Acadêmicos</h1>
        <p style={styles.subtitle}>Requerimento de Correção de Nota</p>

        <div style={styles.card}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Disciplina</label>
            <input
              type="text"
              defaultValue="Métodos de Estudo"
              style={styles.input}
              onFocus={(e) => e.target.style.borderColor = '#4CAF50'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Motivo da Solicitação</label>
            <textarea
              style={{ ...styles.input, minHeight: '100px', resize: 'vertical' }}
              placeholder="Descreva o motivo da solicitação..."
              onFocus={(e) => e.target.style.borderColor = '#4CAF50'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Professor Responsável</label>
            <input
              type="text"
              style={styles.input}
              placeholder="Nome do professor"
              onFocus={(e) => e.target.style.borderColor = '#4CAF50'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>

          <button
            style={styles.button}
            onClick={() => setCurrentPage('secretaria')}
            onMouseOver={(e) => e.target.style.background = '#45a049'}
            onMouseOut={(e) => e.target.style.background = '#4CAF50'}
          >
            Gerar Requerimento
          </button>
        </div>
      </div>
    </div>
  );

  const SecretariaPage = () => (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>Portal SIGA</div>
          <div style={styles.nav}>
            <button
              style={styles.navButton}
              onClick={() => setCurrentPage('menu')}
              onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
              onMouseOut={(e) => e.target.style.background = 'transparent'}
            >
              <Home size={18} />
              Menu
            </button>
          </div>
        </div>
      </div>

      <div style={styles.content}>
        <h1 style={styles.title}>Requerimento Gerado</h1>
        
        <div style={styles.alert}>
          <h3 style={{ margin: '0 0 10px 0', color: '#856404' }}>
            <AlertCircle size={24} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            Atenção!
          </h3>
          <p style={{ margin: 0, color: '#856404' }}>
            Você precisa levar este requerimento impresso à secretaria acadêmica para formalizar o pedido.
          </p>
        </div>

        <div style={styles.card}>
          <h3 style={{ color: '#2E7D32', marginBottom: '20px' }}>Dados do Requerimento</h3>
          <p><strong>Protocolo:</strong> 2024-REQ-{Math.floor(Math.random() * 10000)}</p>
          <p><strong>Estudante:</strong> Francisco Nobre</p>
          <p><strong>Disciplina:</strong> Métodos de Estudo</p>
          <p><strong>Tipo:</strong> Correção de Nota</p>
          <p><strong>Data:</strong> {new Date().toLocaleDateString('pt-BR')}</p>
        </div>

        <button
          style={styles.button}
          onClick={() => setCurrentPage('erro404')}
          onMouseOver={(e) => e.target.style.background = '#45a049'}
          onMouseOut={(e) => e.target.style.background = '#4CAF50'}
        >
          Verificar Status do Pedido
        </button>
      </div>
    </div>
  );

  const Erro404Page = () => (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>Portal SIGA</div>
          <div style={styles.nav}>
            <button
              style={styles.navButton}
              onClick={() => setCurrentPage('menu')}
              onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
              onMouseOut={(e) => e.target.style.background = 'transparent'}
            >
              <Home size={18} />
              Menu
            </button>
          </div>
        </div>
      </div>

      <div style={styles.content}>
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <AlertCircle size={80} color="#f44336" style={{ marginBottom: '20px' }} />
          <h1 style={{ ...styles.title, color: '#f44336', fontSize: '48px' }}>404</h1>
          <h2 style={{ color: '#666', marginBottom: '20px' }}>Nota Não Encontrada</h2>
          <p style={{ color: '#666', fontSize: '18px', marginBottom: '30px' }}>
            A nota da disciplina "Métodos de Estudo" não foi encontrada no sistema.
          </p>
          
          <button
            style={{ ...styles.button, maxWidth: '300px', margin: '0 auto' }}
            onClick={() => setCurrentPage('planejamento')}
            onMouseOver={(e) => e.target.style.background = '#45a049'}
            onMouseOut={(e) => e.target.style.background = '#4CAF50'}
          >
            Ver Opções
          </button>
        </div>
      </div>
    </div>
  );

  const PlanejamentoPage = () => (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>Portal SIGA</div>
          <div style={styles.nav}>
            <button
              style={styles.navButton}
              onClick={() => setCurrentPage('menu')}
              onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
              onMouseOut={(e) => e.target.style.background = 'transparent'}
            >
              <Home size={18} />
              Menu
            </button>
          </div>
        </div>
      </div>

      <div style={styles.content}>
        <h1 style={styles.title}>Planejamento Acadêmico</h1>
        <p style={styles.subtitle}>Próximo Semestre 2025/1</p>

        <div style={styles.card}>
          <h3 style={{ color: '#2E7D32', marginBottom: '20px' }}>Ações Necessárias</h3>
          
          <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px', marginBottom: '15px' }}>
            <h4 style={{ color: '#2E7D32', margin: '0 0 10px 0' }}>1. Repetir Disciplina</h4>
            <p style={{ margin: 0, color: '#666' }}>
              Você precisará cursar novamente "Métodos de Estudo" no próximo semestre.
            </p>
          </div>

          <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px', marginBottom: '15px' }}>
            <h4 style={{ color: '#2E7D32', margin: '0 0 10px 0' }}>2. Matrícula</h4>
            <p style={{ margin: 0, color: '#666' }}>
              Período de matrícula: 15/01/2025 a 30/01/2025
            </p>
          </div>

          <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
            <h4 style={{ color: '#2E7D32', margin: '0 0 10px 0' }}>3. Planejamento de Estudos</h4>
            <p style={{ margin: 0, color: '#666' }}>
              Organize-se melhor para obter um bom desempenho na próxima tentativa.
            </p>
          </div>

          <div style={{ 
            background: '#e8f5e9', 
            padding: '20px', 
            borderRadius: '8px',
            border: '2px solid #4CAF50'
          }}>
            <p style={{ margin: 0, color: '#2E7D32', fontWeight: 'bold', fontSize: '16px' }}>
              💪 Não desanime! Use esta experiência como motivação para se preparar melhor.
            </p>
          </div>
        </div>

        <button
          style={styles.button}
          onClick={() => {
            setCurrentPage('login');
            setUsername('');
            setPassword('');
          }}
          onMouseOver={(e) => e.target.style.background = '#45a049'}
          onMouseOut={(e) => e.target.style.background = '#4CAF50'}
        >
          Finalizar Sessão
        </button>
      </div>
    </div>
  );

  return (
    <>
      {currentPage === 'login' && <LoginPage />}
      {currentPage === 'menu' && <MenuPage />}
      {currentPage === 'notas' && <NotasPage />}
      {currentPage === 'taxas' && <TaxasPage />}
      {currentPage === 'secretaria' && <SecretariaPage />}
      {currentPage === 'erro404' && <Erro404Page />}
      {currentPage === 'planejamento' && <PlanejamentoPage />}
    </>
  );
}