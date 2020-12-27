export type TypeUser = {
    id: number;
    nome: string;
    nome_usuario: string;
    descricao: string;
    dt_criacao: string;
    dt_aniversario: string;
    figura_publica: number; // Consegue boolean naum?
    image_link: string;
    email: string;
};

export type TypeLogin = {
    token: string;
    user: TypeUser;
};
