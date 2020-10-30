<p align="center">
  <img src="https://i.ibb.co/34Sy4kf/Logo.png" style="border-radius: 15px; max-width: 350px; width: 100%">
</p><br>

Nonny é uma plataforma de anotações de atividades online que visa a simplicidade e objetividade. Trata-se de uma forma segura e simples de guardar listas de "coisas a fazer" para que não seja necessário gastar cadernos e mais cadernos nisso.

<div style="display: flex; flex-wrap: wrap; justify-content: center">
    <img src="https://i.ibb.co/Fn5GpQX/Landing.png" style="margin-bottom: 10px; width: 100%; max-width: 400px; margin-right: 10px">
</div>
    <!-- <img src="https://i.ibb.co/9H6nM57/Landing-mobile.png"> -->
<hr>

## **Recursos**

- Cadastro, Autenticação e manutenção de conta de usuário
- Criação e manutenção de listas
- Listas compartilhadas
- Fácil acesso às suas anotações
- Comentários

## **Principais tecnologias**

- Django v3.1.2

## **Setup local**

Para executar o Nonny localmente, basta primeiramente realizar o clone deste repositório:

```bash
$ git clone https://github.com/PauloE314/Nonny .
```

Depois realizar o setup de instalação do django. Para isso é necessário ter o Python 3 instalado ([clique aqui caso não o tenha](https://www.python.org/downloads/)). Esse setup na execução das seguintes linhas de código:

```bash
$ python -m venv venv
$ venv\Scripts\activate

(venv) ~$ python -m pip install --upgrade pip
(venv) ~$ pip install -r requirements.txt
(venv) ~$ python manage.py runserver
```

Ao termino de todas as instalações necessárias o projeto será executado localmente (provavelmente na porta 8000).
