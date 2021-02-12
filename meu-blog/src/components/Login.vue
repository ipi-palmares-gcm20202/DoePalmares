<template>
    <div class="login-form card">
        

        <p class="blog-title">Bem vindo(a) ao Doe Palmares! Digite as suas credenciais.</p>

        <div v-if="exibirMensagemErro" class="alert alert-danger">
            <a><strong>Erro!</strong> E-mail e/ou senha inválido(s)</a>.
        </div>

        <div class="row">
            <form class="col s12">
              <div class="row no-margin-bottom">
                <div class="input-field col s12">
                  <input id="email" type="email" class="validate" v-model="email">
                  <label for="email">E-mail</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input id="password" type="password" class="validate" v-model="senha">
                  <label for="password">Password</label>
                </div>
              </div>
              <div class="row">
                <a v-on:click="entrar" class="waves-effect waves-light btn btn-large enter botao-login">ENTRAR</a>
              </div>
             
              <div class="row">
                  <a v-on:click="irParaCadastro" class="waves-effect waves-light btn btn-large botao-login botao-novo-usuario">CADASTRE-SE AGORA</a>
              </div>
            </form>
          </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      exibirMensagemErro: false,
      email: '',
      senha: ''
    }
  },
  methods: {
    irParaCadastro() {
      this.$router.push({ name: 'cadastro' });
    },
    entrar() {
      if (this.email === 'admin@gmail.com' && this.senha === '123456') {
        this.$router.push({ name: 'home' });
      } else {
        this.exibirMensagemErro = true;
      }
    }
  }
};
</script>

<style scoped>
.login-form {
        width: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        background-color: rgb(65,105,225);
        transform: translate(-50%,-50%);
        box-shadow: 1px 5px 10px rgb(255, 255, 255);
        border: 2px solid 	#000000;
        border-radius: 80px 0px 80px 0px;
        padding: 30px 30px;
        color: rgb(255,255,255);
}



.img-container img {
  width: 150px;
}

.botao-login {
  width: 100%;
}

.blog-title {
  text-align: left;
  color: #666;
  font-size: 16px;
  font-weight: bold;
  margin-top: 32px;
}

.esqueceu-a-senha {
  color: #1a0dab;
  cursor: pointer;
  margin-bottom: 0;
}

.no-margin-bottom,
.no-margin-bottom .input-field {
  margin-bottom: 0 !important;
}

.alert {
  position: relative;
  padding: 0.75rem 1.25rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  text-align: left;
}

.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

.botao-novo-usuario {
  background:white;
  color:#4B0082 !important;
  border: 1px solid #4B0082!important;
  font-weight: bold;
}

.botao-novo-usuario:hover {
  background:#000080 !important;
  color: white!important;
}
.enter{
  background:blue;
}
</style>