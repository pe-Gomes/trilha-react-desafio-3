import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";


import { Container, Title, Column, LoginText, Row, Wrapper, TitleRegister, RegisteredText, SubtitleRegister } from './styles';

const Register = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try{
            const {data} = await api.post(`/users?email=${formData.email}&senha=${formData.senha}&name=${formData.name}`);
            
            if(data.length && data[0].id){
                navigate('/feed') 
                return
            }

            alert('Usuário ou senha inválido')
        }catch(e){
            throw new Error(e.message)
        }
    };

    // console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleRegister>Comece agora grátis</TitleRegister>
                <SubtitleRegister>Crie sua conta e make the change._</SubtitleRegister>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input type="text" placeholder="Nome completo" leftIcon={<MdPerson color="#8647AD" />}  name="name" control={control} />
                    {errors.name && <span>Nome completo é obrigatório</span>}
                    <Input placeholder="E-mail" leftIcon={<MdEmail color="#8647AD" />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock color="#8647AD" />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <p className="text">Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</p>
                    <div><RegisteredText>Já tenho conta.</RegisteredText>
                    <LoginText href="/login">Fazer login</LoginText></div>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Register }