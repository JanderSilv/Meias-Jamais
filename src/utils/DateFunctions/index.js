const DateFunctions = {
    Format(date) {
        const options = { year: 'numeric' };
        date = date.toLocaleDateString('pt-BR', options);
        date = date.split('/');
        date = `${date[1]}/${date[0]}/${date[2]}`;
        return date;
    },
};

export default DateFunctions;
