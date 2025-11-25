import express from "express";

const host = "0.0.0.0";
const porta = 3000;
var listaUsuarios = [];
const server = express();

server.use(express.urlencoded({extended: true}));



server.get("/", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Menu</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body>

  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#">Menu</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link active" href="/">Início</a></li>
          <li class="nav-item"><a class="nav-link" href="/cadastro">Entra Em Contato</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="py-5 text-center bg-light">
    <div class="container">
      <h1 class="fw-bold">Bem-vindo à Minha Empresa</h1>
      <p class="lead mb-4">Soluções modernas e eficientes para o seu negócio.</p>
      <a href="#" class="btn btn-primary btn-lg">Saiba Mais</a>
    </div>
  </section>

  <!-- Cards Section -->
  <section class="py-5">
    <div class="container">
      <h2 class="text-center mb-4">Nossos Serviços</h2>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="Serviço 1">
            <div class="card-body">
              <h5 class="card-title">Consultoria</h5>
              <p class="card-text">Análise estratégica e suporte para o crescimento da sua empresa.</p>
            </div>
            <div class="card-footer text-center">
              <a href="#" class="btn btn-outline-primary">Ver mais</a>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="Serviço 2">
            <div class="card-body">
              <h5 class="card-title">Desenvolvimento</h5>
              <p class="card-text">Criação de sites, sistemas e aplicativos personalizados.</p>
            </div>
            <div class="card-footer text-center">
              <a href="#" class="btn btn-outline-primary">Ver mais</a>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="Serviço 3">
            <div class="card-body">
              <h5 class="card-title">Suporte</h5>
              <p class="card-text">Atendimento rápido e eficiente para manter seu negócio ativo.</p>
            </div>
            <div class="card-footer text-center">
              <a href="#" class="btn btn-outline-primary">Ver mais</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</body>
</html>
    `);
});
server.get("/cadastro", (req, res) =>{
    let conteudo = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Lista de Competidores</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>

<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <a class="navbar-brand fw-bold" href="/">Cadastra Pedido</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="/">Início</a></li>
          <li class="nav-item"><a class="nav-link active" href="#">Entrar Em Contato</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <section class="py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="card shadow-sm">
            <div class="card-body">
              <h2 class="text-center mb-4">Formulário de Contato</h2>

                <form action="/adicionarUsuario" method="POST">
                  <div class="mb-3">
                    <label class="form-label">CNPJ</label>
                    <input type="text" class="form-control" name="cnpj" placeholder="00.000.000/0000-00">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Razão Social</label>
                    <input type="text" class="form-control" name="razaoSocial" placeholder="Ex: Moraes & Irmãos LTDA">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Nome Fantasia</label>
                    <input type="text" class="form-control" name="nomeFantasia" placeholder="Ex: Loja do 1,99">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Endereço</label>
                    <input type="text" class="form-control" name="endereco">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Cidade</label>
                    <input type="text" class="form-control" name="cidade">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">UF</label>
                    <input type="text" class="form-control" name="uf" maxlength="2">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">CEP</label>
                    <input type="text" class="form-control" name="cep" placeholder="00000-000">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">E-mail</label>
                    <input type="email" class="form-control" name="email">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Telefone</label>
                    <input type="tel" class="form-control" name="telefone" placeholder="(00) 00000-0000">
                  </div>
                  <div class="d-grid">
                    <button type="submit" class="btn btn-primary btn-lg">Cadastrar</button>
                  </div>
                </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>
    `;

    res.send(conteudo);
});



