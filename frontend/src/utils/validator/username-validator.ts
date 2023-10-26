export const usernameValidator = (value: string): string => {
    if (!value.trim()) return 'Campo Obrigatório'
    if (value.length > 100) return 'Nome de usuário incorreto'
    return '';
}