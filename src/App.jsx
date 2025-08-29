import React from 'react';
import './styles.css';
import foto from './IMG_20250519_101817_765.png'
import {  Code, Briefcase, Mail, Github, Linkedin, TabletSmartphone} from 'lucide-react';

// CONFIGURAÇÕES FÁCEIS DE EDITAR
const nome = "Kevin Sun";
const profissao = "Desenvolvedor Full Stack";
const fotoPerfil = foto;
const sobreTexto = "Sou desenvolvedor focado em criar soluções digitais eficientes e bem estruturadas. Tenho experiência em diversas tecnologias e estou sempre em busca de evolução, entregando projetos com qualidade, desempenho e atenção aos detalhes.";
const habilidades = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "React Native",
  "Node.js",
  "TypeScript",
  "MySQL",
  "Postgres",
  "Git",
];
const servicos = [
  { nome: "Desenvolvimento Web", descricao: "Sites e sistemas web responsivos, rápidos e otimizados para oferecer a melhor experiência ao usuário.", icone: <Code size={48} /> },
  { nome: "APIs e Backend", descricao: "APIs seguras e escaláveis, com arquitetura bem estruturada para integrar aplicações e serviços.", icone: <Briefcase size={48} /> },
  { nome: "Aplicativos Mobile", descricao: "Aplicativos mobile intuitivos e funcionais, desenvolvidos para Android.", icone: <TabletSmartphone size={48} /> },
];
const projetos = [
  {
    nome: "SGMC – Sistema de Gestão e Monitoramento de Contentores",
    descricao: "Plataforma web para gestão portuária, que centraliza o cadastro e rastreamento de contentores, controle de movimentações e alocação em zonas de armazenagem",
    tecnologias: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/seu-usuario/projeto1",
    demo: "https://seu-projeto1-demo.com",
    estado: "EM ANDAMENTO"
  },
  {
    nome: "ClimaSearch",
    descricao: "Aplicação web para consultar o clima em tempo real de qualquer cidade, usando API pública, desenvolvida com React e CSS para uma interface simples e prática.",
    tecnologias: ["React", "CSS"],
    github: "https://github.com/seu-usuario/projeto2",
    demo: "https://seu-projeto2-demo.com",
    estado: "COMPLETO"
  },
];
const contato = [
  { plataforma: "Email", link: "mailto:kevinsalvadordeanianos@gmail.com", icone: <Mail size={24} /> },
  { plataforma: "GitHub", link: "https://github.com/Via-KevinSun", icone: <Github size={24} /> },
  { plataforma: "LinkedIn", link: "https://www.linkedin.com/in/kevin-sun-589078301/", icone: <Linkedin size={24} /> },
];

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="container_perfil">
        <div className="info_perfil">
          <img src={fotoPerfil} alt="Foto de Perfil" className="foto_perfil" />
          <h1 className="nome">{nome}</h1>
          <p className="profissao">{profissao}</p>
        </div>
        <nav className="container_pages">
          {['sobre', 'habilidades', 'servicos', 'projetos', 'contato'].map((pagina) => (
            <a
              key={pagina}
              href={`#${pagina}`}
              className="botao_nav"
            >
              {pagina.charAt(0).toUpperCase() + pagina.slice(1)}
            </a>
          ))}
        </nav>
      </header>

      {/* Conteúdo Principal */}
      <main className="conteudo_principal">
        {/* Seção Sobre */}
        <section id="sobre" className="container_sobre">
          <h2 className="titulo_secao">Sobre Mim</h2>
          <p className="texto_sobre">{sobreTexto}</p>
        </section>

        {/* Seção Habilidades */}
        <section id="habilidades" className="container_habilidades">
          <h2 className="titulo_secao">Habilidades</h2>
          <div className="lista_habilidades">
            {habilidades.map((habilidade, index) => (
              <div key={index} className="card_habilidade">
                <h3 className="titulo_habilidade">{habilidade}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Seção Serviços */}
        <section id="servicos" className="container_servicos">
          <h2 className="titulo_secao">Serviços</h2>
          <div className="lista_servicos">
            {servicos.map((servico, index) => (
              <div key={index} className="card_servico">
                <div className="icone_servico">{servico.icone}</div>
                <h3 className="titulo_servico">{servico.nome}</h3>
                <p className="descricao_servico">{servico.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Seção Projetos */}
        <section id="projetos" className="container_projetos">
          <h2 className="titulo_secao">Projetos</h2>
          <div className="lista_projetos">
            {projetos.map((projeto, index) => (
              <div key={index} className="card_projeto">
                <h3 className="nome_projeto">{projeto.nome}</h3>
                <p className="descricao_projeto">{projeto.descricao}</p>
                <div className="tecnologias">
                  {projeto.tecnologias.map((tec, i) => (
                    <span key={i} className="tag_tecnologia">{tec}</span>
                  ))}
                </div>
                <div className="links_projeto">
                  <a href={projeto.github} className="link_projeto" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={projeto.demo} className="link_projeto" target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                  <a className="link_projeto">
                    {projeto.estado}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seção Contato */}
        <section id="contato" className="container_contato">
          <h2 className="titulo_secao">Contato</h2>
          <div className="info_contato">
            {contato.map((item, index) => (
              <div key={index} className="item_contato">
                <span className="icone_contato">{item.icone}</span>
                <a href={item.link} className="link_contato" target="_blank" rel="noopener noreferrer">
                  {item.plataforma}
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;