server.post("/adicionarUsuario", (req, res) => {
    const cnpj = req.body.cnpj;
    const razaos = req.body.razaoSocial;
    const nomef = req.body.nomeFantasia;
    const endereco = req.body.endereco;
    const cidade = req.body.cidade;
    const uf = req.body.uf;
    const cep = req.body.cep;
    const email = req.body.email;
    const telefone = req.body.telefone;


    if (cnpj && razaos && nomef && endereco && cidade && uf && cep && email && telefone) {
        listaUsuarios.push({ cnpj, razaos, nomef, endereco, cidade, uf, cep, email, telefone });
    }

      let cadastro = `
                  <!DOCTYPE html>
                  <html>
                  <head>
                    <meta charset="UTF-8">
                    <title>Cadastro</title>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
                  </head>
                  <body>

                  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div class="container">
                      <a class="navbar-brand fw-bold" href="/">Cadastra Pedido</a>
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div id="navbarNav" class="collapse navbar-collapse">
                        <ul class="navbar-nav ms-auto">
                          <li class="nav-item"><a class="nav-link" href="/">Início</a></li>
                          <li class="nav-item"><a class="nav-link active" href="#">Entrar Em Contato</a></li>
                        </ul>
                      </div>
                    </div>
                  </nav>

                  <section class="py-5">
                    <div class="container">
                      <div class="row justify-content-center">
                        <div class="col-lg-6">
                          <div class="card shadow-sm">
                            <div class="card-body">
                              <h2 class="text-center mb-4">Formulário de Contato</h2>

                              <form action="/adicionarusuario" method="POST">

                              <div class="mb-3">
                                <label class="form-label">CNPJ</label>
                                <input type="text" class="form-control" name="cnpj" placeholder="00.000.000/0000-00" value="${cnpj ?? ""}">
                              </div>
                  `;

                    if (!cnpj) {
                      cadastro += `
                              <div>
                                <p class="text-danger">Por favor informe o CNPJ</p>
                              </div>
                  `;
                    }

                    cadastro += `
                              <div class="mb-3">
                                <label class="form-label">Razão Social</label>
                                <input type="text" class="form-control" name="razaoSocial" placeholder="Ex: Moraes & Irmãos LTDA" value="${razaos ?? ""}">
                              </div>
                  `;

                    if (!razaos) {
                      cadastro += `
                              <div>
                                <p class="text-danger">Por favor informe a Razão Social</p>
                              </div>
                  `;
                    }

                    cadastro += `
                              <div class="mb-3">
                                <label class="form-label">Nome Fantasia</label>
                                <input type="text" class="form-control" name="nomeFantasia" placeholder="Ex: Loja do 1,99" value="${nomef ?? ""}">
                              </div>
                  `;

                    if (!nomef) {
                      cadastro += `
                              <div>
                                <p class="text-danger">Por favor informe o Nome da Empresa</p>
                              </div>
                  `;
                    }

                    cadastro += `
                              <div class="mb-3">
                                <label class="form-label">Endereço</label>
                                <input type="text" class="form-control" name="endereco" value="${endereco ?? ""}">
                              </div>
                  `;

                    if (!endereco) {
                      cadastro += `
                              <div>
                                <p class="text-danger">Por favor informe o Endereço</p>
                              </div>
                  `;
                    }

                    cadastro += `
                              <div class="mb-3">
                                <label class="form-label">Cidade</label>
                                <input type="text" class="form-control" name="cidade" value="${cidade ?? ""}">
                              </div>
                  `;

                    if (!cidade) {
                      cadastro += `
                              <div>
                                <p class="text-danger">Por favor informe a Cidade</p>
                              </div>
                  `;
                    }

                    cadastro += `
                              <div class="mb-3">
                                <label class="form-label">UF</label>
                                <input type="text" class="form-control" name="uf" maxlength="2" value="${uf ?? ""}">
                              </div>
                  `;

                    if (!uf) {
                      cadastro += `
                              <div>
                                <p class="text-danger">Por favor informe o UF</p>
                              </div>
                  `;
                    }

                    cadastro += `
                              <div class="mb-3">
                                <label class="form-label">CEP</label>
                                <input type="text" class="form-control" name="cep" placeholder="00000-000" value="${cep ?? ""}">
                              </div>
                  `;

                    if (!cep) {
                      cadastro += `
                              <div>
                                <p class="text-danger">Por favor informe o CEP</p>
                              </div>
                  `;
                    }

                    cadastro += `
                              <div class="mb-3">
                                <label class="form-label">E-mail</label>
                                <input type="email" class="form-control" name="email" value="${email ?? ""}">
                              </div>
                  `;

                    if (!email) {
                      cadastro += `
                              <div>
                                <p class="text-danger">Por favor informe o E-mail</p>
                              </div>
                  `;
                    }

                    cadastro += `
                              <div class="mb-3">
                                <label class="form-label">Telefone</label>
                                <input type="tel" class="form-control" name="telefone" placeholder="(00) 00000-0000" value="${telefone ?? ""}">
                              </div>
                  `;

                    if (!telefone) {
                      cadastro += `
                              <div>
                                <p class="text-danger">Por favor informe o Telefone</p>
                              </div>
                  `;
                    }

                    cadastro += `
                              <div class="d-grid">
                                <button type="submit" class="btn btn-primary btn-lg">Cadastrar</button>
                              </div>

                              </form>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

                  </body>
                  </html>
                  `;

                res.send(cadastro);
});



server.get("/listarUsuarios", (req, res) =>{
    let conteudo = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Lista de Fornecedores</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>

<body>

    <div class="container mt-5">
        <h1>
            Fornecedores
        </h1>

        <div class="table-responsive border rounded shadow">
            <table class="table table-dark table-striped table-bordered table-hover text-center">
                <thead>
                        <tr>
                        <th>CNPJ</th>
                        <th>Razão Social</th>
                        <th>Nome Fantasia</th>
                        <th>Endereço</th>
                        <th>Cidade</th>
                        <th>UF</th>
                        <th>CEP</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        </tr>
                </thead>
                <tbody>
    `;

    for (let i = 0; i < listaUsuarios.length; i++) {
        conteudo += `
                    <tr>
                    <td>${listaUsuarios[i].cnpj}</td>
                    <td>${listaUsuarios[i].razaos}</td>
                    <td>${listaUsuarios[i].nomef}</td>
                    <td>${listaUsuarios[i].endereco}</td>
                    <td>${listaUsuarios[i].cidade}</td>
                    <td>${listaUsuarios[i].uf}</td>
                    <td>${listaUsuarios[i].cep}</td>
                    <td>${listaUsuarios[i].email}</td>
                    <td>${listaUsuarios[i].telefone}</td>
                    </tr>
        `;
    }

    conteudo += `
                </tbody>
            </table>
        </div>

        <div class="text-center mt-4">
            <a class="btn btn-danger btn-lg shadow" href="/">Voltar</a>
        </div>

    </div>

<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>
    `;

    res.send(conteudo);
});

server.listen(porta, host, () =>{
    console.log(`Servidor rodando em http://${host}:${porta}`)
    });