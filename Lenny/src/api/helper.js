export const storeUser = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
};


export const getUser = () => {
    const stringifieldUser = localStorage.getItem('user') || '""';
    return JSON.parse(stringifieldUser || {});
}