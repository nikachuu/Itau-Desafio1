export function currencyFormatter() {
    return new Intl.NumberFormat([], {
        style: 'currency',
        currency: 'BRL'
    });
}