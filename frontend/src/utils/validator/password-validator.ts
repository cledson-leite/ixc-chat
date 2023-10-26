export const passwordValidator= (value: string): string => {
    if (! value.trim()) return 'Campo Obrigatório'
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,32}$/
    if (!regex.test(value)){ return 'Senha incorreta'}
    return '';
}